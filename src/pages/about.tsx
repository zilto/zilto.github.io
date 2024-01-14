import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import portrait from "@site/static/img/portrait.jpg"

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About`}
      description="About">
      <main>
        <div class="max-w-3xl ml-auto mr-auto">
          <div class="grid grid-cols-3 gap-4">
              <div class="col-span-1 p-3 border-r">
                  <img class="object-contain h-64 w-64" src={portrait} alt="portrait"/>
              </div>
              <div class="col-span-2 p-6">
                  <p>
                      Hi, I'm Thierry Jean&nbsp;👋 I'm a machine learning engineer 
                      
                      
                      I'm a last year <b>M.Sc. student in Computational medicine</b> at Université de Montréal. I'll soon be looking for an <b>ML Engineering role</b>, ideally platform-side. I find fulfillment in building awesome tools to make my team's life easier!
                  </p>
                  <br></br>
                  <p>
                      My research objective is to forecast impairments of psychiatric patients based on their smartphone sensor data. I apply exciting new methods for <b>ordinal regression</b> (<a href="https://raschka-research-group.github.io/coral-pytorch/">CORN</a>) and <b>explainability</b> (<a href="https://github.com/feedzai/timeshap">TimeSHAP</a>) with RNNs to create tools for care providers. I implemented efficient ML experimentation with <b>AWS, Metaflow and Weights&Biases</b>.
                  </p>
                  <br></br>
                  <p>
                      I'm also <b>instructor assistant</b> at <a href="https://www.getsphere.com/">Sphere</a>&nbsp;🔮, which offers live courses to tech professionals. I worked with leading expert in <b>causal inference, NLP, and search</b> to deliver courses with actionable learning outcomes&nbsp;🎯
                  </p>
                  <br></br>
                  <p>
                      ⏳&nbsp;During my data science internship at <a href="https://moov.ai/en/">MoovAI</a>, I worked on <b>dynamic price bidding</b> for the ad exchange <a href="https://www.sharethrough.com/">ShareThrough</a>. During R&D, I built the experimentation system for large scale automated backtesting of candidate algorithms.</p>
                  <br></br>
                  <p>
                      I learned to code while commuting with the book <i><a href="https://learncodethehardway.org/python/">Learn Python the Hard Way</a></i>. I am hooked since then! Hobby-wise, I code for fun to create <a href="https://www.instagram.com/mattdesl_art/">algorithmic</a> and <a href="https://www.reddit.com/r/PlotterArt/">plotter</a> art, I started playing guitar at age 11, and I own way too many rogue-lite.
                  </p>

              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
