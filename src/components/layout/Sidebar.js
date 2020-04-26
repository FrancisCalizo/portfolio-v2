import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

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

  a {
    text-decoration: none;
    color: var(--text-gray);
  }

  & div:nth-child(1) {
    & span {
      color: var(--text-dark);
      font-size: 1.6rem;
      font-weight: 600;
    }

    & p {
      color: var(--text-gray);
      margin: 2rem 0 0;
      line-height: 1.8;
    }
  }

  & div:nth-child(3) {
    color: var(--text-gray);

    & a {
      color: var(--salmon);
      font-weight: 500;
      text-decoration: underline;
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
      padding: 0.3rem 0;
    }

    & a:hover {
      border-bottom: 2px solid var(--text-gray);
    }
  }
`

const Fa = styled(FontAwesomeIcon)`
  color: var(--text-gray);
`

const Sidebar = ({ title, email }) => {
  return (
    <SidebarContainer>
      <div>
        <Link to="/">
          <span>{title}:</span>
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/featured ">Featured</Link>
        </li>
        <li>
          <a
            href="https://ohyoufrancybruh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog <Fa icon={faExternalLinkAlt} />
          </a>
        </li>
        <li>
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </SidebarLinks>
      <div>
        Questions? Comments? Concerns? Please don't hesitate to drop me a line
        at <a href={`mailto:${email}`}>{email}</a>
        <SocialBar />
      </div>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Sidebar
