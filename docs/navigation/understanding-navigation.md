---
title: 理解導覽
description: 使用者可以根據導覽瀏覽整個應用程式。
---

# 理解導覽

使用者可以根據導覽瀏覽整個應用程式。

![理解導覽](https://lh3.googleusercontent.com/q-aM-0-srEDQFzqrv5LMgWaEhIgCKWrnd9m_lgpNi4qub9fT0poAfmYkOgUHpaiXmJXFVvIvT10k2W6bL8R5FoVbgVEQLImLpiEV=w1064-v0)

---

## 導覽類型

導覽是在應用程式上透過移動去完成工作的行為。它可以透過多種方式呈現：專用的導覽元件、將導覽行為嵌入內容，以及平台功能。

### 導覽的方向

根據您應用程式的資訊架構，使用者可以延著三個導覽方向之一移動：

- **橫向導覽**指在同層次結構的螢幕中移動。一個應用的主要導覽元件應在其結構的頂層提供至每個目的地的導覽。
- **正向導覽**指在連續的層次結構、流程中的步驟或跨應用的移動。前向導覽將導覽行為嵌入各個容器（例如卡片、列表、圖片）、按鈕、鏈結或者透過使用搜尋嵌入．
- **反向導覽**指按照時間順序(一個應用程式內或者不同應用程式間)，或按照層次結構（在一個應用程式內）在螢幕上向後移動。平台公約決定了應用程式內反向導覽的確切行為。

![橫向導航](https://lh3.googleusercontent.com/BDoBXCsA0Dyg4pmTXNTyynDAxoM2Mw3Z10e26I8EBZWGeHpnONr_T01Q1hSKinNQQB65UhC4O4BqNEW6WjUNTIsQXecs6DVNyjpp=w1064-v0)

> 橫向導覽允許此音樂程式的資訊結構在頂層的螢幕中移動。

![正向導航](https://lh3.googleusercontent.com/f_iLouBO8Xw4yBd0Th1Xty2mNwnSpxVrKm1mBvEqtDafurYB8VB9sVomRtiuGAvzKdika-UztLYMBMja7LiOa7FIRymRfBvpfMs5tg=w1064-v0)

> 此音樂程式的使用者可以用以下兩種方式之一運用正向導覽來選擇歌曲：
> 1. 以分層導覽從音樂專輯到特定歌曲
> 2. 搜尋歌曲並直接導覽至其位置，繞過歌曲上層（Library and Album）直接傳遞

![反向導航](https://lh3.googleusercontent.com/bde2_9i_Fg41f2RhU0eztzRxtpinFu-pElJ0cAxasNc3c47ktCArCaevbgV1vGECXUisS7njshIZ5Ytxyb1zs96C4F3Zm5J_IschFg=w1064-v0)

在歌曲畫面上，用戶可以用以下兩種方式之一反向瀏覽：
1.在層次結構中向上延伸到歌曲的父層，在此範例中，專輯內含了歌曲
2.按時間順序，進入搜索結果畫面，但前提是用戶是從該畫面導航到該歌曲

---

## 橫向導航

橫向導航是指在相同層次結構的畫面之間移動。它使您能夠抵達不同的應用程序目標和功能，或在集合中的相關項目之間進行切換。

###### 目的地和層級

應用程序的主要導覽元件應在其結構頂層，提供訪問所有目的地的權限。具有兩個或多個頂層目標的應用程序可以通過側邊導航列，底部導航列或選項卡提供橫向導航。


|  元件   | 用於  |  #目的地數量   | 裝置  |
|  ----  | ----  |  ----  | ----  |
| 側邊導航列  | 頂層目的地 | 5+  | 行動裝置、平板電腦、桌上型電腦 |
| 底部導覽列  | 頂層目的地 | 3-5  | 行動裝置 |
| 選項卡  | 任何層次 | 2+  | 行動裝置、平板電腦、桌上型電腦 |

![](https://lh3.googleusercontent.com/tVfI-EewJiKQqYvmcV8xkY2AIh_GXLSDlh5nzGka0SooqiJey_MWjtdpETNpBj8GEIzbE4LlaDIRX90ibVJlchUKKQ8qanhrRgFE=w1064-v0)

> 側邊導航列適用於五個或更多的頂層目的地，並且可以跨設備大小使用，以提供一致的導航體驗。

![](https://lh3.googleusercontent.com/1L6Ioi9o8wSkYmYq70qD-AEJeM_NkPAIz9J7szyRa52VWEDwsPb1N4MMxI11tgzHK9S8EJr2ZZNWdFJ5ImVF_IW4pe85hlBSw4cR=w1064-v0)

> 底部導航欄在行動裝置上提供訪問 3-5 個頂層目的地。它們的位置、可見性和跨屏幕的持久性允許在目的地之間快速切換。

![](https://lh3.googleusercontent.com/_GcfJ34eRw4Lgmjtb2tULRcHLrCQrOvpRReim6SkW4eDYYYp60v9Fd69GcGQPH7IrBG5aV-jTCjxFNY1NjvSjpffTgu1DMNg2bxpdQ=w1064-v0)

> 選項卡可用於應用程序中的的任何層級，以跨屏幕大小顯示兩個或更多對等數據集。

![](https://lh3.googleusercontent.com/pjLgb-QObFNpi23kWllQDBkyDRdW3gTX-usHzDVreFRa5wU62_eGx_-tjG6A7GwIUqxXf4nb7DDMqCC7wA6IXmABkhIGJNl4nejU3O8=w1064-v0)

> Do
與頂層導航元件（如側邊導航列（1））配對時，選項卡（2）可以在應用程序的層次結構中啟用其他橫向導航。

[導覽集合](https://material.io/components/navigation-drawer)
[底部導覽列](https://material.io/components/bottom-navigation)
[標籤](https://material.io/components/tabs)

---

## 正向導航

### 正向導航的方法

正向導航是指完成任務的畫面之間的三種移動類型之一：

- 從父畫面(較高結構層級)到子畫面(較低層級)，應用程式的層次結構向下訪問更多更深的內容
- 依照執行流程或畫面的順序，例如結帳流程
- 直接從一個畫面到應用程式中的任何畫面，例如從主畫面到應用程式層次結構中更深層的畫面

### 實現正向導航

橫向導航使用專用的導航元件，而正向導航通常通過各種元件嵌入畫面內容中。

正向導覽可以用以下方法實現：

- 內容包含卡片、列表或圖像列表
- 前往另一個畫面的按鈕
- 在一個或多個畫面中進行應用內搜尋
- 內容內的連結

![](https://lh3.googleusercontent.com/kIq3JbMx_KxkC1FI_nu2v1Po11_QTYC0i1BHW42gkBPGlUOd6C1_zcyLQnMtAZvXGhRJRiDTRtg9-gBVUSQw9h9IBZSBsDnYAfLjFQ=w1064-v0)

主畫面（父層）上的即時貼提供了每個便簽內容的預覽，可以點按以導航至完整的便箋（子層）。

![](https://lh3.googleusercontent.com/n712mYj8eSDn3LISIQge6gQPMYU4ote6j4safrRfOjcSmYAJTKl_CwSt5H3Ea46MKfhcpvXlW6pBclER6LzfpRBE6LmYJoulc8k-NA=w1064-v0)

按鈕可以提供明確的反應，以使按鈕、標籤、位置和視覺重點突出。

![](https://lh3.googleusercontent.com/EZ76UfPEeQ6SZX8FMIqjsXbarAUwd9elgz6zR3NQKd21IDEQ_AveTbG_-2hI1qVIoj_Awup2AfmC50_v5UqTEsmAAl1yB62qNHc22Q=w1064-v0)

搜尋讓使用者可以快速訪問應用程序資訊結構中任何地方。

[搜尋](https://material.io/design/navigation/search.html)

## 反向導航

反向導航是指畫面之間的向後移動。它可以按時間順序在使用者最近的畫面歷史記錄中移動，或在應用程序的層次結構中向上移動。

###### 反序導航

反序導航是指以反向順序瀏覽使用者最近查看的畫面歷史記錄。它可以在一個應用程序內的多個畫面之間或多個應用程序之間移動使用者。例如，Web 瀏覽器上的「後退」按鈕就是一種反序導航。

此類型的導航通常由操作系統或平台提供。各個平台定義了它的行為方式以及使用者如何訪問該功能。

![](https://lh3.googleusercontent.com/d5_J7KkU6tKkGZQYR5R8c64D4YubDFatm-AIjDRcESp1L-jX2jBIxdgfKlH80q_R4VFi0It2o3H4WACow5ZuMWznIvA5m0Yl3K7CCg=w1064-v0)

> 使用「後退」按鈕，用戶可以按倒序的時間順序瀏覽最近查看的屏幕。
> 1. Android 導航欄中的「後退」按鈕（A）
> 2. Web 瀏覽器中的「後退」按鈕（B）

### 頂部導航

頂部導航允許使用者在單個應用程序的層次結構中向上導航一級，直到到達應用程序的主畫面或最高級的畫面。例如，頂部應用程序欄中的向上箭頭是向上反向導航的一種形式。

應在應用中為所有子畫面實現向上導航，並遵循平台指南。Android 和 Web 應用程序應使用 Material Up 操作，而 iOS 應用程序應使用 iOS 導航欄中的後退按鈕。

![](https://lh3.googleusercontent.com/pK8fp2NFvyA0sTLpI7U7rJaBcbV1QvfG38mL6ZOvh8WKSRRyqfOEoexSx9T_D871RFvaor5eMVS0gv-T_vypGcl25R6nEyDIclmJ=w1064-v0)

> 通過向上操作（A），可以在 Android 和 Web 應用程序上進行向上導航
> 在 iOS 上，可以通過 iOS 導航欄中的後退按鈕（B）進行向上導航

### 注意事項

應用程序的設計和功能應說明應用程序目標平台中的兩種反向導航。要在反向導航時優化用戶體驗：

- 使用戶返回其先前的畫面位置和狀態，例如其垂直滾動位置，以加快資訊呼叫和事件返回的速度。
- 如果畫面的先前狀態不再可用（例如，已清除表單中的資訊以保護隱私），則提供清楚的資訊。
- 清楚地指示子畫面與層次結構中位於其上方之畫面的關係。例如，如果用戶直接移動到您應用中的子畫面，則他們應該能夠識別可向上導航的父畫面。

> 譯者：Blake Hung
> 校稿：Joanne Chen