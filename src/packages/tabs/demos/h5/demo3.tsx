import React, { useState } from 'react'
import { Tabs } from '@nutui/nutui-react'

const Demo3 = () => {
  const [tabvalue, setTabvalue] = useState<string | number>('0')
  return (
    <>
      <Tabs
        value={tabvalue}
        onChange={(value) => {
          setTabvalue(value)
        }}
        activeType="simple"
      >
        <Tabs.TabPane title="Tab 1"> Tab 1 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
      </Tabs>
    </>
  )
}
export default Demo3
