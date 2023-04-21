import React, { FC } from 'react'
import Layout from '@theme/Layout'
import { Home } from '../containers/Home'

const HomePage: FC = () => {
  return (
    <Layout
      title="Home"
      description="Customizable cursor component in your project."
    >
      <Home />
    </Layout>
  )
}

export default HomePage
