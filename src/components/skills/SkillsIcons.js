import React from "react"

import { icons } from "./icons"
import { SkillsIconsContainer, Skill } from "../styled/SkillsIcons"

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
