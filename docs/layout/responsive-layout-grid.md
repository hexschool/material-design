---
title: 響應式佈局網格
description: Material Design 的響應式佈局網格能夠適應螢幕的尺寸與方向，確保每個佈局之間的一致性。
---

# 響應式佈局網格

Material Design 的響應式佈局網格能夠適應螢幕的尺寸與方向，確保每個佈局之間的一致性。

## 欄、欄間距、邊距 (Columns, gutters, and margins)

Material Design 佈局網格由三個元素組成：欄、欄間距、邊距。

![欄、欄間距、邊距](https://lh3.googleusercontent.com/_rKc6ogXgmiQWxZQ7u3XvV_PSGUr4FmQvqBapHhuNyyWTGeQ68tWB8xZJC9FS1duQGSEPl6Q6TNK23OeWFy6qKFiLtboumotsZMQng=w1064-v0)

> 1. 欄
> 2. 欄間距
> 3. 外間距

### 欄（Columns）

頁面內容放置在螢幕中含有欄的區域內。

為了彈性對應所有螢幕尺寸，欄寬非固定數值，而是依百分比變動。欄數則取決於螢幕的斷點範圍(預定螢幕尺寸範圍)，無論是手機、平板或其他尺寸裝置。

![欄，360 dp](https://lh3.googleusercontent.com/D6pd4WU4-5xxx08GxsMY-v-g8Di9n1vHCYdmnKw8R-4xIbPm-HSjnXXOI2hgyEn_S8uRzR9c2KNowRdQRJuyAAcoQ5xmoPhIKKh-=w1064-v0)

> 在斷點 360dp 的行動裝置上，此佈局網格使用 4 欄。

![欄，600 dp](https://lh3.googleusercontent.com/82njrJBKzXerg8zX_V8GPhLEH1QkHyzCXj3f7-330MTurhxvvrEsHofEgsMuLVW2_Ts5ctJ-OSM2zSfdKN0SnL84R64T9upojLxK=w1064-v0)

> 在斷點 600dp 的平板螢幕上，此佈局網格使用 8 欄。

---

### 欄間距（Gutters）

欄間距是各欄間的空間，用來分隔頁面內容。

欄間距的寬度在各斷點範圍中是固定的。為更好適應螢幕，欄間距在不同斷點中可以改變寬度。較寬大的欄間距因在各欄間有更多的空間，故更適合大尺寸的螢幕。

![欄間距，360dp](https://lh3.googleusercontent.com/lDP0K31FpCQxQsctqnCE9kfoEZEHA-y0-agvkZxgVuwp0j6hXoV1VZp8CmnhK_RaFYoo1wvW93Fs-q4yWg-8eYsSKb2gLLfFeFSKGw=w1064-v0)

> 在斷點 360 dp 的行動裝置中，此佈局網格使用 16dp 的欄間距。

![欄間距，600dp](https://lh3.googleusercontent.com/CZEGEUX6NSCLGHrlN0W3KGJ3SvG4HTgE_Z1OXgrLaxYE3Zku2MuO7mfby1m-6wrzIKD1kp25H1iXhjO4te2AbHRJf2bripFdnrkx=w1064-v0)

> 在斷點為 600dp 的平板螢幕中，此佈局網格使用 24dp 的欄間距。

---

### 邊距（Margin）

邊距是頁面內容與螢幕左右邊緣的距離。

邊距寬度在各斷點範圍中是固定的。為更好適應螢幕，邊距寬度會依不同的斷點變動。較寬的邊距因在頁面內容周圍有更多留白，故更適合大尺寸的螢幕。

![邊距，360dp](https://lh3.googleusercontent.com/zs_TXfpOmkPDHRzVllD9ddlI4gVfLRGTV7qS4sBW0sE0Wer3RUgT6dClsKcVlRyNBY2cCDfd65OzPI7FqjsUzFvtxO8NmivYjFOOrg=w1064-v0)

> 斷點為 360dp 的行動裝置中，此佈局網格使用 16dp 的邊距。

![邊距，600dp](https://lh3.googleusercontent.com/7EV1c2B2UqqkjDmRK4eNN6mTd9Yy3-ajxmVbxtS_gXzMRxuFPK2PKMWPwh6Vh1nb2ApsIYFg042BbKnvAsCM0fPDxNDnLJWvqBWl-Ic=w1064-v0)

> 斷點為 600dp 的平板螢幕中，此佈局網格使用 24dp 的邊距。

---


## 客製化網格(Grid customization)

可調整佈局網格以滿足產品及各種螢幕尺寸的需求。

### 自訂欄間距

佈局中可調整欄間距，以在欄之間創建更多或更少的空間。

![欄間距，8dp](https://lh3.googleusercontent.com/SI9km7Xdr6NTQ49Z1jndfwcfqM4L3gjGaj6QsZCSDWJURMbLQ8ISTH2f-jvQJmYQQ7q3R6QIIR43z6TYIESj7M2gf_yUs6g0gBD2=w1064-v0)

> 此佈局網格使用 8dp 的欄間距。較緊密的空間可能表明圖像間彼此相關，因此被視為群組的一部分。


![欄間距，32dp](https://lh3.googleusercontent.com/_fcvmq-Xnz2Keq8zN-GZkGfAj5fqwLyakzbkix0cbRnQ56eOgbZyy782NLxx3sAKkZZ4FQXmd2WwTtZZZHD4K0TCEB6hVOvgfQ59z8E=w1064-v0)

> 此佈局網格使用較大的欄間距，32dp，使欄間有更多空白。這些額外的空間使得各相簿能作為獨立物件存在於群組中。

![不可行，欄間距](https://lh3.googleusercontent.com/OP2cnGTbmQn6P_xtZFogX7ZYFn2fYS54oRg8hrwZG1b2jVNABdGG-MiMCa_9UcABhjF5KlnY6d95690fTetHr_pfXBi_-fs-igrS9Q=w1064-v0)

> 不可行
不可使用過大的欄間距，例如與欄同寬。過多的留白並不會為內容保留足夠的空間，反而使頁面內容看起來不統一。

---

### 自訂邊距

可以藉由調整邊距，在頁面內容與螢幕邊緣之間增減空間。邊距在每個斷點使用固定值。

清晰易讀的內文文本，理想長度是每行 40-60 個字元。

![邊距，8dp](https://lh3.googleusercontent.com/1eGo_TUok0xpivYyCRUkPovd-3go8h3qU2iuAf2rTfSEYN1B-NnwHKtKst59NKvTXxmWY-Oa-hYh4LKyY8pk3rmnyW3jjjNjlPRSzg=w1064-v0)

> 此佈局網格僅使用 8dp 的邊距，因此圖片在佈局中能佔用較多空間。

![邊距，64dp](https://lh3.googleusercontent.com/9czTot8tP36Qb_08YpfM55P7LT3Mf82B-UMbxGckNYJJzRFPD9NJqon8FHr28svSRrfDgkWU0rkBrG7Lm5ba_X4rzOy4yKrF4Aql=w1064-v0)

> 此佈局網格使用較大的邊距：64dp，因而限制了頁面內容的寬度。


![不可行，邊距](https://lh3.googleusercontent.com/X0hIPvMUPFdDTIinNo3dYHzSRqqj7pb2FxJCAO0tXAvI9IhRR9MY7xtUHCH1oPi2s_SUlsPkEBSwAGcpySkNExxiqKaoSxzMfJTuUe0=w1064-v0)

> 不可行
不可使用過大的邊距，導致頁面內容的空間不足。

---

### 欄間距與邊距

在同一斷點中，欄間距與外間距的寬度不需相同。

![欄間距與邊距](https://lh3.googleusercontent.com/2OaQEul6DYo_-f3IYCQmYnnoy2RewaXXZW5TBEbcFrUl_2DYN2AACzuHvQDf_xIuqENOAeWVhoBsOrBw6oXs8nsZeB0uaQcIt0XgYA=w1064-v0)

> 1. 32dp margins
> 2. 8dp gutters

---

### 水平網格

可以針對水平滾動的觸控裝置自定義 Material Design 的佈局網格。欄、欄間距、邊距皆由左向右排列，而非由上而下。螢幕高度則決定了水平網格中有多少欄。

水平滾動的使用者介面設計，在非觸控裝置與網站平台上並不常見。

![水平網格](https://lh3.googleusercontent.com/an7CsqA8lI6R6mInXCzSXob3cL9Rmd6ENFCxntf1OLbC0bogUdiBkMG25C1XWvPv3jsNo9HauazP1wBxn2DuALhk_74nzXG2JVbj=w1064-v0)

> 此水平佈局網格有 4 欄，佈局總高度是 400dp。
> 1. 欄
> 2. 欄間距
> 3. 邊距


為讓出介面頂部空間給應用欄（App bars）或其他使用者介面區域，水平網格的位置可順應不同高度調整。

![水平網格位置](https://lh3.googleusercontent.com/NE-ljCSL7jEQcCdWXl9WX7FcdPyroyv742poBja1NR3MKErS-Uf_UPppO_vVbl_oG0oBW8vo-PIGslKLTCmIkkSts_XE2ZjcWoqgig=w1064-v0)

> 此水平佈局網格起始於頂部應用欄（Top App Bar）下方，在 316dp 內使用了 4 個水平欄。

---

## 斷點

斷點是具有特定佈局要求預定螢幕尺寸。在給定的斷點範圍內，佈局要調整成符合螢幕的尺寸與方向。

<video src="https://kstatic.googleusercontent.com/files/7510cb73f813e11e9afb47b339c7e3a41acff9ee1d143a697ff89d5d9d74ae6e9489c26dfb702c47d040dd5ef34acad3c63ec1184151a4f50305057c6008b71a" width="100%" controls=""></video>

### 斷點系統

Material Design 基於以下欄數架構提供響應式佈局。
佈局上使用 4 欄、8 欄、12 欄網格，可以適應所有不同螢幕、裝置與滾動方向。

斷點範圍決定了各尺寸中的欄數、建議的邊距和欄間距。

| 斷點範圍(dp) | 直式螢幕 | 橫式螢幕 | 視窗 | 欄  | 外間距/欄間距＊ |
| ------------ | -------- | -------- | ---- | --- | ------------- |
| 0 – 359      | 小型手機 |          | xs   | 4   | 16            |
| 360 – 399    | 中型手機 |          | xs   | 4   | 16            |
| 400 - 479    | 大型手機 |          | xs   | 4   | 16            |
| 480 - 599    | 大型手機 | 小型手機 | xs   | 4   | 16            |
| 600 - 719    | 小型平板 | 中型手機 | s    | 8   | 16            |
| 720 - 839    | 大型平板 | 大型手機 | s    | 8   | 24            |
| 840 - 959    | 大型平板 | 大型手機 | s    | 12  | 24            |
| 960 - 1023   |          | 小型平板 | s    | 12  | 24            |
| 1024 – 1279  |          | 大型平板 | m    | 12  | 24            |
| 1280 – 1439  |          | 大型平板 | m    | 12  | 24            |
| 1440 – 1599  |          |          | l    | 12  | 24            |
| 1600 – 1919  |          |          | l    | 12  | 24            |
| 1920 +       |          |          | xl   | 12  | 24            |

＊邊距與欄間距是彈性的，尺寸不需相同。

---

### iOS 斷點

下列欄數、邊距與欄間距寬度，可應用在 iOS 的螢幕、裝置、方向與寬度的斷點上。

| 裝置                                       | 方向 | 垂直尺寸類別 | 水平尺寸類別 | 欄  | 外間距/欄間距＊ |
| ------------------------------------------ | ---- | ------------ | ------------ | --- | --------------- |
| iPhone                                     | 直式 | 一般         | 壓縮         | 4   | 16              |
| iPhone                                     | 水平 | 壓縮         | 壓縮         | 4   | 16              |
| iPhone Plus                                | 直式 | 一般         | 壓縮         | 4   | 16              |
| iPhone Plus                                | 水平 | 壓縮         | 一般         | 4   | 16              |
| iPad                                       | 直式 | 一般         | 一般         | 8   | 16              |
| iPad                                       | 水平 | 一般         | 壓縮         | 8   | 24              |
| iPad - Even Split Multitasking             | 直式 | 一般         | 壓縮         | 12  | 24              |
| iPad - Even Split Multitasking             | 水平 | 一般         | 壓縮         | 12  | 24              |
| iPad - 2/3 Split Multitasking              | 直式 | 一般         | 壓縮         | 12  | 24              |
| iPad - 2/3 Split Multitasking - First App  | 水平 | 一般         | 一般         | 12  | 24              |
| iPad - 2/3 Split Multitasking - Second App | 水平 | 一般         | 壓縮         | 12  | 24              |
| iPad Pro - Even Split Multitasking         | 直式 | 一般         | 壓縮         | 12  | 24              |
| iPad Pro 13in - Even Split Multitasking    | 水平 | 一般         | 一般         | 12  | 24              |

＊在 Material Design 網格系統中，邊距與欄間距是彈性數值，二者不需相同。

---

## 網格行為

### 流動網格

流動網格使用可縮放和調整內容大小的欄。其可以使用斷點來決定佈局是否需進行重大更改。

![流動網格](https://lh3.googleusercontent.com/89QHuMEXHqYWZmf4sUHiJA9kL5Tp5pPIjhWKke-XH4U42SATrzsYiKQTDFYwh1pbyl75qMV5ivbS1STpGZg6diZiNLRef-Vnv33hyEQ=w1064-v0)

> 欄在全幅網格中擴展。

---

### 固定網格

固定網格使用固定尺寸的欄，是藉由變動邊距來保持內容區域在各斷點範圍中不變。固定網格的佈局只能在指定的斷點處更改。

![恆定網格](https://lh3.googleusercontent.com/HYQsQ63mhCGNAAhAq-x2GmAsZtNrCr0PgKXNfxWpoqYBhf2XsDWW8GpXY3NWxpgDxTQXXNvZpYLRcz7L7RadqgXEIPMkpona9txjkQ=w1064-v0)

> 邊距在固定網格中擴展。

---

## 使用者介面區域

佈局由幾個使用者介面區域組成，例如側邊導覽列、內容區域、應用欄等。這些區域展示了行為操作、內容及導覽目標。使用者介面區域在不同尺寸、不同斷點間的螢幕間切換時，需保有一致性。

為了提高裝置間的相似性，桌機版與行動版的使用者介面元素設計、組織方式應一致。

![使用者介面區域](https://lh3.googleusercontent.com/TXdz-Np_AD31xni8mn1uT36xuwpaoH37nzwV32GrFSukXXVQDfpMAa8GAg7V5cxtsJktlPKR0rM1hvTE7pyXqZB83XWitNQkriOp7g=w1064-v0)

> 不同螢幕尺寸間切換佈局。

### 常駐使用者介面區域

常駐使用者介面區域可置於響應式網格外，例如側邊選單。這類區域無法收合。

![常駐使用者介面區域](https://lh3.googleusercontent.com/ABpRjNf6Hvl7MtekCmimmXqnFncQxC4udsUfhD4Hu53EgU-Xe7JmrGLQYiTYYAGf-kPsA5TOxdSbu_sY0LUMV7XP5wBecta-Y4pMkw=w1064-v0)

> 如螢幕空間允許，可使用常駐使用者介面區域呈現內容。

---

### 永久性使用者介面區域(Persistent UI regions)

永久性使用者介面區域可於任何時機出現、或保留在畫面上。其可打開或關閉，以顯示或消失。當其出現時會同時壓縮內容與網格。

當永久性使用者介面出現時，其可視性不受螢幕中其他元素的交互作用影響。

![永久性使用者介面區域](https://lh3.googleusercontent.com/aepyD62S5ymwEZPo_yWiDkdeQDkbXfvXyxuL0f3ldMVdrhCywcuN3_J0hlIc5dqZap8vtG05oaztns7G2wZBLVJsA0OLfRpZ4At2jw=w1064-v0)

> 永久性側邊選單開啟時，壓縮了網格與其內容。

---

### 暫時性使用者介面區域

為暫時性呈現，當開啟暫時使用者介面區域時，響應式網格並不會受到影響。當其為可視狀態時，點擊區域內一項物件或任何區域外的空間，暫時性使用者介面區域便會隱藏。

當暫時性使用者介面區域出現時，螢幕中其他元素不可交互作用。

![暫時性使用者介面區域](https://lh3.googleusercontent.com/MM8SXq2tpuM7GlcdvR9jvdMIVaAXg1sGY-nmtv0x7iehZTKIvGVXgY-YHn5jBOSbKiyFWYmmwsQHfBUJ8bnAYGphmGPUob963wfWDg=w1064-v0)

> 暫時性側邊選單開啟時，響應式網格與內容不受影響。

---

## 線框圖

線框圖結構化的佈局，為佈局、分層與陰影提供了一致性的規劃。線框圖是產品的第一步，旨在修改，以滿足產品的特定需求。

![線框圖1](https://lh3.googleusercontent.com/rkDO41HmaOhChpMSVpCRnUXToArTTjigeDrdrJHUVMzlEZACvlQBDcAbmbme7TMPqdkwLHINTvRyUhAvyt-P-jE1wcpVhIEh6rkdqg=w1064-v0)

> 1. 行動版
> 2. 桌機版

![線框圖2](https://lh3.googleusercontent.com/x1hxZpWhlYtvx1PqKuw2oEbdEreYHEGN3ZL8nxIHoa0moR-rr_w5evcohdDC9oEcfC3Epqi2_scBzUd1ifsHOvCUueG8_FIU4IyliA=w1064-v0)

> 1. 行動版
> 2. 桌機版


---

> 譯者：任遠忠
> 校稿：Joanne Chen
