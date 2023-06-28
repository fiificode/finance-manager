import './globals.css'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({ weight:"400", subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
