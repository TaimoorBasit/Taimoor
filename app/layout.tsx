import type { Metadata } from 'next'
import { JetBrains_Mono, Orbitron, Space_Grotesk } from 'next/font/google'
import { Toaster } from 'sonner'
import '../styles/globals.css'
import { BackgroundEffects } from '@/components/BackgroundEffects'

// Removed Inter to save performance as Space Grotesk is the primary font

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900'],
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Taimoor Awan | Full Stack Engineering & AI Solutions',
    template: '%s | Taimoor Awan'
  },
  description: 'Elite Full Stack Engineering & AI Solutions. I build high-ticket digital infrastructure for scaling businesses.',
  keywords: [
    'Taimoor Awan', 'Premium Web Developer', 'AI Solutions Architect', 'Enterprise Next.js',
    'SaaS Development', 'High Ticket Dropshipping', 'Automated Lead Gen', 'Cybersecurity'
  ],
  authors: [{ name: 'Taimoor Awan', url: 'https://taimoor.dev' }],
  creator: 'Taimoor Awan',
  metadataBase: new URL('https://taimoor.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://taimoor.dev',
    title: 'Taimoor Awan | Full Stack Engineering & AI Solutions',
    description: 'Elite Full Stack Engineering & AI Solutions. I build high-ticket digital infrastructure for scaling businesses.',
    siteName: 'Taimoor Awan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Taimoor Awan - Digital Architect',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taimoor Awan | Full Stack Engineering & AI Solutions',
    description: 'Elite Full Stack Engineering & AI Solutions.',
    creator: '@taimoor_dev',
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/favicon/site.webmanifest' },
    ]
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Taimoor Awan',
    url: 'https://taimoor.dev',
    jobTitle: 'Digital Architect & AI Engineer',
    image: 'https://taimoor.dev/My.jpg',
    sameAs: [
      'https://www.linkedin.com/in/mohammad-taimoor',
      'https://github.com/taimoor-awan',
      'https://www.instagram.com/tamouriii?igsh=cmx3YW00am4wdTNx'
    ],
    knowsAbout: ['Enterprise Software', 'AI Agents', 'Scalable Architecture', 'High-Ticket Sales', 'Cybersecurity'],
    description: "I architect high-performance digital ecosystems that drive revenue. From Tier-1 University Dashboards to Autonomous AI Agents."
  };

  return (
    <html lang="en" className={`scroll-smooth ${jetbrainsMono.variable} ${orbitron.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-electric-coral/30 selection:text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isMetaMaskError = (msg) => msg && (msg.includes('MetaMask') || msg.includes('metamask'));
                
                const handler = (e) => {
                  const errorMsg = e.message || (e.reason && e.reason.message) || "";
                  if (isMetaMaskError(errorMsg)) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    return true;
                  }
                };
                
                window.addEventListener('error', handler, true);
                window.addEventListener('unhandledrejection', handler, true);
                
                // Backup for some browser behaviors
                const oldOnError = window.onerror;
                window.onerror = function(message, source, lineno, colno, error) {
                  if (isMetaMaskError(message) || (error && isMetaMaskError(error.message))) {
                    return true;
                  }
                  if (oldOnError) return oldOnError.apply(this, arguments);
                };
              })();
            `,
          }}
        />
        <BackgroundEffects />
        {children}
        <Toaster position="top-right" richColors theme="dark" />
      </body>
    </html>
  )
}
