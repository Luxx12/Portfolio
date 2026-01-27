'use client'

export default function ResumeView() {
  return (
    <div>
      <pre className="ascii-art text-terminal-accent mb-5 text-center">
{`██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗
██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝
██████╔╝█████╗  ███████╗██║   ██║██╔████╔██║█████╗  
██╔══██╗██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝  
██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝`}
      </pre>

      <div className="text-left space-y-8">
        {/* Education */}
        <div>
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

        {/* Experience */}
        <div>
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

        {/* Projects */}
        <div>
          <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Projects</div>
          
          <div className="pl-5 border-l-2 border-terminal-border mb-5">
            <div className="text-terminal-accent-bright font-bold">Kinexis <span className="text-terminal-success">- Won Best App at KnightHacks VIII</span></div>
            <div className="text-terminal-dim text-sm">Python, Flask, OpenCV, MediaPipe, SQLite, ReportLab | Oct 2025</div>
            <div className="mt-2">
              <p>Full-stack web application enabling physical therapists to assess patient Range of Motion via computer vision. Reduced ROM assessment time from 15-20 minutes to under 5 minutes.</p>
            </div>
          </div>

          <div className="pl-5 border-l-2 border-terminal-border mb-5">
            <div className="text-terminal-accent-bright font-bold">NeuroView <span className="text-terminal-success">- Won Best User Design at SwampHacks XI</span></div>
            <div className="text-terminal-dim text-sm">HTML, CSS, JavaScript, Three.js, FastAPI, WebSockets | Jan 2025</div>
            <div className="mt-2">
              <p>Free, open-source web-based 3D brain MRI viewer with real-time collaboration for up to 4 simultaneous users.</p>
            </div>
          </div>

          <div className="pl-5 border-l-2 border-terminal-border">
            <div className="text-terminal-accent-bright font-bold">InfoScope</div>
            <div className="text-terminal-dim text-sm">JavaScript, HTML, CSS, Chrome APIs, Google Gemini API | Oct 2024</div>
            <div className="mt-2">
              <p>Chrome extension that extracts article content and provides AI-powered summaries. Built at ShellHacks 2024.</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div>
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

        {/* Contact */}
        <div>
          <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Contact</div>
          <p><span className="text-terminal-accent">Email: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="mailto:barretgaby12@gmail.com">barretgaby12@gmail.com</a></p>
          <p><span className="text-terminal-accent">GitHub: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="https://github.com/Luxx12" target="_blank">github.com/Luxx12</a></p>
          <p><span className="text-terminal-accent">LinkedIn: </span><a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href="https://linkedin.com/in/gabriel-b-otero" target="_blank">linkedin.com/in/gabriel-b-otero</a></p>
        </div>
      </div>
    </div>
  )
}
