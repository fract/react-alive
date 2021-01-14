## Install

```bash
npm i @whatsup-js/react-alive
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { fractal } from 'whatsup-js'
import { Alive } from '@whatsup-js/react-alive'

const App = fractal(function* () {
    while (true) {
        yield <div>Hello world</div>
    }
})

render(<Alive target={App} />, document.getElementById('app'))
```
