import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Sidebar from "./Sidebar"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0
  }
`
const MainContent = styled.div`
  position: absolute;
  left: 300px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <GlobalStyle />
      <Sidebar title={data.site.siteMetadata.title} />
      <MainContent>{children}</MainContent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
