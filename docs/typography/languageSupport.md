---
title: 語言支援
description: 語言的字體大小和顯示樣式是根據其字符的英語字體、高字體或粗字體。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 語言支援

語言的字體大小和顯示樣式是根據其字符的英語字體、高字體或粗字體。

---

## 語言注意事項

### 字形

每種書面語言都使用自己稱為字形的字符集。

如果您的 UI 使用多種語言，則版型佈局應根據語言而有所不同。每種語言具有不同的平均字體長度和高度，從而影響其在 UI 中的顯示方式。

![字型](https://lh3.googleusercontent.com/-bjjyMgS4qUzArgOhqT_PzaU8yPhrzFJOci2HvVZ0bXSc_KzPb1QR1nKeG3ypGtKQCR5iwGepl8rRDpcCcJHvu5ev7BK5F7FZTQsdg=w1064-v0)

<p class="annotation">字型排版</p>

---

### 字長

 字長會因語言而異，即使使用類似字形的語言（如英語和德語）也是如此。

![字長](https://lh3.googleusercontent.com/uOlL6-RE3gWQ8t2GOuFhvOhYMnc37NUpqANrd7CXlR_n5QVi2-pCHdedYczGV0OwowuRz7Syg9vFGS5oZJwVH8qKR9kvNf12LgKsyw=w1064-v0)

<p class="annotation">英語通常比其他歐洲語言短。例如，德語有許多複合詞，它們較長，需要更多的行或行間距。</p>

---

### 對齊

某些書寫系統（如阿拉伯語和希伯來語）書寫方式是從右至左。 在相同的字體大小下，這些字體可能看起來比拉丁字體小，因此需要調整行距和對齊方式，以使字體能在 UI 中能跟其他語言能搭配。

![對齊](https://lh3.googleusercontent.com/iqXWflOao50waPm_UruSYImQtmjSehrg6-R7jLrGoCYe2BBSo6i4kPm7zlv4YKKDwC77QlIX4sHrlk9btbZ7ZzVB1u5-jos1l3-zxgA=w1064-v0)

<p class="annotation">希伯來語對齊方式是從右至左</p>

### 高度

許多書寫系統比英語需要更多的垂直空間，因此您的 UI 應該為這些不同的系統提供足夠的垂直空間。

![字高](https://lh3.googleusercontent.com/eRJixkMOyODb1OUkz7CIXo093QUWnLpBf8D3sXOQj-vaeqcBVOLQ2Iza3iPM7JDyuz0f3UBv7QCIv-P0fGBst8zR7YKAD3Wj5K5n7g=w1064-v0)

<p class="annotation">越南語是用拉丁語書寫的，但其口音會增加某些字母的高度，例如ớ。</p>

### 垂直排版

垂直排版雖然很少使用，但可以垂直顯示字符，而不是水平顯示。

中國、日本和韓國的版式通常是等距字型，這意味著每個字母所佔的空間與其他字母所佔的空間相同。 它通常設置為從左到右，從上到下。 也可以垂直設置：從上到下和從右到左。

![垂直排版](https://lh3.googleusercontent.com/fAyrqSlZjbWw2HYC7uoZUzW2a1xkRgqf7K0ZU7gHKTlYzFzkMZkNjwsoEsrrK2aknQo2_J3iIkkEJD-TS_LwmYcizogoVEJ0JYGuGA=w1064-v0)

<p class="annotation">水平排版和垂直排版</p>

---

### 語言選項

當同一個 UI 需要使用不只一種字體和書寫方式來呈現多語言內容。

書寫系統可以分為三類：

- 英文字體
- 高字體
- 粗字體

### 英文字體

西歐、中歐和東歐以及非洲大部分地區的語言通常以拉丁字母書寫。越南語是一個明顯的例外，因為它使用了拉丁文字系統的本地化形式，但其帶重音的字形可能比西歐語言中的字形高得多。希臘文和西里爾文的書寫系統與拉丁文非常相似。

### 高字體

需要額外的行高以容納更大字形的語言字體，包括南亞、東南亞和中東語言，例如阿拉伯語、北印度語、泰盧固語、泰語和越南語。

### 粗字體

需要額外的行高以容納較大字形的語言字體，包括中文、日語和韓語。

---

## Noto 字型標準

Noto 是所有 Roboto 字型未包含的語言的預設字型。源自於 Droid，它的設計主旨是在高度和筆觸粗細兼容的情況下，實現語言和字體視覺上的和諧。

在版本 6.0 中，該字型家族已定義93種字體。

### 粗體字體注意事項

Noto 中文、日文和韓文（CJK中，日韓統一表意文字）有七種字體厚度

小於標題樣式的字體應調整拉丁字體的比例。

![中文和日文](https://lh3.googleusercontent.com/pVIYjxOncKBIh_vYAej52QNWKXC9FnOwJN13FRJjp-iFPlKpae2LUyPGeT679lWw8reuOVVzosU4OyuBujRtzta9dzTjcXY-4XmY=w1064-v0)

<p class="annotation">中文和日文</p>

行高略大於拉丁字符。
![中文和日文的行高對比](https://lh3.googleusercontent.com/z2wUG0PY2QI-7Dqoa70UudeT-pX5l2B4TlpiB_NfCPxwnrEC10v7u7JcVV75cpNlQRDiz5r7065JZSPqDUXC0PmwhjaICziKiJhykQ=w1064-v0)

<p class="annotation">中文和日文的行高對比</p>

### 高字體注意事項

Noto 支援南亞，東南亞和中東語言（包括阿拉伯語，北印度語和泰語）中使用的高字體。 請使用常規字體厚度，因為 Noto 中沒有中等厚度。請避免使用粗體，因為粗體太厚。

小於標題樣式的字體應調整拉丁字體的比例。

![泰文和梵文](https://i.imgur.com/tEvMtBB.png)

<p class="annotation">泰文和梵文</p>

高字體的行高略大於拉丁字符。

![泰文和梵文的行高對比](https://lh3.googleusercontent.com/E90qjqt_nCzfIDqjn9ZU-nee2iKgBJ8QtjizsgMTtjBSWjT0TF2dL83RuijR9D4RwXVdacH9XRXNz99Gj5kfUotZ_64N5OtZeKOCMw=w1064-v0)

<p class="annotation">泰文和梵文的行高對比</p>

---

## 語言類別參考

### 語言類別參考

為了便於國際化，Google 將語言分為三類：英語字體、高字體和粗字體。

英語字體：拉丁語（越南語除外）、希臘語、西里爾字母、希伯來語、美尼亞語和格魯吉亞語。

高字體：語言字體需要額外的行高才能容納較大的字形，包括南亞、東南亞和中東語言，例如阿拉伯語、北印度語、泰盧固語、泰語和越南語。

粗字體：語言字體要求額外的行高以容納較大的字形，但度量標準與高字型不同。包括中文，日文和韓文。

| 編碼 | 描述   | 類別     |
| ---- | ------|-------- |
| af   | 南非語 | 英語字體 |
| am | 阿姆哈拉 | 英語字體 |
| ar     | 阿拉伯文（現代標準）     | 高字體     |
|az|阿塞拜然|英語字體|
|bg|保加利亞|英語字體|
|bn|孟加拉|高字體|
|ca|加泰羅尼亞語|英語字體|
|cs|捷克|英語字體|
|cy|威爾士語|英語字體|
|da|丹麥語|英語字體|
|de|德語|英語字體|
|el|希臘語|英語字體|
|en|英語（美國）|英語字體|
|en-GB|英語（英國）|英語字體|
|es|西班牙語（歐洲）|英語字體|
|es-419|西班牙文（拉丁美洲）|英語字體|
|et|愛沙尼亞語|英語字體|
|eu|巴斯克語|英語字體|
|fa|波斯語|高字體|
|fi|芬蘭語|英語字體|
|fil|菲律賓語|英語字體|
|fr|法語（歐洲）|英語字體|
|fr-CA| 法語（加拿大）|英語字體|
|gl|加利西亞語|英語字體|
|gu|古吉拉特語|高字體|
|hi|印地語|高字體|
|hr|克羅地亞語|英語字體|
|hu|匈牙利語|英語字體|
|hy|亞美尼亞語|英語字體|
|id|印尼語|英語字體|
|is|冰島語|英語字體|
|it|意大利語|英語字體|
|iw|希伯來語|英語字體|
|ja|日語|粗字體|
|ka|喬治亞語|英語字體|
|kk|哈薩克語|英語字體|
|km|高棉語|高字體|
|kn|康納達語|高字體|
|ko|韓語|粗字體|
|ky|吉爾吉斯語|英語字體|
|lo|寮國語|英語字體|
|lt|立陶宛語|英語字體|
|lv|拉脫維亞語|英語字體|
|mk|馬其頓語|語字體|
|ml|馬拉雅拉姆語|高字體|
|mn|蒙古語|英語字體|
|mr|馬拉提語|高字體|
|ms|馬來語|英語字體|
|my| 緬甸語|高字體|
|ne|尼泊爾文|高字體|
|nl|荷蘭語|英語字體|
|no|挪威文|英語字體|
|pa|旁遮普語|高字體|
|pl|波蘭語|英語字體|
|pt|葡萄牙語（巴西）|英語字體|
|pt-PT|葡萄牙語（歐洲）|英語字體|
|ro|羅馬尼亞語|英語字體|
|ru|俄語|英語字體|
|si|僧伽羅語|高字體|
|sk|斯洛伐克語|英語字體|
|sl|斯洛文尼亞文|英語字體|
|sq|阿爾巴尼亞語|英語字體|
|sr|塞爾維亞文（西里爾文）|英語字體|
|sr-Latn|塞爾維亞文（拉丁文）|英語字體|
|sv|瑞典語|英語字體|
|sw|斯瓦希里語|英語字體|
|ta|泰米爾|高字體|
|t|泰盧固語|高字體|
|th|泰文|高字體|
|tr|土耳其語|英語字體|
|uk|烏克蘭語|英語字體|
|ur|烏爾都語高字體|
|uz|烏茲別克語|英語字體|
|vi|越南文|高字體|
|zh-Hans|中文 (簡體)|粗字體|
|zh-Hant|中文 (繁體)|粗字體|
|zu|祖魯語|英語字體|

---

> 譯者：何羅賓
>
> 校稿：Joanne Chen
