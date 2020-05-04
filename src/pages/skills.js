import React, { useEffect, useState } from "react"
import { Transition } from "react-transition-group"

import config from "../../data/config"
import Seo from "../components/Seo"
import Layout from "../components/layout/Layout"
import SkillsIcons from "../components/skills/SkillsIcons"
import { SkillsContainer } from "../components/styled/Skills"

const Skills = () => {
  const [loadTrans, setLoadTrans] = useState(false)

  useEffect(() => {
    setLoadTrans(true)
  }, [])

  return (
    <Layout>
      <Seo title="Skills" />
      <Transition in={loadTrans} timeout={0}>
        {state => (
          <SkillsContainer state={state}>
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
        )}
      </Transition>
    </Layout>
  )
}

export default Skills
