export default function About() {
  const techStack = [
    'TypeScript', 'Python', 'Java', 'FastAPI', 'Next.js', 'React',
    'PostgreSQL', 'MongoDB', 'Terraform', 'GitHub Actions OIDC',
    'Docker', 'AWS', 'Azure', 'OAuth 2.0/PKCE', 'SQS', 'Kafka'
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Backend engineer specializing in distributed backend systems and platform engineering
              on AWS and Azure — IAM platforms, event-driven data pipelines, and multi-tenant
              environments. Focused on clean service boundaries, secure defaults, and keeping
              systems simple enough for the next engineer to extend.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Interests & Passions</h4>
              <p className="text-muted-foreground leading-relaxed">
                Deeply passionate about <span className="text-ocean font-medium">Mathematics</span>,
                particularly <span className="text-ocean font-medium">Linear Algebra</span> and its
                applications in machine learning and data science. I've completed extensive coursework
                including Linear Algebra, Numerical Linear Algebra, and related mathematical foundations
                that power modern AI systems.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-background border border-ocean/20 rounded-full text-sm hover:border-ocean/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
