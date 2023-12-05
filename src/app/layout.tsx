import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutProvider from '@/layout/LayoutProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <LayoutProvider>
          {children}
         </LayoutProvider> 
      </body>
    </html>
  )
}
