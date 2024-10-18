/**
 * 自定义层级
 */
import React from 'react'
// import { HoverButton, SafeArea } from '@nutui/nutui-react-taro'
import { HoverButton } from '@nutui/nutui-react-taro'
import { View, Icon, Text } from '@tarojs/components'
// import { Cart } from '@nutui/icons-react-taro'
import Taro, { pxTransform } from '@tarojs/taro'

const App = () => {
  return (
    <View>
      <HoverButton icon={<Icon type="search" />} zIndex={101} />
      <View
        style={{
          zIndex: 100,
          position: Taro.getEnv() === 'RN' ? 'absolute' : 'fixed',
          width: '100%',
          left: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Text
          style={{
            height: pxTransform(60),
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          这个图层层级为 100
        </Text>
        {/* <SafeArea position="bottom" /> */}
      </View>
    </View>
  )
}
export default App