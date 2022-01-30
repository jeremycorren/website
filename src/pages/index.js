import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BannerModule from "../components/BannerModule/BannerModule"
import Landing from "../components/BasicTextModule/Landing"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Jeremy Corren"
          subTitle="Pianist • Composer"
        />
        <Landing />
      </Layout>
    </>
  )
}

export default Index
