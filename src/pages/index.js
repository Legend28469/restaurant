import React from "react"
import App from "../layouts/app"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
      <Container>
        <Img
          fluid={data.restaurant.childImageSharp.fluid}
          imgStyle={{ objectFit: "cover" }}
          style={{ height: "100%" }}
          alt="Restaurant image"
        />
      </Container>
    </App>
  )
}

const Container = styled.div`
  margin-left: 5rem;
  height: 100vh;
  position: relative;

  @media (max-width: 600px) {
    margin: 0;
    height: 100vh;
  }
`
