import React from 'react'
import {Button} from './Button/button'
import { Accordion } from './Accordion/accordion'

export default function Counter() {
  return (
    <>
    <div className='bg-green-500'>Hi from outside</div>
    <div>
        <Button variant={'solid'} colorscheme='success'>hello</Button>
        <Accordion label='hello' variant='neon'>this is accordion</Accordion>
    </div>
    </>
  )
}
