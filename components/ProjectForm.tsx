"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Loader2, X } from "lucide-react";
import { SketchCorners } from "@/components/Sketch";
import { contact, contactSection } from "@/site.config";

type Status = "idle" | "sending" | "sent" | "mail" | "failed";

const emptyFields = { name: "", email: "", message: "", timeline: "", budget: "" };

const labelClass = "mb-2 block text-sm font-medium text-gray-300";
const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-base outline-none transition-colors placeholder:text-gray-500 focus:border-white/40";

function SelectField({
  id,
  label,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${fieldClass} appearance-none pr-11 ${value ? "" : "text-gray-400"}`}
        >
          <option value="" disabled>
            {contactSection.selectPlaceholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}

export default function ProjectForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [fields, setFields] = useState(emptyFields);
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const setField = (name: keyof typeof emptyFields) => (value: string) =>
    setFields((current) => ({ ...current, [name]: value }));

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const handleClosed = () => {
    document.body.style.overflow = "";
    if (status === "sent" || status === "mail") {
      setFields(emptyFields);
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botcheck) return;

    const details = {
      [contactSection.nameLabel]: fields.name,
      [contactSection.emailLabel]: fields.email,
      [contactSection.messageLabel]: fields.message,
      [contactSection.timelineLabel]: fields.timeline,
      [contactSection.budgetLabel]: fields.budget,
    };

    // Without a form key, the visitor's own mail app sends the details.
    if (!contactSection.formKey) {
      const body = Object.entries(details)
        .map(([label, value]) => `${label}: ${value}`)
        .join("\n\n");
      window.location.href = `${contact.mailto}?subject=${encodeURIComponent(contactSection.emailSubject)}&body=${encodeURIComponent(body)}`;
      setStatus("mail");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(contactSection.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contactSection.formKey,
          subject: contactSection.emailSubject,
          from_name: fields.name,
          // Web3Forms uses this field as the reply-to address.
          email: fields.email,
          ...details,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="-rotate-2 rounded-full border-2 border-blue-300/70 bg-accent px-10 py-5 font-display text-3xl font-semibold tracking-tight text-white shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3),0_9px_0_0_rgb(30_58_138),0_0_70px_-6px_rgba(59,130,246,0.75)] transition-all duration-150 hover:rotate-0 hover:bg-blue-500 active:translate-y-2 active:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.3),0_1px_0_0_rgb(30_58_138),0_0_40px_-6px_rgba(59,130,246,0.75)] sm:px-14 sm:py-6 sm:text-5xl"
      >
        {contactSection.startAction}
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClosed}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-labelledby="project-form-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[2rem] border border-white/10 bg-surface p-0 text-left text-ink shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-10">
          <span className="text-blue-400">
            <SketchCorners className="inset-3" />
          </span>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label={contactSection.closeLabel}
            title={contactSection.closeLabel}
            className="absolute right-5 top-5 z-10 rounded-full border border-white/15 p-2.5 text-gray-300 transition-colors hover:border-white hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>

          {status === "sent" || status === "mail" ? (
            <div role="status" className="py-10 pr-6 sm:py-14">
              <p className="font-hand text-3xl text-blue-400">{contactSection.sentNote}</p>
              <h3 id="project-form-title" className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {status === "sent" ? contactSection.sentTitle : contactSection.mailTitle}
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                {status === "sent" ? (
                  <>
                    {contactSection.sentText} <span className="font-semibold text-white">{fields.email}</span>.
                  </>
                ) : (
                  contactSection.mailText
                )}
              </p>
            </div>
          ) : (
            <>
              <p className="pl-4 font-hand text-3xl text-blue-400">{contactSection.formNote}</p>
              <h3 id="project-form-title" className="mt-1 pr-10 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {contactSection.formTitle}
              </h3>
              <p className="mt-3 text-gray-300">{contactSection.formIntro}</p>

              <form onSubmit={handleSubmit} className="mt-7 grid gap-5 sm:grid-cols-2">
                {/* Hidden from people, and bots that fill it in are ignored. */}
                <input
                  type="checkbox"
                  checked={botcheck}
                  onChange={(e) => setBotcheck(e.target.checked)}
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label htmlFor="project-name" className={labelClass}>
                    {contactSection.nameLabel}
                  </label>
                  <input
                    id="project-name"
                    required
                    autoComplete="name"
                    value={fields.name}
                    onChange={(e) => setField("name")(e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="project-email" className={labelClass}>
                    {contactSection.emailLabel}
                  </label>
                  <input
                    id="project-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => setField("email")(e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="project-message" className={labelClass}>
                    {contactSection.messageLabel}
                  </label>
                  <textarea
                    id="project-message"
                    required
                    rows={3}
                    maxLength={2000}
                    value={fields.message}
                    onChange={(e) => setField("message")(e.target.value)}
                    placeholder={contactSection.messagePlaceholder}
                    className={`${fieldClass} resize-y`}
                  />
                </div>
                <SelectField
                  id="project-timeline"
                  label={contactSection.timelineLabel}
                  options={contactSection.timelineOptions}
                  value={fields.timeline}
                  onChange={setField("timeline")}
                />
                <SelectField
                  id="project-budget"
                  label={contactSection.budgetLabel}
                  options={contactSection.budgetOptions}
                  value={fields.budget}
                  onChange={setField("budget")}
                />

                {status === "failed" && (
                  <p role="alert" className="text-sm text-red-300 sm:col-span-2">
                    {contactSection.failure}{" "}
                    <a href={contact.mailto} className="font-semibold underline underline-offset-2">
                      {contact.email}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-lg font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-2"
                >
                  {contactSection.sendLabel}
                  {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUpRight className="h-5 w-5" />}
                </button>
              </form>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
