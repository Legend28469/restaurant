import React from "react"
import App from "../layouts/app"
import styled from "styled-components"

export default () => {
  return (
    <App>
      <Container>
        <Title>Please fill out the form to book a reservation</Title>
        <Description>
          Let us know when you’d like to book a reservation and we’ll contact
          you within 30 min to confirm or find another time.
        </Description>

        <form
          name="reservation"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <Input type="text" name="name" placeholder="Your Name" />

          <Input type="email" name="email" placeholder="Your Email" />

          <Input
            type="text"
            name="date"
            placeholder="When would you like to book a reservation?"
          />

          <div data-netlify-recaptcha="true"></div>

          <Button type="submit">Send</Button>
        </form>
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
  color: #202020;
`

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  color: #313131;
  margin-bottom: 2rem;
`

const Input = styled.input.attrs({ type: "text" })`
  display: block;
  outline: none;
  box-sizing: border-box;
  box-shadow: none;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #bbb;
  font-size: 1.2rem;
  padding: 16px;
  margin-bottom: 16px;
`

const Button = styled.button`
  color: white;
  background: #28a745;
  border: none;
  cursor: pointer;
  display: block;
  outline: none;
  box-shadow: none;
  width: 100%;
  border-radius: 5px;
  font-size: 1.3rem;
  padding: 16px;
`
