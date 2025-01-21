// const modulesPage = import.meta.globEager('/src/packages/**/doc.md', {
//   as: 'raw',
// })
const modulesPage = import.meta.glob('/src/packages/**/doc.md')
const routes: any[] = []
const guideRoutes: any[] = []
const guideEnRoutes: any[] = []
const guideTaroRoutes: any[] = []
const guideEnTaroRoutes: any[] = []
for (const path in modulesPage) {
  let name = (/packages\/(.*)\/doc\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/zh-CN/component/' + name,
    component: modulesPage[path],
    name,
  })
}

// const modulesENPage = import.meta.glob('/src/packages/**/doc.en-US.md', {
//   as: 'raw',
//   eager: true,
// })
const modulesENPage = import.meta.glob('/src/packages/**/doc.en-US.md')
// console.log('modulesENPage', modulesENPage)
for (const path in modulesENPage) {
  let name = (/packages\/(.*)\/doc\.en-US\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name,
    component: modulesENPage[path],
    name,
  })
}

const modulesTaroPage = import.meta.glob('/src/packages/**/doc.taro.md')
// console.log('modulesTaroPage', modulesTaroPage)
for (const path in modulesTaroPage) {
  let name = (/packages\/(.*)\/doc\.taro\.md/.exec(path) as any[])[1]
  routes.push({
    path: '/en-US/component/' + name + '-taro',
    component: modulesTaroPage[path],
    name: name + '-taro',
  })
  routes.push({
    path: '/zh-CN/component/' + name + '-taro',
    component: modulesTaroPage[path],
    name: name + '-taro',
  })
}

const modulesDocs = import.meta.glob('/src/sites/doc/docs/react/*.md');
for (const path in modulesDocs) {
  let name = (/docs\/react\/(.*).md/.exec(path) as any[])[1];
  guideRoutes.push({
    path: `/zh-CN/guide/${name}`,
    component: modulesDocs[path],
    name
  });
}

const modulesEnDocs = import.meta.glob('/src/sites/doc/docs/react/*.en-US.md');
for (const path in modulesEnDocs) {
  let name = (/docs\/react\/(.*).en-US.md/.exec(path) as any[])[1];
  guideEnRoutes.push({
    path: `/en-US/guide/${name}`,
    component: modulesEnDocs[path],
    name: `en-${name}`
  });
}
const modulesTaroDocs = import.meta.glob('/src/sites/doc/docs/taro/*.md');
for (const path in modulesTaroDocs) {
  let name = (/docs\/taro\/(.*).md/.exec(path) as any[])[1];
  guideTaroRoutes.push({
    path: `/zh-CN/guide-taro/${name}`,
    component: modulesTaroDocs[path],
    name
  });
}
const modulesEnTaroDocs = import.meta.glob('/src/sites/doc/docs/taro/*.en-US.md');
for (const path in modulesEnTaroDocs) {
  let name = (/docs\/taro\/(.*).en-US.md/.exec(path) as any[])[1];
  guideEnTaroRoutes.push({
    path: `/en-US/guide-taro/${name}`,
    component: modulesEnTaroDocs[path],
    name
  });
}
export {routes, guideRoutes, guideEnRoutes, guideTaroRoutes, guideEnTaroRoutes}
