import React, { useEffect, useState } from "react";

type Variant = "dark" | "light" | "outline" | "muted";

type Props = {
  value: string;
  ariaLabel?: string;
  variant?: Variant;
  size?: "sm" | "md";
  showLabel?: boolean;
};

const variantMap: Record<Variant, string> = {
  dark: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-600",
  light:
    "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300",
  outline:
    "bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300",
  muted:
    "bg-transparent text-gray-300 hover:focus:ring-1 hover:focus:ring-gray-100",
};

const sizeMap: Record<"sm" | "md", string> = {
  sm: "p-1 rounded-full",
  md: "p-2 rounded-full",
};

export const CopyButton: React.FC<Props> = ({
  value,
  ariaLabel,
  variant = "outline",
  size = "md",
  showLabel = false,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement("textarea");
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
    } catch (e) {}
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        aria-label={ariaLabel ?? `Copiar ${value}`}
        className={`inline-flex items-center justify-center ${sizeMap[size]} ${variantMap[variant]} transition-colors duration-100 focus:outline-none`}
      >
        <span className="sr-only">{ariaLabel ?? `Copiar ${value}`}</span>
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </button>

      {showLabel && (
        <span
          className={`text-sm ${variant === "dark" ? "text-white" : "text-gray-700"}`}
        >
          {copied ? "Copiado" : "Copiar"}
        </span>
      )}

      <span aria-live="polite" className="sr-only">
        {copied ? "Copiado" : ""}
      </span>
    </div>
  );
};
