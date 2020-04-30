import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import UnderNav from "./UnderNav"
import Footer from "./Footer"

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
  @media ${device.minMd} {
    position: absolute;
    left: 280px;
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Topbar title={config.siteTitle} email={config.email} />
      <Sidebar title={config.siteTitle} email={config.email} />
      <UnderNav>
        <MainContent>{children}</MainContent>}
        <Footer email={config.email} />
      </UnderNav>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
