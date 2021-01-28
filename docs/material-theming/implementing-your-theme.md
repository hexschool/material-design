# 執行你的主題
以下技巧可使用於色彩、字體排版、形狀的課製及應用。圖示方面，則有五組特有的項目供選擇。

## 色彩 (Color)
此色彩系統包含12種類別，可應用於元件、文字、圖標與表面上。

![色彩](https://i.imgur.com/OsMuhWQ.png)

<font size=2px>1. Primary (主要顏色)
2. Primary Variant (主要顏色變體)
3. Secondary (次要顏色)
4. Secondary Variant (次要顏色變體)
5. Background (背景顏色)
6. Surface (表面顏色)
7. Error (錯誤顏色)
8. On Primary (置於主要顏色上)
9. On Secondary (置於次要顏色上)
10. On Background (置於背景顏色上)
11. On Surface (置於表面顏色上)
12. On Error (置於錯誤顏色上)</font>

### 顏色主題化 (Theming with color)
要將Material Theming與顏色一同使用，請先選擇適合的使用者介面顏色。

可以下列方法挑選顏色：
* 使用[**Color section中的內嵌工具**](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)生成顏色
* 從[**Material Palettes**](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)中選取協調的配色方案

---

### 主要顏色與次要顏色 (Primary and secondary colors)
主要顏色(Primary colors)與次要顏色(Secondary colors)被少量運用在使用者介面的關鍵部份中。二者通常是依據其代表品牌的特性來選擇的。

主要顏色會用於繪製元件與元素，例如應用欄(App Bar)跟按鈕(Button)。次要顏色則大多使用在元件的強調，像是懸浮按鈕(FABS)或選擇控件(Selection Controls)。

而顏色的變體，能被用於完善主要、次要顏色或提供更多選擇。

![主要顏色與次要顏色](https://i.imgur.com/cX0X1kr.png)

---

### 表面顏色、背景顏色與錯誤顏色 (Surface, background, and error colors)
表面顏色、背景顏色與錯誤顏色通常不代表品牌。

一般來說，在使用者介面中置於以下區域：
* 表面顏色(Surface color) 用來繪製卡片(card)、列表(sheet)與選單(menu)。
* 背景顏色(Background color)出現在可滾動的頁面內容後方。
* 錯誤顏色(Error color)是用來指出元件中的錯誤，像是內容有誤的文字框。

![表面顏色、背景顏色與錯誤顏色](https://i.imgur.com/xCLUrDJ.png)

#### 置於...顏色上 ("On" colors)
這些元素是使用您調色板中特定分類的顏色，例如主要顏色。 
無論介面中置於表面之上的其他元素(文字或圖示)有無使用這些顏色，這些元素的顏色設計都需明確，使其在底色上清楚明了。

此類別被稱為 “On” colors，顧名思義就是這些顏色元素有些時候是放在(使用主要顏色、次要顏色、表面顏色、背景顏色或錯誤顏色的)重點外觀之上。此類別的標籤是在原始類別(例如Primary color)的名稱前加上”on“來命名。

“On” colors主要應用於文字、圖示及筆畫，部分也會應用在外觀上。

#### "On" colors 命名 (“On” color naming)

| 類別 | 置於...類別之上|
| -------- | ---------- |
| Primary  | On Primary |
| Secondary  | On Secondary |
| Surface  | On Surface |
| Background  | On Background |
| Error | On Error |

這些前綴加有”On”的分類顏色，會應用在使用“主要顏色、次要顏色、表面顏色、背景顏色或錯誤顏色”的區域裡的文字和圖標(或表面)上。

!["On" colors 命名](https://i.imgur.com/1OxuT0v.png)

---

## 文字排版 (Typography)
此文字排版系統包含13種類別，字級便是由這些類別組成。
此字級規範在螢幕中(範圍涵蓋文本到按鈕)呈現的各種字體與尺寸都相當明顯。這些文字會用於整個使用者介面，例如元件與表面上。

文字屬性可由數值控制，使用者可自定義該文字系列、字型、大小寫、尺寸及字寬。

![文字排版](https://i.imgur.com/33dJ9Lc.png)

### 主題化方式 (Theming methods)

#### 客製及應用文字排版 (Customize and apply typography)
可選擇下列方式：
* 使用[type scale generator](https://material.io/design/typography/the-type-system.html#type-scale)選擇標題與內文字體，確認該字體自動調整大小跟可讀性優化無誤，再將程式碼複製至使用平台上。
* 從[Google Fonts](https://fonts.google.com/)選擇字體套用到產品上。

---

### 標題 (Headings)
標題1-6是字級規範中最大的尺寸，專門使用在重要且具影響力的簡短文本。亦會套用於數字上。

![標題](https://i.imgur.com/isisbFv.png)

副標題小於標題，通常用於中等重要、較短的文本。

![副標題](https://i.imgur.com/YN4c7hD.png)

---

### 內文與更小的文本 (Body and smaller text)
內文1、2一般用於長篇書寫。需對小文本尺寸進行優化。

![內文與更小的文本](https://i.imgur.com/VxwcFM4.png)

說明與上標是規範中最小的字級，少量運用在圖像註解或作為標題的簡介。

![說明與上標](https://i.imgur.com/M2nd5l0.png)

按鈕文本通常用在文字按鈕、線框按鈕與實心按鈕中。

![按鈕文本](https://i.imgur.com/phqVlJv.png)

---

## 形狀 (Shape)
因應不同品牌或應用程式，此形狀系統目前包含二種用於元件邊角的形狀：圓弧與切面。

* 圓弧：邊角為弧形
* 切面：邊角為斜面

這些形狀可運用在元件的邊角，創造出對稱(所有邊角形狀相同)或不對稱(部分邊角不同形狀)的效果。邊角大小形狀皆可自訂。

![圓角](https://i.imgur.com/5Prt9C1.png)

<font size=2px>1. 圓弧 (0dp), 2. 圓弧 (4dp), 3. 圓弧 (16dp), 4. 圓弧 (24dp)
放大至500%時，圖1-圖3：形狀高度是36dp。圖4：形狀高度是64dp。</font>

![倒角](https://i.imgur.com/9qaufWT.png)

<font size=2px>1. 切面 (0dp), 2. 切面 (2dp), 3. 切面 (8dp), 4. 切面 (12dp)
放大至500%時，圖1-圖3：形狀高度是36dp。圖4：形狀高度是64dp。</font>

### 形狀主題化(Theming with shape)
形狀在小、中、大按鈕的使用，可參照[shape customization tool](https://material.io/design/shape/about-shape.html#shape-customization-tool).

---

### 形狀類別與覆蓋 (Shape categories and overrides)
元件的分類取決於尺寸。類別的數值(而非特定元件)一旦調整，將會套用至該類別中的所有元件。

可針對類別中的單一特定元件更改其形狀的數值，不受該類別的設定數值影響。

---

### 圓弧形 (Rounded shapes)
在Material theme中，卡片、目錄、訊息提示欄、工具提示框、視窗、按鈕等元件，都是以4dp的圓角為基準。

![圓弧形狀](https://i.imgur.com/BDYIKhE.png)

<font size=2px>1. 放大至2000%
2. 放大至400%
</font>

那些使用50%基線半徑的圓形元件，例如：藥丸形狀的紙片(chips)，或圓形的懸浮按鈕(FABs)。

![圓形邊角元件，chips](https://i.imgur.com/SHH89Bg.png)

<font size=2px>1. 放大至2000%
2. 放大至400%
</font>

![圓形邊角元件，FABs](https://i.imgur.com/r9r6CS6.png)

<font size=2px>1. 放大至2000%
2. 放大至400%
</font>

---

### 正方形 (Square shapes)
在Material theme中，像是全屏底部列表(full-screen bottom sheets)或90度的邊角，這些元件皆以0dp的圓角為基準。

0dp的切面形邊角與圓弧形邊角，跟正方形邊角相同，三者間可切換。

![正方形邊角元件](https://i.imgur.com/YP9tUbm.png)

<font size=2px>1. 放大至2000%
2. 放大至400%
</font>

---

### 切面形 (Cut shapes)
元件邊角可直接被固定45度的形狀切割。這些邊角可以是不同長度（沿著形狀外圍，從0dp的圓角開始）。

![切面形邊角元件1](https://i.imgur.com/VOqJnNK.png)

<font size=2px>1. 放大至2000%
2. 放大至400%
</font>

舉例來說，外觀較大的元件(如卡片)會使用較大的切面，而按鈕就會使用較小的切面。
可依照品牌、元件尺寸或易讀區的需求，來決定每個元件最適合的邊角切面尺寸。

![切面形邊角元件2](https://i.imgur.com/3RN0x7t.png)

<font size=2px>1. 放大至2000%，大切面
2. 放大至2000%，小切面</font>

---

## 圖標 (Icons)

![圖標](https://i.imgur.com/kwjVNHA.png)

<font size=2px>1. 實心
2. 尖角
3. 圓弧
4. 線框
5. 雙色
</font>

Material Design除了原有的實心圖標，還有4種圖標集可以使用。單一應用程式中應使用單一圖標集，以保持視覺的連貫性。避免在同一個使用者介面中混搭不同的圖標集。

### 圖標主題化 (Theming with icons)

自下列5個主題中擇一圖標集：
1. 實心
2. 尖角
3. 圓弧
4. 線框
5. 雙色

---

### 圖標風格 (Icon types)

#### 實心圖標 (Filled icons)

實心圖標是Material最原始的圖標。

![實心圖標](https://i.imgur.com/dszByFT.png)

<font size=2px>1. 網格結構
2. 實心圖標範例
</font>

#### 尖角圖標 (Sharp icons)
尖角圖標是去除圓角的實心圖標。

![尖角圖標](https://i.imgur.com/GrciqLx.png)

<font size=2px>1. 網格結構
2. 尖角圖標範例
</font>

#### 圓弧圖標 (Rounded icons)
圓弧圖標是外邊角外側有2dp圓弧半徑的實心圖標。在筆畫、內邊角內側與圖標畫面區域，圓弧半徑需再加上1dp。

![圓弧圖標](https://i.imgur.com/smWNUQT.png)

<font size=2px>1. 網格結構
2. 圓弧圖標範例
</font>

#### 線框圖標 (Outlined icons)
線框圖標是除去圖標大部分的實心區，由2dp的線條代替，用以減少視覺重量。此種圖標亦可用來表示狀態，例如與實心圖標搭配呈現選取/非選取狀態。

![線框圖標](https://i.imgur.com/q7fWj3Z.png)

<font size=2px>1. 網格結構
2. 線框圖標範例
</font>

#### 雙色圖標 (Two-tone icons)

雙色圖標在筆畫與實心區域上，使用不同透明度的同一顏色。

![雙色圖標](https://i.imgur.com/0uiD4Us.png)
<font size=2px>1. 網格結構
2. 雙色圖標範例
</font>

