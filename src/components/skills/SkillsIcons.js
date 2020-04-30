import React from "react"
import styled from "styled-components"

import { device } from "../../utils/breakpoints"
import { icons } from "./icons"

const SkillsIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-between;

  @media ${device.maxMd} {
    justify-content: center;
  }
`
const Skill = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;

    & > span {
      color: #fff;
      text-align: center;
      background: var(--text-dark);
      padding: 1px 5px;
      border: 1px solid var(--text-dark);
      border-radius: 5px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(-20px);
    }
  }

  & > div:nth-child(1) {
    background: #fff;
    margin: 0.5rem;
    padding: 1.15rem 1.2rem 0.75rem;
    border-radius: 100px;
    border: 1px solid var(--text-gray);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
  }
`
const SkillsIcons = () => {
  return (
    <SkillsIconsContainer>
      {icons.map((e, idx) => (
        <Skill key={idx}>
          <div>
            <img src={e.icon} alt={e.name} />
          </div>
          <div>
            <span>{e.name}</span>
          </div>
        </Skill>
      ))}
    </SkillsIconsContainer>
  )
}

export default SkillsIcons
