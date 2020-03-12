import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <a href="https://jeremycorren.bandcamp.com/">
        Bandcamp
      </a>
      <br/>
      <a href="https://instagram.com/jeremycorrenmusic">
        Instagram
      </a>
      <br/>
      <a href="mailto:contact@jeremycorrenmusic.com">
        Email
      </a>
    </div>
    <br />
  </Layout>
)

export default IndexPage

/*
<br/>
    <div className="content">
      <p>&#9654; Listen</p>
      <iframe src="https://bandcamp.com/EmbeddedPlayer/album=3611770562/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/" seamless><a href="http://jeremycorren.bandcamp.com/album/solo-3">Solo by Jeremy Corren</a></iframe>
    </div>
*/