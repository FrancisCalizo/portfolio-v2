import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"
import { GlobalStyle } from "./GlobalStyles"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import UnderNav from "./UnderNav"
import Footer from "./Footer"

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
