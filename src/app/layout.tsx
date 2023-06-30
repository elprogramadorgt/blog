import Navbar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elprogramadorgt Blog',
  description: 'Blog de programación, bases de datos, algoritmos y ciberseguridad ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fauna+One&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-gray-200  flex flex-col min-h-screen`} >
        <Navbar></Navbar>

        <main className="container mx-auto px-4 flex-grow">

          {children}

        </main>

        <Footer></Footer>

      </body>
    </html>
  )
}
