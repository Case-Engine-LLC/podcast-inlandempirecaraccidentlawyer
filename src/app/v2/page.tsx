import V2Home from '@/themes/v2/pages/V2Home'
import { getAllEpisodes } from '@/lib/data'

export const revalidate = 3600

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://inlandinjury.com/#org",
      "name": "Empire Attorneys (dba Inland Injury)",
      "legalName": "Empire Attorneys (dba Inland Injury)",
      "url": "https://inlandinjury.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/logo.svg",
        "width": 200,
        "height": 60
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/Hero.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "Empire Attorneys (doing business as Inland Injury) is a California personal injury firm founded by Deborah Song. The firm operates from Eastvale and Norco and represents injured Californians in car, truck, motorcycle, premises, construction, and catastrophic injury matters.",
      "telephone": "+19514563891",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12495 Limonite Ave, Ste 1122",
        "addressLocality": "Eastvale",
        "addressRegion": "CA",
        "postalCode": "92880",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "California"
      },
      "knowsAbout": [
        "Car Accident Law",
        "Truck Accident Law",
        "Motorcycle Accident Law",
        "Wrongful Death Law",
        "Catastrophic Injury Law"
      ],
      "sameAs": [
        "https://inlandinjury.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#website",
      "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/",
      "name": "Empire Law Firm with Deborah Song",
      "description": "A podcast by Deborah Song of Empire Attorneys / Inland Injury helping Inland Empire residents understand California personal injury law.",
      "publisher": {
        "@id": "https://inlandinjury.com/#org"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://podcast-inlandempirecaraccidentlawy.vercel.app/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#webpage",
      "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/",
      "name": "Empire Law Firm with Deborah Song | Empire Attorneys (dba Inland Injury)",
      "description": "Deborah Song covers California personal injury — motorcycle, car, truck, and premises cases — for Inland Empire drivers and families.",
      "isPartOf": {
        "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#website"
      },
      "about": {
        "@id": "https://inlandinjury.com/#org"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".podcast-description",
          ".about-section",
          ".episode-description"
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
          }
        ]
      }
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#podcast",
      "name": "Empire Law Firm with Deborah Song",
      "description": "Empire Law Firm with Deborah Song covers Inland Empire personal injury — car, motorcycle, truck, and catastrophic injury cases — with Orange County-level trial preparation brought back to Riverside and San Bernardino Counties.",
      "url": "https://podcast-inlandempirecaraccidentlawy.vercel.app/",
      "image": "https://podcast-inlandempirecaraccidentlawy.vercel.app/Hero.jpg",
      "author": {
        "@type": "Person",
        "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#host",
        "name": "Deborah Song",
        "givenName": "Deborah",
        "familyName": "Song",
        "jobTitle": "Founder & Personal Injury Trial Attorney",
        "image": "https://podcast-inlandempirecaraccidentlawy.vercel.app/headshot-deborah-song.avif",
        "worksFor": {
          "@id": "https://inlandinjury.com/#org"
        },
        "sameAs": [
          "https://inlandinjury.com/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Western State University College of Law"
        }
      },
      "webFeed": [],
      "genre": [
        "Legal",
        "Personal Injury Law",
        "Education"
      ],
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://inlandinjury.com/#org"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-inlandempirecaraccidentlawy.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What topics does the Empire Law Firm podcast cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The podcast covers personal injury and car accident topics relevant to Inland Empire residents — car, motorcycle, truck, premises, construction, and catastrophic injury cases across Riverside and San Bernardino Counties. Deborah Song brings Orange County trial firm methodology to every episode, including how insurance carriers actually evaluate claims and when a case needs to be litigated."
          }
        },
        {
          "@type": "Question",
          "name": "Who hosts the podcast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abby Arnold hosts the podcast and interviews Deborah Song, founder of Empire Attorneys (doing business as Inland Injury). Deborah Song is a peer-nominated California Super Lawyers Rising Star who has helped recover more than $50 million for injured Californians and — by her own count — is the only full-time personal injury attorney practicing in Norco and Eastvale."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Deborah Song bring Orange County methodology to the Inland Empire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deborah Song worked at Orange County personal injury trial firms throughout law school and the early part of her career. She explains that Inland Empire residents historically had to drive into Orange County for that level of case preparation, and that Empire Attorneys exists to bring it back to the community she grew up in — with the same file discipline, medical documentation, and trial readiness."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Empire Attorneys / Inland Injury?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Empire Attorneys through inlandinjury.com or call (951) 456-3891. The firm offers free consultations and works on contingency — no attorney’s fees unless a recovery is obtained. Offices are located in Eastvale and Norco; the firm also handles identity-theft consumer protection cases nationally under federal law."
          }
        }
      ]
    }
  ]
}

export default async function Page() {
  const episodes = await getAllEpisodes()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <V2Home episodes={episodes} />
    </>
  )
}
