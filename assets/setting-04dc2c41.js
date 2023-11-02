var At=Object.defineProperty;var _t=(e,t,r)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var v=(e,t,r)=>(_t(e,typeof t!="symbol"?t+"":t,r),r);import"./app-53ca4b0c.js";function St(e,t="h3"){const r=document.createElement(t);return r.textContent=e,r}const It={server:[window.location.origin+window.location.pathname,"https://d2n.moe/petpet-js","https://d2n.moe/petpet"],lang:void 0,template:void 0},Ft=["lang","template","server"],ye=new URL(location.href),Ie=Rt();function Rt(){const{lang:e,template:t,server:r=[]}=Ot();let n={...It,...JSON.parse(localStorage.getItem("config")||"{}")};n.lang=e??n.lang,n.template=t??n.template;function i(){localStorage.setItem("config",JSON.stringify(n))}return n.save=i,n.server=[...new Set([...r,...n.server])],n=new Proxy(n,{set(a,s,o){return Array.isArray(a[s])?a[s]=new Proxy(o,{set(l,c,u){return l[c]=u,i(),!0},deleteProperty(l,c){return l.splice(c,1),i(),!0}}):a[s]=o,i(),!0}}),n.save(),n}function Pt(e,t){if(window.history.replaceState){if(!t){ye.searchParams.delete(e);return}ye.searchParams.set(e,t),window.history.replaceState({},"",ye.toString())}}function Ot(){const e={};for(let t of Ft){const r=ye.searchParams.get(t);if(r)switch(t){case"server":e.server=r.split(","),Pt("server",void 0);break;default:e[t]=r;break}}return e}const Mt={selectTemplate:"Template auswählen",uploadAvatar:"Avatar hochladen",setText:"Text setzen",result:"Ergebnis",typeToSearch:"Suche",cancel:"Abbrechen",save:"Speichern",add:"Hinzufügen",x:"X",y:"Y",text:"Text",color:"Farbe",size:"Größe",font:"Schriftart",fontStyle:"Schriftstil",strokeSize:"Konturgröße",strokeColor:"Konturfarbe",hidden:"Verstecken",delete:"Löschen",delay:"Verzögerung",play:"Abspielen",stop:"Stoppen",workers:"Anzahl der Threads",quality:"Qualität",background:"Hintergrund",dither:"Dither",download:"Download",copy:"Kopieren",share:"Teilen",notSelected:"Nicht ausgewählt",noAvatar:"Keine Avatar",rightClickOrLongPress:"Rechtsklick oder Doppelklick",type:"Typ",deform:"Verformung",round:"Rund",rotate:"Drehen",avatarOnTop:"Avatar oben",opacity:"Deckkraft",fit:"Anpassen",style:"Stil",FLIP:"Umdrehen",MIRROR:"Spiegeln",GRAY:"Grau",BINARIZATION:"Binarisierung"},Bt={selectTemplate:"Sélectionnez un modèle",uploadAvatar:"Télécharger avatar",setText:"Définir le texte",result:"Résultat",typeToSearch:"Rechercher",cancel:"Annuler",save:"Enregistrer",add:"Ajouter",x:"X",y:"Y",text:"Texte",color:"Couleur",size:"Taille",font:"Police",fontStyle:"Style de police",strokeSize:"Taille du contour",strokeColor:"Couleur du contour",hidden:"Cacher",delete:"Supprimer",delay:"Délai",play:"Lecture",stop:"Arrêter",workers:"Nombre de nœuds",quality:"Qualité",background:"Fond",dither:"Dither",download:"Télécharger",copy:"Copier",share:"Partager",notSelected:"Non sélectionné",noAvatar:"Aucun avatar",rightClickOrLongPress:"Cliquer ou longue-cliquer pour sélectionner",type:"Type",deform:"Déformation",round:"Rond",rotate:"Rotation",avatarOnTop:"Avatar en haut",opacity:"Opacité",fit:"Ajustement",style:"Style",FLIP:"Retourner",MIRROR:"Miroir",GRAY:"Gris",BINARIZATION:"Binarisation"},Dt={selectTemplate:"テンプレートを選択",uploadAvatar:"アバターをアップロード",setText:"テキストを設定",result:"結果",typeToSearch:"検索",cancel:"キャンセル",save:"保存",add:"追加",x:"X",y:"Y",text:"テキスト",color:"色",size:"サイズ",font:"フォント",fontStyle:"フォントスタイル",strokeSize:"線の太さ",strokeColor:"線の色",hidden:"隠す",delete:"削除",delay:"遅延",play:"再生",stop:"停止",workers:"線程数",quality:"質量",background:"背景色",dither:"抖動",download:"ダウンロード",copy:"コピー",share:"シェア",notSelected:"未選択",noAvatar:"アバターなし",rightClickOrLongPress:"右クリックまたは長押し",type:"タイプ",deform:"変形",round:"ラウンド",rotate:"回転",avatarOnTop:"上にアバター",opacity:"不透明度",fit:"フィット",style:"スタイル",FLIP:"反転",MIRROR:"ミラー",GRAY:"グレー",BINARIZATION:"二値化"},zt={selectTemplate:"템플릿 선택",uploadAvatar:"아바타 업로드",setText:"텍스트 설정",result:"결과",typeToSearch:"검색",cancel:"취소",save:"저장",add:"추가",x:"X",y:"Y",text:"텍스트",color:"색",size:"크기",font:"글꼴",fontStyle:"글꼴 스타일",strokeSize:"선 굵기",strokeColor:"선 색상",hidden:"숨김",delete:"삭제",delay:"연속",play:"재생",stop:"중지",workers:"쓰레드 수",quality:"질량",background:"배경색",dither:"쓰레드",download:"다운로드",copy:"복사",share:"공유",notSelected:"선택되지 않음",noAvatar:"아바타 없음",rightClickOrLongPress:"마우스 오른쪽클릭",type:"유형",deform:"변형",round:"둥근",rotate:"회전",avatarOnTop:"상단 아바타",opacity:"불투명도",fit:"맞춤",style:"스타일",FLIP:"뒤집기",MIRROR:"거울상",GRAY:"그레이",BINARIZATION:"이진화"},Lt={selectTemplate:"Выберите шаблон",uploadAvatar:"Загрузить аватар",setText:"Установить текст",result:"Результат",typeToSearch:"Поиск",cancel:"Отмена",save:"Сохранить",add:"Добавить",x:"X",y:"Y",text:"Текст",color:"Цвет",size:"Размер",font:"Шрифт",fontStyle:"Стиль шрифта",strokeSize:"Толщина обводки",strokeColor:"Цвет обводки",hidden:"Скрыть",delete:"Удалить",delay:"Задержка",play:"Воспроизведение",stop:"Остановить",workers:"Количество нитей",quality:"Качество",background:"Фон",dither:"Контроль",download:"Скачать",copy:"Копировать",share:"Поделиться",notSelected:"Не выбрано",noAvatar:"Нет аватара",rightClickOrLongPress:"Кликните или перетащите мышкой",type:"Тип",deform:"Деформация",round:"Круглый",rotate:"Поворот",avatarOnTop:"Аватар сверху",opacity:"Непрозрачность",fit:"Подгонка",style:"Стиль",FLIP:"Перевернуть",MIRROR:"Зеркало",GRAY:"Серый",BINARIZATION:"Бинаризация"},Nt={selectTemplate:"Select template",uploadAvatar:"Upload avatar",setText:"Set text",result:"Result",typeToSearch:"Type to search",cancel:"Cancel",save:"Save",add:"Add",x:"X",y:"Y",text:"Text",color:"Color",size:"Size",font:"Font",fontStyle:"Font Style",strokeSize:"Stroke Size",strokeColor:"Stroke Color",hidden:"Hidden",delete:"Delete",delay:"Delay",play:"Play",stop:"Stop",workers:"Workers",quality:"Quality",background:"Background",dither:"Dither",download:"Download",copy:"Copy",share:"Share",notSelected:"Not Selected",noAvatar:"No Avatar",rightClickOrLongPress:"Right Click or Long Press",type:"Type",deform:"Deform",round:"Round",rotate:"Rotate",avatarOnTop:"Avatar on Top",opacity:"Opacity",fit:"Fit",style:"Style",FLIP:"Flip",MIRROR:"Mirror",GRAY:"Gray",BINARIZATION:"Binarization"},jt={selectTemplate:"选择模板",uploadAvatar:"上传头像",setText:"设置文字",result:"结果",typeToSearch:"搜索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"颜色",size:"大小",font:"字体",fontStyle:"字体风格",strokeSize:"描边大小",strokeColor:"描边颜色",hidden:"隐藏",delete:"删除",delay:"延迟",play:"播放",stop:"停止",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"未选择",noAvatar:"无头像",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},Gt={selectTemplate:"烟弹口味",uploadAvatar:"动物朋友的相片",setText:"自调烟油",result:"试抽一下",typeToSearch:"找一找",cancel:"不",save:"好了",add:"多一个",x:"左右",y:"上下",text:"藏话",color:"烟油颜色",size:"烟嘴尺寸",font:"雾化器",fontStyle:"雾化湿度",strokeSize:"烟杆长度",strokeColor:"烟杆颜色",hidden:"低欧姆雾化",delete:"不抽了",delay:"吐圈速度",play:"开溜",stop:"等会",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"芋泥波波",noAvatar:"雪豹已失联",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},Ut={selectTemplate:"選擇模板",uploadAvatar:"上傳頭像",setText:"設置文字",result:"結果",typeToSearch:"檢索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"顏色",size:"大小",font:"字型",fontStyle:"字型風格",strokeSize:"描邊大小",strokeColor:"描邊顏色",hidden:"隱藏",delete:"刪除",delay:"延遲",play:"播放",stop:"停止",workers:"線程數",quality:"質量",background:"背景",dither:"抖動",download:"下載",copy:"複製",share:"分享",notSelected:"未選擇",noAvatar:"無頭像",rightClickOrLongPress:"右鍵或長按",type:"類型",deform:"變形",round:"圓形",rotate:"旋轉",avatarOnTop:"頭像置顶",opacity:"透明度",fit:"適應",style:"風格",FLIP:"翻轉",MIRROR:"鏡像",GRAY:"灰階",BINARIZATION:"二值化"},qt=[{id:"zh-CN",text:"简体中文",alias:["zh"]},{id:"zh-TW",text:"繁體中文",alias:["zh-HK","zh-SG"]},{id:"en-US",text:"English",alias:["en","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT"]},{id:"ru",text:"русский язык",alias:["ru-RU"]},{id:"de",text:"Deutsch",alias:["de-CH","de-AT","de-LU","de-LI"]},{id:"es",text:"español",alias:["es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"]},{id:"fr",text:"Français",alias:["fr-BE","fr-CA","fr-CH","fr-LU"]},{id:"ja",text:"日本語",alias:["ja-JP"]},{id:"ko",text:"한국어",alias:["ko-KR"]}],Oe={en_US:Nt,zh_TW:Ut,zh_CN:jt,de:Mt,fr:Bt,ja:Dt,ko:zt,ru:Lt,zh_DZ:Gt};var st;let Fe=Oe[(st=Ie==null?void 0:Ie.lang)==null?void 0:st.replace("-","_")];function Wt(){if(Fe)return Fe;const e=navigator.language;let t="en-US";for(const r of qt){if(e===r.id){t=r.id;break}r.alias.forEach(n=>{n===e&&(t=r.id)})}return t=t.replace("-","_"),Fe=Oe[t],Oe[t]}var _i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Si(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){if(this instanceof n){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(t,i);return new a}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}),r}function oe(e,t){if(e.length!==t)throw new Error("array.length != "+t);return e}function me(e,t=!1){const r=document.createElement("canvas"),n=r.getContext("2d",{willReadFrequently:t});return r.width=e.width,r.height=e.height,n.drawImage(e,0,0),r}async function Ii(e){const t=await we(e);return me(t)}async function we(e){return new Promise((t,r)=>{const n=new Image;n.onload=()=>t(n),n.onerror=i=>r(i),n.src=URL.createObjectURL(e)})}function ot(e="#ffffff00"){if(typeof e=="string")return e.startsWith("#")?e:e.length<<2?"#"+e:e;if(e.length&&e.length>=3&&e.length<=4){const[t,r,n,i=1]=e;return`rgba(${t}, ${r}, ${n}, ${i})`}throw new Error("cannot load color "+e)}function Fi(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ie=(e=>(e.DEFAULT="DEFAULT",e.CENTER="CENTER",e))(ie||{});class lt{static from(){throw new Error}}const $t=document.createElement("canvas"),W=$t.getContext("2d");W.textBaseline="bottom";W.textAlign="left";var Ht=(e=>(e.LEFT="LEFT",e.RIGHT="RIGHT",e.CENTER="CENTER",e))(Ht||{}),Zt=(e=>(e.NONE="NONE",e.BREAK="BREAK",e.ZOOM="ZOOM",e))(Zt||{}),Yt=(e=>(e.PLAIN="PLAIN",e.BOLD="BOLD",e.ITALIC="ITALIC",e))(Yt||{});const He={text:"default text",color:"#191919",pos:[50,50],angle:0,origin:ie.DEFAULT,size:16,font:"arial",style:"PLAIN",wrap:"NONE",align:"LEFT",position:["LEFT","TOP"],strokeColor:"#ffffff",strokeSize:0},ee=class extends lt{constructor(r=He){var n,i;super();v(this,"template");v(this,"fontStyle");v(this,"pixelSize");v(this,"defaultPixelSize");v(this,"width");v(this,"height");v(this,"backgroundSize");v(this,"drawOptions");v(this,"onChangeCallback");v(this,"disabled",!1);this.template={...He,...r},this.defaultPixelSize=r.size*ee.dpiScale,this.pixelSize=this.defaultPixelSize,this.template.color=ot(this.template.color),this.style=this.template.style,this.template.font=((i=(n=this.template)==null?void 0:n.font)==null?void 0:i.replace(" ","-"))||ee.DEFAULT_FONT_FAMILY,this.template.text=this.template.text.replace(ee.TEXT_VAR_REGEX,(a,s)=>s),this.setDrawOptions()}set size(r){this.pixelSize=r*ee.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:r,wrap:n}=this.template;W.font=`${this.fontStyle} ${this.pixelSize}px ${r.replace(" ","-")}`,this.width=0,this.height=0;const i=this.template.text.split(`
`),a=[];let s=0;switch(n){case"NONE":{for(const o of i){const[l,c,u,d]=this.getPosition(W.measureText(o),s++);this.width=Math.max(this.width,u),this.height=d,a.push([o,l,c])}break}case"BREAK":{const o=this.template.pos[2]||ee.DEFAULT_MAX_WIDTH;let l,c;for(let u of i)if(l=W.measureText(u),c=l.width,c>o){let d,f,h;for(;c>o;){for(d=0,f=0,h="";f<o;)d++,h=u.substr(0,d),f=W.measureText(u.substr(0,d)).width;d--,h=h.substr(0,d);const p=d;if(u.substr(d,1)!=" "){for(;u.substr(d,1)!=" "&&d!=0;)d--;d==0&&(d=p),h=u.substr(0,d)}u=u.substr(d);const[m,w,I,R]=this.getPosition(W.measureText(h),s++);this.width=Math.max(this.width,I),this.height=R,c=I,a.push([h,m,w])}}else{const[d,f,h,p]=this.getPosition(l,s++);this.width=Math.max(this.width,h),this.height=p,a.push([u,d,f])}break}case"ZOOM":{const o=this.template.pos[2]||ee.DEFAULT_MAX_WIDTH;W.font=`${this.fontStyle} ${this.defaultPixelSize}px ${r}`;let l=Math.max(...i.map(d=>W.measureText(d).width));const u=o/(l||1)*this.defaultPixelSize;this.pixelSize=u,W.font=`${this.fontStyle} ${u}px ${r}`;for(const d of i){const[f,h,p,m]=this.getPosition(W.measureText(d),s++);this.width=Math.max(this.width,p),this.height=m,a.push([d,f,h])}break}}return this.drawOptions=a,a}getPosition(r,n){const[i,a]=this.template.pos,s=r.width,o=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,l=o*n,c=o*(n+1);switch(this.template.align){case"LEFT":return[i,a+l,s,c];case"RIGHT":return[i-s,a+l,s,c];case"CENTER":return[i-s/2,a+l,s,c]}}get hidden(){return this.disabled}set hidden(r){this.disabled=r,this.onChangeCallback&&this.onChangeCallback(this)}get size(){return this.template.size}set style(r){this.fontStyle=r==="PLAIN"?"normal":r.toLowerCase(),this.template.style=r}get style(){return this.template.style}rotateCtx(r,n){let[i,a,s]=n;switch(r.save(),this.template.origin){case ie.DEFAULT:r.translate(a,s),r.rotate(this.template.angle*Math.PI/180),r.translate(-a,-s);break;case ie.CENTER:r.translate(a+this.width/2,s+this.height/2),r.rotate(this.template.angle*Math.PI/180),r.translate(-a-this.width/2,-s-this.height/2);break}}draw(r){if(this.disabled)return;let{angle:n,color:i,align:a,font:s,strokeColor:o,strokeSize:l}=this.template;r.font=`${this.fontStyle} ${this.pixelSize}px ${s}`,r.fillStyle=i,r.textBaseline=a==="CENTER"?"middle":"bottom";for(let c of this.drawOptions)n&&this.rotateCtx(r,c),r.fillText(...c),n&&r.restore();if(o&&l){r.strokeStyle=o,r.lineWidth=l;for(let c of this.drawOptions)n&&this.rotateCtx(r,c),r.strokeText(...c),n&&r.restore()}}get settingObject(){const r=this;return new Proxy({get x(){return r.template.pos[0]},set x(n){r.template.pos[0]=n},get y(){return r.template.pos[1]},set y(n){r.template.pos[1]=n},text:r.template.text,color:r.template.color,get size(){return r.template.wrap==="ZOOM"?void 0:r.pixelSize},set size(n){r.pixelSize=n},font:r.template.font,set fontStyle(n){r.fontStyle=n},get fontStyle(){return r.fontStyle},strokeSize:r.template.strokeSize,strokeColor:r.template.strokeColor,get hidden(){return r.disabled},set hidden(n){r.hidden=n},_delete:()=>r.hidden=!0},{set:(n,i,a)=>(n[i]=a,r.template[i]=a,r.disabled||(this.setDrawOptions(),r.onChangeCallback&&r.onChangeCallback(this)),!0)})}get settingAttributes(){const r={type:"range",min:0,step:1};return{x:{...r,max:this.backgroundSize?this.backgroundSize[0]:1e3},y:{...r,max:this.backgroundSize?this.backgroundSize[1]:1e3},size:{...r,max:256},fontStyle:{type:"select",options:["normal","bold","italic","bold italic"]},strokeSize:{...r,max:16},font:{type:"font"}}}set onchange(r){this.onChangeCallback=r}};let J=ee;v(J,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),v(J,"DEFAULT_MAX_WIDTH",300),v(J,"DEFAULT_FONT_FAMILY","Arial"),v(J,"dpiScale",(window.devicePixelRatio||1)*96/72);class De{constructor(t){v(this,"arr");v(this,"cacheCtx");v(this,"topAvatars",[]);v(this,"bottomAvatars",[]);v(this,"sizeMap",Object.create(null));v(this,"needUpdate",!1);v(this,"cacheCount",0);if(this.arr=t,!(t!=null&&t.length))return;let r=0;for(const n of t)n.onchange=()=>this.needUpdate=!0,this.sizeMap[`text${r}Width`]=n.width,this.sizeMap[`text${r}Height`]=n.height,r++}draw(t){for(const r of this.arr)r.draw(t)}setCacheArea(t,r){for(const i of this.arr)i.backgroundSize=[t,r];const n=document.createElement("canvas");n.width=t,n.height=r,this.cacheCtx=n.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache(),this.needUpdate=!1,this.cacheCount++}get cacheCanvas(){return this.needUpdate&&this.updateCache(),this.cacheCtx.canvas}addTextModel(){const t=new J;return this.arr.push(t),this.needUpdate=!0,t.onchange=()=>this.needUpdate=!0,t.backgroundSize=[this.cacheCtx.canvas.width,this.cacheCtx.canvas.height],t}get texts(){return this.arr}static createFrom(t){return new De(t.map(r=>new J(r)))}}function Ze(e,t,r=!1){const n=document.createElement("canvas"),i=n.getContext("2d"),[a,s,o,l]=t.length===2?[0,0,t[0],t[1]]:t;let c=r?(o-a)/100*e.width:o-a,u=r?(l-s)/100*e.height:l-s;return n.width=r?c/100*e.width:c,n.height=r?u/100*e.height:u,i.drawImage(e,a,s,c,u,0,0,c,u),n}function Vt(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(0,e.height),r.scale(1,-1),r.drawImage(e,0,0),t}function Qt(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0);const n=r.getImageData(0,0,t.width,t.height),i=n.data;for(let a=0;a<i.length;a+=4){const s=i[a],o=i[a+1],l=i[a+2],c=(s+o+l)/3;i[a]=c,i[a+1]=c,i[a+2]=c}return r.putImageData(n,0,0),t}let Me={};function ve(e){Me=Object.assign(Me,e)}function b(e){return Me[e]}function Kt(e=!1){return e?`
  in vec2 vertex;
  in vec2 _texCoord;
  out vec2 texCoord;
  void main() {
    texCoord = _texCoord;
    gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);
  }
  `:`
  attribute vec2 vertex;
  attribute vec2 _texCoord;
  varying vec2 texCoord;
  void main() {
    texCoord = _texCoord;
    gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);
  }`}function Jt(e=!1){return e?`
  uniform sampler2D tex;
  in vec2 texCoord;
  out vec4 fragColor;
  void main() {
    fragColor = texture(tex, texCoord);
  }`:`
  uniform sampler2D texture;
  varying vec2 texCoord;
  void main() {
    gl_FragColor = texture2D(texture, texCoord);
  }`}class A{static getDefaultShader(){var t=b("gl");return t.defaultShader=t.defaultShader||new A,t.defaultShader}constructor(t,r,n=!1){var i=b("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=i.createProgram(),t=t||Kt(n),r=r||Jt(n),r="precision highp float;"+r,n&&(t=`#version 300 es
`+t,r=`#version 300 es
`+r),i.attachShader(this.program,Ye(i.VERTEX_SHADER,t)),i.attachShader(this.program,Ye(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw"link error: "+i.getProgramInfoLog(this.program)}destroy(){var t=b("gl");t.deleteProgram(this.program),this.program=null}uniforms(t){var r=b("gl");r.useProgram(this.program);for(var n in t)if(t.hasOwnProperty(n)){var i=r.getUniformLocation(this.program,n);if(i!==null){var a=t[n];if(er(a))switch(a.length){case 1:r.uniform1fv(i,new Float32Array(a));break;case 2:r.uniform2fv(i,new Float32Array(a));break;case 3:r.uniform3fv(i,new Float32Array(a));break;case 4:r.uniform4fv(i,new Float32Array(a));break;case 9:r.uniformMatrix3fv(i,!1,new Float32Array(a));break;case 16:r.uniformMatrix4fv(i,!1,new Float32Array(a));break;default:throw`dont't know how to load uniform "`+n+'" of length '+a.length}else if(tr(a))r.uniform1f(i,a);else throw'attempted to set uniform "'+n+'" to invalid value '+(a||"undefined").toString()}}return this}textures(t){var r=b("gl");r.useProgram(this.program);for(var n in t)t.hasOwnProperty(n)&&r.uniform1i(r.getUniformLocation(this.program,n),t[n]);return this}drawRect(t,r,n,i){var a=b("gl"),s=a.getParameter(a.VIEWPORT);r=r!==void 0?(r-s[1])/s[3]:0,t=t!==void 0?(t-s[0])/s[2]:0,n=n!==void 0?(n-s[0])/s[2]:1,i=i!==void 0?(i-s[1])/s[3]:1,a.vertexBuffer==null&&(a.vertexBuffer=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([t,r,t,i,n,r,n,i]),a.STATIC_DRAW),a.texCoordBuffer==null&&(a.texCoordBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),a.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=a.getAttribLocation(this.program,"vertex"),a.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=a.getAttribLocation(this.program,"_texCoord"),a.enableVertexAttribArray(this.texCoordAttribute)),a.useProgram(this.program),a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer),a.vertexAttribPointer(this.vertexAttribute,2,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer),a.vertexAttribPointer(this.texCoordAttribute,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,4)}}function er(e){return Object.prototype.toString.call(e)==="[object Array]"}function tr(e){return Object.prototype.toString.call(e)==="[object Number]"}function Ye(e,t){var r=b("gl"),n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw"compile error: "+r.getShaderInfoLog(n);return n}var H=null;class te{static fromElement(t){var r=b("gl"),n=new te(0,0,r.RGBA,r.UNSIGNED_BYTE);return n.loadContentsOf(t),n}constructor(t,r,n,i){var a=b("gl");this.gl=a,this.id=a.createTexture(),this.width=t,this.height=r,this.format=n,this.type=i,a.bindTexture(a.TEXTURE_2D,this.id),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),t&&r&&a.texImage2D(a.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}loadContentsOf(t){var r=b("gl");this.width=t.width||t.videoWidth,this.height=t.height||t.videoHeight,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,this.format,this.format,this.type,t)}initFromBytes(t,r,n){var i=b("gl");this.width=t,this.height=r,this.format=i.RGBA,this.type=i.UNSIGNED_BYTE,i.bindTexture(i.TEXTURE_2D,this.id),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,t,r,0,i.RGBA,this.type,new Uint8Array(n))}destroy(){var t=b("gl");t.deleteTexture(this.id),this.id=null}use(t){var r=b("gl");r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,this.id)}unuse(t){var r=b("gl");r.activeTexture(r.TEXTURE0+(t||0)),r.bindTexture(r.TEXTURE_2D,null)}ensureFormat(t,r,n,i){if(arguments.length==1){var a=arguments[0];t=a.width,r=a.height,n=a.format,i=a.type}if(t!=this.width||r!=this.height||n!=this.format||i!=this.type){var s=b("gl");this.width=t,this.height=r,this.format=n,this.type=i,s.bindTexture(s.TEXTURE_2D,this.id),s.texImage2D(s.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}}drawTo(t){var r=b("gl");if(r.framebuffer=r.framebuffer||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,r.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.checkFramebufferStatus(r.FRAMEBUFFER)!==r.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");r.viewport(0,0,this.width,this.height),t(),r.bindFramebuffer(r.FRAMEBUFFER,null)}fillUsingCanvas(t){t(Ve(this));var r=b("gl");return this.format=r.RGBA,this.type=r.UNSIGNED_BYTE,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,H),this}toImage(t){this.use(),A.getDefaultShader().drawRect();var r=b("gl"),n=this.width*this.height*4,i=new Uint8Array(n),a=Ve(this),s=a.createImageData(this.width,this.height);r.readPixels(0,0,this.width,this.height,r.RGBA,r.UNSIGNED_BYTE,i);for(var o=0;o<n;o++)s.data[o]=i[o];a.putImageData(s,0,0),t.src=H.toDataURL()}swapWith(t){var r;r=t.id,t.id=this.id,this.id=r,r=t.width,t.width=this.width,this.width=r,r=t.height,t.height=this.height,this.height=r,r=t.format,t.format=this.format,this.format=r}}function Ve(e){H==null&&(H=document.createElement("canvas")),H.width=e.width,H.height=e.height;var t=H.getContext("2d");return t.clearRect(0,0,H.width,H.height),t}class rr{constructor(t){var r=t.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],t.sort(function(l,c){return l[0]-c[0]});for(var n=0;n<r;n++)this.xa.push(t[n][0]),this.ya.push(t[n][1]);this.u[0]=0,this.y2[0]=0;for(var n=1;n<r-1;++n){var i=this.xa[n+1]-this.xa[n-1],a=(this.xa[n]-this.xa[n-1])/i,s=a*this.y2[n-1]+2;this.y2[n]=(a-1)/s;var o=(this.ya[n+1]-this.ya[n])/(this.xa[n+1]-this.xa[n])-(this.ya[n]-this.ya[n-1])/(this.xa[n]-this.xa[n-1]);this.u[n]=(6*o/i-a*this.u[n-1])/s}this.y2[r-1]=0;for(var n=r-2;n>=0;--n)this.y2[n]=this.y2[n]*this.y2[n+1]+this.u[n]}interpolate(t){for(var r=this.ya.length,n=0,i=r-1;i-n>1;){var a=i+n>>1;this.xa[a]>t?i=a:n=a}var s=this.xa[i]-this.xa[n],o=(this.xa[i]-t)/s,l=(t-this.xa[n])/s;return o*this.ya[n]+l*this.ya[i]+((o*o*o-o)*this.y2[n]+(l*l*l-l)*this.y2[i])*(s*s)/6}}function S(e,t,r,n){(r||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(n||this._.texture)}function q(e,t,r){return Math.max(e,Math.min(t,r))}function Re(e){for(var t=new rr(e),r=[],n=0;n<256;n++)r.push(q(0,Math.floor(t.interpolate(n/255)*256),255));return r}function nr(e,t){var r=b("gl");return r.brightnessContrast=r.brightnessContrast||new A(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),S.call(this,r.brightnessContrast,{brightness:q(-1,e,1),contrast:q(-1,t,1)}),this}function ir(e,t,r){var n=b("gl");e=Re(e),arguments.length==1?t=r=e:(t=Re(t),r=Re(r));for(var i=[],a=0;a<256;a++)i.splice(i.length,0,e[a],t[a],r[a],255);return this._.extraTexture.initFromBytes(256,1,i),this._.extraTexture.use(1),n.curves=n.curves||new A(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),n.curves.textures({map:1}),S.call(this,n.curves,{}),this}function ar(e){var t=b("gl");t.denoise=t.denoise||new A(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var r=0;r<2;r++)S.call(this,t.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this}function sr(e,t){var r=b("gl");return r.hueSaturation=r.hueSaturation||new A(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),S.call(this,r.hueSaturation,{hue:q(-1,e,1),saturation:q(-1,t,1)}),this}function or(e){var t=b("gl");return t.noise=t.noise||new A(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),S.call(this,t.noise,{amount:q(0,e,1)}),this}function lr(e){var t=b("gl");return t.sepia=t.sepia||new A(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),S.call(this,t.sepia,{amount:q(0,e,1)}),this}function hr(e,t){var r=b("gl");return r.unsharpMask=r.unsharpMask||new A(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){A.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),r.unsharpMask.textures({originalTexture:1}),S.call(this,r.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this}function cr(e){var t=b("gl");return t.vibrance=t.vibrance||new A(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),S.call(this,t.vibrance,{amount:q(-1,e,1)}),this}function ur(e,t){var r=b("gl");return r.vignette=r.vignette||new A(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),S.call(this,r.vignette,{size:q(0,e,1),amount:q(0,t,1)}),this}function ze(e,t){return new A(null,e+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+t+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}const he="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";function dr(e,t,r){var n=b("gl");n.lensBlurPrePass=n.lensBlurPrePass||new A(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var i="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+he+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";n.lensBlur0=n.lensBlur0||new A(null,i+"    void main() {      gl_FragColor = sample(delta0);    }  "),n.lensBlur1=n.lensBlur1||new A(null,i+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),n.lensBlur2=n.lensBlur2||new A(null,i+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var a=[],s=0;s<3;s++){var o=r+s*Math.PI*2/3;a.push([e*Math.sin(o)/this.width,e*Math.cos(o)/this.height])}var l=Math.pow(10,q(-1,t,1));return S.call(this,n.lensBlurPrePass,{power:l}),this._.extraTexture.ensureFormat(this._.texture),S.call(this,n.lensBlur0,{delta0:a[0]},this._.texture,this._.extraTexture),S.call(this,n.lensBlur1,{delta0:a[1],delta1:a[2]},this._.extraTexture,this._.extraTexture),S.call(this,n.lensBlur0,{delta0:a[1]}),this._.extraTexture.use(1),S.call(this,n.lensBlur2,{power:1/l,delta0:a[2]}),this}function fr(e,t,r,n,i,a){var s=b("gl");s.tiltShift=s.tiltShift||new A(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+he+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var o=r-e,l=n-t,c=Math.sqrt(o*o+l*l);return S.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[r,n],delta:[o/c,l/c],texSize:[this.width,this.height]}),S.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[r,n],delta:[-l/c,o/c],texSize:[this.width,this.height]}),this}function pr(e){var t=b("gl");return t.triangleBlur=t.triangleBlur||new A(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+he+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),S.call(this,t.triangleBlur,{delta:[e/this.width,0]}),S.call(this,t.triangleBlur,{delta:[0,e/this.height]}),this}function gr(e,t,r){var n=b("gl");return n.zoomBlur=n.zoomBlur||new A(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+he+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),S.call(this,n.zoomBlur,{center:[e,t],strength:r,texSize:[this.width,this.height]}),this}function mr(e,t,r,n){var i=b("gl");return i.colorHalftone=i.colorHalftone||new A(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),S.call(this,i.colorHalftone,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this}function vr(e,t,r,n){var i=b("gl");return i.dotScreen=i.dotScreen||new A(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),S.call(this,i.dotScreen,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this}function xr(e){var t=b("gl");return t.edgeWork1=t.edgeWork1||new A(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+he+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),t.edgeWork2=t.edgeWork2||new A(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+he+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),S.call(this,t.edgeWork1,{delta:[e/this.width,0]}),S.call(this,t.edgeWork2,{delta:[0,e/this.height]}),this}function yr(e,t,r){var n=b("gl");return n.hexagonalPixelate=n.hexagonalPixelate||new A(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),S.call(this,n.hexagonalPixelate,{center:[e,t],scale:r,texSize:[this.width,this.height]}),this}function wr(e){var t=b("gl");return t.ink=t.ink||new A(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),S.call(this,t.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this}function br(e,t,r,n){var i=b("gl");return i.bulgePinch=i.bulgePinch||ze("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),S.call(this,i.bulgePinch,{radius:r,strength:q(-1,n,1),center:[e,t],texSize:[this.width,this.height]}),this}function Qe(e,t,r,n,i,a,s,o){var l=r-i,c=n-a,u=s-i,d=o-a,f=e-r+i-s,h=t-n+a-o,p=l*d-u*c,m=(f*d-u*h)/p,w=(l*h-f*c)/p;return[r-e+m*r,n-t+m*n,m,s-e+w*s,o-t+w*o,w,e,t,1]}function ht(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],s=e[5],o=e[6],l=e[7],c=e[8],u=t*a*c-t*s*l-r*i*c+r*s*o+n*i*l-n*a*o;return[(a*c-s*l)/u,(n*l-r*c)/u,(r*s-n*a)/u,(s*o-i*c)/u,(t*c-n*o)/u,(n*i-t*s)/u,(i*l-a*o)/u,(r*o-t*l)/u,(t*a-r*i)/u]}function Cr(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}function Er(e,t,r){var n=b("gl");if(n.matrixWarp=n.matrixWarp||ze("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),e=Array.prototype.concat.apply([],e),e.length==4)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(e.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return S.call(this,n.matrixWarp,{matrix:t?ht(e):e,texSize:[this.width,this.height],useTextureSpace:r|0}),this}function Tr(e,t){var r=Qe.apply(null,t),n=Qe.apply(null,e),i=Cr(ht(r),n);return this.matrixWarp(i)}function kr(e,t,r,n){var i=b("gl");return i.swirl=i.swirl||ze("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),S.call(this,i.swirl,{radius:r,center:[e,t],angle:n,texSize:[this.width,this.height]}),this}function Ar(e=32,t=1,r=0,n=20,i=1,a=1){let s=b("gl");return s.swim=s.swim||new A(null,"    const float PI = 3.14159265358979323846;    uniform float scale;    uniform float stretch;    uniform float angle;    uniform float amount;    uniform float turbulence;    uniform float time;        uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;        float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}    float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}    float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}        float perlin(vec2 p, float dim, float time) {        vec2 pos = floor(p * dim);        vec2 posx = pos + vec2(1.0, 0.0);        vec2 posy = pos + vec2(0.0, 1.0);        vec2 posxy = pos + vec2(1.0);                float c = rand(pos, dim, time);        float cx = rand(posx, dim, time);        float cy = rand(posy, dim, time);        float cxy = rand(posxy, dim, time);                vec2 d = fract(p * dim);        d = -0.5 * cos(d * PI) + 0.5;                float ccx = mix(c, cx, d.x);        float cycxy = mix(cy, cxy, d.x);        float center = mix(ccx, cycxy, d.y);                return center * 2.0 - 1.0;    }        void main(){        vec2 coord = texCoord * texSize;        float c = cos(angle);        float s = sin(angle);        float nx = c * coord.x + s * coord.y;        float ny = -s * coord.x + c * coord.y;        nx /= scale;        ny /= scale * stretch;        coord.x += amount * perlin(vec2(nx + 0.5, ny), turbulence, time);        coord.y += amount * perlin(vec2(nx, ny + 0.5), turbulence, time);        gl_FragColor = texture2D(texture, coord / texSize);        vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);        if (coord != clampedCoord) {          gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));        }   }  "),S.call(this,s.swim,{scale:e,stretch:t,angle:r,amount:n,turbulence:i,time:a,texSize:[this.width,this.height]}),this}const Ke=64;function _r(e=4,t=8,r=12){let n=b("gl");return n.oil=n.oil||new A(null,`
    uniform float skip;
    uniform float range;
    uniform float levels;
    vec4 colorArr[${Ke}];
    float counts[${Ke}];
    uniform vec2 texSize;
    uniform sampler2D tex;
    out vec4 fragColor;
    in vec2 texCoord;
    
    vec4 tx(vec2 l){
        return texture(tex, texCoord + l / texSize);
    }
    
    void main() {
        for(float i = -range; i < range; i+=skip){
            for(float j= -range; j < range; j+=skip){
                vec4 t = tx(vec2(i, j));
                int lv = int(dot(vec4(1.0), t) / 4.0 * levels);
                counts[lv] += 1.;
                colorArr[lv] += t;
            }
        }
    
        int mx_index = 0;
        float mx_val = counts[0];
        for(int i = 1; i < int(levels); i++){
            if(counts[i]>mx_val){
                mx_index = i;
                mx_val = counts[i];
            }
        }
    
        fragColor = colorArr[mx_index] / float(mx_val);
    }
    `,!0),S.call(this,n.oil,{skip:e,levels:t,range:r,texSize:[this.width,this.height]}),this}function ct(e){return{_:e,loadContentsOf:function(t){ve({gl:this._.gl}),this._.loadContentsOf(t)},destroy:function(){ve({gl:this._.gl}),this._.destroy()}}}function Sr(e){return ct(te.fromElement(e))}function Ir(e,t){var r=b("gl"),n=r.UNSIGNED_BYTE;if(r.getExtension("OES_texture_float")&&r.getExtension("OES_texture_float_linear")){var i=new te(100,100,r.RGBA,r.FLOAT);try{i.drawTo(function(){n=r.FLOAT})}catch{}i.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=e,this.height=t,this._.texture=new te(e,t,r.RGBA,n),this._.spareTexture=new te(e,t,r.RGBA,n),this._.extraTexture=this._.extraTexture||new te(0,0,r.RGBA,n),this._.flippedShader=this._.flippedShader||new A(null,"    uniform sampler2D texture;    varying vec2 texCoord;    void main() {      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));    }  "),this._.isInitialized=!0}function Fr(e,t,r){return(!this._.isInitialized||e._.width!=this.width||e._.height!=this.height)&&Ir.call(this,t||e._.width,r||e._.height),e._.use(),this._.texture.drawTo(function(){A.getDefaultShader().drawRect()}),this}function Rr(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function Pr(e){return e.parentNode.insertBefore(this,e),e.parentNode.removeChild(e),this}function Or(){var e=b("gl"),t=new te(this._.texture.width,this._.texture.height,e.RGBA,e.UNSIGNED_BYTE);return this._.texture.use(),t.drawTo(function(){A.getDefaultShader().drawRect()}),ct(t)}function Mr(){var e=b("gl"),t=this._.texture.width,r=this._.texture.height,n=new Uint8Array(t*r*4);return this._.texture.drawTo(function(){e.readPixels(0,0,t,r,e.RGBA,e.UNSIGNED_BYTE,n)}),n}function _(e){return function(){return ve({gl:this._.gl}),e.apply(this,arguments)}}function Br(e=document.createElement("canvas")){try{ve({gl:e.getContext("webgl2")||e.getContext("webgl")||e.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{ve({gl:null})}var t=b("gl");if(!t)throw"This browser does not support WebGL";return e._={gl:t,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},e.texture=_(Sr),e.draw=_(Fr),e.update=_(Rr),e.replace=_(Pr),e.contents=_(Or),e.getPixelArray=_(Mr),e.brightnessContrast=_(nr),e.hexagonalPixelate=_(yr),e.hueSaturation=_(sr),e.colorHalftone=_(mr),e.triangleBlur=_(pr),e.unsharpMask=_(hr),e.perspective=_(Tr),e.matrixWarp=_(Er),e.bulgePinch=_(br),e.tiltShift=_(fr),e.dotScreen=_(vr),e.edgeWork=_(xr),e.lensBlur=_(dr),e.zoomBlur=_(gr),e.noise=_(or),e.denoise=_(ar),e.curves=_(ir),e.swirl=_(kr),e.ink=_(wr),e.vignette=_(ur),e.vibrance=_(cr),e.sepia=_(lr),e.swim=_(Ar),e.oil=_(_r),e}class ut{constructor(t=!0){v(this,"fxCanvas",Br());v(this,"textureMap");v(this,"cache");this.cache=t,t&&(this.textureMap=window._petpetTextureCache??(window._petpetTextureCache=new WeakMap))}getTexture(t){const r=this.cache&&this.textureMap.has(t)?this.textureMap.get(t):this.fxCanvas.texture(t);return this.cache&&!this.textureMap.has(t)&&this.textureMap.set(t,r),r}destroy(){this.cache}}class Dr extends ut{constructor(t=!0){super(t)}draw(t,r,n){const i=this.getTexture(r);let[a,s]=n[0],[o,l]=n[1],[c,u]=n[2],[d,f]=n[3];const[h,p]=n[4];a+=h,o+=h,c+=h,d+=h,s+=p,l+=p,u+=p,f+=p;const m=t.canvas;this.fxCanvas.draw(i,m.width,m.height).perspective([0,0,m.width,0,0,m.height,m.width,m.height],[a,s,d,f,o,l,c,u]).update(),t.drawImage(this.fxCanvas,0,0),this.cache||i.destroy()}}function zr(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(e.width,0),r.scale(-1,1),r.drawImage(e,0,0),t}function Lr(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,i=e.height;t.width=n,t.height=i,r.drawImage(e,0,0);const a=r.getImageData(0,0,n,i),s=a.data;for(let o=0;o<s.length;o+=4){const l=s[o],c=s[o+1],u=s[o+2];l+c+u>383?(s[o]=255,s[o+1]=255,s[o+2]=255):(s[o]=0,s[o+1]=0,s[o+2]=0)}return r.putImageData(a,0,0),t}function Nr(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=Math.min(e.width,e.height)/2;return t.width=n*2,t.height=n*2,r.save(),r.beginPath(),r.arc(n,n,n,0,2*Math.PI),r.closePath(),r.clip(),r.drawImage(e,n-e.width/2,n-e.height/2),r.restore(),t}var U="INUMBER",fe="IOP1",pe="IOP2",ge="IOP3",Y="IVAR",ae="IVARNAME",ce="IFUNCALL",be="IFUNDEF",G="IEXPR",Le="IEXPREVAL",se="IMEMBER",Ce="IENDSTATEMENT",ue="IARRAY";function k(e,t){this.type=e,this.value=t??0}k.prototype.toString=function(){switch(this.type){case U:case fe:case pe:case ge:case Y:case ae:case Ce:return this.value;case ce:return"CALL "+this.value;case be:return"DEF "+this.value;case ue:return"ARRAY "+this.value;case se:return"."+this.value;default:return"Invalid Instruction"}};function Ee(e){return new k(fe,e)}function K(e){return new k(pe,e)}function dt(e){return new k(ge,e)}function Be(e,t,r,n,i){for(var a=[],s=[],o,l,c,u,d=0;d<e.length;d++){var f=e[d],h=f.type;if(h===U||h===ae)Array.isArray(f.value)?a.push.apply(a,Be(f.value.map(function(p){return new k(U,p)}).concat(new k(ue,f.value.length)),t,r,n,i)):a.push(f);else if(h===Y&&i.hasOwnProperty(f.value))f=new k(U,i[f.value]),a.push(f);else if(h===pe&&a.length>1)l=a.pop(),o=a.pop(),u=r[f.value],f=new k(U,u(o.value,l.value)),a.push(f);else if(h===ge&&a.length>2)c=a.pop(),l=a.pop(),o=a.pop(),f.value==="?"?a.push(o.value?l.value:c.value):(u=n[f.value],f=new k(U,u(o.value,l.value,c.value)),a.push(f));else if(h===fe&&a.length>0)o=a.pop(),u=t[f.value],f=new k(U,u(o.value)),a.push(f);else if(h===G){for(;a.length>0;)s.push(a.shift());s.push(new k(G,Be(f.value,t,r,n,i)))}else if(h===se&&a.length>0)o=a.pop(),a.push(new k(U,o.value[f.value]));else{for(;a.length>0;)s.push(a.shift());s.push(f)}}for(;a.length>0;)s.push(a.shift());return s}function ft(e,t,r){for(var n=[],i=0;i<e.length;i++){var a=e[i],s=a.type;if(s===Y&&a.value===t)for(var o=0;o<r.tokens.length;o++){var l=r.tokens[o],c;l.type===fe?c=Ee(l.value):l.type===pe?c=K(l.value):l.type===ge?c=dt(l.value):c=new k(l.type,l.value),n.push(c)}else s===G?n.push(new k(G,ft(a.value,t,r))):n.push(a)}return n}function re(e,t,r){var n=[],i,a,s,o,l,c;if(Ne(e))return $(e,r);for(var u=e.length,d=0;d<u;d++){var f=e[d],h=f.type;if(h===U||h===ae)n.push(f.value);else if(h===pe)a=n.pop(),i=n.pop(),f.value==="and"?n.push(i?!!re(a,t,r):!1):f.value==="or"?n.push(i?!0:!!re(a,t,r)):f.value==="="?(o=t.binaryOps[f.value],n.push(o(i,re(a,t,r),r))):(o=t.binaryOps[f.value],n.push(o($(i,r),$(a,r))));else if(h===ge)s=n.pop(),a=n.pop(),i=n.pop(),f.value==="?"?n.push(re(i?a:s,t,r)):(o=t.ternaryOps[f.value],n.push(o($(i,r),$(a,r),$(s,r))));else if(h===Y)if(f.value in t.functions)n.push(t.functions[f.value]);else if(f.value in t.unaryOps&&t.parser.isOperatorEnabled(f.value))n.push(t.unaryOps[f.value]);else{var p=r[f.value];if(p!==void 0)n.push(p);else throw new Error("undefined variable: "+f.value)}else if(h===fe)i=n.pop(),o=t.unaryOps[f.value],n.push(o($(i,r)));else if(h===ce){for(c=f.value,l=[];c-- >0;)l.unshift($(n.pop(),r));if(o=n.pop(),o.apply&&o.call)n.push(o.apply(void 0,l));else throw new Error(o+" is not a function")}else if(h===be)n.push(function(){for(var m=n.pop(),w=[],I=f.value;I-- >0;)w.unshift(n.pop());var R=n.pop(),M=function(){for(var B=Object.assign({},r),z=0,g=w.length;z<g;z++)B[w[z]]=arguments[z];return re(m,t,B)};return Object.defineProperty(M,"name",{value:R,writable:!1}),r[R]=M,M}());else if(h===G)n.push(jr(f,t));else if(h===Le)n.push(f);else if(h===se)i=n.pop(),n.push(i[f.value]);else if(h===Ce)n.pop();else if(h===ue){for(c=f.value,l=[];c-- >0;)l.unshift(n.pop());n.push(l)}else throw new Error("invalid Expression")}if(n.length>1)throw new Error("invalid Expression (parity)");return n[0]===0?0:$(n[0],r)}function jr(e,t,r){return Ne(e)?e:{type:Le,value:function(n){return re(e.value,t,n)}}}function Ne(e){return e&&e.type===Le}function $(e,t){return Ne(e)?e.value(t):e}function je(e,t){for(var r=[],n,i,a,s,o,l,c=0;c<e.length;c++){var u=e[c],d=u.type;if(d===U)typeof u.value=="number"&&u.value<0?r.push("("+u.value+")"):Array.isArray(u.value)?r.push("["+u.value.map(Je).join(", ")+"]"):r.push(Je(u.value));else if(d===pe)i=r.pop(),n=r.pop(),s=u.value,t?s==="^"?r.push("Math.pow("+n+", "+i+")"):s==="and"?r.push("(!!"+n+" && !!"+i+")"):s==="or"?r.push("(!!"+n+" || !!"+i+")"):s==="||"?r.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):s==="=="?r.push("("+n+" === "+i+")"):s==="!="?r.push("("+n+" !== "+i+")"):s==="["?r.push(n+"[("+i+") | 0]"):r.push("("+n+" "+s+" "+i+")"):s==="["?r.push(n+"["+i+"]"):r.push("("+n+" "+s+" "+i+")");else if(d===ge)if(a=r.pop(),i=r.pop(),n=r.pop(),s=u.value,s==="?")r.push("("+n+" ? "+i+" : "+a+")");else throw new Error("invalid Expression");else if(d===Y||d===ae)r.push(u.value);else if(d===fe)n=r.pop(),s=u.value,s==="-"||s==="+"?r.push("("+s+n+")"):t?s==="not"?r.push("(!"+n+")"):s==="!"?r.push("fac("+n+")"):r.push(s+"("+n+")"):s==="!"?r.push("("+n+"!)"):r.push("("+s+" "+n+")");else if(d===ce){for(l=u.value,o=[];l-- >0;)o.unshift(r.pop());s=r.pop(),r.push(s+"("+o.join(", ")+")")}else if(d===be){for(i=r.pop(),l=u.value,o=[];l-- >0;)o.unshift(r.pop());n=r.pop(),t?r.push("("+n+" = function("+o.join(", ")+") { return "+i+" })"):r.push("("+n+"("+o.join(", ")+") = "+i+")")}else if(d===se)n=r.pop(),r.push(n+"."+u.value);else if(d===ue){for(l=u.value,o=[];l-- >0;)o.unshift(r.pop());r.push("["+o.join(", ")+"]")}else if(d===G)r.push("("+je(u.value,t)+")");else if(d!==Ce)throw new Error("invalid Expression")}return r.length>1&&(t?r=[r.join(",")]:r=[r.join(";")]),String(r[0])}function Je(e){return typeof e=="string"?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function le(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}function Ge(e,t,r){r=r||{};for(var n=!!r.withMembers,i=null,a=0;a<e.length;a++){var s=e[a];s.type===Y||s.type===ae?!n&&!le(t,s.value)?t.push(s.value):(i!==null&&(le(t,i)||t.push(i)),i=s.value):s.type===se&&n&&i!==null?i+="."+s.value:s.type===G?Ge(s.value,t,r):i!==null&&(le(t,i)||t.push(i),i=null)}i!==null&&!le(t,i)&&t.push(i)}function X(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}X.prototype.simplify=function(e){return e=e||{},new X(Be(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)};X.prototype.substitute=function(e,t){return t instanceof X||(t=this.parser.parse(String(t))),new X(ft(this.tokens,e,t),this.parser)};X.prototype.evaluate=function(e){return e=e||{},re(this.tokens,this,e)};X.prototype.toString=function(){return je(this.tokens,!1)};X.prototype.symbols=function(e){e=e||{};var t=[];return Ge(this.tokens,t,e),t};X.prototype.variables=function(e){e=e||{};var t=[];Ge(this.tokens,t,e);var r=this.functions;return t.filter(function(n){return!(n in r)})};X.prototype.toJSFunction=function(e,t){var r=this,n=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+je(this.simplify(t).tokens,!0)+"; }");return function(){return n.apply(r,arguments)}};var xe="TEOF",P="TOP",Te="TNUMBER",pt="TSTRING",V="TPAREN",de="TBRACKET",ke="TCOMMA",Ue="TNAME",qe="TSEMICOLON";function gt(e,t,r){this.type=e,this.value=t,this.index=r}gt.prototype.toString=function(){return this.type+": "+this.value};function D(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}D.prototype.newToken=function(e,t,r){return new gt(e,t,r??this.pos)};D.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};D.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};D.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken(xe,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};D.prototype.isString=function(){var e=!1,t=this.pos,r=this.expression.charAt(t);if(r==="'"||r==='"')for(var n=this.expression.indexOf(r,t+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,this.expression.charAt(n-1)!=="\\"){var i=this.expression.substring(t+1,n);this.current=this.newToken(pt,this.unescape(i),t),e=!0;break}n=this.expression.indexOf(r,n+1)}return e};D.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return e==="("||e===")"?(this.current=this.newToken(V,e),this.pos++,!0):!1};D.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return(e==="["||e==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(de,e),this.pos++,!0):!1};D.prototype.isComma=function(){var e=this.expression.charAt(this.pos);return e===","?(this.current=this.newToken(ke,","),this.pos++,!0):!1};D.prototype.isSemicolon=function(){var e=this.expression.charAt(this.pos);return e===";"?(this.current=this.newToken(qe,";"),this.pos++,!0):!1};D.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&r!=="."&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(n in this.consts)return this.current=this.newToken(Te,this.consts[n]),this.pos+=n.length,!0}return!1};D.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(P,n),this.pos+=n.length,!0}return!1};D.prototype.isName=function(){for(var e=this.pos,t=e,r=!1;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()){if(t===this.pos&&(n==="$"||n==="_")){n==="_"&&(r=!0);continue}else if(t===this.pos||!r||n!=="_"&&(n<"0"||n>"9"))break}else r=!0}if(r){var i=this.expression.substring(e,t);return this.current=this.newToken(Ue,i),this.pos+=i.length,!0}return!1};D.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);(t===" "||t==="	"||t===`
`||t==="\r")&&(e=!0,this.pos++,!(this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var Gr=/^[0-9a-f]{4}$/i;D.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var r=e.substring(0,t);t>=0;){var n=e.charAt(++t);switch(n){case"'":r+="'";break;case'"':r+='"';break;case"\\":r+="\\";break;case"/":r+="/";break;case"b":r+="\b";break;case"f":r+="\f";break;case"n":r+=`
`;break;case"r":r+="\r";break;case"t":r+="	";break;case"u":var i=e.substring(t+1,t+5);Gr.test(i)||this.parseError("Illegal escape sequence: \\u"+i),r+=String.fromCharCode(parseInt(i,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++t;var a=e.indexOf("\\",t);r+=e.substring(t,a<0?e.length:a),t=a}return r};D.prototype.isComment=function(){var e=this.expression.charAt(this.pos);return e==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};D.prototype.isRadixInteger=function(){var e=this.pos;if(e>=this.expression.length-2||this.expression.charAt(e)!=="0")return!1;++e;var t,r;if(this.expression.charAt(e)==="x")t=16,r=/^[0-9a-f]$/i,++e;else if(this.expression.charAt(e)==="b")t=2,r=/^[01]$/i,++e;else return!1;for(var n=!1,i=e;e<this.expression.length;){var a=this.expression.charAt(e);if(r.test(a))e++,n=!0;else break}return n&&(this.current=this.newToken(Te,parseInt(this.expression.substring(i,e),t)),this.pos=e),n};D.prototype.isNumber=function(){for(var e=!1,t=this.pos,r=t,n=t,i=!1,a=!1,s;t<this.expression.length&&(s=this.expression.charAt(t),s>="0"&&s<="9"||!i&&s===".");)s==="."?i=!0:a=!0,t++,e=a;if(e&&(n=t),s==="e"||s==="E"){t++;for(var o=!0,l=!1;t<this.expression.length;){if(s=this.expression.charAt(t),o&&(s==="+"||s==="-"))o=!1;else if(s>="0"&&s<="9")l=!0,o=!1;else break;t++}l||(t=n)}return e?(this.current=this.newToken(Te,parseFloat(this.expression.substring(r,t))),this.pos=t):this.pos=n,e};D.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if(t==="+"||t==="-"||t==="*"||t==="/"||t==="%"||t==="^"||t==="?"||t===":"||t===".")this.current=this.newToken(P,t);else if(t==="∙"||t==="•")this.current=this.newToken(P,"*");else if(t===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,">="),this.pos++):this.current=this.newToken(P,">");else if(t==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"<="),this.pos++):this.current=this.newToken(P,"<");else if(t==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(P,"||"),this.pos++;else return!1;else if(t==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"=="),this.pos++):this.current=this.newToken(P,t);else if(t==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"!="),this.pos++):this.current=this.newToken(P,t);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=e,!1)};D.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)};D.prototype.getCoordinates=function(){var e=0,t,r=-1;do e++,t=this.pos-r,r=this.expression.indexOf(`
`,r+1);while(r>=0&&r<this.pos);return{line:e,column:t}};D.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)};function O(e,t,r){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=r.allowMemberAccess!==!1}O.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};O.prototype.tokenMatches=function(e,t){return typeof t>"u"?!0:Array.isArray(t)?le(t,e.value):typeof t=="function"?t(e):e.value===t};O.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};O.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};O.prototype.accept=function(e,t){return this.nextToken.type===e&&this.tokenMatches(this.nextToken,t)?(this.next(),!0):!1};O.prototype.expect=function(e,t){if(!this.accept(e,t)){var r=this.tokens.getCoordinates();throw new Error("parse error ["+r.line+":"+r.column+"]: Expected "+(t||e))}};O.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;function r(i){return i.value in t}if(this.accept(Ue)||this.accept(P,r))e.push(new k(Y,this.current.value));else if(this.accept(Te))e.push(new k(U,this.current.value));else if(this.accept(pt))e.push(new k(U,this.current.value));else if(this.accept(V,"("))this.parseExpression(e),this.expect(V,")");else if(this.accept(de,"["))if(this.accept(de,"]"))e.push(new k(ue,0));else{var n=this.parseArrayList(e);e.push(new k(ue,n))}else throw new Error("unexpected "+this.nextToken)};O.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),!this.parseUntilEndStatement(e,t)&&this.pushExpression(e,t))};O.prototype.pushExpression=function(e,t){for(var r=0,n=t.length;r<n;r++)e.push(t[r])};O.prototype.parseUntilEndStatement=function(e,t){return this.accept(qe)?(this.nextToken&&this.nextToken.type!==xe&&!(this.nextToken.type===V&&this.nextToken.value===")")&&t.push(new k(Ce)),this.nextToken.type!==xe&&this.parseExpression(t),e.push(new k(G,t)),!0):!1};O.prototype.parseArrayList=function(e){for(var t=0;!this.accept(de,"]");)for(this.parseExpression(e),++t;this.accept(ke);)this.parseExpression(e),++t;return t};O.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(P,"=");){var t=e.pop(),r=[],n=e.length-1;if(t.type===ce){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,a=t.value+1;i<a;i++){var s=n-i;e[s].type===Y&&(e[s]=new k(ae,e[s].value))}this.parseVariableAssignmentExpression(r),e.push(new k(G,r)),e.push(new k(be,t.value));continue}if(t.type!==Y&&t.type!==se)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(r),e.push(new k(ae,t.value)),e.push(new k(G,r)),e.push(K("="))}};O.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(P,"?");){var t=[],r=[];this.parseConditionalExpression(t),this.expect(P,":"),this.parseConditionalExpression(r),e.push(new k(G,t)),e.push(new k(G,r)),e.push(dt("?"))}};O.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(P,"or");){var t=[];this.parseAndExpression(t),e.push(new k(G,t)),e.push(K("or"))}};O.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(P,"and");){var t=[];this.parseComparison(t),e.push(new k(G,t)),e.push(K("and"))}};var Ur=["==","!=","<","<=",">=",">","in"];O.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(P,Ur);){var t=this.current;this.parseAddSub(e),e.push(K(t.value))}};var qr=["+","-","||"];O.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(P,qr);){var t=this.current;this.parseTerm(e),e.push(K(t.value))}};var Wr=["*","/","%"];O.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(P,Wr);){var t=this.current;this.parseFactor(e),e.push(K(t.value))}};O.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;function r(i){return i.value in t}if(this.save(),this.accept(P,r)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===V&&this.nextToken.value==="("){this.restore(),this.parseExponential(e);return}else if(this.nextToken.type===qe||this.nextToken.type===ke||this.nextToken.type===xe||this.nextToken.type===V&&this.nextToken.value===")"){this.restore(),this.parseAtom(e);return}}var n=this.current;this.parseFactor(e),e.push(Ee(n.value))}else this.parseExponential(e)};O.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(P,"^");)this.parseFactor(e),e.push(K("^"))};O.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(P,"!");)e.push(Ee("!"))};O.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;function r(a){return a.value in t}if(this.accept(P,r)){var n=this.current;this.parseAtom(e),e.push(Ee(n.value))}else for(this.parseMemberExpression(e);this.accept(V,"(");)if(this.accept(V,")"))e.push(new k(ce,0));else{var i=this.parseArgumentList(e);e.push(new k(ce,i))}};O.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(V,")");)for(this.parseExpression(e),++t;this.accept(ke);)this.parseExpression(e),++t;return t};O.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(P,".")||this.accept(de,"[");){var t=this.current;if(t.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(Ue),e.push(new k(se,this.current.value))}else if(t.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(de,"]"),e.push(K("["))}else throw new Error("unexpected symbol: "+t.value)}};function Xr(e,t){return Number(e)+Number(t)}function $r(e,t){return e-t}function Hr(e,t){return e*t}function Zr(e,t){return e/t}function Yr(e,t){return e%t}function Vr(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function Qr(e,t){return e===t}function Kr(e,t){return e!==t}function Jr(e,t){return e>t}function en(e,t){return e<t}function tn(e,t){return e>=t}function rn(e,t){return e<=t}function nn(e,t){return!!(e&&t)}function an(e,t){return!!(e||t)}function sn(e,t){return le(t,e)}function on(e){return(Math.exp(e)-Math.exp(-e))/2}function ln(e){return(Math.exp(e)+Math.exp(-e))/2}function hn(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function cn(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function un(e){return Math.log(e+Math.sqrt(e*e-1))}function dn(e){return Math.log((1+e)/(1-e))/2}function et(e){return Math.log(e)*Math.LOG10E}function fn(e){return-e}function pn(e){return!e}function gn(e){return e<0?Math.ceil(e):Math.floor(e)}function mn(e){return Math.random()*(e||1)}function tt(e){return We(e+1)}function vn(e){return isFinite(e)&&e===Math.round(e)}var xn=4.7421875,Pe=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function We(e){var t,r;if(vn(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var n=e-2,i=e-1;n>1;)i*=n,n--;return i===0&&(i=1),i}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*We(1-e));if(e>=171.35)return 1/0;if(e>85){var a=e*e,s=a*e,o=s*e,l=o*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*a)-139/(51840*s)-571/(2488320*o)+163879/(209018880*l)+5246819/(75246796800*l*e))}--e,r=Pe[0];for(var c=1;c<Pe.length;++c)r+=Pe[c]/(e+c);return t=e+xn+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*r}function yn(e){return Array.isArray(e)?e.length:String(e).length}function rt(){for(var e=0,t=0,r=0;r<arguments.length;r++){var n=Math.abs(arguments[r]),i;t<n?(i=t/n,e=e*i*i+1,t=n):n>0?(i=n/t,e+=i*i):e+=n}return t===1/0?1/0:t*Math.sqrt(e)}function nt(e,t,r){return e?t:r}function wn(e,t){return typeof t>"u"||+t==0?Math.round(e):(e=+e,t=-+t,isNaN(e)||!(typeof t=="number"&&t%1===0)?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t))))}function bn(e,t,r){return r&&(r[e]=t),t}function Cn(e,t){return e[t|0]}function En(e){return arguments.length===1&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function Tn(e){return arguments.length===1&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function kn(e,t){if(typeof e!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map(function(r,n){return e(r,n)})}function An(e,t,r){if(typeof e!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(r))throw new Error("Second argument to fold is not an array");return r.reduce(function(n,i,a){return e(n,i,a)},t)}function _n(e,t){if(typeof e!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter(function(r,n){return e(r,n)})}function Sn(e,t){if(!(Array.isArray(t)||typeof t=="string"))throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function In(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function Fn(e){return(e>0)-(e<0)||+e}var it=1/3;function Rn(e){return e<0?-Math.pow(-e,it):Math.pow(e,it)}function Pn(e){return Math.exp(e)-1}function On(e){return Math.log(1+e)}function Mn(e){return Math.log(e)/Math.LN2}function Q(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||on,cosh:Math.cosh||ln,tanh:Math.tanh||hn,asinh:Math.asinh||cn,acosh:Math.acosh||un,atanh:Math.atanh||dn,sqrt:Math.sqrt,cbrt:Math.cbrt||Rn,log:Math.log,log2:Math.log2||Mn,ln:Math.log,lg:Math.log10||et,log10:Math.log10||et,expm1:Math.expm1||Pn,log1p:Math.log1p||On,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||gn,"-":fn,"+":Number,exp:Math.exp,not:pn,length:yn,"!":tt,sign:Math.sign||Fn},this.binaryOps={"+":Xr,"-":$r,"*":Hr,"/":Zr,"%":Yr,"^":Math.pow,"||":Vr,"==":Qr,"!=":Kr,">":Jr,"<":en,">=":tn,"<=":rn,and:nn,or:an,in:sn,"=":bn,"[":Cn},this.ternaryOps={"?":nt},this.functions={random:mn,fac:tt,min:Tn,max:En,hypot:Math.hypot||rt,pyt:Math.hypot||rt,pow:Math.pow,atan2:Math.atan2,if:nt,gamma:We,roundTo:wn,map:kn,fold:An,filter:_n,indexOf:Sn,join:In},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}Q.prototype.parse=function(e){var t=[],r=new O(this,new D(this,e),{allowMemberAccess:this.options.allowMemberAccess});return r.parseExpression(t),r.expect(xe,"EOF"),new X(t,this)};Q.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var mt=new Q;Q.parse=function(e){return mt.parse(e)};Q.evaluate=function(e,t){return mt.parse(e).evaluate(t)};var at={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function Bn(e){return at.hasOwnProperty(e)?at[e]:e}Q.prototype.isOperatorEnabled=function(e){var t=Bn(e),r=this.options.operators||{};return!(t in r)||!!r[t]};var ne={},vt={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.loop=Z.conditional=Z.parse=void 0;var Dn=function e(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(r))r.forEach(function(s){return e(t,s,n,i)});else if(typeof r=="function")r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n};Z.parse=Dn;var zn=function(t,r){return function(n,i,a,s){r(n,i,a)&&s(n,t,i,a)}};Z.conditional=zn;var Ln=function(t,r){return function(n,i,a,s){for(var o=[],l=n.pos;r(n,i,a);){var c={};if(s(n,t,i,c),n.pos===l)break;l=n.pos,o.push(c)}return o}};Z.loop=Ln;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.readBits=N.readArray=N.readUnsigned=N.readString=N.peekBytes=N.readBytes=N.peekByte=N.readByte=N.buildStream=void 0;var Nn=function(t){return{data:t,pos:0}};N.buildStream=Nn;var xt=function(){return function(t){return t.data[t.pos++]}};N.readByte=xt;var jn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+t]}};N.peekByte=jn;var Ae=function(t){return function(r){return r.data.subarray(r.pos,r.pos+=t)}};N.readBytes=Ae;var Gn=function(t){return function(r){return r.data.subarray(r.pos,r.pos+t)}};N.peekBytes=Gn;var Un=function(t){return function(r){return Array.from(Ae(t)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};N.readString=Un;var qn=function(t){return function(r){var n=Ae(2)(r);return t?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};N.readUnsigned=qn;var Wn=function(t,r){return function(n,i,a){for(var s=typeof r=="function"?r(n,i,a):r,o=Ae(t),l=new Array(s),c=0;c<s;c++)l[c]=o(n);return l}};N.readArray=Wn;var Xn=function(t,r,n){for(var i=0,a=0;a<n;a++)i+=t[r+a]&&Math.pow(2,n-a-1);return i},$n=function(t){return function(r){for(var n=xt()(r),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(n&1<<a);return Object.keys(t).reduce(function(s,o){var l=t[o];return l.length?s[o]=Xn(i,l.index,l.length):s[o]=i[l.index],s},{})}};N.readBits=$n;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Z,r=N,n={blocks:function(f){for(var h=0,p=[],m=f.data.length,w=0,I=(0,r.readByte)()(f);I!==h&&I;I=(0,r.readByte)()(f)){if(f.pos+I>=m){var R=m-f.pos;p.push((0,r.readBytes)(R)(f)),w+=R;break}p.push((0,r.readBytes)(I)(f)),w+=I}for(var M=new Uint8Array(w),B=0,z=0;z<p.length;z++)M.set(p[z],B),B+=p[z].length;return M}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},function(d){var f=(0,r.peekBytes)(2)(d);return f[0]===33&&f[1]===249}),a=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,function(d,f,h){return Math.pow(2,h.descriptor.lct.size+1)})},function(d,f,h){return h.descriptor.lct.exists}),{data:[{minCodeSize:(0,r.readByte)()},n]}]},function(d){return(0,r.peekByte)()(d)===44}),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(f,h,p){return(0,r.readBytes)(p.text.blockSize)(f)}},n]},function(d){var f=(0,r.peekBytes)(2)(d);return f[0]===33&&f[1]===1}),o=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(f,h,p){return(0,r.readString)(p.blockSize)(f)}},n]},function(d){var f=(0,r.peekBytes)(2)(d);return f[0]===33&&f[1]===255}),l=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},function(d){var f=(0,r.peekBytes)(2)(d);return f[0]===33&&f[1]===254}),c=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,function(d,f){return Math.pow(2,f.lsd.gct.size+1)})},function(d,f){return f.lsd.gct.exists}),{frames:(0,t.loop)([i,o,l,a,s],function(d){var f=(0,r.peekByte)()(d);return f===33||f===44})}],u=c;e.default=u})(vt);var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.deinterlace=void 0;var Hn=function(t,r){for(var n=new Array(t.length),i=t.length/r,a=function(f,h){var p=t.slice(h*r,(h+1)*r);n.splice.apply(n,[f*r,r].concat(p))},s=[0,4,2,1],o=[8,8,4,2],l=0,c=0;c<4;c++)for(var u=s[c];u<i;u+=o[c])a(u,l),l++;return n};_e.deinterlace=Hn;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.lzw=void 0;var Zn=function(t,r,n){var i=4096,a=-1,s=n,o,l,c,u,d,f,h,g,p,m,z,w,y,x,E,C,I=new Array(n),R=new Array(i),M=new Array(i),B=new Array(i+1);for(w=t,l=1<<w,d=l+1,o=l+2,h=a,u=w+1,c=(1<<u)-1,p=0;p<l;p++)R[p]=0,M[p]=p;var z,g,y,x,C,E;for(z=g=y=x=C=E=0,m=0;m<s;){if(x===0){if(g<u){z+=r[E]<<g,g+=8,E++;continue}if(p=z&c,z>>=u,g-=u,p>o||p==d)break;if(p==l){u=w+1,c=(1<<u)-1,o=l+2,h=a;continue}if(h==a){B[x++]=M[p],h=p,y=p;continue}for(f=p,p==o&&(B[x++]=y,p=h);p>l;)B[x++]=M[p],p=R[p];y=M[p]&255,B[x++]=y,o<i&&(R[o]=h,M[o]=y,o++,!(o&c)&&o<i&&(u++,c+=o)),h=f}x--,I[C++]=B[x],m++}for(m=C;m<s;m++)I[m]=0;return I};Se.lzw=Zn;Object.defineProperty(ne,"__esModule",{value:!0});var yt=ne.decompressFrames=ne.decompressFrame=wt=ne.parseGIF=void 0,Yn=ei(vt),Vn=Z,Qn=N,Kn=_e,Jn=Se;function ei(e){return e&&e.__esModule?e:{default:e}}var ti=function(t){var r=new Uint8Array(t);return(0,Vn.parse)((0,Qn.buildStream)(r),Yn.default)},wt=ne.parseGIF=ti,ri=function(t){for(var r=t.pixels.length,n=new Uint8ClampedArray(r*4),i=0;i<r;i++){var a=i*4,s=t.pixels[i],o=t.colorTable[s]||[0,0,0];n[a]=o[0],n[a+1]=o[1],n[a+2]=o[2],n[a+3]=s!==t.transparentIndex?255:0}return n},bt=function(t,r,n){if(!t.image){console.warn("gif frame does not have associated image.");return}var i=t.image,a=i.descriptor.width*i.descriptor.height,s=(0,Jn.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,Kn.deinterlace)(s,i.descriptor.width));var o={pixels:s,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?o.colorTable=i.lct:o.colorTable=r,t.gce&&(o.delay=(t.gce.delay||10)*10,o.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(o.transparentIndex=t.gce.transparentColorIndex)),n&&(o.patch=ri(o)),o};ne.decompressFrame=bt;var ni=function(t,r){return t.frames.filter(function(n){return n.image}).map(function(n){return bt(n,t.gct,r)})};yt=ne.decompressFrames=ni;function ii(e){const t=wt(e),r=yt(t,!0),n=[];for(let i of r){const{width:a,height:s,left:o,top:l}=i.dims,c=document.createElement("canvas"),u=c.getContext("2d");c.width=a,c.height=s,u.putImageData(new ImageData(i.patch,a,s),o,l),n.push(c)}return n}async function ai(e){const t=new ImageDecoder({data:e,type:"image/gif"});await t.tracks.ready,await t.completed;const r=t.tracks.selectedTrack.frameCount,n=[];for(let i=0;i<r;i++){const a=(await t.decode({frameIndex:i})).image;a.width=a.codedWidth,a.height=a.codedHeight,n.push(me(a)),a.close()}return n}async function si(e){const t=await e.arrayBuffer();return window.ImageDecoder?ai(t):ii(t)}var Ct={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,t){(function(r,n){e.exports=n()})(self,function(){return(()=>{var r={"./node_modules/events/events.js":s=>{var o,l=typeof Reflect=="object"?Reflect:null,c=l&&typeof l.apply=="function"?l.apply:function(g,y,x){return Function.prototype.apply.call(g,y,x)};o=l&&typeof l.ownKeys=="function"?l.ownKeys:Object.getOwnPropertySymbols?function(g){return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g))}:function(g){return Object.getOwnPropertyNames(g)};var u=Number.isNaN||function(g){return g!=g};function d(){d.init.call(this)}s.exports=d,s.exports.once=function(g,y){return new Promise(function(x,C){function E(F){g.removeListener(y,T),C(F)}function T(){typeof g.removeListener=="function"&&g.removeListener("error",E),x([].slice.call(arguments))}z(g,y,T,{once:!0}),y!=="error"&&function(F,L,j){typeof F.on=="function"&&z(F,"error",L,{once:!0})}(g,E)})},d.EventEmitter=d,d.prototype._events=void 0,d.prototype._eventsCount=0,d.prototype._maxListeners=void 0;var f=10;function h(g){if(typeof g!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof g)}function p(g){return g._maxListeners===void 0?d.defaultMaxListeners:g._maxListeners}function m(g,y,x,C){var E,T,F,L;if(h(x),(T=g._events)===void 0?(T=g._events=Object.create(null),g._eventsCount=0):(T.newListener!==void 0&&(g.emit("newListener",y,x.listener?x.listener:x),T=g._events),F=T[y]),F===void 0)F=T[y]=x,++g._eventsCount;else if(typeof F=="function"?F=T[y]=C?[x,F]:[F,x]:C?F.unshift(x):F.push(x),(E=p(g))>0&&F.length>E&&!F.warned){F.warned=!0;var j=new Error("Possible EventEmitter memory leak detected. "+F.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");j.name="MaxListenersExceededWarning",j.emitter=g,j.type=y,j.count=F.length,L=j,console&&console.warn&&console.warn(L)}return g}function w(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function I(g,y,x){var C={fired:!1,wrapFn:void 0,target:g,type:y,listener:x},E=w.bind(C);return E.listener=x,C.wrapFn=E,E}function R(g,y,x){var C=g._events;if(C===void 0)return[];var E=C[y];return E===void 0?[]:typeof E=="function"?x?[E.listener||E]:[E]:x?function(T){for(var F=new Array(T.length),L=0;L<F.length;++L)F[L]=T[L].listener||T[L];return F}(E):B(E,E.length)}function M(g){var y=this._events;if(y!==void 0){var x=y[g];if(typeof x=="function")return 1;if(x!==void 0)return x.length}return 0}function B(g,y){for(var x=new Array(y),C=0;C<y;++C)x[C]=g[C];return x}function z(g,y,x,C){if(typeof g.on=="function")C.once?g.once(y,x):g.on(y,x);else{if(typeof g.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof g);g.addEventListener(y,function E(T){C.once&&g.removeEventListener(y,E),x(T)})}}Object.defineProperty(d,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(g){if(typeof g!="number"||g<0||u(g))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+g+".");f=g}}),d.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},d.prototype.setMaxListeners=function(g){if(typeof g!="number"||g<0||u(g))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+g+".");return this._maxListeners=g,this},d.prototype.getMaxListeners=function(){return p(this)},d.prototype.emit=function(g){for(var y=[],x=1;x<arguments.length;x++)y.push(arguments[x]);var C=g==="error",E=this._events;if(E!==void 0)C=C&&E.error===void 0;else if(!C)return!1;if(C){var T;if(y.length>0&&(T=y[0]),T instanceof Error)throw T;var F=new Error("Unhandled error."+(T?" ("+T.message+")":""));throw F.context=T,F}var L=E[g];if(L===void 0)return!1;if(typeof L=="function")c(L,this,y);else{var j=L.length,kt=B(L,j);for(x=0;x<j;++x)c(kt[x],this,y)}return!0},d.prototype.addListener=function(g,y){return m(this,g,y,!1)},d.prototype.on=d.prototype.addListener,d.prototype.prependListener=function(g,y){return m(this,g,y,!0)},d.prototype.once=function(g,y){return h(y),this.on(g,I(this,g,y)),this},d.prototype.prependOnceListener=function(g,y){return h(y),this.prependListener(g,I(this,g,y)),this},d.prototype.removeListener=function(g,y){var x,C,E,T,F;if(h(y),(C=this._events)===void 0)return this;if((x=C[g])===void 0)return this;if(x===y||x.listener===y)--this._eventsCount==0?this._events=Object.create(null):(delete C[g],C.removeListener&&this.emit("removeListener",g,x.listener||y));else if(typeof x!="function"){for(E=-1,T=x.length-1;T>=0;T--)if(x[T]===y||x[T].listener===y){F=x[T].listener,E=T;break}if(E<0)return this;E===0?x.shift():function(L,j){for(;j+1<L.length;j++)L[j]=L[j+1];L.pop()}(x,E),x.length===1&&(C[g]=x[0]),C.removeListener!==void 0&&this.emit("removeListener",g,F||y)}return this},d.prototype.off=d.prototype.removeListener,d.prototype.removeAllListeners=function(g){var y,x,C;if((x=this._events)===void 0)return this;if(x.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):x[g]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete x[g]),this;if(arguments.length===0){var E,T=Object.keys(x);for(C=0;C<T.length;++C)(E=T[C])!=="removeListener"&&this.removeAllListeners(E);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(y=x[g])=="function")this.removeListener(g,y);else if(y!==void 0)for(C=y.length-1;C>=0;C--)this.removeListener(g,y[C]);return this},d.prototype.listeners=function(g){return R(this,g,!0)},d.prototype.rawListeners=function(g){return R(this,g,!1)},d.listenerCount=function(g,y){return typeof g.listenerCount=="function"?g.listenerCount(y):M.call(g,y)},d.prototype.listenerCount=M,d.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(s,o,l)=>{l.r(o),l.d(o,{default:()=>c});const c=`/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/GIFEncoder.js":
/*!*******************************!*\\
  !*** ./src/lib/GIFEncoder.js ***!
  \\*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
  GIFEncoder.js

  Authors
  Kevin Weiner (original Java version - kweiner@fmsware.com)
  Thibault Imbert (AS3 version - bytearray.org)
  Johan Nordberg (JS version - code@johan-nordberg.com)
*/

var NeuQuant = __webpack_require__(/*! ./TypedNeuQuant.js */ "./src/lib/TypedNeuQuant.js");
var LZWEncoder = __webpack_require__(/*! ./LZWEncoder.js */ "./src/lib/LZWEncoder.js");

function ByteArray() {
  this.page = -1;
  this.pages = [];
  this.newPage();
}

ByteArray.pageSize = 4096;
ByteArray.charMap = {};

for (var i = 0; i < 256; i++)
  ByteArray.charMap[i] = String.fromCharCode(i);

ByteArray.prototype.newPage = function() {
  this.pages[++this.page] = new Uint8Array(ByteArray.pageSize);
  this.cursor = 0;
};

ByteArray.prototype.getData = function() {
  var rv = '';
  for (var p = 0; p < this.pages.length; p++) {
    for (var i = 0; i < ByteArray.pageSize; i++) {
      rv += ByteArray.charMap[this.pages[p][i]];
    }
  }
  return rv;
};

ByteArray.prototype.writeByte = function(val) {
  if (this.cursor >= ByteArray.pageSize) this.newPage();
  this.pages[this.page][this.cursor++] = val;
};

ByteArray.prototype.writeUTFBytes = function(string) {
  for (var l = string.length, i = 0; i < l; i++)
    this.writeByte(string.charCodeAt(i));
};

ByteArray.prototype.writeBytes = function(array, offset, length) {
  for (var l = length || array.length, i = offset || 0; i < l; i++)
    this.writeByte(array[i]);
};

function GIFEncoder(width, height) {
  // image size
  this.width = ~~width;
  this.height = ~~height;

  // transparent color if given
  this.transparent = null;

  // transparent index in color table
  this.transIndex = 0;

  // -1 = no repeat, 0 = forever. anything else is repeat count
  this.repeat = -1;

  // frame delay (hundredths)
  this.delay = 0;

  this.image = null; // current frame
  this.pixels = null; // BGR byte array from frame
  this.indexedPixels = null; // converted frame indexed to palette
  this.colorDepth = null; // number of bit planes
  this.colorTab = null; // RGB palette
  this.neuQuant = null; // NeuQuant instance that was used to generate this.colorTab.
  this.usedEntry = new Array(); // active palette entries
  this.palSize = 7; // color table size (bits-1)
  this.dispose = -1; // disposal code (-1 = use default)
  this.firstFrame = true;
  this.sample = 10; // default sample interval for quantizer
  this.dither = false; // default dithering
  this.globalPalette = false;

  this.out = new ByteArray();
}

/*
  Sets the delay time between each frame, or changes it for subsequent frames
  (applies to last frame added)
*/
GIFEncoder.prototype.setDelay = function(milliseconds) {
  this.delay = Math.round(milliseconds / 10);
};

/*
  Sets frame rate in frames per second.
*/
GIFEncoder.prototype.setFrameRate = function(fps) {
  this.delay = Math.round(100 / fps);
};

/*
  Sets the GIF frame disposal code for the last added frame and any
  subsequent frames.

  Default is 0 if no transparent color has been set, otherwise 2.
*/
GIFEncoder.prototype.setDispose = function(disposalCode) {
  if (disposalCode >= 0) this.dispose = disposalCode;
};

/*
  Sets the number of times the set of GIF frames should be played.

  -1 = play once
  0 = repeat indefinitely

  Default is -1

  Must be invoked before the first image is added
*/

GIFEncoder.prototype.setRepeat = function(repeat) {
  this.repeat = repeat;
};

/*
  Sets the transparent color for the last added frame and any subsequent
  frames. Since all colors are subject to modification in the quantization
  process, the color in the final palette for each frame closest to the given
  color becomes the transparent color for that frame. May be set to null to
  indicate no transparent color.
*/
GIFEncoder.prototype.setTransparent = function(color) {
  this.transparent = color;
};

/*
  Adds next GIF frame. The frame is not written immediately, but is
  actually deferred until the next frame is received so that timing
  data can be inserted.  Invoking finish() flushes all frames.
*/
GIFEncoder.prototype.addFrame = function(imageData) {
  this.image = imageData;

  this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null;

  this.getImagePixels(); // convert to correct format if necessary
  this.analyzePixels(); // build color table & map pixels

  if (this.globalPalette === true) this.globalPalette = this.colorTab;

  if (this.firstFrame) {
    this.writeLSD(); // logical screen descriptior
    this.writePalette(); // global color table
    if (this.repeat >= 0) {
      // use NS app extension to indicate reps
      this.writeNetscapeExt();
    }
  }

  this.writeGraphicCtrlExt(); // write graphic control extension
  this.writeImageDesc(); // image descriptor
  if (!this.firstFrame && !this.globalPalette) this.writePalette(); // local color table
  this.writePixels(); // encode and write pixel data

  this.firstFrame = false;
};

/*
  Adds final trailer to the GIF stream, if you don't call the finish method
  the GIF stream will not be valid.
*/
GIFEncoder.prototype.finish = function() {
  this.out.writeByte(0x3b); // gif trailer
};

/*
  Sets quality of color quantization (conversion of images to the maximum 256
  colors allowed by the GIF specification). Lower values (minimum = 1)
  produce better colors, but slow processing significantly. 10 is the
  default, and produces good color mapping at reasonable speeds. Values
  greater than 20 do not yield significant improvements in speed.
*/
GIFEncoder.prototype.setQuality = function(quality) {
  if (quality < 1) quality = 1;
  this.sample = quality;
};

/*
  Sets dithering method. Available are:
  - FALSE no dithering
  - TRUE or FloydSteinberg
  - FalseFloydSteinberg
  - Stucki
  - Atkinson
  You can add '-serpentine' to use serpentine scanning
*/
GIFEncoder.prototype.setDither = function(dither) {
  if (dither === true) dither = 'FloydSteinberg';
  this.dither = dither;
};

/*
  Sets global palette for all frames.
  You can provide TRUE to create global palette from first picture.
  Or an array of r,g,b,r,g,b,...
*/
GIFEncoder.prototype.setGlobalPalette = function(palette) {
  this.globalPalette = palette;
};

/*
  Returns global palette used for all frames.
  If setGlobalPalette(true) was used, then this function will return
  calculated palette after the first frame is added.
*/
GIFEncoder.prototype.getGlobalPalette = function() {
  return (this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0)) || this.globalPalette;
};

/*
  Writes GIF file header
*/
GIFEncoder.prototype.writeHeader = function() {
  this.out.writeUTFBytes("GIF89a");
};

/*
  Analyzes current frame colors and creates color map.
*/
GIFEncoder.prototype.analyzePixels = function() {
  if (!this.colorTab) {
    this.neuQuant = new NeuQuant(this.pixels, this.sample);
    this.neuQuant.buildColormap(); // create reduced palette
    this.colorTab = this.neuQuant.getColormap();
  }

  // map image pixels to new palette
  if (this.dither) {
    this.ditherPixels(this.dither.replace('-serpentine', ''), this.dither.match(/-serpentine/) !== null);
  } else {
    this.indexPixels();
  }

  this.pixels = null;
  this.colorDepth = 8;
  this.palSize = 7;

  // get closest match to transparent color if specified
  if (this.transparent !== null) {
    this.transIndex = this.findClosest(this.transparent, true);
  }
};

/*
  Index pixels, without dithering
*/
GIFEncoder.prototype.indexPixels = function(imgq) {
  var nPix = this.pixels.length / 3;
  this.indexedPixels = new Uint8Array(nPix);
  var k = 0;
  for (var j = 0; j < nPix; j++) {
    var index = this.findClosestRGB(
      this.pixels[k++] & 0xff,
      this.pixels[k++] & 0xff,
      this.pixels[k++] & 0xff
    );
    this.usedEntry[index] = true;
    this.indexedPixels[j] = index;
  }
};

/*
  Taken from http://jsbin.com/iXofIji/2/edit by PAEz
*/
GIFEncoder.prototype.ditherPixels = function(kernel, serpentine) {
  var kernels = {
    FalseFloydSteinberg: [
      [3 / 8, 1, 0],
      [3 / 8, 0, 1],
      [2 / 8, 1, 1]
    ],
    FloydSteinberg: [
      [7 / 16, 1, 0],
      [3 / 16, -1, 1],
      [5 / 16, 0, 1],
      [1 / 16, 1, 1]
    ],
    Stucki: [
      [8 / 42, 1, 0],
      [4 / 42, 2, 0],
      [2 / 42, -2, 1],
      [4 / 42, -1, 1],
      [8 / 42, 0, 1],
      [4 / 42, 1, 1],
      [2 / 42, 2, 1],
      [1 / 42, -2, 2],
      [2 / 42, -1, 2],
      [4 / 42, 0, 2],
      [2 / 42, 1, 2],
      [1 / 42, 2, 2]
    ],
    Atkinson: [
      [1 / 8, 1, 0],
      [1 / 8, 2, 0],
      [1 / 8, -1, 1],
      [1 / 8, 0, 1],
      [1 / 8, 1, 1],
      [1 / 8, 0, 2]
    ]
  };

  if (!kernel || !kernels[kernel]) {
    throw 'Unknown dithering kernel: ' + kernel;
  }

  var ds = kernels[kernel];
  var index = 0,
    height = this.height,
    width = this.width,
    data = this.pixels;
  var direction = serpentine ? -1 : 1;

  this.indexedPixels = new Uint8Array(this.pixels.length / 3);

  for (var y = 0; y < height; y++) {

    if (serpentine) direction = direction * -1;

    for (var x = (direction == 1 ? 0 : width - 1), xend = (direction == 1 ? width : 0); x !== xend; x += direction) {

      index = (y * width) + x;
      // Get original colour
      var idx = index * 3;
      var r1 = data[idx];
      var g1 = data[idx + 1];
      var b1 = data[idx + 2];

      // Get converted colour
      idx = this.findClosestRGB(r1, g1, b1);
      this.usedEntry[idx] = true;
      this.indexedPixels[index] = idx;
      idx *= 3;
      var r2 = this.colorTab[idx];
      var g2 = this.colorTab[idx + 1];
      var b2 = this.colorTab[idx + 2];

      var er = r1 - r2;
      var eg = g1 - g2;
      var eb = b1 - b2;

      for (var i = (direction == 1 ? 0: ds.length - 1), end = (direction == 1 ? ds.length : 0); i !== end; i += direction) {
        var x1 = ds[i][1]; // *direction;  //  Should this by timesd by direction?..to make the kernel go in the opposite direction....got no idea....
        var y1 = ds[i][2];
        if (x1 + x >= 0 && x1 + x < width && y1 + y >= 0 && y1 + y < height) {
          var d = ds[i][0];
          idx = index + x1 + (y1 * width);
          idx *= 3;

          data[idx] = Math.max(0, Math.min(255, data[idx] + er * d));
          data[idx + 1] = Math.max(0, Math.min(255, data[idx + 1] + eg * d));
          data[idx + 2] = Math.max(0, Math.min(255, data[idx + 2] + eb * d));
        }
      }
    }
  }
};

/*
  Returns index of palette color closest to c
*/
GIFEncoder.prototype.findClosest = function(c, used) {
  return this.findClosestRGB((c & 0xFF0000) >> 16, (c & 0x00FF00) >> 8, (c & 0x0000FF), used);
};

GIFEncoder.prototype.findClosestRGB = function(r, g, b, used) {
  if (this.colorTab === null) return -1;

  if (this.neuQuant && !used) {
    return this.neuQuant.lookupRGB(r, g, b);
  }

  var c = b | (g << 8) | (r << 16);

  var minpos = 0;
  var dmin = 256 * 256 * 256;
  var len = this.colorTab.length;

  for (var i = 0, index = 0; i < len; index++) {
    var dr = r - (this.colorTab[i++] & 0xff);
    var dg = g - (this.colorTab[i++] & 0xff);
    var db = b - (this.colorTab[i++] & 0xff);
    var d = dr * dr + dg * dg + db * db;
    if ((!used || this.usedEntry[index]) && (d < dmin)) {
      dmin = d;
      minpos = index;
    }
  }

  return minpos;
};

/*
  Extracts image pixels into byte array pixels
  (removes alphachannel from canvas imagedata)
*/
GIFEncoder.prototype.getImagePixels = function() {
  var w = this.width;
  var h = this.height;
  this.pixels = new Uint8Array(w * h * 3);

  var data = this.image;
  var srcPos = 0;
  var count = 0;

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      this.pixels[count++] = data[srcPos++];
      srcPos++;
    }
  }
};

/*
  Writes Graphic Control Extension
*/
GIFEncoder.prototype.writeGraphicCtrlExt = function() {
  this.out.writeByte(0x21); // extension introducer
  this.out.writeByte(0xf9); // GCE label
  this.out.writeByte(4); // data block size

  var transp, disp;
  if (this.transparent === null) {
    transp = 0;
    disp = 0; // dispose = no action
  } else {
    transp = 1;
    disp = 2; // force clear if using transparent color
  }

  if (this.dispose >= 0) {
    disp = this.dispose & 7; // user override
  }
  disp <<= 2;

  // packed fields
  this.out.writeByte(
    0 | // 1:3 reserved
    disp | // 4:6 disposal
    0 | // 7 user input - 0 = none
    transp // 8 transparency flag
  );

  this.writeShort(this.delay); // delay x 1/100 sec
  this.out.writeByte(this.transIndex); // transparent color index
  this.out.writeByte(0); // block terminator
};

/*
  Writes Image Descriptor
*/
GIFEncoder.prototype.writeImageDesc = function() {
  this.out.writeByte(0x2c); // image separator
  this.writeShort(0); // image position x,y = 0,0
  this.writeShort(0);
  this.writeShort(this.width); // image size
  this.writeShort(this.height);

  // packed fields
  if (this.firstFrame || this.globalPalette) {
    // no LCT - GCT is used for first (or only) frame
    this.out.writeByte(0);
  } else {
    // specify normal LCT
    this.out.writeByte(
      0x80 | // 1 local color table 1=yes
      0 | // 2 interlace - 0=no
      0 | // 3 sorted - 0=no
      0 | // 4-5 reserved
      this.palSize // 6-8 size of color table
    );
  }
};

/*
  Writes Logical Screen Descriptor
*/
GIFEncoder.prototype.writeLSD = function() {
  // logical screen size
  this.writeShort(this.width);
  this.writeShort(this.height);

  // packed fields
  this.out.writeByte(
    0x80 | // 1 : global color table flag = 1 (gct used)
    0x70 | // 2-4 : color resolution = 7
    0x00 | // 5 : gct sort flag = 0
    this.palSize // 6-8 : gct size
  );

  this.out.writeByte(0); // background color index
  this.out.writeByte(0); // pixel aspect ratio - assume 1:1
};

/*
  Writes Netscape application extension to define repeat count.
*/
GIFEncoder.prototype.writeNetscapeExt = function() {
  this.out.writeByte(0x21); // extension introducer
  this.out.writeByte(0xff); // app extension label
  this.out.writeByte(11); // block size
  this.out.writeUTFBytes('NETSCAPE2.0'); // app id + auth code
  this.out.writeByte(3); // sub-block size
  this.out.writeByte(1); // loop sub-block id
  this.writeShort(this.repeat); // loop count (extra iterations, 0=repeat forever)
  this.out.writeByte(0); // block terminator
};

/*
  Writes color table
*/
GIFEncoder.prototype.writePalette = function() {
  this.out.writeBytes(this.colorTab);
  var n = (3 * 256) - this.colorTab.length;
  for (var i = 0; i < n; i++)
    this.out.writeByte(0);
};

GIFEncoder.prototype.writeShort = function(pValue) {
  this.out.writeByte(pValue & 0xFF);
  this.out.writeByte((pValue >> 8) & 0xFF);
};

/*
  Encodes and writes pixel data
*/
GIFEncoder.prototype.writePixels = function() {
  var enc = new LZWEncoder(this.width, this.height, this.indexedPixels, this.colorDepth);
  enc.encode(this.out);
};

/*
  Retrieves the GIF stream
*/
GIFEncoder.prototype.stream = function() {
  return this.out;
};

module.exports = GIFEncoder;


/***/ }),

/***/ "./src/lib/LZWEncoder.js":
/*!*******************************!*\\
  !*** ./src/lib/LZWEncoder.js ***!
  \\*******************************/
/***/ ((module) => {

/*
  LZWEncoder.js

  Authors
  Kevin Weiner (original Java version - kweiner@fmsware.com)
  Thibault Imbert (AS3 version - bytearray.org)
  Johan Nordberg (JS version - code@johan-nordberg.com)

  Acknowledgements
  GIFCOMPR.C - GIF Image compression routines
  Lempel-Ziv compression based on 'compress'. GIF modifications by
  David Rowley (mgardi@watdcsu.waterloo.edu)
  GIF Image compression - modified 'compress'
  Based on: compress.c - File compression ala IEEE Computer, June 1984.
  By Authors: Spencer W. Thomas (decvax!harpo!utah-cs!utah-gr!thomas)
  Jim McKie (decvax!mcvax!jim)
  Steve Davies (decvax!vax135!petsd!peora!srd)
  Ken Turkowski (decvax!decwrl!turtlevax!ken)
  James A. Woods (decvax!ihnp4!ames!jaw)
  Joe Orost (decvax!vax135!petsd!joe)
*/

var EOF = -1;
var BITS = 12;
var HSIZE = 5003; // 80% occupancy
var masks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F,
             0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF,
             0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];

function LZWEncoder(width, height, pixels, colorDepth) {
  var initCodeSize = Math.max(2, colorDepth);

  var accum = new Uint8Array(256);
  var htab = new Int32Array(HSIZE);
  var codetab = new Int32Array(HSIZE);

  var cur_accum, cur_bits = 0;
  var a_count;
  var free_ent = 0; // first unused entry
  var maxcode;

  // block compression parameters -- after all codes are used up,
  // and compression rate changes, start over.
  var clear_flg = false;

  // Algorithm: use open addressing double hashing (no chaining) on the
  // prefix code / next character combination. We do a variant of Knuth's
  // algorithm D (vol. 3, sec. 6.4) along with G. Knott's relatively-prime
  // secondary probe. Here, the modular division first probe is gives way
  // to a faster exclusive-or manipulation. Also do block compression with
  // an adaptive reset, whereby the code table is cleared when the compression
  // ratio decreases, but after the table fills. The variable-length output
  // codes are re-sized at this point, and a special CLEAR code is generated
  // for the decompressor. Late addition: construct the table according to
  // file size for noticeable speed improvement on small files. Please direct
  // questions about this implementation to ames!jaw.
  var g_init_bits, ClearCode, EOFCode;

  // Add a character to the end of the current packet, and if it is 254
  // characters, flush the packet to disk.
  function char_out(c, outs) {
    accum[a_count++] = c;
    if (a_count >= 254) flush_char(outs);
  }

  // Clear out the hash table
  // table clear for block compress
  function cl_block(outs) {
    cl_hash(HSIZE);
    free_ent = ClearCode + 2;
    clear_flg = true;
    output(ClearCode, outs);
  }

  // Reset code table
  function cl_hash(hsize) {
    for (var i = 0; i < hsize; ++i) htab[i] = -1;
  }

  function compress(init_bits, outs) {
    var fcode, c, i, ent, disp, hsize_reg, hshift;

    // Set up the globals: g_init_bits - initial number of bits
    g_init_bits = init_bits;

    // Set up the necessary values
    clear_flg = false;
    n_bits = g_init_bits;
    maxcode = MAXCODE(n_bits);

    ClearCode = 1 << (init_bits - 1);
    EOFCode = ClearCode + 1;
    free_ent = ClearCode + 2;

    a_count = 0; // clear packet

    ent = nextPixel();

    hshift = 0;
    for (fcode = HSIZE; fcode < 65536; fcode *= 2) ++hshift;
    hshift = 8 - hshift; // set hash code range bound
    hsize_reg = HSIZE;
    cl_hash(hsize_reg); // clear hash table

    output(ClearCode, outs);

    outer_loop: while ((c = nextPixel()) != EOF) {
      fcode = (c << BITS) + ent;
      i = (c << hshift) ^ ent; // xor hashing
      if (htab[i] === fcode) {
        ent = codetab[i];
        continue;
      } else if (htab[i] >= 0) { // non-empty slot
        disp = hsize_reg - i; // secondary hash (after G. Knott)
        if (i === 0) disp = 1;
        do {
          if ((i -= disp) < 0) i += hsize_reg;
          if (htab[i] === fcode) {
            ent = codetab[i];
            continue outer_loop;
          }
        } while (htab[i] >= 0);
      }
      output(ent, outs);
      ent = c;
      if (free_ent < 1 << BITS) {
        codetab[i] = free_ent++; // code -> hashtable
        htab[i] = fcode;
      } else {
        cl_block(outs);
      }
    }

    // Put out the final code.
    output(ent, outs);
    output(EOFCode, outs);
  }

  function encode(outs) {
    outs.writeByte(initCodeSize); // write "initial code size" byte
    remaining = width * height; // reset navigation variables
    curPixel = 0;
    compress(initCodeSize + 1, outs); // compress and write the pixel data
    outs.writeByte(0); // write block terminator
  }

  // Flush the packet to disk, and reset the accumulator
  function flush_char(outs) {
    if (a_count > 0) {
      outs.writeByte(a_count);
      outs.writeBytes(accum, 0, a_count);
      a_count = 0;
    }
  }

  function MAXCODE(n_bits) {
    return (1 << n_bits) - 1;
  }

  // Return the next pixel from the image
  function nextPixel() {
    if (remaining === 0) return EOF;
    --remaining;
    var pix = pixels[curPixel++];
    return pix & 0xff;
  }

  function output(code, outs) {
    cur_accum &= masks[cur_bits];

    if (cur_bits > 0) cur_accum |= (code << cur_bits);
    else cur_accum = code;

    cur_bits += n_bits;

    while (cur_bits >= 8) {
      char_out((cur_accum & 0xff), outs);
      cur_accum >>= 8;
      cur_bits -= 8;
    }

    // If the next entry is going to be too big for the code size,
    // then increase it, if possible.
    if (free_ent > maxcode || clear_flg) {
      if (clear_flg) {
        maxcode = MAXCODE(n_bits = g_init_bits);
        clear_flg = false;
      } else {
        ++n_bits;
        if (n_bits == BITS) maxcode = 1 << BITS;
        else maxcode = MAXCODE(n_bits);
      }
    }

    if (code == EOFCode) {
      // At EOF, write the rest of the buffer.
      while (cur_bits > 0) {
        char_out((cur_accum & 0xff), outs);
        cur_accum >>= 8;
        cur_bits -= 8;
      }
      flush_char(outs);
    }
  }

  this.encode = encode;
}

module.exports = LZWEncoder;


/***/ }),

/***/ "./src/lib/TypedNeuQuant.js":
/*!**********************************!*\\
  !*** ./src/lib/TypedNeuQuant.js ***!
  \\**********************************/
/***/ ((module) => {

/* NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994.
 * See "Kohonen neural networks for optimal colour quantization"
 * in "Network: Computation in Neural Systems" Vol. 5 (1994) pp 351-367.
 * for a discussion of the algorithm.
 * See also  http://members.ozemail.com.au/~dekker/NEUQUANT.HTML
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal
 * in this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons who receive
 * copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 *
 * (JavaScript port 2012 by Johan Nordberg)
 */

var ncycles = 100; // number of learning cycles
var netsize = 256; // number of colors used
var maxnetpos = netsize - 1;

// defs for freq and bias
var netbiasshift = 4; // bias for colour values
var intbiasshift = 16; // bias for fractions
var intbias = (1 << intbiasshift);
var gammashift = 10;
var gamma = (1 << gammashift);
var betashift = 10;
var beta = (intbias >> betashift); /* beta = 1/1024 */
var betagamma = (intbias << (gammashift - betashift));

// defs for decreasing radius factor
var initrad = (netsize >> 3); // for 256 cols, radius starts
var radiusbiasshift = 6; // at 32.0 biased by 6 bits
var radiusbias = (1 << radiusbiasshift);
var initradius = (initrad * radiusbias); //and decreases by a
var radiusdec = 30; // factor of 1/30 each cycle

// defs for decreasing alpha factor
var alphabiasshift = 10; // alpha starts at 1.0
var initalpha = (1 << alphabiasshift);
var alphadec; // biased by 10 bits

/* radbias and alpharadbias used for radpower calculation */
var radbiasshift = 8;
var radbias = (1 << radbiasshift);
var alpharadbshift = (alphabiasshift + radbiasshift);
var alpharadbias = (1 << alpharadbshift);

// four primes near 500 - assume no image has a length so large that it is
// divisible by all four primes
var prime1 = 499;
var prime2 = 491;
var prime3 = 487;
var prime4 = 503;
var minpicturebytes = (3 * prime4);

/*
  Constructor: NeuQuant

  Arguments:

  pixels - array of pixels in RGB format
  samplefac - sampling factor 1 to 30 where lower is better quality

  >
  > pixels = [r, g, b, r, g, b, r, g, b, ..]
  >
*/
function NeuQuant(pixels, samplefac) {
  var network; // int[netsize][4]
  var netindex; // for network lookup - really 256

  // bias and freq arrays for learning
  var bias;
  var freq;
  var radpower;

  /*
    Private Method: init

    sets up arrays
  */
  function init() {
    network = [];
    netindex = new Int32Array(256);
    bias = new Int32Array(netsize);
    freq = new Int32Array(netsize);
    radpower = new Int32Array(netsize >> 3);

    var i, v;
    for (i = 0; i < netsize; i++) {
      v = (i << (netbiasshift + 8)) / netsize;
      network[i] = new Float64Array([v, v, v, 0]);
      //network[i] = [v, v, v, 0]
      freq[i] = intbias / netsize;
      bias[i] = 0;
    }
  }

  /*
    Private Method: unbiasnet

    unbiases network to give byte values 0..255 and record position i to prepare for sort
  */
  function unbiasnet() {
    for (var i = 0; i < netsize; i++) {
      network[i][0] >>= netbiasshift;
      network[i][1] >>= netbiasshift;
      network[i][2] >>= netbiasshift;
      network[i][3] = i; // record color number
    }
  }

  /*
    Private Method: altersingle

    moves neuron *i* towards biased (b,g,r) by factor *alpha*
  */
  function altersingle(alpha, i, b, g, r) {
    network[i][0] -= (alpha * (network[i][0] - b)) / initalpha;
    network[i][1] -= (alpha * (network[i][1] - g)) / initalpha;
    network[i][2] -= (alpha * (network[i][2] - r)) / initalpha;
  }

  /*
    Private Method: alterneigh

    moves neurons in *radius* around index *i* towards biased (b,g,r) by factor *alpha*
  */
  function alterneigh(radius, i, b, g, r) {
    var lo = Math.abs(i - radius);
    var hi = Math.min(i + radius, netsize);

    var j = i + 1;
    var k = i - 1;
    var m = 1;

    var p, a;
    while ((j < hi) || (k > lo)) {
      a = radpower[m++];

      if (j < hi) {
        p = network[j++];
        p[0] -= (a * (p[0] - b)) / alpharadbias;
        p[1] -= (a * (p[1] - g)) / alpharadbias;
        p[2] -= (a * (p[2] - r)) / alpharadbias;
      }

      if (k > lo) {
        p = network[k--];
        p[0] -= (a * (p[0] - b)) / alpharadbias;
        p[1] -= (a * (p[1] - g)) / alpharadbias;
        p[2] -= (a * (p[2] - r)) / alpharadbias;
      }
    }
  }

  /*
    Private Method: contest

    searches for biased BGR values
  */
  function contest(b, g, r) {
    /*
      finds closest neuron (min dist) and updates freq
      finds best neuron (min dist-bias) and returns position
      for frequently chosen neurons, freq[i] is high and bias[i] is negative
      bias[i] = gamma * ((1 / netsize) - freq[i])
    */

    var bestd = ~(1 << 31);
    var bestbiasd = bestd;
    var bestpos = -1;
    var bestbiaspos = bestpos;

    var i, n, dist, biasdist, betafreq;
    for (i = 0; i < netsize; i++) {
      n = network[i];

      dist = Math.abs(n[0] - b) + Math.abs(n[1] - g) + Math.abs(n[2] - r);
      if (dist < bestd) {
        bestd = dist;
        bestpos = i;
      }

      biasdist = dist - ((bias[i]) >> (intbiasshift - netbiasshift));
      if (biasdist < bestbiasd) {
        bestbiasd = biasdist;
        bestbiaspos = i;
      }

      betafreq = (freq[i] >> betashift);
      freq[i] -= betafreq;
      bias[i] += (betafreq << gammashift);
    }

    freq[bestpos] += beta;
    bias[bestpos] -= betagamma;

    return bestbiaspos;
  }

  /*
    Private Method: inxbuild

    sorts network and builds netindex[0..255]
  */
  function inxbuild() {
    var i, j, p, q, smallpos, smallval, previouscol = 0, startpos = 0;
    for (i = 0; i < netsize; i++) {
      p = network[i];
      smallpos = i;
      smallval = p[1]; // index on g
      // find smallest in i..netsize-1
      for (j = i + 1; j < netsize; j++) {
        q = network[j];
        if (q[1] < smallval) { // index on g
          smallpos = j;
          smallval = q[1]; // index on g
        }
      }
      q = network[smallpos];
      // swap p (i) and q (smallpos) entries
      if (i != smallpos) {
        j = q[0];   q[0] = p[0];   p[0] = j;
        j = q[1];   q[1] = p[1];   p[1] = j;
        j = q[2];   q[2] = p[2];   p[2] = j;
        j = q[3];   q[3] = p[3];   p[3] = j;
      }
      // smallval entry is now in position i

      if (smallval != previouscol) {
        netindex[previouscol] = (startpos + i) >> 1;
        for (j = previouscol + 1; j < smallval; j++)
          netindex[j] = i;
        previouscol = smallval;
        startpos = i;
      }
    }
    netindex[previouscol] = (startpos + maxnetpos) >> 1;
    for (j = previouscol + 1; j < 256; j++)
      netindex[j] = maxnetpos; // really 256
  }

  /*
    Private Method: inxsearch

    searches for BGR values 0..255 and returns a color index
  */
  function inxsearch(b, g, r) {
    var a, p, dist;

    var bestd = 1000; // biggest possible dist is 256*3
    var best = -1;

    var i = netindex[g]; // index on g
    var j = i - 1; // start at netindex[g] and work outwards

    while ((i < netsize) || (j >= 0)) {
      if (i < netsize) {
        p = network[i];
        dist = p[1] - g; // inx key
        if (dist >= bestd) i = netsize; // stop iter
        else {
          i++;
          if (dist < 0) dist = -dist;
          a = p[0] - b; if (a < 0) a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r; if (a < 0) a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
      if (j >= 0) {
        p = network[j];
        dist = g - p[1]; // inx key - reverse dif
        if (dist >= bestd) j = -1; // stop iter
        else {
          j--;
          if (dist < 0) dist = -dist;
          a = p[0] - b; if (a < 0) a = -a;
          dist += a;
          if (dist < bestd) {
            a = p[2] - r; if (a < 0) a = -a;
            dist += a;
            if (dist < bestd) {
              bestd = dist;
              best = p[3];
            }
          }
        }
      }
    }

    return best;
  }

  /*
    Private Method: learn

    "Main Learning Loop"
  */
  function learn() {
    var i;

    var lengthcount = pixels.length;
    var alphadec = 30 + ((samplefac - 1) / 3);
    var samplepixels = lengthcount / (3 * samplefac);
    var delta = ~~(samplepixels / ncycles);
    var alpha = initalpha;
    var radius = initradius;

    var rad = radius >> radiusbiasshift;

    if (rad <= 1) rad = 0;
    for (i = 0; i < rad; i++)
      radpower[i] = alpha * (((rad * rad - i * i) * radbias) / (rad * rad));

    var step;
    if (lengthcount < minpicturebytes) {
      samplefac = 1;
      step = 3;
    } else if ((lengthcount % prime1) !== 0) {
      step = 3 * prime1;
    } else if ((lengthcount % prime2) !== 0) {
      step = 3 * prime2;
    } else if ((lengthcount % prime3) !== 0)  {
      step = 3 * prime3;
    } else {
      step = 3 * prime4;
    }

    var b, g, r, j;
    var pix = 0; // current pixel

    i = 0;
    while (i < samplepixels) {
      b = (pixels[pix] & 0xff) << netbiasshift;
      g = (pixels[pix + 1] & 0xff) << netbiasshift;
      r = (pixels[pix + 2] & 0xff) << netbiasshift;

      j = contest(b, g, r);

      altersingle(alpha, j, b, g, r);
      if (rad !== 0) alterneigh(rad, j, b, g, r); // alter neighbours

      pix += step;
      if (pix >= lengthcount) pix -= lengthcount;

      i++;

      if (delta === 0) delta = 1;
      if (i % delta === 0) {
        alpha -= alpha / alphadec;
        radius -= radius / radiusdec;
        rad = radius >> radiusbiasshift;

        if (rad <= 1) rad = 0;
        for (j = 0; j < rad; j++)
          radpower[j] = alpha * (((rad * rad - j * j) * radbias) / (rad * rad));
      }
    }
  }

  /*
    Method: buildColormap

    1. initializes network
    2. trains it
    3. removes misconceptions
    4. builds colorindex
  */
  function buildColormap() {
    init();
    learn();
    unbiasnet();
    inxbuild();
  }
  this.buildColormap = buildColormap;

  /*
    Method: getColormap

    builds colormap from the index

    returns array in the format:

    >
    > [r, g, b, r, g, b, r, g, b, ..]
    >
  */
  function getColormap() {
    var map = [];
    var index = [];

    for (var i = 0; i < netsize; i++)
      index[network[i][3]] = i;

    var k = 0;
    for (var l = 0; l < netsize; l++) {
      var j = index[l];
      map[k++] = (network[j][0]);
      map[k++] = (network[j][1]);
      map[k++] = (network[j][2]);
    }
    return map;
  }
  this.getColormap = getColormap;

  /*
    Method: lookupRGB

    looks for the closest *r*, *g*, *b* color in the map and
    returns its index
  */
  this.lookupRGB = inxsearch;
}

module.exports = NeuQuant;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\\
  !*** ./src/gif.worker.js ***!
  \\***************************/
/*\r
 * decaffeinate suggestions:\r
 * DS101: Remove unnecessary use of Array.from\r
 * DS102: Remove unnecessary code created because of implicit returns\r
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md\r
 */\r
const GIFEncoder = __webpack_require__(/*! ./lib/GIFEncoder.js */ "./src/lib/GIFEncoder.js");\r
\r
const renderFrame = function (frame) {\r
  const encoder = new GIFEncoder(frame.width, frame.height);\r
\r
  if (frame.index === 0) {\r
    encoder.writeHeader();\r
  } else {\r
    encoder.firstFrame = false;\r
  }\r
\r
  encoder.setTransparent(frame.transparent);\r
  encoder.setDispose(frame.dispose);\r
  encoder.setRepeat(frame.repeat);\r
  encoder.setDelay(frame.delay);\r
  encoder.setQuality(frame.quality);\r
  encoder.setDither(frame.dither);\r
  encoder.setGlobalPalette(frame.globalPalette);\r
  encoder.addFrame(frame.data);\r
  if (frame.last) {\r
    encoder.finish();\r
  }\r
  if (frame.globalPalette === true) {\r
    frame.globalPalette = encoder.getGlobalPalette();\r
  }\r
\r
  const stream = encoder.stream();\r
  frame.data = stream.pages;\r
  frame.cursor = stream.cursor;\r
  frame.pageSize = stream.constructor.pageSize;\r
\r
  if (frame.canTransfer) {\r
    const transfer = Array.from(frame.data).map((page) => page.buffer);\r
    return self.postMessage(frame, transfer);\r
  } else {\r
    return self.postMessage(frame);\r
  }\r
};\r
\r
self.onmessage = (event) => renderFrame(event.data);\r

})();

/******/ })()
;`},"./src/browser.js":s=>{const o=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),c=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],u=c[1]==="ie"&&document.documentMode,d={name:c[1]==="version"?c[3]:c[1],version:u||parseFloat(c[1]==="opera"&&c[4]?c[4]:c[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}};d[d.name]=!0,d[d.name+parseInt(d.version,10)]=!0,d.platform[d.platform.name]=!0,s.exports=d},"?569f":()=>{}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={exports:{}};return r[s](l,l.exports,i),l.exports}i.d=(s,o)=>{for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})},i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>u});var s=i("./dist/gif.worker.js.txt");const{EventEmitter:o}=i("./node_modules/events/events.js"),l=i("./src/browser.js");i("?569f");var c=function(){let d,f;return(c=class extends o{static initClass(){d={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},f={delay:500,copy:!1,dispose:-1}}constructor(h){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(h);for(let p in d){const m=d[p];this.options[p]==null&&(this.options[p]=m)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(h,p){if(this.options[h]=p,this._canvas!=null&&["width","height"].includes(h))return this._canvas[h]=p}setOptions(h){return(()=>{const p=[];for(let m of Object.keys(h||{})){const w=h[m];p.push(this.setOption(m,w))}return p})()}addFrame(h,p){p==null&&(p={});const m={};m.transparent=this.options.transparent;for(let w in f)m[w]=p[w]||f[w];if(this.options.width==null&&this.setOption("width",h.width),this.options.height==null&&this.setOption("height",h.height),typeof ImageData<"u"&&ImageData!==null&&h instanceof ImageData)m.data=h.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&h instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&h instanceof WebGLRenderingContext)p.copy?m.data=this.getContextData(h):m.context=h;else{if(h.childNodes==null)throw new Error("Invalid image");p.copy?m.data=this.getImageData(h):m.image=h}return this.frames.push(m)}render(){let h;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let m,w;const I=[];for(h=0,w=this.frames.length,m=0<=w;m?h<w:h>w;m?h++:h--)I.push(null);return I})();const p=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let m,w;for(h=0,w=p,m=0<=w;m?h<w:h>w;m?h++:h--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const h=this.activeWorkers.shift();if(h==null)break;this.log("killing active worker"),h.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const h=Math.min(this.options.workers,this.frames.length);return function(p,m,w){let I=[],R=p<m,M=m;for(let B=p;R?B<M:B>M;R?B++:B--)I.push(B);return I}(this.freeWorkers.length,h).forEach(p=>{this.log(`spawning worker ${p}`);const m=new Worker(this.workerURL);return m.onmessage=w=>(this.activeWorkers.splice(this.activeWorkers.indexOf(m),1),this.freeWorkers.push(m),this.frameFinished(w.data)),this.freeWorkers.push(m)}),h}frameFinished(h){if(this.log(`frame ${h.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[h.index]=h,this.options.globalPalette===!0&&(this.options.globalPalette=h.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let p=1,m=this.freeWorkers.length,w=1<=m;w?p<m:p>m;w?p++:p--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let h,p=0;for(h of Array.from(this.imageParts))p+=(h.data.length-1)*h.pageSize+h.cursor;p+=h.pageSize-h.cursor,this.log(`rendering finished - filesize ${Math.round(p/1e3)}kb`);const m=new Uint8Array(p);let w=0;for(h of Array.from(this.imageParts))for(let R=0;R<h.data.length;R++){const M=h.data[R];m.set(M,w),R===h.data.length-1?w+=h.cursor:w+=h.pageSize}const I=new Blob([m],{type:"image/gif"});return this.emit("finished",I,m)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const h=this.frames[this.nextFrame++],p=this.freeWorkers.shift(),m=this.getTask(h);return this.log(`starting frame ${m.index+1} of ${this.frames.length}`),this.activeWorkers.push(p),p.postMessage(m)}getContextData(h){return h.getImageData(0,0,this.options.width,this.options.height).data}getImageData(h){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const p=this._canvas.getContext("2d");return p.fillStyle=this.options.background,p.fillRect(0,0,this.options.width,this.options.height),p.drawImage(h,0,0),this.getContextData(p)}getTask(h){const p=this.frames.indexOf(h),m={index:p,last:p===this.frames.length-1,delay:h.delay,dispose:h.dispose,transparent:h.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:l.name==="chrome"};if(h.data!=null)m.data=h.data;else if(h.context!=null)m.data=this.getContextData(h.context);else{if(h.image==null)throw new Error("Invalid frame");m.data=this.getImageData(h.image)}return m}log(...h){if(this.options.debug)return console.log(...Array.from(h||[]))}}).initClass(),c}();const u=c})(),a})()})})(Ct);var oi=Ct.exports;const Ri=Xt(oi),li={frameCount:0,startTime:0};class hi{constructor(t,r=1){v(this,"blob");v(this,"video");v(this,"length");v(this,"frames");v(this,"initPromise");this.blob=t,this.length=r,this.initPromise=this.init()}setFrameCount(t){return this.length=t,this.initPromise=this.init(),this}async init(){this.frames=[];const t=document.createElement("video");t.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(i=>t.addEventListener("loadeddata",i));const{startTime:r}=li,n=(this.video.duration-r)/this.length;for(let i=0;i<this.length;i++)this.video.currentTime=i*n+r,await new Promise(a=>this.video.oncanplay=a),this.frames[i]=me(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function ci(e,t){if(t=t,t<0)throw new Error(`video frame count ${t} must >1`);return new hi(e,t).getFrames()}var Et=(e=>(e.SWIRL="SWIRL",e.BULGE="BULGE",e.SWIM="SWIM",e.BLUR="BLUR",e.CONTRAST="CONTRAST",e.HSB="HSB",e.HALFTONE="HALFTONE",e.DOT_SCREEN="DOT_SCREEN",e.NOISE="NOISE",e.DENOISE="DENOISE",e))(Et||{});class ui extends ut{constructor(r=!0){super(r);v(this,"centerX",.5);v(this,"centerY",.5)}build(r,n){if(!(n!=null&&n.length))return r;const i=this.getTexture(r),a=document.createElement("canvas");a.width=r.width,a.height=r.height;const s=a.getContext("2d"),o=r.width/2,l=r.height/2,c=Math.min(o,l);this.fxCanvas.draw(i);for(const u of n)switch(u.type){case"SWIRL":this.fxCanvas.swirl(o,l,u.radius||c,u.angle||3);break;case"BULGE":this.fxCanvas.bulgePinch(o,l,u.radius||c,u.strength||.5);break;case"SWIM":this.fxCanvas.swim(u.scale,u.stretch,u.angle,u.amount,u.turbulence,u.time);break;case"BLUR":this.fxCanvas.triangleBlur(u.radius||10);break;case"CONTRAST":this.fxCanvas.brightnessContrast(u.brightness||0,u.contrast||0);break;case"HSB":this.fxCanvas.hueSaturation(u.hue||0,u.saturation||0);break;case"HALFTONE":this.fxCanvas.colorHalftone(o,l,u.angle||0,u.radius||4);break;case"DOT_SCREEN":this.fxCanvas.dotScreen(o,l,u.angle||0,u.radius||4);break;case"NOISE":this.fxCanvas.noise(u.amount||.25);break;case"DENOISE":this.fxCanvas.denoise(u.exponent||20);break;case Et.OIL:this.fxCanvas.oil(u.skip,u.levels,u.range);break;default:console.warn("Unknown filter type",u)}return this.fxCanvas.update(),s.drawImage(this.fxCanvas,0,0),a}}var di=(e=>(e.FROM="FROM",e.TO="TO",e.GROUP="GROUP",e.BOT="BOT",e.RANDOM="RANDOM",e))(di||{}),fi=(e=>(e.ZOOM="ZOOM",e.DEFORM="DEFORM",e))(fi||{}),pi=(e=>(e.NONE="NONE",e.PIXEL="PIXEL",e.PERCENT="PERCENT",e))(pi||{}),gi=(e=>(e.CONTAIN="CONTAIN",e.COVER="COVER",e.FILL="FILL",e))(gi||{}),mi=(e=>(e.MIRROR="MIRROR",e.FLIP="FLIP",e.GRAY="GRAY",e.BINARIZATION="BINARIZATION",e))(mi||{});const vi={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,origin:ie.DEFAULT,avatarOnTop:!0,angle:0,opacity:1};function xi(e){if(e.compiled)return e;const t={...vi,...e},r=t.pos;let n;switch(t.posType){case"ZOOM":n=typeof r[0]!="object"?[oe(r,4)]:r.map(i=>oe(i,4)),t.pos=n.map(i=>i.map(a=>typeof a=="number"?a:Q.parse(a)));break;case"DEFORM":try{n=r.map(i=>oe(i,5).map(a=>oe(a,2)))}catch{n=[oe(r,5).map(a=>oe(a,2))]}t.pos=n.map(i=>i.map(a=>a.map(s=>typeof s=="number"?s:Q.parse(s))));break}return t.compiled=!0,t}class yi extends lt{constructor(r,n,i){super();v(this,"type");v(this,"template");v(this,"originBlob");v(this,"frames");v(this,"pos");v(this,"initPromise");v(this,"deformer");v(this,"filterRenderer");this.type=r.type;const a=i&&i[this.type.toString().toLowerCase()];if(this.template=xi(a?{...r,...a}:r),this.originBlob=n[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.updateTemplate()}async updateTemplate(){await this.setCrop(),await this.setStyle(),await this.setFilter(),await this.setRound(),await this.setPos()}async loadFile(){const r=this.originBlob;if(r.type.startsWith("video/"))this.frames=await ci(r,this.template.pos.length);else if(!r.type.startsWith("image"))throw new Error("不支持的格式: "+r.type);r.type==="image/gif"?this.frames=await si(r):this.frames=[await we(r)]}setCrop(){const r=this.template.cropType;r!=="NONE"&&(this.frames=this.frames.map(n=>Ze(n,this.template.crop,r==="PERCENT")))}setStyle(){for(const r of this.template.style)switch(r){case"FLIP":this.frames=this.frames.map(Vt);break;case"MIRROR":this.frames=this.frames.map(zr);break;case"GRAY":this.frames=this.frames.map(Qt);break;case"BINARIZATION":this.frames=this.frames.map(Lr);break;default:console.warn("Unknown style "+r)}}setFilter(){var r,n;(n=(r=this.template)==null?void 0:r.filter)!=null&&n.length&&(this.filterRenderer=new ui,this.frames=this.frames.map(i=>this.filterRenderer.build(i,this.template.filter)))}setRound(){this.template.round&&(this.frames=this.frames.map(Nr))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(r=>r.map(this.evalExpression));break;case"DEFORM":this.deformer=new Dr,this.pos=this.template.pos.map(r=>r.map(n=>n.map(this.evalExpression)));break}}evalExpression(r){return typeof r=="number"?r:r.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(r){return r<this.frames.length?this.frames[r]:this.frames.at(-1)}getPos(r){return r<this.pos.length?this.pos[r]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(r,n=0){await this.initPromise;let i=this.getFrame(n);const a=this.getPos(n);let{angle:s,opacity:o,rotate:l}=this.template;switch(r.globalAlpha=o,l&&(s+=360/this.pos.length*n),this.template.posType){case"ZOOM":const[c,u,d,f]=a;if(s)switch(r.save(),this.template.origin){case ie.DEFAULT:r.translate(c,u),r.rotate(s*Math.PI/180),r.translate(-c,-u);break;case ie.CENTER:r.translate(c+d/2,u+f/2),r.rotate(s*Math.PI/180),r.translate(-c-d/2,-u-f/2);break}switch(this.template.fit){case"FILL":r.drawImage(i,c,u,d,f);break;default:const h=Math[this.template.fit==="CONTAIN"?"min":"max"](d/i.width,f/i.height),p=i.width*h,m=i.height*h,w=c+(d-p)/2,I=u+(f-m)/2;if(this.template.fit==="CONTAIN")r.drawImage(i,w,I,p,m);else{const R=p-d,M=m-f,B=R/h/2,z=M/h/2;r.drawImage(Ze(i,[B,z,i.width-B,i.height-z]),w+R/2,I+M/2,p-R,m-M)}break}s&&r.restore();break;case"DEFORM":this.deformer.draw(r,i,a);break}r.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const r=this.frames[0];return{width:r.width,height:r.height}}destroy(){var r;(r=this.deformer)==null||r.destroy()}}class Xe{constructor(t){v(this,"arr");v(this,"initPromise");v(this,"topAvatars",[]);v(this,"bottomAvatars",[]);v(this,"sizeMap",Object.create(null));v(this,"maxLength");this.arr=t,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(t,r)=>{t.onTop?this.topAvatars.push(t):this.bottomAvatars.push(t);const n=await t.getSize();this.sizeMap[`avatar${r}Width`]=n.width,this.sizeMap[`avatar${r}Height`]=n.height,this.maxLength=await t.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}destroy(){this.arr.forEach(t=>t.destroy())}static createFrom(t,r,n){return new Xe(t.map(i=>new yi(i,r,n)))}}const wi=6;class $e{constructor(t){v(this,"hasTemplate",!1);v(this,"width");v(this,"height");v(this,"color");v(this,"frames");v(this,"loadingPromise");t&&([this.width,this.height]=t.size.map(r=>typeof r=="number"?r:Q.parse(r)),this.color=ot(this.color),this.hasTemplate=!0)}setUrl(t,r){this.loadingPromise=$e.fetchImages(t,r).then(n=>this.frames=n)}set images(t){this.frames=t}async generate(t){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(r=>{const n=this.getCtx(t);return n.drawImage(r,0,0),n.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(t).canvas];throw new Error("can not load background")}getCtx(t){const r=document.createElement("canvas"),n=a=>typeof a=="number"?a:a.evaluate(t);r.width=n(this.width),r.height=n(this.height);const i=r.getContext("2d");return i.fillStyle=this.color,i.fillRect(0,0,r.width,r.height),i}static async fetchImages(t,r){if(r!==void 0){if(r<=0)return[];const o=[];for(let l=0;l<r;l++)o.push(fetch(`${t}/${l}.png`).then(c=>c.blob()).then(we));return Promise.all(o)}let n=!1,i=new Set;const a=[];let s=0;for(;!n;){i.size>=wi&&await Promise.race(i);const o=s++,c=fetch(`${t}/${o}.png`).then(u=>u.blob()).then(we).then(u=>{a[o]=u}).catch(()=>n=!0).then(()=>i.delete(c));i.add(c)}return await Promise.all(i),a}}var bi=(e=>(e.IMG="IMG",e.GIF="GIF",e))(bi||{});const Ci={type:void 0,avatar:[],text:[],background:void 0,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class Pi{constructor(t,r){v(this,"type");v(this,"template");v(this,"initPromise");v(this,"avatarList");v(this,"backgroundModel");v(this,"textModelList");v(this,"backgroundLength");this.template={...Ci,...t},this.type=t.type,this.textModelList=De.createFrom(this.template.text),this.backgroundModel=new $e(this.template.background),r&&(this.background=r),this.initPromise=this.init()}set background(t){if(typeof t=="string")this.backgroundModel.setUrl(t,this.backgroundLength);else if(Array.isArray(t))this.backgroundModel.images=t;else throw console.warn(t),new Error("Unknown background")}async init(){}async generate(t,r){const n=Xe.createFrom(this.template.avatar,t,r),i=await n.getSizeMap(),a=await this.backgroundModel.generate(i);return new Ei(this.template,a,n,this.textModelList)}}class Ei{constructor(t,r,n,i){v(this,"template");v(this,"canvas");v(this,"ctx");v(this,"backgrounds");v(this,"avatars");v(this,"texts");v(this,"length");v(this,"intervalId");v(this,"initPromise");v(this,"userDelay");v(this,"i",0);v(this,"framesCache",[]);v(this,"resolveFramesCachedPromise");v(this,"framesCachedPromise",new Promise(t=>this.resolveFramesCachedPromise=t));v(this,"prevTextCacheCount");v(this,"prevTextedFramesCache");const a=document.createElement("canvas");this.canvas=a,a.width=r[0].width,a.height=r[0].height,this.ctx=a.getContext("2d"),this.template=t,this.backgrounds=r,this.avatars=n,this.texts=i,this.texts.setCacheArea(a.width,a.height),this.initPromise=this.init()}async init(){const{posLength:t,frameLength:r=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?r:this.backgrounds.length}async replay(){return this.i=0,await this.play(),new Promise(t=>setTimeout(t,this.delay*this.length))}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}playReverse(){this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.length-1-this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(t){if(!t){this.stop();return}this.userDelay=t,t>0?this.play():this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(t){return t<this.backgrounds.length?this.backgrounds[t]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}async getTextedFrames(){const t=await this.getFrames();return this.texts.texts.length===0?t:this.prevTextCacheCount===this.texts.cacheCount?this.prevTextedFramesCache:(this.prevTextedFramesCache=t.map(r=>{const n=me(r);return n.getContext("2d").drawImage(this.texts.cacheCanvas,0,0),n}),this.prevTextCacheCount=this.texts.cacheCount,this.prevTextedFramesCache)}drawTextsCache(){this.ctx.drawImage(this.texts.cacheCanvas,0,0)}drawTexts(){this.texts.draw(this.ctx)}async drawAvatarsCache(t){if(this.framesCache[t]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[t],0,0);return}await this.drawAvatars(t),this.framesCache[t]=me(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async drawAvatars(t){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const r of this.avatars.bottomAvatars)await r.draw(this.ctx,t);this.ctx.drawImage(this.getBackground(t),0,0);for(const r of this.avatars.topAvatars)await r.draw(this.ctx,t)}get settingObject(){const t=this;return this.length===1?{}:{set delay(r){t.delay=r},get delay(){return t.delay},play:()=>this.play(),stop:()=>this.stop()}}async destroy(){await this.stop(),this.avatars.destroy(),this.canvas.remove()}}const Ti=Wt();class Tt{constructor(t,r,n){v(this,"obj");v(this,"container");v(this,"attrMap");if(this.obj=t,this.container=document.createElement(n?"fieldset":"div"),n&&this.container.appendChild(St(n,"legend")),this.container.classList.add("setting-container"),this.attrMap=r??{},this.obj._delete){const i=this.obj._delete;delete this.obj._delete,this.obj.delete=()=>{typeof i=="function"&&i(),this.container.remove()}}for(const[i,a]of Object.entries(this.obj)){if(a==null)continue;const s=this.createElement(i,a);this.container.appendChild(s)}}createElement(t,r){const n=this.attrMap[t]??{};let i=document.createElement("div");const a=document.createElement("label");switch(a.textContent=Ti[t]??t,i.appendChild(a),n.type){case"font":const o=document.createElement("select");return o.addEventListener("change",()=>this.obj[t]=o.value),document.fonts.forEach(c=>{const u=c.family,d=document.createElement("option");d.style.fontFamily=u,d.value=u,d.textContent=u,d.selected=u===this.obj[t],o.appendChild(d)}),i.appendChild(o),i;case"select":const l=document.createElement("select");return l.addEventListener("change",()=>this.obj[t]=l.value),n.options.forEach(c=>{const u=document.createElement("option");u.value=c,u.textContent=c,u.selected=c===r,l.appendChild(u)}),i.appendChild(l),i}let s=typeof r;switch(s){case"object":i=new Tt(r,n[t],t).render();break;case"function":const o=document.createElement("button");o.textContent=t,o.addEventListener("click",async()=>{o.disabled=!0,o.style.cursor="progress";try{await r()}finally{o.disabled=!1,o.style.cursor="pointer"}}),i.appendChild(o);break;default:const l=document.createElement("input");let c=()=>this.obj[t]=l.value;switch(typeof r){case"number":c=()=>this.obj[t]=parseFloat(l.value);break;case"string":s=/^#([A-Fa-f0-9]{6})$/.test(r)?"color":"text";break;case"boolean":s="checkbox",l.checked=r,c=()=>this.obj[t]=l.checked;break}l.type=s;for(let[u,d]of Object.entries(n))l[u]=d;l.value=r.toString(),l.addEventListener("input",c),i.appendChild(l);break}return i}render(){return this.container}}export{pi as A,Ri as G,Pi as P,Tt as S,ie as T,_i as a,Xt as b,St as c,we as d,Fi as e,Ie as f,Wt as g,si as h,Ii as i,Si as j,vi as k,di as l,gi as m,fi as n,mi as o,Zt as p,Yt as q,Ht as r,Pt as s,He as t,J as u,Ci as v,bi as w};
