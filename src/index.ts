import React from 'react'
import { Stream, whatsUp } from 'whatsup'

interface State {
    jsx: null | JSX.Element
}

interface Props {
    stream: Stream<JSX.Element>
}

export class WhatsUp extends React.Component<Props, State> {
    private dispose!: () => void

    constructor(props: Props) {
        super(props)

        this.state = { jsx: null }
    }

    componentDidMount() {
        const { stream } = this.props
        this.dispose = whatsUp(stream, (jsx) => this.setState({ jsx }))
    }

    componentWillUnmount() {
        this.dispose()
    }

    render() {
        return this.state.jsx
    }
}
