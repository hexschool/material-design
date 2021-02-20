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
    repo: 'https://github.com/hexschool/material-design',
    repoLabel: '查看專案',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '幫助我們改善該頁面！',
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
        collapsable: true,
        children: [
          ['/foundation-overview/foundationOverview', '基礎概述'],
        ]
      },
      {
        title: '環境',
        collapsable: true,
        children: [
          ['/environment/surfaces', '表面'],
          ['/environment/elavation', '層高'],
          ['/environment/lightAndShadows', '光線與陰影'],
        ]
      },
      {
        title: '排版', // 標題名稱
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/layout/understandingLayout', '了解佈局'],
          ['/layout/pixelDensity', '像素密度'],
          ['/layout/responsiveLayoutGrid', '響應式佈局網格'],
          ['/layout/spacingMethods', '間距方法'],
          ['/layout/componentBehavior', '元件行為'],
        ]
      },
      {
        title: '導航',
        collapsable: true,
        children: [
          ['/navigation/understandingNavigation', '理解導航'],
          ['/navigation/navigationTransitions', '導航過渡'],
          ['/navigation/search', '搜尋'],
        ]
      },
      {
        title: '色彩', // 標題名稱
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/color/theColorSystem', '色彩系統'],
          ['/color/applyingColorToUi', '將顏色應用到 UI'],
          ['/color/colorUsage', '顏色使用'],
          ['/color/textLegibility', '文字易讀性'],
          ['/color/darkTheme', '深色主題'],
        ]
      },
      {
        title: '文字',
        collapsable: true,
        children: [
          ['/typography/theTypeSystem', '文字系統'],
          ['/typography/understandingTypography', '了解排版'],
          ['/typography/languageSupport', '語言支援'],
        ]
      },
      // {
      //   title: '聲音',
      //   collapsable: true,
      //   children: [
      //     ['/sound/about-sound', '關於聲音'],
      //     ['/sound/applying-sound-to-ui', '將聲音運用到 UI'],
      //     ['/sound/sound-attributes', '聲音屬性'],
      //     ['/sound/sound-choreography', '聲音編排'],
      //     ['/sound/sound-resources', '聲音資源'],
      //   ]
      // },
      {
        title: '圖示',
        collapsable: true,
        children: [
          ['/icongraphy/productIcons', '產品圖標'],
          ['/icongraphy/systemIcons', '系統圖標'],
          ['/icongraphy/animatedIcons', '動畫圖標'],
        ]
      },
      {
        title: '形狀',
        collapsable: true,
        children: [
          ['/shape/aboutShape', '關於形狀'],
          ['/shape/shapeAndHierarchy', '形狀與層次'],
          ['/shape/shapeAsExpression', '用形狀表達'],
          ['/shape/applyingShapeToUi', '將形狀運用至 UI'],
        ]
      },
      {
        title: '訊息',
        collapsable: true,
        children: [
          ['/communication/confirmationAndAcknowledgement', '確認與確認信'],
          ['/communication/dataFormats', '資料格式'],
          ['/communication/emptyStates', '空狀態'],
          ['/communication/helpAndFeedback', '幫助與回饋'],
          ['/communication/imagery', '圖像'],
          ['/communication/offlineStates', '離線狀態'],
          ['/communication/writing', '寫作'],
        ]
      },
      {
        title: '準則概述',
        collapsable: true,
        children: [
          ['/guidelines/guidelines', '準則概述'],
        ]
      },
      {
        title: '材質主題化',
        collapsable: true,
        children: [
          ['/material-theming/overview', '總覽'],
          ['/material-theming/implementingYourTheme', '執行你的主題'],
        ]
      },
      {
        title: '可用性',
        collapsable: true,
        children: [
          ['/usability/accessibility', '輔助功能'],
        ]
      },
    ]
  },
}