useEffect(() => {
  async function getDrinks() {
    const data = query.allMarkdownRemark.edges
    const categories = []
    const stuff = []

    // To group drinks into categories without duplicates of categories
    for (let i = 0; i < data.length; i++) {
      let foundCategory = drinks.some(
        list => list.category === data[i].node.frontmatter.type
      )

      let foundDrink = stuff.some(
        drink => drink.drink === data[i].node.frontmatter.title
      )

      if (!foundDrink) {
        stuff.push(data[i].node.frontmatter.title)
      }

      if (!foundCategory) {
        categories.push({
          category: data[i].node.frontmatter.type,
          drink: [data[i].node.frontmatter.title],
        })

        setDrinks(drinks.concat(categories))
      }
    }

    const final = []

    for (let k = 0; k < drinks.length; k++) {
      let has_found = false
      for (let j = 0; j < final.length; j++) {
        if (final[j].category === drinks[k].category) {
          final[j].drink = final[j].drink.concat(drinks[k].drink)
          has_found = true
        }
      }

      if (!has_found) {
        final.push(drinks[k])
      }
    }

    return final
  }

  getDrinks().then(final => setDrinks(state => ({ ...state, final })))

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
