import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '../components/HomeHero';
import BrowseSection from '../components/BrowseSection';
import TopConcepts from '../components/TopConcepts';
import KnowledgeGraph from '../components/KnowledgeGraph';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="The Buffett Archive - A comprehensive knowledge base for Warren Buffett's shareholder letters">
      <main>
        <HomeHero />
        <BrowseSection />
        <KnowledgeGraph />
        <TopConcepts />
      </main>
    </Layout>
  );
}
