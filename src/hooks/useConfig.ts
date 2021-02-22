import { graphql, useStaticQuery } from 'gatsby'

export const useConfig = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            keywords
            siteUrl
            siteImage
            lang
          }
        }
      }
    `,
  )
}
