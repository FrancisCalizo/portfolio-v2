import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { bubble as Menu } from "react-burger-menu"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

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

const BurgerLink = styled(Link)`
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid black;
  }
`

const Topbar = ({ title, email }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const getBurgerOpen = status => {
    setIsBurgerOpen(status.isOpen)
  }

  const handleClick = () => {
    setIsBurgerOpen(false)
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
      width: "300px",
      top: "0",
      left: "0",
    },
    bmMorphShape: {
      fill: "#fff",
    },
    bmItemList: {
      display: "flex",
      width: "300px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bmItem: {
      display: "inline-block",
      margin: "1rem 0",
    },
    bmCross: {
      background: config.colors.textDark,
    },
    // bmCrossButton: {
    //   top: "20px",
    //   right: "30px",
    // },
  }

  return (
    <TopbarContainer>
      <div>
        <div>
          Menu
          <Menu
            styles={menuStyles}
            onStateChange={getBurgerOpen}
            isOpen={isBurgerOpen}
          >
            <BurgerLink
              id="home"
              className="menu-item"
              to="/"
              onClick={handleClick}
            >
              Home
            </BurgerLink>
            <BurgerLink
              id="skills"
              className="menu-item"
              to="/skills"
              onClick={handleClick}
            >
              Skills
            </BurgerLink>
            <BurgerLink
              id="portfolio"
              className="menu-item"
              to="/portfolio"
              onClick={handleClick}
            >
              Portfolio
            </BurgerLink>
            <BurgerLink
              id="accomplishments"
              className="menu-item"
              to="/accomplishments"
              onClick={handleClick}
            >
              Accomplishments
            </BurgerLink>
            <a
              id="blog"
              className="menu-item"
              href="https://ohyoufrancybruh.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              Blog
            </a>
            <a
              id="resume"
              className="menu-item"
              href="/resume"
              onClick={handleClick}
            >
              Resume
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
