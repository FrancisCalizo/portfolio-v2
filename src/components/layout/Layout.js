import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import config from "../../../data/config"
import Sidebar from "./Sidebar"

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;
    --bg-gray: #D3D3D3;
    --text-gray: #696969;
    --text-dark: #343434;
    --salmon: #e37263;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg-gray);
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
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
