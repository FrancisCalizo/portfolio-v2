import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SEO from "../components/seo"

const Button = styled.button`
  border: 1px solid darkgray;
  border-radius: 3px;
  padding: 0.2rem 0.4rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
  }
`

const NotFoundPage = () => {
  return (
    <div>
      <SEO title="404: Not found" />
      <h1>404 Page Not Found!</h1>
      <p>Unfortunately, this page doesn't exist :(</p>
      <Button>
        <Link to="/">Bring me home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
