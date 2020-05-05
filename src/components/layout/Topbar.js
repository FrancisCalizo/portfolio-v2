import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { slide as Menu } from "react-burger-menu"
import {
  faExternalLinkAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"
import storage from "local-storage-fallback"

import config from "../../../data/config"
import {
  ToggleTheme,
  TopbarContainer,
  BurgerLink,
  BurgerLinkA,
  Fa,
} from "../styled/Topbar"
import resume from "../../../static/resume.pdf"

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

  const handleDarkClick = () => {
    storage.setItem("isDarkMode", !isDarkMode)

    setIsDarkMode(isDarkMode ? false : true)
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
      fill: isDarkMode ? config.colorsDark.bgAlt : "#fff",
    },
    bmItemList: {
      display: "flex",
      width: "300px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: isDarkMode ? config.colorsDark.bgAlt : "#fff",
    },
    bmItem: {
      display: "inline-block",
      margin: "1rem 0",
    },
    bmCross: {
      background: isDarkMode ? "#fff" : config.colorsLight.textDark,
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
            <ToggleTheme
              icon={isDarkMode ? faSun : faMoon}
              size="lg"
              onClick={handleDarkClick}
            />
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
              href={resume}
              target="_blank"
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
