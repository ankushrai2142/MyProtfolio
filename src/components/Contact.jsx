import { useState } from 'react'
import { CheckCircle, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile, socialLinks } from '../data/profile'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-title">Get In Touch</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Let&apos;s <span className="gradient-text-animated">Chat</span>
          </h2>
          <p className="mb-12 max-w-2xl text-slate-600 dark:text-slate-400">
            Ready to collaborate? I&apos;m open to freelance projects, full-time roles, and
            exciting frontend opportunities.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="space-y-6 lg:col-span-2" direction="left">
            <div className="glow-card rounded-2xl glass p-6">
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <p className="mt-1 text-brand-500">{profile.title} · 3+ Years</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Passionate about creating seamless and engaging web experiences. Dedicated to
                continuously learning and mastering the latest technologies to build responsive and
                dynamic websites. Let&apos;s build something great together!
              </p>
            </div>

            <div className="space-y-4">
              <ContactItem
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactItem
                icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
              />
              <ContactItem
                icon={Mail}
                label="Resume"
                value="Download PDF Resume"
                href={profile.links.resume}
                external
              />
              <ContactItem
                icon={Linkedin}
                label="LinkedIn"
                value="Connect on LinkedIn"
                href={profile.links.linkedin}
                external
              />
              <ContactItem icon={MapPin} label="Location" value={profile.location} />
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 hover:shadow-md dark:border-slate-700 dark:text-slate-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" direction="right" delay={150}>
            <form onSubmit={handleSubmit} className="glow-card rounded-2xl glass p-6 lg:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  required
                />
                <Field
                  label="Your Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  required
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium">Message</label>
                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle size={18} />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, label, value, href, external }) {
  const content = (
    <div className="card-hover flex items-center gap-4 rounded-xl glass p-4">
      <div className="rounded-lg bg-brand-50 p-2 dark:bg-brand-950">
        <Icon size={18} className="text-brand-500" />
      </div>
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return content
}

function Field({ label, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition duration-300 focus:-translate-y-0.5 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900"
      />
    </div>
  )
}
