import React, { useEffect, useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { lighten } from "polished"

import config from "../../../data/config"
import { device } from "../../utils/breakpoints"
import SocialBar from "../social/SocialBar"

const SidebarContainer = styled.div`
  background: #fff;
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
      color: ${config.colorsLight.textDark};
      font-size: 1.6rem;
      font-weight: 600;
    }

    & p {
      color: ${config.colorsLight.textLight};
      margin: 2rem 0 0;
      line-height: 1.8;
    }
  }

  & div:nth-child(3) {
    color: ${config.colorsLight.textLight};

    & a {
      color: ${config.colorsLight.bright};
      font-weight: 500;
      text-decoration: underline;
    }

    & a:hover {
      color: ${config.colorsLight.hoverBright};
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
        ${config.colorsLight.bright} 50%,
        transparent 50%
      );
      background-size: 200% 100%;
      background-position: right bottom;
      transition: all 0.3s ease-out;
    }

    & a:hover {
      background-position: left bottom;
      color: white;
    }
  }
`

const GLink = styled(Link)`
  color: ${props =>
    props.current === props.to
      ? config.colorsLight.textDark
      : config.colorsLight.textLight};
  font-weight: ${props => (props.current === props.to ? 600 : 500)};
  border-bottom: ${props =>
    props.current === props.to
      ? `2px solid ${config.colorsLight.textDark}`
      : `none`};
`
const ALink = styled(GLink)`
  color: ${config.colorsLight.textLight};
  font-weight: 500;
  border: none;
`

const Fa = styled(FontAwesomeIcon)`
  color: ${config.colorsLight.textLight};
`

const Created = styled.p`
  margin: 0;
  transform: translateY(25px);
  font-size: 12px;
  color: ${config.colorsLight.textLight};

  span {
    color: ${config.colorsLight.textDark};
    font-weight: 500;
  }

  a:hover {
    color: ${config.colorsLight.bright};
  }
`

const Sidebar = ({ title, email }) => {
  const [current, setCurrent] = useState("")

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.pathname : ""
    setCurrent(url)
  }, [])

  return (
    <SidebarContainer>
      <div>
        <Link to="/">
          <span>{title}</span>
        </Link>
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
}

export default Sidebar
