'use client'

export default function AboutView() {
  return (
    <div className="text-center">
      <img 
        src="/headshot.jpg" 
        alt="Gabriel Barreto Otero" 
        className="w-44 h-44 object-cover border-2 border-terminal-border mx-auto mb-5"
      />
      
      <pre className="ascii-art-large text-terminal-text mb-5">
{` ██████╗  █████╗ ██████╗ ██████╗ ██╗███████╗██╗     
██╔════╝ ██╔══██╗██╔══██╗██╔══██╗██║██╔════╝██║     
██║  ███╗███████║██████╔╝██████╔╝██║█████╗  ██║     
██║   ██║██╔══██║██╔══██╗██╔══██╗██║██╔══╝  ██║     
╚██████╔╝██║  ██║██████╔╝██║  ██║██║███████╗███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
██████╗  █████╗ ██████╗ ██████╗ ███████╗████████╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗
██████╔╝███████║██████╔╝██████╔╝█████╗     ██║   ██║   ██║
██╔══██╗██╔══██║██╔══██╗██╔══██╗██╔══╝     ██║   ██║   ██║
██████╔╝██║  ██║██║  ██║██║  ██║███████╗   ██║   ╚██████╔╝
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝    ╚═════╝ 
 ██████╗ ████████╗███████╗██████╗  ██████╗ 
██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗██╔═══██╗
██║   ██║   ██║   █████╗  ██████╔╝██║   ██║
██║   ██║   ██║   ██╔══╝  ██╔══██╗██║   ██║
╚██████╔╝   ██║   ███████╗██║  ██║╚██████╔╝
 ╚═════╝    ╚═╝   ╚══════╝╚═╝  ╚═╝ ╚═════╝`}
      </pre>
      
      <p className="text-terminal-dim mb-5">Computer Science Student | Developer | Hackathon Enthusiast</p>
      
      <div className="text-left leading-7 space-y-4 text-sm md:text-base">
        <p>
          Hi, I'm <span className="text-terminal-accent-bright">Gabriel Barreto Otero</span>, a first-year Computer Science student at the <span className="text-terminal-accent-bright">University of Central Florida</span> with a 4.0 GPA and a genuine love for building things that people enjoy using.
        </p>
        
        <p>
          I've been competing in hackathons since high school and have experience teaching game development, which pushed me early on to think not just about code, but about usability and design. My interests span web development, computer vision, and developer-focused tools, with a strong focus on creating clean, intuitive user experiences.
        </p>
        
        <p>
          Most recently, my team won <span className="text-terminal-success">Best User Design at SwampHacks XI</span>, where I served as the lead front-end developer on a collaborative medical imaging platform designed to be as intuitive and easy to use as Google Docs, allowing doctors to seamlessly view, edit, and collaborate on imaging in real time.
        </p>
        
        <p>
          When I'm not coding, you'll probably find me at the gym, spending time with my girlfriend, playing C-RPGs, or taking photos of nature.
        </p>
      </div>
    </div>
  )
}
