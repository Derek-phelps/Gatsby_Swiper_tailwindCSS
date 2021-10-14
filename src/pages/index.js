import * as React from "react"
import { graphql } from "gatsby"
import Description from "./component/Description"
import ImageSlider from "./component/Slider"

const IndexPage = ({data}) => {
  const description_data = data.site.siteMetadata
  return (
    <div className="h-full container mb-10 md:flex xs:block items-center md:py-8 md:px-7 sm:py-6 sm:px-6">
      <section className="w-full px-0 md:px-10 md:w-5/12">
        <Description props={description_data}/>
      </section>
      <section className="relative top-5 md:top-7 w-full px-0 md:px-10 md:w-7/12">
        <ImageSlider />
      </section>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        content
        subtitle
        subcontent
      }
    }
  }`