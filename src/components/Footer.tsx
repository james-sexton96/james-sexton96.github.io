import { SITE } from "../data";

const Footer = () => (
  <footer className="mx-auto max-w-[1080px] border-t border-rule px-[max(1.5rem,5vw)] py-8">
    <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[12px] tracking-[0.04em] text-muted">
      <span>© {new Date().getFullYear()} {SITE.fullName}</span>
      <span className="flex items-center gap-2">
        <span className="h-[6px] w-[6px] rounded-full bg-accent" />
        {SITE.domain}
      </span>
    </div>
  </footer>
);

export default Footer;
