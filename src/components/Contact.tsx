export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Let's Work Together</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how we can bring your ideas to life.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-ocean to-violet text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
