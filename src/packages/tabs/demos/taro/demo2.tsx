import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <Tabs
      value={tabvalue}
      onChange={(value) => {
        setTabvalue(value)
      }}
      activeType="smile"
    >
      <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
      <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
  )
}
export default Demo2
