---
sidebar_position: 4
---

# Custom cursor

Let's try using a different cursor other than the default one!

## Create Custom Cursor

You can easily create your own cursor component by using `useCursorify`. The useCursorify hook returns `mouseState` and `hoverState`. Refer to the description of each below.

- mouseState: Displays the mouse state. Currently, only 'default' and 'mouseDown' exist.
- hoverState: Displays the style applied using the `useHoverRegister` hook.

The following is the `EmojiCursor` cursor component of react-cursorify. You don't necessarily have to apply styles using style attribute. Try creating a cursor component with your own style!

```tsx
import { useCursorify } from '@cursorify/react'

const EmojiCursor = () => {
  const { mouseState, style } = useCursorify()

  return (
    <div
      style={{
        width: 40,
        height: 40,
        fontSize: 30,
      }}
    >
      {(() => {
        if (disabled) return '🖐️'
        if (mouseState === 'mouseDown') return '✊'
        if (style === 'pointer') return '👆'
        return '🖐️'
      })()}
    </div>
  )
}

export default EmojiCursor
```

## Applying Custom Cursors

You can apply custom cursors as follows:

```tsx
import { EmojiCursor } from '@cursorify/cursors'

const App = () => {
  return (
    <CursorifyProvider cursor={<EmojiCursor />}>
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

---

We provide various cursor components created by other people through the `@cursorify/cursors` library. You can also contribute to the [repository](https://github.com/cursorify/cursors) by submitting a PR to share the cursor you made with others.

If you're curious about what cursors are available, check out [cursors](https://cursorify.github.io/cursors)!
