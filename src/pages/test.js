import React from "react"
import { graphql } from "gatsby"

const test = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allDirectory
    allSitePlugin(sort: {fields: id})
  }
`

export default test
