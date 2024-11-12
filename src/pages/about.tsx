import Layout from '@theme/Layout';
import portrait from "@site/static/img/portrait.jpg"

export default function Home(): JSX.Element {
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
                Hi, I'm Thierry Jean&nbsp;👋 I'm a core contributor and developer advocate for the open source dataflow framework <a href="https://github.com/dagworks-inc/hamilton" target="_">Hamilton</a>. I'm currently a contractor for the startup <a href="https://www.dagworks.io" target="_">DAGWorks</a>.
              </p>
              <p>
                I completed a research Master's in Computational medicine at Université de Montréal. forecast impairments of psychiatric patients based on their smartphone sensor data. I apply exciting new methods for <b>ordinal regression</b> (<a href="https://raschka-research-group.github.io/coral-pytorch/">CORN</a>) and <b>explainability</b> (<a href="https://github.com/feedzai/timeshap">TimeSHAP</a>) with RNNs to create tools for care providers. I implemented efficient ML experimentation with <b>AWS, Metaflow and Weights&Biases</b>.
              </p>
              <p>
                I'm also <b>instructor assistant</b> at <a href="https://www.getsphere.com/">Sphere</a>&nbsp;🔮, which offers live courses to tech professionals. I worked with leading expert in <b>causal inference, NLP, and search</b> to deliver courses with actionable learning outcomes&nbsp;🎯
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
