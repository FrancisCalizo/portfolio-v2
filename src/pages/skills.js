import React from "react"
import styled from "styled-components"

import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"

const SkillsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  & div {
    max-width: 600px;

    & > h1 {
      & > span {
        color: #fff;
        font-family: "Rubik", sans-serif;
        display: block;
        font-size: 1.9rem;
        font-weight: 400;
        letter-spacing: 1.1px;
      }
    }
  }
`

const Skills = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <SkillsContainer>
        <div>
          <h1>
            <span>// Skills</span>
            {config.skills.header}
          </h1>
          <p>{config.skills.description}</p>
        </div>
      </SkillsContainer>
    </Layout>
  )
}

export default Skills
