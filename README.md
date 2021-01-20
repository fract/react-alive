## Install

```bash
npm i @whatsup/react
```

## Usage

```tsx
import React from 'react'
import { render } from 'react-dom'
import { fractal } from 'whatsup'
import { WhatsUp } from '@whatsup/react'

const App = fractal(function* () {
    while (true) {
        yield <div>Hello world</div>
    }
})

render(<WhatsUp stream={App} />, document.getElementById('app'))
```
