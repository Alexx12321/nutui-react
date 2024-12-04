import React from 'react'
import { Cell, InputNumber } from '@nutui/nutui-react'
import ConfigProvider from '@/packages/configprovider'

const Demo9 = () => {
  const customTheme3 = {
    nutuiInputnumberInputWidth: '60px',
  }
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
            defaultValue={5}
            min={0}
            max={10}
            formatter={(value) => `${value}%`}
          />
        </ConfigProvider>
      </Cell>
    </>
  )
}
export default Demo9
