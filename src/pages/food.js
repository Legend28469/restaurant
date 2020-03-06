import React from "react"
import App from "../layouts/app"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import MenuDisplay from "../components/menuDisplay"

export default () => {
  const query = useStaticQuery(graphql`
    query food {
      allMarkdownRemark(
        filter: { frontmatter: { categories: { eq: "food" } } }
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              title
              price
              description
              categories
              type
            }
          }
        }
      }
    }
  `)

  return (
    <App>
      <Container>
        <Title>Food</Title>
        <MenuDisplay data={query.allMarkdownRemark.edges} />
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
  padding-bottom: 1.5rem;
  color: #202020;

  @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 1rem;
  }
`
