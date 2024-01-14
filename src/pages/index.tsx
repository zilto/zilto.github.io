import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Main page`}
      description="Main page">
      <main>
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <Heading as="h1" className="hero__title" class="text-center">
              <p class="font-serif italic">How can less be more?</p>
              <p class="font-serif italic">More is more!</p>
              <p class="font-serif text-lg"> ‐Yngwie Malmsteem</p>
            </Heading>
          </div>
        </header>
        <div class="max-w-xl ml-auto mr-auto px-4 py-10 text-justify">
          <p> In 2019, I decided I would either learn the German or the Python language. I ended up going through the book <a class="italic" href="https://learncodethehardway.com/client/#/product/learn-python-the-hard-way-5e-2023/" target="_">Learn Python the Hard Way</a> while commuting between my full-time work, evening university classes, and home. Soon after, I learned about machine learning in the context of neurosciences and enrolled for a Master's in Computational Medicine. This website is an effort to document and share my programming journey.</p>

          <p>If there's an activity you've been interested in and putting away, I encourage you to stop reading this and go focus on that instead! You'll be amazed by the progress you've made in a week, a month, and a year from now. Practice makes perfect and more is more.</p>
        </div>
      </main>
    </Layout>
  );
}
