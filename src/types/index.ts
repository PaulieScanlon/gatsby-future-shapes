import { Node } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// currently used for wp-page-template and wp-post-template

export interface ITagItem {
  name: string
}
export interface IPage {
  data: {
    page: {
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

interface IFileNode extends Node {
  childImageSharp?: Node & {
    gatsbyImageData?: IGatsbyImageData
  }
}

export interface IPostItem {
  node: {
    title: string
    link: string
    thumbnailImage: {
      image: {
        altText: string
        // eslint-disable-next-line
        localFile: IFileNode
      }
    }
  }
}

export interface IPromoItem {
  node: {
    youTubeAttributes: {
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
