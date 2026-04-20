import React from 'react';
import Link from '@docusaurus/Link';
import styles from './TopConcepts.module.css';

interface Concept {
  name: string;
  count: number;
  slug: string;
}

const topConcepts: Concept[] = [
  { name: 'Intrinsic Value', count: 312, slug: '/docs/concepts/intrinsic-value' },
  { name: 'Moat', count: 287, slug: '/docs/concepts/moat' },
  { name: 'Margin of Safety', count: 245, slug: '/docs/concepts/margin-of-safety' },
  { name: 'Mr. Market', count: 198, slug: '/docs/concepts/mr-market' },
  { name: 'Owner Earnings', count: 176, slug: '/docs/concepts/owner-earnings' },
  { name: 'Circle of Competence', count: 165, slug: '/docs/concepts/circle-of-competence' },
  { name: 'Weighting', count: 154, slug: '/docs/concepts/weighting' },
  { name: 'Deferred Taxes', count: 143, slug: '/docs/concepts/deferred-taxes' },
  { name: 'Float', count: 132, slug: '/docs/concepts/float' },
  { name: 'Earnings Power Value', count: 121, slug: '/docs/concepts/earnings-power-value' },
  { name: 'Goodwill', count: 115, slug: '/docs/concepts/goodwill' },
  { name: 'Book Value', count: 108, slug: '/docs/concepts/book-value' },
  { name: 'Special Situation', count: 97, slug: '/docs/concepts/special-situation' },
  { name: 'Barbarians at the Gate', count: 89, slug: '/docs/concepts/barbarians-at-the-gate' },
  { name: 'Covenant', count: 82, slug: '/docs/concepts/covenant' },
];

export default function TopConcepts(): JSX.Element {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Top Concepts</h2>
      <div className={styles.conceptsGrid}>
        {topConcepts.map((concept) => (
          <Link key={concept.name} to={concept.slug} className={styles.concept}>
            <span className={styles.conceptName}>{concept.name}</span>
            <span className={styles.conceptCount}>{concept.count}</span>
          </Link>
        ))}
      </div>
      <div className={styles.viewAll}>
        <Link to="/docs/concepts/intro" className={styles.viewAllLink}>
          View All Concepts →
        </Link>
      </div>
    </section>
  );
}