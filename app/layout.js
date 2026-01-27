import './globals.css'

export const metadata = {
  title: "Gabe's Terminal Portfolio",
  description: 'Portfolio website for Gabriel Barreto Otero',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center">
        {children}
      </body>
    </html>
  )
}
