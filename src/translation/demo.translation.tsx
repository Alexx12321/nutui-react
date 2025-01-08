import React from 'react'
import { BaseLang } from '../locales/base'
import { useTranslate } from '../sites/assets/locale'
import translation from './translation'
// HOC
export function withTranslation(C: React.ComponentType<any>) {
  return function WithTranslation(props: any) {
    const [t] = useTranslate(translation)

    return <C {...props} t={t} />
  }
}
// type of t
export type tType = BaseLang & {
  primary: string
  info: string
  default: string
  danger: string
  warning: string
  success: string
  solid: string
  outline: string
  dashed: string
  none: string
  button: string
  disabled: string
  squareButton: string
  roundButton: string
  loading: string
  clickMe: string
  normal: string
  small: string
  mini: string
  large: string
  xlarge: string
  blockButton: string
  simpleButton: string
  gradientButton: string
  title: string
  descriptionText: string
  description: string
  clickTest: string
  setRadius: string
  customContent: string
  switch: string
  jump: string
  link: string
  clickEvent: string
  submit: string
  custom: string
  imageText: string
  showOverlay: string
  customOverlay: string
  setAnimateTime: string
  noLockBgScroll: string
  nestedConetnt: string
  closeOnOverlayClick: string
  text: string
}
export type propsType = {
  t: tType
}
