import React from 'react';
import Link from '@docusaurus/Link';
import styles from './BrowseSection.module.css';

interface Card {
  title: string;
  meta: string;
  description: string;
  to: string;
  icon: string;
}

const cards: Card[] = [
  {
    title: 'Letters',
    meta: '98 letters · 1956–2025',
    description: 'Partnership letters, Berkshire annual letters, and special communications',
    to: '/docs/letters/intro',
    icon: '📬',
  },
  {
    title: 'Investment Concepts',
    meta: '49 concepts',
    description: 'Intrinsic value, moat, margin of safety, and more',
    to: '/docs/concepts/intro',
    icon: '💡',
  },
  {
    title: 'Companies',
    meta: '61 companies',
    description: 'Coca-Cola, GEICO, Apple, and 58 more',
    to: '/docs/companies/intro',
    icon: '🏢',
  },
  {
    title: 'People',
    meta: '7 key figures',
    description: 'Charlie Munger, Ben Graham, Ajit Jain, and others',
    to: '/docs/people/intro',
    icon: '👤',
  },
];

export default function BrowseSection(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Browse the Archive</h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Link key={card.title} to={card.to} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <div className={styles.cardMeta}>{card.meta}</div>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.arrow}>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
