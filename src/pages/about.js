import React from "react"
import App from "../layouts/app"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      ingredients: file(relativePath: { eq: "ingredients.jpeg" }) {
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
        <Title>Literally only the best and freshest ingredients</Title>
        <Description>
          Inspired by Gordon Ramsay shows Hell's Kitchen and Kitchen Nightmares
          we make everything fresh in hopes that Chef Ramsay himself will come
          and eat at our restaurant. We never use frozen materials, we clean
          often and most importantly we have the pictures to prove it!
        </Description>

        <ImageContainer>
          <Img
            fluid={data.ingredients.childImageSharp.fluid}
            imgStyle={{ objectFit: "cover" }}
            style={{ height: "100%" }}
            alt="Restaurant image"
          />
        </ImageContainer>
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
    height: auto;
    margin: 0;
    padding: 1rem;
    padding-bottom: 8rem;
  }
`

const Title = styled.h2`
  font-size: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  color: #202020;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Description = styled.p`
  padding-top: 2rem;
  font-size: 1.3rem;
  line-height: 1.6;
  letter-spacing: 1.1px;
  color: #313131;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
