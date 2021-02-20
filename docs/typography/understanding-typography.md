---
title: 了解排版
description: 字體排版（typograpyh）能傳遞出資訊層次結構與品牌形象。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 了解排版

字體排版（typograpyh）能傳遞出資訊層次結構與品牌形象。

## 字體的屬性

字體（typeface）是一群字母（letters）的集合。雖然每一個字母都是獨特的，但某些形狀或部件是在各個字母間共享的。字體代表的是一群字母集合的共享模式。

在遵循文字排版設計的基本原則時，根據其樣式、易讀性和可讀性選擇出來的字體是最有效果的。

![一些跟字母形體相關的名詞](https://lh3.googleusercontent.com/XN6ATtQ7Q_NxH5Eb_ZMiAZI6Wh61nClqWKHyx10vhIly8lzEOKmswVEAxjQOzldyCJ_q5W6dTznM0fn5wS8ArPzhpDq4vfhUxnOz=w1064-v0)

<p class="annotation">一些跟字母形式（letterform）相關的名詞：字腔(aperture)、上伸筆畫(ascender)、基線(baseline)、大寫字高(cap height)、下伸筆畫(descender)、字元行距(leading)、字元間距(letter-spacing)、無襯線字體(sans serif)、有襯線字體(serif)、字體幹線(stem)、筆劃(stroke)、x字高(x-height)</p>

### 基線

**基線**(baseline)是一條看不見的參考線，每行文字會被置於其上。在 Material Design 中，基線是測量文字與元素間垂直距離的重要規範。

![基線](https://lh3.googleusercontent.com/03pPQIfJ0NxIaeH_CoX780hdTmqus7SlYy7cTKoZksZz6AXpw1xRLYzWdv_mYDer2FfW3VvqsAfvQXOBydAEda5-Eq6nRoGNZDPG=w1064-v0)
<p class="annotation">基線</p>

#### 4dp 格線

文字對齊在 4dp 寬的基線格線上。

![4dp 格線](https://lh3.googleusercontent.com/mNkwfYnbuTcOwsNz2YVjhf671pizs_a9WR7TSlA4mM6UuUpx7tbJ1i0VP2MqM_XE0-Vq0tpu-TzV3vnXgVqFvE30gUuViiApGWum=w1064-v0)

<p class="annotation">無論 pt/sp 大小多大，文字的基線都必須落在 4dp 寬的格線上。行高(line-height)必須是能被 4 整除的數值，這樣才能維持格線系統的規律。</p>
<p class="annotation">譯者附註：dp，與密度無關像素(Density-Independent Pixel)，一種 Android 上的抽象空間大小單位。pt，像素(Pixel)，螢幕上所顯示的最小空間大小單位。sp，Scalable pixels(可縮放像素)，Android 上的抽象文字大小單位，一般情況下 sp = dp。</p>

#### 基線值的測量

基線值的測量，也就是指在畫面上的不同元素，彼此基線間隔的距離。基線值是跟軟體解耦的，所以它能被運用於各種設計相關軟體中，也能和格線系統搭配良好。不論是在 Android 和 iOS 系統中，都能將以基線為主的程式碼，轉成以內距（padding）為主的程式碼。對於 Web 平台來說，則能透過 Sass 或 CSS 來進行自動運算。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/Ff6eGNbOu56cP-dnwB12aNVwwj5-E63WDw50QSyz_nvuuv-KDk9Zwa94uXZhtC8JkoZGY-s3PUdmn3kx7DagED-vK1tvmzuqiS31Tw=w1064-v0" alt="">
        <p>以基線作為垂直排版的依據，而不是以元素盒模型的邊界。在跨軟體或跨平台時，這種作法能幫助實做更加準確。</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/I9TxT6CNxN9Qjq_PVeBDD7qKRX_QRqZFGmDMfLV8SLYYgnRL10oVq6RbZAmPdPqgt95C2vBXCWUZbmWxXioN3_WFJXgyCoApk6U0oA=w1064-v0" alt="">
        <p>測量有與其他元件鄰近的文字基線值</p>
    </div>
</div>

---

### 大寫字高

**大寫字高**（cap height）是指從基線開始測量起的該字體的大寫字母（像是 M 或是 I）。對於一些圓頭或尖頭的大寫字母（像是 S 或 A），為了讓視覺大小一致，會在大寫字高的上方做一些視覺上的微調。每一種字體都有自己獨特的大寫字高。

![大寫字高](https://lh3.googleusercontent.com/GV5FQ8hady9sQU0eHxUw_6O3TqPBxd1hezBNMSyw8WfdibMPZIMqt3x4gXVJWN7exKc-MT6teHqKNGnrbXPvLYq01weNCr2NVhVb5Q=w1064-v0)

<p class="annotation">大寫字高</p>

---

### X 字高

X 字高（x-height）指的是在字體中，小寫字母 x 的高度。X 字高表示了在字體中，字形（glyph）是多高或多矮。

有著較高 X 字高的字體，在字級（font size）較小時也能有較高好的辨識度，因為在每個字母內的空白會因此跟著更為清晰。

![字體的小寫 x 字母高度決定了該字體的x字高](https://lh3.googleusercontent.com/iF6wBmzTnSHNp-T_P5fIOhLoqiaiPQGSkXwprlQYa7sYzxgieax7zCm2OgKXInHSsDIbgjUWZKUk2eM6y1yb7ud623QmleY6qfJdz4M=w1064-v0)

<p class="annotation">字體的小寫 x 字母高度決定了該字體的 x 字高</p>

---

### 上伸筆畫與下伸筆畫

**上伸筆劃**（ascender）是指在某些小寫字母裡會看到的垂直向上筆畫，這些上伸筆畫會延伸超過大寫字高或基線。**下伸筆畫**則是字母裡的垂直向下筆畫。在某些情況，當**行距**（line height，基線間的垂直高度）太靠近緊湊時，這些筆畫間可能就會交錯在一起。

![上伸筆畫與下伸筆劃](https://lh3.googleusercontent.com/YuIcT_rJ-AI0Efux7od-ufftpYmTDzdnXr0Nh8r7HPyq612tNJbjZDthpV-i1JUNcPc7hiddSLtwDSWPvB0OdGNvdHCYsK8Gd6qfpg=w1064-v0)

<p class="annotation">上伸筆畫與下伸筆劃</p>

---

### 字重

**字重**（weight）指的是字體筆畫的相對粗細程度。一個字體可以有多個字重；通常一個字體會有四到六種的字重可以選擇。

![常見的字重](https://lh3.googleusercontent.com/p1KHRGapQZb8fK8Rbzlcn7Iav_wkhcIR7m2s6FlM77Bxd5xooIFVAruSKZahO0nSwkfeWNK9NoDEgBE1ZCX8KB6AmtGAs_5PrGFeXQ=w1064-v0)

<ol class="annotation">常見的字重
  <li>細體（light）</li>
  <li>標準（regular）</li>
  <li>適中（medium）</li>
  <li>粗體（bold）</li>
</ol>

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

![襯線體的分類與代表](https://lh3.googleusercontent.com/7OsusjLHev_e97SIHwDkrgfetHKLlHBTRmmKCEFKhWXuMb7lF0ngb-S_GBHl8hQfeAEh26PYFmUb7cs1QGOi4UjwY5z7RSc77esPcA=w1064-v0)

<ol class="annotation">
  <li>EB Garamond，舊體的襯線體代表</li>
  <li>Libre Baskerville，過渡體的襯線體代表</li>
  <li>Libre Bodoni, 新古典體的襯線體代表</li>
  <li>Bitter, 粗襯線體代表</li>
</ol>

---

### 無襯線體

沒有襯線（serifs）的字體被稱為是無襯線（字）體（sans serif），而「san 」在法語代表的是「無」的意思。無襯線體有以下這些分類：

- **怪誕感**（grotesque）：粗細筆畫間的對比程度低，可能會有垂直軸線漸粗狀況、也可能沒有
- **人文感**（humanist）：粗細筆畫間的對比程度中等，有傾斜軸線漸粗狀況
- **幾何感**（geometric）：粗細筆畫間的對比程度低，有傾斜軸線漸粗狀況，且長得比較圓

![無襯線體的分類](https://lh3.googleusercontent.com/dCLLu5A55iMK1nf8Hy-IFCbLNN-R0ZJn9YMucGnmrU1OOtZ7QQvrR-jwLEjZ_5gRFGQwYPKOpqw4dbbcVtpG2urz0magQfQnaylF=w1064-v0)

<ol class="annotation">
  <li>Work Sans, 怪誕感的無襯線體代表</li>
  <li>Alegreya Sans, 人文感的無襯線體代表</li>
  <li>Quicksand, 幾何感的無襯線體代表</li>
</ol>

---

### 等寬字體

等寬字體的字元（characters）在呈現時有著相同的寬度。

![三種等寬字體的示意圖](https://lh3.googleusercontent.com/fbHnw2LvxGX29RpI8StGQVEXqIYO3DcNjjZtVGvYTzePX0TkMUCim6p7HYTilLpI26hEAv0xctvd_PB5t3lrzYfauC6GGQZatI4qho8=w1064-v0)

<ol class="annotation">
  <li>WRoboto Mono, 等寬字體代表</li>
  <li>Space Mono, 等寬字體代表</li>
  <li>VT323, 等寬字體代表</li>
</ol>

---

### 手寫字體

手寫字體（Handwriting）是比較特別的、有自然手寫感覺的字體。這種字體常被用在標題 H1 - H6 的字型尺度上。這種字體有以下這些形式：

- **黑字感**（black letter）：對比度高、寬度較窄、有直線與有角度的曲線
- **書法感**（Script）：複製書法風格的書寫（比較正式）
- **手寫感**（Handwriting）：手寫風格的書寫（沒那麼正式）

![三種手寫字體代表字型示意圖](https://lh3.googleusercontent.com/L8fhNY-Hd6c-zvfiOhUvbhwiSPyTbP5DEPW5G8FzRcOFDX2rEGlcVjneOFhsFmI2wIC-tfsN5A_42aeJT_r_cDoTbNI1UV7bS-p5=w1064-v0)

<ol class="annotation">
  <li>UnifrakturMaguntia, 黑字感的手寫字體代表</li>
  <li>Dancing Script, 書法感的手寫字體代表</li>
  <li>Indie Flower, 手寫感的手寫字體代表</li>
</ol>

---

### 裝飾性字體

裝飾性字體（Dislay）是一個比較雜的字體類別，只適合用來呈現在比較大的文字上。裝飾性字體通常用在標題 H1 - H6 的字型大小尺度上。

![三種裝飾性字體示意圖](https://lh3.googleusercontent.com/ybvKNwUFGFpW6kSaBSCamN3WgSMcT3WAdBE89_mXOTJRn-uG61Sy-_vE02ICOmeEQyUe0jq3Cz5gtH5nscWaA9vNZ5dXePZYuzjZEg=w1064-v0)

<ol class="annotation">
  <li>Shrikhand, 裝飾性字體代表</li>
  <li>Chewy, 裝飾性字體代表</li>
  <li>Faster One, 裝飾性字體代表</li>
</ol>

---

## 可讀性 Readability

易認性（legibility）是由字體（typeface）中的字符（characters）決定，而**可讀性**（readability）則是以閱讀字詞或文字段落的輕鬆程度決定。可讀性會受到字體樣式的影響。

### 字元間距

字元間距（letter-spacing），也被稱為字距（tracking）。字距是指在一段文本中，字元與字元間一致的調整距離。

![字元間距示意圖](https://lh3.googleusercontent.com/mEWNalQJNdaFTC8dTBXYhiy6g7r786B1ByzpIB2I-9vT_-DlTVDR42gCFNrk6A_VCIv-yfle4HzytEdgcjmu8K6ycbgapug8R2Yu3A=w1064-v0)

像是標題這類比較大的字體，會用更緊湊的字距來提高可讀性、與減少文字間的空隙。

![緊湊的字距示意圖](https://lh3.googleusercontent.com/h9Yo0Wb2CKoEqbrTqtNDdY9Nb31o91W4q0ESGLQEQkiLFX6O3uajeYqZ2EsEVkODjFJudXVMjTBnWHgy6HlWXcSilPjwZBvj4u-aH80=w1064-v0)

<p class="annotation">緊湊的字距</p>

對於比較小的字體，較寬的字距可以提高可讀性，因為字母間的間距越大的話，字母形狀間的對比程度就越高。即便是在字體大小較小的大寫文字，在增大字距後，可讀性也能跟著提高。

![較寬的字距示意圖](https://lh3.googleusercontent.com/RCnPVR8WUirzFRf3N7QxxUeM3l6chrEGJGP9clm2qFcOd8mwMR-FJG9ucaX_YYwxl5WeFMbB_vNWmCfqTSUeGQuQtahk2oO66xO6=w1064-v0)

<p class="annotation">較寬的字距</p>

#### 表格數字

在數值變化頻繁的表格或其他地方中，經常會使用表格數字（tabular figures，也常被稱為等寬數字），而不是比例數字。

![比例數字與等寬數字示意圖](https://lh3.googleusercontent.com/ODMe3m8rQaShzAfkVli2P1uHRRVlpOZErhdWXynL0j999mrtyZpQB4SljYgAC7QPjORBJ24eE08mED-G_416Ca0xLMy13jrjDmRksQ=w1064-v0)

<p class="annotation">表格數字讓數值在視覺上有對齊效果，在掃視時更方便。</p>

---

### 行寬

對正文來說，一般行寬（line length）會在 40 到 60 個字元寬。在行寬較寬到達 120 個字元寬的區域（像是桌機），會需要將行高（line height）增高到 20sp 至 24sp。

![對於英文正文來說，理想的行寬是每行 40 到 60 個字元 ](https://lh3.googleusercontent.com/4o_swy1dMJTs5gPJQ0MyifUkNSlMM2f4lgf6aujDHp-4VA2PRIrtEUNwwk5dw9OrnpTRWAc4Msw3QADl89Pht4hngcUIxtwS_LWi8g=w1064-v0)

<p class="annotation">對於英文正文來說，理想的行寬是每行 40 到 60 個字元。</p>

![英文短句理想的行寬是每行 20 到 40 個字元](https://lh3.googleusercontent.com/hI8BRTwICe9A5UFV3E4bcA5VsDkY8mNRjf1S9tBw6F8sNjIuzrDYfuRE3YsdaX0ORltSY1fJ9FAClHaotbk5MJX0sPnDud0JH_xF=w1064-v0

<p class="annotation">英文短句理想的行寬是每行 20 到 40 個字元</p>

---

### 行高

行高（line height，也被稱為行距）控制著一行字到另一行字基線間的間距。文字的行高跟文字大小成正比。

![行高與字體大小比例示意圖](https://lh3.googleusercontent.com/AZF7OjxdLZ8mNJ9MdhZ03bxO4SZaRYVG04qYx1KCqS-9g9Nf_G_eigYB9KU36uJX4-TypqazozSDQF3fX9iw6wm31YSE7y8GKvUSmgk=w1064-v0)

<ol class="annotation">
  <li>字體大小 14，行高 20dp</li>
  <li>字體大小 20，行高 28dp</li>
</ol>

---

### 段落間距

請讓段落間距（Paragraph spacing）的字體大小保持在 .75x 到 1.25x 倍之間。

![段落間距比例示意圖](https://lh3.googleusercontent.com/2gY_f9n7uPjPRPkBaduGNU_SnEymGIrgCmJ4dCZ24-YVBWReCX80sM_88v0lduC4TH6RWg0mYC2o91xFKv7TzcrmTVZujPMDACeahw=w1064-v0)

<p class="annotation">字體大小 20dp，行高 30dp，段落間距 28dp</p>

---

### 文字對齊

文字對齊（type alignment）控制著文在在空間裡如何對齊呈現。這裡有三種文字對齊的方式：

- 靠左對齊：當文字往左方邊緣對齊時
- 靠右對齊：當文字往右方邊緣對齊時
- 置中對齊：當文字被對齊至在目前所在區塊中央時

#### 靠左對齊

文字靠左對齊（left aligned）對由左至右書寫的語言來說是很常見的設定，例如英文。

![將文字靠左對齊的設定應用於正文中示意圖](https://lh3.googleusercontent.com/BHn2VLCw8NEo8fgOxG1cDnDHZSa2Y9Bx-navPQjVp5enrrhMUDHNlcW2bRlwWHzo8bphobUILL2nFkg1aEgA3DFgrOIR5s-gRXIj=w1064-v0)

<p class="annotation">將文字靠左對齊的設定應用於正文中</p>

#### 靠右對齊

文字靠右對齊（right-aligned）對由右至左書寫的語言來說是很常見的設定，例如阿拉伯文與希伯來文。

對由左至右書寫的語言依然能讓文字靠右對齊，但比較適用布局中比較短的排版元素（例如旁註），而不建議用於較長的正文中。

![將文字靠右對齊設定應用在旁註上](https://lh3.googleusercontent.com/8h-VKZnBxNC5LW-Es55KgMXjJLETQeokULTLLURaTZfzD26sqio3HiKfotedvq9qHU67lHuNBLbXy43BEh6hFwtflPV0L2c8RLpz=w1064-v0)

<p class="annotation">將文字靠右對齊設定應用在旁註上</p>

#### 置中對齊

文字置中對齊最適合用於在布局中比較短的排版元素上（例如引述文字），而不建議用於較長的正文上。

![文字置中對齊應用於引述文字](https://lh3.googleusercontent.com/Kou0XyGljqGsRiVjJ1u1Pw1ZhARo8Bd6nDv7xc7tGoVoCB0KfVKy-u9n0cdbmgALY6o3ALrY4bccFq2JgSdmM6_lqJmU6l_JeVyJ=w1064-v0)

<p class="annotation">文字置中對齊應用於引述文字</p>

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

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/D0cbdknrU82zr4FsaUZtUaRiw-UbXdTA5c-ExWx9AuOVb17FbfI4JM-TwRPgBjkgGHtRRfNTN4ooOT2bcziBY4iYT-T7Z4aaHhLdmQ=w1064-v0" alt="">
        <h4>Android</h4>
        <p>Roboto 系統字體</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/w1BAg3VK7PvC8ntljZfH0bQWV5H4kdSo3aKxy7WgnWpjHaRlbZploZDM1ALM0V6RqhrYYtkfFGLxGYFwR1Vw5jHjIb1hbHSXU1NzPOw=w1064-v0" alt="">
        <h4>iOS</h4>
        <p>San Francisco 系統字體</p>
    </div>
</div>

---

> 譯者：邱繼緯
>
> 校稿：Joanne Chen
