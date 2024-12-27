import React from 'react'
import { Cell, Lottie } from '@nutui/nutui-react'
import whitePull from '../../animation/dark/pulltorefresh-white.json'

const Demo3 = () => {
  return (
    <>
      <Cell style={{ background: '#FF0F23' }}>
        <Lottie source={whitePull} style={{ width: 132, height: 26 }} />
      </Cell>
    </>
  )
}
export default Demo3
