import React, { useState, useEffect } from "react"
import styled from "styled-components"

export default ({ data }) => {
  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {
    const items = data
    const formatted = []
    /*
        Each category should only exist once in the dataset
        Split it like this to get headers and to group data
        First get the category and since we're taking the category
        It'll be the first instance of said category so take all the data it has
        On the next run if the category exists find the matching category and add
        whatever data
     */
    for (let i = 0; i < items.length; i++) {
      let foundCategory = formatted.some(
        menuItem => menuItem.type === items[i].node.frontmatter.type
      )

      if (foundCategory) {
        let type = items[i].node.frontmatter.type
        let index = formatted.findIndex(x => x.type === type)
        formatted[index].items.push({
          name: items[i].node.frontmatter.title,
          description: items[i].node.frontmatter.description,
          price: items[i].node.frontmatter.price,
        })
      } else {
        formatted.push({
          type: items[i].node.frontmatter.type,
          items: [
            {
              name: items[i].node.frontmatter.title,
              description: items[i].node.frontmatter.description,
              price: items[i].node.frontmatter.price,
            },
          ],
        })
      }
    }
    setMenuItems(formatted)
  }, [data])

  return (
    <Container>
      {menuItems.map(item => {
        return (
          <React.Fragment key={item.type}>
            <Title>{item.type}</Title>
            {item.items.map(items => {
              return (
                <ItemContainer key={items.name}>
                  <SubTitle>{items.name}</SubTitle>
                  <Description>{items.description}</Description>
                  <Price>${items.price}</Price>
                </ItemContainer>
              )
            })}
          </React.Fragment>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h1`
  margin-top: 5.5rem;
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 2rem;
  display: block;
  font-style: italic;
  border-bottom: 1px solid #eee;
  text-transform: capitalize;

  @media (max-width: 768px) {
    margin-top: 2rem;
    text-align: center;
  }
`

const SubTitle = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
  display: inline-block;
  text-transform: capitalize;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`

const ItemContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Description = styled.p`
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.5;
  flex: 2;

  @media (max-width: 768px) {
    margin: 0;
  }
`

const Price = styled.div`
  display: inline-block;
  font-size: 1.3rem;
  line-height: 1.5;
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`
