import React, { FC, PropsWithChildren } from 'react'
import { CursorifyProvider, DefaultCursor } from '@cursorify/react'

const Root: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CursorifyProvider
      opacity={1}
      delay={1}
      cursor={<DefaultCursor />}
      defaultCursorVisible={false}
      breakpoint={997}
    >
      {children}
    </CursorifyProvider>
  )
}

export default Root
