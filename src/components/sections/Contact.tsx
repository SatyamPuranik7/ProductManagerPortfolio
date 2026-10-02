import { Mail, Linkedin, FileText, Github } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/satyam-puranik-80b271307?utm_source=share_via&utm_content=profile&utm_medium=member_android';
const GITHUB_URL = 'https://github.com/SatyamPuranik7';
const EMAIL = 'satyampuranik7@gmail.com';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-stone-200">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="card-base p-8 sm:p-12 text-center">
          <span className="section-label">Get in Touch</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-600 text-ink leading-[1.15]">
            LET'S BUILD SOMETHING USEFUL.
          </h2>
          <p className="mt-5 text-ink-light max-w-xl mx-auto leading-[1.6]">
            If you're working on a product problem, building an AI product, or looking for a
            product-minded builder, I'd be happy to connect.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              <Mail size={18} />
              Email Me
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 bg-stone-100 border-t border-stone-300">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <strong className="text-ink font-600">Satyam Puranik</strong> · Product Manager
          <br />
          <span className="text-xs text-ink-light/70">
            © {new Date().getFullYear()} Satyam Puranik. All rights reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <a href={`mailto:${EMAIL}`} className="text-sm text-ink-light hover:text-olive transition-colors">
            Email
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-light hover:text-olive transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-light hover:text-olive transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
