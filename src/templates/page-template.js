import React from 'react'
import { graphql, Link } from 'gatsby'

import { useNavigation } from '../hooks'

export default ({ data }) => {
  const {
    page: { title, content, featuredImage },
  } = data

  const {
    allWpMenuItem: { edges },
  } = useNavigation()

  return (
    <div>
      <ul>
        {edges.map((menu, index) => {
          const { label, path } = menu.node

          return (
            <li key={index}>
              <Link to={path}>{label}</Link>
            </li>
          )
        })}
      </ul>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      {featuredImage ? (
        <img
          style={{ width: 300 }}
          alt={featuredImage.node.altText}
          src={featuredImage.node.mediaItemUrl}
        />
      ) : null}
    </div>
  )
}

export const query = graphql`
  query page($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
    }
  }
`
