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
        title: '環境',
        path: '/environment/', 
        collapsable: true,
        children: [
          ['/environment/surfaces', '表面'],
          ['/environment/elavation', '層高'],
          ['/environment/light-and-shadows', '光線與陰影'],
        ]
      },
      {
        title: '排版', // 標題名稱
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/layout/understanding-layout', '了解佈局'],
          ['/layout/pixel-density', '像素密度'],
          ['/layout/responsive-layout-grid', '響應式佈局網格'],
          ['/layout/spacing-methods', '間距方法'],
          ['/layout/component-behavior', '元件行為'],
        ]
      },
      {
        title: '導航',
        path: '/navigation/', 
        collapsable: true,
        children: [
          ['/navigation/understanding-navigation', '理解導航'],
          ['/navigation/navigation-transitions', '導航過渡'],
          ['/navigation/search', '搜尋'],
        ]
      },
      {
        title: '色彩', // 標題名稱
        path: '/color/', // 該頁面首頁
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/color/the-color-system', '色彩系統'],
          ['/color/applying-color-to-ui', '將顏色應用到 UI'],
          ['/color/color-usage', '顏色使用'],
          ['/color/text-legibility', '色彩易讀性'],
          ['/color/dark-theme', '深色主題'],
        ]
      },
      {
        title: '文字',
        path: '/typography/',
        collapsable: true,
        children: [
          ['/typography/the-type-system', '文字系統'],
          ['/typography/understanding-typography', '了解排版'],
          ['/typography/language-support', '語言支援'],
        ]
      },
      {
        title: '聲音',
        path: '/sound/',
        collapsable: true,
        children: [
          ['/sound/about-sound', '關於聲音'],
          ['/sound/applying-sound-to-ui', '將聲音運用到 UI'],
          ['/sound/sound-attributes', '聲音屬性'],
          ['/sound/sound-choreography', '聲音編排'],
          ['/sound/sound-resources', '聲音資源'],
        ]
      },
    ]
  },
}