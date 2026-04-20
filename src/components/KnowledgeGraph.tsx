import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import styles from './KnowledgeGraph.module.css';

const nodesData = [
  // Letters (navy - #1e3a5f)
  { id: 'letter-1977', label: '1977 Letter', group: 'letters', title: '1977 Annual Letter' },
  { id: 'letter-1989', label: '1989 Letter', group: 'letters', title: '1989 Annual Letter' },
  { id: 'letter-1996', label: '1996 Letter', group: 'letters', title: '1996 Annual Letter' },
  // Concepts (green - #22c55e)
  { id: 'concept-intrinsic', label: 'Intrinsic Value', group: 'concepts', title: 'Intrinsic Value' },
  { id: 'concept-moat', label: 'Moat', group: 'concepts', title: 'Economic Moat' },
  { id: 'concept-bookvalue', label: 'Book Value', group: 'concepts', title: 'Book Value' },
  // Companies (gold - #c9a227)
  { id: 'company-berkshire', label: 'Berkshire', group: 'companies', title: 'Berkshire Hathaway' },
  { id: 'company-coke', label: 'Coca-Cola', group: 'companies', title: 'Coca-Cola' },
  { id: 'company-sees', label: "See's Candy", group: 'companies', title: "See's Candy" },
  // People (red - #ef4444)
  { id: 'person-munger', label: 'Charlie Munger', group: 'people', title: 'Charlie Munger' },
  { id: 'person-graham', label: 'Ben Graham', group: 'people', title: 'Benjamin Graham' },
];

const edgesData = [
  { from: 'letter-1977', to: 'concept-intrinsic' },
  { from: 'letter-1989', to: 'concept-intrinsic' },
  { from: 'letter-1977', to: 'concept-bookvalue' },
  { from: 'letter-1996', to: 'concept-moat' },
  { from: 'concept-moat', to: 'company-coke' },
  { from: 'concept-moat', to: 'company-sees' },
  { from: 'concept-intrinsic', to: 'company-berkshire' },
  { from: 'company-berkshire', to: 'person-munger' },
  { from: 'concept-intrinsic', to: 'person-graham' },
];

export default function KnowledgeGraph() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const nodes = new DataSet(nodesData);
    const edges = new DataSet(edgesData);

    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        font: {
          size: 14,
          face: 'Inter, sans-serif',
          color: '#1a1a2e',
        },
        borderWidth: 2,
        shadow: true,
      },
      edges: {
        width: 1,
        color: {
          color: '#c9a227',
          opacity: 0.6,
        },
        smooth: {
          type: 'continuous',
        },
      },
      groups: {
        letters: { color: { background: '#1e3a5f', border: '#1e3a5f' } },
        concepts: { color: { background: '#22c55e', border: '#22c55e' } },
        companies: { color: { background: '#c9a227', border: '#c9a227' } },
        people: { color: { background: '#ef4444', border: '#ef4444' } },
      },
      physics: {
        stabilization: {
          iterations: 200,
        },
        barnesHut: {
          gravitationalConstant: -2000,
          springConstant: 0.04,
        },
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
      },
    };

    const network = new Network(containerRef.current, { nodes, edges }, options);

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.graph} ref={containerRef} />
      <div className={styles.legend}>
        <h4>Legend</h4>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.letters}`} />
          <span>Letters</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.concepts}`} />
          <span>Concepts</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.companies}`} />
          <span>Companies</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.dot} ${styles.people}`} />
          <span>People</span>
        </div>
      </div>
      <div className={styles.stats}>
        <span>219 nodes</span>
        <span>•</span>
        <span>3,939+ connections</span>
      </div>
    </div>
  );
}