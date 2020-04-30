import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { lighten } from "polished"

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
  background: ${props => (props.isNavColored ? "#fff" : "transparent")};
  transition: background 500ms ease-in-out;

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
  color: ${props =>
    props.current === props.to
      ? config.colors.textDark
      : config.colors.textGray};
  font-weight: ${props => (props.current === props.to ? 600 : 500)};
  border-bottom: ${props =>
    props.current === props.to
      ? `2px solid ${config.colors.textDark}`
      : `none`};
  // padding: 0 0.5rem;
  // border-radius: 2px;
  // background: linear-gradient(to right, var(--salmon) 48%, transparent 50%);
  // background-size: 200% 100%;
  // background-position: right bottom;
  // transition: all 0.3s ease-out;

  &:hover {
    // background-position: left bottom;
    // color: white;
    color: ${lighten(0.4, config.colors.textDark)};
    transition: color 0.2s ease-in-out;
  }
`

const Fa = styled(FontAwesomeIcon)`
  color: var(--text-dark);
`

const BurgerLinkA = styled(BurgerLink)`
  color: var(--text-gray);
  font-weight: 500;
  border: none;
`

const Topbar = ({ title, email }) => {
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
      background: "#fff",
    },
    bmItem: {
      display: "inline-block",
      margin: "1rem 0",
    },
    bmCross: {
      background: config.colors.textDark,
    },
  }

  return (
    <TopbarContainer isNavColored={isNavColored}>
      <div>
        <div>
          Menu
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
}
export default Topbar
