// 抽象配置中心

import homefeatures1 from '../assets/images/img-home-features1.png';
import homefeatures2 from '../assets/images/img-home-features2.png';
import homefeatures3 from '../assets/images/img-home-features3.png';
import homefeatures4 from '../assets/images/img-home-features4.png';
import homefeatures5 from '../assets/images/img-home-features5.png';

// React 官网配置
export const SiteReact = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui-react',
    releases: 'https://github.com/jdf2e/nutui-react/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui-react/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/'
    },
    {
      name: 'nutui-vue',
      link: 'https://nutui.jd.com/'
    }
  ],
  newHeader: [],
  header: [
    {
      name: 'intro-react,theme-react,start-react,international-react,contributing-react',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro-react',
      pathName: 'intro-react'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: '/zh-CN/component/button'
    }
    // {
    //   name: 'example',
    //   cName: '示例',
    //   path: 'demo.html'
    // },
    // {
    //   name: '/zh-CN/case',
    //   cName: '案例',
    //   eName: 'Cases',
    //   path: '/zh-CN/case',
    //   pathName: 'case'
    // },
    // {
    //   name: 'resource',
    //   cName: '资源',
    //   path: '/zh-CN/resource',
    //   pathName: '/zh-CN/resource'
    // },
    // {
    //   name: 'notice',
    //   cName: '通知',
    //   path: '/zh-CN/notice',
    //   pathName: '/zh-CN/notice'
    // },
    // {
    //   name: 'joinus',
    //   cName: '加入我们',
    //   path: '/zh-CN/guide/joinus',
    //   pathName: '/zh-CN/guide/joinus'
    // }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '60+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
      // {
      //   title: '贴心通道',
      //   desc: '社区维护 高效服务<br />技术支持 经验沉淀',
      //   url: homefeatures4
      // }
    ],
    // 是否展示taro楼层
    taroShow: true,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'react'
};
// React Taro 官网配置
export const SiteReactTaro = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react',
    gitee: '',
    releases: 'https://github.com/jdf2e/nutui-react/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui-react/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/'
    },
    {
      name: 'nutui-vue',
      link: 'https://nutui.jd.com/'
    }
  ],
  newHeader: [],
  header: [
    {
      name: 'intro-react,theme-react,starttaro-react,international-react,contributing-react',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro-react',
      pathName: 'intro-react'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: '/zh-CN/component/button'
    }
    // {
    //   name: 'example',
    //   cName: '示例',
    //   path: 'demo.html'
    // },
    // {
    //   name: '/zh-CN/case',
    //   cName: '案例',
    //   eName: 'Cases',
    //   path: '/zh-CN/case',
    //   pathName: 'case'
    // },
    // {
    //   name: 'resource',
    //   cName: '资源',
    //   path: '/zh-CN/resource',
    //   pathName: '/zh-CN/resource'
    // },
    // {
    //   name: 'notice',
    //   cName: '通知',
    //   path: '/zh-CN/notice',
    //   pathName: '/zh-CN/notice'
    // },
    // {
    //   name: 'joinus',
    //   cName: '加入我们',
    //   path: '/zh-CN/guide/joinus',
    //   pathName: '/zh-CN/guide/joinus'
    // }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '60+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
      // {
      //   title: '贴心通道',
      //   desc: '社区维护 高效服务<br />技术支持 经验沉淀',
      //   url: homefeatures4
      // }
    ],
    // 是否展示taro楼层
    taroShow: true,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'react'
};
// React 官网配置
export const SiteReactNative = {
  repository: {
    git: 'https://github.com/jdf2e/nutui-react-native',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui-react-native',
    releases: 'https://github.com/jdf2e/nutui-react-native/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui-react-native&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui-react-native/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: 'nutui-react-native',
      link: '/'
    }
  ],
  newHeader: [],
  header: [
    {
      name: 'intro,theme,start,international,contributing',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro',
      pathName: 'intro'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: '/zh-CN/component/button'
    }
  ],
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui-react-native&type=star&count=true&size=large',
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'React Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '60+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
    ],
    // 是否展示taro楼层
    taroShow: true,
    bizComponent: [],
    cases: {
      show: false
    },
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'react'
};

// Vue 官网配置
export const SiteVue = {
  repository: {
    git: 'https://github.com/jdf2e/nutui',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    // 本地跑 dev:jdt 报错了，我先注释掉了，😂
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/1x/'
    },
    {
      name: '2.x',
      link: '/2x/'
    },
    {
      name: '3.x',
      link: '/'
    },
    {
      name: 'nutui-jdl',
      link: '/jdl/'
    },
    {
      name: 'nutui-react',
      link: 'https://nutui.jd.com/react'
    },
    {
      name: 'nutui-jdt',
      link: 'https://nutui.jd.com/jdt/'
    }
  ],
  header: [
    {
      name: 'intro-jdt,intro,theme,start,start-jdt,starttaro,international,ide,contributing,en-intro,en-start,en-starttaro,en-theme,en-international,en-ide,en-contributing,official-theme,migrate-from-v3',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro',
      pathName: 'intro'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    }
    // {
    //   name: 'example',
    //   cName: '示例',
    //   path: 'demo.html'
    // },
    // {
    //   name: '/zh-CN/case',
    //   cName: '案例',
    //   eName: 'Cases',
    //   path: '/zh-CN/case',
    //   pathName: 'case'
    // },
    // {
    //   name: 'resource',
    //   cName: '资源',
    //   eName: 'Resource',
    //   path: '/zh-CN/resource',
    //   pathName: '/zh-CN/resource'
    // },
    // {
    //   name: 'notice',
    //   cName: '通知',
    //   eName: 'Notice',
    //   path: '/zh-CN/notice',
    //   pathName: '/zh-CN/notice'
    // },
    // {
    //   name: 'joinus',
    //   cName: '加入我们',
    //   eName: 'Join us',
    //   path: '/zh-CN/guide/joinus',
    //   pathName: '/zh-CN/guide/joinus'
    // }
  ],

  newHeader: [
    {
      name: 'component',
      cName: '基础组件',
      eName: 'Components',
      key: '1',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    },
    {
      name: 'component',
      cName: '高级组件',
      eName: 'Components',
      key: '2',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    },
    {
      name: 'intro-jdt,intro,theme,start,start-jdt,starttaro,international,ide,contributing,en-intro,en-start,en-starttaro,en-theme,en-international,en-ide,en-contributing',
      cName: '资源',
      eName: 'Guide',
      key: '3',
      path: '/zh-CN/resource',
      pathName: '/zh-CN/resource',
      url: '#/resource'
    },
    // {
    //   name: 'joinus',
    //   cName: '贡献指南',
    //   eName: 'Contribution Guidelines',
    //   key: '4',
    //   path: '/zh-CN/joinus',
    //   pathName: '/zh-CN/joinus',
    //   url: 'https://nutui.jd.com/#/zh-CN/guide/contributing'
    // },
    {
      name: 'joinus',
      cName: '加入我们',
      eName: 'Join us',
      key: '5',
      path: '/zh-CN/joinus',
      pathName: '/zh-CN/joinus',
      url: '#/joinus'
    }
  ],
  // 官网 首页
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large',
    // 平台资源楼层
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'Vue3 Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '70+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
      // {
      //   title: '贴心通道',
      //   desc: '社区维护 高效服务<br />技术支持 经验沉淀',
      //   url: homefeatures4,
      // },
    ],
    // 是否展示taro楼层
    taroShow: true,
    // 是否展示 业务组件
    bizComponent: [
      {
        title: 'cat',
        desc: '基于 NutUI 的大促组件',
        release: true
      },
      {
        title: 'bingo',
        desc: '基于 NutUI 的抽奖组件',
        release: false
      }
    ],
    // 应用案例
    cases: {
      show: true,
      moreRouter: '#/zh-CN/case'
    },
    //是否展示二维码
    qrcodeShow: true,
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'vue'
};
export const SiteVueTaro = {
  repository: {
    git: 'https://github.com/jdf2e/nutui',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    // 本地跑 dev:jdt 报错了，我先注释掉了，😂
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/1x/'
    },
    {
      name: '2.x',
      link: '/2x/'
    },
    {
      name: '3.x',
      link: '/'
    },
    {
      name: 'nutui-jdl',
      link: '/jdl/'
    },
    {
      name: 'nutui-react',
      link: 'https://nutui.jd.com/react'
    },
    {
      name: 'nutui-jdt',
      link: 'https://nutui.jd.com/jdt/'
    }
  ],
  header: [
    {
      name: 'intro-jdt,intro,theme,start,start-jdt,starttaro,international,ide,contributing,en-intro,en-start,en-starttaro,en-theme,en-international,en-ide,en-contributing,,official-theme,migrate-from-v3',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro',
      pathName: 'intro'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Component',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    }
    // {
    //   name: 'example',
    //   cName: '示例',
    //   path: 'demo.html'
    // },
    // {
    //   name: '/zh-CN/case',
    //   cName: '案例',
    //   eName: 'Cases',
    //   path: '/zh-CN/case',
    //   pathName: 'case'
    // },
    // {
    //   name: 'resource',
    //   cName: '资源',
    //   eName: 'Resource',
    //   path: '/zh-CN/resource',
    //   pathName: '/zh-CN/resource'
    // },
    // {
    //   name: 'notice',
    //   cName: '通知',
    //   eName: 'Notice',
    //   path: '/zh-CN/notice',
    //   pathName: '/zh-CN/notice'
    // },
    // {
    //   name: 'joinus',
    //   cName: '加入我们',
    //   eName: 'Join us',
    //   path: '/zh-CN/guide/joinus',
    //   pathName: '/zh-CN/guide/joinus'
    // }
  ],

  newHeader: [
    {
      name: 'component',
      cName: '生态产品',
      eName: 'Components',
      key: '1',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    },
    {
      name: 'intro-jdt,intro,theme,start,start-jdt,starttaro,international,ide,contributing,en-intro,en-start,en-starttaro,en-theme,en-international,en-ide,en-contributing',
      cName: '资源',
      eName: 'Guide',
      key: '2',
      path: '/zh-CN/guide/intro',
      pathName: 'intro',
      url: 'https://nutui.jd.com/#/zh-CN/resource'
    },
    {
      name: '/zh-CN/case',
      cName: '案例',
      eName: 'Cases',
      path: '/zh-CN/case',
      pathName: 'case',
      key: '3',
      url: '/h5/vue/4x/#/zh-CN/case'
    },
    {
      name: 'joinus',
      cName: '加入我们',
      eName: 'Join us',
      key: '4',
      path: '/zh-CN/guide/joinus',
      pathName: '/zh-CN/guide/joinus',
      url: 'https://nutui.jd.com/#/zh-CN/guide/joinus'
    }
  ],
  // 官网 首页
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large',
    // 平台资源楼层
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'Vue3 Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '70+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
      // {
      //   title: '贴心通道',
      //   desc: '社区维护 高效服务<br />技术支持 经验沉淀',
      //   url: homefeatures4,
      // },
    ],
    // 是否展示taro楼层
    taroShow: true,
    // 是否展示 业务组件
    bizComponent: [
      {
        title: 'cat',
        desc: '基于 NutUI 的大促组件',
        release: true
      },
      {
        title: 'bingo',
        desc: '基于 NutUI 的抽奖组件',
        release: false
      }
    ],
    // 应用案例
    cases: {
      show: true,
      moreRouter: '#/zh-CN/case'
    },
    //是否展示二维码
    qrcodeShow: true,
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'vue'
};

// Vue JDT 官网配置
export const SiteJDT = {
  repository: {
    git: 'https://github.com/jdf2e/nutui',
    gitee: 'https://gitee.com/jd-platform-opensource/nutui',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  newRepository: {
    git: 'https://github.com/jdf2e',
    gitee: 'https://gitee.com/jd-platform-opensource',
    releases: 'https://github.com/jdf2e/nutui/releases', // git 更新日志
    issues: 'https://nutui.jd.com/nutui-issue-helper/?repo=jdf2e/nutui&lang=zh-cn',
    discussions: 'https://github.com/jdf2e/nutui/discussions',
    plan: 'https://github.com/jdf2e/nutui/projects/1'
  },
  versions: [
    {
      name: '1.x',
      link: '/1x/'
    },
    {
      name: '2.x',
      link: '/2x/'
    },
    {
      name: '3.x',
      link: '/'
    },
    {
      name: 'nutui-jdl',
      link: '/jdl/'
    },
    {
      name: 'nutui-react',
      link: 'https://nutui.jd.com/react'
    },
    {
      name: 'nutui-jdt',
      link: 'https://nutui.jd.com/jdt/'
    }
  ],

  docs: {
    name: '指南',
    packages: [
      {
        name: 'intro-jdt',
        cName: '介绍',
        eName: 'Introduction',
        show: true
      },
      {
        name: 'start-jdt',
        cName: '快速上手',
        eName: 'Quickstart',
        show: true
      },
      {
        name: 'starttaro-jdt',
        cName: '小程序开发',
        eName: 'WeChat',
        show: true
      },
      {
        name: 'theme',
        cName: '主题定制',
        eName: 'Customize Theme',
        show: true
      },
      {
        name: 'international',
        cName: '国际化',
        eName: 'Internationalization',
        show: true
      },
      {
        name: 'ide',
        cName: '开发工具支持',
        eName: 'IDE tool support',
        show: true
      },
      {
        name: 'contributing',
        cName: '贡献指南',
        eName: 'Contributing',
        path: '#/contributing',
        show: true
      },
      {
        name: 'https://github.com/jdf2e/nutui/releases',
        cName: '更新日志',
        eName: 'Changelog',
        show: true,
        isLink: true
      }
    ]
  },
  newHeader: [],
  header: [
    {
      name: 'intro-jdt,intro,theme,start,start-jdt,starttaro,international,ide,contributing',
      cName: '指南',
      eName: 'Guide',
      path: '/zh-CN/guide/intro-jdt',
      pathName: 'intro-jdt'
    },
    {
      name: 'component',
      cName: '组件',
      eName: 'Components',
      path: '/zh-CN/component/button',
      pathName: 'zh-CN/component/button'
    },
    {
      name: '/zh-CN/case',
      cName: '案例',
      eName: 'Cases',
      path: '/zh-CN/case',
      pathName: 'case'
    },
    {
      name: 'resource',
      cName: '资源',
      eName: 'Resource',
      path: '/zh-CN/resource',
      pathName: '/zh-CN/resource'
    }
  ],
  // 官网 首页
  homePage: {
    gitstar: 'https://ghbtns.com/github-btn.html?user=jdf2e&repo=nutui&type=star&count=true&size=large',
    // 平台资源楼层
    platform: [
      {
        title: '京东风格',
        desc: '遵循京东 App 10.0 设计规范',
        url: homefeatures1
      },
      {
        title: '前沿技术',
        desc: 'Vue3 Vite 2.x TypeScript',
        url: homefeatures3
      },
      {
        title: '适配多端',
        desc: '基于 Taro 轻松开发多端小程序',
        url: homefeatures5
      },
      {
        title: '组件丰富',
        desc: '70+ 组件，覆盖多数业务场景',
        url: homefeatures2
      }
    ],
    // 是否展示taro楼层
    taroShow: true,
    // 是否展示 业务组件
    bizComponent: [
      {
        title: 'cat',
        desc: '基于 NutUI 的大促组件',
        release: true
      },
      {
        title: 'bingo',
        desc: '基于 NutUI 的抽奖组件',
        release: false
      }
    ],
    // 应用案例
    cases: {
      show: true,
      moreRouter: '#/zh-CN/case'
    },
    //是否展示二维码
    qrcodeShow: true,
    // 学习资源
    article: {
      show: true,
      moreRouter: '#/zh-CN/resource'
    }
  },
  language: 'vue',
  demoUrl: 'https://nutui.jd.com/jdt/demo.html#'
};

// Vue JDB 官网配置
export const SiteJDB = SiteVue;
// Vue JDDKH 官网配置
export const SiteJDDKH = SiteVue;
