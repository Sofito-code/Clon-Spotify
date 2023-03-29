import { Asidebar } from '@/components/Asidebar';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header';
import React from 'react'

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <div className="main-content">
      <Asidebar/>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export {Layout}