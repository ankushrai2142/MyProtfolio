import { useInView } from '../hooks/useInView'

export default function SkillBar({ skill, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.4 })

  return (
    <div ref={ref}>
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-fuchsia-500"
          style={{
            width: inView ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}
