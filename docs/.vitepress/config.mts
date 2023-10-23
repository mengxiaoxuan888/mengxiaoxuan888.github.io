import { defineConfig } from 'vitepress'
import head from './configs/head'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',  //语言设置 zh-CN 中文简体 en-US 英国(美国)
  title: "梦晓轩",
  description: "一个技术文档网站",
  markdown: { //markdown 配置,显示行数
    lineNumbers: true,
  },
  head,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '例子', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '例子',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [  //github连接地址
      { icon: 'github', link: '#' }
    ],

    i18nRouting: true,  //国际化

    search: {   //本地搜索功能
      provider: 'local',
    },

    docFooter:{ //翻页导航
      prev: '上一篇',
      next: '下一篇',
    },

    darkModeSwitchLabel: '外观',//没看到效果
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    footer: { //底部信息
      message: '人生苦短，且行且珍惜',
      copyright: 'Copyright© 2022-2023',
    },
  }
})
