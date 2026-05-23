import { SITE } from "../data";

const labelKicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted";

const cta =
  "inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-4 py-[10px] text-[13px] font-medium text-night no-underline transition-opacity hover:opacity-90";

const ghost =
  "inline-flex items-center gap-2 rounded-full border border-rule px-4 py-[10px] text-[13px] font-medium text-ink no-underline transition-colors hover:border-ink/40";

const ContactSection = () => (
  <section
    id="contact"
    className="border-t border-rule bg-panel py-[80px] sm:py-[112px]"
  >
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-baseline gap-10 px-[max(1.5rem,5vw)] md:grid-cols-[220px_1fr] md:gap-16">
      <div className={labelKicker}>04 — Contact</div>
      <div>
        <h2 className="m-0 mb-6 max-w-[640px] text-[40px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
          Get in touch
        </h2>
        <p className="m-0 mb-8 max-w-[560px] text-[17px] leading-[1.6] text-body">
          Best on LinkedIn. I&apos;m slow to reply to recruiter outreach,
          quick to reply to anything involving bringing better options to
          patients, real-world evidence, commercial data.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={SITE.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cta}
          >
            LinkedIn
            <span className="text-base">→</span>
          </a>
          <a
            href={SITE.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={ghost}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
