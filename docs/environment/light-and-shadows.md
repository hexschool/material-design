# 光線與陰影

當 Material 表面受到光線照射，會投射出陰影。

---

## 光線

### 光線與陰影

在 Material Design 的環境中，虛擬的光源會照亮使用者介面。主光源會產生較銳利、定向的陰影，稱為主陰影。環境光源則來自所有角度，產生擴散、柔和的陰影，稱為環境陰影。

![主光源產生的陰影](https://lh3.googleusercontent.com/cuArKKQgH64vrVtgkSyMiAI5RTqL6heaKPT6ScndZ1qiU8t_RFTA_J-NOguGhio-75TY9jYijIgywDlx8okS39nGfSVo8SIdxfikKz8=w1064-v0)
主光源產生的陰影。

![環境光源產生的陰影](https://lh3.googleusercontent.com/T-92sY5xjLMpMfM22hBGcUMaGSuqtnLoHJWmS1_7U5qwrETj339D-crFIwERN47WsfqajVXWzQB3q_aq8BPpage9dCXRRdBUlIFVQQ=w1064-v0)
環境光源產生的陰影。

![主光源與環境光源產生的陰影](https://lh3.googleusercontent.com/80Oy2v7zErOUmJbGCp-W8DdQUmOOF4dRI11Mz7V4Rio-Dv_E_cpZo2EbHO6EkUN19sITzVbvxsX21s20Ih6gpbp6Rs-TKugiqGH1YTo=w1064-v0)
主光源與環境光源產生的陰影。

![元素在深色環境也會使用陰影，即使較不明顯](https://lh3.googleusercontent.com/Xfcn1toINWeolhHLD8Tlfxtfq3TEkujsXYB7qrM06tl0m34JvXdmak1wmVW-AfRXdtmgUTjqRZQ0i_6E2NrY8U1t5YkmSBwsdsmqZu0=w1064-v0)
元素在深色表面使用陰影，即使視覺上較不明顯。

---

### 光源

Material 環境中的陰影由主光源與環境光源投射產生。在 Android 及 iOS 開發環境中，光線在沿著 Z 軸的各個位置被 Material 平面阻擋時，會產生陰影。在網頁上，僅能藉由操縱 y 軸來描繪陰影。以下範例顯示了層高為 6dp 的卡片。

![主光源產生的陰影](https://lh3.googleusercontent.com/ZTiXsXY2gZarUOUhibnCSBZhLo_CLRY0b-2cxAddw0vqFcxiEqRhchAs0DSH63Rx_0IX_DiTvinmOFhsl2fYa8F6OX3iV1en_3L98g=w1064-v0)
:::danger
**不行**
主光源產生的陰影
:::

![環境光源產生的陰影](https://lh3.googleusercontent.com/X8foa5lJrWUFmWUpGOjJnrPovBEbcEnJl5l7no185n_iK75CMVmpttZYkTyfG95w_j3nM-sippJUH9GfQ1059nxqAtKkKpQBSNHj=w1064-v0)
:::danger
**不行**
環境光源產生的陰影
:::

![主光源與環境光源產生的陰影](https://lh3.googleusercontent.com/rZkPi0lJSr5wQoyxq9qIR2AuIjTM2PBhGOMyYS-xxdds6xI8MTfN7mffWcTMP7KK5UO9iLvvDq202nZOyKDOY5YNcaH2QX8z0UqIiQ=w1064-v0)
:::success
**可以**
主光源與環境光源產生的陰影
:::

---

## 陰影

陰影提供有關深度、運動方向和表面邊緣的提示。
一個表面的陰影取決於其層高以及其與其他表面的關係。

### 用法

由於陰影表示了表面之間的層高，因此必須在整個產品中始終使用陰影。

![始終使用陰影來描繪層高](https://lh3.googleusercontent.com/Z_w9qoYUqgQ80i9QGTypmtvQI8JF4I3mMBaEmSaWchlB4ujGFyro6dtQT4DDObQhv9iaNkiKWhjgF-CU5YnKFrWYAvFU3dwh-yXU8w=w1064-v0)
始終使用陰影來描繪層高。

![陰影大小反映層高。在層高較高的表面陰影較大，而層高較低的表面陰影較小](https://lh3.googleusercontent.com/5XXOCGpsdv-Wp8EXjNQ7vqtC0X7-6W5O1QSeZFsKzkWt6ouNtZ0gxE05wEDhVdESGUND4Fov_55-G3nMu01Mb2ob9rjCw3weBe1E0w=w1064-v0)
陰影大小反映層高。層高較高的表面陰影較大，而層高較低的表面陰影較小。

<video src="https://kstatic.googleusercontent.com/files/e05b265bd4a6e93b2abe4677cb5e5f880a4369e693c3a6acbb322a17e8f625a04ab1b5333ede48409af8023c1430b87616521facabd24b5ff224930101e4d1af" width="100%" controls=""></video>
:::warning
**注意**
如果您的產品不使用陰影，請通過其他方式（例如視差運動）表達層高。
:::

<video src="https://kstatic.googleusercontent.com/files/a6cd285c4e62baf153138506f25b9772a90ec8991435ac7473f86296c57b1c1fc55ddca876f3d5759b0a4fd523760e1d73ffec8df456d3ba61a8c388ad733193" width="100%" controls=""></video>
:::success
**可以**
陰影的出現表示該列表項目已被拾起，並且在這個重新排序的互動行為中，可以移動到其同層的前面。
:::

---

### 陰影與運動

陰影可提供有關於表面的運動方向以及表面之間的距離是增加還是減少的暗示。

<video src="https://kstatic.googleusercontent.com/files/45463b91d9a7f8b67e1f98c34dec83a08c137113b98e3dcd5ff2978081eb7a435ca64f46694a98555b4fdcb6f5704f3affd293354f36935ae647f34ea35ae8bd" width="100%" controls=""></video>
當表面改變形狀或比例但其層高保持不變時，其陰影不應改變。

<video src="https://kstatic.googleusercontent.com/files/ab0f445d512c8264f6ae3b0eec4989ecbe971aa75ec320fe5fb3ca86cbbb95f4c6f4c83dcd2611991773163e797a460743068dabb0152fee2ff633a37098acf5" width="100%" controls=""></video>
當表面改變其層高時，其陰影也應改變。

---

## 研究

Material Design 對15位視力低下的參與者進行了36次採訪，以更好地了解陰影和輪廓如何影響個人對於元件的識別能力及互動能力。

研究結果包括：
- 陰影和輪廓，只是一個元素的眾多屬性當中，影響用戶的識別能力的因素之一。影響用戶識別元素的其他屬性包括文字特徵、層高、顏色、周圍元素之間的佈局以及使用情境。
- 使用陰影和輪廓可以提高在掃視頁面時找尋元件的便利性和速度。
- 在元件周圍使用陰影或外框輪廓可以提高人們的識別能力，判斷該元件是否可以互動。