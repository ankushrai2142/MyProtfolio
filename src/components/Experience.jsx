import { Briefcase, ExternalLink, GraduationCap, Linkedin, MapPin } from 'lucide-react'
import { education, experience, profile } from '../data/profile'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-title">Career</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Work <span className="gradient-text-animated">Experience</span>
          </h2>
          <p className="mb-8 max-w-2xl text-slate-600 dark:text-slate-400">
            3+ years crafting scalable frontend solutions — details on{' '}
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-500 hover:underline"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card-hover glow-card mb-10 inline-flex items-center gap-3 rounded-2xl glass px-5 py-4"
          >
            <div className="rounded-lg bg-brand-50 p-2 dark:bg-brand-950">
              <Linkedin size={20} className="text-brand-500" />
            </div>
            <div>
              <p className="font-semibold">View full experience on LinkedIn</p>
              <p className="text-sm text-slate-500">linkedin.com/in/ankush-rai-40969216a</p>
            </div>
          </a>
        </Reveal>

        <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-2rem)] before:w-0.5 before:bg-gradient-to-b before:from-brand-500 before:via-violet-500 before:to-fuchsia-500 before:opacity-30 sm:before:left-6">
          {experience.map((job, index) => (
            <Reveal key={index} delay={index * 120} direction="left">
              <div className="relative pl-12 sm:pl-16">
                <div className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 shadow-lg shadow-brand-500/40 sm:left-4">
                  <Briefcase size={12} className="text-white" />
                </div>
                <div className={`card-hover glow-card rounded-2xl glass p-6 ${job.current ? 'ring-1 ring-brand-500/20' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      {job.company && (
                        <p className="mt-1 font-semibold text-brand-500">
                          {job.company} · {job.type}
                        </p>
                      )}
                      {job.subtitle && (
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          {job.subtitle}
                        </p>
                      )}
                      {job.current && (
                        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    {job.period}
                    {job.duration ? ` · ${job.duration}` : ''}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1 text-sm text-slate-500">
                    <MapPin size={14} />
                    {job.location}
                    {job.workMode ? ` · ${job.workMode}` : ''}
                  </p>
                  {job.summary && (
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {job.summary}
                    </p>
                  )}
                  {job.project && (
                    <a
                      href={job.project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
                    >
                      {job.project.label || `View ${job.project.name}`}
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <Reveal direction="left">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
              <GraduationCap className="text-brand-500" />
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.institution} className="card-hover glow-card rounded-2xl glass p-6">
                <h4 className="font-bold">{edu.degree}</h4>
                <p className="mt-1 text-brand-500">{edu.field}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{edu.institution}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {edu.period} • {edu.location}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
