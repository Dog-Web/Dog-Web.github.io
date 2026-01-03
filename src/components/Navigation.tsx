export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-muted z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-ocean to-violet bg-clip-text text-transparent">
            Bharat
          </h1>
          <ul className="flex gap-8">
            <li>
              <a href="#about" className="text-muted-foreground hover:text-ocean transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-muted-foreground hover:text-ocean transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-muted-foreground hover:text-ocean transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
