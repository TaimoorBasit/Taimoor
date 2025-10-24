import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Muhammad Taimoor - Full Stack Web Developer',
  description: 'Professional Full Stack Web Developer specializing in React, Next.js, WordPress, and Shopify. Building high-performance websites and digital experiences.',
  keywords: ['web developer', 'full stack', 'react', 'nextjs', 'wordpress', 'shopify', 'frontend', 'backend'],
  authors: [{ name: 'Muhammad Taimoor' }],
  creator: 'Muhammad Taimoor',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taimoor.dev',
    title: 'Muhammad Taimoor - Full Stack Web Developer',
    description: 'Professional Full Stack Web Developer specializing in React, Next.js, WordPress, and Shopify.',
    siteName: 'Muhammad Taimoor Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Taimoor - Full Stack Web Developer',
    description: 'Professional Full Stack Web Developer specializing in React, Next.js, WordPress, and Shopify.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
