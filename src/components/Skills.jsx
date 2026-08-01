import { skills } from '../data/profile'
import Reveal from './Reveal'
import SkillBar from './SkillBar'

const categories = [...new Set(skills.map((s) => s.category))]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-slate-100/50 py-20 dark:bg-slate-900/30 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-title">Expertise</p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            My <span className="gradient-text-animated">Skills</span>
          </h2>
          <p className="mb-12 max-w-xl text-slate-600 dark:text-slate-400">
            3+ years of building production-ready full-stack applications with MERN stack and modern frontend tooling.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill.name} className="skill-pill">
                {skill.name}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, catIndex) => (
            <Reveal key={category} delay={catIndex * 150} direction={catIndex % 2 ? 'right' : 'left'}>
              <div className="glow-card rounded-2xl glass p-6 transition duration-500 hover:shadow-xl hover:shadow-brand-500/10">
                <h3 className="mb-6 text-lg font-semibold text-brand-500">{category}</h3>
                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} delay={i * 80} />
                    ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
