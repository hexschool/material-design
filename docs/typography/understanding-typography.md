# 了解排版

字體排版（typograpyh）能傳遞出資訊層次結構與品牌形象。

## 字體的屬性

字體（typeface）是一群字母（letters）的集合。雖然每一個字母都是獨特的，但某些形狀或部件是在各個字母間共享的。字體代表的是一群字母集合的共享模式。

在遵循文字排版設計的基本原則時，根據其樣式、易讀性和可讀性選擇出來的字體是最有效果的。

![一些跟字母形體相關的名詞](https://i.imgur.com/y0MQfV5.png)


> 一些跟字母形式（letterform）相關的名詞：字腔(aperture)、上伸筆畫(ascender)、基線(baseline)、大寫字高(cap height)、下伸筆畫(descender)、字元行距(leading)、字元間距(letter-spacing)、無襯線字體(sans serif)、有襯線字體(serif)、字體幹線(stem)、筆劃(stroke)、x字高(x-height)


### 基線

**基線**(baseline)是一條看不見的參考線，每行文字會被置於其上。在 Material Design 中，基線是測量文字與元素間垂直距離的重要規範。

![基線](https://i.imgur.com/xNMmOp6.png)
> 基線


 
#### 4dp 格線

文字對齊在 4dp 寬的基線格線上。

![4dp 格線](https://i.imgur.com/zB4z1T7.png)
> 無論 pt/sp 大小多大，文字的基線都必須落在 4dp 寬的格線上。行高(line-height)必須是能被 4 整除的數值，這樣才能維持格線系統的規律。
> 
> 譯者附註：dp，與密度無關像素(Density-Independent Pixel)，一種 Android 上的抽象空間大小單位。pt，像素(Pixel)，螢幕上所顯示的最小空間大小單位。sp，Scalable pixels(可縮放像素)，Android 上的抽象文字大小單位，一般情況下 sp = dp。


#### 基線值的測量

基線值的測量，也就是指在畫面上的不同元素，彼此基線間隔的距離。基線值是跟軟體解耦的，所以它能被運用於各種設計相關軟體中，也能和格線系統搭配良好。不論是在 Android 和 iOS 系統中，都能將以基線為主的程式碼，轉成以內距（padding）為主的程式碼。對於 Web 平台來說，則能透過 Sass 或 CSS 來進行自動運算。

![以基線作為垂直排版的依據，而不是以元素盒模型的邊界。在跨軟體或跨平台時，這種作法能幫助實做更加準確。](https://i.imgur.com/7IZ5LPi.png)

> 以基線作為垂直排版的依據，而不是以元素盒模型的邊界。在跨軟體或跨平台時，這種作法能幫助實做更加準確。

![測量有與其他元件鄰近的文字基線值](https://i.imgur.com/xtt54GN.png)

> 測量有與其他元件鄰近的文字基線值


### 大寫字高

**大寫字高**（cap height）是指從基線開始測量起的該字體的大寫字母（像是 M 或是 I）。對於一些圓頭或尖頭的大寫字母（像是 S 或 A），為了讓視覺大小一致，會在大寫字高的上方做一些視覺上的微調。每一種字體都有自己獨特的大寫字高。

![大寫字高](https://i.imgur.com/ifTJkOC.png)

> 大寫字高


### X字高

X字高（x-height）指的是在字體中，小寫字母 x 的高度。X字高表示了在字體中，字形（glyph）是多高或多矮。

有著較高X字高的字體，在字級（font size）較小時也能有較高好的辨識度，因為在每個字母內的空白會因此跟著更為清晰。

![字體的小寫 x 字母高度決定了該字體的x字高](https://i.imgur.com/OQ2epkV.png)

> 字體的小寫 x 字母高度決定了該字體的x字高


### 上伸筆畫與下伸筆畫

**上伸筆劃**（ascender）是指在某些小寫字母裡會看到的垂直向上筆畫，這些上伸筆畫會延伸超過大寫字高或基線。**下伸筆畫**則是字母裡的垂直向下筆畫。在某些情況，當**行距**（line height，基線間的垂直高度）太靠近緊湊時，這些筆畫間可能就會交錯在一起。

![上伸筆畫與下伸筆劃](https://i.imgur.com/n43okH4.png)

> 上伸筆畫與下伸筆劃

### 字重

**字重**（weight）指的是字體筆畫的相對粗細程度。一個字體可以有多個字重；通常一個字體會有四到六種的字重可以選擇。

![常見的字重](https://i.imgur.com/ZX4C3xw.png)

> 常見的字重
> 1. 細體（light）
> 2. 標準（regular）
> 3. 適中（medium）
> 4. 粗體（bold）


---

## 字體的分類

字體分類連結
- [Serif - Google Fonts](https://fonts.google.com/?category=Serif)
- [Sans Serif - Google Fonts](https://fonts.google.com/?category=Sans+Serif)
- [Monospace - Google Fonts](https://fonts.google.com/?category=Monospace)
- [Handwriting - Google Fonts](https://fonts.google.com/?category=Handwriting)
- [Display - Google Fonts](https://fonts.google.com/?category=Display)


### 襯線體

**襯線**（serif）是指在字母筆畫起始段或末段的裝飾細節或突起。帶有襯線的字體被稱為是（有）襯線（字）體。有襯線字體可分為以下這些：

**舊體**（old-style serif）類似墨水書寫，有這些特性：

- 粗細筆畫間的對比程度低
- 筆畫是斜向軸線漸粗（Diagonal stress）
- 在小寫上伸筆畫處有傾斜的襯線

**過渡體**（transitional serif，也可稱巴洛克體）有這些特性：
- 粗細筆畫之間的對比程度高
- x字高的高度中間偏高
- 筆畫是直向軸線漸粗（Vertical stress）
- 有括號造型的襯線

**新古典襯線體**（didone or neoclassical serif）有這些特性：
- 粗細筆畫間的對比程度高
- 筆畫是正向軸線漸粗
- 有「球形」結尾的筆畫

**粗襯線體**（slab serifs）有這些特性：
- 襯線和主要筆畫的力度都很重，兩者之間差異不明顯
- 襯線可能括號勾起很微小，或根本沒有


![襯線體的分類與代表](https://i.imgur.com/vkqghY4.png)

> 1. EB Garamond，舊體的襯線體代表
> 2. Libre Baskerville，過渡體的襯線體代表
> 3. Libre Bodoni, 新古典體的襯線體代表
> 4. Bitter, 粗襯線體代表



### 無襯線體

沒有襯線（serifs）的字體被稱為是無襯線（字）體（sans serif），而「san 」在法語代表的是「無」的意思。無襯線體有以下這些分類：

- **怪誕感**（grotesque）：粗細筆畫間的對比程度低，可能會有垂直軸線漸粗狀況、也可能沒有
- **人文感**（humanist）：粗細筆畫間的對比程度中等，有傾斜軸線漸粗狀況
- **幾何感**（geometric）：粗細筆畫間的對比程度低，有傾斜軸線漸粗狀況，且長得比較圓

![無襯線體的分類](https://i.imgur.com/wHShd7t.png)
> 1. Work Sans, 怪誕感的無襯線體代表
> 2. Alegreya Sans, 人文感的無襯線體代表
> 3. Quicksand, 幾何感的無襯線體代表

### 等寬字體

等寬字體的字元（characters）在呈現時有著相同的寬度。

![三種等寬字體的示意圖](https://i.imgur.com/br5Mim3.png)
> 1. Roboto Mono, 等寬字體代表
> 2. Space Mono, 等寬字體代表
> 3. VT323, 等寬字體代表


### 手寫字體

手寫字體（Handwriting）是比較特別的、有自然手寫感覺的字體。這種字體常被用在標題 H1 - H6 的字型尺度上。這種字體有以下這些形式：

- **黑字感**（black letter）：對比度高、寬度較窄、有直線與有角度的曲線
- **書法感**（Script）：複製書法風格的書寫（比較正式）
- **手寫感**（Handwriting）：手寫風格的書寫（沒那麼正式）

![三種手寫字體代表字型示意圖](https://i.imgur.com/er3zOqX.png)
> 1. UnifrakturMaguntia, 黑字感的手寫字體代表
> 2. Dancing Script, 書法感的手寫字體代表
> 3. Indie Flower, 手寫感的手寫字體代表

### 裝飾性字體

裝飾性字體（Dislay）是一個比較雜的字體類別，只適合用來呈現在比較大的文字上。裝飾性字體通常用在標題 H1 - H6 的字型大小尺度上。

![三種裝飾性字體示意圖](https://i.imgur.com/EhCLqRD.png)

> 1. Shrikhand, 裝飾性字體代表
> 2. Chewy, 裝飾性字體代表
> 3. Faster One, 裝飾性字體代表

---

## 可讀性 Readability

易認性（legibility）是由字體（typeface）中的字符（characters）決定，而**可讀性**（readability）則是以閱讀字詞或文字段落的輕鬆程度決定。可讀性會受到字體樣式的影響。

延伸閱讀：文字易認性
- [Text legibility - Material Design](https://material.io/design/color/text-legibility.html#legibility-standards)

### 字元間距

字元間距（letter-spacing），也被稱為字距（tracking）。字距是指在一段文本中，字元與字元間一致的調整距離。

![字元間距示意圖](https://i.imgur.com/jmqxUfi.png)

像是標題這類比較大的字體，會用更緊湊的字距來提高可讀性、與減少文字間的空隙。

![緊湊的字距示意圖](https://i.imgur.com/TcDHq4u.png)
> 緊湊的字距

對於比較小的字體，較寬的字距可以提高可讀性，因為字母間的間距越大的話，字母形狀間的對比程度就越高。即便是在字體大小較小的大寫文字，在增大字距後，可讀性也能跟著提高。

![較寬的字距示意圖](https://i.imgur.com/3pWOfKv.png)
> 較寬的字距


#### 表格數字

在數值變化頻繁的表格或其他地方中，經常會使用表格數字（tabular figures，也常被稱為等寬數字），而不是比例數字。

![比例數字與等寬數字示意圖](https://i.imgur.com/nXhF7Rc.png)

> 表格數字讓數值在視覺上有對齊效果，在掃視時更方便。


### 行寬

對正文來說，一般行寬（line length）會在 40 到 60 個字元寬。在行寬較寬到達 120 個字元寬的區域（像是桌機），會需要將行高（line height）增高到 20sp 至 24sp。

![對於英文正文來說，理想的行寬是每行 40 到 60 個字元 ](https://i.imgur.com/D5uucbt.png)

> 對於英文正文來說，理想的行寬是每行 40 到 60 個字元。

![英文短句理想的行寬是每行 20 到 40 個字元](https://i.imgur.com/kAaawYf.png)
> 英文短句理想的行寬是每行 20 到 40 個字元


### 行高

行高（line height，也被稱為行距）控制著一行字到另一行字基線間的間距。文字的行高跟文字大小成正比。

![行高與字體大小比例示意圖](https://i.imgur.com/dVZGDeE.png)
> 1. 字體大小 14，行高 20dp
> 2. 字體大小 20，行高 28dp

### 段落間距 

請讓段落間距（Paragraph spacing）的字體大小保持在 .75x 到 1.25x 倍之間。

![段落間距比例示意圖](https://i.imgur.com/q9zz4jG.png)
> 字體大小 20dp，行高 30dp，段落間距 28dp

### 文字對齊

文字對齊（type alignment）控制著文在在空間裡如何對齊呈現。這裡有三種文字對齊的方式：

- 靠左對齊：當文字往左方邊緣對齊時
- 靠右對齊：當文字往右方邊緣對齊時
- 置中對齊：當文字被對齊至在目前所在區塊中央時

#### 靠左對齊

文字靠左對齊（left aligned）對由左至右書寫的語言來說是很常見的設定，例如英文。

![將文字靠左對齊的設定應用於正文中示意圖](https://i.imgur.com/I79qmSE.png)
> 將文字靠左對齊的設定應用於正文中

#### 靠右對齊

文字靠右對齊（right-aligned）對由右至左書寫的語言來說是很常見的設定，例如阿拉伯文與希伯來文。

對由左至右書寫的語言依然能讓文字靠右對齊，但比較適用布局中比較短的排版元素（例如旁註），而不建議用於較長的正文中。

![將文字靠右對齊設定應用在旁註上](https://i.imgur.com/LOepiGL.png)

> 將文字靠右對齊設定應用在旁註上

#### 置中對齊

文字置中對齊最適合用於在布局中比較短的排版元素上（例如引述文字），而不建議用於較長的正文上。

![文字置中對齊應用於引述文字](https://i.imgur.com/JmZzAnz.png)

> 文字置中對齊應用於引述文字

延伸閱讀
- [雙向性 - 鏡像元素（Bidirectionality mirroring elements）](https://material.io/design/usability/bidirectionality.html#mirroring-layout)

---

## 系統字體

系統字體（System fonts）是指已被預先安裝在電腦或裝置上的字體。它們通常支援許多語言，而且開發人員使用這些字體時不用支付額外的授權費用。在 APP 中使用預設的系統文字，能讓 APP 的外觀與感受與平台的一致性更高。然而，因為字體在裝置上的其他 APP 也經常會出現，也因此不會有突顯效果。

延伸閱讀
- [Roboto - Google Fonts](https://fonts.google.com/specimen/Roboto)

### 使用系統字體 Using system fonts

原廠的系統字型應該用於文字大小在 14sp 以下的任何文字上。

Roboto 是 Android 系統的預設系統字體。對於不是 Android 或 Web 產品的其他平台來說，請使用該平台偏好的系統字體。例如 iOS APP，就應該使用 Apple 的 San Francisco 字體。

![Roboto 是 Android 上的系統字體](https://i.imgur.com/gSmtYXz.png)
> **Android**
> Roboto 系統字體

![San Francisco 是 iOS 平台上的系統字體](https://i.imgur.com/KqF4X4F.png)
> iOS
> San Francisco 系統字體
