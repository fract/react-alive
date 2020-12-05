import React from 'react'
import Renderer from 'react-test-renderer'
import { fractal, observable } from '@fract/core'
import { Alive } from '../src/alive'

const disposeMock = jest.fn()

const name = observable('John')

const user = fractal(function* () {
    try {
        while (true) {
            yield <div>{yield* name}</div>
        }
    } finally {
        disposeMock()
    }
})

const renderer = Renderer.create(<Alive target={user} />)

it('initial render with <div>John</div>', async () => {
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})

it('render with <div>Barry</div>', async () => {
    name.set('Barry')
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})

it('render with <div>Barry</div>', async () => {
    name.set('Barry')
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})

it('should call disposeMock when unmount', async () => {
    renderer.unmount()
    expect(disposeMock).toBeCalled()
})
