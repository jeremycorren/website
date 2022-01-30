import * as React from "react"
import Layout from "../components/Layout"
import Media from "../components/BasicTextModule/Media"
import Seo from "../components/Seo"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const media = () => {
  return (
    <>
      <Seo title="media" />
      <Layout>
        <SimpleBanner title="Media">
        </SimpleBanner>
        <Media />
      </Layout>
    </>
  )
}

export default media
