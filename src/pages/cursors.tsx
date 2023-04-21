import Layout from '@theme/Layout'
import React, { FC } from 'react'
import { Cursors } from '../containers/Cursors'

const CursorsPage: FC = () => {
  return (
    <Layout
      title="Cursors"
      // description="Customizable cursor component in your project."
    >
      <Cursors />
    </Layout>
  )
}

export default CursorsPage
