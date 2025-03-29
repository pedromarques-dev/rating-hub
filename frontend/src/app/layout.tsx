import './globals.css'

import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Rating Hub',
}

const oxanium = Oxanium({
  weight: ['500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-100 text-gray-900 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="mx-auto py-8 md:py-0">{children}</main>
      </body>
    </html>
  )
}
