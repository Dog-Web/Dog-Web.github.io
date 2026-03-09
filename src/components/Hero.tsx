import DoublePendulum from './DoublePendulum';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[80vh] flex items-center">
      {/* Physics animation background */}
      <DoublePendulum />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left side */}
          <div className="max-w-3xl">
            <div className="mb-4 opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-ocean/10 text-ocean rounded-full text-sm font-medium">
                Backend Platform Engineer | Distributed Systems | AWS · Azure | AZ-204
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
              Building{" "}
              <span className="bg-gradient-to-r from-ocean via-violet to-sky bg-clip-text text-transparent animate-gradient">
                AI-powered
              </span>
              {" "}solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-200">
              Backend engineer with 3 years of experience building multi-tenant platforms, identity systems,
              and data pipelines on AWS and Azure. Owned greenfield systems end-to-end — from data modelling
              and API design to infrastructure-as-code and CI/CD. Currently leading a team in Amsterdam.
            </p>
            <div className="flex gap-4 opacity-0 animate-fade-in-up delay-300">
              <a
                href="#projects"
                className="px-6 py-3 bg-ocean text-white rounded-lg hover:bg-ocean/90 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-ocean text-ocean rounded-lg hover:bg-ocean/10 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side - Space for pendulum animation to shine */}
          <div className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in delay-400">
        
          </div>
        </div>
      </div>
    </section>
  );
}
