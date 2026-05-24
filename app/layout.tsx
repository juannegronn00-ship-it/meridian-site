import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import PageTransition from '@/components/PageTransition'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meridian — AI Automation Studio',
  description:
    'Meridian builds AI-powered bots and automation systems for finance professionals and businesses who need real solutions, not demos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${dmSans.variable}`}>
        <Nav />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
