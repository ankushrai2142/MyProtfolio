import { useEffect, useState } from 'react'
import {
  Briefcase,
  Code2,
  FileText,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  Wrench,
  X,
} from 'lucide-react'
import { navLinks, profile } from '../data/profile'
import { useTheme } from '../context/ThemeContext'

const navIcons = {
  home: Home,
  about: User,
  skills: Wrench,
  experience: Briefcase,
  projects: Code2,
  contact: Mail,
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <header className={`navbar-shell ${scrolled ? 'navbar-scrolled' : ''}`}>
        <nav className="navbar-inner">
          <button onClick={() => scrollTo('home')} className="navbar-logo group">
            <span className="navbar-logo-icon">
              <span className="navbar-logo-dot" />
              <Code2 size={16} className="text-white" />
            </span>
            <span className="hidden sm:block">
              <span className="navbar-logo-text">
                <span className="text-brand-500">&lt;</span>
                ANKUSH
                <span className="text-brand-500">/&gt;</span>
              </span>
              <span className="navbar-logo-sub">Full Stack Developer · 3+ Yrs</span>
            </span>
          </button>

          <div className="navbar-pill hidden lg:flex">
            {navLinks.map((link) => {
              const Icon = navIcons[link.id] || Home
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`navbar-pill-link ${isActive ? 'navbar-pill-link-active' : ''}`}
                >
                  <Icon size={14} className={isActive ? 'text-brand-500' : 'opacity-60'} />
                  {link.label}
                </button>
              )
            })}
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="navbar-icon-btn"
            >
              <span className="navbar-icon-btn-glow" />
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href={profile.links.resume}
              download="Ankush_Rai_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume hidden sm:inline-flex"
            >
              <FileText size={15} />
              Resume
            </a>

            <button
              className="navbar-menu-btn lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`navbar-mobile-backdrop lg:hidden ${open ? 'navbar-mobile-backdrop-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside className={`navbar-mobile-panel lg:hidden ${open ? 'navbar-mobile-panel-open' : ''}`}>
        <div className="navbar-mobile-header">
          <div>
            <p className="font-mono text-sm font-bold">
              <span className="text-brand-500">&lt;</span>ANKUSH<span className="text-brand-500">/&gt;</span>
            </p>
            <p className="text-xs text-slate-500">Portfolio Navigation</p>
          </div>
          <button onClick={() => setOpen(false)} className="navbar-icon-btn" aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <div className="navbar-mobile-links">
          {navLinks.map((link, index) => {
            const Icon = navIcons[link.id] || Home
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link-active' : ''}`}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="navbar-mobile-link-icon">
                  <Icon size={18} />
                </span>
                <span>{link.label}</span>
                {isActive && <span className="navbar-mobile-active-dot" />}
              </button>
            )
          })}
        </div>

        <div className="navbar-mobile-footer">
          <a
            href={profile.links.resume}
            download="Ankush_Rai_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume w-full justify-center"
          >
            <FileText size={15} />
            Download Resume (PDF)
          </a>
        </div>
      </aside>
    </>
  )
}
