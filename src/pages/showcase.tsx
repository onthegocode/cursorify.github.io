import Layout from '@theme/Layout'
import React, { FC } from 'react'
import { Showcase } from '../containers/Showcase'

const ShowcasePage: FC = () => {
  return (
    <Layout
      title="Showcase"
      // description="Customizable cursor component in your project."
    >
      <Showcase />
    </Layout>
  )
}

export default ShowcasePage
