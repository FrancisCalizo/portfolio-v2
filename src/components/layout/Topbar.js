import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { device } from "../../utils/breakpoints"

const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: var(--text-dark);

  > div {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;

    > div:nth-child(2) {
      font-weight: 600;
    }
  }

  @media ${device.minMd} {
    display: none;
  }

  @media ${device.maxSm} {
    > div {
      > div:nth-child(2) {
        display: none;
      }
    }
  }
`

const Topbar = ({ title, email }) => {
  return (
    <TopbarContainer>
      <div>
        <div>Menu</div>
        <div>{title}</div>
        <div>Email</div>
      </div>
    </TopbarContainer>
  )
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
export default Topbar
