---
title: 文字系統
description: 盡可能清楚且有效率的使用排版呈現你的設計和內容。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 文字系統

盡可能清楚且有效率的使用排版呈現你的設計和內容。

## 文字量表

Meterial Design 文字量表包含一系列的對照樣式，可以滿足產品和內容上的需求。

文字量表是受文字系統支持的十三種樣式組合，包含可重複使用的文字類別，每個類別都有它預期的應用和含義。

### 文字量表產生器

由 [Goolge Fonts](https://fonts.google.com/) 支持提供，文字量表產生器是一項可以產生各種文字階級和其對應的程式碼工具。任何你選擇的字體都會根據 Meterial 字型指南，自動的調整大小和優化，提高文字的可讀性。

在文字量表中選擇一個類別以查看字體的詳細訊息，透過右側控制列調整你的字型選擇。

<iframe _ngcontent-mfr-c18="" src="https://material.io/inline-tools/typography/" title="" style="height: 616px;width:100%;"></iframe>

---

### 文字量表範例

此文字量表範例，將 Roboto 字體用於所有標題、副標題、正文和字幕，從而產生連貫的排版體驗，透過字體的粗細（ 細、中、正常 ）大小、字母間距和大小寫差異，傳達字體的層次結構。

![文字量表範例](https://lh3.googleusercontent.com/GhGMLbfqPXdUgmnflT52VWNSned4U5jLOpTIXZWEDQfwvZGZC2EI0iO0wKxptigoYW79v2PhIdmjTjWDgfdHF8TzcldhSc9pA4BBLhE=w1064-v0)

<p class="annotation"> Material Design 文字量表。 (字體間距值和 Sketch 相容。)</p>

下載此使用 Sketch 文字樣式的 Roboto 文字量表。

<a _ngcontent-mfr-c5="" class="ng-star-inserted mdc-ripple-upgraded button-style-link mdc-ripple-surface" href="https://storage.googleapis.com/spec-host/mio-staging%2Fmio-design%2F1581631970573%2Fassets%2F1__l5pBodK3nULajGCU3B_3N30wLskEkm%2Fmaterialdesigntypescale.sketch" title="" target="_blank" rel="noopener"><!---->Download Roboto Type scale<!----></a>

---

### 文字大小單位

以下單位用於表示 Android、iOS 和網頁上的字體大小。

<table class="mdc-data-table__table"><thead><tr class="mdc-data-table__header-row">
<th class="mdc-data-table__header-cell">Platform</th>
<th class="mdc-data-table__header-cell">Android</th>
<th class="mdc-data-table__header-cell">iOS</th>
<th class="mdc-data-table__header-cell">Web</th>
</tr>
</thead><tbody class="mdc-data-table__content"><tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">Font size unit</td>
<td class="mdc-data-table__cell">sp</td>
<td class="mdc-data-table__cell">pt</td>
<td class="mdc-data-table__cell">rem</td>
</tr>
<tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">Conversion ratio</td>
<td class="mdc-data-table__cell">1.0</td>
<td class="mdc-data-table__cell">1.0</td>
<td class="mdc-data-table__cell">0.0625</td>
</tr>
</tbody></table>

轉換範例

<table class="mdc-data-table__table"><thead><tr class="mdc-data-table__header-row">
<th class="mdc-data-table__header-cell">Android</th>
<th class="mdc-data-table__header-cell">iOS</th>
<th class="mdc-data-table__header-cell">Web</th>
</tr>
</thead><tbody class="mdc-data-table__content"><tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">10sp</td>
<td class="mdc-data-table__cell">10pt</td>
<td class="mdc-data-table__cell">0.625rem</td>
</tr>
<tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">12sp</td>
<td class="mdc-data-table__cell">12pt</td>
<td class="mdc-data-table__cell">0.75rem</td>
</tr>
<tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">24sp</td>
<td class="mdc-data-table__cell">24pt</td>
<td class="mdc-data-table__cell">1.5rem</td>
</tr>
<tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">60sp</td>
<td class="mdc-data-table__cell">60pt</td>
<td class="mdc-data-table__cell">3.75rem</td>
</tr>
</tbody></table>

網頁瀏覽器根據根元素大小計算 REM ( the root em size )，現代網頁瀏覽器的默認預設值為 16px，因此轉換為 SP_SIZE/16 = rem。

---

### 字母間距單位

以下單位用於在 UI 中分隔字母。

<table class="mdc-data-table__table"><thead><tr class="mdc-data-table__header-row">
<th class="mdc-data-table__header-cell">Platform</th>
<th class="mdc-data-table__header-cell">Android</th>
<th class="mdc-data-table__header-cell">iOS</th>
<th class="mdc-data-table__header-cell">Web</th>
</tr>
</thead><tbody class="mdc-data-table__content"><tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">Letter<br>pacing unit</td>
<td class="mdc-data-table__cell">em</td>
<td class="mdc-data-table__cell">pt</td>
<td class="mdc-data-table__cell">rem</td>
</tr>
<tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">Conversion<br>ratio</td>
<td class="mdc-data-table__cell">(Tracking from Sketch / font size <br>in sp) = letter spacing</td>
<td class="mdc-data-table__cell">1.0</td>
<td class="mdc-data-table__cell">(Tracking from Sketch / font <br>size in px) = letter spacing</td>
</tr>
</tbody></table>

字母間距範例

<tbody class="mdc-data-table__content"><tr class="mdc-data-table__row">
<td class="mdc-data-table__cell">(.2 tracking / 16sp font size) = 0.0125 em</td>
<td class="mdc-data-table__cell">-0.1 pt</td>
<td class="mdc-data-table__cell">(.2 tracking / 16px font size) = 0.0125 rem</td>
</tr>
</tbody>

---

## 應用文字量表

文字量表在元件和整體佈局中顯示為文字。 文字屬性可以將自定義值用於字體、字型、大小寫、大小和字母間距。

![應用文字量表](https://lh3.googleusercontent.com/yRaupqM8hYUGyfFCwS0dQRTMBhaY_JkknjoafHHdfwbkmlkQq4lG5nvKUm7KQvs-px4KSfQoblTkv5naE4JuuaVIhKwoTkajzs4b3g=w1064-v0)

<ol class="annotation">
   <li>文字量表值</li>
   <li>實際值</li>
</ol>

---

### 標題

在文字量表中，標題的範圍是 1 到 6。標題是螢幕上最大的文字，保留給簡短、重要的文字內容或數字。

對於標題，您可以選擇一種表現字體，例如顯示字體，手寫字體或腳本樣式。這些具細節及複雜性的非常規字體設計有助於吸引眼球。

![標題 2 使用的顯示樣式。](https://lh3.googleusercontent.com/5v_5dscOcC_t6qhIa6EBx384ZE_kf_21z_SgtWK0R7XfB7yv-lifvreK-PFycq-WluF_Sd3i2fY1Mb1HnxgFuIJGj21pAPTBzWwHNQ=w1064-v0)

<p class="annotation">標題 2 使用的顯示樣式。</p>

![標題 3 使用了手寫樣式。](https://lh3.googleusercontent.com/2lWZ6Ahu02DOglj5HL72tWdrPajnRMmMj266d8AEPRNhda-qiylOkHJYUOvGQ_6k6wF43T2l5Z7VOijl-oCE7RrMCeG5fTPi7Cq3=w1064-v0)

<p class="annotation">標題 3 使用了手寫樣式。</p>

襯線或無襯線字體非常適合標題使用，特別是在小尺寸的情況下。

![標題 6 使用了無襯線樣式。](https://lh3.googleusercontent.com/3Xs_CmHUhcoYLCqnidc65SvcyXDYBRstqqmLEGSIGHdoqpQdqaymuvDpFjzG-63pchgIpJa_nba2mUeric3HVA6XuKPjAhEzUCzQOzk=w1064-v0)

<p class="annotation">標題 6 使用了無襯線樣式。</p>

[Expressive fonts](https://fonts.google.com/?category=Display,Handwriting)

---

### 副標題

副標題小於標題。它們通常保留給長度較短的次要文字。副標題使用襯線或無襯線字體都很合適。

![副標題 1 使用了無襯線字體。](https://lh3.googleusercontent.com/cOCgRFtyykLMBErWunvMiZExSBaU9qvjGGKvvP1uLmox8mlY0RgMgxlw97ovL93N9-sTs56S5p2didECtRb-uTd1RZMv_lZF4yUkJA=w1064-v0)

<p class="annotation">副標題 1 使用了無襯線字體。</p>

對於副標題，在使用表現型字體時，請謹慎使用，包括顯示字體、手寫字體和腳本樣式。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/p4zqWV1SlPYNSZDj3OZ9sKwFUFqD0hYon2utjNqzC_j7A4kWMsfGNspL7dzEnM8n0R50QO6ebcoAKQveSZ-YlG4Q4-SCb4quOCM9JXI=w1064-v0" alt="">
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <p class="annotation">副標題中使用表現型字體時請多加注意。</p>
</div>

[Sans Serif fonts](https://fonts.google.com/?category=Sans+Serif)

---

### 正文

正文文字的範圍是 1-2，通常用於長格式書寫，因為它適用於小尺寸的文本。對於較長的文本部分，建議使用襯線或無襯線字體。

![正文 1 使用襯線字體](https://lh3.googleusercontent.com/aMEdZZ8Fi-kzI7NN8SsBpYvsYoSVesbJpCoFTOpIrew3lul1LT_ILjimXHIxDHgX1WPl-r1wMZR5ZWDtJsbx5V78hrxu4VslxQAvhQ=w1064-v0)

<p class="annotation">正文 1 使用襯線字體。</p>

![正文 2 使用了無襯線字體](https://lh3.googleusercontent.com/NfoH2gtE7JdDzoHWS_bEvJ3bt5N-623dJ1Ah3MZfJTCyQX7UrWpdvhHDYWN1KU3e3qc9gZFaWMoIdAcwVDHwOgRZVXi7CK5-hxMq=w1064-v0)

<p class="annotation">正文 2 使用了無襯線字體。</p>

請勿在正文中使用表現型字體，包括顯示字體、手寫字體和腳本樣式。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/nxHoZ-s4mFgz6RJkN-GtofeHRip2GjqYqZTnqxQyAFf_10i26ofadMbLTYlIhjG6YZngDHeo0aPiWz5JWBzdD7pmMFpOzqR__zdz=w1064-v0" alt="">
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">請勿在正文中使用富於表現力的字體。</p>
</div>

[Serif fonts](https://fonts.google.com/?category=Serif)

---

### 標題和上劃線

標題和上劃線文本（上方有一行的文字）是最小的字體大小。它們很少用於圖片的註釋或引入於標題。

![用於字幕的襯線字體](https://lh3.googleusercontent.com/gNyA10AAUtmaZJ8R3tLZOf25FJ-bFjhGXrCgfEpAh-DJr7cOTK3INni-6h0uGj4UcH79dyrVeAU5oXaioTs1566O9li5W-eGeShgfg=w1064-v0)

<p class="annotation">用於字幕的襯線字體。</p>

![一種無襯線字體，用於上劃線](https://lh3.googleusercontent.com/JqKXeWs8VlV3oB8uX2E1ch-A-Edu62K2Z_GfgNBKN_yh4RVSKwk4xLYzCQ5vuw_7m-JXmT_-OYdCJkS9uxDk9WG41s5pY-VD1fPIEQ=w1064-v0)

<p class="annotation">一種無襯線字體，用於上劃線。</p>

請勿使用表現型字體，包括顯示、手寫和腳本樣式作為標題或上劃線。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/KwbaV1rhLcKb_xZNfAP7scGDT5hWXOAeTcodLc2SBhtXN4yEn_Hc_ODgqzPA7C-QIfMahslB3CJRMENlvGk2NI6FFe8_Ax4IC5hA=w1064-v0" alt="">
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">請勿在上方使用表現型字體。</p>
</div>

[Serif fonts](https://fonts.google.com/?category=Serif)

---

### 按鈕

按鈕文字是由不同類型的按鈕（例如，文字按鈕，外框按鈕和填充按鈕）以及選項卡、對話框和卡片使用的號召性用語。

按鈕文字通常是全大寫無襯線字體。

![全大寫無襯線字體用於按鈕](https://lh3.googleusercontent.com/y7Sq4lrxar7FcCkz5PX3JP0JfauUjkAnbwQxpxVjVgtalNCNbPzby7yBC-gvzNXF6r3A181UTLhadnDp0Sy_Pz4n2yiyL3JXW68RzA=w1064-v0)

<p class="annotation">全大寫無襯線字體用於按鈕。</p>

按鈕文字可以是句子、無襯線字體或襯線字體。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/yGnBcNF73evCa6AzYhjuCN-9O6InrJJ38TQDNdeMzpANSSK5K5pm7yoynY3p8r3ZnUHoGnEbVAkDhmIGI6WpTjlrAtjj2z3GRKEcDgQ=w1064-v0" alt="">
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <p class="annotation">當按鈕文字看起來與非交互式文字（例如，按鈕上的此上下部無襯線字體）不同時，請格外小心。</p>
</div>

不要將表現字體用作按鈕文字，包括顯示、手寫和腳本樣式。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/B4SWXAbwskDSEZWeFFmL5JLGrvFS2KFH54bHmZ-bxNvJmMyl4DKioBuihkVU4aYEcxFIVB6AvcXw7ytG_tyEv8aOsLMsD8S8WTSLzw=w1064-v0" alt="">
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">要對按鈕文字使用顯示樣式。</p>
</div>

[Sans Serif fonts](https://fonts.google.com/?category=Sans+Serif)

---

> 譯者：Guy Chien
>
> 校稿：Joanne Chen
