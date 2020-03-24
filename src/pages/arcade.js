import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { Flex, Box, Card, Image, Text } from 'theme-ui'
import { graphql } from 'gatsby'


const ArcadePage = ({ data }) => {


  return (
    <div
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
        py: 4,
      }}>
      {data.java.arcadeGames.map(el =>
        <Flex sx={{ p: 3 }}>{el.name}<br></br>
        Amount of players: {el.amountOfPlayers}
        </Flex>
        )}

    </div>



  )
}




export const query = graphql`
query otherQuery {
  java {
    arcadeGames{
      name
      amountOfPlayers
    }
  }
}
`

export default ArcadePage