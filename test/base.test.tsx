import React from 'react'
import Renderer from 'react-test-renderer'
import { fractal, fraction } from '@fract/core'
import { Alive } from '../src/alive'

const delay = (time: number) => new Promise((r) => setTimeout(r, time))

const Name = fraction('John')

const User = fractal(async function* _User() {
    while (true) {
        yield <div>{yield* Name}</div>
    }
})

const renderer = Renderer.create(<Alive target={User} />)

it('initial render with null', async () => {
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})

it('render with <div>John</div>', async () => {
    await delay(300)
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})

it('render with <div>Barry</div>', async () => {
    Name.use('Barry')
    await delay(300)
    const json = renderer.toJSON()
    expect(json).toMatchSnapshot()
})
