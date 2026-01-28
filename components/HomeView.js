'use client'

export default function HomeView() {
  return (
    <div className="text-center">
      <pre className="ascii-art-home text-terminal-accent mb-5">
{` ██████╗  █████╗ ██████╗ ███████╗███████╗
██╔════╝ ██╔══██╗██╔══██╗██╔════╝██╔════╝
██║  ███╗███████║██████╔╝█████╗  ███████╗
██║   ██║██╔══██║██╔══██╗██╔══╝  ╚════██║
╚██████╔╝██║  ██║██████╔╝███████╗███████║
 ╚═════╝ ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝`}
      </pre>
      <p className="text-terminal-dim text-base">Welcome to my portfolio</p>
      <p className="text-terminal-dim text-base">Use the terminal or the navigation bar on the top to navigate through this portfolio</p>
    </div>
  )
}
