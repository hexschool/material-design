# 輔助功能

設計中的輔助功能中允許各式各樣的使用者導航、理解與使用您的 UI。

---


## 認識輔助功能

增強產品的輔助性可以強化所有使用者的實用性，包含弱視、失明、聽力障礙、認知障礙、運動障礙或情境障礙（例如手臂骨折）的使用者。

### 原則

![image alt](https://lh3.googleusercontent.com/OzM9A1jPFKTBQgebqf1tIphThe8l6woYVqnlwapuiuSszmHiz4El0eXGhFVkkN-1FocI8dqzi6acmMbXTKMfQckVIePwHQ7lkb447Q=w1064-v0)

#### 明確

通過設計清晰的排版以及不同的號召性用語來幫助使用者進行導航。

#### 強大的

設計您的 app 以適應各種使用者。

#### 具體的

支持特定於平台的輔助技術，就像您支持觸碰、鍵盤和滑鼠的輸入法一樣。

#### 行動嚮導

本部分主要適用於移動 UI 設計。有關設計和開發更多可訪問產品的更多訊息，請前往 [Google 無障礙中心](https://www.google.com/accessibility/)。

#### 免責聲明

這些資訊僅供參考，並不構成法律建議。任何特定問題請諮詢您的律師。

---

## 輔助技術

輔助技術透過螢幕閱讀器、放大工具和助聽器等設備，幫助增加、維持或改善殘疾人的功能。

### 螢幕閱讀器

**螢幕閱讀器**是一種使用盲文顯示器或大聲朗讀文字的應用程序，例如 Google 的螢幕閱讀器 [TalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=en&ref_topic=3529932)。視力障礙、閱讀障礙或暫時無法閱讀的人可以使用螢幕閱讀器。其將對可見內容進行口頭表達並大聲閱讀。程序可以識別段落按按鈕文字，以及隱藏內容，例如用於圖標和標題的替代文字。可以標記內容以優化使用螢幕閱讀器或使用 UI 純文字版本的使用者體驗。

#### 使用螢幕閱讀器導航

螢幕閱讀器為使用者提供了多種瀏覽螢幕的方法，包括：

- **觸碰瀏覽：** 觸碰介面螢幕瀏覽器准許使用者將手指鋼在螢幕上方，以聽懂下方的內容。這位使用者提供了整個介面的快速感。或著，使用者可以從肌肉記憶中快速移動至 UI 元素。在 TalkBack 中，此功能稱為「觸碰瀏覽」。要選擇一個項目，使用者需雙擊。
- **線性導航：** 使用者可以通過在螢幕上向後或向前滑動來移動焦點，從上到下以線性方式閱讀頁面。這使使用者可以磨練某些元素。在 TalkBack 中，這稱為線性導航。

使用者可以在「觸碰瀏覽」與「線性導航」兩種模式間切換。

#### 按地標導航

當這些地標使用適當的語意標記時，一些輔助技術准許使用者在頁面標誌（例如標題）之間導航。

---

#### 方向控制器

硬體或軟體方向控制器（例如 D-pad、軌跡球或鍵盤）准許使用者以線性方式從一個選擇跳到另一個選擇。

---

## 層次結構

當能輕鬆導航時，使用者可以了解他們在您應用中的位置以及重要的資訊。為了強調哪些是重要資訊，顏色、形狀、文字和操作動畫等多種視覺和文字暗示可以增加清晰度。

### 回饋類型

視覺回饋（例如：標籤、顏色和圖標）與觸碰回饋向使用者顯示了 UI 中可用的內容。

### 導航

導航可以以最少的步驟獲得清晰的任務線引導，並且易於定位控制物件與清晰標籤。焦點控制或控制鍵盤以及讀取焦點的功能可用於經常使用的任務線。

### 層次結構

添加的每個按鈕、圖片以及文字都會增加 UI 的複雜性。您可以使用以下方法簡化對 UI 的理解：

- 清晰可見的元素
- 足夠的對比度與大小
- 清晰的重要程度階級
- 一目了然的關鍵訊息

要傳達項目的相對重要性，請執行以下操作：

- 將重要操作放在螢幕頂部或底部
- 將相似層次結構的項目彼此相鄰放置

![image alt](https://lh3.googleusercontent.com/_qfp3TXnbn8PnTWYpEqLHNeegOx99NsslB_7D2Fr0oH489cYi3KbbmPzNmjtZiZsOAT8zcsq7GvXrhvqOE6Vgk_mpNWsfmSXGn7kig=w1064-v0)

> DO 
> 通過將重要操作放在螢幕頂部，他們在層次結構中將變得更加重要。

![image alt](https://lh3.googleusercontent.com/aO_AV2ToqHngrB1fqayHt7MZZMVbNqH-0jXC71y0fE9OYa05sI7FSoz8u3hKcefw7zv7qweHT1KTXJsjmOIXgWq29bT_zBPPcsfg=w1064-v0)

> 警告
> 當重要動作嵌入到其他內容中時，可能導致使用者不清楚頁面上最重要的元素是什麼。

### 視覺層次

為了使螢幕閱讀器能夠案預期的順序讀出內容，設計者與開發者的協作將會相當重要－既要以正確的順序寫出 HTML，又要了解螢幕閱讀器將如何設計。

當 CSS 確定頁面的排版與外觀時，螢幕閱讀器依賴任何平台（行動或網頁）上 HTML 從上至下的結構。此結構為螢幕閱讀器創建了一個地圖，供其在閱讀內容時遵循。

![image alt](https://lh3.googleusercontent.com/uu_kZoeVIDCVjPc7IzoLXdmwzZbV0OdR9GrVRbSwMIuRV_QcQOr1kjpHXf41rUjgbIXcdK0_TgdzFNCUFVJXZQd1AyZPQr_KGw_X9A=w1064-v0)

> Do
> HTML 通過左上（步驟 1）到右上（步驟 2）到右上（步驟 3），左下（步驟 4）到右下（）讀取內容來反映視覺層次。

```
<section class="container">
   <img class="step-1" />
   <img class="step-2" />
   <img class="step-3" />
   <img class="step-4" />
</section>
```

提供對螢幕閱讀器友好層次結構以顯示圖像的範例程式碼

![image alt](https://lh3.googleusercontent.com/8SPFS1EWuZtS9o3DHTaek7uuIlf-N7WJvY_lwNVZqPy7qTuZkkZMCuATNTs-fQ310CpolFGeF0CpaYaPEzzZGRFGhfiE2RkK1gPgUQ=w1064-v0)

>警告
>雖然某些使用者可能會依照螢幕的視覺順序從左上角（步驟 1）到右上角（步驟 2），左下角（步驟 3）到右下角（步驟 4）來查看圖片，但預設狀態下，螢幕閱讀器會依照 HTML 從上至下的順序，對內容進行口頭表達（步驟 1、步驟 3、步驟 2、步驟 4）。

```
<section class="container">
  <div class="col-left">
    <img class="step-1" />
    <img class="step-3" />
  </div>
  <div class="col-right">
    <img class="step-2" />
    <img class="step-4" />
  </div>
</section>
```

用以顯示圖片的範例程式碼，其中螢幕閱讀器在讀取右列的項目前會先讀取左邊的項目。

---

## 焦點順序

遵循視覺佈局順序的焦點通常由螢幕的頂部到底部。他可以從最重要的項目到最不重要的項目。

為了幫助您確定焦點和動作，請考慮：

- 元素獲得焦點的順序
- 元素分組的方式
- 當焦點中的元素消失時焦點移到哪裡

焦點可以通過視覺指示器和輔助功能文字的組合來表示。

![image alt](https://lh3.googleusercontent.com/OiPvO34KulSlvXkriUO2HvZEjq949LoAqdUIBIh5FX3KYY_7w2T1nEkspHfwgHu0KSgTC8vgkgAnpgB3F2hXkhU_cqCl4GLh1aJ67w=w1064-v0)

> 黑色圓圈表示螢幕元素接收焦點的順序。

---

### 群組

可以將項目分組在有含義的標題下，這些群組在空間上組織內容。

### 轉場

在螢幕和任務之間進行焦點轉場可以改善連續性的使用者體驗。如果任務被中斷後又恢復，則可以幫助將焦點返回到先前集中的元素。

---

## 色彩與對比度

色彩與對比度可用於幫助使用者查看及解釋您應用的內容、與正確的元素進行互動
以及了解操作。

### 更容易接近的色彩

顏色可以幫助傳達情緒、語氣和重要訊息。可以選擇主色、次要色和強調色來支持可用性。元素之間有足夠的色彩對比可以幫助弱勢使用者查看與使用您的應用。

---

### 對比度

色彩對比度對於使用者區分文字和非文字元素來講相當重要。較高的對比度有助於查看圖片。對於某些使用者來說，在明亮或微弱的光線下（例如，非常晴朗的白天或晚上），低對比度的圖片可能難以區分。

對比度表示一種顏色與另一種顏色的區別，通常寫為 1:1 或 21:1。比例中兩個數字之間的差異越大，顏色間的相對亮度差異也越大。根據 World Wide Web Consortium (W3C)，基於顏色的**亮度**（發出光的強度），顏色與其背景之間的對比度範圍為 1-21。

[W3C](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) 建議為正文內容和圖片文字使用以下對比度：

| 文字類型 | 色彩對比度| 
| -------- | -------- | 
| **大尺寸文字（14 pt 粗體／18 pt 常規字體及以上）和圖形** | 與背景對比度 3:1 | 
| 小尺寸文字 | 與背景對比度 4.5:1 |

![image alt](https://lh3.googleusercontent.com/-qSny7vR0px4njFWG80wdN_Bdk-hOcbvhPaB2wvTM2jjfaIufUCOVv7Absl5j2K0VJbk67j40q9zE3OcKXsl-uny0RLfCWh9V3C8=w1064-v0)

> Do
> 這些文字遵循色彩對比度建議，並且在其背景色下文字保持清晰可見。

![image alt](https://lh3.googleusercontent.com/c1s4wGhwsCN_VjRxR0ZRxd8qngWVwvob9e3dQZWsFnHWyyYxC_7Hx2II-DxBkMkccQ2MrUeYuPpvqfs-eSaRkCKeLYzrQ9rmbGoXN4E=w1064-v0)

> 警告
> 這些文字不符合色彩對比度建議，在背景色之上較難閱讀。

圖標或其他關鍵元素也應考慮使用上述推薦的對比度。

![image alt](https://lh3.googleusercontent.com/r6d1yfA5NN2VtYs3znmMNTuCY_VVFZgPrG2bTbDojFfRDeu2L9vNhnhzYkxYJyD7CFXV8qjO1vhlxsLYauOf4gTdV9H3R48RvYczLA=w1064-v0)

> Do
> 這些圖標遵循色彩對比度建議，並且在其背景色下圖標保持清晰可見。

![image alt](https://lh3.googleusercontent.com/ORAKFUe73L8jmoQJdx93schCUFVYF-zbcY_sNfziEU0BpbevEbeZb4srLE6njuW9OKSMxtsP0974lvQ6rRolvum75TysCPnWYLh_=w1064-v0)

> 警告
> 這些圖標不符合色彩對比度建議，在背景色之上較難閱讀。

---

### 商標與裝飾元素

裝飾元素（例如商標與插圖）可能不符合對比度，但是如果裝飾元素起重要作用（例如連接到網站），則有助於使其與眾不同。

![image alt](https://lh3.googleusercontent.com/EE0_e_2FOnkGpZJE8PQxhL8hc4T4wZOfsLoRirf5X-pRknHfCLfUsjXkIn2fFpfFDPjvEwXfan78otfTgn8NOWMYRB1Vq6B9HS6mxA=w1064-v0)

> Do
> 明顯的裝飾性商標可能不符合對比度。

![image alt](https://lh3.googleusercontent.com/kIQ1DzhTeKBJw6mcCMdCQYCbThPKOXE9ON_HzJwAqbi2AdgAqEu-yQIOkMtd_hhoyUQN-fsrdCcbhCv43eisDDv3-HAm4rWbSA6kig=w1064-v0)

> Don't
> 請勿為了符合對比度更改你的商標。

---

### 其他視覺線索

對於有色盲或看不到色彩差異的使用者，其他設計元素可以幫助表達相同的訊息。

因為色盲有多種類型（包括紅綠色盲、藍黃色盲與全部色盲），所以多種視覺提示有助於傳達重要狀態。例如筆觸、指示器、圖案、紋理或文字之類的元素可以描述動作和內容。

![image alt](https://lh3.googleusercontent.com/y_1_dH3meRe7lct6c12vsocWBEdOtqpAYoU-s19n4DMLzWb-YlzlN2otggoz-c4m7iy8lhRgohn_kWjXrmrHIvJYUN0WtnaqH9HP-uU=w1064-v0)

> Do
> 文字區塊錯誤狀態透過多種提示傳達：標題顏色、文字筆畫以及該區塊下方的錯誤訊息。

![image alt](https://lh3.googleusercontent.com/HukIJ1gw1qiPbJt64UcV3Rnse91IWPLsJZ2YTW0QgjqbH_Rgf3GB-Nvzgpzcwdof9lGBtOxuCy7LRYF4e6Frhy6yI84Khsr-5POMWQ=w1064-v0)

> 警告
> 文字區塊錯誤狀態僅使用彩色筆畫傳達，無法感知顏色的使用者可能會錯過此訊息。

---

## 佈局與排版

Material Design 觸碰目標指南，可以幫助無法查看螢幕或使用小型觸摸目標有困難的使用者，點擊應用中的元素。

### 觸碰與指向目標

#### 觸碰目標

觸碰目標是對應使用者在螢幕上輸入的部分。它超出了元素的視覺範圍。例如，一個圖標可能是 24X24dp，但圍繞他的填充物包括完整的 48X48dp 觸碰目標。

對於大多數平台，請考慮使觸碰目標至少達到 48X48dp。無論螢幕大小如何，此大小的觸碰目標尺寸都約為 9mm。觸碰螢幕元件的建議木包一尺寸為 7-10mm。使用更大的觸摸目標來容納更大範圍的用戶可能是最為合適的。

請注意，在 iOS 上，建議使用 44X44pt 作為觸碰目標。有關特定於平台的實施指南，請前往[開發人員資料頁面](https://material.io/develop)。

#### 指向目標

指向目標與觸碰目標相似，但是適用於使用運動跟蹤指針設備（例如鼠標或手寫筆）。考慮使指向目標至少為 44X44dp。

![image alt](https://lh3.googleusercontent.com/7k-iIXbajrd7AG_85NF-GFk84sLQCuRwA3jwvttDOTwn8Q6NvwJ35TafZwYujU_vA-ILprIALf-nZ01ZOA65C6bu8NIi6UiljuPQXw=w1064-v0)

> Android 目標此寸為 48X48dp。
> 頭像：40dp
> Icon ：24dp
> 




![image alt](https://lh3.googleusercontent.com/HRaHWJMyJLrWh9zf43dM_lDL59jcQ_ClsfrRlLJsnFRMjwoMP5uVKZe23UT_DrokN-enC0Qwexp475mXa_DMXpZa8_cLNxa7lXPaFw=w1064-v0)

> 觸碰目標


























