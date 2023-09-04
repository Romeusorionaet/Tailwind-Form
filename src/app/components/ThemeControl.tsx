'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeControl() {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-8">
      <button
        className="text-zinc-950 dark:text-zinc-400"
        onClick={() => setTheme('light')}
      >
        <Sun size={32} />
      </button>
      <button
        className="text-zinc-400 dark:text-zinc-100"
        onClick={() => setTheme('dark')}
      >
        <Moon size={32} />
      </button>
    </div>
  )
}
