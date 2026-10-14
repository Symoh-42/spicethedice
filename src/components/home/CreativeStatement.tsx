import RevealText from "../ui/RevealText";

export default function CreativeStatement() {
  return (
    <section className="relative overflow-hidden bg-near-black py-32 md:py-48">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,35,60,0.1), transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
        <RevealText
          lines={["We don't just", "capture moments."]}
          className="font-heading text-4xl font-medium uppercase leading-[1.05] tracking-tight text-muted sm:text-5xl md:text-6xl"
        />
        <RevealText
          lines={["We build worlds", "around them."]}
          delay={0.3}
          className="mt-2 font-heading text-4xl font-medium uppercase leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl"
        />
      </div>
    </section>
  );
}
