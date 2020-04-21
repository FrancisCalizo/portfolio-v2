import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
      margin: 2rem 0;
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
`
const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0.2rem 0;
    margin: 0.5rem 0;
    font-weight: 500;
    letter-spacing: 1.4px;
  }
`

const Sidebar = ({ title, email }) => {
  return (
    <SidebarContainer>
      <div>
        <Link to="/">
          <span>{title}.</span>
        </Link>
        <p>
          Software Developer
          <br />
          Frontend Enthusiast
          <br />
          Creative Mind
        </p>
      </div>
      <SidebarLinks>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/accomplishments">Accomplishments</Link>
        <a
          href="https://ohyoufrancybruh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <Link to="/contact">Contact</Link>
        <a href="resume.pdf" target="_blank">
          Resume
        </a>
      </SidebarLinks>
      <div>
        Questions? Comments? Concerns? Please don't hesitate to drop me a line
        at <a href="mailto:francisacalizo@gmail.com">{email}</a>
        <div>Link | Git | Email | Res | Blog</div>
      </div>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Sidebar
