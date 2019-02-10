import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Container = styled.div`
  width: 80%;
  margin auto;
  overflow: hidden;
`

const MainSection = styled.section`
  float: left;
  width: 70%;
  padding: 0 30px;
  box-sizing: border-box;
`

const Sidebar = styled.aside`
  float: right;
  width: 30%;
  padding 10px;
  background: #333;
  color: #fff;
  box-sizing: border-box;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `web`]} />
    <Container>
      <MainSection>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptatibus error sit, officia, nulla officiis corrupti quo reiciendis voluptates odio vitae praesentium fugit, blanditiis nam vero debitis fugiat porro libero!</p>
      </MainSection>
      <Sidebar>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus suscipit doloribus voluptates fuga natus!</p>
      </Sidebar>
    </Container>
  </Layout>
)

export default IndexPage
