import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header>
    <div style={{margin: `0 auto`}}
    >
      <Navbar>
        <Navbar.Brand>
          <Link
            className="title"
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              letterSpacing: `3px`
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
        </Navbar.Brand>
      </Navbar>
      <hr />
      <div className="subtitle" style={{
        marginLeft: `1rem`,
        marginTop: `0.3rem`
      }}>Pianist • Composer</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
