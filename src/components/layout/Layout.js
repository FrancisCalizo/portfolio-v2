import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import storage from "local-storage-fallback"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"
import { GlobalStyle } from "./GlobalStyles"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import UnderNav from "./UnderNav"
import Footer from "./Footer"

const { colorsLight, colorsDark } = config

const MainContent = styled.div`
  @media ${device.minMd} {
    position: absolute;
    left: 280px;
  }
`

const Layout = ({ children }) => {
  const stored = storage.getItem("isDarkMode")
  const [isDarkMode, setIsDarkMode] = useState(stored === "true" ? true : false)

  return (
    <ThemeProvider theme={isDarkMode ? colorsDark : colorsLight}>
      <GlobalStyle />
      <Topbar
        title={config.siteTitle}
        email={config.email}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Sidebar
        title={config.siteTitle}
        email={config.email}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <UnderNav>
        <MainContent>{children}</MainContent>
        <Footer email={config.email} />
      </UnderNav>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
