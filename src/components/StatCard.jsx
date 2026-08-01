import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

export default function StatCard({ stat, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const numeric = parseInt(stat.value, 10) || 0
  const suffix = stat.value.replace(/[0-9]/g, '')
  const count = useCountUp(numeric, inView)

  return (
    <div
      ref={ref}
      className="card-hover glow-card rounded-2xl glass p-6 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-3xl font-bold gradient-text-animated">
        {inView ? `${count}${suffix}` : `0${suffix}`}
      </p>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
    </div>
  )
}
