import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from './Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Leonardo Vizeu',
  description: 'Created by Leonardo Vizeu',
}

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {props.children}
        {props.modal}
        <div id='root' />
        <div id="modal-root" />
      </body>
    </html>
  )
}