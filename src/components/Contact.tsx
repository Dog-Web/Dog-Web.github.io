const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:111bharat11@gmail.com" className="hover:text-ocean transition-colors">
                    111bharat11@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Amsterdam, Netherlands</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-ocean">
                    <LinkedInIcon />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/bharat-meena-152385187/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ocean transition-colors"
                  >
                    linkedin.com/in/bharat-meena
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:111bharat11@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-ocean to-violet text-white rounded-lg hover:opacity-90 transition-opacity text-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
