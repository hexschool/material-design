---
title: 深色主題
description: 深色主題是一種用於弱光環境且主要顯示深色外觀的介面設計。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 深色主題

深色主題是一種用於弱光環境且主要顯示深色外觀的介面設計。

![image alt](https://lh3.googleusercontent.com/2dBw3e0xPpK37MzJ9pci2OySJiHhQCNY1RIHAYkJ5PBbBzApRNkbOgV0RCzsJw0VOOiiBxyoIc_QhbRxGiTw-DgHVc1-_NWaFJ0C=w1064-v0)

<p class="annotation">亮色主題與深色主題</p>

---

## 應用

深色主題設計用於替換預設（淺色）主題，在大多數介面上顯示深色外觀。

在弱光環境中使用深色主題時，將會按照環境光調節螢幕亮度，此主題可降低設備螢幕發出的亮度並保有顏色的最低對比度。減少眼睛視覺疲勞，改善視覺上的人體工學同時節省電池電量。

當配備 OLED 螢幕的設備啟用深色主題時，會完全關閉黑色像素，在節省電池電量上則有更好的表現。

### 原則

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/NaJQeEazoA6IoF8STGWVH-wl1qkdfDEWjSFi_CP1ptsp2FSwg77I-Sd2xCv7CQ6zu-L9QaxdGrL5XV6Fwqj0KcnBja75qZLyfurg1g=w1064-v0" alt="">
        <h4>使用深灰色</h4>
        <p>使用深灰色（而不是純黑色）來表示深度範圍更廣的環境中的高程和空間。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/36NtxuPAnn9CC8lTVRmqCN-db5NV4D6iFhPO2woH1n-kV_cCDukAYf6Me7jFpUBnq9M4Wu_zhMReZZMX4Zyape9LcyE4mxHDsksUdQ=w1064-v0" alt="">
         <h4>強調色</h4>
        <p>在深色主題的介面中，能使用的顏色有限，因此多數空間都使用深色表面</p>
    </div>
</div>

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/WxZAWpNqh5-dydIBE1HkP2x--C-xSaAbryo2fVWaOEQ20HPrpIRMdZsp-WN6ovW1rLtTfyHFalQ7eHXFxvGKx7RnIStOa4griApD=w1064-v0" alt="">
        <h4>節能</h4>
        <p>在需要提高效率的產品（如帶有 OLED 螢幕設備）中，透過減少光像素的使用來保護電池壽命。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/4LoKuRcs_ilO9Qw9Pb2kGEBbvl3flozhDxK3fBgiY9BVoqq7SfO1N14b0D049HJ_uV8tmkWQutQNHjLSWvHo94nYX3NL6j9IqD6CeQ=w1064-v0" alt="">
         <h4>增強無障礙的輔助能力</h4>
        <p>通過無障礙的輔助顏色對比度標準，讓所有用戶適應深色主題標準（例如視力不佳的用戶）。</p>
    </div>
</div>

---

### 屬性

**Material Design 深色主題由以下屬性定義：**

- **對比度：** 深色表面色和100％白色文字的對比度至少為 15.8：1
- **深度：** 元件通過顯示較淺的背景顏色在較高的高度下來展現深度
- **去飽和度：** 主色經過去飽和度處理，因此均通過至少 4.5：1 的 Web內容可訪問性指南（WCAG）的 AA 級標準
- **顏色限制：** 介面使用深色表面色及有限的強調色，（不飽和色和明亮色、飽和色）

[Understanding WCAG 2.0
](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

---

## 結構

深色主題使用者界面主要使用深色表面色和少量的色彩，使其擁有較低層級的光卻仍保持高標準的可用性。

![image alt](https://lh3.googleusercontent.com/d7uyZ5bZHGo5r7D_vn7ZI5nJs52t8f9o-fAVa-nt7pQw_s4Y5pTczetkfwDT9ZtQ1LuO0DAGFzWfaAsblwhokdP9PTNNv3S3-h_SqLA=w1064-v0)

<ol class="annotation">
    <li>底色（0dp層級表面）</li>
    <li>表面（具有1dp層級表面）</li>
    <li>主要</li>
    <li>次要</li>
    <li>於底色上的文字</li>
    <li>於表面上的文字</li>
    <li>於表面上的主色</li>
    <li>於表面上的次要色</li>
</ol>

---

## 行為

可使用以下切換開關，開啟或關閉深色主題：

- 突出顯示，用一個圖標打開或關閉深色主題
- 突出顯示，並在選單或設定中放置一個切換開關

![image alt](https://lh3.googleusercontent.com/pgTa3nA1suThryEsoRszChgrhhEFisnZ8HWA8RYC0LQUzCPXKHq-lO00N0vUNnSxklor7fNBOzAuNqPnN4jRAy4QPcTDI2gjBAC96w=w1064-v0)

<p class="annotation">頂部導覽列的深色主題切換開關</p>

![image alt](https://lh3.googleusercontent.com/HeqAR2dAKpUrUzHtrNFfdedvN1BfyanS8pf0JuEJAIpBTSqeY1jYxSUlmJIM0Xw3gAT-xj1AGRIyFgix83JBmxnvSSD03Nn-tFwxGA=w1064-v0)

<p class="annotation">下拉式選單內的深色主題切換開關</p>

![image alt](https://lh3.googleusercontent.com/j8QH5nUkKfvuNiiH8xIcH8WRZ_hd9qUB45vx--F8PIjZLLpi6jgB009AJj9JGhZYLnSsVbTfi7MPrEYT8LZEcfzdmwHEwC1AQpJR=w1064-v0)

<p class="annotation">設定中的深色主題切換開關</p>

---

## 屬性

深色主題使用深灰而不是黑色作為元件的主色彩，深灰色的表面可以更容易地看到陰影，並表現更廣泛的色彩、高度和深度。

![image alt](https://lh3.googleusercontent.com/wWTcU93BwGcU0B_pVHAUkMFj6jlM0CLPjJdax-Lv-sLo2uslQrrPSaxTEcUpGJVEA0m665bRfFgwTQX9OxQKbwqVtpinA72j4ceFcQ=w1064-v0)

<p class="annotation">深色主題推薦的表面顏色為＃121212。</p>

### 層高

在深色主題中的元件高度和陰影與預設主題中的元件一致。但在深色主題中，不同高度的表面則亮度不同。

#### 高度越高，界面越亮

元件高度越高（越接近光源），表面越亮。可透過半透明白色覆蓋表面來表現物件的層次感。

<video src="https://kstatic.googleusercontent.com/files/148f5ecca9a798a0d8815a314d14ee0ce9e4a985d587e649a2b804fe6b1ca5aee1e87ec0a33d3e93fde07cac1e3ace1f870d49212a51ae12d281309d44910fb1" width="100%" controls=""></video>

<p class="annotation">隨著元件高度的升高，顏色變得更淺。</p>

在元件表面上放置覆蓋半透明的顏色，讓表面色更亮。

![image alt](https://lh3.googleusercontent.com/QdsRbbmvyqvIxojK4GehdCTrzkWaIBTvTRL1fufWGNz0J1T63V-4dV22YYSHXRPFkDX5zl6hV4pgCFxPJvTPusBaXMYTR-60ER8rNw=w1064-v0)

<ol class="annotation">透過使用半透明的白色覆蓋層，表面變得更輕。
    <li>表面</li>
    <li>疊加</li>
</ol>

表面上的疊加層可區分組件之間的高度，並讓陰影更容易顯示。
疊加層亦可增加表面及其陰影之間的對比度，使每個表面的邊緣更加明顯。

<video src="https://kstatic.googleusercontent.com/files/9976752535996547e4486a11a5e6b17cb0dfc27541bab905752c1c9c725bc3d0d3ca91f6072752b8aff8b96f60aa5e5c4b0af474ac12c45912dce8373c6803cf" width="100%" controls=""></video>

<p class="annotation">預設主題使用陰影表示高度，而深色主題也通過調整表面色來表示高度。</p>

這些界面覆蓋值設計用於提高最大的易讀性，同時確保辨別不同高度的表面。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/MZFRD7NVPpsDPgaWSxLb_9rapm7FFMh2kp6nJuAUrIORQadQtlG5BQ5flovINSBW1fCohcC-mZsFQDpSNKPMEEv08at_zHVKHWiU=w1064-v0" alt="">
        <p>高度疊加層透明度的範圍為0％(最低級別)到16％(最高級別)。</p>
    </div>
    <div class="grid-item">
        <table>
            <tr>
                <th>高度等級</th>
                <th>白色疊加層透明度</th>
            </tr>
            <tr>
                <td>00dp</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>01dp</td>
                <td>5%</td>
            </tr>
            <tr>
                <td>02dp</td>
                <td>7%</td>
            </tr>
            <tr>
                <td>03dp</td>
                <td>8%</td>
            </tr>
            <tr>
                <td>04dp</td>
                <td>9%</td>
            </tr>
            <tr>
                <td>06dp</td>
                <td>11%</td>
            </tr>
            <tr>
                <td>08dp</td>
                <td>12%</td>
            </tr>
            <tr>
                <td>12dp</td>
                <td>14%</td>
            </tr>
            <tr>
                <td>16dp</td>
                <td>15%</td>
            </tr>
            <tr>
                <td>24dp</td>
                <td>16%</td>
            </tr>
        </table>
    </div>
</div>

疊加層可清楚區分元間之間的高度差異。

![image alt](https://lh3.googleusercontent.com/A-Q9l0J1FzDR62df2r-JoriCUFpkyJoilxinUg8s9exGYXxs2slVQPll4UdES-4cgJqYxJMR_kbR4Ch4kyQ6itG8R1KYHOr1UZYGnQ=w1064-v0)

<p class="annotation">
A. 1dp 高度，5％ 的覆蓋層
<br>
B. 6dp 的浮動交互按鈕，沒有使用覆蓋層的輔助色
<br>
C. 高度為 8dp 的底部主導覽欄，覆蓋層為 12％
</p>

半透明覆蓋層不適用於主色調或輔助色的元件或界面來表示高度。

在深色主題中，陰影顏色需要夠深以準確地表示投射高度。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/ff2V4Sq6dsKF4O_N_u7Q1vAVSI4jGxEle_VLx6KskHjLXhHuXF0V4OauyJNpN3JY9oOLk-NZTd4xtNs2w40huR6HAkL3XgHUwyIjCQ=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>不要在使用主色或次要色的容器元件上使用高度疊加層。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/ulUu-FAE782E6fmV9PiQFzOHzbTDa4Uc29XKxg2NI1tgyD6dkOCkyoNnYTEuIz9SfI_GliSoTbYDJgESYHjwycGJmge-iMfeLyla=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>不要使用發光色代替深色陰影來顯示高度，因為它們不能像陰影一樣準確地表示高度。</p>
    </div>
</div>

---

# 無障礙的輔助能力與對比

深色主題表面必須足夠暗才能顯示白色文字內容，應於文本和背景之間使用至少15.8：1的對比度。可確保文字內容應用於最高（最亮）高度的表面時，通過WCAG的4.5：1的AA標準。

![image alt](https://lh3.googleusercontent.com/GcjivwLBuHnVnotHyHEPfmQDOmZEgHsviSmGGrg8HirjL6DfKl_jx44ZQcsP-toA-AaPYLMIv8lZR-3PWoJN5VKcI-WN2eZAdVjoUp4=w1064-v0)

<p class="annotation">創建品牌深色主題，請以較低的不透明度將主品牌色覆蓋在推薦的深色主題介面色上如：＃121212。
而色彩＃1F1B24 是由深色主題表面色＃121212 和 8％疊加層組合的結果。</p>

如果背景色不夠深，將無法在白色文字和背景間達到至少 15.8：1 的對比度，處於最高（最亮）表面色上的文字內容將無法通過 4.5：1 的標準。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/PFwHTPKUuM9_ZnPFFhTXNthKNArCmQZTwVMoGr0yKheslCyrgyY5a6w5YUtfyOA2KV26ZElcTUSYThxoo5OHFw45F53qnmNuXJ52cg=w1064-v0" alt="">
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <p class="annotation">請確保表面色夠深，以使文字內容在最高層級（24dp）上至少達到4.5：1（AA）的對比度。</p>
</div>

需要高效使用電池的 UI 可以使用純黑色。
在這些情況下，帶有 OLED 螢幕的部分裝置可以關閉任何顯示黑色的像素，以節省電池電量。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/032ffa9fd8fd1b8c88837183b5816684f0a91588948edda0f744759d3ad2c47ba739ec5fcd0303aa1939ee4e436aaa1f5b8a467070a0f86f378395879959db69" width="100%" controls=""></video>
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <p class="annotation">在 OLED 螢幕上，開啟或關閉像素可能都會導致滾動螢幕時出現延遲，使像素模糊。</p>
</div>

## 介面應用

### 主題色

所有深色主題都應顯示足夠的高對比度，當應用於所有高度的表面色，通過 AA 標準的文字內容的對比度應至少為 4.5：1。

#### 避免使用飽和色彩利於無障礙使用

深色主題應避免使用飽和色彩，因為它們無法通過 WCAG 針對深色介面的文字內容至少達到 4.5：1 的無障礙標準。
且飽和色彩在深表面色上將產生光學振動，進而引起眼睛疲勞。應使用不飽和色彩取代飽和色彩。

![image alt](https://lh3.googleusercontent.com/mG8uCM_L25hH9PBTG3S_dBBz7mGhauiCshcmZ0jr1laLs42bwRsAjwTj0OBVpSF0aCWRieA-c-QzG9TKm26DWH2cyOyymqptw6P4=w1064-v0)

<p class="annotation">色板中飽和度較低的色彩可提高清晰度並減少視覺振動。</p>

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/UK1Y33skEC5Tyvtw8qc5wG2jVfgBMPPjGCPe7UsAcuXXG_VdcJuG62a1Rk-fD50UCDR5HqpCi8vy535XfyynbIzGe3zwHZFv6IZjNQ=w1064-v0" alt="">
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">避免使用在深色表面色下視覺振動的飽和色。</p>
</div>

---

### 主色

主色是在應用程式的螢幕和元件上使用頻率最高的色彩。基準「 Material Design」深色主題使用了主色的 200 色調（在所有高度表面色上，均通過了 WCAG 的對於普通文本，至少為 4.5：1 的 AA 標準，）。

![image alt](https://lh3.googleusercontent.com/TsC-Rfwz51t0qK9-c5NPxMwSKUGMCszjum9My9SJ5LKGPIDW1yh70JzSJ6Q8d5wvYYcYyrB0jFVTMug0_gRSqcZjMX9TOuKdtDzB=w1064-v0)

<p class="annotation">深色主題中的主色板</p>
<ol class="annotation">
  <li>主色指示器</li>
  <li>色調變化</li>
</ol>

#### 主色變化

在較淺表面色的元件可以顯示深色主題的主色變化

![image alt](https://lh3.googleusercontent.com/gvnje7YBL-CFgpG2KTlh4xC6y1AqH7PFpaF5BqoBtTXz3eNFbkF459sEF77zyxTW3Ysh3bKdADVrtXnTPUBnPCXtsSC8ppl6VaIHOw=w1064-v0)

<p class="annotation">此深色主題 UI 使用主色（紫色200）和主色變化（紫色700）</p>

---

### 次要色

次要色可用於強調選中的UI部分。在深色主題中，可以降低次要色的飽和度以達到 4.5：1 的對比度。

![image alt](https://lh3.googleusercontent.com/Cevz7vdDQhFJ4fDf9p12CfO7kS3mETAzkyDavYS0cPKHjZh6RZvg8rv1AE3SLS8xdqEOH-1s8q2gw0Hq29phLqcWVHWTSvotFDk2=w1064-v0)

<p class="annotation">深色主題中的次要色板</p>
<ol class="annotation">
    <li>次要色指示器</li>
    <li>色調變化</li>
</ol>

![image alt](https://lh3.googleusercontent.com/0P-xTcEMhknpin-v-HoWq7ochPLR2TIjNrQbN6RCo-wF4qeMYrVpdImq5G1zL-4Vvvad7xCuWIwS8klqpPBBLCcBcFDWogQfO5v_jhQ=w1064-v0)

<p class="annotation">此 UI 使用主色與次要色變化。</p>

---

### 強調色

在深色主題中，深色表面色大範圍的用於介面。強調色通常是淺色（去飽和的粉色）或明亮色（飽和且鮮艷的色彩），以突出強調的元素。

應該謹慎使用來強調關鍵元素，例如文字內容或按鈕。

#### 尋找強調色

[色板生成器](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)可用於創建（或查看）色彩主題。用於生成色調調色板，色調是從原色與輔助色創建的而成，範圍從淺色到深色，可以選擇不同的變化用於您的深色主題。

![image alt](https://lh3.googleusercontent.com/373oRj1q6ZEVlP8W7eLz2Q7aSnLRQUn93cLh0YCnj_asRwULEZC2rCJ6OqDLlDtgt_L1lCZgHsSbU5l_R6p_sHSDVTPzjLPZl5RaYto=w1064-v0)

<p class="annotation">為了在深色主題中提供更大的靈活性與可用性，建議在主題中使用較淺的色調範圍如：200-50，不要使用默認的色彩主題，飽和色調範圍如 900-500。</p>
<ol class="annotation">
    <li>預設主題首要色指示器</li>
    <li>深色主題首要色指示器</li>
</ol>

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/PFRvzDajqOdPJt6Qk3SBZoUPqdFFZ5TNQoJutvpQ5NSPnF5Lgu90wC9BwootWCpiCu1x_d6D-wNaHHqBmRCA3kucTmHtVVxsLeClVw=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">請這樣做</div>
        <p>較淺的色調如：200至50範圍內的色彩，在深色主題表面色所有高度上均具有較好的可讀性。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/rhNNbW36vh65yVr9Mtykc6xdBo3DEZE-oFfPBi9D9kQ2glip_gNWd88b5zcW1ifL7LnhishhXuKG49NTvrlrlmSTaQB8ArKGkDat=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>避免在深色主題上使用飽和色，因為它們在深色表面色上將產生視覺振動。</p>
    </div>
</div>

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/p6NC51sES5BRjVCHRTEwHV_455OVurYOUQv4SFR1ymhd2W-nz08-KTlipKIm9AjymQxrOACwzPvDuuprc707t-JwflaN5tyoMGh-9Q=w1064-v0" alt="">
        <p>預設主題在頂部導覽列的表面色上使用色彩。</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/gik3olr0xOAMAikksLCeGUOHvBkCkERKyS8GwFRWXbRXneQW0-1iJS1btLSPZAmOfnh1QMR1AdueG5jT60Iz-J_qTkyCMRdcafZP-Kg=w1064-v0" alt="">
        <p>深色主題中，頂部導覽列的表面色使用深色而不是原色或第二色。</p>
    </div>
</div>

---

### 品牌色

為了保留品牌標識，可以在深色主題中完全飽和使用品牌顏色，儘管應將應用程序限制為一個或兩個品牌元素，例如商標或品牌按鈕。 通過少量使用品牌顏色，能使元件在層次結構中保持突出。

在深色主題介面的其餘部分中仍應使用去飽和色。

![image alt](https://lh3.googleusercontent.com/OqNFTHJGlxGxigJ8ryzgsttlysjvGYp660FGw4oBtGbXrSWjhNu2kqRmeDdXszCtYGmBTg3AG1HDfZD9RhiQxw0yx7ZVE65nUViiSw=w1064-v0)

<p class="annotation">完全飽和的商標顏色應用於浮動按鈕（2），而飽和的深色主題原色應用於文本（1）。</p>

<ol class="annotation">
    <li>深色主題原色</li>
    <li>品牌顏色</li>
</ol>

---

### 標準深色主題色板

Material Design 提供用於深色主題的標準色版調色板。

介面上應使用深色主題 UI，包括：

- 顏色（原色，副色和原色變體）
- 表面色（背景和元件）
- 狀態（例如錯誤狀態）
- 內容（字體和圖標）

![image alt](https://lh3.googleusercontent.com/tv7J2o4ZiSmLYwyBslBs_PLzKyzI8QUV5qdvHGfoAQn9r7pY4Hj5SmW27m3zUWeDtRSE8Cb5_5PQmkbavDfw7XbIL8EodIKZhilRdg=w1064-v0)

<p claqss="annotation">Material Design 標準深色主題色版</p>

![image alt](https://lh3.googleusercontent.com/2tz16tRWvWsNwxg22BmLGDpZ7Pp3SqAg6Zr10WUCbjeEJHFSBzkbb4gwkjIQ5m4rfYoSntR412o7bC7sr8Xi5-gpiciNiQyjssfNWQ=w1064-v0)

<ol class="annotation">
    <li>Material Design 標準預設主題色</li>
    <li>Material Design 標準深色主題色</li>
</ol>

---

### 錯誤顏色

錯誤顏色用於顯示錯誤狀態。 Material Design 標準深色主題錯誤顏色為＃CF6679。

![image alt](https://lh3.googleusercontent.com/RuZXgaWaYqOBAhgiHVrjRBin5czMJcCgv0m-qRw8NuWolZ6yQjvb1db0l7-9QvKYuxfhSqpAdHDdpfglRctpO_gWOILfXbPUfgSh79Y=w1064-v0)

<p class="annotation">透過預設主題錯誤色（＃B00020）用40％的白色覆蓋使其變亮，創建深色主題錯誤色以通過 AA 級對比度標準。</p>

---

### 字體排版和圖標顏色

「相近」色彩主要用於文字內容，圖片和線條，這些線條有時被位置在使用首要，次要，表面，背景或錯誤色的關鍵表面色的「鄰近」色。

預設情況下，「相近」色彩在深色主題是白色和黑色。

![image alt](https://lh3.googleusercontent.com/Xdjd73-J_67W9BapesGR3udz5ELp4XvdQxAatIrWDfeE6aZH657RUKEP84V7f0L0RxJKH7NBlH8v3q89AXFzJp0V-8pmw1Zz3_jeOA=w1064-v0)

<p class="annotation">介面顯示用於深色主題文字內容與圖標的標準顏色。</p>

#### 在深色背景上的淺色文字

<div class="img-grid">
    <div class="grid-item">
        <p>當淺色文字內容出現在深色背景上（此處顯示為黑色白色）時，應使用以下不透明度級別：</p>
        <ul>
          <li>高強調文字的不透明度為 87％</li>
          <li>中強調文字與提示文字的不透明度為 60％</li>
          <li>禁用文字的不透明度為 38％</li>
        </ul>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/u1ZtNl-0Q9yNE2ZMCnQ3J1tsTJNUEgoJi7P5NntrLIo4vjz1o-Eu-ZHcse0Hz_eJT8RvxmrxQWhtLUPBa7tEXCZ7f_Xvoy-k6CWgWoE=w1064-v0" alt="">
        <p>高強調、中強調和禁用文字</p>
    </div>
</div>

---

## 自定義應用

在部分案例中，可通過使用 Material Design 的深色主題精選元素帶來優勢。

### 大範圍介面

大型元件如：導覽列或背景色，可套用深色主題中較深的表面色。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/-1ThstbPoPWlNZFftRLU_Gc4hczdEQ0t71jAW-MrYuDsoUS0sJnXpwbVXnIUurhToaTIoRDHNsU7YZ9nyw8r5-eaeBCYOEgHBnl7hQ=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">請這樣做</div>
        <p>為較小的元件保留鮮豔的表面色。</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/6kbV1-tt0OwOqD75_ZDMqFO7NpG5wCAVo3Gqgos8TeoCnz5E9MWVkGyDZC5lScLrNZ9yAaeFvW863j95CuIOX9CxXPmoz4LaGZc_6w=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>請勿在較大的元件上使用明亮的表面色，因為它們會發出過多的亮度。</p>
    </div>
</div>
<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/Fa_R8EN6TozpO01kJZp-_tibyS95FeNay4vO3m0WSpxuZ4OsKnXEHSZCsCna6BRXfgu2T4ikLz6XaWnRVv8mackf7X-MFV3Q3Ba2KQ=w1064-v0" alt="">
        <div class="item-divide divide-og"></div>
        <div class="item-title title-og">警告</div>
        <p>如果主要深色而不是主題推薦的表面色（＃121212），請確保其通過15.8：1 的對比度。</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/I1sf7Tah_fr-S5MzTAcNwNCr2QSNRuriZVOXnKnKxfOPMYkW09Wqhe6ml9Yo1fBTkXN7gpUYikt-3_g_wUULHPk-Uh8SVCSfH5BVyw=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>請避免將深色主題原色用作背景以淺色覆蓋大部分螢幕。</p>
    </div>
</div>

### 預設與深色主題的組合

當深色主題中需要淺色表面色時，可在選定元件的表面上使用淺色以保留層次結構。

例如，這間點心吧在深色主題可以選用顯示淺色表面以幫助訊息脫穎而出。亦可應用預設主題的“表面色”和“用於表面色上”的顏色組合。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/Ey82bBeAAmuo-9NgcGIYqM9KyuXd37MHU1RruzbatBbe8oqVEjFyiNBM7WA6XDNg08QavD5DSalm8Kl28bsDwN9PNUcynDIO4XUOSg=w1064-v0" alt="">
    <ol class="annotation">Material 並不能像液體或凝膠般行動。
      <li>用於表面色上：#FFFFFF</li>
      <li>表面色：＃121212</li>
      <li>主色變化：＃3700B3</li>
    </ol>
</div>

## 狀態

狀態皆以透過使用覆蓋的視覺方式表現元件的互動元素。在深色主題中，各種狀態應使用與預設主題相同的覆蓋值，且可對其進行調整以通過 AA 級對比度標準。

有兩種類型的容器可以共同擁有狀態的覆蓋值如：使用“表面色“和“主色”的容器。

### 表面容器

稱為“表面色“的容器用與其圖標或文字內容的顏色相容的覆蓋層（如果圖標不存在）。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/PQ-iI90IHUbjxzioTnUxHWG3Ocla_R2TQO5Iim9JhJyoyz97Eit3Dm0azt9Hzm_zt8kqlyfboxdJe5-6a2JDj-CZX8ITb2mUdZ2X6Os=w1064-v0" alt="">
        <p>容器背景使用“表面色”的五種狀態：啟用，懸浮，聚焦，按下與拖動。</p>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>容器</td>
            <td>表面</td>
          </tr>
          <tr>
            <td>内容</td>
            <td>相近色</td>
          </tr>
          <tr>
            <td>疊加層</td>
            <td>相近於內容色</td>
          </tr>
        </table>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/cchltqqLnvBbChejJ_8L4yHlg6bhMGedSuwHmVDf_2CT2QUVtzqEcUasL8D5YrL12umTIUIRSyv8wt9wcZr_YDsRnGLFXglyeUEp=w1064-v0" alt="">
        <p>容器內容使用“主色”，背景為“表面色”的五種狀態：啟用，懸浮，聚焦，按下與拖動。</p>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>容器</td>
            <td>表面</td>
          </tr>
          <tr>
            <td>内容</td>
            <td>主色</td>
          </tr>
          <tr>
            <td>疊加層</td>
            <td>相近於內容色</td>
          </tr>
        </table>
    </div>
</div>

### 主容器

對於使用“原始”顏色的表面容器，其狀態覆蓋為白色。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/PQ-iI90IHUbjxzioTnUxHWG3Ocla_R2TQO5Iim9JhJyoyz97Eit3Dm0azt9Hzm_zt8kqlyfboxdJe5-6a2JDj-CZX8ITb2mUdZ2X6Os=w1064-v0" alt="">
        <p>容器使用“半透明主色”，使用覆蓋層表示五種狀態：啟用，懸浮，聚焦，按下與拖動。</p>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>容器</td>
            <td>主色 24%</td>
          </tr>
          <tr>
            <td>内容</td>
            <td>主色</td>
          </tr>
          <tr>
            <td>疊加層</td>
            <td>白色</td>
          </tr>
        </table>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/cchltqqLnvBbChejJ_8L4yHlg6bhMGedSuwHmVDf_2CT2QUVtzqEcUasL8D5YrL12umTIUIRSyv8wt9wcZr_YDsRnGLFXglyeUEp=w1064-v0" alt="">
        <p>容器使用”主色“使用覆蓋層表示五種狀態：啟用，懸浮，聚焦，按下與拖動。</p>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>容器</td>
            <td>主色</td>
          </tr>
          <tr>
            <td>内容</td>
            <td>相近主色</td>
          </tr>
          <tr>
            <td>疊加層</td>
            <td>白色</td>
          </tr>
        </table>
    </div>
</div>

### 禁用狀態

所有禁用的元件容器外框與填充使用 12％ 白色，標籤或圖標等內容使用 38％ 白色。

![Image alt](https://lh3.googleusercontent.com/-IltONGTBf7KJfYd-NptEVS6f7np8cUA_HEWlRXR1If8M2qyLkdoxLa5Ebp1vGrAo1yfdlbllf6lgpYY-gHrTrlHMdnOVkFHb5A50A=w1064-v0)

<ol class="annotation">
  <li>外框線內容：12% 白色</li>
  <li>標籤／圖標：38% 白色</li>
  <li>填充內容：12% 白色</li>
</ol>

---

## 相關資源

### 設計文件

設計文件包括深色主題佈局的元素，例如狀態欄，導覽欄，底部工具欄，卡片，下拉菜單，側面導覽，對話框，浮動操作按鈕與其他元件。

[Figma 檔案下載](https://storage.googleapis.com/mio-assets/resources/Material%20Dark%20Theme%20Design%20Kit.fig)

[Sketch 檔案下載](https://storage.googleapis.com/material-design/downloads/material-design-stickersheet.sketch)

適用於 [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)。下載即表示您同意 [Google 服務條款](https://policies.google.com/terms)。 [Google 隱私權政策](https://policies.google.com/privacy)描述了此服務如何處理數據。

---

## 實作

**各平台支援的深色主題實現如下所示。**

| 平台    | 狀態 |
| ------- | ---- |
| Android | [可用](https://material.io/develop/android/theming/dark/)|
| iOS | 計畫中 |
| Web | 計畫中 |
| Flutter | 計畫中 |

---

> 譯者：[Ash.h](https://www.facebook.com/100010078381700/)
>
> 校稿：[Joanne Chen](https://www.facebook.com/profile.php?id=100000314569800)
