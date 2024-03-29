import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import About from "../components/BasicTextModule/About"

const about = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <SimpleBanner title="About">
        </SimpleBanner>
        <About /> 
      </Layout>
    </>
  )
}

export default about
