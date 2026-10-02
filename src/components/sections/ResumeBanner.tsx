import { Download, ExternalLink, Linkedin } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/satyam-puranik-80b271307?utm_source=share_via&utm_content=profile&utm_medium=member_android';
const RESUME_URL = '/Satyam_Puranik_Resume.pdf';

export function ResumeBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <div className="card-base p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-xl sm:text-2xl font-600 text-ink">
              Looking for my next product opportunity.
            </h3>
            <p className="mt-2 text-sm text-ink-light">
              Interested in Product Management, AI Product Management, APM, and Product Internship
              opportunities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0 justify-center">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple"
            >
              <ExternalLink size={18} />
              View Resume
            </a>
            <a href={RESUME_URL} download="Satyam_Puranik_Resume.pdf" className="btn-secondary">
              <Download size={18} />
              Download Resume
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
          </div>
        </div>
      </div>
    </section>
  );
}
