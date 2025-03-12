export default function Hero(): React.JSX.Element {
  return (
    <section className="pt-48 pb-24">
      <div className="mb-6">
        <h1 className="text-7xl sm:text-8xl lg:text-[96px] leading-[1.21] font-light tracking-[-0.05em] text-primary">
          Hi, I&apos;m{" "}
          <span className="line-through text-muted-foreground">Muhammad</span>,
          <br />
          <span className="line-through text-muted-foreground">Usman</span>{" "}
          <span className="text-primary">Fazal</span>.
        </h1>
      </div>
      <h2 className="text-2xl lg:text-[26px] font-light text-muted-foreground">
        Software Engineer |{" "}
        <span className="text-primary">Full-Stack & Serverless Developer</span>
      </h2>
    </section>
  );
}
