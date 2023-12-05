'use client'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/lib/context/ThemeContext'
import React from 'react'

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
        <Header />
          {children}
        <Footer />
    </ThemeProvider>
  )
}

export default LayoutProvider