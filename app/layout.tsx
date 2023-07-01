import './globals.css'
import { Ubuntu } from 'next/font/google'
import dynamic from 'next/dynamic'
// import Sidebar from '../components/sidebar/Sidebar'

const inter = Ubuntu({ weight:"400", subsets: ['latin'] })
const Sidebar = dynamic(() => import("../components/sidebar/Sidebar"),{ssr:false});

export const metadata = {
  title: 'Cedis Manager',
  description: 'A financial management web application for budgeting and expense tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex gap-5">
        <Sidebar/>
        <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
      </div>
        
      </body>
    </html>
  )
}
