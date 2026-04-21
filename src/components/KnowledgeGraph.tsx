import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import styles from './KnowledgeGraph.module.css';

const nodesData = [
  // Letters
  { id: 'letter-1977', label: '1977 Letter', group: 'letters', title: '1977 Annual Letter' },
  { id: 'letter-1989', label: '1989 Letter', group: 'letters', title: '1989 Annual Letter' },
  { id: 'letter-1996', label: '1996 Letter', group: 'letters', title: '1996 Annual Letter' },
  { id: 'letter-2007', label: '2007 Letter', group: 'letters', title: '2007 Annual Letter' },
  // Concepts
  { id: 'concept-intrinsic', label: 'Intrinsic Value', group: 'concepts', title: 'Intrinsic Value' },
  { id: 'concept-moat', label: 'Moat', group: 'concepts', title: 'Economic Moat' },
  { id: 'concept-bookvalue', label: 'Book Value', group: 'concepts', title: 'Book Value' },
  { id: 'concept-float', label: 'Float', group: 'concepts', title: 'Insurance Float' },
  // Companies
  { id: 'company-berkshire', label: 'Berkshire', group: 'companies', title: 'Berkshire Hathaway' },
  { id: 'company-coke', label: 'Coca-Cola', group: 'companies', title: 'Coca-Cola' },
  { id: 'company-geico', label: 'GEICO', group: 'companies', title: 'GEICO Insurance' },
  // People
  { id: 'person-munger', label: 'Charlie Munger', group: 'people', title: 'Charlie Munger' },
  { id: 'person-graham', label: 'Ben Graham', group: 'people', title: 'Benjamin Graham' },
];

const edgesData = [
  { from: 'letter-1977', to: 'concept-intrinsic' },
  { from: 'letter-1977', to: 'concept-bookvalue' },
  { from: 'letter-1989', to: 'concept-intrinsic' },
  { from: 'letter-1996', to: 'concept-moat' },
  { from: 'letter-2007', to: 'concept-moat' },
  { from: 'concept-moat', to: 'company-coke' },
  { from: 'concept-moat', to: 'company-geico' },
  { from: 'concept-intrinsic', to: 'company-berkshire' },
  { from: 'concept-intrinsic', to: 'concept-float' },
  { from: 'company-berkshire', to: 'person-munger' },
  { from: 'concept-intrinsic', to: 'person-graham' },
  { from: 'concept-bookvalue', to: 'company-berkshire' },
];

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    const nodes = new DataSet(nodesData);
    const edges = new DataSet(edgesData);

    const options = {
      nodes: {
        shape: 'dot',
        size: 18,
        font: { size: 13, face: 'Inter, sans-serif', color: '#1a1a2e' },
        borderWidth: 2,
        shadow: true,
      },
      edges: {
        width: 1.2,
        color: { color: '#c9a227', opacity: 0.5 },
        smooth: { type: 'continuous' },
      },
      groups: {
        letters: { color: { background: '#1e3a5f', border: '#1e3a5f' } },
        concepts: { color: { background: '#16a34a', border: '#16a34a' } },
        companies: { color: { background: '#c9a227', border: '#c9a227' } },
        people: { color: { background: '#dc2626', border: '#dc2626' } },
      },
      physics: {
        stabilization: { iterations: 150 },
        barnesHut: { gravitationalConstant: -2000, springConstant: 0.04 },
      },
      interaction: { hover: true, tooltipDelay: 200 },
    };

    const network = new Network(containerRef.current, { nodes, edges }, options);
    return () => network.destroy();
  }, [isClient]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Knowledge Graph</h2>
        <p className={styles.subtitle}>Explore how letters, concepts, companies and people connect</p>
      </div>
      <div className={styles.graphWrapper}>
        <div className={styles.graph} ref={containerRef} />
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.letters}`} />Letters
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.concepts}`} />Concepts
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.companies}`} />Companies
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.people}`} />People
          </div>
        </div>
      </div>
    </section>
  );
}
