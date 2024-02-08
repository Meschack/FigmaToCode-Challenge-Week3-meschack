import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import React, { ReactNode } from 'react'
import { Footer, Header } from '@/components/organisms'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bandage',
  description: 'Online shop store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
