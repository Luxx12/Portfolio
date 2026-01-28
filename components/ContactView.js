'use client'

export default function ContactView() {
  return (
    <div className="text-center">
      <pre className="ascii-art text-terminal-accent mb-5">
{` ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝`}
      </pre>

      <div className="contact-form max-w-md mx-auto mt-8 text-left">
        <form action="https://formsubmit.co/barretgaby12@gmail.com" method="POST" className="flex flex-col gap-5">
          <input type="hidden" name="_subject" value="Portfolio Contact Form" />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-terminal-accent text-sm">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-transparent border-2 border-terminal-border text-terminal-text p-3 outline-none focus:border-terminal-accent transition-colors text-base"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-terminal-accent text-sm">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-transparent border-2 border-terminal-border text-terminal-text p-3 outline-none focus:border-terminal-accent transition-colors text-base"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-terminal-accent text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="bg-transparent border-2 border-terminal-border text-terminal-text p-3 outline-none focus:border-terminal-accent transition-colors resize-y min-h-[120px] text-base"
            />
          </div>
          
          <button
            type="submit"
            className="bg-transparent border-2 border-terminal-accent text-terminal-accent py-3 px-6 cursor-pointer transition-all hover:bg-terminal-accent hover:text-terminal-bg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 pt-8 border-t-2 border-terminal-border">
          <div className="text-terminal-accent-bright font-bold mb-4 text-lg">Socials</div>
          <div className="space-y-2">
            <p><span className="text-terminal-accent">Email: </span><a className="text-terminal-text hover:text-terminal-accent-bright hover:underline" href="mailto:barretgaby12@gmail.com">barretgaby12@gmail.com</a></p>
            <p><span className="text-terminal-accent">GitHub: </span><a className="text-terminal-text hover:text-terminal-accent-bright hover:underline" href="https://github.com/Luxx12" target="_blank">github.com/Luxx12</a></p>
            <p><span className="text-terminal-accent">LinkedIn: </span><a className="text-terminal-text hover:text-terminal-accent-bright hover:underline" href="https://linkedin.com/in/gabriel-b-otero" target="_blank">linkedin.com/in/gabriel-b-otero</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
