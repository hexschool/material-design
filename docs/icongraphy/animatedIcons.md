---
title: 動畫圖標
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 動畫圖標

## 用法

動畫效果反應了圖標執行的動作，進而增加質感與喜感。

<video  src="https://kstatic.googleusercontent.com/files/a811ca2f25a1fe411fdc15ab1b18b01015452309e53ffc1ecf0af9d2b3269c04fe2ecee353e846e6377a3fb87d8f08efb38d26d4e60150e6b832c60b0f2ed083" width="100%" controls=""></video>

<p class="annotation">每個圖標的動畫效果與其執行的視覺設計和作用方式維持一致。</p>

---

## 轉場效果

轉場效果為連結兩個動畫圖標之間的視覺狀態。兩個圖標若轉場，代表其已互相連接，按下其一會使另一個可被使用。

<div class="img-grid">
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/1c1f444f31420f774966da6132d6af666473f9dd5989bbe1cd4777a5bc0f7a13fceb6cb0c08b48074d3ed35ccb9dead6f907fc8451b86a2a8c6ec05f9517c423" width="100%" controls=""></video>
        <p>轉場效果顯示了兩個圖標之間的連結。</p>
    </div>
    <div class="grid-item">
        <video  src="https://kstatic.googleusercontent.com/files/64ef7c9dccb37e6fc4fb792a42afda539f89047dfc2709148059edc3587f0e53adf23bde172df9cc8e3bc1a11b1c0789455137e1d81789782b25a4da2d626968" width="100%" controls=""></video>
        <p>轉場效果用於圖標之間的雙態觸變，像是開啟與關閉狀態。</p>
    </div>
</div>

### 強調

為更佳地強調層次，動畫圖標的轉場效果可運用簡單或複雜的動態。

- 不顯著的圖標使用簡單的共享動態。
- 可使用複雜的動態強調應用程式重點區塊的圖標。

<div class="img-grid">
    <div class="grid-item">
        <h4>簡單</h4>
        <video src="https://kstatic.googleusercontent.com/files/b1f75f6411f22085feac9d957c977d65afc67c4850878bd4f4268f350e3eb3c500f7926fd207ea2c4453222cc6ce76f1ba8dc998c7f63e1bee5c629948d40518" width="100%" controls=""></video>
        <p>不需強調的圖標使用共享動態。淡入、縮放或旋轉皆為簡單的轉場效果。</p>
    </div>
    <div class="grid-item">
        <h4>複雜</h4>
        <video  src="https://kstatic.googleusercontent.com/files/d8e87ad8c9615bd5cde59067579d3ee5663ce77017d42f41400173f3583a5ed021d9361491da83dbfb154122ca5c5e6ae157cc39e9c3b06c57ded2f3b4aa2789" width="100%" controls=""></video>
        <p>具細節的動畫可引起注意，且讓重要的圖標增加喜感。</p>
    </div>
</div>

<div class="img-grid">
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/e86e22385fb91637aef5f1c7f452f890b24473b5f59a44d9355662369ae54860c3eaa0034a47c128a287f68660507fab36e0ae47ef46dc3d0ce9d35239efec1e" width="100%" controls=""></video>
        <p>當功能比樣式更重要時，使用簡單的轉場效果。淡出退場圖標並淡入進場圖標，且巧妙地按比例放大至其尺寸。</p>
    </div>
    <div class="grid-item">
        <video  src="https://kstatic.googleusercontent.com/files/b47527eb82a6bde3f2cfee3cca9a176d0e407388aab2cf7cd92fc6c2238fe7748d00c40d8753a2873f382187ee5b321d04fcf3badf50900de3716006b35e38d4" width="100%" controls=""></video>
        <p>具細節的轉場效果被使用於重要的 UI 元素上，像是音樂播放應用程式的控制選項。</p>
    </div>
</div>

---

### 持續時間

若圖標動畫越複雜，就需越長的持續時間，以避免產生急促感。為了維持應用程式的協調性，具相似複雜度的圖標應使用相同的持續時間。大多數圖標適合以下三種建議的持續時間：

- 簡單的圖標動畫：100 ms
- 一般的圖標動畫：200 ms
- 複雜的圖標動畫：500 ms

<video src="https://kstatic.googleusercontent.com/files/68ebc17726161521b3f86988d270e432de1f0f6fc9fb2c7a09162439254c8f4ba65057b30ab6fc43bc0b92ba88b08b2ea3c8ea8cc17434e07457c658c5524d67" width="100%" controls=""></video>

<ol class="annotation">
    <li>簡單：100 ms</li>
    <li>一般：200 ms</li>
    <li>複雜：500 ms</li>
</ol>

---

### 交錯

圖標集可使用交錯的時間點表現流暢地進場。其動畫從左至右以增加漸進感。

<video  src="https://kstatic.googleusercontent.com/files/9e61ec3708c7307d0914a482ba65047c18d4adb9107d8334944d431dcabb79d6f1da5178a32c44b0ddae2d26b7f8d8f6ed0bf2e5bca60aeaab10ae2f240edef5" width="100%" controls=""></video>

<p class="annotation">應用程式欄中的圖標從左到右以交錯效果進場。</p>

<br>

## 狀態

圖標動畫可用於加強狀態之變化。

<video  src="https://kstatic.googleusercontent.com/files/5bdd63f51834c9f15192f3c4336de67ac092a5576b6ad0463ff359606fb7bfa74842619ae6fc6c05caf5b45778f638371228f6e69c70f20239f2713587b57582" width="100%" controls=""></video>

<p class="annotation">圖標動畫顯示了其圖標被選取後的改變狀態。</p>

---

## 主題化

動畫應要反應出品牌風格。

<video  src="https://kstatic.googleusercontent.com/files/5ce4a056d7c18d4422e3d68f5389fa2117422eafdb475cd0ce999f17890525d2eee74391e49007f7f66edff30b9814e385638f056873ab0c77e144fa9ebae8dc" width="100%" controls=""></video>

<p class="annotation">這些圖標動畫啟發於其品牌徽標與讀取狀態動畫。</p>

<ol class="anotation">
    <li>圖標動畫</li>
    <li>徽標動畫</li>
    <li>讀取狀態動畫</li>
</ol>

---

> 譯者：[鵬聖](https://www.facebook.com/100001596804652/)
>
> 校稿：[CH.Yu](https://github.com/yuu-chien)
