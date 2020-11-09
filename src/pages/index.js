import React from "react"

import Header from "../components/Header"
import ResortsGrid from "../components/Grids/ResortsGrid"
import PortalsGrid from "../components/Grids/PortalsGrid"

const IndexPage = () => {
  return (
    <>
      <Header />
      <ResortsGrid />
      <PortalsGrid />
    </>
  )
}

export default IndexPage
