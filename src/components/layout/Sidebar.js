import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  faExternalLinkAlt,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons"

import SocialBar from "../social/SocialBar"
import {
  SidebarContainer,
  SidebarLinks,
  GLink,
  ALink,
  Fa,
  ToggleTheme,
  Created,
} from "../styled/Sidebar"
import resume from "../../../static/resume.pdf"

const Sidebar = ({ title, email, isDarkMode, setIsDarkMode }) => {
  const [current, setCurrent] = useState("")

  useEffect(() => {
    const url = typeof window !== "undefined" ? window.location.pathname : ""
    setCurrent(url)
  }, [])

  const handleClick = () => {
    typeof window !== "undefined" &&
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
          <ALink as="a" href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </ALink>
        </li>
      </SidebarLinks>
      <div>
        Questions? Comments? Concerns? Please don't hesitate to drop me a line
        at <a href={`mailto:${email}`}>{email}</a>
        <SocialBar email={email} resume={resume} />
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
