import React, { FC, PropsWithChildren } from 'react'
import { CursorifyProvider, DefaultCursor } from '@cursorify/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer position="bottom-right" theme="colored" />
    </CursorifyProvider>
  )
}

export default Root
