import React, { useState } from 'react'
import { SideBar } from '@nutui/nutui-react'

const Demo4 = () => {
  const [value, setValue] = useState<number | string>(1)
  const list = [
    {
      title: 'Option 1',
      value: 1,
    },
    {
      title: 'Option 2',
      value: 2,
    },
    {
      title: 'Option 3',
      value: 3,
    },
    {
      title: 'Option 4',
      value: 4,
    },
    {
      title: 'Option 5',
      value: 5,
    },
    {
      title: 'Option 6',
      value: 6,
    },
  ]
  return (
    <>
      <SideBar
        style={{ height: 200 }}
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      >
        {list.map((item) => (
          <SideBar.Item key={item.value} title={item.title} value={item.value}>
            Content {item.value}
          </SideBar.Item>
        ))}
      </SideBar>
    </>
  )
}
export default Demo4
