---
sidebar_position: 1
---

# Quick Start

Let's discover **react-cursorify in less than 5 minutes**.

## Getting Started

Let's apply react-cursorify!

## Install react-cursorify

You can install react-cursorify in your React project using the two commands below.

via npm:

```zsh
npm install @cursorify/react
```

or via yarn:

```zsh
yarn add @cursorify/react
```

## Apply to your react project

To apply react-cursorify, simply wrap your React project with `CursorifyProvider`. It's easy, right?

```tsx
import { CursorifyProvider } from '@cursorify/react'

const App = () => {
  return (
    <CursorifyProvider>
      <>{/*....your component */}</>
    </CursorifyProvider>
  )
}

export default App
```

And that's it! It's really simple, isn't it?

If you want to change the options of the default cursor, you can refer to [Default options](./default-options.md).

If you want to apply styles to the cursor, you can refer to [Apply cursor style](./apply-cursor-style.md).

And if you want to create your own cursor component, you can check out [Create custom cursor](./create-custom-cursor.md)!
