## Install

```bash
npm i @whatsup/react-alive
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { fractal } from 'whatsup'
import { Alive } from '@whatsup/react-alive'

const App = fractal(function* () {
    while (true) {
        yield <div>Hello world</div>
    }
})

render(<Alive target={App} />, document.getElementById('app'))
```
