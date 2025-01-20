import React, { useEffect, useMemo, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import './App.scss'
import APPContext from './context'
import Nav from '@/sites/doc/components/nav'
import Header from '@/sites/doc/components/header'
import DemoPreview from '@/sites/doc/components/demo-preview'
import Issue from '@/sites/doc/components/issue'
import { getComponentName } from '@/sites/assets/util'
import routers from './router'
import loadable from '@loadable/component'
import CodeBlock from './components/demoblock/codeblock'
import { BackTop } from '../../packages/backtop/backtop'
const Title = () => {
  let location = useLocation()
  const isTaro = location.pathname.includes('-taro')
  const s = window.location.hash.split('/')
  useEffect(() => {
    const componentName = getComponentName()
    console.log(componentName)
    setComponentName(componentName)
  }, [location])
  const [componentName, setComponentName] = useState({ name: '', cName: '' })
  return (
    <div className="doc-title-content">
      <div className="title">
        {componentName.name}&nbsp;{s[1] === 'zh-CN' && componentName.cName}
      </div>
      {isTaro ? (
        <div className="npm-package">
          <a href="https://www.npmjs.com/package/@nutui/nutui-react-taro">
            <img
              src="https://img.shields.io/badge/npm-%40nutui%2Fnutui--react--taro-brightgreen"
              alt="@nutui/nutui-react-taro"
            />
          </a>
          <img
            src="https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png"
            width="20"
            height="20"
          />
        </div>
      ) : (
        <div className="npm-package">
          <a href="https://www.npmjs.com/package/@nutui/nutui-react">
            <img
              src="https://img.shields.io/badge/npm-%40nutui%2Fnutui--react-brightgreen"
              alt="@nutui/nutui-react"
            />
          </a>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/192500/27/37524/4524/649d5065F7e5fbef6/afe567692acba3b0.png"
            width="20"
            height="20"
          />
        </div>
      )}
    </div>
  )
}
const components = {
  CodeBlock,
}
const App = () => {
  const [fixed, setFixed] = useState(false)
  const [hidden, setHidden] = useState(false)

  const scrollTitle = () => {
    let top = document.documentElement.scrollTop
    if (top > 127) {
      setFixed(true)
      if (top < 142) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    } else {
      setFixed(false)
      setHidden(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollTitle)
  }, [])

  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="doc-content">
          <div className="doc-title">
            <div
              className={`doc-title-position ${fixed ? 'fixed' : ''} ${
                hidden ? 'hidden' : ''
              }`}
            >
              <Title></Title>
              <Issue></Issue>
            </div>
          </div>

          <div className="doc-content-document isComponent">
            <div className="docs-component-page">
              <div className="markdown-body">
                <Routes>
                  {routers.map((ru, k) => {
                    const path = ru.component.name?.substring(
                      0,
                      ru.component.name.lastIndexOf('/')
                    )
                    const C = useMemo(
                      () => loadable(ru.component),
                      [ru.component]
                    )
                    return (
                      <Route
                        key={k}
                        path={ru.path}
                        element={
                          <APPContext.Provider value={{ path }}>
                            <MDXProvider components={components}>
                              <C />
                            </MDXProvider>
                          </APPContext.Provider>
                        }
                      ></Route>
                    )
                  })}
                </Routes>
              </div>
            </div>
          </div>
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
        </div>
      </HashRouter>
      <BackTop threshold={500} />
    </div>
  )
}
export default App
