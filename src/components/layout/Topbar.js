import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu"

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
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const isMenuOpen = status => {
    setIsBurgerOpen(status.isOpen)
  }

  const menuStyles = {
    bmBurgerButton: {
      position: "fixed",
      height: "35px",
      width: "50px",
      top: "10px",
      left: "25px",
    },
    bmOverlay: {
      top: "0",
      left: "0",
    },
    bmMenuWrap: {
      display: isBurgerOpen ? "block" : "none",
    },
  }

  return (
    <TopbarContainer>
      <div>
        <div>
          Menu
          <Menu styles={menuStyles} onStateChange={isMenuOpen}>
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="skills" className="menu-item" href="/skills">
              Skills
            </a>
          </Menu>
        </div>
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
