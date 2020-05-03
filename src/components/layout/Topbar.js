import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import { device } from "../../utils/breakpoints"
import config from "../../../data/config"

const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  background: ${props =>
    props.isNavColored ? props.theme.bgAlt : "transparent"};
  border-bottom: ${props =>
    props.isNavColored ? `3px solid ${props.theme.bright}` : "none"};
  transition: all 500ms ease-in-out;

  > div {
    display: flex;
    justify-content: space-between;
    padding: ${props => (props.isNavColored ? "0.5rem 2rem" : "1rem 2rem")};
    transition: padding 500ms ease-in-out;

    > div:nth-child(2) {
      font-weight: 600;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${props => props.theme.textDark};
    text-decoration: none;
    transition: all 300ms ease-in-out;
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
  color: ${props =>
    props.current === props.to ? props.theme.textDark : props.theme.textLight};
  font-weight: ${props => (props.current === props.to ? 600 : 400)};
  border-bottom: ${props =>
    props.current === props.to ? `2px solid ${props.theme.textDark}` : `none`};
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${props => props.theme.textLight};
    transition: color 0.2s ease-in-out;
  }
`

const Fa = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textDark};
  transition: all 300ms ease-in-out;
`

const BurgerLinkA = styled(BurgerLink)`
  color: ${props => props.theme.textLight};
  font-weight: 400;
  border: none;
  transition: all 300ms ease-in-out;
`

const Topbar = ({ title, email, isDarkMode, setIsDarkMode }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const [isNavColored, setisNavColored] = useState(false)
  const [current, setCurrent] = useState("")

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.pathname : ""
    setCurrent(url)
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getBurgerOpen = status => {
    setIsBurgerOpen(status.isOpen)
  }

  const handleClick = () => {
    setIsBurgerOpen(false)
  }

  const handleScroll = e => {
    if (window.scrollY > 70) {
      setisNavColored(true)
    } else {
      setisNavColored(false)
    }
  }

  const menuStyles = {
    bmBurgerButton: {
      position: "fixed",
      height: "20px",
      width: "50px",
      top: isNavColored ? "10px" : "18px",
      left: "35px",
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
      fill: isDarkMode ? "#172A45" : "#fff",
    },
    bmItemList: {
      display: "flex",
      width: "300px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: isDarkMode ? "#172A45" : "#fff",
    },
    bmItem: {
      display: "inline-block",
      margin: "1rem 0",
    },
    bmCross: {
      background: config.colorsLight.textDark,
    },
  }

  return (
    <TopbarContainer isNavColored={isNavColored}>
      <div>
        <div>
          <span>Menu</span>
          <Menu
            styles={menuStyles}
            onStateChange={getBurgerOpen}
            isOpen={isBurgerOpen}
          >
            <BurgerLink
              current={current}
              id="home"
              className="menu-item"
              to="/"
              onClick={handleClick}
            >
              Home
            </BurgerLink>
            <BurgerLink
              current={current}
              id="skills"
              className="menu-item"
              to="/skills"
              onClick={handleClick}
            >
              Skills
            </BurgerLink>
            <BurgerLink
              current={current}
              id="portfolio"
              className="menu-item"
              to="/portfolio"
              onClick={handleClick}
            >
              Portfolio
            </BurgerLink>
            <BurgerLink
              current={current}
              id="featured"
              className="menu-item"
              to="/featured"
              onClick={handleClick}
            >
              Featured
            </BurgerLink>
            <BurgerLinkA
              as="a"
              id="blog"
              className="menu-item"
              href="https://ohyoufrancybruh.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
            >
              Blog <Fa icon={faExternalLinkAlt} size="sm" />
            </BurgerLinkA>
            <BurgerLinkA
              as="a"
              id="resume"
              className="menu-item"
              href="/resume"
              onClick={handleClick}
            >
              Resume
            </BurgerLinkA>
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
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
}
export default Topbar
