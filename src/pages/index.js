import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <a href="https://instagram.com/jeremycorrenmusic">
        Instagram
      </a>
      <br/>
      <a href="mailto:someone@yoursite.com">
        Email
      </a>
    </div>
    <br />
  </Layout>
)

export default IndexPage