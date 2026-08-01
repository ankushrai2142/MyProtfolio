import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile, socialLinks } from '../data/profile'
import TypingRoles from './TypingRoles'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  briefcase: Download,
  link: Mail,
}

export default function Hero() {
  const { ref: expRef, inView: expInView } = useInView({ threshold: 0.5 })
  const { ref: projRef, inView: projInView } = useInView({ threshold: 0.5 })
  const expCount = useCountUp(3, expInView)
  const projCount = useCountUp(4, projInView)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl animate-float" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl animate-float stagger-3" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-300">
            <Sparkles size={14} className="text-brand-500" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>

          <h1 className="animate-fade-up stagger-1 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Heyy, I&apos;m{' '}
            <span className="gradient-text-animated">{profile.name}</span>
          </h1>

          <h2 className="animate-fade-up stagger-2 mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            I&apos;m a <TypingRoles />
          </h2>

          <p className="animate-fade-up stagger-3 mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.headline} — crafting polished, performant web experiences with{' '}
            <span className="font-semibold text-brand-500">3+ years</span> of hands-on development.
          </p>

          <p className="animate-fade-up stagger-4 mt-3 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-brand-500" />
            {profile.location}
          </p>

          <div className="animate-fade-up stagger-5 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Hire Me
            </button>
            <a
              href={profile.links.resume}
              download="Ankush_Rai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          <div className="animate-fade-up stagger-6 mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {socialLinks.map((social, i) => {
              const Icon = iconMap[social.icon] || Mail
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="rounded-full border border-slate-200 p-3 text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-500 hover:shadow-lg hover:shadow-brand-500/20 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  style={{ animationDelay: `${0.8 + i * 0.08}s` }}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="relative flex-shrink-0 animate-fade-up stagger-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="avatar-ring h-[340px] w-[340px] rounded-full border border-dashed border-brand-400/30 sm:h-[360px] sm:w-[360px]" />
          </div>

          <div className="animate-float animate-pulse-glow relative mx-auto h-72 w-72 rounded-3xl border border-brand-200/80 bg-gradient-to-br from-brand-500 via-violet-500 to-fuchsia-500 p-[2px] shadow-2xl shadow-brand-500/30 dark:border-brand-800 sm:h-80 sm:w-80">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-[22px] bg-slate-950/95 text-center backdrop-blur">
              <div className="relative mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400 to-fuchsia-500 blur-md opacity-60" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-fuchsia-500 text-3xl font-bold text-white ring-4 ring-brand-500/20">
                  AR
                </div>
              </div>
              <p className="font-mono text-sm text-brand-300">Full Stack Developer</p>
              <p className="mt-2 px-6 text-xs leading-relaxed text-slate-400">
                React.js • Node.js • MongoDB • MERN Stack
              </p>
              <div className="mt-4 flex gap-2">
                {['React', 'JS', 'CSS'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-brand-500/10 px-2 py-0.5 font-mono text-[10px] text-brand-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={expRef}
            className="absolute -bottom-4 -left-4 rounded-2xl glass px-4 py-3 shadow-lg backdrop-blur-xl transition duration-500 hover:scale-105"
          >
            <p className="text-2xl font-bold gradient-text-animated">{expCount}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Years Experience</p>
          </div>

          <div
            ref={projRef}
            className="absolute -right-4 -top-4 rounded-2xl glass px-4 py-3 shadow-lg backdrop-blur-xl transition duration-500 hover:scale-105"
          >
            <p className="text-2xl font-bold text-emerald-500">{projCount}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">React Projects</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-brand-500 transition hover:text-brand-400"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
