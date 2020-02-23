import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => {
  return (
    <Container>
      <StyledLink to="/">
        <Title>Eatery</Title>
      </StyledLink>

      <SubTitle>
        Fresh food, all the time.
        <br /> No exceptions!
      </SubTitle>
      <ListContainer>
        <ListItem>
          <StyledLink to="/">About</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Food</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Drinks</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Gallery</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/">Make A Reservation</StyledLink>
        </ListItem>
      </ListContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 22.5rem;
  background: #202020;
  display: flex;
  padding: 0 2rem;
  height: 100vh;
  text-align: left;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 1.3px;
  display: inline-block;
  color: #ffffff;
  margin-top: 11.5rem;

  &:hover {
    color: #ff1212;
    cursor: pointer;
  }
`

const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.3rem;
  margin-top: 2rem;
`

const ListContainer = styled.ul`
  margin-top: 2rem;
  list-style: none;
`

const ListItem = styled.li`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #ff1212;
  }
`
