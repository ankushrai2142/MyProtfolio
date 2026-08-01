import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'React.js Developer',
  'MERN Stack Developer',
  'E-commerce Specialist',
]

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) setTimeout(() => setDeleting(true), 2000)
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      deleting ? 35 : 65,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <span className="gradient-text-animated font-semibold">
      {text}
      <span className="typing-cursor ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] rounded-full bg-brand-500" />
    </span>
  )
}
