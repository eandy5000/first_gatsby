import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
   Hi {props.data.allMarkdownRemark.edges[0].node.frontmatter.title}
  </div>
)

export default IndexPage

export const testQuery = graphql`
  query test {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
