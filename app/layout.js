import './globals.css'

export const metadata = {
  title: "My portfolio",
  description: 'My portfolio idk',
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
