'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Terminal from '@/components/Terminal'
import HomeView from '@/components/HomeView'
import AboutView from '@/components/AboutView'
import ProjectsView from '@/components/ProjectsView'
import ResumeView from '@/components/ResumeView'
import ContactView from '@/components/ContactView'
import GameView from '@/components/GameView'

export default function Home() {
  const [currentView, setCurrentView] = useState('home')
  const [viewKey, setViewKey] = useState(0)

  const handleViewChange = (view) => {
    setCurrentView(view)
    setViewKey(prev => prev + 1)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      <Navbar currentView={currentView} setCurrentView={handleViewChange} />
      
      <main className="flex-1 py-10 px-4 md:px-5 max-w-[700px] w-full">
        <div key={viewKey} className="page-transition">
          {currentView === 'home' && <HomeView />}
          {currentView === 'about' && <AboutView />}
          {currentView === 'projects' && <ProjectsView />}
          {currentView === 'resume' && <ResumeView />}
          {currentView === 'contact' && <ContactView />}
          {currentView === 'game' && <GameView />}
        </div>

        <div className="mt-10">
          <Terminal setCurrentView={handleViewChange} />
        </div>
      </main>

      <footer className="w-full border-t-2 border-terminal-border py-5 text-center text-terminal-dim text-sm">
      </footer>
    </>
  )
}
