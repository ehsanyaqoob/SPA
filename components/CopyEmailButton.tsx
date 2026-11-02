"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { contact } from "@/site.config";

export default function CopyEmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Clipboard access was refused, so the email link remains the way to reach out.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={isCopied ? "Email copied" : "Copy email"}
      title={isCopied ? "Copied" : "Copy email"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}
