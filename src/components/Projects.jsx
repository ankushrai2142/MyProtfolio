import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '../data/profile'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-100/50 py-20 dark:bg-slate-900/30 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-title">Portfolio</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="mb-12 max-w-2xl text-slate-600 dark:text-slate-400">
            React projects from my{' '}
            <a
              href="https://github.com/ankushrai2142"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand-500 hover:underline"
            >
              GitHub profile
            </a>
            — built with clean code, responsive design, and real-world UX.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120} direction={index % 2 ? 'right' : 'left'}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card glow-card group relative z-0 border-brand-200/50 glass dark:border-brand-900/50">
      <div className="relative z-10 mb-4 flex items-start justify-between">
        <div className="rounded-xl bg-brand-50 p-3 transition duration-300 group-hover:scale-110 group-hover:bg-brand-100 dark:bg-brand-950 dark:group-hover:bg-brand-900">
          <Github className="text-brand-500" size={22} />
        </div>
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-950 dark:text-amber-300">
            <Star size={12} />
            Featured
          </span>
        )}
      </div>

      <h3 className="relative z-10 text-lg font-bold transition group-hover:text-brand-500">{project.title}</h3>
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="relative z-10 mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 transition group-hover:bg-brand-50 group-hover:text-brand-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-brand-950 dark:group-hover:text-brand-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-200 px-3 py-2 text-sm font-semibold text-brand-500 transition hover:bg-brand-50 dark:border-brand-800 dark:hover:bg-brand-950"
        >
          View on GitHub
          <ExternalLink size={14} />
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  )
}
