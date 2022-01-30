import * as React from "react"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"

const Landing = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
{/*        <blockquote>
          <p style={{fontSize: '1.25rem', fontWeight: '700', fontStyle: 'italic'}}>
            "Jeremy Corren was disposed toward passagework, with his long, roiling lines displaying classical technique and gospel flavor" 
          </p>
          <cite style={{fontSize: '0.8125rem', fontWeight: 'bold', fontStyle: 'normal'}}>
            THE WASHINGTON POST
          </cite>
        </blockquote>
        <br/>*/}
        <p>
          Pianist and composer Jeremy Corren has appeared in concert at the Blue Note,
            Smalls Jazz Club, and the Jazz Gallery, with appearances at the Newport Jazz
            Festival, the North Sea Jazz Festival, the Umbria Jazz Festival and many others. 
        </p>
        <p>He can be heard on vibraphonist <a href="http://iplayvibes.com">Joel Ross</a>'s
        first two releases on Blue Note Records,
        <a href="https://store.bluenote.com/products/joel-ross-who-are-you"> Who Are You?</a> in 
        2020 and <a href ="https://store.bluenote.com/products/joel-ross-kingmaker">KingMaker</a> in 2019.
        </p>
        <p>In June of 2021, Jeremy recorded compositions by bassist 
        <a href="http://orbareket.com"> Or Bareket</a> for his forthcoming album for Enja Records 
        at Firehouse 12, also featuring saxophonist Morgan Guerin and drummer Savannah Harris. 
        </p>
        <p>That same month, he recorded interpretations of songs by great American composers with <a href="http://tatianaevamarie.com"> Tatiana Eva-Marie</a>.
        </p>
      </div>
    </BasicTextModuleStyles>
  )
}

export default Landing
