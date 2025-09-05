export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-center p-8"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-6">Let’s connect! 🚀</p>
      <div className="flex gap-6">
        <a href="mailto:tuemail@gmail.com" className="hover:text-blue-400">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
