import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SidebarContainer = styled.div`
  background: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 100;
  width: 300px;
`

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
`

const Sidebar = ({ title }) => {
  return (
    <SidebarContainer>
      <div>
        {title}
        <p>Software Developer</p>
        <p>Frontend Enthusiast</p>
        <p>Creative Mind</p>
      </div>
      <SidebarLinks>
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link>Portfolio</Link>
        <Link>Accomplishments</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
        <Link>Resume</Link>
      </SidebarLinks>
      <div>
        Questions? Comments? Concerns? Please don't hesitate to drop me a line
        at francisacalizo@gmail.com
        <div>LinkedIn | Github | Email | Resume | Blog</div>
      </div>
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Sidebar
