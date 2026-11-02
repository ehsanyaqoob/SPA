"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUp, Loader2 } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { SketchCorners } from "@/components/Sketch";
import { availability, contact, contactSection, person } from "@/site.config";

const visitorBubble = "ml-auto w-fit max-w-[85%] whitespace-pre-wrap break-words rounded-[1.25rem] rounded-br-md bg-accent px-4 py-2.5";
const ownerBubble = "w-fit max-w-[85%] rounded-[1.25rem] rounded-bl-md bg-white/10 px-4 py-2.5";

type Status = "idle" | "sending" | "sent" | "failed";

function mailtoUrl(message: string) {
  const subject = encodeURIComponent(contactSection.emailSubject);
  return `${contact.mailto}?subject=${subject}&body=${encodeURIComponent(message)}`;
}

export default function ContactChat() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botcheck) return;

    // Without a form key, the visitor's own mail app sends the message.
    if (!contactSection.formKey) {
      window.location.href = mailtoUrl(message);
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
          from_name: "Portfolio contact form",
          email,
          message,
        }),
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <div className="relative rounded-3xl bg-black/70 p-5 text-blue-400 backdrop-blur-sm sm:p-7">
      <SketchCorners />

      <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-ink">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image src={person.photo} alt="" fill sizes="44px" className="object-cover object-[50%_25%]" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{person.firstName}</p>
          <p className="text-sm text-muted">{person.location}</p>
        </div>
      </div>

      <div aria-live="polite" className="space-y-2 py-6 text-[15px] leading-snug text-white sm:text-base">
        {availability.open && (
          <>
            <p className={visitorBubble}>{contactSection.question}</p>
            <p className={ownerBubble}>{availability.pitch}</p>
          </>
        )}
        <p className={ownerBubble}>{contactSection.prompt}</p>
        {status === "sent" && (
          <>
            <p className={visitorBubble}>{message}</p>
            <p className={ownerBubble}>{contactSection.confirmation}</p>
          </>
        )}
        {status === "failed" && <p className={ownerBubble}>{contactSection.failure}</p>}
      </div>

      {status !== "sent" && (
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/15 bg-black/40 text-ink transition-colors focus-within:border-white/40"
        >
          {/* Hidden from people, and bots that fill it in are ignored. */}
          <input
            type="checkbox"
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
            tabIndex={-1}
            aria-hidden="true"
            className="hidden"
          />
          <label htmlFor="contact-email" className="sr-only">
            {contactSection.emailPlaceholder}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={contactSection.emailPlaceholder}
            className="w-full border-b border-white/10 bg-transparent px-4 py-3 text-base outline-none placeholder:text-gray-500"
          />
          <div className="flex items-end gap-2 p-2 pl-4">
            <label htmlFor="contact-message" className="sr-only">
              {contactSection.messagePlaceholder}
            </label>
            <textarea
              id="contact-message"
              required
              rows={2}
              maxLength={2000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={contactSection.messagePlaceholder}
              className="min-w-0 flex-1 resize-none bg-transparent py-1 text-base outline-none placeholder:text-gray-500"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              aria-label={contactSection.sendLabel}
              title={contactSection.sendLabel}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowUp className="h-5 w-5" />}
            </button>
          </div>
        </form>
      )}

      <div className="mt-3 flex items-center justify-center gap-1 text-sm text-muted">
        <span className="hidden whitespace-nowrap sm:inline">{contactSection.directLabel}</span>
        <a href={mailtoUrl("")} className="truncate font-medium text-gray-300 hover:text-white hover:underline">
          {contact.email}
        </a>
        <CopyEmailButton />
      </div>
    </div>
  );
}
