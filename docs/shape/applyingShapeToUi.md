---
title: 將形狀應用至 UI
description: Material Shape System 能讓您系統化地將特殊形狀應用在不同的元件中。
---
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 將形狀應用至 UI

Material Shape System 能讓您系統化地將特殊形狀應用在不同的元件中。

## 形狀計畫

### 形狀類別

元件依其尺寸被分類在不同的形狀類別。這些類別透過改變 [類別值](https://material.io/design/shape/applying-shape-to-ui.html#baseline-shape-values)這個方法，可一次更改多個元件值。形狀類別包括：

- 小型元件
- 中型元件
- 大型元件

#### 可以自定義形狀的元件

以下元件可使用獨特的角的形狀：

<div class="img-grid">
    <div class="grid-item-triple">
        <h4>小型元件</h4>
        <p>按鈕 Button<br>
        片狀標籤 Chip<br>
        延伸底部選單列（摺疊）Expanding bottom sheet (collapsed)*<br>
        延伸浮動按鈕 Extended floating action button<br>
        浮動按鈕 Floating action button<br>
        填色文字框 Filled text field<br>
        外框線文字框 Outlined text field<br>
        訊息彈出提示 Snackbar<br>
        提示工具 Tooltip<br>
        </p>
    </div>
    <div class="grid-item-triple">
        <h4>中型元件</h4>
        <p>卡片 Card<br>
        對話框 Dialog<br>
        圖像清單項目 Image list item<br>
        目錄 Menu<br>
        </p>
    </div>
    <div class="grid-item-triple">
        <h4>大型元件</h4>
        <p>背景幕* Backdrop*<br>
        資料表格* Data table*<br>
        延伸底部選單列（擴展／全螢幕）* Expanding bottom sheet (expanded / full-screen) *<br>
        模態底部選單列（摺疊） Modal bottom sheet (collapsed)<br>
        模態底部選單列（擴展／全螢幕）* Modal bottom sheet (expanded / full-screen) *<br>
        側選單（底部 - 摺疊） Nav drawer (bottom - collapsed)<br>
        側選單（底部 - 擴展／全螢幕）* Nav drawer (bottom - expanded / full-screen) *<br>
        側選單（側邊） Nav drawer (side)<br>
        標準底部選單列（摺疊） Standard bottom sheet (collapsed)<br>
        標準底部選單列（擴展／全螢幕）* Standard bottom sheet (expanded / full-screen) *
        </p>
    </div>
</div>

*表示該元件的部分邊角需要符合規範，不能客製化。

---

## 形狀屬性

### 類別屬性

形狀類別使用屬性來定義如何將形狀分配給元件的角。以下屬性可以自定義：

- 形狀家族
- 形狀尺寸
- 對稱

<img src="https://lh3.googleusercontent.com/vwYIdQnAqesmm16Qz_mYofArdFopuhGy0LqSyLTDsi4ibwAOiAh_erAhfWY_UjbUaEW7PAI_pDU0LHZZSpP4BikGdUTrAaOiGT1H07c=w1064-v0">

上圖按鈕具有以下屬性：

|  元件   | 元素  | 類別  | 屬性  | 值  |
|  ----  | ----  | ----  | ----  | ----  |
| 按鈕 | 容器 | 小型 | 形狀家族<br>尺寸 | 圓形的<br>4dp；4dp；4dp；4dp |

<img src="https://lh3.googleusercontent.com/7M3Di5yLOUVKefXvDl2Je-GA7e4UGx1iTfIlJSWc98UGTTaQAPj13ssgeeQG30xttGmZvp74nFSw6QfMCsWXUEur9qX1T0N8dHdT=w1064-v0">

上圖的模態底部選單列具有以下屬性：

|  元件   | 元素  | 類別  | 屬性  | 值  |
|  ----  | ----  | ----  | ----  | ----  |
| 模態底部選單列 | 容器 | 中型 | 形狀家族<br>尺寸 | 圓形的<br>4dp；4dp；n/a；n/a |

*底部選單列只有左上方與右上方的角能自定義

<br>

### 形狀家庭

元件的邊角形狀只能從下圖兩種樣式中擇一使用：

- 圓角
- 切角

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/1w_mbPBznKh_9VFoHt7VtJnBMRN6kvUjilBFo_HHdZgRxgDL0CJmoJzq8P9vGijRFdJc6n-CP84N4kfILq-yLBFbSXA5rO0VprjuTdM=w1064-v0" alt="">
        <p>圓角</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/pr5qdgmjKiV_-yIDGloYdM5Rvym3zkVZBm3trUUgJYg-xCM3KkljVlxaJSw-dNGadX4XLUVO58uW5wCsy6Hp7BgVB14pORKeKASf=w1064-v0" alt="">
        <p>切角</p>
    </div>
</div>

---

### 形狀尺寸

可以使用**絕對值**或**百分比值**決定形狀尺寸。

#### 絕對（值）尺寸

**絕對**值尺寸是一特定的值，像是 2dp。當圓角或切角為絕對（值）尺寸時，不論元件高度為何，其皆維持不變。舉例來說，若元件動態地改變高度，其角的依然會維持圓角或切角。

#### 百分比（值）尺寸

小型元件角的形狀可根據其元件絕對高度的百分比（值）定義尺寸，意即角的形狀會隨著元件高度而改變。

<div class="img-grid">
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/60d7527cb4004f8c5fe7fe6077d9fa07dc3fc4869c69003798c3764062f09907eeabed88abe4d8bd0b69e37a87d2a79561c9c46f98379fce2fbd45cbfdfafe34" width="100%" controls=""></video>
        <p>具有絕對（值）尺寸角的按鈕，其角的形狀在按鈕增高時依然維持相同尺寸。</p>
    </div>
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/fdf20d6a3df484a80e6e1438bafc2efeb40f900852f591bda78d944c24af4b662901827c2dc0b48a69cf4e396263c7ca8955708290be0cfde9580dc9a4106d3c" width="100%" controls=""></video>
        <p>具有百分比（值）尺寸角的按鈕，其角的形狀在按鈕增高時會跟著變大。</p>
    </div>
</div>

避免在會動態改變高度的元件上使用百分比（值）尺寸，因為角的形狀會根據高度而改變。

<div class="img-grid">
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/f72b1dfda03687f9b87cec1458758740cd89ed185f3e1b71307ca5c3b379b8a27aa83c91cbb7cb0ba55e209052da23bb99284abf1c290b748b82f29d3c15bfbc" width="100%" controls=""></video>
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這麼做</div>
        <p>在會根據內容多寡而改變自身大小的元件（像是卡片）使用絕對（值）圓角</p>
    </div>
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/09ca0b4ea3e0ba7d832525aac19bdfced3e2050bc460aff972b9cb0b40ed793dcc813d29b57528a83468227fa59f03190575ea7155de1543e4ff90f76391310c" width="100%" controls=""></video>
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這麼做</div>
        <p>不要在會動態改變尺寸的元件上使用百分比（值）圓角</p>
    </div>
</div>

---

### 元件對稱

角的形狀可應用於對稱元件或非對稱元件上。對稱元件的角均為相同的值，非對稱元件的角可為不同的值。

- 對稱元件：所有的角使用單一形狀家庭與尺寸
- 非對稱元件：自左上的角開始，順時鐘個別使用形狀家族與尺寸

當鏡射 RTL 佈局的設計時，若元件單獨定位在使用者介面的邊緣或會影響可用性，其可能需要自定義其鏡射的形狀。基於品牌的自定義形狀可以選擇是否要鏡射。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/ORyqP2NvfzPXqYh-3680tDMf7pXVEHKzqQ0LUgB1PLE4jUlg11TGJ3pkzPjqGs-HesLy4jeOe9VHV97sCT34LAAFkDin5XM7gXul6Q=w1064-v0" alt="">
        <p>對稱元件</p>
    </div>
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/sBhU6LMZJSnx7Egdmgsa3umHruqSrBuZ_g3ggfxs1F2i8fqIMRNTcLUPg-TJnzOYJZwvf_5SLa5vxPolxVuTgPf0vN_qaqVDo_bg1g=w1064-v0" alt="">
        <p>非對稱元件</p>
    </div>
</div>

固定在畫面邊緣的元件的角落不能自定義形狀，特殊的形狀在固定角會產生縫隙，而露出元件後面的內容。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/pE2lBcmr-wNhN7lRoeHKyIdGMBcT7aKGWrd1eqi8Jut12M39Uk_WwaBLYfr1X26g-ARqIMwV5U7oAsOs1OOn03SBEC_i4EMi9gN2=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>錨點定於螢幕邊緣的角不可自定義形狀</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/F2Ngcdw-j7PpETd1oc0oy7YIGS9voMkdfkC4l4ksYuxvX7irs9fnUg0LNUA5WhMtL67ZMb9GFuk6heQrC5c476EZ19Rae7c_EFpzJC8=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>錨點定於螢幕邊緣的角自定義形狀</p>
    </div>
</div>

---

### 類別與覆寫

#### 形狀類別

若要在同類別的所有元件應用形狀家族與尺寸，需設定形狀類別的值。當對形狀類別進行調整時，會影響該類別中所有元件，但重疊的元件除外。

#### 形狀覆寫

當元件需要的形狀與類別定義不同，可以覆寫其形狀家族或尺寸。覆寫可用於品牌、可用性、佈局、層次結構或其他要素。
當為特定元件指定值，將會覆寫其自形狀類別繼承的值。
基線主題包含了多個帶有覆寫屬性形狀的元件。

<img src="https://lh3.googleusercontent.com/5c89ApZK4DzeeAsoTqdAmlUDhU2aVi5Bvy3iExR75voL-RCf0rUt4EuFKm0lA8mIOYDVqL_veVvNQqf8cDaK_M-AUzeLuUIU1VYkqg=w1064-v0">

<ol class="annotation">
    <li>具基線形狀家族與尺寸值的片狀標籤和浮動按鈕</li>
    <li>具自定義形狀家族與尺寸值的片狀標籤和浮動按鈕</li>
</ol>

|  元件   | 元素  | 類別  | 屬性  | 值  |
|  ----  | ----  | ----  | ----  | ----  |
| 片狀標籤  | 容器 | 覆寫* | 形狀家族<br>尺寸 | 圓形的<br>50% |
| 浮動按鈕 FAB  | 容器 | 覆寫* | 形狀家族<br>尺寸 | 圓形的<br>50% |

*基線主題的片狀標籤與浮動按鈕覆寫了小型元件的形狀分類的尺寸值。

---

## 挑選形狀

### 品牌與層次

將形狀應用於元件時，您所選擇的形狀需可支撐您的品牌與使用者介面的層次。

#### 品牌

將形狀應用於使用者介面時，確認品牌的特殊形狀，像是有機外形或幾何外形，可以反應品牌特性。

以其形狀為基礎，根據產品開發相似且具關聯的形狀，有助於將品牌識別一致化。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/MQYyv2H8n6Jad7hKZmlisbwLCuvDLyl89n_sdC_sa2kXweZsK2L5D9HKh_Kh0P8Zk5gcCtpkkr0bs_6k7uh5NmcMBmr5qfTQlNC7Pw=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>具識別度的形狀，像是這個鑽石徽標，通常用來發展一套與之類似或相關聯的形狀，以一致化應用程式或產品的品牌識別</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/LJO3099BQdEDu_lTvzW-VVAhiz81bzr-kT_xQokPxoUBzdulVsIK2xUFZe3OBRHwJxzqte0iE7lf_0TQoZinKjLHxXysWo2vdeYtdBY=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>混和的形狀會讓品牌風格難以識別</p>
    </div>
</div>

#### 層次

具特殊形狀的元件較為顯眼，並用於吸引使用者注意螢幕的特定部分或強調佈局的某些區域。舉例來說，使用特殊形狀的浮動按鈕有助於從其他使用者介面元素中脫穎而出。

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/4S3S4S-N5RKSWtZogXqO1mA5VgiwBSrWy78G3iY8VqzjztePeWO3k3mrmKJMk9m3aqV6PhzH4uKeDGaql9TNPTruUWcPPcQFlywVgks=w1064-v0">
    <div class="item-divide divide-gn"></div>
    <div class="item-title title-gn">該這樣做</div>
    <p class="annotation">浮動按鈕的圓形外型較其他線型使用者介面元素突出。</p>
</div>

<div class="grid-all">
    <img src="https://lh3.googleusercontent.com/BGcJ5Ygygut4jdZ3poKNt8_TvDeUsjzr147a78d8s1cSaSautZXBJQ6OLNTXcyl_cKcXuid_2VCfAcdT7JbMgWbcUGIiaVWu34KLYw=w1064-v0">
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">浮動按鈕在擁有相同形狀的其他元素中很難被找到。</p>
</div>

#### 結合品牌與層次

在您的產品元件上使用相似且相關聯的形狀，以建立一致性的層次與品牌識別。

特別突出的元件也可以使用能傳達品牌之形狀。使用覆寫將品牌形狀應用於元件。

過度使用品牌形狀將會降低形狀與品牌之連結，進而失去品牌識別度。

過多的獨特形狀會導致沒有任何形狀特別突出，且各元件間將缺乏視覺凝聚力。

---

### 變形

元件在兩種形狀間變化時，應該考慮到兩種變化可能會影響到元件的識別度。

展開後會填滿畫面的元件在展開時不應該有形狀。

#### 狀態變化

元件可以使用**形狀**變換來表示**狀態**的改變。例如，選擇狀態下的卡片可以使用特殊的形狀，使其與未選擇的卡片做區隔。

#### 全螢幕元件

不要在全螢幕和展開式元件使用角。矩形提供了更多空間與可滑動內容，且避免全螢幕元件後的內容自矩形外緣與畫面邊緣之間的隙縫露出。

<div class="img-grid">
    <div class="grid-item">
        <img src="https://lh3.googleusercontent.com/BhSge6ZBmSoQnZfoCndBgOSf_vMQEWekhzD50ua6nM3FK_kONFH6GPjf785bOzwKw8Ab_XjQyF8dl9MJmWuYH5uwRrm9TTKmTs2P7Q=w1064-v0" alt="">
        <p>圓角通常會用來標示被選擇的卡片，與未被選擇的卡片做區分</p>
    </div>
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/27ab947a2465d97211ae4eaeaeb78c5666250ee913188f0153498d6b5ab6182e8fa9669ba4b3da2dc06a27d94d0ed68470da86364f164e7895c8ccd8c3a1da1f" width="100%" controls=""></video>
        <p>當底部選單列展開為全螢幕時移除了圓角</p>
    </div>
</div>

---

### 內容與形狀的相互影響

元件內容與系統的客製化將會影響其形狀。

#### 其他系統的改變

自定義系統（像是更改樣式比例）可能會影響元件形狀之使用。舉例來說，增加被使用的元件尺寸可能會造成：

- 元件內的文字被形狀裁切
- 若形狀使用百分比（值）尺寸，元件的高度與外型將會被改變

#### 內容的改變

內容改變也會影響元件的形狀。舉例來說，若文字長度增加以至換行，將會增加元件的高度，進而影響已經設定百分比的形狀。

#### 形狀的選擇

改變形狀的樣式可能影響元件的內容。舉例來說，在相同尺寸下，大切角的卡片比起圓角會更靠近內容區域，可能會影響佈局或剪裁圖片。為避免不可預期的結果，請將形狀家族與尺寸之選擇連同元件布局與內容一同考量。

<div class="grid-all">
    <video src="https://lh3.googleusercontent.com/BtQSnfb2GXBYRXno-_q3qqe4phVnKZCPeMhzmb6uuyemuB3yyRUCRY_OVrfM2dNPkRdxyANuvOcoCF-iOekQ63r-ba1Lp4l_CbIQ50M=w1064-v0" width="100%" controls=""></video>
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <p class="annotation">切角佔去的內容空間大於圓角</p>
</div>

---

## 基線形狀值

### 形狀值範圍

每個元件能以不同方式應用形狀。每個形狀家族的建議值範圍列於下方表格。

#### 如何閱讀表格

每個元件皆有兩個值：尺寸與形狀家族。其值將會依照順時鐘方向依序應用於角（類似 CSS 語法）：
左上角、右上角、右下角、左下角
若列出單一值的範圍，則該範圍將應用於可成形的所有角。
角形狀的最大值為元件絕對高度的 50%。由於切角可能會裁切到內容，因此不建議用於某些元件。

#### 類別：小型元件

<table>
    <thead>
        <tr>
            <th>類別或元件</th>
            <th>角可否成形？</th>
            <th>圓角最小值／最大值</th>
            <th>切角最小值／最大值</th>
            <th>基線主題值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>小型元件類別</td>
            <td>不適用</td>
            <td>0-28；<br>0-50 %</td>
            <td>0-28；<br>0-50 %</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>按鈕</td>
            <td>可；可；可；可</td>
            <td>0-20；<br>0-50 %</td>
            <td>0-6；<br>0-50 %</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>片狀標籤</td>
            <td>可；可；可；可</td>
            <td>0-16；<br>0-50 %</td>
            <td>0-0；<br>0-0 %</td>
            <td>圓形的，50 %*</td>
        </tr>
        <tr>
            <td>延伸底部選單列（摺疊）</td>
            <td>可；可；可；否</td>
            <td>0-24；<br>0-50 %</td>
            <td>0-12；<br>0-50 %</td>
            <td>圓形的，24dp*</td>
        </tr>
        <tr>
            <td>延伸浮動按鈕</td>
            <td>可；可；可；可</td>
            <td>0-28；<br>0-50 %</td>
            <td>0-28；<br>0-50 %</td>
            <td>圓形的，50 %*</td>
        </tr>
        <tr>
            <td>浮動按鈕</td>
            <td>可；可；可；可</td>
            <td>12-28；<br>20-50 %</td>
            <td>12-28；<br>20-50 %</td>
            <td>圓形的，50 %*</td>
        </tr>
        <tr>
            <td>填色文字框</td>
            <td>可；可；可；可</td>
            <td>0-20；<br>0-50 %</td>
            <td>0-12；<br>0-50 %</td>
            <td>圓形的<br>4dp; 4dp; 0dp; 0dp</td>
        </tr>
        <tr>
            <td>外框線文字框</td>
            <td>可；可；可；可</td>
            <td>0-20；<br>0-50 %</td>
            <td>0-12；<br>0-50 %</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>訊息彈出提示</td>
            <td>可；可；可；可</td>
            <td>0-24；<br>0-50 %</td>
            <td>0-12；<br>0-50 %</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>提示工具</td>
            <td>可；可；可；可</td>
            <td>0-16；<br>0-50 %</td>
            <td>0-0；<br>0-0 %</td>
            <td>圓形的，4dp</td>
        </tr>
    </tbody>
</table>
<p>*表示覆寫類別值</p>

#### 類別：中型元件

<table>
    <thead>
        <tr>
            <th>類別或元件</th>
            <th>角可否成形？</th>
            <th>圓角最小值／最大值</th>
            <th>切角最小值／最大值</th>
            <th>基線主題值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>中型元件類別</td>
            <td>不適用</td>
            <td>0-36</td>
            <td>0-16</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>卡片</td>
            <td>可；可；可；可</td>
            <td>0-24</td>
            <td>0-16</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>對話框</td>
            <td>可；可；可；可</td>
            <td>0-36</td>
            <td>0-16</td>
            <td>圓形的，4dp</td>
        </tr>
        <tr>
            <td>圖像清單項目</td>
            <td>可；可；可；可</td>
            <td>0-24</td>
            <td>0-16</td>
            <td>圓形的，0dp*</td>
        </tr>
        <tr>
            <td>目錄</td>
            <td>可；可；可；可</td>
            <td>0-20</td>
            <td>0-12</td>
            <td>圓形的，4dp</td>
        </tr>
    </tbody>
</table>
<p>*表示覆寫類別值</p>

#### 類別: 大型元件

<table>
    <thead>
        <tr>
            <th>類別或元件</th>
            <th>角可否成形？</th>
            <th>圓角最小值／最大值</th>
            <th>切角最小值／最大值</th>
            <th>基線主題值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>大型元件類別</td>
            <td>不適用</td>
            <td>0-36</td>
            <td>0-24</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>背景幕</td>
            <td>可；可；否；否</td>
            <td>0-36</td>
            <td>0-24</td>
            <td>圓形的，24dp*</td>
        </tr>
        <tr>
            <td>資料表格</td>
            <td>可；可；可；可</td>
            <td>0-20</td>
            <td>0-12</td>
            <td>圓形的，4dp*</td>
        </tr>
        <tr>
            <td>延伸底部選單列（擴展／全螢幕）</td>
            <td>否；否；否；否</td>
            <td>0-0</td>
            <td>0-0</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>模態底部選單列（摺疊）</td>
            <td>可；可；否；否</td>
            <td>0-24</td>
            <td>0-12</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>模態底部選單列（擴展／全螢幕）</td>
            <td>否；否；否；否</td>
            <td>0-0</td>
            <td>0-0</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>側選單（底部 - 摺疊）</td>
            <td>可；可；否；否</td>
            <td>0-24</td>
            <td>0-12</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>側選單（底部 - 擴展／全螢幕）</td>
            <td>否；否；否；否</td>
            <td>0-0</td>
            <td>0-0</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>側選單（側邊）</td>
            <td>可；可；可；可</td>
            <td>0-36</td>
            <td>0-18</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>標準底部選單列（摺疊）</td>
            <td>可；可；否；否</td>
            <td>0-24</td>
            <td>0-12</td>
            <td>圓形的，0dp</td>
        </tr>
        <tr>
            <td>標準底部選單列（擴展／全螢幕）</td>
            <td>否；否；否；否</td>
            <td>0-0</td>
            <td>0-0</td>
            <td>圓形的，0dp</td>
        </tr>
    </tbody>
</table>

*代表覆蓋類別值

#### 不能被客製化形狀的元件

以下元件不能客製化形狀，因為可能會干擾元件的識別性或可讀性。形狀可能也暗示了不支援的操作，舉例來說，帶圓角的底部應用列（bottom app bar）可能會讓人看起來可向上拖動，但實則不行。

- 應用列：底部（App Bar: Bottom）
- 應用列：頂部（App Bar: Top）
- 橫幅（Banner）
- 核取方塊（Checkbox）
- Divider
- 延伸底部選單列（全螢幕時）（Expanding bottom sheet (when full screen)）
- 模態底部選單列（全螢幕時）（Modal bottom sheet (when full screen)）
- 單選按鈕（Radio button）
- 標準底部選單列（全螢幕時）（Standard bottom sheet (when full screen)）
- 頁籤（Tabs）

---

> 譯者：[許文修（Kevin Hsu）](https://github.com/kevinshu1995)
>
> 校稿：[CH.Yu](https://github.com/yuu-chien)
