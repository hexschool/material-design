---
title: 導覽過渡
description: 導航過渡會在使用者於網頁畫面切換時發生，例如從主畫面切換到含有更詳細資訊的畫面。
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 導覽過渡

導航過渡會在使用者於網頁畫面切換時發生，例如從主畫面切換到含有更詳細資訊的畫面。

![導覽過渡](https://lh3.googleusercontent.com/gUXCOi4CBY0qu1-4MpJ5nDroCEu7fY_4L1xHSZXoFXqpB29uiEHSvEBAAt3eaR3fUb8RR4BFfNw6l5V6d2FzrLkaIpTBB8-VpyBOX6c=w1064-v0)

---

## 關於導航過渡

### 導航與運動

導航過渡使用動作來引導使用者在您應用程式中的兩個不同畫面間移動。這些動作暗示您的應用程式裡元素的階層結構，用移動暗示網頁元素彼此之間有什麼樣的關聯性，藉此協助使用者知道自己處在何種動線。

例如，當一個元素擴展至整個畫面，擴展動作就傳達出這個新圖層是一個**子元素**，而此元素擴展出來的源頭則是**父元素**。

### 層次結構

分層過渡將使用者於應用程序的層次結構中，向上或向下移動一級，而對等過渡則將使用者於同層級的畫面之間移動。

---

## 分層過渡

分層過渡反映了使用者於應用程式中向上或向下移動一個級別。鄰近階層的圖層有著同樣的父級與子級的關係，其中父級位於比子級較高的階層中。

### 父子元素過渡

當螢幕被觸及，一個父元素底下的子元素被提起，並透過容器的變形動畫，在原地擴展。這動作把使用者的注意力拉到子元素上（本次互動的目標），同時也強化了使用者對於父層與子層的關係。

<video src="https://kstatic.googleusercontent.com/files/e6e81c766478c82c3ad1964aecb635f28d7e9b10480a0621ff65d6a1b696b0434fdf7f4ec705fc7f08f8672fb800005025dc931e9042f3e1432047e8630ce8d2" width="100%" controls=""></video>

<p class="annotation">一組父層到子層的過渡變化</p>

<video src="https://kstatic.googleusercontent.com/files/27a0896c56d86fabacabac2303d109ba46d0cae9903821c450983e5f6dd205e2bc2e6353d76086a40cb9eba8bd6e653a40f1500bd42653ad630ad93e2fa9aff0" width="100%" controls=""></video>

<p class="annotation">在這個電子郵件程式中，信件預覽被提起，並且擴展到適當位置，顯示出完整的信件內容。</p>

---

## 對等過渡

**對等過渡**發生在相同層次結構的畫面之間。

**同級過渡**發生在共享父元素的對等元素，而**頂層對等過渡**僅用於主要目標間的切換。

### 同級過渡

共享父元素的圖層（例如相簿裡的照片、個人資料裡的各個部分，或是流程中的步驟）會一起移動以加強彼此間的關係。對等畫面從一側滑入，而同級畫面則沿反方向移出。

<video src="https://kstatic.googleusercontent.com/files/cb5657e0e6b2610f8a5696cca7ec4c93e143a2035afbd1014b36bc73fce5d1c11a97165f878682d92e69ab4ccbf4ad29ac4aa014638413b68958acb326fdd111" width="100%" controls=""></video>

<p class="annotation">頁籤指出這些元素透過處在相同的高度位置一起移動來暗示他們的關聯性。</p>

<video src="https://kstatic.googleusercontent.com/files/e5415f1b1ae0f6fc13a45c9b3a5da95d8fdb00ec8fab957fd85f0924ab2d299ea99bc0f3b647893727600506c386e304d8f623ddcc041ed66dc85ae6ec257361" width="100%" controls=""></video>

<p class="annotation">這個旅遊程式使用頁籤讓使用者在不同的旅遊類別中移動。</p>

---

### 頂層過渡

在應用程式的頂層，目的地經常被歸類為主要任務（這些任務有可能彼此不相關）。這些圖層在適當的位置採用淡入過渡模式。

<video src="https://kstatic.googleusercontent.com/files/2d74ac1b7010c89dc42de0c3c324ae97a16090530db362475ac1f3e9645c790904854ec8a34b5763cfdf8e16a070108721e300157c4f1c82f90fe18ae9f98a6e" width="100%" controls=""></video>

<p class="annotation">底部導覽列的目的地已原地轉換。</p>

<video src="https://kstatic.googleusercontent.com/files/19960869acb4a0b755ccffdd00e379e5d32586cb9dbef79942398902734f60437d654ec81fe55c58a688b8bc2e6fabae37584b4f877b5760b144d11ddd88db57" width="100%" controls=""></video>

<p class="annotation">鑑於目的地之間的關係並不密切，因此此照片的頂層目的地會有適當的過渡。</p>

---

> 譯者：[Miya Jian](https://averyj.cc)
>
> 校稿：[Joanne Chen](https://www.facebook.com/profile.php?id=100000314569800)
