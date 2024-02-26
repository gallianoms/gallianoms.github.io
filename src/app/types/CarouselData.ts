export interface CarouselData {
  images: {
    src: string
    width: number
    height: number
    alt: string
  }[]
  projectData: {
    githubUrl: string
    requirements: string
    websiteUrl?: string
    techs: string[]
  }
}
