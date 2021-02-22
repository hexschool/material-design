---
title: 間距方法
description: 間距方法使用基線網格、關鍵設計線（keylines）、內距和增量間距來調整比率、容器和接觸目標。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 間距方法

間距方法使用基線網格、關鍵設計線（keylines）、內距和增量間距來調整比率、容器和接觸目標。

## 基線網格

### 8dp 網格

所有元件均與手機，平板電腦和桌機的 8dp 正方形基線網格對齊。

![8dp 網格](https://lh3.googleusercontent.com/uinGeklHxk33_lRawJUwCctxCz3QZXhpdYP27NaX8oFG_UmecEl56Ww9WK3qMmTc_dHAXcNFXyINLRHbJinylMuivSmjkTA6BNvyig=w1064-v0)

<p class="annotation">功能列和浮動按鈕與 8dp 網格對齊。</p>

---

### 4dp

元件中的圖標，文字排版和某些元素可以對齊 4dp 網格。

![4dp 網格](https://lh3.googleusercontent.com/Cqdbcwkst0ekoN9nILUviSkOPFgz0l3-QNgboUrPZeYG4kG6SQ8-7K2juhT-GaOhP7OF7vKe87Y5oXl6p2OoE_EYu5pLzc6J5rMhag=w1064-v0)

<p class="annotation">底部導覽列的元素與 4dp 網格對齊。</p>

---

### 4dp 基線網格

字體與 4dp 基線網格對齊。

![4dp 基線網格](https://lh3.googleusercontent.com/K_UG3A7jm8zmsW9BDuifTUTZDUeJK9YV3vcF8nELPdaozCGvAlJjev3Agvf43_84Nh9X7TR5ACGbFirQWLoWStPNivlA5u_RvTYdNA=w1064-v0)

<p class="annotation">4dp 基線網格</p>

當字體在元件內置中時，其可以超出 4dp 網格之外，如按鈕或列表清單。當放置在網格外部但在元件內居中時，文字仍可以垂直居中對齊。

![垂直對齊](https://lh3.googleusercontent.com/Ryi55q2xjGwPEk9-VizBHTzmDtwfHnYRz3L5n9wfm8q7IgwqdWo7ilisFZpZcMYFCAJwef3XiHr8RC7rCgU07Tenyg_K8p36kFehkw=w1064-v0)

<p class="annotation">文字顯示為垂直置中對齊於列表清單的中心，儘管該排版位於 4dp 網格之外。</p>

---

## 間距

### 間距方法

間距方法比響應式佈局網格更精細。它是一組關於如何放置元素在佈局與元件上的規則。

<div class="img-grid">
    <div class="grid-item-triple">
        <img src="https://lh3.googleusercontent.com/7oz4_mqkzr-lmSZciE3t7-ypIohWtD9k5cgVBNgt_SlCSRgSZV3NP6y8-HFLzOapEwJNJ5tcenFYtne2DeSdLrwa9TRWl6Wbxnv4=w1064-v0" alt="">
        <h4>內距</h4>
        <p>內距是元件中元素之間的空間。</p>
    </div>
    <div class="grid-item-triple">
        <img src="https://lh3.googleusercontent.com/fpL1dTOlSo2gc1ajP2msg1goP9LYCVEQ5Ikv5xaUkSnKAm_9tDy6AqXdjHZUHEuLjn4nnSBllpoBhRtasY26q8lgAtgFOPYmEtPAwg=w1064-v0" alt="">
        <h4>尺寸</h4>
        <p>尺寸指的是元件中元素的寬度和高度。</p>
    </div>
    <div class="grid-item-triple">
        <img src="https://lh3.googleusercontent.com/PHRyk0W-Eb00cZ0AtrxXMvQczskDEIZzUDBHZHem3JU-ct6bGmt4rT5PWeP5JuNjl1KBDoZ4achUDCCDkoH7gQtCGb35X2jritte=w1064-v0" alt="">
        <p>帶有加號圖示與內距的按鈕</p>
        <h4>對齊</h4>
        <p>對齊與元件中元素的放置位置有關。</p>
    </div>
</div>

---

### Padding

Padding 是指 UI 元素之間的空間。它是之於基準線的另一種間距方法，以 8dp 或 4dp 的增量進行測量。

Padding 可以在垂直和水平方向上進行測量，不需要跨越佈局的整個高度。

![image alt](https://lh3.googleusercontent.com/uLOWkiGXp0rKOvpk1GY6p1ogxbCp31lmeDa23c_HIjsc4OBI_6cKNgXtOWBJJ6awV7QokMcXAKNuJLr1IOlc39DKv65MvV_s-zoNwNw=w1064-v0)

<p class="annotation">元件之間有 24dp 內距的佈局。</p>

### 尺寸

尺寸指的是元件中元素的寬度和高度。

某些元件，像是功能欄功能列或列表，僅概述元素的高度。這些元素的高度應與 8dp 網格對齊。它們並沒有特定寬度，因為它會受到響應式的視窗寬度影響。

![尺寸](https://lh3.googleusercontent.com/aI-9g5bMKLQVPquLTGARrO5UBuUeSbOUN8wA2spP7C86xGA-eIDhm_sMmwddVapYfV422RWJzg1ULUHdppKcX1hd-qg1axw0ahh7jw=w1064-v0)

<ol class="annotation">
    <li>狀態欄高度：24 dp</li>
    <li>功能列高度：56 dp</li>
    <li>清單項目高度：88 dp</li>
</ol>

---

### 對齊

對齊與元件中元素的放置位置有關。

![對齊](https://lh3.googleusercontent.com/mQ64ispggPXYuhYJlWNMlpvtGXt4IfoqZ4Ns2BbfVKMRnOYz_InNGSL4uMLWQGqfrLv_8qVppUhrBxNLqS3Vujs7axZrmkibajWH=w1064-v0)

<ol class="annotation">
    <li>網格佈局</li>
    <li>對齊</li>
</ol>

#### 關鍵線（keylines）

關鍵線是一種能將元素一致放置於 [網格佈局](https://material.io/design/layout/responsive-layout-grid.html#columns-gutters-and-margins) 之外的對齊工具。
它們是垂直線，當元素不與網格對齊時，用來顯示放置元素的位置。關鍵線取決於每個元素與螢幕邊緣的距離，並以 8dp 的增量進行測量。

![關鍵線](https://lh3.googleusercontent.com/SrezdvoaTp-k9fPW-trPeBrnXWR3FNdQxrQWN6E0YKQlcQqQ6d6H4VNFt5r9Qzc7_3XXEdnVqQm25BX7dt9G7VqYCNZ43v6cO8JihA=w1064-v0)

<ol class="annotation">
    <li>網格佈局</li>
    <li>關鍵線（keylines）</li>
</ol>

關鍵線（keylines）可以在排版中的元素之間建立更多或更少的空間。它們可在每個斷點範圍內調整。

![關鍵線](https://lh3.googleusercontent.com/Z4ViFg5sBrSdePmPokknAZWzG3-NKHnSf5EpbIP4JCj9wkvF2B6JwQ2ZKa3QFcpWjWmI1Sh0pEUNK8FfW_eDJVz_JWYmyPQVGC1t5Q=w1064-v0)

<p class="annotation">關鍵線（keylines）可以擴大或縮小元素之間的空間。</p>

## 容器和比例

### 容器

容器是用來表示封閉區域的形狀。容器可以容納 UI 元素，例如圖片，圖示或平面。

![容器](https://lh3.googleusercontent.com/_jkgGGDxbyGkDUREedXaaW4gUTKAqNPvEW6whJGW3I1Rsk9qbexseRBAnktFl8qGgfG-W6sJGoOIX5ZWsocDZ-FXk8tN4rOv7spo=w1064-v0)

<p class="annotation">200%</p>
<ol class="annotation">
    <li>圖片容器</li>
    <li>圖示容器</li>
    <li>平面容器</li>
</ol>

容器的大小可以是固定的，並限制其中的元素大小或裁剪元素。或者，容器的大小也可以很靈活且隨著內容物大小而改變。

![容器大小](https://lh3.googleusercontent.com/1XH1o0noP4x_eITdlm-rfXxDFNhiCDrZXxmFU4zTIkFOmcFx2NKSswAHg4RY1a_bT4uEw7H-rv2Csr5O4vVALFh0xBroCvet5r7QhN4=w1064-v0)

<ol class="annotation">
    <li>裁剪原始圖片的固定容器。</li>
    <li>靈活的圖片容器，可以縮放以容納原始圖片大小。</li>
</ol>

### 長寬比

長寬比是元素的寬度與其高度的比例。長寬比寫為 width：height。

為了保持佈局的一致性，請對圖片、介面和螢幕尺寸等元素使用一致的長寬比。

建議在您的 UI 中使用以下長寬比：16:9; 3:2; 4:3; 1:1; 3:4; 2:3

![長寬比](https://lh3.googleusercontent.com/VoBz_lg0Fh9t9YeWa4v1EvMfBqXtnXkgOKA5Wc51sU6pFDHhKkWPfrfFHPeMwtd4G4LQ5B9eSZKQNjXOsQH0gV02HpQYADd4eSK5og=w1064-v0)

---

### 彈性比例

彈性的比例大小由排版網格決定：

- 容器的寬度由螢幕解析度決定，並逐漸填滿可用的最大空間
- 容器高度取決於容器中的圖片高度

使用彈性比例讓內容決定容器高度。

![彈性比](https://lh3.googleusercontent.com/uwxkWXpdEpoIPz4dUWTu3Slb17UjbDiIW2soKPiTY7JKDu0l38H1Y4JsMuIVgv7BQrz4C_HyeFQi4EdHfcTDDDMYSG9cmS6sBn-FpQ=w1064-v0)

<p class="annotation">容器寬度由排版網格中的欄寬確定。</p>

---

### 響應式剪裁

要運用響應式來顯示圖片，請先定義圖片在不同斷點內被剪裁的方式。在不同的斷點範圍內，剪裁可以：

- 保持一個固定比例
- 適應不同的比例
- 固定圖片高度

#### 保持一個比例

在斷點範圍中，圖片尺寸可以保持固定的比例。

![保持比例](https://lh3.googleusercontent.com/kFP94SNxZnEdxq_IgGzVHMVEpob2wuzycwbm69Wgm1fHoPcFA19i0Cmc2votk2w9RwSYqKKVmANdvRDHfgIqaOaZfiefE3yCoEOc-wA=w1064-v0)

<p class="annotation">50％<br>UI 中的圖片在斷點之間保持 3：2 的比例。</p>

#### 適應不同的比例

圖片比例可以適應不同的斷點範圍。

![適應不同比例](https://lh3.googleusercontent.com/4qaK79Dr80-eHWPxi93Y2iDEby21ETywNNPPtgThZcSz5yBIw_gxUR3dz6EEZypWQeQK13l8nmnqHXRVe0-RLOjF4MSWb4Z4OEE3=w1064-v0)

<p class="annotation">50％<br>斷點之間的圖片比例從 1：1 變為 16：9。</p>

#### 固定圖片高度

圖片的大小可以在斷點範圍內保持固定高度與彈性寬度。

![固定圖片高度](https://lh3.googleusercontent.com/lQteTxA5pZzhyyvJexW86V7XXIEK_rL3xWkS_9fKmUsZxJFDfgiDQPbFb5lDu9ATCnbMwkBWPt_XvEImxDrO8eJ4qfqFp3xNa8Ss=w1064-v0)

<p class="annotation">50％<br>當斷點間的寬度是可變時，圖片保持固定的高度。</p>

---

## 觸控目標

觸控目標適用於同時接收觸控輸入和非觸控輸入的任何設備。
為了平衡資訊密度和可用性，觸控目標應至少為 48 x 48 dp，目標間的距離至少為 8dp 。

![觸控目標](https://lh3.googleusercontent.com/zZyeNTZN0HzV8sSnlM8LA6HFDT6qtYdhOCyBzMg2t01SQZB7Vhz4ElPgWxxvHer_5l82Rz7fcq90jlzXHiTPynq8o6QAvqDNVAGYMg=w1064-v0)

<p class="annotation">觸控目標最少為 48 x 48 dp</p>

---

> 譯者：[王郁雯](https://www.facebook.com/1555116233/)
>
> 校稿：[Joanne Chen](https://www.facebook.com/profile.php?id=100000314569800)
