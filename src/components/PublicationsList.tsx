import React from "react";
import type { PublicationsListProps } from "../types";
import { SITE } from "../data";

const labelKicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted";

// Abbreviate "James D Sexton" → "J. D. Sexton" so a single name reads compactly.
const abbreviateName = (fullName: string): string => {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length < 2) return fullName;
  const last = parts.pop() as string;
  const initials = parts.map((p) => `${p.charAt(0).toUpperCase()}.`).join(" ");
  return `${initials} ${last}`;
};

const renderAuthors = (authors: string, nameToBold: string) => {
  const abbrBold = abbreviateName(nameToBold);
  const abbreviated = authors
    .split(",")
    .map((a) => abbreviateName(a.trim()))
    .join(", ");
  const segments = abbreviated.split(abbrBold);
  if (segments.length <= 1) return abbreviated;
  return segments.map((seg, i) => (
    <React.Fragment key={i}>
      {seg}
      {i < segments.length - 1 && (
        <strong className="font-semibold text-ink">{abbrBold}</strong>
      )}
    </React.Fragment>
  ));
};

const PublicationsList = ({ publications }: PublicationsListProps) => (
  <section
    id="pubs"
    className="mx-auto max-w-[1080px] px-[max(1.5rem,5vw)] py-[80px] sm:py-[112px]"
  >
    <div className="mb-12 grid grid-cols-1 items-baseline gap-6 md:grid-cols-[220px_1fr] md:gap-16">
      <div className={labelKicker}>03 — Publications</div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="m-0 text-[40px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
          Selected work
        </h2>
        <a
          href={SITE.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[13px] text-accent no-underline hover:underline"
        >
          All on Google Scholar <span>→</span>
        </a>
      </div>
    </div>

    <ol className="m-0 list-none p-0">
      {publications.map((p) => {
        let meta = "";
        if (p.volume) meta += `${p.volume}`;
        if (p.issue) meta += `(${p.issue})`;
        if (p.pages) meta += `${meta ? ", " : ""}${p.pages}`;

        return (
          <li
            key={p.id}
            className="grid grid-cols-1 items-baseline gap-4 border-t border-rule py-7 md:grid-cols-[100px_1fr_200px] md:gap-16"
          >
            <div className="font-mono text-[13px] text-accent">{p.year}</div>
            <div>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline"
              >
                <h3 className="m-0 mb-3 text-[20px] font-medium leading-[1.3] tracking-[-0.01em] text-ink text-pretty transition-colors hover:text-accent">
                  {p.title}
                </h3>
              </a>
              <p className="m-0 text-[13px] leading-[1.55] text-body">
                {renderAuthors(p.authors, "James D Sexton")}
              </p>
            </div>
            <div className="text-[12px] text-muted md:text-right">
              <div className="text-[13px] text-ink">{p.journal}</div>
              {meta && <div className="mt-1 font-mono">{meta}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  </section>
);

export default PublicationsList;
