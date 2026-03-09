export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Identity, Authentication & Authorization Platform",
      description: "Standalone IAM service boundary — AWS Cognito with OAuth 2.0/PKCE, IdP-to-canonical identity resolution in JWTs, hybrid RBAC-ABAC engine with tenant-scoped context propagation for multi-tenant access control.",
      tech: ["AWS Cognito", "OAuth 2.0", "TypeScript", "Terraform"],
      category: "Platform",
    },
    {
      id: 2,
      title: "Enterprise Data Ingestion",
      description: "Event-driven pull-based ingestion via Port & Adapter pattern — normalizing voyage telemetry, fuel metrics, and compliance logs into a canonical data model. Draft-to-verified approval workflow enabling 3 new client onboardings.",
      tech: ["TypeScript", "PostgreSQL", "SQS", "Terraform"],
      category: "Platform",
    },
    {
      id: 3,
      title: "RespondFast — RFP Response Automation",
      description: "Bulk semantic matching against a content library of historical Q&A pairs with recency boost and approval workflow. Auto-discovered answer columns across multi-sheet Excel files. Cut SME response effort by 80%.",
      tech: ["Python", "Azure AI Search", "PostgreSQL", "React"],
      category: "AI/ML",
    },
    {
      id: 4,
      title: "Voyage Simulation Platform",
      description: "Integrated two routing providers — REST-based async job orchestration with NAPA (long-running polling) and WebSocket streaming with ABB — enabling multi-objective voyage forecasting.",
      tech: ["TypeScript", "WebSocket", "PostgreSQL", "Next.js"],
      category: "Integration",
    },
    {
      id: 5,
      title: "Organizational Knowledge Chatbot",
      description: "RAG pipeline over SharePoint (PPTX, PDF, brochures) into pgvector with ANN search and dynamic model routing across Azure OpenAI models. Shipped as a Progressive Web App with interactive chat components.",
      tech: ["Azure OpenAI", "pgvector", "Python", "React"],
      category: "AI/ML",
    },
    {
      id: 6,
      title: "Agentic Developer Toolchain",
      description: "Standardized team on Claude Code with custom MCP servers (PostgreSQL for live DB queries, Playwright for UI tests) and project-specific skills — completing the agentic dev loop.",
      tech: ["Claude Code", "MCP", "PostgreSQL", "Playwright"],
      category: "DevTooling",
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
