import React from "react"

import js from "../../images/skills/js.svg"
import config from "../../../data/config"

const SkillsIcons = () => {
  return (
    <div>
      {config.skills.icons.map(e => e)}
      <img src={js} alt="js" />
    </div>
  )
}

export default SkillsIcons
