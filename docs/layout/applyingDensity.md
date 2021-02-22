# 適用密度

Material Design 為使用案例提供了有關高密度間距的指南，其中密度增加可以改善使用者體驗。

> Beta 版指南反映了最新的 Material Design 見解。其可能會發生重大變化以支援新的研究結果與程式碼。
> 
> [了解更多](https://medium.com/google-design/what-beta-means-for-material-design-guidance-10c5739f47a9)或回饋給 Material Design

---

## 用法

這些指南描述如何以及何時應用密度。

### 原則

![可掃視的](https://lh3.googleusercontent.com/PS3YYWdPb4GG-jV_1Omar8bu3KkDhDGGiB0b_yth-n4taDoQHaUhJ4P1jaGB1y56QknLvJroA3LECfD4fSYlJaRSYSN_vl2OE2SNdXQ=w1064-v0)

#### 可掃視的

密集的使用者界面提高了查看和瀏覽大量內容的便利性。


![優先排序](https://lh3.googleusercontent.com/XISmrp_WnOuollXxWA7Rkx_UvaSRNt339n4PeraoFfYc-vD0lax5jnfrvbI6FSfuRGJvw4dOliSIFOZ0BT8MbIcuEAPJnIualCxs7w=w1064-v0)

#### 優先排序

密集的使用者介面透過減少操作間的空間，來幫助用戶集中注意力。

![優先排序](https://lh3.googleusercontent.com/u3kDY7X_vbyHZbEo_2aWlCkt0y2d9K6fDxgSSB0cly22RB8yLWsI-wiGyZPmZFXgL48jC8UWToHlXNTCY4HA5_qtXkbPgBeuPvXs=w1064-v0)

#### 可見的

密度的增加能在單一螢幕中包含更多的內容與動作。

---

### 密度準則

#### 如何應用

Material 密度準則是了解何時以及為什麼，應用密度可以改善使用者體驗的資源，在程式碼的支援下，可以在比例上透過內距調整 Material 元件密度，在[元件密度](###網格與組件密度)中說明了使用密度比例的指導，可以在[補充](##補充)中找到平台支援度。

#### 如何實作

使用者如何與組件互動決定了是否增加 UI 的密度，當使用者查看大量資訊並與之互動時，高密度的組件可以改善體驗。
藉由在螢幕上提供更多內容，增加列表、表格和長篇幅表單的密度，使資訊更易於掃視、查看和比較。

![增加密度](https://lh3.googleusercontent.com/gkWItWB25nEUuBKZ-VQN2QLnDWtg03lUdt9betFW1BuX3WR1OCbWddxt1t80WHA9FcxW2Evc4yV_j_Yx3QsJbcBqsjM5NxE4m0sM=w1064-v0)

> 1. 增加資料表格的密度 
> 2. 增加表單的密度

---

### 何時不要增加密度

任務和基於警報的元件不應增加密度。

#### 重點任務

不要增加涉及重點任務的元件的密度，像是與下拉菜單或選擇器互動的時候。舉例來說，日期選擇器之類的元件密度增加時，由於限制可點擊的空間而降低了易用性。

![不要增加日期選擇器的密度](https://lh3.googleusercontent.com/T9oWdoqztlFARJx7sPgW9JMKZ9pRWyWYnEU---xjR1lVjVQTSZ2kbpz5zUllfIVbW9Weh-zrUjHi5EnxWDLGAfOj--nJVK8rDMjZ=w1064-v0)

> 不！
> 不要增加用於日期選擇器等重點任務的組件的密度。

#### 警告和訊息

不要增加提醒使用者更改（例如訊息條或對話框）的組件的密度。警告密度的增加，使它們吸引使用者注意力的效率降低，在對話框的範例中，密度增加會損害消息的可讀性和突出性。

![不要增加對話框的密度](https://lh3.googleusercontent.com/K1gXYZPzi2PbOSbMgUxTMrCn-UXBDSzqDMyUD06lK0bGwxMElnJ7W3ZKUd-veY6PtcQ1CPfy00h9v-RLWM3xyK9GUHGlK1bH9MY8vA=w1064-v0)

> 不！
不要增加警告和訊息組件（例如對話框）的密度。

## 佈局

### 網格與組件密度

在組件密度和網格佈局之間保持平衡。
要建立可掃視的內容分組，請結合使用密度較低的網格佈局與高密度的組件，組件越密集，邊距和間距寬度應越大。將密集的佈局網格與密集的組件結合在一起，會讓使用者難以區分內容分組。

![使用低密度網格與高密度組件](https://lh3.googleusercontent.com/6B3dr5mN9u8dtgBtVGgLpDcXclip0KOjZzLfSWXhPiGQNF_v2nq2HK5iNxqr4visWHx23Ewwx7oC81v9YpH8IBd-xOkAsr7QUsuTCA=w1064-v0)

> 要！
具有較高密度的組件，應搭配較低的密度邊距和間距。

![](https://lh3.googleusercontent.com/lzjCGd26Fu36Bp1JPp0FW-RMmyd9PB4QLLsNCwnUKc_AYmFbJFXcSBZqo3ulygZ4b0bTAOuwJskEmHsy9G30a8pQg2Ogc5uyUsAtvCY=w1064-v0)

> 不！
請勿使用包含密集組件的密集佈局網格。

---

## 組件

### 對組件應用密度

不應該單獨調整組件密度。相反地，始終如一地使用密度以建立具有內聚效果的組件集，當你調整一個組件的密度時，請考慮此更改將如何影響應用程序中的其他組件。
下面的工具說明了 Material Components 在三種密度設置下的配合變化：預設、舒適和緊湊。

#### 互動範例

密度不同的 Material Components 組合。

<iframe width="100%" height="500" src="https://material-density.glitch.me/?previewSize=100" frameborder="0"></iframe>

---

### 密度比例

密度比例允許您在需要時控制單個組件的密度。
密度刻度已編號，從 0 開始表示組件的默認密度。隨著空間的減小，比例會移動到負數（-1，-2，-3），從而產生更高的密度。每增加一個刻度表示組件的高度減少 4dps。

![應用於按鈕的密度標度](https://lh3.googleusercontent.com/tGIiM1A050en8x0jKvbddKzuCHsJfBBbbIFiXgB6dZvvpXKCXeEotVd2V25CVFMSmmC3MI5hEkeFo4hVzMmGDm_v37TlkNuFJWSMpA=w1064-v0)

> 應用於按鈕的密度標度

不要從密度標尺中選擇會破壞組件的數字。

![](https://lh3.googleusercontent.com/uF_xm_ekRWFoT0_LMN_IEREkimLzFcxY6dUAwS4KuqBoJKCEYjeAd3R39KUojDrFK3O10NNText1KW2Bt45sc5tVIjnXHaf-B3M15A=w1064-v0)

> 不！
不要因為增加密度而破壞組件。紙片的密度為 -4 時會使組件破裂

---

### 間距方法

當組件的密度增加時，填充和對齊方式將保持一致，但是尺寸會發生變化。

![內距](https://lh3.googleusercontent.com/Ul7L6te2ymUJA44e1pc7OiXMQzxnjukLaOobq7Mpp63SksVMvZOuhcCQIqdSlJVn2rOj9sOSnYvWYLaYK1nQ3chMAnpGWTC23oZR=w1064-v0)

#### 內距

增加組件的密度時，請勿更改其內距。組件內距會影響高度，減少內距會負面地影響使用者互動。

![外型尺寸](https://lh3.googleusercontent.com/Ox6J6d6F42BQ-GlsFObzYBN9F7f65tRCdtAw5sxnZHpuDra0HEiD2lYnyMeJt8gkmFAxXYOunyitore_JPH0dUoW6MjaKJ1iGF8B_A=w1064-v0)

#### 外型尺寸

增加組件密度時更改尺寸。組件尺寸會影響組件或元素的長度和高度。

![對齊](https://lh3.googleusercontent.com/mIqC8pzhQbGiXx9FW1oZ481sMwdMrRhvHH6gIR6b1Q9eZunikCWMaAOJzDHaWE6qWBeDTDReLAAYD2iYZS-DG19oLEBvSTTYYfIbQAQ=w1064-v0)

#### 對齊

在組件容器內用置中來對齊元素。置中對齊的元素可在不進行其他元素對齊的情況下調整組件高度。

### 間隔多個元素

當一個組件中垂直堆疊多個元素時，請使用4dp增量將它們分開。將分組後的元素居中在組件容器中。

![多個元素對齊](https://lh3.googleusercontent.com/fNqSz2TtY88pohUZCqUITIrKkUTOns3l1_BRYwAIPi5FtLyZeowQK-udOP8V2sNC24WngAGgaIzAH3-LCmRgpHBv7V1rPxoY96D8Bng=w1064-v0)
1. 元素之間相隔20dp。 
2. 元素組在組件容器中垂直居中。

---

## 輔助功能

### 觸控目標

觸控目標適用於同時接收觸摸和非觸摸輸入的任何設備。為了平衡資訊密度和易用性，預設密度組件的觸控目標應至少為 48 x 48 dp，每個目標之間的間距至少為 8dp。注意：在iOS上，建議使用 44 x 44 dp 觸摸目標。

![觸控目標尺寸](https://lh3.googleusercontent.com/V4b7XLQEDBFUYzW8euExHdTcg4WljiiOBATYi4b4zpPrfOaNiDsI-K6PtLuLprHF57QmSyEUlnfk2nNbZhc3u3xCwNH44LVJ-j0SnHU=w1064-v0)

觸控目標最低 48 x 48 dp 

1. 40dp元素，48dp觸摸目標 
2. 24dp元素，48dp觸摸目標 
3. 36dp元素，48dp觸摸目標

除 iOS 產品外，你的產品中應使用 48 x 48 dp 作為最小觸摸目標的預設體驗。用戶必須自行選擇高密度組件體驗，因為更高密度的組件不能滿足可及性需求。

![密度選擇](https://lh3.googleusercontent.com/7vgBb31tgNlrd9jUFJbfvi4SQ_0rhiyV_9LwyN_z2WRzwGutSausk2oT5ugtrWF-BMo8XB8yf8fZWJA-SAwv-tTzpVpbUEBF36rR=w1064-v0)

用戶選擇加入更密集的組件體驗的模式

---

## 文字排版

### 行高

行高是文本行之間的間隔，可以用作文字排版中建立密度的一種方式。

![行高](https://lh3.googleusercontent.com/JauXlbrLtzg79pwiytvDchPnQ6DNPsYMrAxudq4PpdOTzHUho2a85Btxmp-e_DJKTDodXGx0doDyEr4DDpgUMAi6k-kLPCXvCn5LurM=w1064-v0)
1. 較大的線高：44dp，40dp，44dp，32dp
2. 較小的線條高度：36dp，32dp，40dp，20dp


## 補充

每個平台的密度支持如下所示。


| 平台 | 狀態 | 
| -------- | -------- |
| Android | 規劃中 |
| iOS | 規劃中 |
| Web | [可用的](https://material.io/develop/web/docs/density) |
| Flutter | 規劃中 |

