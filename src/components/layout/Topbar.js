import React from "react"
import { Link } from "gatsby"
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

  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: var(--text-dark);
    text-decoration: none;
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
        <div>
          <Link to="/">{title}</Link>
        </div>
        <div>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </div>
    </TopbarContainer>
  )
}

Topbar.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
export default Topbar
