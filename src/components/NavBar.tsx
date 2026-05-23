import Link from "next/link";
import BrandMark from "./BrandMark";
import { SITE } from "../data";

const NAV = [
  { href: "#about",   label: "About" },
  { href: "#work",    label: "Work" },
  { href: "#pubs",    label: "Publications" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => (
  <header className="sticky top-0 z-10 border-b border-rule bg-night/80 backdrop-blur-md backdrop-saturate-150">
    <div className="flex items-center justify-between px-[max(1.5rem,5vw)] py-4">
      <Link href="#top" className="flex items-center gap-[10px] no-underline">
        <BrandMark />
        <span className="text-sm font-medium text-ink">{SITE.name}</span>
      </Link>
      <nav className="hidden gap-7 sm:flex">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="text-[13px] tracking-[0.01em] text-body transition-colors hover:text-ink"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

export default NavBar;
