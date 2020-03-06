import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FaHome, FaPhone, FaArrowCircleRight } from "react-icons/fa"
import { MdRestaurantMenu } from "react-icons/md"
import { TiBeer } from "react-icons/ti"
import { IoIosPaper } from "react-icons/io"
import { AiOutlinePicture } from "react-icons/ai"

export default () => {
  return (
    <Container>
      <List>
        <IconContext.Provider
          value={{
            className: "logo-icon",
            size: "2rem",
          }}
        >
          <Logo>
            <StyledLinkLogo to="/">
              <LogoIconContainer>
                <FaArrowCircleRight />
              </LogoIconContainer>
              <LogoLinkText className="link-text">Eatery</LogoLinkText>
            </StyledLinkLogo>
          </Logo>
        </IconContext.Provider>

        <IconContext.Provider
          value={{
            className: "icon",
            size: "2rem",
          }}
        >
          <Item>
            <StyledLink to="/">
              <IconContainer>
                <FaHome />
              </IconContainer>
              <LinkText className="link-text">Home</LinkText>
            </StyledLink>
          </Item>

          <Item>
            <StyledLink to="/about">
              <IconContainer>
                <IoIosPaper />
              </IconContainer>
              <LinkText className="link-text">About</LinkText>
            </StyledLink>
          </Item>

          <Item>
            <StyledLink to="/food">
              <IconContainer>
                <MdRestaurantMenu />
              </IconContainer>
              <LinkText className="link-text">Food</LinkText>
            </StyledLink>
          </Item>

          <Item>
            <StyledLink to="/drinks">
              <IconContainer>
                <TiBeer />
              </IconContainer>
              <LinkText className="link-text">Drinks</LinkText>
            </StyledLink>
          </Item>

          <Item>
            <StyledLink to="/gallery">
              <IconContainer>
                <AiOutlinePicture />
              </IconContainer>
              <LinkText className="link-text">Gallery</LinkText>
            </StyledLink>
          </Item>

          <Item>
            <StyledLink to="/reservation">
              <IconContainer>
                <FaPhone />
              </IconContainer>
              <LinkText className="link-text">Reservations</LinkText>
            </StyledLink>
          </Item>
        </IconContext.Provider>
      </List>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  background-color: #202020;
  z-index: 1;
  transition: width 300ms ease;

  @media only screen and (min-width: 600px) {
    width: 5rem;
    height: 100vh;
    top: 0;

    &:hover {
      width: 16rem;

      .link-text {
        display: block;
      }

      .logo-icon {
        transform: rotate(-180deg);
        filter: grayscale(0%) opacity(1);
      }
    }
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`

const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const Item = styled.li`
  width: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 5rem;
  text-decoration: none;

  &:hover {
    color: #ff1212;
    background: #101010;

    .icon {
      color: #ff1212;
      filter: grayscale(0%) opacity(1);
    }

    .link-text {
      color: #ff1212;
    }
  }

  .logo-icon {
    color: #fff;
    transform: rotate(0deg);
    transition: all 600ms ease;
    filter: grayscale(100%) opacity(0.7);
    color: #ff1212;
  }

  .icon {
    color: #fff;
    filter: grayscale(100%) opacity(0.7);
    transition: filter 600ms ease;
  }
`

const StyledLinkLogo = styled(StyledLink)`
  display: flex;
  justify-content: space-between;
`

const IconContainer = styled.div`
  margin: 0 1.5rem;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`

const LogoIconContainer = styled.div`
  margin: 0 1.5rem;
  display: flex;
  order: 1;
`

const LinkText = styled.span`
  display: none;
  color: #ffffff;
  margin-left: 1rem;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`

const LogoLinkText = styled(LinkText)`
  font-size: 2rem;
`
