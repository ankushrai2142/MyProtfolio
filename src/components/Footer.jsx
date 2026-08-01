import { Heart } from 'lucide-react'
import { profile, socialLinks } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-100/50 py-10 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-mono text-lg font-bold">
              <span className="text-brand-500">&lt;</span>
              ANKUSH
              <span className="text-brand-500">/&gt;</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-slate-500">
              Frontend Developer • Full Stack Developer • React.js • MERN Stack
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-600 transition hover:text-brand-500 dark:text-slate-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800">
          <p className="inline-flex items-center gap-1">
            © {year} {profile.name.toUpperCase()} | Handcrafted with
            <Heart size={14} className="fill-red-500 text-red-500" /> | Made by {profile.name.toUpperCase()}
          </p>
          <p>
            <a
              href={profile.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="text-brand-500 hover:underline"
            >
              Live Portfolio
            </a>
            {' • '}
            <a
              href={profile.links.naukri}
              target="_blank"
              rel="noreferrer"
              className="text-brand-500 hover:underline"
            >
              Naukri Profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
