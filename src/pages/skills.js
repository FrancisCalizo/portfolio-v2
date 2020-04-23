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
        font-weight: 400;
        letter-spacing: 1.1px;

        & > span {
          border-bottom: 4px solid var(--salmon);
        }
      }

      & span:nth-child(2) {
        display: block;
        color: var(--text-dark);
        line-height: 1.4;
        margin: 1.5rem 0;
      }
    }

    & p {
      color: var(--text-gray);
      margin: 0;
    }
  }

  @media ${device.minLg} {
    & div {
      & h1 {
        & span:nth-child(1) {
          font-size: 26px;
        }
        & span:nth-child(2) {
          font-size: 36px;
        }
      }

      & p {
        font-size: 20px;
      }
    }
  }

  @media ${device.minMd} and ${device.maxLg} {
    & div {
      & h1 {
        & span:nth-child(1) {
          font-size: 12px;
        }
        & span:nth-child(2) {
          font-size: 12px;
        }
      }

      & p {
        font-size: 12px;
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
