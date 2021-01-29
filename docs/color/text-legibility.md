---
title: 文字易讀性
description: 顏色在文字易讀性扮演著重要的角色。
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 文字易讀性

顏色在文字易讀性扮演著重要的角色。

---

## 易讀性標準

### WCAG標準

所有的文字需要清晰易讀，並且符合無障礙網頁內容指引的標準。
要達到 [The Web Content Accessibility Guidelines (WCAG 2.0)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) AA等級的話，以一般大小文字來說，文字跟背景的顏色對比須為 4.5:1，而較大文字的顏色對比則為 3:1。

想知道更多關於顏色、對比，以及無障礙設計，請閱讀 Material Design 當中的[輔助功能章節](http://localhost:8080/usability/accessibility.html)。

---

## 文字背景

### 彩色背景時的文字

建議當淺色背景時使用黑色文字，當深色背景時使用白色文字。當應用程式同時有淺色與深色主題，請確保每個主題的文字與背景皆有對比的顏色呈現。

彩色背景或版型也會改變關於文字不透明度以及文字不同狀態的規則

---

### 使用文字不透明度

與其在彩色背景上使用灰色文字以及圖示，不如透過不透明度較低的白色或黑色文字以達到更好的對比度。

例如，在綠色背景下使用不透明度 75% 的黑色文字，並隱含些許綠色色彩。

或者，您可以透過以下方式來計算文字顏色:

- 將不透明度較低的黑色置於綠色背景前
- 確認所得出深綠色的 hex 色碼
- 以此 hex 色碼作為文字顏色。

在此情況下，若是文字後方的背景變更了顏色，則須更新 hex 色碼。

![image alt](https://lh3.googleusercontent.com/XGz9lqgpQX8TdWv0JMQoQEm4dBuAhfhpSIp7aY3H7o6vG4WIwBYLyKVPLx0s8rUzUmikvyJiK9lbbW1Lab9KXgAhKoehgd_9Z4rU=w1064-v0)

> Do
在彩色背景上使用具透明度的黑色版本文字以保持易讀性。

![image alt](https://lh3.googleusercontent.com/v1QtlEpSYx4uN3zxRoVrb4FxHMPIGJ1o1CZ1m2MeQVxRnLpAeOh_J5R5kZ0t5e16Wc8-qgBCQ9xt0KTtDCBhUlLOSezERDcnioViDg=w1064-v0)

> Don't
避免在彩色表面上使用不清楚的不透明灰色文字。

---

### 淺色背景上的深色文字

淺色背景上的深色文字（此處顯示為 #FFFFFF 上的 #000000）適用於以下的不透明度等級:

* 高強調文字使用 87% 的不透明度
* 中強調文字以及提示文字使用 60% 的不透明度
* 禁用文字使用 38% 的不透明度

![image alt](https://lh3.googleusercontent.com/inOFr85C_oP1MCo53W9NlmgzCpMuK7RYMln95UEuON0I7woFQArEZ2JJtOpGX_hCiBGUwCxy4rEUf5qky64RTVpvsh1Kq28ZPGrccg=w1064-v0)

---

### 彩色的文字與背景

應謹慎使用彩色文字來引起注意並搭配選擇性的強調。理想情況下，標題文字、按鈕，以及連結將具有色彩。

使用 [Material 色彩工具](https://material.io/resources/color/#!/?view.left=0&view.right=0)確定文字上使用的前景色與背景色是否能通過易讀性標準。

![image alt](https://lh3.googleusercontent.com/ICfVtbkTc7Q2SbWy1PSKW-9W8pTJ5GsDfXysd8WfcwmLvOH-rm67iOd-rz1rJUJZH03jtDDNcN0h5ehgrtWydjREAbTCE2pwlQSLrw=w1064-v0)

> Do
大標題和文字摘要最適合彩色文字。

![image alt](https://lh3.googleusercontent.com/OFc4jhJXzSQiFTYdryLmuqZX0nlU-g56JA2oO7T2d7I31q0blIeECPIU90vzYdjUoOobxL55AHzxXw4ddxvwuZC3YGodbK6ZD5Bp4A=w1064-v0)

> 注意
較難閱讀彩色的正文內容。

---

## 文字類型

### 輔助文字

輔助文字提供關於輸入欄位的訊息，例如如何使用輸入。其可以引用品牌顏色，但必須要符合網頁無障礙指南所制定的規範以確保清晰可辨。

例如: 淺色背景上的輔助文字可以適用以下的不透明度等級以及預設的 hex 色碼:

- 高強調輔助文字：此文字使用 hex 色碼 #000000 並帶有 87% 的不透明度。
- 預設輔助文字：此文字使用 hex 色碼 #000000 並帶有 60% 的不透明度。
- 預設表示錯誤的輔助文字：此文字使用 hex 色碼 #B00020 並帶有 100% 的不透明度。

![image alt](https://lh3.googleusercontent.com/dkOD-TYNQKx9Ht9bRDqnLB58ShKMsHg4GR0d9LOYqupa9VtXySI7Vwbc_fqXK3x-YQlJulk5fMpaevHJ0AYQh2Qw4oPYqSEZQgMbbA=w1064-v0)

---

### 選取文字

為了凸顯品牌，在文字選用上可以使用主要或次要的品牌主題色。

所選取的文字應與選取的顏色相對清晰，選取的顏色應與背景顏色形成對比。或者，您可以顯示輪廓，動畫，選取標記圖標或其他文字處理方式以指出所選取的文字。

可至 [webaim.org](https://webaim.org/) 獲得更多關於對比色的資訊（或嘗試使用色彩對比度分析器）。

![image alt](https://lh3.googleusercontent.com/TlE98JOYjY8xBXOy4l8vZ88pNQytpyIFKCVT_XQJDaSPAvCdBqgrzBzBOHBOLKUdcKHin06qX7Gj4jmu8fYSBuYd6y3iiADuqM9h8Q=w1064-v0)

> 1. 一般文字
> 2. 被選取的文字
> 3. 背景

![image alt](https://lh3.googleusercontent.com/yohGgaL2tbh6rVclS2fy1JL-G1kHHraSoTpgjm7s1_oI2LU4ldwpPxCTdttBp55obdRRX58FVxvd_AOXiGUbsSJnP4kDTe9WKB0p4dY=w1064-v0)

> 被選取的文字其顏色可以客製化。

---

**圖標以及其他符號**

圖標以及其他元素不需要符合無障礙網頁的可讀性規範，但是應該要盡可能的易識別，並且指出功能或者溝通資訊。

例如，深色的圖標(#000000)或者其他於亮色背景(#FFFFFF)上的元素，可以是用下列的不透明度等級:

啟用的圖標有著87%的不透明度
未啟用的圖標有著60%的不透明度
不可啟用的圖標有著38%的不透明度
