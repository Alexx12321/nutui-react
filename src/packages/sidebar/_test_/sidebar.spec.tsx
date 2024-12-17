import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SideBar } from '../sidebar'

const list = Array.from(new Array(3).keys())

test('should render defaultValue correctly', async () => {
  const { container } = render(
    <SideBar style={{ height: 300 }} value="0">
      {list.map((item) => (
        <SideBar.Item key={item} title={`Opt ${item + 1}`}>
          Content {item + 1}
        </SideBar.Item>
      ))}
    </SideBar>
  )
  const item = container.querySelectorAll('.nut-sidebar-titles-item')[0]
  expect(item).toHaveClass('nut-sidebar-titles-item-active')
})

test('should choose and scroll to the right option', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <SideBar style={{ height: 300 }} value="0" onChange={onChange}>
      {list.map((item) => (
        <SideBar.Item key={item} title={`Opt ${item + 1}`}>
          Content {item + 1}
        </SideBar.Item>
      ))}
    </SideBar>
  )
  const items = container.querySelectorAll('.nut-sidebar-titles-item')
  fireEvent.click(items[1])
  expect(onChange).toHaveBeenCalledWith(1)
})
test('disabled option', async () => {
  const onChange = vi.fn()
  const { container } = render(
    <SideBar style={{ height: 300 }} value="0" onChange={onChange}>
      {list.map((item) => (
        <SideBar.Item key={item} title={`Opt ${item + 1}`} disabled>
          Content {item + 1}
        </SideBar.Item>
      ))}
    </SideBar>
  )
  const items = container.querySelectorAll('.nut-sidebar-titles-item')
  fireEvent.click(items[1])
  expect(onChange).not.toHaveBeenCalled()
})
