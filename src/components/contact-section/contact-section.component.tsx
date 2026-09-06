import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

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
    value: "y.lamiri@proton.me",
    href: "mailto:y.lamiri@proton.me",
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

export function ContactSection(): React.JSX.Element {
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

        <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 bg-[#121317] p-6 sm:p-10 md:col-span-4">
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

          <form className="flex flex-col gap-6 bg-[#121317] p-6 sm:p-10 md:col-span-8">
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

            <button
              type="submit"
              className="mt-2 self-start border border-[#23252E] bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d0e12] transition-colors hover:bg-[#00E5FF] hover:cursor-pointer"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
