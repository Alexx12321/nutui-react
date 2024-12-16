import React, { useState } from 'react'
import { SideBar, Space } from '@nutui/nutui-react'

const Demo6 = () => {
  function generateRandomStr(n: number) {
    const words = []
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    for (let i = 0; i < n; i++) {
      const wordLength = getRandomInt(3, 10)
      let word = ''
      for (let j = 0; j < wordLength; j++) {
        const randomIndex = getRandomInt(0, alphabet.length - 1)
        word += alphabet[randomIndex]
      }
      words.push(word)
    }
    const sentence = `${words.join(' ')}.`
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
  }
  const [value, setValue] = useState<number | string>('0')
  const list = Array.from(new Array(3).keys())
  return (
    <>
      <SideBar
        switchOnEnd
        style={{ height: 300 }}
        value={value}
        onChange={(value) => {
          setValue(value)
        }}
      >
        {list.map((item) => (
          <SideBar.Item key={item} title={`Option ${item + 1}`}>
            <Space direction="vertical">
              <div>{generateRandomStr(30)}</div>
              <div>{generateRandomStr(30)}</div>
            </Space>
          </SideBar.Item>
        ))}
      </SideBar>
    </>
  )
}
export default Demo6
