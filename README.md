## Install

```bash
npm i @fract/react-alive
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { Alive } from '@fract/react-alive'
import { fractal } from '@fract/core'

const App = fractal(async function* () {
    while (true) {
        yield <div>Hello world</div>
    }
})

render(<Alive target={App} />, document.getElementById('app'))
```
