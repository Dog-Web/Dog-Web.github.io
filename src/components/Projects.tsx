export default function Projects() {
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-muted rounded-lg p-6 hover:border-ocean/50 transition-colors"
            >
              <div className="h-48 bg-muted rounded-lg mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-muted-foreground mb-4">
                A brief description of the project and the technologies used.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-ocean hover:underline">
                  Live Demo
                </a>
                <a href="#" className="text-ocean hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
