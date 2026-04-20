import React from 'react';
import Layout from '@theme/Layout';
import KnowledgeGraph from '../components/KnowledgeGraph';

export default function GraphPage() {
  return (
    <Layout
      title="Knowledge Graph"
      description="Interactive visualization of connections between letters, concepts, companies, and people"
    >
      <main style={{ padding: '24px' }}>
        <KnowledgeGraph />
      </main>
    </Layout>
  );
}