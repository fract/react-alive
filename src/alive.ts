import React from 'react'
import { Stream, watch } from '@fract/core'

interface State {
    jsx: null | JSX.Element
}

interface Props {
    target: Stream<JSX.Element>
}

export class Alive extends React.Component<Props, State> {
    private dispose!: () => void

    constructor(props: Props) {
        super(props)

        this.state = { jsx: null }
    }

    componentDidMount() {
        const { target } = this.props
        this.dispose = watch(target, (jsx) => this.setState({ jsx }))
    }

    componentWillUnmount() {
        this.dispose()
    }

    render() {
        return this.state.jsx
    }
}
