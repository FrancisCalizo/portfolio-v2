import React from "react"
import styled from "styled-components"

import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"
import SkillsIcons from "../components/skills/SkillsIcons"

const SkillsContainer = styled.div`
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  & div {
    max-width: 600px;

    & > h1 {
      font-size: 38px;
      color: var(--text-dark);
      line-height: 1.4;

      & > span {
        color: #fff;
        font-family: "Rubik", sans-serif;
        display: block;
        font-size: 1.9rem;
        font-weight: 400;
        letter-spacing: 1.1px;
      }
    }

    & p {
      color: var(--text-gray);
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
          <SkillsIcons />
        </div>
      </SkillsContainer>
    </Layout>
  )
}

export default Skills
