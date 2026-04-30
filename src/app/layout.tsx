import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MarkerWidget } from '@/components/MarkerWidget'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { siteConfig, about, attorney, contact } from '@/data/siteData'
import './globals.css'
import '@/themes/v1/variables.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL =
  (siteConfig as { podcastUrl?: string }).podcastUrl ||
  contact.website ||
  'https://podcast-inlandempirecaraccidentlawyer.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.podcastName,
    template: `%s | ${siteConfig.podcastName}`,
  },
  description: about.description,
  applicationName: siteConfig.podcastName,
  authors: [{ name: attorney.name, url: contact.website || SITE_URL }],
  keywords: [
    attorney.name,
    attorney.firm,
    'Empire Attorneys',
    'Inland Injury',
    'Inland Empire accident attorney',
    'Inland Empire car accident lawyer',
    'California personal injury podcast',
    'Eastvale personal injury lawyer',
    'Norco personal injury lawyer',
    'Riverside County car accident attorney',
    'truck accident lawyer Inland Empire',
    'motorcycle accident lawyer California',
    'wrongful death attorney California',
    'diminution in value California',
    'uninsured motorist coverage California',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.podcastName,
    title: siteConfig.podcastName,
    description: about.description,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.podcastName} — hosted by ${attorney.name} of ${attorney.firm}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.podcastName,
    description: about.description,
    images: ['/opengraph-image'],
  },
  // Next's file-convention `app/icon.tsx` + `app/apple-icon.tsx` auto-wire
  // `<link rel="icon" href="/icon">` and `<link rel="apple-touch-icon" href="/apple-icon">`.
  // Don't add an explicit `icons` block here — it overrides the auto-detection
  // with paths that don't exist (e.g. /icon.svg).
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#05515F' },
    { media: '(prefers-color-scheme: dark)', color: '#05515F' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MarkerWidget />
      </body>
    </html>
  )
}
