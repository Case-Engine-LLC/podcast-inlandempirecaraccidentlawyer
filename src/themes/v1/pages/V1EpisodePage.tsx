import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const episodeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1#webpage",
      "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1",
      "name": "The YOU Interview with Deborah Song | Episode 1 | Empire Law Firm with Deborah Song",
      "description": "Abby Arnold sits down with Deborah Song for an unfiltered conversation about her path from Moreno Valley to founding Empire Attorneys / Inland Injury in the community she grew up in.",
      "isPartOf": {
        "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#website"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".episode-description",
          ".episode-overview",
          ".key-takeaways"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://podcast-inlandempirecaraccidentlawy.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Episodes",
            "item": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#episodes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "The YOU Interview with Deborah Song",
            "item": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1"
          }
        ]
      }
    },
    {
      "@type": "PodcastEpisode",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1#episode",
      "name": "The YOU Interview with Deborah Song",
      "description": "Before you hire a personal injury lawyer in the Inland Empire, you should know who they really are. In this debut episode, Abby Arnold sits down with Deborah Song, founder of Inland Injury (dba of Empire Attorneys), for an unfiltered conversation about her path from middle-school political ambitions in the Inland Empire to becoming a Super Lawyers Rising Star and the only personal injury attorney operating full-time in Norco and Eastvale. Deborah shares her philosophy on client-first case strategy, why her firm pursues diminution-in-value and loss-of-use damages most firms skip, how she decides between negotiation and litigation, and why she's watching the Uber-backed California legislative push to cap contingency fees.",
      "episodeNumber": 1,
      "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1",
      "image": "https://podcast-inlandempirecaraccidentlawy.vercel.app/cover.jpg",
      "duration": "PT1H29M0S",
      "partOfSeries": {
        "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#podcast"
      },
      "author": {
        "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#host"
      },
      "publisher": {
        "@id": "https://inlandinjury.com/#org"
      },
      "inLanguage": "en-US",
      "genre": [
        "Personal Injury Law",
        "Legal Education",
        "California Personal Injury Law"
      ],
      "keywords": [
        "Empire Attorneys",
        "Inland Injury",
        "Inland Empire",
        "Personal Injury",
        "California Motorcycle Accidents"
      ],
      "isAccessibleForFree": true
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/episode/1#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is The YOU Interview with Deborah Song about?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The YOU Interview is the debut episode of Empire Law Firm with Deborah Song. Abby Arnold interviews Deborah about growing up in Moreno Valley, earning her B.A. from UC Riverside, working daytime hours at Orange County trial firms through law school, and why she founded Empire Attorneys to bring that level of representation back to the Inland Empire."
          }
        },
        {
          "@type": "Question",
          "name": "Why did Deborah Song start her own firm instead of joining a large firm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deborah explains that large-firm practice in Orange County meant high-volume case files with limited client contact. She wanted to run a firm where every client talks to the attorney handling the case — and where Inland Empire residents get the same trial-ready preparation she saw in Orange County. Selective intake makes that possible."
          }
        },
        {
          "@type": "Question",
          "name": "What makes motorcycle cases different from car cases in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deborah walks through motorcycle-specific issues: California lane-splitting law, insurer bias against riders, visibility and driver negligence arguments, and the common early-case tactics insurance companies use to minimize motorcycle claims. Episode examples are drawn from real cases the firm has handled."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reach Empire Attorneys / Inland Injury after this episode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact the firm through inlandinjury.com or by calling (951) 456-3891. Consultations are free, cases are handled on contingency, and Deborah personally evaluates new matters. The firm serves clients from Eastvale and Norco across the Inland Empire."
          }
        }
      ]
    }
  ]
}

export function generateEpisodeSchema(_episodeId: string) {
  return episodeSchema
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId: _episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
      />
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default V1EpisodePage
