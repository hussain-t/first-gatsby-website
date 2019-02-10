import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: #333;
  color: #fff;
  h1 {
    padding: 0
    margin: 0
  }
`

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 1.45em;
  overflow: hidden;
`

const NavBar = styled.nav`
  float: right;
  width: 40%;
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    display: inline;
  }
  a {
    text-decoration: none;
    padding-right: 15px;
    font-size: 18px;
    color: #fff;
  }
  a:hover {
    color: #524763;
  }
  a:active {
    color: teal;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Container>
      <div style={{
        float: "left",
        width: "60%"
      }}>
        <h3>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
      <NavBar>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </NavBar>
    </Container>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
