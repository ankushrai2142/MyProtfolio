import { profile } from '../data/profile'
import Reveal from './Reveal'
import StatCard from './StatCard'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-title">About Me</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            Let&apos;s Introduce <span className="gradient-text-animated">Myself</span>
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-5 lg:col-span-3" delay={100}>
            <h3 className="text-xl font-semibold">Hello there, 👋</h3>
            {profile.about.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {paragraph.includes('Contact me') ? (
                  <>
                    {paragraph.split('Contact me')[0]}
                    <button
                      onClick={() =>
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="font-semibold text-brand-500 transition hover:underline"
                    >
                      Contact me
                    </button>
                    .
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </Reveal>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {profile.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={150 + index * 100} direction="scale">
                <StatCard stat={stat} delay={index * 100} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'LinkedIn', sub: 'Professional Profile', url: profile.links.linkedin },
            { label: 'GitHub', sub: 'Open Source Projects', url: profile.links.github },
            { label: 'Resume', sub: 'Download PDF', url: profile.links.resume },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 120} direction="up">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="card-hover glow-card block rounded-2xl glass p-5 text-center"
              >
                <p className="font-semibold text-brand-500">{item.label}</p>
                <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
