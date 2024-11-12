import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Main page`}
      description="Main page">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h2" className="hero__title" class="text-center">
            <p class="font-serif italic">How can less be more?</p>
            <p class="font-serif italic">More is more!</p>
            <p class="font-serif text-lg"> ‐Yngwie Malmsteem</p>
          </Heading>
        </div>
      </header>
      <main>
        <div class="max-w-xl ml-auto mr-auto px-4 py-10 text-justify">
          <p>
            I'm Thierry &nbsp;👋 I'm a machine learning engineer, data scientist, and open source developer. I maintain the libraries <a href="https://github.com/dagworks-inc/hamilton" target="_">Hamilton</a> for lightweight data orchestration and <a href="https://github.com/dagworks-inc/burr" target="_">Burr</a> for LLM agents.
          </p>
          <p>
            A few things I did:
            <li>Consultant to implement dynamic bidding for an ad exchange</li>
            <li>Build the ML platform for my graduate research lab</li>
            <li>Taught advanced topics around LLMs, ML-powered search, and causal inference to learners from Amazon, Snapchat, PayPal, Instacart, Tinder, etc.</li>
            <li>Manage client-facing Power BI products at a SaaS company</li>
            <li>Conduct psychometric research with managers and C-level executives in the insurance and banking sectors</li>
            <li>Give paid public-speaking workshops to university students</li>
            <li>Contributed code, issues, or blog posts to open source projects: dlt, Ibis, Instructor, OpenVINO, LanceDB, PyTorch Lightning, and more. </li>
          </p>
          <p>
            My ability to learn and my empathy allow me to quickly grasp new domains, understand users needs, and build meaningful connections. Hence, I particularly love working in startup environments where shipping features that provide value to users is a priority.
          </p>
          <p>
            If there's an activity you've been interested in and putting away, I encourage you to stop reading this and go focus on that instead! You'll be amazed by the progress you've made in a week, a month, and a year from now. Practice makes perfect and more is more.
          </p>
        </div>
      </main>
    </Layout>
  );
}
