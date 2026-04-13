import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Andrew Swan about learning architecture, AI integration, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal grain overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-500">
            Contact
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-stone-50 sm:text-4xl">
            Let&rsquo;s Build Something{" "}
            <span className="italic text-stone-400">Together</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-400">
            Whether you&rsquo;re looking for a Learning Architect to transform
            your team&rsquo;s capabilities or want to discuss the future of
            learning technology, I&rsquo;d love to connect.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-xl">
          {/* Direct links */}
          <div className="grid gap-px bg-border sm:grid-cols-2">
            <a
              href={`mailto:${SITE.email}`}
              className="group bg-background p-7 transition-colors hover:bg-stone-100"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
                Email
              </p>
              <p className="mt-2 text-base text-ink group-hover:text-cobalt transition-colors">
                {SITE.email}
              </p>
            </a>

            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-7 transition-colors hover:bg-stone-100"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cobalt">
                LinkedIn
              </p>
              <p className="mt-2 text-base text-ink group-hover:text-cobalt transition-colors">
                Connect with me
              </p>
            </a>
          </div>

          <hr className="rule my-12" />

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-ink">Send a Message</h2>
            <form
              action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID || "xplaceholder"}`}
              method="POST"
              className="mt-8 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.15em] text-ink"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 block w-full border-b-2 border-stone-200 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone-400 focus:border-cobalt focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.15em] text-ink"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full border-b-2 border-stone-200 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone-400 focus:border-cobalt focus:outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.15em] text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full border-b-2 border-stone-200 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone-400 focus:border-cobalt focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center bg-ink px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-stone-50 transition-all hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
