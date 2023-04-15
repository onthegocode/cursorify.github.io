import React, { FC, PropsWithChildren } from 'react'
import { CursorifyProvider } from 'react-cursorify'

const Root: FC<PropsWithChildren> = ({ children }) => {
  return <CursorifyProvider opacity={1}>{children}</CursorifyProvider>
}

export default Root
