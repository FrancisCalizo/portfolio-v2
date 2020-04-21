import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import config from "../../../data/config"
import Sidebar from "./Sidebar"

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-gray: #D3D3D3;
    --text-gray: #696969;
    --text-dark: #343434;
    --salmon: #e37263;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg-gray)
  }
`
const MainContent = styled.div`
  position: absolute;
  left: 280px;
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
