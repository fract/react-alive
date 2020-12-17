## Install

```bash
npm i @fract/react-alive
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { fractal } from '@fract/core'
import { Alive } from '@fract/react-alive'

const App = fractal(function* () {
    while (true) {
        yield <div>Hello world</div>
    }
})

render(<Alive target={App} />, document.getElementById('app'))
```
