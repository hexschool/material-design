module.exports = {
  title: 'Material Design - 六角學院譯', // 整個網站的標題
  description: 'Material Design', // 網站的標題
  head: [ // icon 包含 PWA
    ['meta', { content:'Material Design', itemprop:'name', name:'twitter:title', property:'og:title'}],
    ['meta', { content:'Build beautiful, usable products faster. Material Design is an adaptable system—backed by open-source code—that helps teams build high quality digital experiences.', itemprop:'description', name:'twitter:description', property:'og:description'}],
    ['meta', { content:'/static/spec/images/share.png', itemprop:'image', name:'twitter:image', property:'og:image' }],
    ['meta', { content:'https://material.io', itemprop:'url', name:'twitter:url', property:'og:url'}],
    ['meta', { content:'Material Design', property:'og:site_name'}],
    ['meta', { content:'article', property:'og:type'}]
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
      {
        text: '六角學院',
        link: 'https://www.hexschool.com/',
      },
      {
        text: 'Material Design',
        link: 'https://material.io/design',
      },
    ],
    // 側邊導覽
    sidebar: [
      {
        title: '基礎概述',
        path: '/foundation-overview/', 
        collapsable: true,
        children: [
          ['/foundation-overview/foundation-overview', '基礎概述'],
        ]
      },
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
          ['/color/text-legibility', '文字易讀性'],
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
      {
        title: '圖示',
        path: '/icongraphy/',
        collapsable: true,
        children: [
          ['/icongraphy/product-icons', '產品圖標'],
          ['/icongraphy/system-icons', '系統圖標'],
          ['/icongraphy/animated-icons', '動畫圖標'],
        ]
      },
      {
        title: '形狀',
        path: '/shape/',
        collapsable: true,
        children: [
          ['/shape/about-shape', '關於形狀'],
          ['/shape/shape-and-hierarchy', '形狀與層次'],
          ['/shape/shape-as-expression', '用形狀表達'],
          ['/shape/applying-shape-to-ui', '將形狀運用至 UI'],
        ]
      },
      {
        title: '信息',
        path: '/communication/',
        collapsable: true,
        children: [
          ['/communication/confirmation-and-acknowledgement', '確認與確認信'],
          ['/communication/data-formats', '資料格式'],
          ['/communication/empty-states', '空狀態'],
          ['/communication/help-and-feedback', '幫助與回饋'],
          ['/communication/imagery', '圖像'],
          ['/communication/offline-states', '離線狀態'],
          ['/communication/writing', '寫作'],
        ]
      },
      {
        title: '準則概述',
        path: '/guidelines/',
        collapsable: true,
        children: [
          ['/guidelines/guidelines', '準則概述'],
        ]
      },
      {
        title: '材質主題化',
        path: '/material-theming/',
        collapsable: true,
        children: [
          ['/material-theming/overview', '總覽'],
          ['/material-theming/implementing-your-theme', '執行你的主題'],
        ]
      },
      {
        title: '可用性',
        path: '/usability/',
        collapsable: true,
        children: [
          ['/usability/accessibility', '輔助功能'],
        ]
      },
    ]
  },
}