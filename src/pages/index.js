import React, { useEffect, useState } from "react"
import { Transition } from "react-transition-group"

import config from "../../data/config"
import Layout from "../components/layout/Layout"
import Seo from "../seo"
import {
  HomeContainer,
  PortfolioButton,
  EmailButton,
  Wave,
} from "../components/styled/Home"

const IndexPage = () => {
  const [loadTrans, setLoadTrans] = useState(false)

  useEffect(() => {
    setLoadTrans(true)
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <Transition in={loadTrans} timeout={0}>
        {state => (
          <HomeContainer state={state}>
            <div>
              <p>
                // Hi, I'm <span>Francis</span>{" "}
                <Wave role="img" aria-label="wave">
                  👋
                </Wave>
              </p>
              <h1>{config.description}</h1>
              <p>
                {config.bio}
                <span role="img" aria-label="flex">
                  💪
                </span>
              </p>
            </div>
            <div>
              <PortfolioButton to="/portfolio">View my work</PortfolioButton>
              <EmailButton
                as="a"
                href={`mailto:${config.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </EmailButton>
            </div>
          </HomeContainer>
        )}
      </Transition>
    </Layout>
  )
}

export default IndexPage
