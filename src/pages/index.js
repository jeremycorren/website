import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <Img fluid={data.fileName.childImageSharp.fluid} alt="" />
      <br/>
      <p>
      Jeremy Corren is a pianist and composer based in New York. You can hear recent pieces for solo piano and trio on the EP <a href="https://jeremycorren.bandcamp.com/album/country-of-clouds" target="_blank" rel="noopener noreferrer">Country of Clouds</a>. Look out for his playing on the upcoming Blue Note release by Joel Ross, <a href="https://store.bluenote.com/products/joel-ross-who-are-you" target="_blank" rel="noopener noreferrer">Who Are You?</a>, this November.
      </p>
    </div>
    <br />
  </Layout>
)

export default IndexPage