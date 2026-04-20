import React from 'react';
import Layout from '@theme/Layout';
import HomeHero from '../components/HomeHero';
import QuickAccess from '../components/QuickAccess';
import TopConcepts from '../components/TopConcepts';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Welcome"
      description="The Buffett Archive - A comprehensive knowledge base for Warren Buffett's shareholder letters">
      <main>
        <HomeHero />
        <QuickAccess />
        <TopConcepts />
      </main>
    </Layout>
  );
}