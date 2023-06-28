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
    <html lang="en" >
      <body className="bg-[#eee] overflow-hidden overflow-y-scroll min-h-screen">
        <Header/>
        <main className='absolute left-0 min-h-screen w-full'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
