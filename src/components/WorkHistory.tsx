import type { WorkHistoryProps } from "../types";

const labelKicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted";

const WorkHistory = ({ items }: WorkHistoryProps) => (
  <section
    id="work"
    className="border-y border-rule bg-panel py-[72px] sm:py-[96px]"
  >
    <div className="mx-auto max-w-[1080px] px-[max(1.5rem,5vw)]">
      <div className="mb-12 grid grid-cols-1 items-baseline gap-6 md:grid-cols-[220px_1fr] md:gap-16">
        <div className={labelKicker}>02 — Work</div>
        <h2 className="m-0 max-w-[640px] text-[40px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
          A path from lab to launch
        </h2>
      </div>

      <ol className="m-0 list-none p-0">
        {items.map((w) => (
          <li
            key={w.id}
            className="grid grid-cols-[1fr_auto] items-baseline gap-6 border-t border-rule py-6 md:grid-cols-[220px_1fr_auto] md:gap-16"
          >
            <div className="font-mono text-[13px] tracking-[0.04em] text-muted md:order-1">
              {w.period}
            </div>
            <div className="col-span-2 md:col-span-1 md:order-2">
              <div className="text-[22px] font-medium leading-[1.25] tracking-[-0.015em] text-ink">
                {w.org}
              </div>
            </div>
            <div className="font-mono text-[13px] tracking-[0.02em] text-body md:order-3 md:whitespace-nowrap">
              {w.role}
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WorkHistory;
