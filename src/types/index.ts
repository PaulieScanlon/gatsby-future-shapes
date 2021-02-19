// currently used for wp-page-template and wp-post-template

export interface ITagItem {
  name: string
}
export interface IPage {
  data: {
    page: {
      id: string
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
    }
  }
}
