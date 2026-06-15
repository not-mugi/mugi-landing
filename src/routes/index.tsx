import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Code2, Gauge, Palette, Globe2, Layers } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mugi — Web solutions, crafted with intent" },
      { name: "description", content: "mugi is a studio designing and engineering premium web experiences for ambitious brands." },
      { property: "og:title", content: "mugi — Web solutions, crafted with intent" },
      { property: "og:description", content: "Strategy, design, and development for brands that care about the details." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-noir-grain min-h-screen text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <Nav />
        <Hero />
        <Bento />
        <Footer />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="flex items-center justify-between">
      <a href="#" className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink font-display text-lg font-bold">m</span>
        <span className="font-display text-xl font-semibold tracking-tight">mugi</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
        <a href="#services" className="hover:text-foreground transition-colors">Services</a>
        <a href="#work" className="hover:text-foreground transition-colors">Work</a>
        <a href="#process" className="hover:text-foreground transition-colors">Process</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <a
        href="#contact"
        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-4 py-2 text-sm font-medium backdrop-blur transition-colors hover:border-gold hover:text-gold"
      >
        Start a project
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="mt-16 lg:mt-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
        Now booking Q3 — 2 slots open
      </div>
      <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
        Web solutions, <br />
        <span className="text-gradient-gold italic">crafted with intent.</span>
      </h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <p className="text-lg text-muted-foreground lg:col-span-6 lg:text-xl">
          mugi is a small studio building distinguished websites, products, and brand
          systems for founders who treat the details as the work itself.
        </p>
        <div className="flex flex-wrap items-end gap-3 lg:col-span-6 lg:justify-end">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-soft"
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
          >
            View selected work
          </a>
        </div>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section id="services" className="mt-20 grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
      {/* Big feature card */}
      <div className="bento-card-gold col-span-1 row-span-2 p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between">
        <Sparkles className="h-8 w-8" strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
            End-to-end studios for brands going somewhere.
          </h3>
          <p className="mt-4 text-sm opacity-80 md:text-base">
            Strategy, identity, web, and engineering — held together by a single team
            that owns the outcome.
          </p>
        </div>
      </div>

      <BentoCard span="md:col-span-2" icon={<Code2 className="h-6 w-6 text-gold" />} title="Engineering" body="Performant builds in Next.js, Astro, and the modern web stack. Type-safe, accessible, fast." />

      <BentoCard icon={<Palette className="h-6 w-6 text-gold" />} title="Brand & UI" body="Identity systems with a point of view." />

      <BentoCard icon={<Gauge className="h-6 w-6 text-gold" />} title="Performance" body="<1s loads. 100 Lighthouse. Always." />

      {/* Stat block */}
      <div className="bento-card col-span-1 row-span-2 p-6 md:col-span-2 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Numbers</span>
          <span id="work" className="text-xs text-muted-foreground">2019 — 2026</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Stat value="60+" label="Projects shipped" />
          <Stat value="24" label="Awards & features" />
          <Stat value="98%" label="Client retention" />
        </div>
      </div>

      <BentoCard icon={<Globe2 className="h-6 w-6 text-gold" />} title="CMS & Editorial" body="Sanity, Payload, custom. Built for the team who'll run it." />

      <BentoCard icon={<Layers className="h-6 w-6 text-gold" />} title="Design Systems" body="Components, tokens, docs — a vocabulary your team can ship in." />

      {/* Process / quote */}
      <div id="process" className="bento-card col-span-1 row-span-1 p-6 md:col-span-4 flex flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl italic text-foreground/90 md:text-2xl max-w-2xl">
          "mugi shipped in eight weeks what our last agency couldn't deliver in eight months."
        </p>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gold/20 border border-gold/40" />
          <div>
            <div className="text-sm font-medium">Leïla Aron</div>
            <div className="text-xs text-muted-foreground">CEO, Foundry Labs</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  body,
  span = "",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  span?: string;
}) {
  return (
    <div className={`bento-card group p-6 flex flex-col justify-between hover:border-gold/40 hover:-translate-y-0.5 ${span}`}>
      <div className="flex items-center justify-between">
        {icon}
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold text-gradient-gold md:text-4xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mt-20 rounded-3xl border border-border bg-card/40 p-8 md:p-14">
      <div className="grid gap-10 md:grid-cols-2 md:items-end">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            Have something in <span className="text-gradient-gold italic">mind?</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us about the project. We respond within one business day.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="mailto:withzues@gmail.com"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-gold px-6 py-4 text-base font-semibold text-ink transition-colors hover:bg-gold-soft md:self-end"
          >
            hello@mugi.group
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </a>
          <div className="text-sm text-muted-foreground">Lisbon · Remote worldwide</div>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} mugi studio. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gold">Instagram</a>
          <a href="#" className="hover:text-gold">LinkedIn</a>
          <a href="#" className="hover:text-gold">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}