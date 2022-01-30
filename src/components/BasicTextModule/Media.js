import * as React from "react"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"

const Media = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <ul className="discog">
          <li>
            <p>
              Spring 2022, Or Bareket, <em>Sahar</em> <br/>
              <a href="http://www.enjajazz.de/index-1.htm">Enja Records</a> <br/>
              Morgan Guerin (s), Jeremy Corren (p), Or Bareket (b), Savannah Harris (d). <br/>
              Produced by Joel Ross.
            </p>
          </li>
          <hr/>
          <li>
            <p>
              October 23, 2020, Joel Ross, <em><a href="https://store.bluenote.com/products/joel-ross-who-are-you">Who Are You?</a></em> <br/>
              <a href="http://bluenote.com">Blue Note Records</a> <br/>
              Joel Ross (v), Immanuel Wilkins (s), Jeremy Corren (p), Kanoa Mendenhall (b), Jeremy Dutton (d). <br/>
              Produced by Walter Smith III.
            </p>
          </li>
          <hr/>
          <li>
            <p>
              March 23, 2020, Jeremy Corren, <em><a href="https://jeremycorren.bandcamp.com/album/country-of-clouds">Country of Clouds</a></em> <br/>
              Jeremy Corren (p), Kanoa Mendenhall (b), Dayeon Seok (d). <br/>
            </p>
          </li>
          <hr/>
          <li>
            <p>
              August 1, 2019, Joel Ross, <em><a href="https://store.bluenote.com/products/joel-ross-kingmaker">KingMaker</a></em> <br/>
              <a href="http://bluenote.com">Blue Note Records</a> <br/>
              Joel Ross (v), Immanuel Wilkins (s), Jeremy Corren (p), Benjamin Tiberio (b), Jeremy Dutton (d). <br/>
              Produced by Harish Raghavan.
            </p>
          </li>
        </ul>
      </div>
    </BasicTextModuleStyles>
  )
}

export default Media
