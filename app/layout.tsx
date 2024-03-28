import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Providers } from './theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextfolio',
  description: 'A sample portfolio by payamd.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="nord">
      <body className={inter.className} >
        <Providers>
          <main className='flex flex-col justify-between bg-base-200 text-inherit min-h-screen font-sans'> 
            <Navbar />
            <div className='p-4'>{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
