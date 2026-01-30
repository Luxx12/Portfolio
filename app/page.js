'use client' //telling next.js this component runs in the browser

// import useState hook along with all the components needed to change between views
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Terminal from '@/components/Terminal'
import HomeView from '@/components/HomeView'
import AboutView from '@/components/AboutView'
import ProjectsView from '@/components/ProjectsView'
import ResumeView from '@/components/ResumeView'
import ContactView from '@/components/ContactView'
import GameView from '@/components/GameView'

// sets up homeView as thedefault page that user sees when entering the website
export default function Home() {
  const [currentView, setCurrentView] = useState('home') // sets state to track whats currently showing then calls setCurrentView to actually change it
  const [viewKey, setViewKey] = useState(0) // this sets up a counter that increases every time a page is changed to trigger the fade in animation when entering into pages

  // gets called when ever a page is changed
  const handleViewChange = (view) => {
    setCurrentView(view) // sets current page to wtv page is currently being passed through from when the user changed pages
    setViewKey(prev => prev + 1) // increments key to restart the animation
    window.scrollTo({ top: 0, behavior: 'instant' }) // immediately scrolls to the top of the page each time page is changed
  }

  return (
    // using a react fragment to return all the elements without using a div
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
