import React from 'react'
import { Tabbar } from '@nutui/nutui-react-taro'
import { Cart, Category, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo1 = () => (
  <Tabbar
    onSwitch={(value) => {
      console.log(value)
    }}
  >
    <Tabbar.Item title="首页" icon={<Home size={18} />} value={9} />
    <Tabbar.Item title="分类" icon={<Category size={18} />} />
    <Tabbar.Item title="逛" icon={<Hi size={18} />} />
    <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
    <Tabbar.Item title="我的" icon={<User size={18} />} />
  </Tabbar>
)

export default Demo1
