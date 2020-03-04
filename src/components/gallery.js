import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

export default ({ data }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <Container>
      {data.map(item => {
        if (item.node.childImageSharp) {
          return (
            <React.Fragment key={item.node.childImageSharp.id}>
              <ImageContainer
                onClick={() => {
                  setShowLightbox(true)
                  setSelectedImage(item)
                }}
              >
                <Img
                  fluid={item.node.childImageSharp.fluid}
                  imgStyle={{ objectFit: "cover" }}
                  style={{ height: "100%" }}
                  alt="Restaurant image"
                />
              </ImageContainer>

              {showLightbox && (
                <Dialog aria-label="Restaurant image">
                  <Img fluid={selectedImage.node.childImageSharp.fluid} />
                  <Button onClick={() => setShowLightbox(false)}>Close</Button>
                </Dialog>
              )}
            </React.Fragment>
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
  grid-template-rows: 15rem;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
`

const ImageContainer = styled.div`
  cursor: pointer;
  height: 15rem;
`

const Button = styled.div`
  padding: 15px;
  margin-top: 1rem;
  background-color: rgb(0, 0, 0, 0.5);
  display: inline-block;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
`
