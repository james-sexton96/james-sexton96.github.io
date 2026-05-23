import { SITE } from "../data";

const ghost =
  "inline-flex items-center gap-2 rounded-full border border-rule px-4 py-[10px] text-[13px] font-medium text-ink no-underline transition-colors hover:border-ink/40";

const cta =
  "inline-flex items-center gap-2 rounded-full border border-transparent bg-accent px-4 py-[10px] text-[13px] font-medium text-night no-underline transition-opacity hover:opacity-90";

const HeroSection = () => (
  <header
    id="top"
    className="mx-auto max-w-[1080px] px-[max(1.5rem,5vw)] pt-[100px] pb-[80px] sm:pt-[120px]"
  >
    <div className="mb-8 inline-flex items-center gap-[10px] rounded-full border border-rule bg-panel px-3 py-[6px] text-xs text-muted">
      <span className="h-[6px] w-[6px] rounded-full bg-accent" />
      {SITE.location}
    </div>

    <h1 className="m-0 max-w-[880px] text-balance text-[clamp(48px,6vw,80px)] font-medium leading-[1.02] tracking-[-0.035em] text-ink">
      {SITE.name}
    </h1>

    <p className="mt-8 max-w-[620px] text-[19px] leading-[1.55] text-body">
      {SITE.tagline}
    </p>

    <div className="mt-10 flex flex-wrap gap-3">
      <a href="#pubs" className={cta}>
        Read publications
        <span className="text-base">→</span>
      </a>
      <a href={SITE.links.scholar} target="_blank" rel="noopener noreferrer" className={ghost}>Google Scholar</a>
      <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer" className={ghost}>LinkedIn</a>
      <a href={SITE.links.github} target="_blank" rel="noopener noreferrer" className={ghost}>GitHub</a>
    </div>
  </header>
);

export default HeroSection;
