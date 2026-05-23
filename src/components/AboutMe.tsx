import Image from "next/image";
import { SITE } from "../data";

const labelKicker =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted";

const AboutMe = () => (
  <section
    id="about"
    className="mx-auto max-w-[1080px] px-[max(1.5rem,5vw)] pb-[80px]"
  >
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-16">
      <div>
        <div className={`${labelKicker} mb-5`}>01 — About</div>
        <div className="overflow-hidden rounded-xl border border-rule bg-panel">
          <Image
            src={SITE.portrait}
            alt={`Portrait of ${SITE.fullName}`}
            width={360}
            height={440}
            className="block h-[220px] w-full object-cover"
            priority
          />
        </div>
      </div>

      <div>
        <h2 className="m-0 mb-6 max-w-[640px] text-[40px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
          A passion for patients
          <br />
          reaching back to the basic science
        </h2>

        <div className="grid max-w-[760px] grid-cols-1 gap-9 md:grid-cols-2">
          <p className="m-0 leading-[1.65] text-body">
            I started my career in academic neuroscience — specializing in
            brain imaging work at Imperial College London and UAB. Four
            papers, one in <span className="text-ink">Nature Medicine</span>.
          </p>
          <p className="m-0 leading-[1.65] text-body">
            I moved into industry to help build out the data side of an early
            clinical-stage startup. Since then I&apos;ve worked across data
            science and commercial analytics for companies bringing new
            psychiatric therapeutics to market.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-7 font-mono text-[13px] text-muted">
          <span><span className="text-accent">◆</span> cyclist</span>
          <span><span className="text-accent">◆</span> musician</span>
          <span><span className="text-accent">◆</span> backpacker</span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
