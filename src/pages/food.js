import React from "react"
import App from "../layouts/app"
import styled from "styled-components"

export default () => {
  return (
    <App>
      <Container>
        <Title>Food</Title>
        <SubTitle>Dinner</SubTitle>
      </Container>
    </App>
  )
}

const Container = styled.div`
  padding: 100px;
  height: 100vh;
  position: relative;
`

const Title = styled.h2`
  font-size: 3rem;
  padding-bottom: 5rem;
  color: #202020;
`

const SubTitle = styled.h3`
  font-size: 2rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  color: #202020;
  font-style: italic;
  padding-bottom: 2rem;
`
