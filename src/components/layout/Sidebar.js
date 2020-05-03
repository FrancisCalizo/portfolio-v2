import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExternalLinkAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"

import { device } from "../../utils/breakpoints"
import SocialBar from "../social/SocialBar"

const SidebarContainer = styled.div`
  background: ${props => props.theme.bgAlt};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 100;
  width: 280px;
  padding: 2rem 2rem;
  box-sizing: border-box;
  overflow-y: auto;

  a {
    text-decoration: none;
  }

  & div:nth-child(1) {
    & span {
      color: ${props => props.theme.textDark};
      font-size: 1.6rem;
      font-weight: 600;
    }

    & p {
      color: ${props => props.theme.textLight};
      margin: 1rem 0 0;
      line-height: 1.4;
      font-size: 15px;
    }
  }

  & div:nth-child(3) {
    color: ${props => props.theme.textLight};
    font-size: 15px;

    & a {
      color: ${props => props.theme.bright};
      font-weight: 500;
      text-decoration: underline;
    }

    & a:hover {
      color: ${props => props.theme.hoverBright};
      transition: color 0.2s ease-in-out;
    }

    & > div {
      margin-top: 1.4rem;
    }
  }

  @media ${device.maxMd} {
    display: none;
  }
`
const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0.7rem 0;
    font-weight: 500;
    letter-spacing: 1.4px;

    & a {
      padding: 0.3rem;
      border-radius: 2px;
      background: linear-gradient(
        to right,
        ${props => props.theme.bright} 50%,
        transparent 50%
      );
      background-size: 202% 100%;
      background-position: right bottom;
      transition: all 0.3s ease-out;
    }

    & a:hover {
      background-position: left bottom;
      color: ${props => props.theme.bgAlt};
    }
  }
`

const GLink = styled(Link)`
  color: ${props =>
    props.current === props.to ? props.theme.textDark : props.theme.textLight};
  font-weight: ${props => (props.current === props.to ? 600 : 500)};
  border-bottom: ${props =>
    props.current === props.to ? `2px solid ${props.theme.textDark}` : `none`};
`

const ALink = styled(GLink)`
  color: ${props => props.theme.textLight};
  font-weight: 500;
  border: none;
`

const Fa = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textLight};
`

const ToggleTheme = styled(FontAwesomeIcon)`
  color: #fcc21b;
  border-radius: 4px;
  padding: 5px 7.5px;
  margin: 0 2px;
  background: ${props => props.theme.bg};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  cursor: pointer;
`

const Created = styled.p`
  margin: 0;
  transform: translateY(25px);
  font-size: 12px;
  color: ${props => props.theme.textLight};

  span {
    color: ${props => props.theme.textDark};
    font-weight: 500;
  }

  a:hover {
    color: ${props => props.theme.bright};
  }
`

const Sidebar = ({ title, email, isDarkMode, setIsDarkMode }) => {
  const [current, setCurrent] = useState("")

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.pathname : ""
    setCurrent(url)
  }, [])

  const handleClick = () => {
    localStorage.setItem("isDarkMode", !isDarkMode)
    setIsDarkMode(isDarkMode ? false : true)
  }

  return (
    <SidebarContainer>
      <div>
        <Link to="/">
          <span>{title}</span>
        </Link>{" "}
        <ToggleTheme
          icon={isDarkMode ? faSun : faMoon}
          size="lg"
          onClick={handleClick}
        />
        <p>
          Software Developer.
          <br />
          Frontend Enthusiast.
          <br />
          Creative Mind.
        </p>
      </div>
      <SidebarLinks>
        <li>
          <GLink current={current} to="/">
            Home
          </GLink>
        </li>
        <li>
          <GLink current={current} to="/skills">
            Skills
          </GLink>
        </li>
        <li>
          <GLink current={current} to="/portfolio">
            Portfolio
          </GLink>
        </li>
        <li>
          <GLink current={current} to="/featured">
            Featured
          </GLink>
        </li>
        <li>
          <ALink
            as="a"
            href="https://ohyoufrancybruh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog <Fa icon={faExternalLinkAlt} />
          </ALink>
        </li>
        <li>
          <ALink
            as="a"
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </ALink>
        </li>
      </SidebarLinks>
      <div>
        Questions? Comments? Concerns? Please don't hesitate to drop me a line
        at <a href={`mailto:${email}`}>{email}</a>
        <SocialBar />
        <Created>
          Built by <span>Francis Calizo</span> with{" "}
          <a
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby.js
          </a>
        </Created>
      </div>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
}

export default Sidebar
