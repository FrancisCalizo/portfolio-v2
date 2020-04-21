import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import config from "../../../data/config"
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
  return (
    <div>
      <GlobalStyle />
      <Sidebar title={config.siteTitle} />
      <MainContent>{children}</MainContent>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
