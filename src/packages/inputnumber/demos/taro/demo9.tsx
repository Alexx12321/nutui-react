import React, { useState } from 'react'
import { Cell, ConfigProvider, InputNumber } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const customTheme3 = {
    nutuiInputnumberInputWidth: '60px',
  }
  const [toastType, SetToastType] = useState('text')
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  return (
    <>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={5}
            min={1}
            max={10}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          />
        </ConfigProvider>
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={1}
            min={0}
            max={10}
            formatter={(value) => `${value}%`}
          />
        </ConfigProvider>
      </Cell>
      {/* <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      /> */}
    </>
  )
}
export default Demo9
