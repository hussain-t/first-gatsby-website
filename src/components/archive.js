import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostQuery {
    allMarkdownRemark(limit: 5, sort: {
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li>{edge.node.frontmatter.title}</li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive