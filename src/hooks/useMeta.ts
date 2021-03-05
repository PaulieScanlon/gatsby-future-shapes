import { graphql, useStaticQuery } from 'gatsby'

export const useMeta = () => {
  const query = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          description
          name
          keywords
          siteUrl
          siteImage
          lang
          type
        }
      }
    }
  `)
  return query
}
