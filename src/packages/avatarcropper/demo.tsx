import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'

const AvatarCropperDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toolbar: '自定义裁剪区域工具栏',
      round: '圆形裁剪',
    },
    'zh-TW': {
      basic: '基礎用法',
      toolbar: '自定義裁剪區域工具欄',
      round: '圓形裁剪',
    },
    'en-US': {
      basic: 'Basic usage',
      toolbar: 'Customize the cropping area toolbar',
      round: 'Roll Finger Cutting',
    },
  })
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Demo1 />

        <h2>{translated.toolbar}</h2>
        <Demo2 />

        <h2>{translated.round}</h2>
        <Demo3 />
      </div>
    </>
  )
}

export default AvatarCropperDemo
