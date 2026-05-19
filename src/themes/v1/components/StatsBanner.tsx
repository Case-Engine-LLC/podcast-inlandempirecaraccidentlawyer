'use client'

import React from 'react'
import { Star, ThumbsUp, Briefcase } from 'lucide-react'
import { stats } from '@/data/siteData'

type StatCard = {
  key: string
  bg: 'primary' | 'secondary'
  numberClass: string
  iconClass: string
  value: string
  Icon: React.ComponentType<{ size?: number; className?: string; fill?: string }>
  iconFill?: string
  label: string
  verb: string
}

const StatsBanner = () => {
  const cards: StatCard[] = []

  if (stats.rating && Number(stats.rating) > 0 && Number((stats as { reviewCount?: number }).reviewCount ?? 0) > 0) {
    cards.push({
      key: 'rating',
      bg: 'secondary',
      numberClass: 'text-white',
      iconClass: 'text-white',
      iconFill: 'currentColor',
      value: String(stats.rating),
      Icon: Star,
      label: 'Positive Reviews',
      verb: stats.ratingVerbalization || '',
    })
  }
  if (stats.satisfactionRate && Number(stats.satisfactionRate) > 0 && stats.satisfactionLabel) {
    cards.push({
      key: 'satisfaction',
      bg: 'primary',
      numberClass: 'text-secondary',
      iconClass: 'text-secondary',
      iconFill: 'currentColor',
      value: `${stats.satisfactionRate}%`,
      Icon: ThumbsUp,
      label: stats.satisfactionLabel,
      verb: stats.satisfactionVerbalization || '',
    })
  }
  if (stats.casesHandled && Number(stats.casesHandled) > 0 && stats.casesLabel) {
    cards.push({
      key: 'cases',
      bg: 'secondary',
      numberClass: 'text-white',
      iconClass: 'text-white',
      value: `${stats.casesHandled}+`,
      Icon: Briefcase,
      label: stats.casesLabel,
      verb: stats.casesVerbalization || '',
    })
  }

  if (cards.length === 0) return null

  const gridCols = cards.length === 1
    ? 'sm:grid-cols-1 md:grid-cols-1 max-w-xl mx-auto'
    : cards.length === 2
      ? 'sm:grid-cols-2 md:grid-cols-2'
      : 'sm:grid-cols-2 md:grid-cols-3'

  return (
    <section className="bg-white py-0 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
          {cards.map((card) => (
            <div
              key={card.key}
              className={`bg-${card.bg} rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left`}
            >
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className={`${card.numberClass} text-4xl md:text-6xl font-bold`}>{card.value}</span>
                <card.Icon size={56} className={card.iconClass} fill={card.iconFill} />
              </div>
              <p className="text-white text-xl md:text-2xl font-bold mb-3">{card.label}</p>
              <p className="text-white/85 text-sm md:text-base leading-relaxed">{card.verb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
