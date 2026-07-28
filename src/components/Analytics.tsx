'use client'

import Script from 'next/script'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { useEffect } from 'react'

type AnalyticsProps = {
  gtmId?: string
  ga4Id?: string
  fbPixelId?: string
  clarityProjectId?: string
}

export function Analytics({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
  fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
}: AnalyticsProps = {}) {
  useEffect(() => {
    if (!clarityProjectId) return
    let cancelled = false
    import('@microsoft/clarity').then((mod) => {
      if (cancelled) return
      try {
        mod.default.init(clarityProjectId)
      } catch (error) {
        console.error('Clarity init failed:', error)
      }
    })
    return () => {
      cancelled = true
    }
  }, [clarityProjectId])

  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {ga4Id && <GoogleAnalytics gaId={ga4Id} />}
      {fbPixelId && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${fbPixelId}');fbq('track', 'PageView');`}
        </Script>
      )}
      {fbPixelId && (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  )
}

