import React from "react"
import App from "../layouts/app"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Gallery from "../components/gallery"

export default () => {
  const query = useStaticQuery(graphql`
    query gallery {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <App>
      <Container>
        <Title>Gallery</Title>
        <Gallery data={query.allFile.edges} />
      </Container>
    </App>
  )
}

const Container = styled.div`
  padding: 100px;
  margin-left: 5rem;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0;
    height: auto;
    padding-bottom: 8rem;
  }
`

const Title = styled.h2`
  font-size: 3rem;
  padding-bottom: 5rem;
  color: #202020;

  @media (max-width: 768px) {
    text-align: center;
  }
`
