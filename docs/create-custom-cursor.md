---
sidebar_position: 5
---

# Create custom cursor

You can easily create your own cursor component by using `useCursorify`. The useCursorify hook returns `mouseState` and `hoverState`. Refer to the description of each below.

- mouseState: Displays the mouse state. Currently, only 'default' and 'mouseDown' exist.
- hoverState: Displays the style applied using the `useHoverRegister` hook.

The following is the `EmojiCursor` cursor component of react-cursorify. You don't necessarily have to apply styles using emotion. Try creating a cursor component with your own style!

```tsx
import { useCursorify } from '@cursorify/react'
import styled from '@emotion/styled'

const EmojiCursor = () => {
  const { mouseState, hoverState } = useCursorify()

  return (
    <StyledWrapper data-hover={hoverState} {...{ a: 1 }}>
      {(() => {
        if (mouseState === 'mouseDown') return '✊'
        if (hoverState === 'pointer') return '👆'
        if (hoverState === 'text') return '✍️'

        return '🖐️'
      })()}
    </StyledWrapper>
  )
}

export default EmojiCursor

const StyledWrapper = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
`
```
