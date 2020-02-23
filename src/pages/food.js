import React from "react"
import App from "../layouts/app"
import styled from "styled-components"

export default () => {
  return (
    <App>
      <Container>
        <Title>Food</Title>
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
  font-size: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  color: #202020;
`
