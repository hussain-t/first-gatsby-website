import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <p>I'm Hussain Thajutheen, a full stack engineer. I work with React, React Native, Next.js, Gatsby and WordPress.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About