import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwindcss + Nextjs',
  description: 'Classroom Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Utilizar o next-themes para alternar entre o thema dark e light
  return (
    <html lang="en" className="dark antialiased">
      <body className={inter.className}>
        <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-24 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
