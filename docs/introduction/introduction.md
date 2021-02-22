---
title: 引言
description: Material 是 Google 為了幫助團隊在 Android、iOS、Flutter、以及網頁，建立優良數據體驗而創建的設計系統。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 引言

Material 是 Google 為了幫助團隊在 Android、iOS、Flutter、以及網頁，建立優良數據體驗而創建的設計系統。

<video src="https://kstatic.googleusercontent.com/files/2e8ce35f669a5b728e18297dbf7d1815cce5486fe51447b46a4e08864e93e0bc057eec6eab8cb9d5aed93e0983b705bcb165a0b70a40197f400c550281456934" width="100%" controls=""></video>

---

## 原則

![原則](https://gblobscdn.gitbook.com/assets%2F-MLCYr9ilZP2Zl74Yozc%2F-MLGgj88CBOaO8bxsSE4%2F-MLHPaMMS4ch7zSxfj0R%2Funnamed.png?alt=media&token=fa31d950-632d-41bf-b81a-cbf7b5ab2856)

### 材質隱喻

Material Design 受到自然世界及其材質的啟發，包括他們如何反射光線、投射影子。材質表面重新建構了紙張與墨水的介質。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://gblobscdn.gitbook.com/assets%2F-MLCYr9ilZP2Zl74Yozc%2F-MLGgj88CBOaO8bxsSE4%2F-MLHPi-T811qVxIQIZ4A%2Funnamed%20(1).png?alt=media&token=fcad7fa1-942f-474f-b4db-a6d9d5cf844b" alt="">
        <h4>大膽、圖形、動機</h4>
        <p>Material Design 以印刷設計模式-字型、格線、空間、比例、色彩、圖像-為基礎，去創造階層、意涵、以及專注在給使用者的沈浸式體驗。</p>
    </div>
    <div class="grid-item">
         <img src="https://gblobscdn.gitbook.com/assets%2F-MLCYr9ilZP2Zl74Yozc%2F-MLGgj88CBOaO8bxsSE4%2F-MLHPsUDhs_id4k-if-s%2Funnamed%20(2).png?alt=media&token=6d4900f9-979b-4fa2-a565-a265870c34ba" alt="">
         <h4>動畫賦予意義</h4>
        <p>動畫透過微妙的反饋及連貫的過渡效果來引起注意力並保持連續性。當元素出現在螢幕上時，他們通過交互作用來變換與重組環境，從而產生新的變化。</p>
    </div>
</div>

---

## 元件

要創建一個使用者介面，需要使用素材元件交互組合，像是使用[內建狀態系統](https://material.io/design/interaction/states.html#usage)顯示焦點、選取、激活、錯誤、懸停、按取、拖移、以及禁用狀態。元件資料庫可使用於 [Android](https://material.io/develop/android)、[iOS](https://material.io/develop/ios)、[Flutter](https://material.io/develop/flutter)、以及[網頁](https://material.io/develop/web)。

<img src="https://lh3.googleusercontent.com/DcFGIddvtUEPBQPOLLuFK0tBWCySswYyQv08pxQHJFwOUGmSJHPL7dTZsn41iJhuvCIDZi0katN-CPrAMG4PNPmU5qu1y0YazP28LkU=w1064-v0" alt="">

<p class="annotation">Material Design 提供許多設計及開發介面元件的範例。</p>

元件滿足一系列的介面需求，例如：

- **陳列**：設定與編輯像是卡片、清單列表、表格等元件。
- **導航**：使用者可以使用側邊選單、標籤列等元件來瀏覽頁面。
- **動作**：使用者在執行操作時可以使用懸停按鈕等元件。
- **輸入**：使用者可以輸入資料或使用文字欄位、紙片、控制項。
- **訊息**：使用元件提醒使用者關鍵信息與資訊，例如：消息條、橫幅、對話框。

### 資源

- 元件指南涵蓋了操作、行為、與規範
- [Android](https://material.io/develop/android/)、[iOS](https://material.io/develop/ios/)、[Web](https://material.io/develop/web/) 和 [Flutter](https://material.io/develop/flutter/) 的開發人員文件和程式碼
- 在[資源](https://material.io/resources)頁面上可下載的 Figma 設計文件

---

## 主題化

材質主體化可以輕鬆自定義 Material Design 以符合您品牌的外觀與風格，並具有內建支援與指南來幫助您自定義色彩、版型樣式，以及圓角造型。

<video src="https://kstatic.googleusercontent.com/files/56985645893767211a57f93271675840f9faa89805a904f3c177f3622dd89241e99c4abbeff4b6600600d258dc761468a652492d950ad95e3d972aea34d4175b" width="100%" controls=""></video>

<p class="annotation">可以輕鬆修改材料元件（如按鈕）的顏色、版式和形狀以符合您的品牌。</p>

### 資源

- 使用 Glitch 或 Android Studio 構建[材質主題](https://material.io/resources/build-a-material-theme/)
- [材質主題指南](https://material.io/design/material-theming/)
- [使用材質主題的應用範例](https://material.io/design/material-studies/about-our-material-studies.html)

### 色彩

<div class="img-grid">
    <div class="grid-item">
        <br>
        <p>Material 的色彩系統是一種將顏色應用於 UI 的組織方法。整體顏色樣式具有語義化名稱與元件中定義的用法-主要、次要（品牌色彩）、表面、背景與錯誤。<br>
        每種顏色都有一種互補色，用於在頂部的元素，以增強一致性和無障礙的對比度。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/q5ElIalXn1JbmtCdIfmMv323fLuPYkgPUtM86qyUNS9IlxN7BCLsnoLGK5NjH2oRfPTT2md7YlC5UV92UnQh7GJ6C0GVDPBIrytzVw=w1064-v0" alt="">
        <p>當將主色樣式（1）用作容器顏色時，在主色上的色彩（2）可用於內部內容。</p>
    </div>
</div>

---

## 字型

<div class="img-grid">
    <div class="grid-item">
        <br>
        <p>Material Design 文字量表為標題、正文和說明等所有內容提供 13 種字體樣式。每種樣式在介面內都有明確的含義和預期的用途。<br>
        可以修改重要屬性，例如字體、字重和字母大小寫，以符合您的品牌和設計。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/RJeuB2LZe7idmxj47vBzFMn2IgEzhesNhIcSko0RMm5zKgnQ61tbuBFnhjkccfZwXOrhmScQo4um0EUhrjp-5nKktAE2EknkqVtidz0=w1064-v0" alt="">
        <p>Material Components 中的所有字體皆使用 13 種文字樣式之一。</p>
    </div>
</div>

---

## 形狀

<div class="img-grid">
    <div class="grid-item">
        <br>
        <p>應用形狀樣式可以幫助吸引注意力或識別元件，傳達其狀態與您的品牌。<br>
        所有材料組件均根據其大小（小、中、大）分為形狀類別。這些樣式提供了一種快速更改大小相似元件形狀的方法。<br>
        您可以使用<a href="https://material.io/design/shape/about-shape.html#shape-customization-tool" target="_blank">形狀自定義工具</a>生成自己的形狀樣式。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/vt0HjV0huPkXAyz7vEsCH0BDOYV58t9yuX0BIKfK9vxPK8xxxR3KO0b11gPNxvGFhDPebh0A8M7Jb40Abiaez7VjsIayWOEYjQkMaS8=w1064-v0" alt="">
        <p>形狀類別允許單一風格（例如，切角）根據元件大小調整以符合各種應用尺寸。</p>
    </div>
</div>

---

## 更新

在我們的[更新頁面](https://material.io/whats-new)上查看最新的 Material 更新，並註冊 [Material newsletter](https://services.google.com/fb/forms/materialdesignnewsletter)，發佈資訊、公告和提醒將直接發送到您的信箱。

---

> 譯者：Joanne Chen
>
> 校稿：Joanne Chen
