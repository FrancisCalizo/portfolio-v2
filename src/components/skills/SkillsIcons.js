import React from "react"
import styled from "styled-components"

import { icons } from "./icons"

const SkillsIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Skill = styled.div`
  & div:nth-child(1) {
    display: flex;
    justify-content: center;

    & > span {
      text-align: center;
    }
  }

  & > div:nth-child(2) {
    background: #fff;
    margin: 0.5rem;
    padding: 1rem 1.2rem;
    border-radius: 100px;
  }
`
const SkillsIcons = () => {
  return (
    <SkillsIconsContainer>
      {icons.map(e => (
        <Skill>
          <div>
            <span>{e.name}</span>
          </div>
          <div>
            <img src={e.icon} alt={e.name} />
          </div>
        </Skill>
      ))}
    </SkillsIconsContainer>
  )
}

export default SkillsIcons
