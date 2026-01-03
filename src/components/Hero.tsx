export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Building the{" "}
            <span className="bg-gradient-to-r from-ocean via-violet to-sky bg-clip-text text-transparent">
              future
            </span>
            {" "}of web
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Full-stack developer crafting beautiful, performant web experiences
            with modern technologies.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-ocean text-white rounded-lg hover:bg-ocean/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-ocean text-ocean rounded-lg hover:bg-ocean/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
