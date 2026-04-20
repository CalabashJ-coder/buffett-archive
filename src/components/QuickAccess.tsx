import React from 'react';
import Link from '@docusaurus/Link';
import styles from './QuickAccess.module.css';

interface Card {
  title: string;
  description: string;
  to: string;
  icon: string;
}

const cards: Card[] = [
  {
    title: 'Letters',
    description: 'Explore shareholder letters from Buffett Partnerships and Berkshire Hathaway',
    to: '/docs/letters/intro',
    icon: '📄',
  },
  {
    title: 'Concepts',
    description: 'Investment principles and business concepts explained',
    to: '/docs/concepts/intro',
    icon: '💡',
  },
  {
    title: 'Companies',
    description: 'Businesses mentioned in Buffett\'s letters and analyses',
    to: '/docs/companies/intro',
    icon: '🏢',
  },
  {
    title: 'People',
    description: 'Partners, managers, and investors referenced by Buffett',
    to: '/docs/people/intro',
    icon: '👤',
  },
];

export default function QuickAccess(): JSX.Element {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Quick Access</h2>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Link key={card.title} to={card.to} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}