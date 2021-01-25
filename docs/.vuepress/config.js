module.exports = {
  title: '六角學院', // 整個網站的標題
  description: 'Just playing around', // 網站的標題
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }] // 設置 icon
  ],
  themeConfig: {
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
        collapsable: true, // 是否可下拉關閉
        // 巢狀路由 路徑 / 標題
        children: [
          ['/color/text-legibility', '文字易讀性'],
        ]
      },
      {
        title: '語言支援',
        collapsable: true,
        children: [
          ['/typography/language-support ', '語言支援'],
        ]
      },
    ]
  },

}