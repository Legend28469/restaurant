import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <Container>
      {data.map(item => {
        if (item.node.childImageSharp) {
          return (
            <ImageContainer>
              <Img
                key={item.node.childImageSharp.id}
                fluid={item.node.childImageSharp.fluid}
                imgStyle={{ objectFit: "cover" }}
                style={{ height: "100%" }}
                alt="Restaurant image"
              />
            </ImageContainer>
          )
        }
        return null
      })}
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 5rem;
  display: grid;
  grid-template-rows: 200px;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

const ImageContainer = styled.div`
  cursor: pointer;
  height: 200px;
`
