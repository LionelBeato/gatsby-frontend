import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'


const ArcadePage = ({data}) => (
    <div>
        hello
    </div>

) 


export const query = graphql`
query otherQuery {
  java {
    arcadeGames{
      name
    }
  }
}
`

export default ArcadePage