import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <p><em>
        "Pianist Jeremy Corren was disposed toward passagework, with his long, roiling lines displaying classical technique and gospel flavor" </em> – <b>The Washington Post</b>
      </p>
      <p>
        Pianist and composer Jeremy Corren grew up in Los Angeles and moved to New York in 2013 to pursue music. Since then, he has performed at some of the world's best jazz venues, with prior engagements at Dizzy's Club, the Blue Note in New York, Tokyo, Shanghai and Beijing, the Jazz Standard, Blues Alley, South Jazz Kitchen, the Jazz Gallery, and many others. He has also appeared at the Newport Jazz Festival, the North Sea Jazz Festival, the Umbria Jazz Festival, and the Chicago Jazz Festival.
      </p>
      <p>
        A long-time member of lauded vibraphonist <a href="http://www.iplayvibes.com/" target="_blank" rel="noopener noreferrer">Joel Ross</a>'s Good Vibes, you can hear Jeremy on the critically-acclaimed Blue Note release <a href="https://store.bluenote.com/products/joel-ross-kingmaker" target="_blank" rel="noopener noreferrer">KingMaker</a> and its follow-up, <a href="https://store.bluenote.com/products/joel-ross-who-are-you" target="_blank" rel="noopener noreferrer">Who Are You?</a>, to be released in November 2020. Jeremy's EP <a href="https://jeremycorren.bandcamp.com/album/country-of-clouds" target="_blank" rel="noopener noreferrer">Country of Clouds</a> features pieces for solo piano and trio with bassist <a href="https://kanoamusic.com/" target="_blank" rel="noopener noreferrer">Kanoa Mendenhall</a> and drummer <a href="https://www.instagram.com/dayeon_seok_">Dayeon Seok</a>.
      </p>
      <p>
        As a composer, Jeremy has worked with some of New York's most highly regarded performers of contemporary chamber music, such as the Mivos Quartet, the Wet Ink Ensemble, the TAK Ensemble, and the Switch Ensemble. Listen to some of these performances <a href="https://soundcloud.com/jeremycorren" rel="noopener noreferrer">here</a>.
      </p>
    </div>
  </Layout>
)

export default SecondPage
