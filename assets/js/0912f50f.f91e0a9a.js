"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1416],{9490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(5893),i=a(1151);const o={slug:"feast-hamilton",title:"Featurization: Integrating Hamilton with Feast",authors:"tj",tags:["Hamilton","Feast","feature store"]},r=void 0,s={permalink:"/personal_website/blog/feast-hamilton",source:"@site/blog/2023-08-02-feast-hamilton/index.md",title:"Featurization: Integrating Hamilton with Feast",description:"Are you using Feast? or perhaps you are having trouble with it? Or perhaps you are considering adopting it? In this post, you will learn the operational benefits of using Feast with Hamilton. Feast will act as your \u201cfeature store\u201d, while Hamilton will be your in-process \u201cfeature processing engine\u201d. We start by providing an overview of Feast, then show how Hamilton fits into the picture. At the end, we give a recipe for where to go from here, depending on where you are in your \u201cfeature journey\u201d.",date:"2023-08-02T00:00:00.000Z",formattedDate:"August 2, 2023",tags:[{label:"Hamilton",permalink:"/personal_website/blog/tags/hamilton"},{label:"Feast",permalink:"/personal_website/blog/tags/feast"},{label:"feature store",permalink:"/personal_website/blog/tags/feature-store"}],readingTime:16.925,hasTruncateMarker:!0,authors:[{name:"Thierry Jean",url:"https://github.com/zilto",imageURL:"https://github.com/zilto.png",key:"tj"}],frontMatter:{slug:"feast-hamilton",title:"Featurization: Integrating Hamilton with Feast",authors:"tj",tags:["Hamilton","Feast","feature store"]},unlisted:!1,prevItem:{title:"Containerized PDF Summarizer with FastAPI and Hamilton",permalink:"/personal_website/blog/pdf-summarizer"},nextItem:{title:"Simplify Prefect Workflow Creation and Maintenance with Hamilton",permalink:"/personal_website/blog/prefect-hamilton"}},l={authorsImageUrls:[void 0]},d=[{value:"What problem does Feast solve?",id:"what-problem-does-feast-solve",level:2},{value:"What is Feast?",id:"what-is-feast",level:2},{value:"More on feature computation and lineage",id:"more-on-feature-computation-and-lineage",level:2},{value:"How can Hamilton help?",id:"how-can-hamilton-help",level:2},{value:"1. Use Hamilton for data transformations before pushing to Feast",id:"1-use-hamilton-for-data-transformations-before-pushing-to-feast",level:3},{value:"2. Use Hamilton to wrangle Feast definitions",id:"2-use-hamilton-to-wrangle-feast-definitions",level:3},{value:"The full Hamilton + Feast experience",id:"the-full-hamilton--feast-experience",level:2},{value:"Build the feature platform you need",id:"build-the-feature-platform-you-need",level:2},{value:"Step 1: Adopt Hamilton",id:"step-1-adopt-hamilton",level:3},{value:"Step 2: Feature Store?",id:"step-2-feature-store",level:3},{value:"Would your problems benefit from a feature store?",id:"would-your-problems-benefit-from-a-feature-store",level:4},{value:"What would be the cost of a maintaining feature store?",id:"what-would-be-the-cost-of-a-maintaining-feature-store",level:4},{value:"Some Illustrative scenarios",id:"some-illustrative-scenarios",level:2},{value:"You are just getting started with data science and machine learning and writing a proof of concept(s).",id:"you-are-just-getting-started-with-data-science-and-machine-learning-and-writing-a-proof-of-concepts",level:3},{value:"You are managing a few deployed projects serving predictions to users.",id:"you-are-managing-a-few-deployed-projects-serving-predictions-to-users",level:3},{value:"You have multiple mature projects serving a large number of predictions.",id:"you-have-multiple-mature-projects-serving-a-large-number-of-predictions",level:3},{value:"You decided to migrate to Feast",id:"you-decided-to-migrate-to-feast",level:2},{value:"You decided not to migrate/adopt to Feast (yet?)",id:"you-decided-not-to-migrateadopt-to-feast-yet",level:2},{value:"Final words",id:"final-words",level:2},{value:"Links",id:"links",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Are you using Feast? or perhaps you are having trouble with it? Or perhaps you are considering adopting it? In this post, you will learn the operational benefits of using Feast with Hamilton. Feast will act as your \u201cfeature store\u201d, while Hamilton will be your in-process \u201cfeature processing engine\u201d. We start by providing an overview of Feast, then show how Hamilton fits into the picture. At the end, we give a recipe for where to go from here, depending on where you are in your \u201cfeature journey\u201d."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["crosspost from ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/featurization-integrating-hamilton",children:"https://blog.dagworks.io/p/featurization-integrating-hamilton"})]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: by \u201cfeature\u201d we are referring to ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Feature_(machine_learning)",children:"this meaning of the word"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-problem-does-feast-solve",children:"What problem does Feast solve?"}),"\n",(0,n.jsxs)(t.p,{children:["Feast is an open-source ",(0,n.jsx)(t.a,{href:"https://www.featurestore.org/what-is-a-feature-store",children:"feature store"}),", a specialized piece of machine learning (ML) infrastructure that centralizes computed feature data and metadata. The feature store sits above the storage layer and unifies the output of various data sources (streaming, operational databases, data warehouse, app session, etc.) to provide a simple interface to query features for your ML application. Feature stores are critical to the operations of organizations serving high volumes of predictions (e.g., Uber, AirBnb, LinkedIn)."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: Feature stores introduce a lot of complexity that should be justified by a decent number of projects in production. Please read ",(0,n.jsx)(t.a,{href:"https://medium.com/data-for-ai/feature-pipelines-and-feature-stores-deep-dive-into-system-engineering-and-analytical-tradeoffs-3c208af5e05f",children:"this blog"})," by FeatureStoresForML for a detailed look at the pros and cons of feature stores. You may only need Hamilton, in which case, we direct readers to our ",(0,n.jsx)(t.a,{href:"https://hamilton.dagworks.io/en/latest/how-tos/use-for-feature-engineering/",children:"documentation"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/DAGWorks-Inc/hamilton/tree/main/examples/feature_engineering_multiple_contexts",children:"example"})," to get you started!"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The feature store abstraction delineates feature producers from downstream users (feature consumers), effectively creating a contract between the two parties. Feature creation and use can get messy, especially when one wants to share them across an organization. One way to do that is to centralize features via data, i.e. put them all into the same store, and users can pull from this store to power their machine learning models. A feature store can then offer guardrails to ensure that offline model training matches online settings (i.e., preventing ",(0,n.jsx)(t.a,{href:"https://developers.google.com/machine-learning/guides/rules-of-ml#training-serving_skew",children:"training/serving skew"}),"). Feature stores can help reduce system latency by caching features in an \u201conline store\u201d (more on that below) for efficient retrieval.\xa0 This ",(0,n.jsx)(t.a,{href:"https://medium.com/@endeavordata/streamlining-machine-learning-development-with-a-feature-store-680ee6d45c64",children:"blog"})," explains further the benefits of centralizing data into a feature store."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/#example-use-cases",children:"Feast documentation"})," mentions the following typical use cases:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Personalizing online recommendations by leveraging pre-computed historical user or item features."}),"\n",(0,n.jsx)(t.li,{children:"Online fraud detection, using features that compare against (pre-computed) historical transaction patterns"}),"\n",(0,n.jsx)(t.li,{children:"Credit scoring, using pre-computed historical features to compute probability of default"}),"\n",(0,n.jsx)(t.li,{children:"Churn prediction (an offline model), generating feature values for all users at a fixed cadence in batch"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-feast",children:"What is Feast?"}),"\n",(0,n.jsxs)(t.p,{children:["If one is unfamiliar with Feast, we recommend reading the Feast ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/",children:"introduction page"}),", but here are some high-level key considerations:"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"What Feast does"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Stores metadata on features that have been registered with it"}),"\n",(0,n.jsx)(t.li,{children:"Provides an abstraction to push to & query for materialized feature data."}),"\n",(0,n.jsxs)(t.li,{children:["Facilitates proper ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/getting-started/concepts/point-in-time-joins",children:"point-in-time"})," (i.e., \u201ctime-travel\u201d) table joins. Useful for creating training sets from features."]}),"\n",(0,n.jsx)(t.li,{children:"Helps you integrate heterogeneous sources of feature data into a central place."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"What Feast doesn\u2019t do"}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Perform the transformations to compute your features."}),"\n",(0,n.jsx)(t.li,{children:"Store data itself; it relies on being set up on top of your existing infrastructure."}),"\n",(0,n.jsx)(t.li,{children:"Orchestrate your data transformation pipelines that would perform feature computation."}),"\n",(0,n.jsx)(t.li,{children:"Help you write clean transformation code & organize it."}),"\n",(0,n.jsx)(t.li,{children:"Provide lineage & provenance for your features."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Here are a few ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/getting-started/concepts",children:"Feast key terms"})," relevant to this post:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Entity"}),": a real-world entity we care about (e.g., user, city, month, product SKU)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"DataSource"}),": a physical storage of data (e.g., file, database, data warehouse)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FeatureView"}),": the table schema of a data source with additional metadata."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FeatureService"}),": a new table schema resulting from joining one or more FeatureViews."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Offline store"}),": an interface to read DataSources and do the point-in-time joins at query time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Online store"}),": an interface to read FeatureService already stored with the joins completed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Feast registry"}),": the single central catalog containing the defined Feast objects and relationships."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"more-on-feature-computation-and-lineage",children:"More on feature computation and lineage"}),"\n",(0,n.jsxs)(t.p,{children:["Since Feast is only responsible for the downstream use of features, it ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/#feast-is-not",children:"cannot compute them nor produce full lineage"})," from raw data for you. Feast validates the table schema you pass to it (columns name and type), but it can\u2019t catch upstream data transformation changes that don't respect the desired schema."]}),"\n",(0,n.jsx)(t.p,{children:"Without lineage, it is not possible to enforce CI/CD checks of the schema and trigger a recompute of the online store when feature transformations are updated for example. Additionally, not having lineage makes it hard to trace source data usage, remove dead feature code, as well as deprecate unused features, all which are important to help ensure smooth and cost efficient operations."}),"\n",(0,n.jsx)(t.h2,{id:"how-can-hamilton-help",children:"How can Hamilton help?"}),"\n",(0,n.jsxs)(t.p,{children:["Hamilton is a Python micro-orchestration framework to express data transformations. It helps one write Python code that is modular and reusable, and that can be executed as a direct acyclic graph (DAG). Hamilton was initially developed and used in production to create large dataframes (100+ columns) for machine learning while preserving strong lineage capabilities (see ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/functions-dags-introducing-hamilton-a-microframework-for-dataframe-generation-more-8e34b84efc1d",children:"the origin story"}),"). Its strength is expressing the flow of data & computation in a way that is straightforward to create and maintain (much like DBT does for SQL). If you are considering Feast, it likely means you also have some data scale, so just to mention it, that Hamilton can be run at scale as well. It has integrations with Spark, Dask, Ray, and can even scale up your pandas code for free (",(0,n.jsx)(t.a,{href:"https://hamilton.dagworks.io/en/latest/how-tos/scale-up/",children:"learn more here"}),")!"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["If you are new to Hamilton, we invite you to an interactive overview on ",(0,n.jsx)(t.a,{href:"http://www.tryhamilton.dev",children:"tryhamilton.dev"}),", or this post. Hamilton will be discussed at a high level and relevant documentation references will be shared for more details."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Hamilton is a flexible tool to express DAGs and can improve the Feast development experience in two primary ways:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"unifying how feature transformations are defined, executed across your stack"}),"\n",(0,n.jsx)(t.li,{children:"define and manage the Feast objects you use to register features with Feast."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(9210).Z+"",width:"782",height:"292"})}),"\n",(0,n.jsx)(t.h3,{id:"1-use-hamilton-for-data-transformations-before-pushing-to-feast",children:"1. Use Hamilton for data transformations before pushing to Feast"}),"\n",(0,n.jsxs)(t.p,{children:["With Hamilton, you write declarative and granular data transformation functions. The functions declare what they output with the ",(0,n.jsx)(t.strong,{children:"function name"})," and declare what they require as input with the ",(0,n.jsx)(t.strong,{children:"function arguments"}),", and everything is type annotated. The logic of the computation is wholly contained within the function. The Hamilton Driver, which orchestrates execution in a python process, automatically generates the execution DAG from the function definitions and allows you to query for only the set of transforms you are interested in computing."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(9194).Z+"",width:"1037",height:"682"})}),"\n",(0,n.jsxs)(t.p,{children:["Using this approach, you can easily scale to writing dataframes with 1000s of columns and maintain a clear lineage of upstream and downstream dependencies. To generate your features, simply call ",(0,n.jsx)(t.code,{children:"Driver.execute()"})," and write the resulting dataframe to your Feast offline or online store. You can reuse the modular functions you define both in your offline and online environment to prevent training/serving skew.\xa0 Also, the defined Hamilton functions can be easily reused in Feast\u2019s ",(0,n.jsx)(t.a,{href:"https://docs.feast.dev/reference/alpha-on-demand-feature-view",children:"OnDemandFeatureView"})," when dealing with request data. In addition, Hamilton enables runtime data validation on any function by adding the ",(0,n.jsx)(t.code,{children:"@check_output"})," decorator (",(0,n.jsx)(t.a,{href:"https://hamilton.dagworks.io/en/latest/how-tos/run-data-quality-checks/",children:"learn more"}),"), which can again mitigate training/serving skew and ensure feature output is checked before it is pushed to Feast."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:'title="Push data to Feast"',children:'import numpy as np\nimport pandas as pd\n\nfrom hamilton.function_modifiers import extract_columns, save_to, source, check_output\n\nTRIPS_SOURCE_COLUMNS = [\n    "event_timestamp",\n    "driver_id",\n    "rider_id",\n    "trip_dist",\n    "created",\n]\n\n\n# extract columns allows you to split a dataframe into multiple pandas Series\n@extract_columns(*TRIPS_SOURCE_COLUMNS)\ndef trips_raw(trips_raw_path: str) -> pd.DataFrame:\n    """Load the driver dataset"""\n    df = pd.read_parquet(trips_raw_path)\n    df = df.sort_values(by="event_timestamp")\n    return df\n\n\ndef day_of_week(event_timestamp: pd.Series) -> pd.Series:\n    """Encode day of the week as int"""\n    return pd.Series(\n        event_timestamp.dt.day_of_week, name="day_of_week", index=event_timestamp.index\n    )\n\n\n# see how this function depends on the return value of `day_of_week()`\n@check_output(data_type=np.int64, data_in_range(0, 1), importance="warn")\ndef is_weekend(day_of_week: pd.Series) -> pd.Series:\n    weekend = np.where(day_of_week >= 5, 1, 0)\n    return pd.Series(weekend, name="is_weekend", index=day_of_week.index)\n\n\ndef percentile_dist_rolling_3h(trip_dist: pd.Series, event_timestamp: pd.Series) -> pd.Series:\n    """Compute the rolling 3H percentile trip dist"""\n    df = pd.concat([trip_dist, event_timestamp], axis=1)\n    agg = df.rolling("3H", on="event_timestamp")["trip_dist"].rank(pct=True)\n    return pd.Series(agg, name="percentile_trip_dist_rolling_3h", index=event_timestamp.index)\n\n\n# this function has many lines, but it simply explicitly assemble columns from the raw\n# source and the computed features.\n# the @save_to decorator allows to easily save this result to a parquet file\n@save_to.parquet(path=source("trips_stats_3h_path"), output_name_="save_trips_stats_3h")\ndef trips_stats_3h(\n    event_timestamp: pd.Series,\n    driver_id: pd.Series,\n    day_of_week: pd.Series,\n    is_weekend: pd.Series,\n    percentile_dist_rolling_3h: pd.Series,\n) -> pd.DataFrame:\n    """Global trip statistics over rolling 3h"""\n    df = pd.concat(\n        [\n            event_timestamp,\n            driver_id,\n            day_of_week,\n            is_weekend,\n            percentile_dist_rolling_3h,\n        ],\n        axis=1,\n    )\n    return df\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This code snippet shows broadly the Hamilton approach to defining feature transforms. There is a function that loads a dataframe and exposes its columns (i.e. individual pandas series) for downstream use; typically this could be a call to a database to return a dataframe. Then, features are created by applying functions on these pandas series. Notably, ",(0,n.jsx)(t.code,{children:"percentile_dist_rolling_3h()"})," takes two pandas series as input, creates a temporary dataframe in the function\u2019s body to apply a rolling window, and returns a new pandas series. Hamilton provides a lot of utilities to avoid code duplication across similar features. You can learn more about them from the examples in the ",(0,n.jsx)(t.a,{href:"https://hamilton.dagworks.io/en/latest/concepts/decorators-overview/",children:"documentation"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(362).Z+"",width:"1456",height:"393"})}),"\n",(0,n.jsxs)(t.p,{children:["Hamilton pairs so well with Feast because they were both designed around the table/dataframe abstraction. Hamilton enables you to create complex dataframes using functions that are easy to read, test, and document, and you also get ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/lineage-hamilton-in-10-minutes-c2b8a944e2e6",children:"lineage as code"}),"! This increased visibility makes it easier for downstream Feast users to trust data definitions and therefore feature quality."]}),"\n",(0,n.jsx)(t.h3,{id:"2-use-hamilton-to-wrangle-feast-definitions",children:"2. Use Hamilton to wrangle Feast definitions"}),"\n",(0,n.jsxs)(t.p,{children:["Feast defines its registry objects in Python. For Feast to know about features you need to explicitly register them. At registration, when calling ",(0,n.jsx)(t.code,{children:"feast apply"})," objects are converted to ",(0,n.jsx)(t.a,{href:"https://protobuf.dev/",children:"protobuf"})," and feature object relationships are built. However, the dependencies between feature objects are not made explicit from the Python code definitions that Feast makes your write. To add to this, the Feast CLI is able to read feature object definitions across directories, which inadvertently allows the proliferation of feature object definitions across a codebase. This makes it hard for someone reading the codebase to develop a mental model of these relationships. Considering Feast is essentially a DAG, wrapping object definitions in Hamilton functions can greatly improve readability and reduce the chances of breaking changes."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:'title="Define Feast entities with Hamilton',children:'import feast\nimport datetime\n\n\n# an entity has no upstream dependencies; it is our join index\ndef driver_entity() -> feast.Entity:\n    """Feast definition: driver entity"""\n    return feast.Entity(name="driver", join_keys=["driver_id"], value_type=feast.ValueType.INT64)\n  \n\n# the filesource only needs a file path\n# it could have been hardcoded, but here we pass it as argument because we want to ensure\n# that is it the same value passed as the storage for our feature_transformations.py code\ndef driver_hourly_stats_source(driver_source_path: str) -> feast.FileSource:\n  """Feast definition: source with hourly stats of driver"""\n  return feast.FileSource(\n      name="driver_hourly_stats",\n      path=driver_source_path,\n      timestamp_field="event_timestamp",\n      created_timestamp_column="created",\n  )\n\n\n# the FeatureView is a 1-to-1 with the DataSource, but adds metadata and time-to-live (TTL)\ndef driver_hourly_stats_fv(\n  driver_entity: feast.Entity,\n  driver_hourly_stats_source: feast.FileSource\n) -> feast.FeatureView:\n  """Feast definition: feature view with hourly stats of driver"""\n  return feast.FeatureView(\n      name="driver_hourly_stats",\n      entities=[driver_entity],\n      ttl=timedelta(days=1),\n      schema=[\n          feast.Field(name="conv_rate", dtype=feast.types.Float32),\n          feast.Field(name="acc_rate", dtype=feast.types.Float32),\n          feast.Field(\n              name="avg_daily_trips", dtype=feast.types.Int64, description="Average daily trips"\n          ),\n      ],\n      online=True,\n      source=driver_hourly_stats_source,\n      tags={"team": "driver_performance"},\n  )\n\n\n# the FeatureService defines how the data is stored in the online store\n# and how it\'s retrieved\ndef driver_activity_v1_fs(\n   driver_hourly_stats_fv: feast.FeatureView,\n) -> feast.FeatureService:\n    """Feast definition: grouping of features relative to driver activity"""\n    return feast.FeatureService(\n        name="driver_activity_v1",\n        features=[\n            driver_hourly_stats_fv,\n        ],\n    )\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The code shows a snippet from the ",(0,n.jsx)(t.code,{children:"store_definitions.py"})," file from the Feast example in the Hamilton repository. The Hamilton approach to defining functions makes it easy to read dependencies from the code and prevents synchronization issues between Feast feature object definitions when changes are made. As a bonus, Hamilton can automatically generate visualizations that you can associate with your commit or add to your documentation. Below is the DAG generated that registers the appropriate objects with Feast; Hamilton uses the functions defined in ",(0,n.jsx)(t.code,{children:"store_definitions.py"})," to create this."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(6196).Z+"",width:"1456",height:"463"})}),"\n",(0,n.jsxs)(t.p,{children:["As the Feast object graph grows in complexity, it becomes overwhelming to display in its entirety. With the Hamilton ",(0,n.jsx)(t.code,{children:"driver.what_is_upstream_of()"})," and ",(0,n.jsx)(t.code,{children:"what_is_downstream_of()"}),", one can quickly answer specific questions about dependencies, by zooming into only what\u2019s relevant to display. For example:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(7244).Z+"",width:"724",height:"443"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Alt text",src:a(4471).Z+"",width:"934",height:"347"})}),"\n",(0,n.jsx)(t.h2,{id:"the-full-hamilton--feast-experience",children:"The full Hamilton + Feast experience"}),"\n",(0,n.jsx)(t.p,{children:"So far, we\u2019ve presented how to use Hamilton to compute the features used in Feast and how to define your Feast objects with Hamilton. By adopting both practices, you can gain visibility over the dataflow from raw data, to feature transformations, to Feast service, effectively extending the contract between data producers and downstream users. If downstream users also use Hamilton to express their data science workflow or power an inference API endpoint, all of the benefits will be further extended!\xa0"}),"\n",(0,n.jsx)(t.p,{children:"This integration allows you to foresee which downstream users will be affected by changes to data transformations code and how. For example:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"You could add to your CI/CD pipeline checks for changes in the structure of the Hamilton transformations and Feast object definitions DAGs. If detected one could send an alert or request a review from affected users."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Changes to the Hamilton DAG could trigger a purge and feature recompute for the Feast online store to prevent any mismatch between a newly trained model and the already stored features."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"build-the-feature-platform-you-need",children:"Build the feature platform you need"}),"\n",(0,n.jsx)(t.h3,{id:"step-1-adopt-hamilton",children:"Step 1: Adopt Hamilton"}),"\n",(0,n.jsx)(t.p,{children:"We candidly believe that Hamilton is a great addition, no matter the stage of maturity your feature needs are in. If you have existing code, it usually only takes you 10-25% of the initial development time to refactor code into the Hamiltonian style."}),"\n",(0,n.jsx)(t.h3,{id:"step-2-feature-store",children:"Step 2: Feature Store?"}),"\n",(0,n.jsxs)(t.p,{children:["But when to do you use/adopt Feast? That\u2019s a different question. Feast has some compelling features, but it is important to evaluate a team\u2019s needs and capabilities, present and future, before making important infrastructure decisions. Make sure to read this excellent ",(0,n.jsx)(t.a,{href:"https://medium.com/data-for-ai/feature-pipelines-and-feature-stores-deep-dive-into-system-engineering-and-analytical-tradeoffs-3c208af5e05f",children:"blog"})," to review the pros and cons of feature stores; as noted in the beginning, a feature store is a complex component to integrate and manage, so you should be confident in your decision before moving forward. There are two important lines of questioning:"]}),"\n",(0,n.jsx)(t.h4,{id:"would-your-problems-benefit-from-a-feature-store",children:"Would your problems benefit from a feature store?"}),"\n",(0,n.jsx)(t.p,{children:"This requires thinking about the nature of the problems you are working on and scoping the pain points you are facing."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Are you integrating multiple batch/streaming/request data sources? If you are only pulling everything from a data warehouse, you might not need a feature store."}),"\n",(0,n.jsx)(t.li,{children:"Are you handling time-series data with complex joins and need point-in-time retrieval? If you are only doing batch predictions with a few joins, you might not need a feature store."}),"\n",(0,n.jsx)(t.li,{children:"Are you having duplicate definitions and compute of features across projects?"}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"what-would-be-the-cost-of-a-maintaining-feature-store",children:"What would be the cost of a maintaining feature store?"}),"\n",(0,n.jsx)(t.p,{children:"This requires evaluating the efforts and resources that will be needed to be dedicated to setting up and maintaining the feature store."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"How many features and projects in production are you actively managing?"}),"\n",(0,n.jsx)(t.li,{children:"Do you have a dedicated team to manage infrastructure? You will need ML or data engineering time to migrate and maintain the feature store. Also, data scientists/teams that built the existing features and pipelines will need to ensure migration correctness."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"some-illustrative-scenarios",children:"Some Illustrative scenarios"}),"\n",(0,n.jsx)(t.p,{children:"Now here are a few prototypical scenarios. You might recognize yourself in one, or find yourself between two, but in all cases remember the earlier the you adopt good coding practices and write modular code, the easiest migrating to a feature store is."}),"\n",(0,n.jsx)(t.h3,{id:"you-are-just-getting-started-with-data-science-and-machine-learning-and-writing-a-proof-of-concepts",children:"You are just getting started with data science and machine learning and writing a proof of concept(s)."}),"\n",(0,n.jsxs)(t.p,{children:["You probably do not need a feature store and its overhead before having any project in production as it would slow you down. You are however, more likely to need tooling around versioning your code and experimentation tracking to store and compare model performance and analysis results. Unlike a feature store, Hamilton is lightweight and can help you write better code that will be easier to version. You can use it from day 1 of any project. Use it to write your analysis and keep track of the results of ",(0,n.jsx)(t.code,{children:"driver.execute()"})," using ",(0,n.jsx)(t.a,{href:"https://mlflow.org/docs/latest/index.html",children:"MLFlow"}),", ",(0,n.jsx)(t.a,{href:"https://docs.neptune.ai/",children:"Neptune"}),", or ",(0,n.jsx)(t.a,{href:"https://docs.wandb.ai/",children:"Weights&Biases"})," for example."]}),"\n",(0,n.jsx)(t.h3,{id:"you-are-managing-a-few-deployed-projects-serving-predictions-to-users",children:"You are managing a few deployed projects serving predictions to users."}),"\n",(0,n.jsx)(t.p,{children:"This is typically when people start looking at tooling to standardize development across projects to reduce duplicated effort and bring some centralization for people to build off of collectively. After answering the above questions, you might conclude that you need a feature store."}),"\n",(0,n.jsx)(t.p,{children:"If you have the resources to migrate to a feature store, the earlier you migrate the less refactoring you have to do. If you currently don\u2019t have the bandwidth, you can still standardize your practice moving forward and progressively refactor code to prepare for a migration."}),"\n",(0,n.jsx)(t.h3,{id:"you-have-multiple-mature-projects-serving-a-large-number-of-predictions",children:"You have multiple mature projects serving a large number of predictions."}),"\n",(0,n.jsx)(t.p,{children:"As the size and maturity of your data science and ML practice increases, the same logic as the previous section applies, but the cost/benefit ratio can change. The potential benefits are likely evident to you, but refactoring projects powering production services can be risky and very demanding. You should prioritize projects and migrate them one at a time. Adding data validation for data transformations,  Feast ingest, Feast retrieval and model predictions will help prevent breaking changes and diagnose potential problems."}),"\n",(0,n.jsx)(t.h2,{id:"you-decided-to-migrate-to-feast",children:"You decided to migrate to Feast"}),"\n",(0,n.jsx)(t.p,{children:"To help, we recommend that data scientists/teams responsible for the projects help with the migration. They will need to specify the entities and the timestamp columns for joins. Then, they should define the meaning of features to include in the Feast registry and refactor code to extract the data transformation functions. If you are not already using Hamilton, the refactoring could be more involved."}),"\n",(0,n.jsx)(t.p,{children:"With that information, you should be able to write the Feast definitions DAG and register it. If the Feast objects were properly defined, retrieving features from Feast should be equivalent to your previous pipeline on downstream operations.  Then, you should test if you are able to properly materialize/push new data to the online and offline stores."}),"\n",(0,n.jsx)(t.h2,{id:"you-decided-not-to-migrateadopt-to-feast-yet",children:"You decided not to migrate/adopt to Feast (yet?)"}),"\n",(0,n.jsx)(t.p,{children:"You might have realized that your projects wouldn\u2019t benefit from Feast or that more important pain points need to be addressed. Here\u2019s a few examples:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["You want lineage \u2192 Hamilton\u2019s DAG-based paradigm is ideal to clearly establish the dependencies between transformations and the steps data goes through. See ",(0,n.jsx)(t.a,{href:"http://www.dagworks.io",children:"DAGWorks"})," that takes this product experience further."]}),"\n",(0,n.jsxs)(t.li,{children:["You need to automate tasks or run things on a schedule \u2192 look into orchestrators. Hamilton integrates well with any of them, including ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/supercharge-your-airflow-dag-with",children:"Airflow"}),", ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/simplify-prefect-workflow-creation",children:"Prefect"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/outerbounds/hamilton-metaflow",children:"Metaflow"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["You need to gain visibility over production systems failures \u2192 look into Hamilton\u2019s data quality capabilities, and other monitoring tools like ",(0,n.jsx)(t.a,{href:"http://www.dagworks.io",children:"DAGWorks"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"You need to share results and collaborate with team members \u2192 look into experiment tracking platforms."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"final-words",children:"Final words"}),"\n",(0,n.jsx)(t.p,{children:"Having Hamilton + Feast in your stack will quickly feel natural. Together, they improve operational efficiency by enabling you to standardize & centralize feature transformations, feature registration, storage and retrieval. So not only will teams be able to create training sets from each others\u2019 features, they will also be able to trace what data produced it and how it was transformed to more easily trust and mitigate data issues. Altogether this will mean that teams will move faster with more confidence."}),"\n",(0,n.jsxs)(t.p,{children:["Simply fork the example ",(0,n.jsx)(t.a,{href:"https://github.com/DAGWorks-Inc/hamilton/tree/main/examples/feast",children:"repository for Feast + Hamilton"})," to get started! It will give you an idea how to: structure your directory, write Hamilton data transformations, define Feast objects, and retrieve features from Feast."]}),"\n",(0,n.jsx)(t.p,{children:"For users who have questions on the above, please reach out to us on Slack! We\u2019re also more than happy to consult on Feast matters."}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.p,{children:["\ud83d\udd17 Join our community on ",(0,n.jsx)(t.a,{href:"https://hamilton-opensource.slack.com/join/shared_invite/zt-1bjs72asx-wcUTgH7q7QX1igiQ5bbdcg#/shared-invite/email",children:"Slack"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["\u2b50\ufe0f Leave us a star on ",(0,n.jsx)(t.a,{href:"https://github.com/DAGWorks-Inc/hamilton",children:"GitHub"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["\u2328\ufe0f Try Hamilton in the browser at ",(0,n.jsx)(t.a,{href:"https://tryhamilton.dev",children:"tryhamilton.dev"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Integrate Feast and Hamilton: example ",(0,n.jsx)(t.a,{href:"https://github.com/DAGWorks-Inc/hamilton/tree/main/examples/feast",children:"GitHub repository"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Read: ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/p/tidy-production-pandas-with-hamilton-3b759a2bf562",children:"Writing tidy production Pandas code with Hamilton"})," ."]}),"\n",(0,n.jsxs)(t.p,{children:["Read: ",(0,n.jsx)(t.a,{href:"https://madewithml.com/courses/mlops/feature-store/#when-do-i-need-a-feature-store",children:"An hands-on and succinct introduction to feature stores and Feast by MadeWithML"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Integrate Hamilton with your favorite macro-orchestrator: ",(0,n.jsx)(t.a,{href:"https://blog.dagworks.io/publish/post/130538397",children:"Airflow"}),", ",(0,n.jsx)(t.a,{href:"https://substack.com/inbox/post/135342200",children:"Prefect"}),", ",(0,n.jsx)(t.a,{href:"https://outerbounds.com/blog/developing-scalable-feature-engineering-dags/",children:"Metaflow"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1-6b730d286b040562659cc780fc12a680.png"},362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-2-be636da9545259bb9a9f22829a67feb6.png"},6196:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-3-4d62f67da4a69ea204afec628c2cde4c.png"},7244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-4-0b600c977c2df49b909c88a47746ef0f.png"},4471:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-5-82c0472e62e0070c085707fab46cd731.png"},9210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-edc41774028e5a81a268163ce9108c24.png"},1151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>r});var n=a(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);