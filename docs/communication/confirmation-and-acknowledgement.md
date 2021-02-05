---
title: 確認與確認通知
description: 確認與確認通知要求在執行操作前進行確認，以及對於成功操作之確認。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 確認與確認通知

確認與確認通知要求在執行操作前進行確認，以及對於成功操作之確認。

## 用法

確認與確認收悉使用者操作，可減少其已執行或未執行的行為之不確定性，還可以防止使用者犯錯。

### 操作類型

- 確認操作：要求使用者驗證是否要繼續執行此操作
- 確認通知：提供（文字）訊息讓使用者知道其操作行為是否完成

不是所有的操作行為都需要確認操作或確認通知。

---

## 確認

### 使用

當使用者介面請求使用者的確認時，其會詢問使用者是否要繼續執行方才的操作。它會帶有執行此操作的相關警告或重要資訊。
若為可回朔或可忽略的操作結果則無需再確認。舉例來說，圖片在勾選後顯示已選擇，就不需再進一步確認。

---

### 警示對話框

確認操作最好使用警示對話框

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/r7NB_oCcfMeQbPVCPktRUK5a6juDb7FXXvUukBAHa4xvgOb_TIxvGSMcOtDhzqndO0krU7d6CZgY4M7geOXBTmkI2aMftpKFU96juQ=w1064-v0" alt="">
        <p>確認刪除的警示對話框與使用者可選擇的兩項操作以離開對話框</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/HUC-4Z1o7eeWc3VovQ6_DLtJCUGnirHrF-kyNEY-eDq8SFXIb2Ec3xDiHSWjDGFbs4_BmSXn_wf_Gi2xnzEiDNmglRcAA-xHkc7RNQ=w1064-v0" alt="">
        <p>警示對話框確認使用者之操作且告知將會發生的結果</p>
    </div>
</div>

---

## 確認通知

### 用法

確認通知會告知使用者系統後台執行的操作。其顯示時間較短且可能包含取消操作的選項。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/_96knuTbrg75Ve2n1N67gZuyL9PH1YLYyNa0DfjfcFknZbtB6jYLTuK5zxiLadrSLFGOM36W5Lo4nAkfhlqMtIHtIZXNcfwkjGCV=w1064-v0" alt="">
        <p>以訊息彈出提示方式呈現的確認通知，並在幾秒後淡出</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/x2e6EBsbfZxfoplA1jBSbbncK2nHOPRyIIC4-VGrgTSam_mV4G54zdpPMM_YZ4SOInzSXmtG33QNLo_Dro3UHGbzvsO5lxXnoaMHEg=w1064-v0" alt="">
        <p>包含取消選項的確認通知，其會保留到使用者執行其他無關聯的操作，例如滾動列表</p>
    </div>
</div>

---

### 確認通知元件

確認通知可用各種元件來傳達。選擇正確的確認通知元件標準應包含：

- 緊急等級
- 包含修正問題的操作
- 螢幕持續時間（一瞬間、可關閉或兩者兼具）

短暫出現的確認通知元件意即其幾秒內會自行消失。可關閉的確認通知元件能透過選擇操作行為來關閉元件。

<table>
    <thead>
        <tr>
            <th>元件</th>
            <th>緊急等級</th>
            <th>內容</th>
            <th>行為</th>
            <th>關閉操作的總數</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>訊息彈出提示</td>
            <td>低</td>
            <td>資訊性的</td>
            <td>瞬間的與可關閉的</td>
            <td>0-1</td>
        </tr>
        <tr>
            <td>警示</td>
            <td>中</td>
            <td>修正問題；認知狀態</td>
            <td>持續的、無閉塞的與可關閉的</td>
            <td>1-2</td>
        </tr>
        <tr>
            <td>對話框</td>
            <td>高</td>
            <td>要求做選擇；確認通知</td>
            <td>持續的、閉塞（中斷）</td>
            <td>1-2</td>
        </tr>
        <tr>
            <td>空狀態</td>
            <td>中</td>
            <td>資訊性的</td>
            <td>持續的、閉塞</td>
            <td>0-2</td>
        </tr>
    </tbody>
</table>

#### 警示

使用警示傳達應用程式中持續性的訊息，通知使用者特定的改變狀態。

<img src="https://lh3.googleusercontent.com/yPdFYUXYR-EG0Rgpi6apjXEWRi17WQInIPhdIUkJ0n_u-kqKX13_G0rl_NwqaNpJ-X_Ed-lwNu7gQ9CSwgUzj4ViIXM2LwmbqpCQjkI=w1064-v0">

<p class="annotation">警示</p>

#### 訊息彈出提示

使用訊息彈出提示提供關於操作選項的簡短回饋

<img src="https://lh3.googleusercontent.com/NT6gTgqkG4jGyEtfUTpFhbvWVfKDZsBVoSms4LrRwYde3jP01h5J1g6mi9VTR3TtwT4jF4tO67eQQBQ-fl5OxqMF9oU3jeRR0CPC=w1064-v0">

<p class="annotation">訊息彈出提示</p>

<div class="img-grid">
    <div class="grid-item">
        <h4>空狀態</h4>
        <p>當使用者介面僅能線上使用且內容無法載入或同步，則會使用空狀態。使用者應能與應用程式的其他部分盡可能地互動。顯示重新載入連結有助於使用者完成其任務。</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/eUxoGw2sxzvFnDugpAyOckOUwpPLDpYcZNrhDeShFWXJOjKlshwrGpkV8Wl_9YkbGdq0256vASnxPQag-mCdWceZOp-Ft9XCfVg6pQ=w1064-v0" alt="">
        <p>空狀態</p>
    </div>
</div>

---

> 譯者：ChiaHui Lee
>
> 校稿：CH.Yu
