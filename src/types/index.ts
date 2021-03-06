import { IGatsbyImageData } from 'gatsby-plugin-image'

// currently used for wp-page-template and wp-post-template

export interface IPage {
  data: {
    page: {
      next?: {
        title: string
        slug: string
        uri: string
      }
      previous?: {
        title: string
        slug: string
        uri: string
      }
      id?: string
      featuredImage?: {
        node: {
          altText: string
          //eslint-disable-next-line
          localFile: any
        }
      }
      title: string
      content: string
      link: string
      tags: {
        nodes: ITagItem[]
      }
      svgAttributes: {
        path: string
        title: string
      }
    }
  }
}

export interface IPostItem {
  node: {
    title: string
    link: string
    thumbnailImage: {
      image: {
        altText: string
        localFile: IGatsbyImageData
      }
    }
  }
}

export interface ITagItem {
  name: string
}

export interface IPromoItem {
  node: {
    youTubeAttributes: {
      featured: boolean
      title: string
      description: string
      link?: string
      id: string
    }
  }
}

export interface ISoundItem {
  node: {
    mediaItemUrl: string
    mimeType: string
  }
}

export interface ISvgItem {
  node: {
    svgAttributes: {
      title: string
      path: string
    }
  }
}
