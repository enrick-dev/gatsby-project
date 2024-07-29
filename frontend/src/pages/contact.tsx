import React from 'react'
import { Layout } from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  query {
    myapi {
      users {
        id
        name
      }
    }
  }
`

const Contact = () => {
  const data = useStaticQuery(query);
  console.log(data)

  return (
    <Layout>
      <div>
        <h1>contact</h1>
      </div>
    </Layout>
  )
}

export default Contact
