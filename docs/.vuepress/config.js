module.exports = {
  title: '六角學院', // 整個網站的標題
  description: 'Just playing around', // 網站的標題
  head: [ // icon 包含 PWA
    ['link', { rel: 'manifest', href: '/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }],
  ],
  // serviceWorker: true, // 開啟 PWA
  themeConfig: {
    sidebarDepth: 2, // 側邊欄顯示到 H3
    smoothScroll: true,
    // 上方導覽
    nav: [
      {
        text: '首頁',
        link: '/',
      },
    ],
    // 側邊導覽
    sidebar: [
      {
        title: '色彩', // 標題名稱
        path: '/color/', // 該頁面首頁
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/color/text-legibility', '文字易讀性'],
        ]
      },
      {
        title: '語言支援',
        path: '/typography/',
        collapsable: true,
        children: [
          ['/typography/language-support', '語言支援'],
        ]
      },
    ]
  },
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Material Design',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-TW',
      title: 'Material Design',
      description: 'Vue 驱动的静态网站生成器'
    }
  }
}