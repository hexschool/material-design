---
title: 總覽
description: Material Theming 是指對 Material Design 應用程式進行客製化，以更好地顯示出品牌特色。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 總覽

Material Theming 是指對 Material Design 應用程式進行客製化，以更好地顯示出品牌特色。

## Material Theming

<video src="https://kstatic.googleusercontent.com/files/778070856667dfa70e5450294dfb25cf15a5502f5bb58da253ee9023aab9a163a31366256985ab922c1a168297c7e471fe15e549267f7994a2aa5815855b95da" width="100%" controls=""></video>

### 什麼是 Material Theming？

Material Theming 為對 Material Design 進行系統性客製化，以更佳反應出產品品牌之能力。
改動使用者介面（像是色彩與字型）時，Material Theming 工具會應用您的設計觀點並貫穿整個使用者體驗。這些工具提供可客製化的屬性值以易於設計與程式之間的工作流程切換。客製化這些屬性值可為您的產品創建出其 Material Theme。

---

### 使用 Material Theming

Material Theming 由三個主要操作組成：客製化您的主題、將其應用至您的設計模型、以程式實踐。
Material Design 提供一個可原樣套用的內建基線主題，您可以依據喜好進行客製化，以讓 Material 應用至您的產品。

---

## 使用 Material Theming

### Material Theming 之實踐

Material Theming 會影響整體使用者介面，包括個別元件（像是按鈕）。此項範例呈現按鈕元件跳脫思考框架的客製化值。

#### 客製化前與客製化後

實心按鈕可指定顏色、形狀與字型家族的值。實心按鈕具有以下預設值：

- 色彩為 #6200EE
- 文字為 14pt、Roboto 字型、粗細中等且全部大寫
- 具 4dp 的圓角半徑

您可以藉由調整實心按鈕預設的色彩、字型與形狀，以符合您的應用程式風格。

左圖為預設樣式的實心按鈕。右圖為調整過預設值之全客製化按鈕。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/YmlQESIV4AHbo2NXNlaUOiu0fxgtCvWCPgESZBLuVUeDDZUHz2vBxhvxyfCcMSiuL_12nGTNiO557jwLWqq15w_Duj5xef8_25RHtw=w1064-v0" alt="">
        <p>基線 Material button</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/ea6oS5IifBZQHXzh0BCKo4J-0PRbms5za3YPu6sshF4VYvHJgbU52skHL8oUSuRbwY4_OAkRZ-s9dQhtiPeBszw_RJAZeuHgkwYTnSU=w1064-v0" alt="">
        <p>相同但經客製化的 Material button</p>
    </div>
</div>

#### 預設值與客製化值

按鈕具有以下屬性與預設值。範例中的客製化值以粗體呈現。

#### 字體

![字型對照](https://lh3.googleusercontent.com/eVBeKZt_woP9ouvCo45qaJoVZpVap-IgPSHAIISCTn6hOsIOADTLtIdluUan4ZnCHGd45JzczxXgVfnpSLLCUCbDDUh2Ttpzuect=w1064-v0)

| 元素 | 類別 | 屬性 | 預設值 | 客製化值 |
| ---- | --- | --- | ----- | ------ |
| 文字標籤 | 按鈕 | 字型家族<br/>字體粗細<br/>大小寫<br/>字體尺寸 | Roboto<br/>中等<br/>全部大寫<br/>14pt|**Rubik**<br/>中等<br/>全部大寫<br/>14pt|

#### 色彩

![色彩對照](https://lh3.googleusercontent.com/lK_fRuvrpZ83rmrsm8kRXvVlHrr4OINIIkrS85fiLyIpuRd72F5W4C_omCWzbaqQjoh3jojiZT5ZN-Mirplav5YUfovAmt8Wvr9ngw=w1064-v0)

| 元素 | 類別 | 屬性 | 預設值 | 客製化值 |
| ---- | --- | --- | ----- | ------ |
| 容器 | Primary | 色彩<br/>透明度 | #6200EE<br/>100% | **#FEDBD0**<br/>100% |
| 文字標籤 | On Primary | 色彩<br/>透明度 |#FFFFFF<br/>100% | **#442C2E**<br/>100% |
| 圖標 | On Primary | 色彩<br/>透明度 |#FFFFFF<br/>100% | **#442C2E**<br/>100% |

#### 圖像學

![圖標對照](https://lh3.googleusercontent.com/WC2q5sleMK6QU2DxZaNzYvyn8s8hCWsKfsaUjajMekSd5hnl6fYL9BPuCTZRG35IsKBHq1z7hQFl-fGuUy3jDgdUahcDatmCCmC3=w1064-v0)
| 元素 | 類別 | 屬性 | 預設值 | 客製化值 |
| ---- | --- | --- | ----- | ------ |
| 圖標 | 圖標集 | 圖標家族<br/>圖標 | 填滿<br/>加號 | **輪廓**<br/>**購物車** |

#### 形狀

![形狀對照](https://lh3.googleusercontent.com/yRSKUNAe2ksgA-hUM69CyCKmQwtqcg6jBOyyqgC3MwjV0CSDKtvLvuQBPXw0hXdogCfEyMVSt9T7sPtXg04faYewgLEeV2jUn2CK2g=w1064-v0)
| 元素 | 類別 | 屬性 | 預設值 | 客製化值 |
| ---- | --- | --- | ----- | ------ |
| 容器 | 小元件 | 左上角<br/>右上角<br/>右下角<br/>左下角 | 圓角 4dp<br/>圓角 4dp<br/>圓角 4dp<br/>圓角 4dp | **切角 6dp**<br/>**切角 6dp**<br/>**切角 6dp**<br/>**切角 6dp**  |

粗體表示自預設值修改後的客製化值。

---

> 譯者：Roy Wang
>
> 校稿：CH.Yu
