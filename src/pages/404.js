import React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import { Button } from "../components/styled/404Styles"

const NotFoundPage = () => {
  return (
    <div>
      <Seo title="404: Not found" />
      <h1>404 Page Not Found!</h1>
      <p>Unfortunately, this page doesn't exist :(</p>
      <Button>
        <Link to="/">Bring me home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
