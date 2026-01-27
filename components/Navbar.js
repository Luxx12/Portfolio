'use client'

export default function Navbar({ currentView, setCurrentView }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
    { id: 'game', label: 'Play' },
  ]

  const handleNav = (id) => {
    setCurrentView(id)
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10)
  }

  return (
    <header className="w-full border-b-2 border-terminal-border py-3 px-4 md:px-6 flex justify-center flex-wrap gap-2 md:gap-4 sticky top-0 bg-terminal-bg z-50">
      {navItems.map((item, index) => (
        <span key={item.id} className="flex items-center gap-2 md:gap-4">
          <span
            onClick={() => handleNav(item.id)}
            className={`text-xs md:text-sm cursor-pointer transition-colors hover:text-terminal-accent-bright ${
              currentView === item.id ? 'text-terminal-accent' : 'text-terminal-dim'
            }`}
          >
            {item.label}
          </span>
          {index < navItems.length - 1 && (
            <span className="text-terminal-border text-xs md:text-sm">|</span>
          )}
        </span>
      ))}
    </header>
  )
}
