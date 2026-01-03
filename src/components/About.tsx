export default function About() {
  const techStack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'];

  return (
    <section id="about" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Passionate developer with expertise in modern web technologies.
              I specialize in creating responsive, user-friendly applications
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies
              and contributing to open-source projects.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-background border border-ocean/20 rounded-full text-sm"
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
