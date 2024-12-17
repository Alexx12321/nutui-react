import * as React from 'react'
import { render } from '@testing-library/react'
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
