'use client'

import { useState, useRef, useEffect } from 'react'

// automatically sets up terminal in every page, recieves setCurrentView from Page.js so commands can change pages
export default function Terminal({ setCurrentView }) {
  const [input, setInput] = useState('') // allows user input
  const [output, setOutput] = useState([]) // shows history of commands
  const inputRef = useRef(null) //reference input element for focusing

  // object mapping command names to functions
  const commands = {
    help: showHelp,
    '?': showHelp,
    home: () => navigate('home'),
    about: () => navigate('about'),
    projects: () => navigate('projects'),
    resume: () => navigate('resume'),
    contact: () => navigate('contact'),
    play: () => navigate('game'),
    education: showEducation,
    experience: showExperience,
    skills: showSkills,
    socials: showSocials,
    clear: () => { setOutput([]); return null },
  }

  // allows for page changing based on the command inputted
  function navigate(page) {
    setCurrentView(page)
    return <span className="text-terminal-dim">Navigated to {page}</span>
  }

  // return JSX of all commands
  function showHelp() {
    return (
      <div className="py-4">
        <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Available Commands</div>
        <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-2 md:gap-x-5 gap-y-2">
          <span className="text-terminal-accent">home</span><span>Go to home page</span>
          <span className="text-terminal-accent">about</span><span>About me page</span>
          <span className="text-terminal-accent">projects</span><span>View my projects</span>
          <span className="text-terminal-accent">resume</span><span>View full resume</span>
          <span className="text-terminal-accent">contact</span><span>Contact form page</span>
          <span className="text-terminal-accent">play</span><span>Play Road Runner</span>
          <span className="text-terminal-accent">education</span><span>My academic background</span>
          <span className="text-terminal-accent">experience</span><span>Work experience</span>
          <span className="text-terminal-accent">skills</span><span>Technical skills</span>
          <span className="text-terminal-accent">socials</span><span>Social links & email</span>
          <span className="text-terminal-accent">clear</span><span>Clear the terminal</span>
        </div>
      </div>
    )
  }

  // returns JSX of my education
  function showEducation() {
    return (
      <div className="py-4">
        <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Education</div>
        <div className="pl-5 border-l-2 border-terminal-border">
          <div className="text-terminal-accent-bright font-bold">University of Central Florida</div>
          <div className="text-terminal-dim text-sm">Orlando, FL | Expected May 2029</div>
          <div className="mt-2">
            <p>B.S. in Computer Science</p>
            <p>GPA: <span className="text-terminal-accent-bright">4.0</span></p>
          </div>
        </div>
      </div>
    )
  }

  // returns JSX of my experience
  function showExperience() {
    return (
      <div className="py-4">
        <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Experience</div>
        
        <div className="pl-5 border-l-2 border-terminal-border mb-5">
          <div className="text-terminal-accent-bright font-bold">Web Development Intern</div>
          <div className="text-terminal-dim text-sm">Miami EdTech, Miami, FL | Jul 2023 - Aug 2023</div>
          <div className="mt-2 space-y-1">
            <p>- Assisted in development and testing of visual-recognition and educational software; boosted actionable user feedback by 27%</p>
            <p>- Researched integrations and benefits of STEM curriculum packages; co-authored a proposal targeting outreach to 30+ Miami-Dade schools</p>
            <p>- Completed a Python certification at the conclusion of the internship</p>
          </div>
        </div>

        <div className="pl-5 border-l-2 border-terminal-border mb-5">
          <div className="text-terminal-accent-bright font-bold">Game Design Teacher Assistant</div>
          <div className="text-terminal-dim text-sm">John A. Ferguson Senior High, Miami, FL | Aug 2023 - May 2025</div>
          <div className="mt-2 space-y-1">
            <p>- Coordinated and developed year-long course structure and weekly assignments for seven classes of 40+ students</p>
            <p>- Led instruction in C#, JavaScript, and Unity; guided students through full game-dev pipelines</p>
            <p>- Evaluated coursework, provided feedback, and supported lab sessions at scale</p>
          </div>
        </div>

        <div className="pl-5 border-l-2 border-terminal-border">
          <div className="text-terminal-accent-bright font-bold">Secretary at JAF CSHS</div>
          <div className="text-terminal-dim text-sm">Computer Science Honor Society, Miami, FL | May 2023 - May 2025</div>
          <div className="mt-2 space-y-1">
            <p>- Placed 3rd as a team at USF's CyberLaunch Hackathon</p>
            <p>- Led a team to 2nd place at the 2023 CSTA Hackathon (FIU) with an Internet-safety awareness project</p>
            <p>- Delivered workshops on C#, JavaScript, Java, and cybersecurity to cohorts of 30-50 students</p>
            <p>- Accrued $20,000+ in combined team hackathon awards across multiple events</p>
          </div>
        </div>
      </div>
    )
  }

  // returns JSX of my skills
  function showSkills() {
    return (
      <div className="py-4">
        <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Technical Skills</div>
        
        <div className="pl-5 border-l-2 border-terminal-border mb-5">
          <span className="text-terminal-accent">Languages: </span>
          <span>Java, C, Python, C++, Ruby, JavaScript, HTML, CSS, Git/Bash, LaTeX</span>
        </div>

        <div className="pl-5 border-l-2 border-terminal-border mb-5">
          <span className="text-terminal-accent">Frameworks/Engines: </span>
          <span>React, Node.js, Flask, Unity, Godot, Qt, Asio</span>
        </div>

        <div className="pl-5 border-l-2 border-terminal-border mb-5">
          <span className="text-terminal-accent">Developer Tools: </span>
          <span>Git, Sourcetree, Google Cloud Platform, VS Code, Visual Studio, Eclipse, Chrome DevTools</span>
        </div>

        <div className="pl-5 border-l-2 border-terminal-border">
          <span className="text-terminal-accent">API/Libraries: </span>
          <span>Google Gemini API, Chrome Extensions API, OpenCV, MediaPipe, NumPy, Pandas, ReportLab</span>
        </div>
      </div>
    )
  }

  // returns JSX of my contacts along with links to them
  function showSocials() {
    return (
      <div className="py-4">
        <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Socials</div>
        <p><span className="text-terminal-accent">Email: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="mailto:barretgaby12@gmail.com">barretgaby12@gmail.com</a></p>
        <p><span className="text-terminal-accent">GitHub: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="https://github.com/Luxx12" target="_blank">github.com/Luxx12</a></p>
        <p><span className="text-terminal-accent">LinkedIn: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="https://linkedin.com/in/gabriel-b-otero" target="_blank">linkedin.com/in/gabriel-b-otero</a></p>
      </div>
    )
  }

  // this proccesses wtv user inputs, trims out any extra space and checks if command exists by passing it into the commands hash map, if it exists it returns the function associated with that id
  function processCommand(cmd) {
    const trimmedCmd = cmd.trim().toLowerCase()
    if (trimmedCmd === '') return null
    if (commands[trimmedCmd]) {
      return commands[trimmedCmd]()
    } else {
      return <span className="text-terminal-dim">Command not found: {cmd}. Type 'help' for available commands.</span>
    }
  }

  // called when usr presses enter
  function handleSubmit(e) {
    e.preventDefault() // prevents page refreshing
    const result = processCommand(input) 

    // checks if input isn't clear or empty, if not adds to array of used commands to show in history of commaands
    if (input.trim().toLowerCase() !== 'clear' && input.trim() !== '') {
      setOutput(prev => [
        { command: input, result },
        ...prev
      ])
    }
    
    setInput('')
  }

  // when component mounts, if user clicks anywhere that isn't a contact form or game screen, it immediately goes down to the terminal input
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.contact-form') && !e.target.closest('.game-container')) {
        inputRef.current?.focus()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick) // cleans up listener when component unmounts
  }, [])

  return (
    <div className="w-full text-left">
      <p className="text-terminal-dim mb-8 text-center">
        Type <span className="text-terminal-accent">'?'</span> or <span className="text-terminal-accent">'help'</span> to view a list of available commands.
      </p>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
        <span className="text-terminal-success">visitor</span>
        <span className="text-terminal-text">:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none text-terminal-text w-32 md:w-48 caret-terminal-accent-bright"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </form>

      <div className="space-y-2">
        {output.map((item, index) => (
          <div key={index}>
            <div className="mb-2">
              <span className="text-terminal-success">visitor</span>
              <span className="text-terminal-text">:~$ </span>
              {item.command}
            </div>
            {item.result && <div>{item.result}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
