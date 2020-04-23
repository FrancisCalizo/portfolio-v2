import React from "react"
import styled from "styled-components"

import { device } from "../utils/breakpoints"
import config from "../../data/config"
import SEO from "../components/Seo"
import Layout from "../components/layout/Layout"
import SkillsIcons from "../components/skills/SkillsIcons"

const SkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;

  & div {
    max-width: 600px;

    & > h1 {
      margin: 0;

      & > span:nth-child(1) {
        display: inline-block;
        color: #fff;
        font-family: "Rubik", sans-serif;
        font-size: 1.9rem;
        font-weight: 400;
        letter-spacing: 1.1px;

        & > span {
          border-bottom: 4px solid var(--salmon);
        }
      }

      & span:nth-child(2) {
        display: block;
        font-size: 36px;
        color: var(--text-dark);
        line-height: 1.4;
        margin: 1.5rem 0;
      }
    }

    & p {
      color: var(--text-gray);
      margin: 0;
      font-size: 20px;
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
            <span>
              // <span>Skills</span>
            </span>
            <span>{config.skills.header}</span>
          </h1>
          <p>{config.skills.description}</p>
          <SkillsIcons />
        </div>
      </SkillsContainer>
    </Layout>
  )
}

export default Skills
