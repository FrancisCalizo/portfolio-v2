import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Hi, I'm Francis.</h1>
      <h1>
        I am a web | software developer with a passion for creating modern and
        captivating web applications.
      </h1>
      <p>
        You will find me primarily using the latest JavaScript technologies to
        build front-end web projects, but I also aspire to develop myself into a
        full-stack engineer (as well as learn new languages and tools). I
        welcome challenging opportunities for growth and development!
      </p>
    </div>
  </Layout>
)

export default IndexPage
