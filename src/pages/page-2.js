import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import SEO from "../components/seo"

const SecondPage = ({data}, props) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
{/* <p>Here is my data:<pre>{JSON.stringify(data.java.animals)}</pre></p> */}

    <div>
{data.java.animals.map( el => <p>{JSON.stringify(el)}</p>) }
    </div>

    
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
query MyQuery {
  java {
    animals{
      name
    }
  }
}
`

export default SecondPage
