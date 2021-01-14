import React from 'react'
import { Stream, whatsUp } from 'whatsup'

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
        this.dispose = whatsUp(target, (jsx) => this.setState({ jsx }))
    }

    componentWillUnmount() {
        this.dispose()
    }

    render() {
        return this.state.jsx
    }
}
