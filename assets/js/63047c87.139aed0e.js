"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5654],{9043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(5893),o=n(1151);const a={slug:"perks-of-hamilton",title:"The perks of creating dataflows with Hamilton",authors:"tj",tags:["Hamilton"]},r=void 0,s={permalink:"/blog/perks-of-hamilton",source:"@site/blog/2022-08-08-perks-of-hamilton/index.md",title:"The perks of creating dataflows with Hamilton",description:"Hamilton is an open-source Python microframework developed at Stitch Fix. It automagically organizes Python functions into a directed acyclic graph (DAG) from their name and type annotations. It was originally created to facilitate working with tabular datasets containing hundreds of columns, but it\u2019s general enough to enable many data science or machine learning (ML) scenarios.",date:"2022-08-08T00:00:00.000Z",tags:[{inline:!0,label:"Hamilton",permalink:"/blog/tags/hamilton"}],readingTime:6.975,hasTruncateMarker:!0,authors:[{name:"Thierry Jean",url:"https://github.com/zilto",imageURL:"https://github.com/zilto.png",key:"tj",page:null}],frontMatter:{slug:"perks-of-hamilton",title:"The perks of creating dataflows with Hamilton",authors:"tj",tags:["Hamilton"]},unlisted:!1,prevItem:{title:"Simplify Airflow DAG Creation and Maintenance with Hamilton",permalink:"/blog/airflow-hamilton"}},l={authorsImageUrls:[void 0]},d=[{value:"Quick introduction to Hamilton",id:"quick-introduction-to-hamilton",level:2},{value:"Suggested development workflow",id:"suggested-development-workflow",level:2},{value:"Improve code readability",id:"improve-code-readability",level:2},{value:"Facilitate reproducible pipeline",id:"facilitate-reproducible-pipeline",level:2},{value:"Enable faster iteration cycles",id:"enable-faster-iteration-cycles",level:2},{value:"Reduce the development-production gap",id:"reduce-the-development-production-gap",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/stitchfix/hamilton",children:"Hamilton"})," is an open-source Python microframework developed at ",(0,i.jsx)(t.a,{href:"https://www.stitchfix.com/",children:"Stitch Fix"}),". It automagically organizes Python functions into a ",(0,i.jsx)(t.em,{children:"directed acyclic graph"})," (DAG) from their name and type annotations. It was originally created to facilitate working with tabular datasets containing hundreds of columns, but it\u2019s general enough to enable many data science or machine learning (ML) scenarios."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["crosspost from ",(0,i.jsx)(t.a,{href:"https://medium.com/@thijean/the-perks-of-creating-dataflows-with-hamilton-36e8c56dd2a",children:"https://medium.com/@thijean/the-perks-of-creating-dataflows-with-hamilton-36e8c56dd2a"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Over the last year, I used Hamilton both in academic research to build forecast models from smartphone sensor data, and in industry to implement dynamic bidding strategies for an ad exchange. Amongst a sea of awesome open-source tools, Hamilton happened to neatly suit my needs. Below, I will give a brief overview of Hamilton, and break down what I believe to be its key strengths:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Improve code readability"}),"\n",(0,i.jsx)(t.li,{children:"Facilitate reproducible pipelines"}),"\n",(0,i.jsx)(t.li,{children:"Enable faster iteration cycles"}),"\n",(0,i.jsx)(t.li,{children:"Reduce the development-production gap"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To learn more about the design and the development of the framework, the ",(0,i.jsx)(t.a,{href:"https://multithreaded.stitchfix.com/blog/",children:"Stitch Fix\u2019s engineering blog"})," is a gold mine."]}),"\n",(0,i.jsx)(t.h2,{id:"quick-introduction-to-hamilton",children:"Quick introduction to Hamilton"}),"\n",(0,i.jsxs)(t.p,{children:["Hamilton relies on 3 main components: the ",(0,i.jsx)(t.em,{children:"functions"}),", the ",(0,i.jsx)(t.em,{children:"driver"}),", and the ",(0,i.jsx)(t.em,{children:"desired outputs"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"Functions"})," are your regular Python functions, but each needs to have a unique name and type annotated inputs and outputs, and be defined within a Python module (.py file)."]}),"\n",(0,i.jsxs)(t.p,{children:["One or more modules are passed to the ",(0,i.jsx)(t.em,{children:"driver"})," along a configuration object. The driver builds a DAG by linking a function\u2019s arguments (named and annotated) to other functions\u2019 name. At this point, no computation has happened yet."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(8462).Z+"",width:"1037",height:"682"})}),"\n",(0,i.jsxs)(t.p,{children:["Finally, a list of ",(0,i.jsx)(t.em,{children:"desired outputs"}),", which can be any node from the graph, is passed to the driver. When ",(0,i.jsx)(t.em,{children:"executed"}),", the driver computes the desired output by running only the necessary functions. By default, Hamilton outputs pandas dataframe, but it can also return a dictionary containing arbitrary objects."]}),"\n",(0,i.jsx)(t.h2,{id:"suggested-development-workflow",children:"Suggested development workflow"}),"\n",(0,i.jsxs)(t.p,{children:["My preferred development workflow relies on opening side-to-side a Python module and a Jupyter notebook with the ",(0,i.jsx)(t.a,{href:"https://ipython.org/ipython-doc/3/config/extensions/autoreload.html",children:"%autoreload ipython magic"})," configured (code snippet below). I write my data transformation in the module, and in the notebook, I instantiate a Hamilton driver and test the DAG with a small subset of data. Because of ",(0,i.jsx)(t.code,{children:"%autoreload"}),", the module is reimported with the latest changes each time the Hamilton DAG is executed. This approach prevents out-of-order notebook executions, and functions always reside in clean .py files."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Jupyter notebook autoreload',children:"from hamilton.driver import Driver\nimport my_module  # data transformation module\n\n%load_ext autoreload   # load extension\n%autoreload 1  # configure autoreload to only affect specified files\n%aimport my_module  # specify my_module to be reloaded\n\nhamilton_driver = Driver({}, my_module)\nhamilton_driver.execute(['desired_output1', 'desired_output2'])\n"})}),"\n",(0,i.jsx)(t.h2,{id:"improve-code-readability",children:"Improve code readability"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Zen of Python #7: Readability counts"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Code readability is multifaceted, but can be summarized to making code easy to understand for colleagues, reviewers, and your future self. You may think that your pandas operations are self-evident, or that writing a separate function for 1\u20133 lines of numpy code is overkill, ",(0,i.jsx)(t.strong,{children:"but you\u2019re likely wrong"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Hamilton ABC',children:'import pandas as pd\n\ndef avg_3wk_spend(spend: pd.Series) -> pd.Series:\n    """Rolling 3 week average spend."""\n    return spend.rolling(3).mean()\n\ndef spend_per_signup(spend: pd.Series, signups: pd.Series) -> pd.Series:\n    """The cost per signup in relation to spend."""\n    return spend / signups\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Simply by requiring unique function names and type annotations, Hamilton pushes developers to divide the pipeline into steps that each hold their own ",(0,i.jsx)(t.strong,{children:"intent"}),". It generates a ",(0,i.jsx)(t.strong,{children:"semantic layer"})," that is decoupled from the data transformation implementation. In the above example, the name ",(0,i.jsx)(t.code,{children:"avg_3wk_spend"})," and the docstring communicate a clear intent compared to the pandas code ",(0,i.jsx)(t.code,{children:"spend.rolling(3).mean()"})," (note that the time unit couldn\u2019t be inferred!) Communicating the intent or the business purpose of a function helps understand the broader pipeline, but also allows collaborators to improve or replace a given implementation while preserving the intent."]}),"\n",(0,i.jsxs)(t.p,{children:["Breaking down complex functions into simpler single-purpose functions has many other benefits. For one, abstracting repetitive or redundant operations makes your code ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",children:"DRY"}),"-er and easier to unit test and debug. Also, meaningful results become more clearly separated from intermediary transformations. Utility functions to view the computation graph diagram can be helpful during the development process."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4917).Z+"",width:"1400",height:"685"})}),"\n",(0,i.jsx)(t.h2,{id:"facilitate-reproducible-pipeline",children:"Facilitate reproducible pipeline"}),"\n",(0,i.jsxs)(t.p,{children:["Both in academia and in industry, data science and ML projects generate a myriad of results and artifacts. ",(0,i.jsx)(t.em,{children:"Experiment tracking"})," typically refers to the systematic and organized tracking of those artifacts. It\u2019s most often discussed in the context of ML training and hyperparameter optimization, leaving out data transformation pipelines despite their influence on the former."]}),"\n",(0,i.jsxs)(t.p,{children:["With Hamilton, the end-to-end transformations can be tracked from a few parameters. Since the Hamilton DAG is built in a deterministic manner, it doesn\u2019t have to be logged; only the functions it\u2019s built need to. No large artifacts have to be created! When running experiments with your favorite tool (MLFlow, Weights&biases, etc.), simply log the Hamilton ",(0,i.jsx)(t.strong,{children:"driver configuration"})," and the ",(0,i.jsx)(t.strong,{children:"Git SHA1"})," of your python modules. To go a step further, you can store a ",(0,i.jsx)(t.strong,{children:"picture of the executed DAG"})," and track the ",(0,i.jsx)(t.strong,{children:"package version"})," in case of future behavior change."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Visualize the DAG',children:'from hamilton.driver import Driver\n\nimport time_transform\nimport location_transform\n\nif __name__ == "__main__":\n    config = dict(connection={"database": ":memory:"})  # required driver config\n    hamilton_driver = Driver(config, time_transform, location_transform)\n\n    # view the complete computation DAG\n    hamilton_driver.display_all_functions("./file.dot", {})\n    # view only the path to the specified outputs\n    hamilton_driver.visualize_execution(["period_of_day", "location_jump_speed"], "./file.dot", {})\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Alt text",src:n(4582).Z+"",width:"1400",height:"1111"})}),"\n",(0,i.jsx)(t.h2,{id:"enable-faster-iteration-cycles",children:"Enable faster iteration cycles"}),"\n",(0,i.jsxs)(t.p,{children:["Many \u201cDAG-based\u201d frameworks (Airflow, Metaflow, flyte, Prefect, etc.) are gaining traction in the data science and ML community. However, most are intended for orchestration, which is broader than the data transformation problem Hamilton aims to solve. It remains non-trivial to identify frameworks that align with your needs, have a simple, clear and well-documented API, require minimal ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Glue_code",children:"glue code"}),", and are easy to move away from."]}),"\n",(0,i.jsx)(t.p,{children:"Orchestration frameworks rely on first defining processing steps, and then manually connecting them into a DAG. Connections have to be specified through decorators, classes, functions, or even YAML configuration files. Such approach imposes mental burden on data scientists and forces them to rewrite the DAG every time they want to investigate a new hypothesis. The problem only worsens as a project scales in complexity. Because this process is error-prone, a lot of time can be spent wrestling with the framework. Automatically building the DAG can lead to productivity improvements."}),"\n",(0,i.jsxs)(t.p,{children:["Relying on regular Python functions, Hamilton requires minimal refactoring to get started (a ",(0,i.jsx)(t.a,{href:"https://hamilton-docs.gitbook.io/docs/best-practices/migrating-to-hamilton",children:"robust migration"})," guide is available). This allows adopters to make \u201cquick wins\u201d and eases the onboarding of colleagues. For complex scenarios, powerful features are accessible through function ",(0,i.jsx)(t.a,{href:"https://hamilton-docs.gitbook.io/docs/reference/api-reference/available-decorators",children:"decorators"}),". In all cases, your code remains usable outside of Hamilton (minus the decorators)."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Aside"}),": On the opposite end of the spectrum, I worked with ",(0,i.jsx)(t.a,{href:"https://kedro.readthedocs.io/en/stable/",children:"Kedro"})," which is a holistic and opinionated framework for data pipelines, and had a positive experience. It can feel restrictive at times, but the built-in conventions and the extensive set of tools it provides (i.e., configuration, versioning, tests, notebooks, etc.) does improve team productivity and solution robustness."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"reduce-the-development-production-gap",children:"Reduce the development-production gap"}),"\n",(0,i.jsx)(t.p,{children:"While Hamilton is a great framework for iterations, how does it fair in production? It might work for Stitch Fix, but can it handle my specific business use case? Is it computationally efficient? The TL;DR. is yes!"}),"\n",(0,i.jsxs)(t.p,{children:["In Hamilton, the driver receives the DAG instructions and later executes the computation. Originally, it relied on the pandas library to calculate new columns, which can ",(0,i.jsx)(t.a,{href:"https://pandas.pydata.org/docs/user_guide/scale.html",children:"become inefficient at scale"}),". An exciting addition was the release of ",(0,i.jsx)(t.a,{href:"https://multithreaded.stitchfix.com/blog/2022/02/22/scaling-hamilton/",children:"Spark, Dask, and Ray"})," drivers. Now, pandas data transformation can be executed by the Hamilton Dask driver and get the performance increase for free. It allows data scientists to define and test functions locally, and move to production without refactoring. What\u2019s not to love!"]}),"\n",(0,i.jsxs)(t.p,{children:["Recently, ",(0,i.jsx)(t.a,{href:"https://multithreaded.stitchfix.com/blog/2022/07/26/hamilton-data-quality/",children:"data validation"})," at the node level and support for the ",(0,i.jsx)(t.a,{href:"https://pandera.readthedocs.io/en/stable/",children:"pandera"})," library (another great lightweight package!) were added. The development team is actively improving integration with open source tools. For advanced users, it\u2019s possible to extend the framework\u2019s standard interfaces (driver, decorator, result builder, etc.) to meet your requirements. People at Stitch Fix are very responsive and eager to help through ",(0,i.jsx)(t.a,{href:"https://github.com/stitchfix/hamilton/issues",children:"GitHub issues"})," and their ",(0,i.jsx)(t.a,{href:"https://join.slack.com/t/hamilton-opensource/shared_invite/zt-1bjs72asx-wcUTgH7q7QX1igiQ5bbdcg",children:"Slack channel"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["Hamilton is a great tool for data scientists and ML folks. I hope the overview provided convinced you to give it a try. You\u2019re only ",(0,i.jsx)(t.code,{children:"pip install sf-hamilton"})," away from getting started!"]}),"\n",(0,i.jsx)(t.p,{children:"References:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Hamilton GitHub page (2022), ",(0,i.jsx)(t.a,{href:"https://github.com/stitchfix/hamilton",children:"https://github.com/stitchfix/hamilton"})]}),"\n",(0,i.jsxs)(t.li,{children:["Stich Fix engineering blog (2022), ",(0,i.jsx)(t.a,{href:"https://multithreaded.stitchfix.com/engineering/",children:"https://multithreaded.stitchfix.com/engineering/"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4917:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-1-de0e4d5ca2f03b8c4b82906475014bb9.png"},4582:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-2-98cbabbde819e68d86b0c6f9bd2ff376.png"},8462:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-546b423881f98909147206416b8aa782.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(7294);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);