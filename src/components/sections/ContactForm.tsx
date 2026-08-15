"use client";

import { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormValues {
  name:    string;
  phone:   string;
  email:   string;
  message: string;
}

interface FormErrors {
  name?:    string;
  phone?:   string;
  email?:   string;
  message?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

// ─── Validation ───────────────────────────────────────────────────────────────
function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+]?[\d\s\-().]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

// ─── Shared field styles ──────────────────────────────────────────────────────
const inputBase =
  "w-full bg-white/[0.04] border rounded-[2px] px-4 py-3 text-sm text-primary-white " +
  "placeholder:text-primary-gray/30 font-light leading-relaxed " +
  "focus:outline-none transition-colors duration-300 " +
  "focus-visible:ring-2 focus-visible:ring-primary-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary-black";

const inputNormal  = "border-white/[0.08] focus:border-primary-gold/40";
const inputInvalid = "border-red-500/60 focus:border-red-500/60";

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[10px] tracking-[0.2em] uppercase text-primary-gray/50 font-light"
      >
        {label} <span className="text-primary-gold/60" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[11px] text-red-400/90 font-light mt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
const EMPTY: FormValues = { name: "", phone: "", email: "", message: "" };

export function ContactForm() {
  const uid     = useId();
  const id      = (name: string) => `${uid}-${name}`;

  const [values,  setValues]  = useState<FormValues>(EMPTY);
  const [errors,  setErrors]  = useState<FormErrors>({});
  // Only show error for a field once the user has touched/blurred it
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [status,  setStatus]  = useState<Status>("idle");

  // ── Handlers ──────────────────────────────────────────────────────────────
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Re-validate live only after first touch
    if (touched[name as keyof FormValues]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof FormValues;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, ...validate(values) }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Mark all fields touched and validate
    setTouched({ name: true, phone: true, email: true, message: true });
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      // ── Placeholder: swap this block for a real API call later ─────────────
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      // ─────────────────────────────────────────────────────────────────────

      setStatus("success");
      setValues(EMPTY);
      setErrors({});
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  // Reset from success / error so user can re-submit
  function handleReset() {
    setStatus("idle");
  }

  // ── Derived ───────────────────────────────────────────────────────────────
  const isSubmitting = status === "submitting";

  // Only surface an error for a field that has been touched
  function fieldError(name: keyof FormValues) {
    return touched[name] ? errors[name] : undefined;
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="mt-14 md:mt-16 pt-10 border-t border-white/[0.05]">

      {/* Sub-eyebrow */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-px bg-primary-gold/50" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-primary-gold/70 font-light">
          Send an Enquiry
        </span>
      </div>

      {/* ── Success state ── */}
      {status === "success" && (
        <div
          role="alert"
          className="rounded-[2px] border border-primary-gold/25 bg-primary-gold/[0.05] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <p className="font-serif text-primary-gold text-base mb-1">Enquiry Received</p>
            <p className="text-[13px] text-primary-gray/70 font-light leading-relaxed">
              Thank you! We have received your enquiry and will contact you shortly.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="shrink-0 text-[11px] tracking-[0.15em] uppercase text-primary-gold/60 hover:text-primary-gold transition-colors duration-300 underline underline-offset-4"
          >
            Send Another
          </button>
        </div>
      )}

      {/* ── Error state ── */}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-[2px] border border-red-500/30 bg-red-500/[0.04] p-5 flex items-start justify-between gap-4 mb-6"
        >
          <p className="text-[13px] text-red-400/80 font-light leading-relaxed">
            Something went wrong. Please try again or call us directly at{" "}
            <a href="tel:+918002220084" className="text-primary-gold/70 hover:text-primary-gold transition-colors">
              +91 80022 20084
            </a>
            .
          </p>
          <button
            onClick={handleReset}
            aria-label="Dismiss error"
            className="shrink-0 text-primary-gray/30 hover:text-primary-gray/60 transition-colors text-lg leading-none mt-0.5"
          >
            ×
          </button>
        </div>
      )}

      {/* ── Form ── */}
      {status !== "success" && (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact enquiry form"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {/* Full Name */}
          <Field id={id("name")} label="Full Name" error={fieldError("name")}>
            <input
              id={id("name")}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Raj Kumar"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              aria-invalid={!!fieldError("name")}
              aria-describedby={fieldError("name") ? `${id("name")}-err` : undefined}
              className={cn(inputBase, fieldError("name") ? inputInvalid : inputNormal)}
            />
          </Field>

          {/* Phone */}
          <Field id={id("phone")} label="Phone Number" error={fieldError("phone")}>
            <input
              id={id("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +91 98765 43210"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              aria-invalid={!!fieldError("phone")}
              aria-describedby={fieldError("phone") ? `${id("phone")}-err` : undefined}
              className={cn(inputBase, fieldError("phone") ? inputInvalid : inputNormal)}
            />
          </Field>

          {/* Email — full width */}
          <div className="sm:col-span-2">
            <Field id={id("email")} label="Email Address" error={fieldError("email")}>
              <input
                id={id("email")}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="e.g. raj@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={!!fieldError("email")}
                aria-describedby={fieldError("email") ? `${id("email")}-err` : undefined}
                className={cn(inputBase, fieldError("email") ? inputInvalid : inputNormal)}
              />
            </Field>
          </div>

          {/* Message — full width */}
          <div className="sm:col-span-2">
            <Field id={id("message")} label="Message" error={fieldError("message")}>
              <textarea
                id={id("message")}
                name="message"
                rows={4}
                placeholder="Tell us about your plot preference, budget or any questions…"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                aria-invalid={!!fieldError("message")}
                aria-describedby={fieldError("message") ? `${id("message")}-err` : undefined}
                className={cn(
                  inputBase,
                  "resize-none",
                  fieldError("message") ? inputInvalid : inputNormal,
                )}
              />
            </Field>
          </div>

          {/* Submit row */}
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
            <Button
              type="submit"
              variant="gold"
              size="lg"
              disabled={isSubmitting}
              className="h-14 px-12 min-w-[180px]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  {/* Minimal spinner */}
                  <span
                    className="inline-block w-3.5 h-3.5 border-2 border-primary-black/30 border-t-primary-black rounded-full animate-spin"
                    aria-hidden="true"
                  />
                  Sending…
                </span>
              ) : (
                "Send Enquiry"
              )}
            </Button>
            <p className="text-[11px] text-primary-gray/30 font-light leading-relaxed">
              We typically respond within 24 hours.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
