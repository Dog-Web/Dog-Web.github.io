export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "LangChain Dashboard Chatbot",
      description: "AI-powered chatbot with memory management and cost monitoring. Architected continuous context compression for long-running conversations while tracking token usage and costs per session.",
      tech: ["LangChain", "Next.js", "TypeScript", "PostgreSQL"],
      category: "AI/ML",
    },
    {
      id: 2,
      title: "RAG Knowledge Chatbot",
      description: "Cross-platform organizational knowledge chatbot using RAG architecture. Established secure vector database as a service using Azure AI Search, enabling semantic search across multiple teams.",
      tech: ["Azure OpenAI", "ChromaDB", "Python", "React"],
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Compliance Enquiries Resolver",
      description: "Automated compliance system using semantic FAQ matching that reduced manual effort by 80%. Built validation workflow for legal reviewers to approve auto-populated answers.",
      tech: ["Python", "Azure AI", "PostgreSQL", "FastAPI"],
      category: "Automation",
    },
    {
      id: 4,
      title: "Vessel Tracking Integration",
      description: "API integration replacing manual Excel workflows. Automated fuel consumption reporting with comprehensive test coverage, resulting in 3 new client onboardings.",
      tech: ["Node.js", "TypeScript", "GitHub Actions", "PostgreSQL"],
      category: "Integration",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-muted rounded-lg p-6 hover:border-ocean/50 transition-all hover:shadow-lg group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              <h4 className="text-xl font-semibold mb-3 group-hover:text-ocean transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-muted rounded text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
