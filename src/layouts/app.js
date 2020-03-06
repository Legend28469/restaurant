import React from "react"
import GlobalStyle from "../styles/Global"
import styled from "styled-components"
import { Reset } from "styled-reset"
import SideMenu from "./side-menu"

export default ({ children }) => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Container>
        <SideMenu />
        {children}
      </Container>
    </>
  )
}

const Container = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
  }
`
