'use client'

export default function ProjectsView() {
  const projects = [
    {
      name: 'Kinexis',
      date: 'Oct 2025',
      tech: 'Python, Flask, OpenCV, MediaPipe, SQLite, ReportLab',
      award: 'Won Best App at KnightHacks VIII',
      awardType: 'success',
      description: 'Full-stack web application enabling physical therapists to assess patient Range of Motion via computer vision. Features real-time motion tracking using MediaPipe and OpenCV, reducing ROM assessment time from 15-20 minutes to under 5 minutes. Includes SQLite database storage and generates APTA-compliant PDF medical reports.',
      link: 'https://devpost.com/software/kinexis',
    },
    {
      name: 'InfoScope',
      date: 'Oct 2024',
      tech: 'JavaScript, HTML, CSS, Chrome APIs, Google Gemini API',
      award: 'Built at ShellHacks 2024',
      awardType: 'dim',
      description: 'Chrome extension that extracts article content and provides AI-powered summaries. Integrated Gemini API with error handling and secure key storage. Built message passing architecture between popup UI and content scripts using Chrome Extensions API.',
    },
    {
      name: 'NeuroView',
      date: 'Jan 2025',
      tech: 'HTML, CSS, JavaScript, Three.js, FastAPI, WebSockets, NiBabel, NumPy, SciPy, scikit-image',
      award: 'Won Best User Design at SwampHacks XI',
      awardType: 'success',
      description: 'Free, open-source web-based 3D brain MRI viewer with real-time collaboration. Load NIfTI brain scans, explore from any angle with wireframe or solid rendering, and use synchronized multi-plane slicing. Features color-coded annotations and Google Docs-style collaboration for up to 4 simultaneous users. Built with Three.js and FastAPI + WebSockets.',
      link: 'https://devpost.com/software/neuroview',
    },
    {
      name: 'Ping',
      date: 'In Progress',
      tech: 'C++, Asio, Qt',
      award: 'In Development',
      awardType: 'highlight',
      description: 'Chat application designed to send messages between different users. Messages are sent using a TCP server to facilitate real-time communication between users.',
    },
  ]

  return (
    <div>
      <pre className="ascii-art text-terminal-accent mb-5 text-center">
{`██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝`}
      </pre>

      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="border-2 border-terminal-border p-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-1">
              <span className="text-terminal-accent-bright font-bold text-lg">{project.name}</span>
              <span className="text-terminal-dim text-sm">{project.date}</span>
            </div>
            <div className="text-terminal-accent text-xs mb-2">{project.tech}</div>
            <div className={`mb-3 ${
              project.awardType === 'success' ? 'text-terminal-success' : 
              project.awardType === 'highlight' ? 'text-terminal-accent-bright' : 
              'text-terminal-dim'
            }`}>
              {project.award}
            </div>
            <div className="leading-6">
              <p>{project.description}</p>
              {project.link && (
                <p className="mt-2">
                  <a className="text-terminal-accent hover:text-terminal-accent-bright hover:underline" href={project.link} target="_blank">
                    View on Devpost
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
