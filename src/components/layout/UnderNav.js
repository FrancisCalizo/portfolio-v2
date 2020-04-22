import React from "react"
import styled from "styled-components"

import { device } from "../../utils/breakpoints"

const UnderNavContainer = styled.div`
  @media ${device.maxMd} {
    padding-top: 60px;
  }
`

const UnderNav = ({ children }) => {
  return <UnderNavContainer>{children}</UnderNavContainer>
}

export default UnderNav
