import { useInView } from '../hooks/useInView'

const offsets = {
  up: 'translateY(48px)',
  down: 'translateY(-48px)',
  left: 'translateX(-48px)',
  right: 'translateX(48px)',
  scale: 'scale(0.9)',
  none: 'none',
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}) {
  const { ref, inView } = useInView({ threshold: 0.12 })

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal-visible' : ''} ${className}`}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-from': offsets[direction] ?? offsets.up,
      }}
    >
      {children}
    </Tag>
  )
}
