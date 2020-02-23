import React from "react"
import App from "../layouts/app"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      restaurant: file(relativePath: { eq: "restaurant.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <App>
      <Img
        fluid={data.restaurant.childImageSharp.fluid}
        imgStyle={{ objectFit: "cover" }}
        style={{ height: "100%" }}
        alt="Restaurant image"
      />
    </App>
  )
}
