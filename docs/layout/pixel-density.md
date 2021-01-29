---
title: 像素密度
description: 螢幕像素密度與解析度的變化因平台而異。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 像素密度

螢幕像素密度與解析度的變化因平台而異。

## 像素密度

單位英吋下所含的像素數量稱為像素密度。

### 螢幕密度的變化

高密度螢幕在單位英吋下的像素數量大於低密度螢幕。因此，一樣大小的 UI 元素，於低密度的螢幕中顯示，會佔據較大的顯示區域；相對的，高密度螢幕則顯示較小的 UI 元素．

---

### 估算像素密度

估算螢幕的密度，你可以使用以下公式：

螢幕像素密度＝螢幕寬度（或者高度）所含的像素數量／螢幕的實際寬度（單位以英吋計算）

![高密度顯示的結果](https://lh3.googleusercontent.com/NXbwdWYdlNMs5HA7tv-CCTtIiW2-96XHMpydZ4_M7SxFSMx2KYug3z-nBBQXGGhC0JVxhrL6CX0yP2fdzoXC4t783uzqFC_xQAM8JIM=w1064-v0)

> 高密度顯示的結果

![低密度顯示的結果](https://lh3.googleusercontent.com/RNAucz3HiKbTVhEz1fUBJzTorwRhe0-f4Y37WeLiojhoI2dhwDWo-afpOt6drgIjA99AgEtg1_NEgvc-hfnVUocGkwsKKYCwSV0h=w1064-v0)

> 低密度顯示的結果

## 密度獨立性（Density independence）

密度獨立性讓同樣的 UI 圖形元素，顯示於不同密度的螢幕時，能保有畫面的一致性。

### 獨立密度像素（Density-independent pixels）

獨立密度像素，簡稱 dp（或發音 "dips"），是一個具備彈性的單位，它可以讓同樣的 UI 圖形元素，在任意螢幕中保有顯示的一致性。它提供一個彈性的方法，讓畫面兼容於不同的平台。

Material UI 運用獨立密度像素讓元件即使顯示於不同密度的螢幕中，也能保持一致性。

![低密度與高密度螢幕顯示密度獨立性的 UI 元件](https://lh3.googleusercontent.com/_SO3kwOpx8F0MzIkb0z0q7paNqPMK3v_wtL7Es1oBKdN__aejeV5gw261UX1XST6refOBlbOaNwXvPaO-PKGRUiZX_moClbcYA_Q=w1064-v0)

> 1. 低密度螢幕顯示密度獨立性的UI元件
> 2. 高密度螢幕顯示密度獨立性的UI元件

## Android 的像素密度

開發一個 Android app 時，使用 dp 讓元件於不同密度顯示時，也具有一致性。

### Dps 與螢幕的密度

一個 dp 值代表著密度 160 螢幕上的一個像素。

計算 dp 值：

dp 值=（螢幕的像素寬度* 160）／螢幕密度

| 螢幕實際寬度 | 螢幕密度 | 螢幕的像素寬度 |螢幕的dps寬度 |
| -------- | -------- | -------- |-------- |
| 1.5in     | 120     | 180 px     |     |
| 1.5in     | 160     | 240 px     | 240 dp     |
| 1.5in     | 240     | 360 px     |     |

---

### 縮放像素（sp）

縮放像素（sp）具備如獨立密度像素（dp）的功能，不過僅負責調整字體。一個縮放像素的預設值等於獨立密度像素的預設值。

縮放像素（sp）與獨立密度像素（dp）主要的差異在於，縮放像素保留了使用者的文字設定。如果使用者設定了大號文字，則會看到符合他們喜好設定的文字大小。

## iOS 的像素密度

iOS 採用邏輯解析來當作側量密度的標準，其方法為測量一個單位含有多少個點。

### 邏輯解析

邏輯解析是運用實際裝置的原生解析度（以像素為單位）換算得來的實際縮放參數。

舉個例子，當我們的裝置是 iPhone X，您的邏輯解析度就是 375 x 812 個點。當進行渲染時，支援圖形顯示的硬體裝置，將負責處理 UI 元素的縮放，以正確顯示於解析度為 1125 x 2436 的 iPhone X 螢幕上。

- 延伸閱讀 [Apple iOS文件-關於顯示](https://developer.apple.com/library/content/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html)
- 延伸閱讀 [iPhone解析度使用指南-Paincode](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)

### iOS 採用的單位

當設計 iOS 時，使用點（pts）。

學習更多：

- [Apple iOS 文件-關於顯示](https://developer.apple.com/library/content/documentation/DeviceInformation/Reference/iOSDeviceCompatibility/Displays/Displays.html)
- [iPhone 解析度使用指南-Paincode](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)

## web 的像素密度

### 邏輯解析度

使用裝置的邏輯解析度，其可縮放畫面以符合設備可支援的螢幕解析度。

### web所使用的單位

設計 web 時，使用 px（像素）來取代 dp。

> 譯者：黃偉豪（小偉哥）
> 校稿：Joanne Chen
