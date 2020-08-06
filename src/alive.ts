import React from 'react'
import { live, Fractal } from '@fract/core'

interface State {
    projection: null | JSX.Element
}

interface Props {
    target: Fractal<JSX.Element>
}

export class Alive extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = { projection: null }

        const update = (projection: JSX.Element) => this.setState({ projection })

        live(async function* () {
            while (true) yield update(yield* props.target)
        })
    }

    render() {
        return this.state.projection
    }
}
