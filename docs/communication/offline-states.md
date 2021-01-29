---
title: 離線狀態
description: 離線狀態允許用戶無需透過網際網路即可與應用程式互動。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 離線狀態

離線狀態允許用戶無需透過網際網路即可與應用程式互動。

## 原則

<div style="width:100%;display:flex">

<div style="width:100%;margin-right:20px">

 ![適應連線](https://i.imgur.com/2ui13Yp.png)

### 適應連線

當用戶連線緩慢，斷斷續續或完全沒有連接時，調整功能或應用程式的行為。
</div>

<div style="width:100%;margin-right:20px">

![說明功能](https://i.imgur.com/OkOoX5O.png)

### 說明功能

使用UI設計來說明離線功能如何工作並傳達其預期目的。
</div>

<div style="width:100%;margin-right:20px">

 ![顯示可用內容](https://i.imgur.com/qrH4RYd.png)

### 顯示可用內容

 連線受限時下載可用內容，而不是不下載任何內容。
</div>
</div>

## 離線功能

如果您的應用程式具有離線狀態下可用的功能，而其他功能則不可用，則應指出其當前狀態為離線還是在線。

例如，可以從離線狀態管理離線檔案。

## 離線功能

傳達您的應用程式中的某個操作處於離線狀態，請顯示帶有文字標籤"離線"的圖像。

<div style="width:100%;display:flex">

<div style="width:100%;margin-right:20px">

![當用戶離線執行操作時，該應用程式會顯示離線標誌。](https://i.imgur.com/2Srk2rB.png)

當用戶離線執行操作時，該應用程式會顯示離線標誌。

</div>

<div style="width:100%;margin-right:20px">

![當離線連接網站時，該應用程式在連結旁顯示一個離線圖像。](https://i.imgur.com/UJuLBkG.jpg)

當離線連接網站時，該應用程式在連結旁顯示一個離線圖像。

</div>

</div>

## 離線無功能時

如果功能無法離線使用，請使用“雲關閉”圖像進行指示。僅在產品離線時顯示此圖像。可能的話，將文字標籤“ 離線”與圖像一起使用。

<div style="width:100%;display:flex">

<div style="width:100%;margin-right:20px">

![應用程式會標示您的離線狀態，並提供用戶有關離線時可執行的協助。](https://i.imgur.com/hSRtPFi.png)

應用程式會標示您的離線狀態，並提供用戶有關離線時可執行的協助。

</div>

<div style="width:100%;margin-right:20px">

![當用戶再次連結到網路之前，應用程式提供用戶下載離線字典使用。](https://i.imgur.com/adG5C2R.png)

當用戶再次連結到網路之前，應用程式提供用戶下載離線字典使用。

</div>

</div>

## 離線設定

為用戶提供一個管理離線設定的位置。如果您在應用程式中使用圖像，請使用離線圖像標記該目的地。

<div style="width:80%;">

![選單項目"離線區域"(清單項目的第五個)
標示出離線使用的資訊儲存位置。](https://i.imgur.com/JTIauHp.png)

選單項目"離線區域"(清單項目的第五個)
標示出離線使用的資訊儲存位置。

</div>

## 離線互動

### 下載檔案

離線功能用戶可以連結以前下載的檔案，例如影片和網站。要離線連結它們，用戶必須在具有網際網路連接的情況下將檔案下載到其設備上。

### 下載文字

為了表示可以下載檔案，請同時顯示下載圖像和單字“ 下載”。包括檔案大小，以幫助用戶確定檔案是否太大。

離線時，允許用戶選擇檔案是否需要下載，在之後連結到網路的時候。

<div style="width:100%;display:flex">

<div style="width:100%;margin-right:20px">

![將下載圖像與單字“下載”搭配在一起。](https://i.imgur.com/35JvDww.png)

#### 建議

將下載圖像與單字“下載”搭配在一起。

</div>

<div style="width:100%;margin-right:20px">

![不要使用切換控制元件來下載單一檔案](https://i.imgur.com/w1d2J9S.png)

#### 不建議

不要使用切換控制元件來下載單一檔案。切換元件表示一個狀態是“打開”或是“關閉”，而不是一次性下載。

</div>

</div>

## 圖像學

下載檔案後，通過顯示離線圖像來表明它可以離線使用。

![通過顯示離線圖像來表明它可以離線使用](https://i.imgur.com/yFIkH1l.png)

[下載](https://material.io/icons/#ic_file_download)和[離線](https://material.io/icons/#ic_offline_pin)圖像在[Material icon library](https://material.io/icons/)圖庫中可使用。

## 動畫

為了表示已下載的項目可供離線使用，請顯示下載圖像至離線圖像的動畫，動畫過程請參閱[progress indicators](https://material.io/components/progress-indicators) 方針 。

![進度條展示影片](https://i.imgur.com/iGSX3WA.jpg)

[展示影片連結](https://kstatic.googleusercontent.com/files/a1c79ae980355ade75695cf9e6b2cae7bea9597aa9be18dd5964a2bb967c79adffa7e5bbbc85f442085afaa2b6385599595c242fc43280cf4cfa04ccdd18be73)
進度條在兩個圖像之間轉換。
  
## 刪除下載的內容
  
為了節省記憶體空間，用戶可以刪除其設備上的檔案。 您的應用程序應允許用戶刪除所有下載的檔案。

<div style="width:100%;display:flex">

<div style="width:100%;margin-right:20px">

![對已下載的檔案顯示帶有刪除圖像的刪除動作。
](https://i.imgur.com/eD2z4ti.png)

對已下載的檔案顯示帶有刪除圖像的刪除動作。

</div>

<div style="width:100%;margin-right:20px">

![顯示透過刪除檔案將會節省多少空間。](https://i.imgur.com/vf4DVc2.png)

顯示透過刪除檔案將會節省多少空間。

</div>

</div>
