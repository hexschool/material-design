---
title: 表面
description: Material Design 擁有三維空間的概念，這顯現在其表面、深度以及陰影上。
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->

# 表面

Material Design 擁有三維空間的概念，這顯現在其表面、深度以及陰影上。

## 材質環境

### 物理世界

在物理世界中，物件可以彼此堆疊或附著，但無法穿過彼此。而是投下陰影或反射光線。
Material Design 在介面經由 Material UI 展現與移動中顯現特質。介面在三維空間中移動的方式與在物理世界移動類似。而此模型也可以一致性地運用於應用程式間。

### 深度

Material Design 的介面存在於一個擁有光線、平面、陰影的三維空間。Material 環境裡的所有元素都沿著水平的 X 軸、垂直的 Y 軸，以及深度的 Z 軸移動。元素沿著視聽者方向產生的正向 Z 軸擺放而形成深度。

在網頁上，UI 透過操縱 Y 軸來表示 3D 空間。

![image alt](https://lh3.googleusercontent.com/YUio50AeyoSE-GFe3y8K8kX9yW5WuNyHdX-MjbEALuVZ3oAjotfq-nm1mlrYQ5O8xZPMRvMUcu_zLbS4mSSBDEuvY6puliUAdPyBzA=w1064-v0)

<p class="annotation">具有 X、Y 和 Z 軸的 3D 空間</p>

## 特性

材質表面在 Material Design 中擁有一致性、不變的特徵與行為

### 尺寸

Material 的 x 和 y 尺寸（以 dp 為單位）變化，有均勻的厚度（1dp）。

<div class="img-grid">
    <div class="grid-item">
         <img src="https://gblobscdn.gitbook.com/assets%2F-MLCYr9ilZP2Zl74Yozc%2F-MLS0RqC3vYT3BQj_myD%2F-MLgDEEEeQMDL7Kf0hoo%2F4.png?alt=media&token=b5f2f870-5213-4c0b-ae2a-40959caf3857" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>高度和寬度可以變化。</p>
    </div>
    <div class="grid-item">
         <img src="https://gblobscdn.gitbook.com/assets%2F-MLCYr9ilZP2Zl74Yozc%2F-MLS0RqC3vYT3BQj_myD%2F-MLgDWVA7UxG6y95G2Y6%2F5.png?alt=media&token=383ca654-9f18-4aab-a37a-41fe8ddf350f" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>物件厚度應永遠都是 1 dp。</p>
    </div>
</div>

### 陰影

Material 在不同高度下會產生陰影。
<div class="img-grid">
    <div class="grid-all">
        <video src="https://kstatic.googleusercontent.com/files/bd75268db1058a94e6ef200c84272d02094695f45cd685041a959a4aaaab9b0a512357f9488035a027f5cd987719c37d488827cb3946bd3ea7a19b3a846d8be2" width="100%" controls=""></video>
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>陰影顯示不同材質表面的高度。</p>
        <ol>
            <li>上視圖。</li>
            <li>等軸測投影 3D 圖，顯示材料移動時光線投射的陰影。</li>
        </ol>
    </div>
    <div class="grid-all">
        <video src="https://kstatic.googleusercontent.com/files/44914a9bbf64d61e306393b08cbe0308f0999f4c0a6f3199e3be2a44d2409e98c7dc2b889f5fd1a9506aa013c0831421e42670fdc5d8e136af586660225be4a4" width="100%" controls=""></video>
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>在沒有改變高度的狀態下不要使用陰影。</p>
        <ol>
            <li>上視圖。</li>
            <li>等軸測投影 3D 圖，僅使用顏色而不是光線和高度來描繪陰影。</li>
        </ol>
    </div>
</div>

### 解析度

<video src="https://kstatic.googleusercontent.com/files/84d8e163779cb53e9c7b566f457320991253837c2a8a1264de8e18bf9a774fd1d8f4ec7a7a1a70a4b6f3e5d0de15e009ee70ecbff5c39b656026d1a52833cc89" width="100%" controls=""></video>

<p class="annotation">Material 擁有無限的解析度。</p>

### 內容

內容以任何形狀或色彩展現在 Material 上。內容並不會增加厚度，也沒有單獨的層級。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/5427c7e76523475eb7853242815b7836817fe67ac7342fa3fc26a51e923f529c04512202adb8f764e6480fd08c99cf54bb87be25f7cdcd27582d2f4cce198c97" width="100%" controls=""></video>
    <div class="item-divide divide-gn"></div>
    <div class="item-title title-gn">該這樣做</div>
    <p class="annotation">Material 可以顯示任何形狀與顏色。內容可以獨立顯現於 Material，但被限制於 Ｍaterial 的範圍內。</p>
</div>
<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/c917dfcccc216cbe476422d73eb11b3e215ce7771b9645e5fe314ef88d623aec5311ab08ec270f19f48251c693a7870f311b597046e096700023f41ceddaabcd" width="100%" controls=""></video>
    <div class="item-divide divide-gn"></div>
    <div class="item-title title-gn">該這樣做</div>
    <p class="annotation">內容行為可以獨立於外部行為。</p>
</div>
<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/b9a10701fae594ddc09ac1d3cbb139acc5e5b2c4d1c4956121f9c68d766a398c060ff586cb923b0829803461fe5b68cd26fceca24a654e9ca3edcf60bb1eb399" width="100%" controls=""></video>
    <div class="item-divide divide-gn"></div>
    <div class="item-title title-gn">該這樣做</div>
    <p class="annotation">內容行為也可以取決於外部行為。</p>
</div>

---

### 物理特性

Material 是固體。輸入的交互事件不會穿透material。

<div class="img-grid">
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/7DJfX5QpX3mFWtygaLYHMNb433wwd6gMec8o1SDScj3LzMG1zo8_BlsWOAqIpxtl1N-XhJyfwM0shBbj5s_-bfGg-OCML2vXV5uq7A=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>輸入的事件只會影響 Material 的表面。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/cjB5QIG0CoCVs4S3EGTx6QZIJI4nioa8RuC489P2R6xOkBGCtLQos1Ub10UKge97fdaP0zfaRFVFzHRIVpgeSWWZ2qoxgPl4w5jCsg=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>輸入的事件不能穿透 Material</p>
    </div>
</div>

多個material元素不能同時佔據空間上的同一點。

<div class="img-grid">
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/QDlr41yytdtgIms9GF69MdfrLgq01ZoRJmj3l_HE5tybnKw5bwSpxwzJlc2hT3BWYvkYOPhVKdzYBDmEQ9wFP2GAtb57LwEzknS2JC4=w1064-v0" alt="">
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>防止多個元素佔據空間中的同一點，例如通過高度區分元素。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/SdPajfpni-qttHwXaGTZPhsATGXQcP0g0-Qsykwg9XcjtnOJUPtHd8zVPI3q6-_iBAvIf5A9XwOkq-fT4cYrAfHbmQ47X7yHicNfSyU=w1064-v0" alt="">
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>多個元素不能同時佔據空間中的同一點。</p>
    </div>
</div>

Material 無法彼此穿透。舉例來說，更改高度時，一個 Material 的表面無法穿透另一個 Material 的表面。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/2ad0d8c5889aa2437e7f9732ed0eaa6d68951be9e5615de15b863d7f133b09a1a5e84e12f592bc18737e43dd886470a332787835fbfed6f3573eeaf4054815c9" width="100%" controls=""></video>
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">Material 無法穿過另一個 Material。</p>
</div>

Material 無法像氣體一樣變化。

<div class="img-grid">
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/bfac2b73cd00280c6bce93d88700d469c83d63f6af7052633cb07714fb26a1280d92f223b563fb51374174040244bfdfb2c71c16b53842740794fe54ac7bef7b" width="100%" controls=""></video>
        <div class="item-divide divide-rd"></div>
        <div class="item-title title-rd">別這樣做</div>
        <p>Material 無法像氣體一樣變化。</p>
    </div>
    <div class="grid-item">
        <video src="https://kstatic.googleusercontent.com/files/6e80bef18f58ffcff4c77d26ed6f3e81b5f7b019df5242b41f856b42d7ab3b757a1590ed5e98cf497b9b382539821c2064730561de33b7c3a05494292d567cd0" width="100%" controls=""></video>
        <div class="item-divide divide-gn"></div>
        <div class="item-title title-gn">該這樣做</div>
        <p>Material 只能透過不透明度、大小與位置的改變進場與出場。</p>
    </div>
</div>

儘管 Material 的內容可能會具有這些屬性，但他並不是像液體或凝膠一樣的流體。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/1790da31c319c73adcae7c7cf69f66ad9455847d915e84eac848efe9d75c145fee84e32f058ea6ce3cc1117a83ade0271ce08bf5d01fb0e20e5860dac916edc6" width="100%" controls=""></video>
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">Material 並不能像液體或凝膠般行動。</p>
</div>
<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/933078407df46184d5081cde33f4b044ac7cb57f5522a05761a91e1f7fca586c320afa1341c7d738c62e4f892be9f503a5ff5b750b8bfd8d3120f240a1ea611c" width="100%" controls=""></video>
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">Material 不能像流體一般地運作。</p>
</div>

---

### 變化中的材質

Material 可以轉換形狀。

<video src="https://kstatic.googleusercontent.com/files/81ab4657305116c838f7bbba7cd02af157d6d25a2f651a256433a2b1bfbf56185a68a89e5e75080d7c5bda133cf8215fa8a3e562f820288edf44dd7f63fc17b8" width="100%" controls=""></video>

<p class="annotation">Material 可以轉換形狀。</p>

Material 可以轉換透明度。

![Material 可以轉換透明度](https://lh3.googleusercontent.com/EqkyuvGI6saxEt_SZcstHhveMM6beRPGlHlva5vCGloTmfy0uGYvenVuEhaZbGfQfvyBCOZMvVP85j03D83AIl95Jm2x1i6cadr7tg=w1064-v0)

<ol class="annotation">
    <li>Material 可以在整個表面上均勻的改變透明度。</li>
    <li>Material 可以改變其部分表面的不透明度。</li>
</ol>

Material 僅沿著其平面生長及收縮。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/bcc15a1e8164376b25f0988f3a88434ba20c4cf2538d2136646df69e168fb4fffdd57589276d4fa0f26f8864dd0b73b57b4af04cd5e8f8506cde8d00b4b0a99b" width="100%" controls=""></video>
    <div class="item-divide divide-gn"></div>
    <div class="item-title title-gn">該這樣做</div>
    <p class="annotation">Material 僅沿著其平面生長及收縮。</p>
</div>

Material 在 UI 藉由深度彎曲或折疊

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/9a800e54d8fe435e726579150870e9e1be46fc18edd5c53809ec1914aaf5f046c64263b3205caea2431d9926e2beef67424a5c3267445579141d3a2db766ad1f" width="100%" controls=""></video>
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <p class="annotation">Material 從不會以超出 UI 深度的方式彎曲或折疊。</p>
</div>

Material 的表面可以連結在一起，成為單個 Material

<video src="https://kstatic.googleusercontent.com/files/e7aa09d23bebf7f9482f29e5d1d6473a67987098459cb7f2bf7bb530255701a5b14e3c59e824f1c679d20853971830ad29413a844f5ce83d1ecc0c1a9ad2f2cd" width="100%" controls=""></video>

<p class="annotation">多個 Material 表面可以連接在一起，成為一個。</p>

分割後，Material 可以重新組合。假設您從平面移除了一部分 Material，則該部分將再次變為完整的平面。

<video src="https://kstatic.googleusercontent.com/files/c82b2cb40b82889f94f1e91638fa6e21adbe9b9a35f1bb7b64eb2c37dab01b1a28275c41e3ae79daf06b5ee9c50c97522130dab17b748a3b8c5bb684444afe23" width="100%" controls=""></video>

<p class="annotation">Material 可以分割且再重組。</p>

### 動作

Material 可以在環境中的任何地方自我產生或消除。

<video src="https://kstatic.googleusercontent.com/files/a1f2730917153a524207e7c276cd657f5640c4fac471c7528367cb4452b170295c1bedd0d18388d7a0fa42e33611c112fa49530b85283d58a0e3e8b7b0d1fb6e" width="100%" controls=""></video>

<p class="annotation">Material 可以自我生成或消除。</p>

Material 可以沿著任何軸移動。

<video src="https://kstatic.googleusercontent.com/files/5b2d8d9725f24ba28ca5c5b2dc8e6d0780da977c830cdb84fe3cbf221128532b410ad414b4a950bdeef167f8f2f15a3f8eb64e22c0e5598e39d331a2ce2cfe32" width="100%" controls=""></video>

<p class="annotation">Material 可以沿著各個軸移動。</p>

Material 可以協調配合彼此的移動。

<video src="https://kstatic.googleusercontent.com/files/ea5e59f85009b288a3be84918b3d34c79d145abfdbdccfa96676f55f03ac6edf364ed618c846864b9cc0614cb68a18bcf4ab60266647ecbfc2e32959c512f3b4" width="100%" controls=""></video>

<p class="annotation">Material 可以協調配合彼此的移動。</p>

沿著 Z 軸的運動通常是用戶操作後的結果。

<video src="https://kstatic.googleusercontent.com/files/016452015bdd4253126bc5e77491278ca378a135232d77c25282ab92aee0e60894b0b74926e596721bf4e5700d7878110315b0902eabbc7dc644c567879d5219" width="100%" controls=""></video>

<p class="annotation">沿著 Z 軸的運動通常是用戶操作後的結果。</p>

## 屬性

### 基本的 Material 表面

基本的 Material 表面是不透明的白色，厚度為 1 dp，並且投射陰影。Material Design 中所有的 UI 元素都是從表面修改來的。

### 行為

Material 的表面可以依照某些形式活動：

- **剛性表面**在所有互動中保持相同大小。
- **伸縮表面**可以在大小限制內沿著一個或多個邊緣伸縮，並為剛性表面。
- **視窗化表面**在操作過程中保持相同的大小。他們可以在限制區域內滾動並顯示其內容。觸碰到限制範圍後，則在其滾動方向以剛性表面呈現。

![image alt](https://lh3.googleusercontent.com/x48Q_vcBwwAWURUhGHbVhjhcjCvOvs1s1hnwP8QuCHrXyNUK9AL3AT0Tp3jaNof_3QneUgC4wgt48V-9ChSZXEaK_iedS74XTIG-LSE=w1064-v0)

<p class="annotation">Material 表面尺寸可以被內容固定。在操作中保持其表面大小。</p>

<video src="https://kstatic.googleusercontent.com/files/fce7fdecde4bd20ac7ccd64e54213f0ec948a2f155714c89924045998d821e2a89ad45cc0589a4ff94cc47bad8f8f5e1517f8410a4e50830477f3353deab4a50" width="100%" controls=""></video>

<p class="annotation">Material 表面可沿一個或多個軸增長，以容納其他內容。</p>

<video src="https://kstatic.googleusercontent.com/files/6ab1335eabee8f9f21024cf2896cc38a702fd6b54f4d898c3e88c0a5bfde5fd6b759f6688f6b59f8b5d46029e479f0635bb41fcd45961c69bd11f40e5dde2d72" width="100%" controls=""></video>

<p class="annotation">Material 表面尺寸可以保持剛性，但內容可以在表面上滾動或平移。</p>

### 複合表面

可以將表面劃分為顯示不同類型的區域。

<video src="https://kstatic.googleusercontent.com/files/43ae1676aa0b17607278dfdd6f0675773ba2fda56d32923fa557fc5024b47e785c5983da15a26647d9be9459be8ebb1a50f98938b9473de49bad9201130e6dcb" width="100%" controls=""></video>

<p class="annotation">單個表面可以包含多個平移區塊，例如獨立於滾動列表（2）平移的嵌入式地圖（1）。</p>

<video src="https://kstatic.googleusercontent.com/files/3adbc149601b60a0f404ab9b38dfa41496d801d631a8520f784d33ea8772c59c8990d0e063143af2f45c2b6a14873747b8196636ad9d4def7806e1b1796b101c" width="100%" controls=""></video>

<p class="annotation">卡片可以拉伸以顯示獨立於其他卡片內容的滾動區域。</p>

### 可拉伸的表面

可拉伸的表面在極限範圍內可以被拉伸，此時將成為剛性表面。表面可以垂直、水平或雙向拉伸。

通常，用戶操作表面時，將延一個方向拉伸。例如，點擊「更多詳細信息」可能會使卡片垂直增長並顯示其他內容。

<video src="https://kstatic.googleusercontent.com/files/d46e2ac32b8b9657cc1b37e4bd7795b446d05a3bafdb08194d934f6a09624165c59551a143c88c538e6f46c525d0ca9d2143386f7489e9fc32295b2b17ddb327" width="100%" controls=""></video>

<p class="annotation">Material 的拉伸方向可以是垂直。</p>

<video src="https://kstatic.googleusercontent.com/files/20115c6c76050f4b5a027884299f03a1a0fc2d8facc6c6d480be3ea6b1ddce1db214dbcc4c48213d3f13ac75d183fb686c6176ef49481b42ba9c32d1d13a9bb7" width="100%" controls=""></video>

<p class="annotation">Material 的拉伸方向可以是水平。</p>

<video src="https://kstatic.googleusercontent.com/files/cba2ceb42e30877b17dce789170265ad16b70442583630cceb36fcf62abfc48c57ef255a0e9b7d5444c6ac736c279894157458ee2617f5bd39dbbc9aad60420a" width="100%" controls=""></video>

<p class="annotation">Material 的拉伸方向可以獨立或同時沿著水平與垂直軸。</p>

### 表面定位與移動（x/y）

表面可以在 x 軸翰 y 軸上保持固定位置，也可以往任何方向移動。

可以將表面的移動控制在單個軸上，一次僅允許沿著單個軸移動，或著允許同時沿著兩個軸移動。

<video src="https://kstatic.googleusercontent.com/files/4882f203c9c0a782804d117e05eb5440d38d765caa99426e75a8426a027369691f13dd9a487b847be11fc9715ed2a38aef8c97d0239f33fe539b549d469c0edb" width="100%" controls=""></video>

<p class="annotation">表面可以保持在一個固定位置。上方的 app bar （1）保持固定位置，而卡片列表（2）僅在其後方垂直滾動。</p>

<video src="https://kstatic.googleusercontent.com/files/0a4587c1437c27aa708113713f73aa98424a45010b13823fff4f571d44423c40c73256754680f6554533e4f77fc104a4c7305b831b0857c9640071a9810cdf96" width="100%" controls=""></video>

<p class="annotation">表面（1、2）可以沿任何方向移動，但一次只能在單個軸上移動。</p>

<video src="https://kstatic.googleusercontent.com/files/0a4587c1437c27aa708113713f73aa98424a45010b13823fff4f571d44423c40c73256754680f6554533e4f77fc104a4c7305b831b0857c9640071a9810cdf96" width="100%" controls=""></video>

<p class="annotation">表面可以沿任何方向移動。</p>

表面可以單獨移動，也可以影響或依賴於其他表面的移動。

依賴關係可以基於多種機制，例如附近的表面在另一個表面延展時移動，或者依照視差滾動時表面間的比例移動。

<video src="https://kstatic.googleusercontent.com/files/bbd22e1092eb025f38729b277b881750f09dbdc196a2a47818cee6cea4040c9df6d2d85b5ef84ae29b849e90dc76e6dbc423515043d52de0add55ed7cb92622f" width="100%" controls=""></video>

<p class="annotation">表面可以單獨移動。</p>

<video src="https://kstatic.googleusercontent.com/files/dadf25957f2f640856970e48bd39249e96aaab6e876bfd2e7881f16bfa063ada602215e04db8ef0dc3de0abf2136a53d91e2f1c5df33cfb56680bbf5e0ceaa71" width="100%" controls=""></video>

<p class="annotation">一個表面的運動可以取決於另一個平面的運動。</p>

---

### 表面不透明度

材質可以是透明、半透明、不透明的。

透明與半透明表面上的文字可能需要進行背景處理，以保持清晰度。

透明表面缺少清晰的邊緣，因此很難確定表面的起點和終點以及涵蓋範圍。

<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/3a97779f7a3ad9e2ccf62745abeb05e3fe5cf7f3d87e324e299e80cf4f6256f6bd41f4c14d8dfb2bcc834d641588780860bf3f286f65e2e9b23426e02eea63cf" width="100%" controls=""></video>
    <div class="item-divide divide-og"></div>
    <div class="item-title title-og">警告</div>
    <ul class="annotation">
        <li>透明或半透明表面上的內容物可能需要進行背景處理以保持清晰度。</li>
        <li>等軸測圖。</li>
    </ul>
</div>
<div class="grid-all">
    <video src="https://kstatic.googleusercontent.com/files/decb556682377f0891b663ea9e4c824c232da03c0b19d01ee18715b65becef7385f2537283cf104a9936f96da411509fcc8775dd1ffd7654f824ce27fc63e7d4" width="100%" controls=""></video>
    <div class="item-divide divide-rd"></div>
    <div class="item-title title-rd">別這樣做</div>
    <ul class="annotation">
        <li>不要使用透明表面，因為它們沒有不透明性，因此很難識別內容。頂部的應用程序欄是透明的，因此無法確定文字是否出現在應用程序欄上或後面。</li>
        <li>等軸測圖。</li>
    </ul>
</div>

---

### 紗幕

紗幕可以應用於 Material 表面的臨時處理，目的是使表面上的內容不那麼突出。它們有助於將使用者的注意力吸引到屏幕的其他部分，遠離加上紗幕的表面。

紗幕有多種應用方式，包括：

- 使表面及其內容變暗或變亮
- 減少表面的不透明含量

在螢幕上一次出現的多個表面可以顯示紗幕。紗幕可以出現在任何層高上，無論是在前景還是背景中。

<div class="img-grid">
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/WqGEB4bHD_n7uE8Pt4ZW9FlR0DDgAr9iym3NLBzkrAwMDLYHGlgLVP69cr9qYG8nFlX23RKkByfgPOcpGGxe1723k67atp4yaDs-mj4=w1064-v0" alt="">
        <p>當背景內容顯示紗幕內容時，前景內容將引起更多關注。</p>
    </div>
    <div class="grid-item">
         <img src="https://lh3.googleusercontent.com/REP3S1xGOfskFZ3sw8yXYtTfh3sHVMS_-9DAOtle1srzZZ5a-crcf8oi0deYO_FhcHpe7rSeDpF37VHDCjPg0laiE8wm2fT-gnh47g=w1064-v0" alt="">
        <p>紗幕減輕了正面顯示的內容，並將注意力吸引到其後面的表面。</p>
    </div>
</div>

---

> 譯者：Joanne Chen
>
> 校稿：Joanne Chen
