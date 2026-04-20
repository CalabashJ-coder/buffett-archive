import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './HomeHero.module.css';

export default function HomeHero(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/docs/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <svg viewBox="0 0 100 100" className={styles.logoSvg}>
            <circle cx="50" cy="50" r="45" fill="#1a1a2e" />
            <text x="50" y="58" textAnchor="middle" fill="#c9a227" fontSize="36" fontWeight="bold" fontFamily="Georgia, serif">BA</text>
          </svg>
        </div>
        <h1 className={styles.title}>The Buffett Archive</h1>
        <p className={styles.subtitle}>
          A comprehensive knowledge base for Warren Buffett's shareholder letters,
          spanning over 70 years of investment wisdom.
        </p>

        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search letters, concepts, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>70</span>
            <span className={styles.statLabel}>Years</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>98</span>
            <span className={styles.statLabel}>Letters</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>3,900+</span>
            <span className={styles.statLabel}>Cross-links</span>
          </div>
        </div>
      </div>
    </section>
  );
}