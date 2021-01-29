---
title: 元件行為
description: 以下指南描述了元件在網格系統與斷點之間的行為模式。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 元件行為

以下指南描述了元件在網格系統與斷點之間的行為模式。

---

## 定位術語

每個斷點範圍中的使用者介面元素作用方式各異。

### 描述詞（描述符）

網格系統中的使用者介面元素、元件與表面之定位，可用以下術語描述：

<table>
    <thead>
        <tr>
            <th>描述詞（描述符）</th>
            <th>定義</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>上方、下方</td>
            <td>元素的 Y（軸）位置</td>
        </tr>
        <tr>
            <td>前方、後方</td>
            <td>元素的 Z（軸）位置</td>
        </tr>
        <tr>
            <td>左方、右方、中心對齊</td>
            <td>元素的 X（軸）位置</td>
        </tr>
        <tr>
            <td>頂部、底部</td>
            <td>元素相對於容器或螢幕邊緣的 Y（軸）位置</td>
        </tr>
        <tr>
            <td>垂直置中</td>
            <td>元素同時中心對齊於容器或螢幕邊緣之 X（軸）與 Y（軸）位置</td>
        </tr>
        <tr>
            <td>固著</td>
            <td>隨著使用者介面（UI）滾動，且鎖定於滾動位置之某特定點</td>
        </tr>
        <tr>
            <td>浮動</td>
            <td>定位於可捲動內容前方的固定元素</td>
        </tr>
    </tbody>
</table>

---

## 元件寬度

元件寬度可於各種螢幕尺寸上維持不變，或根據佈局不同而有所改變。
元件寬度可為以下二者：

* 固定（Fixed）
* 流體（Fluid）

固定寬度的元素在佈局改變時會維持寬長，因此可改變位置以適應新的佈局。其配置可為以下二者：

* 推擠（Pushed）
* 覆蓋（Overlaid）

### 固定（Fixed）

具有固定寬度的元素於螢幕尺寸改變時，其寬長會維持不變。

![固定寬度](https://lh3.googleusercontent.com/gSRaQGLaLgCWY2jV0q5MG0Cq0T11DibahYOJzRye4rhkMv-6SJumE4EqybHhrg3V1jeMuxHBM5VFXAMxwOI_tKr3CP9NpsLkO8ykAA=w1064-v0)

> 此按鈕元件的右外間距維持不變。

### 流體（Fluid）

元件若具有流體寬度，其寬長會依據螢幕尺寸變化而擴展與收縮。

![流體寬度](https://lh3.googleusercontent.com/t_hYf7SmAuPwVEmcenSQgt4_D9SoG1ycV9N-JdFRggp4E3nvHMKZKO44RImAquZzoTId86BVct5InCcXoRfvWwjdsCWvdkfmhxMTszU=w1064-v0)

> 此按鈕流暢地在右方兩欄中縮放。

![image alt](https://lh3.googleusercontent.com/SEVNMWMmOnofgj-9Hbk5aEuDNdBxLfPJhCJkMq0B8baa_ds7gLDeV1WfEKpKiqs7Aw9oHPQc1SD3bdlA5YFuNi38XqMggCldpumo=w1064-v0)

> Don't
> 若因流體元件太窄而無法在較小的寬度排列元素與內間距，則不要使用容器。

![image alt](https://lh3.googleusercontent.com/xjvTdm1WHxBCjzLJJysAXBA2ToskgFr5wxkKm98yl-2HADS7xbTuxzo13RS-iMqgWcF6_HQyXmGCTa7UqptaZ8Z7XenQ8JWHU0wiug=w1064-v0)

> 提醒
> 流體元件橫跨寬螢幕的數個欄位時，某些元件（像是按鈕）或許會在較大的螢幕寬度中被過份強調。

### 推擠（Push）

當佈局或螢幕尺寸改變時，可以從其原始位置將元件推入。元件在寬度維持不變之下，可自原位置向左或向右水平推移。此情況發生時，若將元件推離螢幕，可能會被螢幕邊緣遮擋。
![image alt](https://lh3.googleusercontent.com/1lXcmgHiut18xPVMZu8re_E6zufmH6mxUhbWAloMjhshhTSz9yfk5FXEVUEXzlba0FHOUa5kmdQJO-rG921dOvQhjAcvx1ST09cKfA=w1064-v0)

> 內容區域被側邊選單推出螢幕可視範圍。

### 覆蓋（Overlaid）

當使用者介面改變時，元件可被其他封閉元素覆蓋。當元件被覆蓋時，其寬度與位置維持不變。

![image alt](https://lh3.googleusercontent.com/nX8PwnokczAN_CxYFZllxtSzPJNzrJHaej58BFpkm7NrUZAtU85wTDoCHuPeCue3ttl2v-D21lneHbnqbwm5PfwZ6EwKQ-WbGugobg=w1064-v0)

> 使用者介面內容區域被側邊選單覆蓋。

---

## 響應模式

元件可以基於不同螢幕尺寸與裝置類型，使用以下模式調整其大小，這些調整包括：

* 使用不同元件以適應不同空間。
* 在較小的空間中考慮改動元件的可見性
* 更改輸入法

螢幕尺寸增加，可應用以下響應模式。

> [兼容性／裝置兼容性／相關文章](https://medium.com/google-design/to-make-apps-accessible-make-them-compatible-with-different-devices-11298c6d3f06)

### 顯露（Reveal）

若指定的斷點處有額外的空間，可顯示在小尺寸螢幕被隱藏的部分使用者介面。

![image alt](https://lh3.googleusercontent.com/LbLFh1meWGfpWysnb06PxAWZ7AKAQvVmjft3sGjwxmLh6dFbH6KlGDHlP3aXah18VB_cZdSlQOp_BO26hq47cf4i_6XVQnjewubDYg=w1064-v0)

> 當螢幕尺寸增加時，可顯示被隱藏的元素，像是側邊選單等。

![image alt](https://lh3.googleusercontent.com/FUpEK178Gn5lbtXqEA3XCIgYnJ48XBaH566CSJFSjuuM_ArLKgcDA-La1ylucc3NcIBMGYxkxOSxbe7Yv5Rpe-EUTvr_EcuoseWIdA=w1064-v0)

> 一個簡單的使用者介面可能隱含更強大複雜的選項。

![image alt](https://lh3.googleusercontent.com/i0KKJDrE0FriDD-FbCnwSksHqJex3797QS34pYsPA8nmQb0qu6ugWUnmRSRCgTMkrzX8gib-xP-sFU8EzfTr-Kj-jk8TFVaNAPdJ2g=w1064-v0)

> 當有額外的空間時，在默認情況下，點擊小尺寸螢幕後才會顯示隱藏的部分使用者介面。

### 轉換（Transform）

元件可於指定斷點處從一種型式轉換為另一種型式。

![image alt](https://lh3.googleusercontent.com/fgljRRWmOxyCOh7x2li4tN7ZV9A3t6FC28aYhk3xWe-aLgMobI6Z0Q0ekJIaZI-tYsUZrPaNtLt5Or9iExBx-E8htOoqpDizIeY2=w1064-v0)

> 側邊選單在較大的螢幕尺寸可轉換為標籤列。

![image alt](https://lh3.googleusercontent.com/qQClrwn6U_wEzJG5lKInIhrpo1abd_9ycIbC5B0Msqm4k_sp2N3lnRX7mCxHvy0vb_qMwu0P22R8UqSB3-yG8_6lpfFiNvpwP_mQOjM=w1064-v0)

> 文字列表在較大的螢幕尺寸可轉換為圖像列表。

![image alt](https://lh3.googleusercontent.com/yIz2fohPNJxU-av1vEKq5skvS4jjCCS0lgbn2ITII7f7VFDKG5pGmAaiQ7taMt505JX4rXxkkZYIO85GvG6VCIN93tS7lOXAi9IyrQ=w1064-v0)

> 菜單項目在較大的螢幕尺寸中可轉換為工具列中的圖標。

### 劃分（Divide）

若有更多螢幕空間，具有數層的使用者介面可一次顯示全部層面。使用者元素會依據新的可用空間進行劃分。

![image alt](https://lh3.googleusercontent.com/si5L6YyF3kxu4r7j-dRtollIeaHj5DBN6UyTwvgTksRQ3Si_Cz5BXAHl-MUGG4mJmPNeU9iCVpPYTf-ZXokTj2y8crOJ9GchrkMBeag=w1064-v0)

> 側邊選單、列表內容與詳細內容在較大的螢幕尺寸被劃分開來，以填滿整個單一視域。

![image alt](https://lh3.googleusercontent.com/arj45MoELjYMAIi7XMBD69u06hj_osmk_Excobn86zGoOXSOsrtzL7z3SXUvIT1gsVJaqrN_J5xpirMR9WO5HnS61se3aDO98HjKhQ=w1064-v0)

> 索引列與其對應內容在較大的螢幕尺寸中被劃入同個視域。

### 回流（Reflow）

使用者介面改變其佈局以適應新的可用空間。

![image alt](https://lh3.googleusercontent.com/lgHcP_d4dDLitEW-MCJHj3J8Pt8Tj99gA_F8FvpcgU_FmuMYI9FYNJhR2n9jf15f94joUtDvNSoU6Mr54r9g_PENAdu7_EjzwmCf=w1064-v0)

> 單欄式元素在較大的螢幕尺寸中，能以回流的方式重新排列成各種組合，以填滿內容區域。

![image alt](https://lh3.googleusercontent.com/FkVg5C4HSUdi5Gjqr2-jUCjN-O73iU-Nn-jF38bQmPw5LZuz4vgg6_1V63upu-2TCzucTv_Pcwu62iAE0Hzeo_wWIYPH5tll7ThVpXY=w1064-v0)

> 水平標籤列在較大的螢幕尺寸中可回流為垂直列表。

![image alt](https://lh3.googleusercontent.com/PQ8CtuEY2VQi0QeKs-8bXAeJnuU_FgvJhYeliXvk5qOuWBV28FJYIxWag6FP2jP8AQ6OkaHvtF794oHiBpYyowaqXPo8VdllWMKYwm4=w1064-v0)

> 元素可依據新的螢幕比例或裝置方向，在元件內回流。

### 擴展（Expand）

使用者介面在更多空間下可進行擴展。

![image alt](https://lh3.googleusercontent.com/4m_eMtkSTTpgNCwC0YrZK0rlBI_fZgIssl4V48uuVsdeW9TYJ8M3fUzaU8uqnAT-7p2rh4kgGQcDMRdil9naQabvcRDpb5B9mmp6=w1064-v0)

> 卡片在新的或更大的空間中可進行擴展。

![image alt](https://lh3.googleusercontent.com/o6gGy_ZOpsuUfTznw8ooHvzt91POO70dCZa8H-6jq10yQfbp2qPCCqhN-IzN-Uepp890pWaXrCf8B5RdvyY2d5NJBuFIy_HtAPSzHQQ=w1064-v0)

> 對話框可依據內容或特定的增量按比例擴展。

### 定位（Position）

使用者介面元件可定位於更適合的位置。

![image alt](https://lh3.googleusercontent.com/W26FX-XRwmshjmltbV46zgPsOGfJlGWJdt_T_E8oKiddywKIyvCHA0clRYvGf8vzo-9BKpaXZBFU0dWmOwpFoD3cexgajxnLmpf7iw=w1064-v0)

> 小螢幕中的頁尾清單，在較大的螢幕尺寸中重新定位為菜單。

![image alt](https://lh3.googleusercontent.com/Kdj_z_th6eCNiKaWfVtPlRNjD5J3Ap04mj_LYHsr-zOt41oRx7u41DwRy24bygYzZExfYCje-Upe7jn5VjA6ryZsG_hHKe--HXQX3a4=w1064-v0)

> 相較於其他大螢幕尺寸的使用者介面元素，浮動按鈕（FAB）可移動至更清楚可見的位置。

---

> 譯者：
> 校稿：Joanne

翻譯名詞紀錄
<ul>
    <li style="display: flex;">
        <div style="min-width: 6em;">breakpoint</div>
        <div>斷點</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">column</div>
        <div>欄</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">container</div>
        <div>容器</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">default</div>
        <div>預設</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">descriptor</div>
        <div>描述詞（描述符）</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">floating</div>
        <div>浮動</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">format</div>
        <div>型式</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">grid</div>
        <div>網格／格線系統</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">increment</div>
        <div>增量</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">layout</div>
        <div>佈局</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">list</div>
        <div>列表</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">menu</div>
        <div>目錄</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">margin</div>
        <div>外間距</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">occlude</div>
        <div>封閉（可能有更好的翻譯）</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">padding</div>
        <div>內間距</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">sticky</div>
        <div>固著</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">UI elements</div>
        <div>使用者介面元素</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;">view</div>
        <div>視域</div>
    </li>
    <li style="display: flex;">
        <div style="min-width: 6em;"></div>
        <div></div>
    </li>
</ul>
