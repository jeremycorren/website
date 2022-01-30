import * as React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import Seo from "../components/Seo"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Get in touch">
        </SimpleBanner>
        <Contact />
      </Layout>
    </>
  )
}

export default contact
