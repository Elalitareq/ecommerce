import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'This is an ecommerce template for an ecommerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden' >
      <body className="bg-[#eee] w-full min-h-screen flex flex-col">
        <Header/>
        <main className='w-full'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
