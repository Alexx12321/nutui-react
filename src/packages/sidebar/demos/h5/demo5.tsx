import React, { useState } from 'react'
import { SideBar } from '@nutui/nutui-react'

const Demo5 = () => {
  const [value, setValue] = useState<number | string>('0')
  const list = Array.from(new Array(3).keys())
  return (
    <>
      <SideBar
        style={{ height: 300 }}
        value={value}
        duration={500}
        onChange={(value) => {
          setValue(value)
        }}
      >
        {list.map((item) => (
          <SideBar.Item key={item} title={`Option ${item + 1}`}>
            Content {item + 1}
          </SideBar.Item>
        ))}
      </SideBar>
    </>
  )
}
export default Demo5
