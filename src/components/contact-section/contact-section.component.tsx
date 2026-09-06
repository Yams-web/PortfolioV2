"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

type TContactSubmitStatus = "idle" | "loading" | "success" | "error";

interface IContactFormField {
  id: string;
  name: string;
  label: string;
  type: "text" | "email";
  placeholder: string;
  required: boolean;
}

interface IContactInfoItem {
  label: string;
  value: string;
  href: string;
}

interface ISocialLink {
  label: string;
  href: string;
  icon: typeof Mail;
}

const CONTACT_FORM_FIELDS: IContactFormField[] = [
  {
    id: "contact-name",
    name: "name",
    label: "Nom",
    type: "text",
    placeholder: "Votre nom",
    required: true,
  },
  {
    id: "contact-email",
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "vous@exemple.com",
    required: true,
  },
  {
    id: "contact-subject",
    name: "subject",
    label: "Sujet",
    type: "text",
    placeholder: "Objet de votre message",
    required: false,
  },
];

const CONTACT_INFO_ITEMS: IContactInfoItem[] = [
  {
    label: "Email",
    value: "yaminlamiri00@gmail.com",
    href: "mailto:yaminlamiri00@gmail.com",
  },
];

const SOCIAL_LINKS: ISocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yamin-lamiri-8003a7314/",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Yams-web", icon: Github },
];

const STATUS_MESSAGE_BY_STATUS: Record<TContactSubmitStatus, string> = {
  idle: "",
  loading: "",
  success: "Votre message a bien été envoyé, merci !",
  error:
    "L'envoi a échoué. Merci de réessayer ou de m'écrire directement par email.",
};

const SUBMIT_LABEL_BY_STATUS: Record<TContactSubmitStatus, string> = {
  idle: "Envoyer le message",
  loading: "Envoi en cours...",
  success: "Message envoyé",
  error: "Réessayer",
};

export function ContactSection(): React.JSX.Element {
  const [status, setStatus] = useState<TContactSubmitStatus>("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const form: HTMLFormElement = event.currentTarget;
    const formData: FormData = new FormData(form);

    setStatus("loading");

    try {
      const response: Response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("request-failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#23252E] bg-[#0d0e12] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00E5FF]">
            {"// Contact"}
          </h2>
          <p className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Me contacter
          </p>
          <p className="mt-4 text-base leading-[1.7] text-[#c4c7c8] sm:text-lg">
            Une question, une opportunité, ou simplement envie d&apos;échanger :
            n&apos;hésitez pas à me contacter.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 bg-[#121317] p-6 sm:p-10 lg:col-span-4">
            <div className="flex flex-col gap-6">
              {CONTACT_INFO_ITEMS.map((item: IContactInfoItem) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 text-[#c4c7c8] transition-colors hover:text-white"
                >
                  <Mail
                    aria-hidden="true"
                    size={18}
                    className="mt-1 flex-shrink-0"
                  />
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]/60">
                      {item.label}
                    </span>
                    <span className="text-base sm:text-lg">{item.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 border-t border-[#23252E] pt-6">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center border border-[#23252E] text-[#c4c7c8] transition-colors hover:border-[#00E5FF] hover:text-[#00E5FF]"
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-[#121317] p-6 sm:p-10 lg:col-span-8"
          >
            {CONTACT_FORM_FIELDS.map((field: IContactFormField) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label
                  htmlFor={field.id}
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]"
                >
                  {field.label}
                  {field.required ? " *" : null}
                </label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="border border-[#23252E] bg-[#0d0e12] px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-[#c4c7c8]/50 focus:border-[#00E5FF]"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Votre message"
                required
                className="resize-none border border-[#23252E] bg-[#0d0e12] px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-[#c4c7c8]/50 focus:border-[#00E5FF]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="border border-[#23252E] bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d0e12] transition-colors hover:cursor-pointer hover:bg-[#00E5FF] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {SUBMIT_LABEL_BY_STATUS[status]}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status === "error" ? "text-red-400" : "text-[#c4c7c8]"
                }`}
              >
                {STATUS_MESSAGE_BY_STATUS[status]}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
