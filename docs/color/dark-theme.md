---
title: 深色主題
description: 深色主題是一種用於弱光環境且主要顯示深色外觀的介面設計。
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 深色主題

深色主題是一種用於弱光環境且主要顯示深色外觀的介面設計。

![image alt](https://i.imgur.com/mulmsxX.png)
亮色主題與深色主題

---

# 應用

深色主題設計用於替換預設（淺色）主題，在大多數介面上顯示深色外觀。

在弱光環境中使用深色主題時，將會按照環境光調節螢幕亮度，此主題可降低設備螢幕發出的亮度並保有顏色的最低對比度。減少眼睛視覺疲勞，改善視覺上的人體工學同時節省電池電量。

當配備 OLED 螢幕的設備啟用深色主題時，會完全關閉黑色像素，在節省電池電量上則有更好的表現。

**原則**

![image alt](https://i.imgur.com/mSw9Hew.png)
**變灰**
使用深灰色（而不是純黑色）來表示深度範圍更廣的環境中的高程和空間。

![image alt](https://i.imgur.com/tPFuD5F.png)
**強調色**
在深色主題的介面中，能使用的顏色有限，因此多數顏色都設計用於深色主題

![image alt](https://i.imgur.com/2fuwD0Q.png)
**節能**
在需要提高效率的產品（如帶有 OLED 螢幕設備）中，透過減少光像素的使用來保護電池壽命。

![image alt](https://i.imgur.com/RX6GYsF.png)
**增強無障礙的輔助能力**
通過無障礙的輔助顏色對比度標準，讓所有用戶適應深色主題標準（例如視力不佳的用戶）。

**屬性**

**Material Design 深色主題由以下屬性定義：**

**對比度：** 深色表面色和100％白色文字的對比度至少為 15.8：1
**深度：** 元件通過顯示較淺的背景顏色在較高的高度下來展現深度
**去飽和度：** 主色經過去飽和度處理，因此均通過至少 4.5：1 的《 Web內容可訪問性指南》（WCAG）的AA標準的所有等級。
**顏色限制：** 介面使用深色表面色及有限的強調色，（不飽和色和明亮色，飽和色）

[Understanding WCAG 2.0
](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

# 結構

深色主題使用者界面主要使用深色表面色和少量的色彩，使其擁有較低層級的光卻仍保持高標準的可用性。

![image alt](https://i.imgur.com/lHx5Zgt.png)


1. 底色（0dp層級表面）
2. 表面（具有1dp層級表面）
3. 主要
4. 次要
5. 於底色上的文字
6. 於表面上的文字
7. 於表面上的主色
8. 於表面上次要色

# 行為

**可使用以下切換開關，開啟或關閉深色主題：**

· 顯著 - 用一個圖標打開或關閉深色主題
· 隱藏 - 在功能表或設定中放置一個切換開關

![image alt](https://i.imgur.com/Chn5V3R.png)
頂部導覽列的深色主題切換開關

![image alt](https://i.imgur.com/6Dkf6Ck.png)
下拉式選單內的深色主題切換開關

![image alt](https://i.imgur.com/ShMIZCl.png)
設定中的深色主題切換開關

# 屬性

深色主題使用深灰而不是黑色作為元件的主色彩，深灰色的表面可以更容易地看到陰影，並表現更廣泛的色彩、高度和深度。

![image alt](https://i.imgur.com/CeqPgUy.png)
深色主題推薦的表面顏色為＃121212。


**高度**

在深色主題中的元件高度和陰影與預設主題中的元件一致。但在深色主題中，不同高度的表面則亮度不同。

**高度越高，界面越亮**

元件高度越高（越接近光源），表面越亮。可透過半透明白色覆蓋表面來表現物件的層次感。

<iframe width="100%" height="350px" src="https://kstatic.googleusercontent.com/files/148f5ecca9a798a0d8815a314d14ee0ce9e4a985d587e649a2b804fe6b1ca5aee1e87ec0a33d3e93fde07cac1e3ace1f870d49212a51ae12d281309d44910fb1" frameborder ="0"></iframe>.

隨著元件高度的升高，顏色變得更淺。

在元件表面上放置覆蓋半透明的顏色，讓表面色更亮。

![image alt](https://i.imgur.com/TbNF64F.png)

透過使用半透明的白色覆蓋層，表面變得更輕。
1. 表面
2. 疊加

表面上的疊加層可區分組件之間的高度，並讓陰影更容易顯示。
疊加層亦可增加表面及其陰影之間的對比度，使每個表面的邊緣更加明顯。

<iframe width="100%" height="350px" src="https://kstatic.googleusercontent.com/files/9976752535996547e4486a11a5e6b17cb0dfc27541bab905752c1c9c725bc3d0d3ca91f6072752b8aff8b96f60aa5e5c4b0af474ac12c45912dce8373c6803cf" frameborder ="0"></iframe>


預設主題使用陰影表示高度，而深色主題也通過調整表面色來表示高度。

這些界面覆蓋值設計用於提高最大的易讀性，同時確保辨別不同高度的表面。

![image alt](https://i.imgur.com/Lp4w3mX.png)

| 高度等級 | 白色疊加層透明度 |
| -------| -------- |
| 00dp   | 0%     |
| 01dp   | 5%     |
| 02dp   | 7%     |
| 03dp   | 8%     |
| 04dp   | 9%     |
| 06dp   | 11%    |
| 08dp   | 12%    |
| 12dp   | 14%    |
| 16dp   | 15%    |
| 24dp   | 16%    |
高度疊加層透明度的範圍為0％(最低級別)到16％(最高級別)。

**疊加層可清楚區分元間之間的高度差異。**

![Image alt](https://i.imgur.com/GeKeMy6.png)

A. 1dp 高度，5％ 的覆蓋層

B. 6dp 的浮動交互按鈕，沒有使用覆蓋層的輔助色

C. 高度為 8dp 的底部主導覽欄，覆蓋層為 12％

半透明覆蓋層不適用於主色調或輔助色的元件或界面來表示高度，在深色主題中，陰影顏色需要夠深以準確地表示投射高度。

![Image alt](https://i.imgur.com/jPg2Qq9.png)
<font color="#f00">禁止</font>
不要在使用主色或次要色的容器元件上使用高度疊加層。

![Image alt](https://i.imgur.com/4sAwsQ4.png)
<font color="#f00">禁止</font>
不要使用發光色代替深色陰影來顯示高度，因為它們不能像陰影一樣準確地表示高度。

[高度相關參考](https://material.io/design/environment/elevation.html)

# 無障礙的輔助能力與對比

深色主題表面必須足夠暗才能顯示白色文字內容，應於文本和背景之間使用至少15.8：1的對比度。可確保文字內容應用於最高（最亮）高度的表面時，通過WCAG的4.5：1的AA標準。

![Image alt](https://i.imgur.com/J3Bgl58.png)

創建品牌深色主題，請以較低的不透明度將主品牌色覆蓋在推薦的深色主題介面色上如：＃121212。

而色彩＃1F1B24 是由深色主題表面色＃121212 和 8％疊加層組合的結果。

如果背景色不夠深，將無法在白色文字和背景間達到至少 15.8：1 的對比度，處於最高（最亮）表面色上的文字內容將無法通過 4.5：1 的標準。

![Image alt](https://i.imgur.com/DM3z59m.png)

<font color="#f9a825">提醒</font>
請確保表面色夠深，以使文字內容在最高層級（24dp）上至少達到4.5：1（AA）的對比度。

需要高效使用電池的 UI 可以使用純黑色。
在這些情況下，帶有 OLED 螢幕的部分裝置可以關閉任何顯示黑色的像素，以節省電池電量。

<iframe width="100%" height="350px" src="https://kstatic.googleusercontent.com/files/032ffa9fd8fd1b8c88837183b5816684f0a91588948edda0f744759d3ad2c47ba739ec5fcd0303aa1939ee4e436aaa1f5b8a467070a0f86f378395879959db69" frameborder ="0"></iframe>

<font color="#f9a825">提醒</font>

在 OLED 螢幕上，開啟或關閉像素可能都會導致滾動螢幕時出現延遲，使像素模糊。

[無障礙相關參考](https://material.io/design/usability/accessibility.html)

# 介面應用

**主題色**

所有深色主題都應顯示足夠的高對比度，當應用於所有高度的表面色，通過 AA 標準的文字內容的對比度應至少為 4.5：1。

**避免使用飽和色彩利於無障礙使用**

深色主題應避免使用飽和色彩，因為它們無法通過 WCAG 針對深色介面的文字內容至少達到 4.5：1 的無障礙標準。
且飽和色彩在深表面色上將產生光學振動，進而引起眼睛疲勞。應使用不飽和色彩取代飽和色彩。

![Image alt](https://i.imgur.com/GtBLV6K.png)
色板中飽和度較低的色彩可提高清晰度並減少視覺振動。

![Image alt](https://i.imgur.com/VXcnIBZ.png)
<font color="#f00">禁止</font>
避免使用在深色表面色下視覺振動的飽和色。

[易讀性參考](https://material.io/design/color/text-legibility.html#legibility)

**主色**

主色是在應用程式的螢幕和元件上使用頻率最高的色彩。基準「 Material Design」深色主題使用了主色的 200 色調（在所有高度表面色上，均通過了 WCAG 的對於普通文本，至少為 4.5：1 的 AA 標準，）。

![Image alt](https://i.imgur.com/jZHEMWG.png)
深色主題中的主色板

1. 主色指示器
2. 色調變化

**主色變化**
在較淺表面色的元件可以顯示深色主題的主色變化
![Image alt](https://i.imgur.com/igXqtwB.png)
此深色主題 UI 使用主色（紫色200）和主色變化（紫色700）

[色彩系統參考](https://material.io/design/color/the-color-system.html)


**次要色**

次要色可用於強調選中的UI部分。在深色主題中，可以降低次要色的飽和度以達到 4.5：1 的對比度。

![Image alt](https://i.imgur.com/FTdN9W2.png)
深色主題中的次要色板

1. 次要色指示器
2. 色調變化

![Image alt](https://i.imgur.com/oLNFfWD.png)
此 UI 使用主色與次要色變化。

**強調色**

在深色主題中，深色表面色大範圍的用於介面。強調色通常是淺色（去飽和的粉色）或明亮色（飽和且鮮艷的色彩），以突出強調的元素。

應該謹慎使用來強調關鍵元素，例如文字內容或按鈕。

**尋找強調色**

[色板生成器](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)可用於創建（或查看）色彩主題。用於生成色調調色板，色調是從原色與輔助色創建的而成，範圍從淺色到深色，可以選擇不同的變化用於您的深色主題。

![Image alt](https://i.imgur.com/8zple19.png)

為了在深色主題中提供更大的靈活性與可用性，建議在主題中使用較淺的色調範圍如：200-50，不要使用默認的色彩主題，飽和色調範圍如 900-500。

1. 預設主題首要色指示器
2. 深色主題首要色指示器

![Image alt](https://i.imgur.com/ISPJqE7.png)
<font color="#4caf50">正確使用</font>
較淺的色調如：200至50範圍內的色彩，在深色主題表面色所有高度上均具有較好的可讀性。

![Image alt](https://i.imgur.com/PalAJcf.png)
<font color="#f00">禁止</font>
避免在深色主題上使用飽和色，因為它們在深色表面色上將產生視覺振動。

![Image alt](https://i.imgur.com/rRxvV1r.png)
預設主題在頂部導覽列的表面色上使用色彩。

![Image alt](https://i.imgur.com/b47KgRa.png)
深色主題中，頂部導覽列的表面色使用深色而不是原色或第二色。

**品牌色**

為了保留品牌標識，可以在深色主題中完全飽和使用品牌顏色，儘管應將應用程序限制為一個或兩個品牌元素，例如商標或品牌按鈕。 通過少量使用品牌顏色，能使元件在層次結構中保持突出。

在深色主題介面的其餘部分中仍應使用去飽和色。

![Image alt](https://i.imgur.com/2eLWRQ4.png)

完全飽和的商標顏色應用於浮動按鈕（2），而飽和的深色主題原色應用於文本（1）。

1. 深色主題原色
2. 品牌顏色

[Owl 品牌相關參考](https://material.io/design/material-studies/owl.html)

**標準深色主題色板**

Material Design 提供用於深色主題的標準色版調色板，介面上應使用深色主題顏色，包括：

* 顏色（原色，副色和原色變體）
* 表面色（背景和元件）
* 狀態（例如錯誤狀態）
* 內容（字體和圖標）

![Image alt](https://i.imgur.com/sRhOTAM.png)
Material Design 標準深色主題色版

![Image alt](https://i.imgur.com/Zprl59G.png)
1. Material Design 標準預設主題色
2. Material Design 標準深色主題色

**錯誤顏色**

錯誤顏色用於顯示錯誤狀態。 Material Design 標準深色主題錯誤顏色為＃CF6679。

![Image alt](https://i.imgur.com/UoHSYBT.png)
透過預設主題錯誤色（＃B00020）用40％的白色覆蓋使其變亮，創建深色主題錯誤色以通過 AA 級對比度標準，

**字體排版和圖標顏色**

「相近」色彩主要用於文字內容，圖片和線條，這些線條有時被位置在使用首要，次要，表面，背景或錯誤色的關鍵表面色的「鄰近」色。

預設情況下，「相近」色彩在深色主題是白色和黑色。

![Image alt](https://i.imgur.com/yuNEyLd.png)
介面顯示用於深色主題文字內容與圖標的標準顏色。

**在深色背景上的淺色文字**
當淺色文字內容出現在深色背景上（此處顯示為黑色白色）時，應使用以下不透明度級別：

高強調文字的不透明度為87％
中強調文字與提示文字的不透明度為60％
禁用文字的不透明度為38％

![Image alt](https://i.imgur.com/YSjU1Gz.png)
高强调，中强调和禁用文本

# 自定義應用
在部分案例中，可通過使用 Material Design 的深色主題精選元素帶來優勢。

**大範圍介面**
大型元件如：導覽列或背景色，可套用深色主題中較深的表面色。
![Image alt](https://i.imgur.com/uL6Y9Qz.png)
<font color="#4caf50">正確使用</font>
為較小的元件保留鮮豔的表面色。

![Image alt](https://i.imgur.com/lQGSsN6.png)
<font color="#f00">禁止</font>
請勿在較大的元件上使用明亮的表面色，因為它們會發出過多的亮度。

![Image alt](https://i.imgur.com/PL7GCNK.png)
<font color="#f9a825">提醒</font>
如果主要深色而不是主題推薦的表面色（＃121212），請確保其通過15.8：1 的對比度。

![Image alt](https://i.imgur.com/0ZAWs3F.png)
<font color="#f00">禁止</font>
請避免將深色主題原色用作背景以淺色覆蓋大部分螢幕。

**預設與深色主題的組合**
當深色主題中需要淺色表面色時，可在選定元件的表面上使用淺色以保留層次結構。

例如，這間點心吧在深色主題可以選用顯示淺色表面以幫助訊息脫穎而出。亦可應用預設主題的“表面色”和“用於表面色上”的顏色組合。

![Image alt](https://i.imgur.com/qyeEBXQ.png)
點心吧使用深色主題的淺色表面色來使其突出。
1. 用於表面色上：#FFFFFF
2. 表面色：＃121212
3. 主色變化：＃3700B3

[應用程式導覽列相關參考](https://material.io/components/app-bars-bottom)
[背景相關參考](https://material.io/components/backdrop)
[點心吧相關參考](https://material.io/components/snackbars)

# 狀態

狀態皆以透過使用覆蓋的視覺方式表現元件的互動元素。在深色主題中，各種狀態應使用與預設主題相同的覆蓋值，且可對其進行調整以通過 AA 級對比度標準。

有兩種類型的容器可以共同擁有狀態的覆蓋值如：使用“表面色“和“主色”的容器。

**表面容器**

稱為“表面色“的容器用與其圖標或文字內容的顏色相容的覆蓋層（如果圖標不存在）。

![Image alt](https://i.imgur.com/z0j5guB.png)
容器背景使用“表面色”的五種狀態：啟用，懸浮，聚焦，按下與拖動。


| 元件 | 顏色 |
| -------- | -------- | -------- |
| 容器| 表面色 |
| 内容| 相近色 | 
| 疊加層| 相近於內容色 | 

![Image alt](https://i.imgur.com/e863zHQ.png)
容器內容使用“主色”，背景為“表面色”的五種狀態：啟用，懸浮，聚焦，按下與拖動。

| 元件 | 顏色 |
| -------- | -------- | -------- |
| 容器| 表面色 |
| 内容| 相近色 | 
| 疊加層| 相近於內容色 | 

**主容器**
使用“主色“作為表面色的容器，其狀態覆蓋層為白色。
![Image alt](https://i.imgur.com/m0VPIwU.png)
容器使用“半透明主色”，使用覆蓋層表示五種狀態：啟用，懸浮，聚焦，按下與拖動。

| 元件 | 顏色 |
| -------- | -------- | -------- |
| 容器| 主色 24%|
| 内容| 主色 | 
| 疊加層| 白色 | 

![Image alt](https://i.imgur.com/m0843CM.png)
容器使用”主色“使用覆蓋層表示五種狀態：啟用，懸浮，聚焦，按下與拖動。

| 元件 | 顏色 |
| -------- | -------- | -------- |
| 容器| 主色 |
| 内容| 相近主色 | 
| 疊加層| 白色 | 


**禁用狀態**

所有禁用的元件容器外框與填充使用 12％ 白色，標籤或圖標等內容使用 38％ 白色。

![Image alt](https://i.imgur.com/141o6zA.png)

[狀態相關參考](https://material.io/design/interaction/states.html)

# 相關資源

**設計文件**

設計文件包括深色主題佈局的元素，例如狀態欄，導覽欄，底部工具欄，卡片，下拉菜單，側面導覽，對話框，浮動操作按鈕與其他元件。

[Figma 檔案下載](https://storage.googleapis.com/mio-assets/resources/Material%20Dark%20Theme%20Design%20Kit.fig)

[Sketch 檔案下載](https://storage.googleapis.com/material-design/downloads/material-design-stickersheet.sketch)

適用於 Apache 2.0。下載即表示您同意 Google 服務條款。 Google 隱私權政策描述了此服務如何處理數據。

# 實作

**各平台支援的深色主題實現如下所示。**



| 平台    | 狀態 |
| ------- | ---- |
| Android | [可用](https://material.io/develop/android/theming/dark/)|
| iOS | 計畫中 |
| Web | 計畫中 |
| Flutter | 計畫中 |


**接下來**

[字體系統](https://material.io/design/typography/the-type-system.html)
[色彩系統](https://material.io/design/color/the-color-system.html)
[階層系統](https://material.io/design/environment/elevation.html)


