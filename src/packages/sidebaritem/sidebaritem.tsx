import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

interface SideBarItemInnerProps {
  autoHeightClassName: string
}

export interface SideBarItemProps {
  title: string | number
  value: string | number
  disabled: boolean
  className: string
  children?: React.ReactNode
}

const defaultProps = {
  title: '',
  value: '',
  disabled: false,
} as SideBarItemProps

export const SideBarItem: FunctionComponent<
  Partial<SideBarItemProps & SideBarItemInnerProps>
> = (props) => {
  const { children, autoHeightClassName, className, disabled } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-sidebaritem'
  const classes = classNames(
    classPrefix,
    {
      active: !disabled && (props as any).active,
    },
    autoHeightClassName,
    className
  )

  return children ? (
    <div className={classes}>{!disabled && children}</div>
  ) : null
}
