import React, { FunctionComponent, useContext } from 'react'
import hljs from 'highlight.js'
import APPContext from '../../context'
import DemoBlock from './demoblock'
import * as Components from '@nutui/nutui-react'
import LiveErrorPreview from './LiveErrorPreview'
import './demoblock.scss'
const modules = import.meta.glob(`@/packages/**/demos/h5/*.tsx`, {
  query: '?raw',
  import: 'default',
  eager: true,
})

import { LiveProvider, LiveEditor} from 'react-live';
const CodeBlock: FunctionComponent = (props: {
  src?: string
  live?: boolean
  children?: string
}) => {
  const { src, live = false } = props
  const ctx = useContext(APPContext)
  const originCode = modules[`${ctx.path}/demos/${src}`]
  try {
    const highlightedCode = hljs.highlightAuto(originCode, ['jsx']).value
    if (live) {
      return (
        <LiveProvider code={originCode} noInline={false} scope={{React, ...Components}}>
          <LiveErrorPreview />
          <LiveEditor />
        </LiveProvider>
      );
    }
    return (
      <DemoBlock text={originCode} scss="">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </DemoBlock>
    )
  } catch (e) {
    console.log('e', e)
    return <></>
  }
}

export default CodeBlock
