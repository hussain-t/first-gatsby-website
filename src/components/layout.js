import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image";

import Header from "./header"
import "./layout.css"
import Archive from "./archive";

const Container = styled.div`
  
`

const Showcase = styled.section`
  max-height: 300px;
  margin-bottom: 30px;
  text-align: center;
  overflow: hidden;
`

const Layout = ({ children }) => (
  <StaticQuery
  query={graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {
      regex: "/show/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Showcase>
          <Container>
            {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> */}
            <Img fluid={data.file.childImageSharp.fluid} />
          </Container>
        </Showcase>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          {/* <Archive /> */}
        </div>
        <footer style={{
            background: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: 20,
            marginTop: 40
          }}>
            © {new Date().getFullYear()}, Hussain
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
