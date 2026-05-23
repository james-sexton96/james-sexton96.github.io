/**
 * Network glyph — three small nodes connected by hairlines.
 * Quiet nod to neuroimaging without being literal.
 */
const BrandMark = () => (
  <svg
    width="28"
    height="22"
    viewBox="0 0 28 22"
    aria-label="James Sexton"
    role="img"
    className="shrink-0"
  >
    <line x1="5"  y1="5"  x2="14" y2="17" stroke="var(--color-muted)" strokeWidth="0.8" />
    <line x1="14" y1="17" x2="23" y2="7"  stroke="var(--color-muted)" strokeWidth="0.8" />
    <line x1="5"  y1="5"  x2="23" y2="7"  stroke="var(--color-muted)" strokeWidth="0.8" opacity="0.5" />
    <circle cx="5"  cy="5"  r="2.4" fill="var(--color-accent)" />
    <circle cx="23" cy="7"  r="2.4" fill="var(--color-ink)" />
    <circle cx="14" cy="17" r="2.4" fill="var(--color-ink)" />
  </svg>
);

export default BrandMark;
