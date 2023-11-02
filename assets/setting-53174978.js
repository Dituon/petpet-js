var At=Object.defineProperty;var kt=(t,e,r)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var v=(t,e,r)=>(kt(t,typeof e!="symbol"?e+"":e,r),r);import"./app-53ca4b0c.js";function _t(t,e="h3"){const r=document.createElement(e);return r.textContent=t,r}const St={server:[window.location.origin+window.location.pathname,"https://d2n.moe/petpet-js","https://d2n.moe/petpet"],lang:void 0,template:void 0},It=["lang","template","server"],ye=new URL(location.href),Ie=Ft();function Ft(){const{lang:t,template:e,server:r=[]}=Pt();let n={...St,...JSON.parse(localStorage.getItem("config")||"{}")};n.lang=t??n.lang,n.template=e??n.template;function i(){localStorage.setItem("config",JSON.stringify(n))}return n.save=i,n.server=[...new Set([...r,...n.server])],n=new Proxy(n,{set(a,s,o){return Array.isArray(a[s])?a[s]=new Proxy(o,{set(l,c,d){return l[c]=d,i(),!0},deleteProperty(l,c){return l.splice(c,1),i(),!0}}):a[s]=o,i(),!0}}),n.save(),n}function Rt(t,e){if(window.history.replaceState){if(!e){ye.searchParams.delete(t);return}ye.searchParams.set(t,e),window.history.replaceState({},"",ye.toString())}}function Pt(){const t={};for(let e of It){const r=ye.searchParams.get(e);if(r)switch(e){case"server":t.server=r.split(","),Rt("server",void 0);break;default:t[e]=r;break}}return t}const Ot={selectTemplate:"Template auswählen",uploadAvatar:"Avatar hochladen",setText:"Text setzen",result:"Ergebnis",typeToSearch:"Suche",cancel:"Abbrechen",save:"Speichern",add:"Hinzufügen",x:"X",y:"Y",text:"Text",color:"Farbe",size:"Größe",font:"Schriftart",fontStyle:"Schriftstil",strokeSize:"Konturgröße",strokeColor:"Konturfarbe",hidden:"Verstecken",delete:"Löschen",delay:"Verzögerung",play:"Abspielen",stop:"Stoppen",workers:"Anzahl der Threads",quality:"Qualität",background:"Hintergrund",dither:"Dither",download:"Download",copy:"Kopieren",share:"Teilen",notSelected:"Nicht ausgewählt",noAvatar:"Keine Avatar",rightClickOrLongPress:"Rechtsklick oder Doppelklick",type:"Typ",deform:"Verformung",round:"Rund",rotate:"Drehen",avatarOnTop:"Avatar oben",opacity:"Deckkraft",fit:"Anpassen",style:"Stil",FLIP:"Umdrehen",MIRROR:"Spiegeln",GRAY:"Grau",BINARIZATION:"Binarisierung"},Mt={selectTemplate:"Sélectionnez un modèle",uploadAvatar:"Télécharger avatar",setText:"Définir le texte",result:"Résultat",typeToSearch:"Rechercher",cancel:"Annuler",save:"Enregistrer",add:"Ajouter",x:"X",y:"Y",text:"Texte",color:"Couleur",size:"Taille",font:"Police",fontStyle:"Style de police",strokeSize:"Taille du contour",strokeColor:"Couleur du contour",hidden:"Cacher",delete:"Supprimer",delay:"Délai",play:"Lecture",stop:"Arrêter",workers:"Nombre de nœuds",quality:"Qualité",background:"Fond",dither:"Dither",download:"Télécharger",copy:"Copier",share:"Partager",notSelected:"Non sélectionné",noAvatar:"Aucun avatar",rightClickOrLongPress:"Cliquer ou longue-cliquer pour sélectionner",type:"Type",deform:"Déformation",round:"Rond",rotate:"Rotation",avatarOnTop:"Avatar en haut",opacity:"Opacité",fit:"Ajustement",style:"Style",FLIP:"Retourner",MIRROR:"Miroir",GRAY:"Gris",BINARIZATION:"Binarisation"},Bt={selectTemplate:"テンプレートを選択",uploadAvatar:"アバターをアップロード",setText:"テキストを設定",result:"結果",typeToSearch:"検索",cancel:"キャンセル",save:"保存",add:"追加",x:"X",y:"Y",text:"テキスト",color:"色",size:"サイズ",font:"フォント",fontStyle:"フォントスタイル",strokeSize:"線の太さ",strokeColor:"線の色",hidden:"隠す",delete:"削除",delay:"遅延",play:"再生",stop:"停止",workers:"線程数",quality:"質量",background:"背景色",dither:"抖動",download:"ダウンロード",copy:"コピー",share:"シェア",notSelected:"未選択",noAvatar:"アバターなし",rightClickOrLongPress:"右クリックまたは長押し",type:"タイプ",deform:"変形",round:"ラウンド",rotate:"回転",avatarOnTop:"上にアバター",opacity:"不透明度",fit:"フィット",style:"スタイル",FLIP:"反転",MIRROR:"ミラー",GRAY:"グレー",BINARIZATION:"二値化"},Dt={selectTemplate:"템플릿 선택",uploadAvatar:"아바타 업로드",setText:"텍스트 설정",result:"결과",typeToSearch:"검색",cancel:"취소",save:"저장",add:"추가",x:"X",y:"Y",text:"텍스트",color:"색",size:"크기",font:"글꼴",fontStyle:"글꼴 스타일",strokeSize:"선 굵기",strokeColor:"선 색상",hidden:"숨김",delete:"삭제",delay:"연속",play:"재생",stop:"중지",workers:"쓰레드 수",quality:"질량",background:"배경색",dither:"쓰레드",download:"다운로드",copy:"복사",share:"공유",notSelected:"선택되지 않음",noAvatar:"아바타 없음",rightClickOrLongPress:"마우스 오른쪽클릭",type:"유형",deform:"변형",round:"둥근",rotate:"회전",avatarOnTop:"상단 아바타",opacity:"불투명도",fit:"맞춤",style:"스타일",FLIP:"뒤집기",MIRROR:"거울상",GRAY:"그레이",BINARIZATION:"이진화"},Lt={selectTemplate:"Выберите шаблон",uploadAvatar:"Загрузить аватар",setText:"Установить текст",result:"Результат",typeToSearch:"Поиск",cancel:"Отмена",save:"Сохранить",add:"Добавить",x:"X",y:"Y",text:"Текст",color:"Цвет",size:"Размер",font:"Шрифт",fontStyle:"Стиль шрифта",strokeSize:"Толщина обводки",strokeColor:"Цвет обводки",hidden:"Скрыть",delete:"Удалить",delay:"Задержка",play:"Воспроизведение",stop:"Остановить",workers:"Количество нитей",quality:"Качество",background:"Фон",dither:"Контроль",download:"Скачать",copy:"Копировать",share:"Поделиться",notSelected:"Не выбрано",noAvatar:"Нет аватара",rightClickOrLongPress:"Кликните или перетащите мышкой",type:"Тип",deform:"Деформация",round:"Круглый",rotate:"Поворот",avatarOnTop:"Аватар сверху",opacity:"Непрозрачность",fit:"Подгонка",style:"Стиль",FLIP:"Перевернуть",MIRROR:"Зеркало",GRAY:"Серый",BINARIZATION:"Бинаризация"},zt={selectTemplate:"Select template",uploadAvatar:"Upload avatar",setText:"Set text",result:"Result",typeToSearch:"Type to search",cancel:"Cancel",save:"Save",add:"Add",x:"X",y:"Y",text:"Text",color:"Color",size:"Size",font:"Font",fontStyle:"Font Style",strokeSize:"Stroke Size",strokeColor:"Stroke Color",hidden:"Hidden",delete:"Delete",delay:"Delay",play:"Play",stop:"Stop",workers:"Workers",quality:"Quality",background:"Background",dither:"Dither",download:"Download",copy:"Copy",share:"Share",notSelected:"Not Selected",noAvatar:"No Avatar",rightClickOrLongPress:"Right Click or Long Press",type:"Type",deform:"Deform",round:"Round",rotate:"Rotate",avatarOnTop:"Avatar on Top",opacity:"Opacity",fit:"Fit",style:"Style",FLIP:"Flip",MIRROR:"Mirror",GRAY:"Gray",BINARIZATION:"Binarization"},Nt={selectTemplate:"选择模板",uploadAvatar:"上传头像",setText:"设置文字",result:"结果",typeToSearch:"搜索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"颜色",size:"大小",font:"字体",fontStyle:"字体风格",strokeSize:"描边大小",strokeColor:"描边颜色",hidden:"隐藏",delete:"删除",delay:"延迟",play:"播放",stop:"停止",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"未选择",noAvatar:"无头像",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},jt={selectTemplate:"烟弹口味",uploadAvatar:"动物朋友的相片",setText:"自调烟油",result:"试抽一下",typeToSearch:"找一找",cancel:"不",save:"好了",add:"多一个",x:"左右",y:"上下",text:"藏话",color:"烟油颜色",size:"烟嘴尺寸",font:"雾化器",fontStyle:"雾化湿度",strokeSize:"烟杆长度",strokeColor:"烟杆颜色",hidden:"低欧姆雾化",delete:"不抽了",delay:"吐圈速度",play:"开溜",stop:"等会",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"芋泥波波",noAvatar:"雪豹已失联",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},Gt={selectTemplate:"選擇模板",uploadAvatar:"上傳頭像",setText:"設置文字",result:"結果",typeToSearch:"檢索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"顏色",size:"大小",font:"字型",fontStyle:"字型風格",strokeSize:"描邊大小",strokeColor:"描邊顏色",hidden:"隱藏",delete:"刪除",delay:"延遲",play:"播放",stop:"停止",workers:"線程數",quality:"質量",background:"背景",dither:"抖動",download:"下載",copy:"複製",share:"分享",notSelected:"未選擇",noAvatar:"無頭像",rightClickOrLongPress:"右鍵或長按",type:"類型",deform:"變形",round:"圓形",rotate:"旋轉",avatarOnTop:"頭像置顶",opacity:"透明度",fit:"適應",style:"風格",FLIP:"翻轉",MIRROR:"鏡像",GRAY:"灰階",BINARIZATION:"二值化"},Ut=[{id:"zh-CN",text:"简体中文",alias:["zh"]},{id:"zh-TW",text:"繁體中文",alias:["zh-HK","zh-SG"]},{id:"en-US",text:"English",alias:["en","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT"]},{id:"ru",text:"русский язык",alias:["ru-RU"]},{id:"de",text:"Deutsch",alias:["de-CH","de-AT","de-LU","de-LI"]},{id:"es",text:"español",alias:["es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"]},{id:"fr",text:"Français",alias:["fr-BE","fr-CA","fr-CH","fr-LU"]},{id:"ja",text:"日本語",alias:["ja-JP"]},{id:"ko",text:"한국어",alias:["ko-KR"]}],Oe={en_US:zt,zh_TW:Gt,zh_CN:Nt,de:Ot,fr:Mt,ja:Bt,ko:Dt,ru:Lt,zh_DZ:jt};var st;let Fe=Oe[(st=Ie==null?void 0:Ie.lang)==null?void 0:st.replace("-","_")];function qt(){if(Fe)return Fe;const t=navigator.language;let e="en-US";for(const r of Ut){if(t===r.id){e=r.id;break}r.alias.forEach(n=>{n===t&&(e=r.id)})}return e=e.replace("-","_"),Fe=Oe[e],Oe[e]}var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ji(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){if(this instanceof n){var i=[null];i.push.apply(i,arguments);var a=Function.bind.apply(e,i);return new a}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}),r}function oe(t,e){if(t.length!==e)throw new Error("array.length != "+e);return t}function he(t,e=!1){const r=document.createElement("canvas"),n=r.getContext("2d",{willReadFrequently:e});return r.width=t.width,r.height=t.height,n.drawImage(t,0,0),r}async function Gi(t){const e=await we(t);return he(e)}async function we(t){return new Promise((e,r)=>{const n=new Image;n.onload=()=>e(n),n.onerror=i=>r(i),n.src=URL.createObjectURL(t)})}function ot(t="#ffffff00"){if(typeof t=="string")return t.startsWith("#")?t:t.length<<2?"#"+t:t;if(t.length&&t.length>=3&&t.length<=4){const[e,r,n,i=1]=t;return`rgba(${e}, ${r}, ${n}, ${i})`}throw new Error("cannot load color "+t)}function Ui(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ie=(t=>(t.DEFAULT="DEFAULT",t.CENTER="CENTER",t))(ie||{});class lt{static from(){throw new Error}}const Xt=document.createElement("canvas"),W=Xt.getContext("2d");W.textBaseline="bottom";W.textAlign="left";var Ht=(t=>(t.LEFT="LEFT",t.RIGHT="RIGHT",t.CENTER="CENTER",t))(Ht||{}),$t=(t=>(t.NONE="NONE",t.BREAK="BREAK",t.ZOOM="ZOOM",t))($t||{}),Zt=(t=>(t.PLAIN="PLAIN",t.BOLD="BOLD",t.ITALIC="ITALIC",t))(Zt||{});const $e={text:"default text",color:"#191919",pos:[50,50],angle:0,origin:ie.DEFAULT,size:16,font:"arial",style:"PLAIN",wrap:"NONE",align:"LEFT",position:["LEFT","TOP"],strokeColor:"#ffffff",strokeSize:0},ee=class extends lt{constructor(r=$e){var n,i;super();v(this,"template");v(this,"fontStyle");v(this,"pixelSize");v(this,"defaultPixelSize");v(this,"width");v(this,"height");v(this,"backgroundSize");v(this,"drawOptions");v(this,"onChangeCallback");v(this,"disabled",!1);this.template={...$e,...r},this.defaultPixelSize=r.size*ee.dpiScale,this.pixelSize=this.defaultPixelSize,this.template.color=ot(this.template.color),this.style=this.template.style,this.template.font=((i=(n=this.template)==null?void 0:n.font)==null?void 0:i.replace(" ","-"))||ee.DEFAULT_FONT_FAMILY,this.template.text=this.template.text.replace(ee.TEXT_VAR_REGEX,(a,s)=>s),this.setDrawOptions()}set size(r){this.pixelSize=r*ee.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:r,wrap:n}=this.template;W.font=`${this.fontStyle} ${this.pixelSize}px ${r.replace(" ","-")}`,this.width=0,this.height=0;const i=this.template.text.split(`
`),a=[];let s=0;switch(n){case"NONE":{for(const o of i){const[l,c,d,u]=this.getPosition(W.measureText(o),s++);this.width=Math.max(this.width,d),this.height=u,a.push([o,l,c])}break}case"BREAK":{const o=this.template.pos[2]||ee.DEFAULT_MAX_WIDTH;let l,c;for(let d of i)if(l=W.measureText(d),c=l.width,c>o){let u,f,h;for(;c>o;){for(u=0,f=0,h="";f<o;)u++,h=d.substr(0,u),f=W.measureText(d.substr(0,u)).width;u--,h=h.substr(0,u);const p=u;if(d.substr(u,1)!=" "){for(;d.substr(u,1)!=" "&&u!=0;)u--;u==0&&(u=p),h=d.substr(0,u)}d=d.substr(u);const[m,w,I,R]=this.getPosition(W.measureText(h),s++);this.width=Math.max(this.width,I),this.height=R,c=I,a.push([h,m,w])}}else{const[u,f,h,p]=this.getPosition(l,s++);this.width=Math.max(this.width,h),this.height=p,a.push([d,u,f])}break}case"ZOOM":{const o=this.template.pos[2]||ee.DEFAULT_MAX_WIDTH;W.font=`${this.fontStyle} ${this.defaultPixelSize}px ${r}`;let l=Math.max(...i.map(u=>W.measureText(u).width));const d=o/(l||1)*this.defaultPixelSize;this.pixelSize=d,W.font=`${this.fontStyle} ${d}px ${r}`;for(const u of i){const[f,h,p,m]=this.getPosition(W.measureText(u),s++);this.width=Math.max(this.width,p),this.height=m,a.push([u,f,h])}break}}return this.drawOptions=a,a}getPosition(r,n){const[i,a]=this.template.pos,s=r.width,o=r.actualBoundingBoxAscent+r.actualBoundingBoxDescent,l=o*n,c=o*(n+1);switch(this.template.align){case"LEFT":return[i,a+l,s,c];case"RIGHT":return[i-s,a+l,s,c];case"CENTER":return[i-s/2,a+l,s,c]}}get hidden(){return this.disabled}set hidden(r){this.disabled=r,this.onChangeCallback&&this.onChangeCallback(this)}get size(){return this.template.size}set style(r){this.fontStyle=r==="PLAIN"?"normal":r.toLowerCase(),this.template.style=r}get style(){return this.template.style}rotateCtx(r,n){let[i,a,s]=n;switch(r.save(),this.template.origin){case ie.DEFAULT:r.translate(a,s),r.rotate(this.template.angle*Math.PI/180),r.translate(-a,-s);break;case ie.CENTER:r.translate(a+this.width/2,s+this.height/2),r.rotate(this.template.angle*Math.PI/180),r.translate(-a-this.width/2,-s-this.height/2);break}}draw(r){if(this.disabled)return;let{angle:n,color:i,align:a,font:s,strokeColor:o,strokeSize:l}=this.template;r.font=`${this.fontStyle} ${this.pixelSize}px ${s}`,r.fillStyle=i,r.textBaseline=a==="CENTER"?"middle":"bottom";for(let c of this.drawOptions)n&&this.rotateCtx(r,c),r.fillText(...c),n&&r.restore();if(o&&l){r.strokeStyle=o,r.lineWidth=l;for(let c of this.drawOptions)n&&this.rotateCtx(r,c),r.strokeText(...c),n&&r.restore()}}get settingObject(){const r=this;return new Proxy({get x(){return r.template.pos[0]},set x(n){r.template.pos[0]=n},get y(){return r.template.pos[1]},set y(n){r.template.pos[1]=n},text:r.template.text,color:r.template.color,get size(){return r.template.wrap==="ZOOM"?void 0:r.pixelSize},set size(n){r.pixelSize=n},font:r.template.font,set fontStyle(n){r.fontStyle=n},get fontStyle(){return r.fontStyle},strokeSize:r.template.strokeSize,strokeColor:r.template.strokeColor,get hidden(){return r.disabled},set hidden(n){r.hidden=n},_delete:()=>r.hidden=!0},{set:(n,i,a)=>(n[i]=a,r.template[i]=a,r.disabled||(this.setDrawOptions(),r.onChangeCallback&&r.onChangeCallback(this)),!0)})}get settingAttributes(){const r={type:"range",min:0,step:1};return{x:{...r,max:this.backgroundSize?this.backgroundSize[0]:1e3},y:{...r,max:this.backgroundSize?this.backgroundSize[1]:1e3},size:{...r,max:256},fontStyle:{type:"select",options:["normal","bold","italic","bold italic"]},strokeSize:{...r,max:16},font:{type:"font"}}}set onchange(r){this.onChangeCallback=r}};let J=ee;v(J,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),v(J,"DEFAULT_MAX_WIDTH",300),v(J,"DEFAULT_FONT_FAMILY","Arial"),v(J,"dpiScale",(window.devicePixelRatio||1)*96/72);class De{constructor(e){v(this,"arr");v(this,"cacheCtx");v(this,"topAvatars",[]);v(this,"bottomAvatars",[]);v(this,"sizeMap",Object.create(null));v(this,"needUpdate",!1);v(this,"cacheCount",0);if(this.arr=e,!(e!=null&&e.length))return;let r=0;for(const n of e)n.onchange=()=>this.needUpdate=!0,this.sizeMap[`text${r}Width`]=n.width,this.sizeMap[`text${r}Height`]=n.height,r++}draw(e){for(const r of this.arr)r.draw(e)}setCacheArea(e,r){for(const i of this.arr)i.backgroundSize=[e,r];const n=document.createElement("canvas");n.width=e,n.height=r,this.cacheCtx=n.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache(),this.needUpdate=!1,this.cacheCount++}get cacheCanvas(){return this.needUpdate&&this.updateCache(),this.cacheCtx.canvas}addTextModel(){const e=new J;return this.arr.push(e),this.needUpdate=!0,e.onchange=()=>this.needUpdate=!0,e.backgroundSize=[this.cacheCtx.canvas.width,this.cacheCtx.canvas.height],e}get texts(){return this.arr}static createFrom(e){return new De(e.map(r=>new J(r)))}}function Ze(t,e,r=!1){const n=document.createElement("canvas"),i=n.getContext("2d"),[a,s,o,l]=e.length===2?[0,0,e[0],e[1]]:e;let c=r?(o-a)/100*t.width:o-a,d=r?(l-s)/100*t.height:l-s;return n.width=r?c/100*t.width:c,n.height=r?d/100*t.height:d,i.drawImage(t,a,s,c,d,0,0,c,d),n}function Yt(t){const e=document.createElement("canvas"),r=e.getContext("2d");return e.width=t.width,e.height=t.height,r.translate(0,t.height),r.scale(1,-1),r.drawImage(t,0,0),e}function Vt(t){const e=document.createElement("canvas"),r=e.getContext("2d");e.width=t.width,e.height=t.height,r.drawImage(t,0,0);const n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a+=4){const s=i[a],o=i[a+1],l=i[a+2],c=(s+o+l)/3;i[a]=c,i[a+1]=c,i[a+2]=c}return r.putImageData(n,0,0),e}let Me={};function ve(t){Me=Object.assign(Me,t)}function b(t){return Me[t]}function Qt(t=!1){return t?`
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
  }`}function Kt(t=!1){return t?`
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
  }`}class k{static getDefaultShader(){var e=b("gl");return e.defaultShader=e.defaultShader||new k,e.defaultShader}constructor(e,r,n=!1){var i=b("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=i.createProgram(),e=e||Qt(n),r=r||Kt(n),r="precision highp float;"+r,n&&(e=`#version 300 es
`+e,r=`#version 300 es
`+r),i.attachShader(this.program,Ye(i.VERTEX_SHADER,e)),i.attachShader(this.program,Ye(i.FRAGMENT_SHADER,r)),i.linkProgram(this.program),!i.getProgramParameter(this.program,i.LINK_STATUS))throw"link error: "+i.getProgramInfoLog(this.program)}destroy(){var e=b("gl");e.deleteProgram(this.program),this.program=null}uniforms(e){var r=b("gl");r.useProgram(this.program);for(var n in e)if(e.hasOwnProperty(n)){var i=r.getUniformLocation(this.program,n);if(i!==null){var a=e[n];if(Jt(a))switch(a.length){case 1:r.uniform1fv(i,new Float32Array(a));break;case 2:r.uniform2fv(i,new Float32Array(a));break;case 3:r.uniform3fv(i,new Float32Array(a));break;case 4:r.uniform4fv(i,new Float32Array(a));break;case 9:r.uniformMatrix3fv(i,!1,new Float32Array(a));break;case 16:r.uniformMatrix4fv(i,!1,new Float32Array(a));break;default:throw`dont't know how to load uniform "`+n+'" of length '+a.length}else if(er(a))r.uniform1f(i,a);else throw'attempted to set uniform "'+n+'" to invalid value '+(a||"undefined").toString()}}return this}textures(e){var r=b("gl");r.useProgram(this.program);for(var n in e)e.hasOwnProperty(n)&&r.uniform1i(r.getUniformLocation(this.program,n),e[n]);return this}drawRect(e,r,n,i){var a=b("gl"),s=a.getParameter(a.VIEWPORT);r=r!==void 0?(r-s[1])/s[3]:0,e=e!==void 0?(e-s[0])/s[2]:0,n=n!==void 0?(n-s[0])/s[2]:1,i=i!==void 0?(i-s[1])/s[3]:1,a.vertexBuffer==null&&(a.vertexBuffer=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([e,r,e,i,n,r,n,i]),a.STATIC_DRAW),a.texCoordBuffer==null&&(a.texCoordBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),a.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=a.getAttribLocation(this.program,"vertex"),a.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=a.getAttribLocation(this.program,"_texCoord"),a.enableVertexAttribArray(this.texCoordAttribute)),a.useProgram(this.program),a.bindBuffer(a.ARRAY_BUFFER,a.vertexBuffer),a.vertexAttribPointer(this.vertexAttribute,2,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,a.texCoordBuffer),a.vertexAttribPointer(this.texCoordAttribute,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLE_STRIP,0,4)}}function Jt(t){return Object.prototype.toString.call(t)==="[object Array]"}function er(t){return Object.prototype.toString.call(t)==="[object Number]"}function Ye(t,e){var r=b("gl"),n=r.createShader(t);if(r.shaderSource(n,e),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw"compile error: "+r.getShaderInfoLog(n);return n}var $=null;class te{static fromElement(e){var r=b("gl"),n=new te(0,0,r.RGBA,r.UNSIGNED_BYTE);return n.loadContentsOf(e),n}constructor(e,r,n,i){var a=b("gl");this.gl=a,this.id=a.createTexture(),this.width=e,this.height=r,this.format=n,this.type=i,a.bindTexture(a.TEXTURE_2D,this.id),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),e&&r&&a.texImage2D(a.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,null)}loadContentsOf(e){var r=b("gl");this.width=e.width||e.videoWidth,this.height=e.height||e.videoHeight,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,this.format,this.format,this.type,e)}initFromBytes(e,r,n){var i=b("gl");this.width=e,this.height=r,this.format=i.RGBA,this.type=i.UNSIGNED_BYTE,i.bindTexture(i.TEXTURE_2D,this.id),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,e,r,0,i.RGBA,this.type,new Uint8Array(n))}destroy(){var e=b("gl");e.deleteTexture(this.id),this.id=null}use(e){var r=b("gl");r.activeTexture(r.TEXTURE0+(e||0)),r.bindTexture(r.TEXTURE_2D,this.id)}unuse(e){var r=b("gl");r.activeTexture(r.TEXTURE0+(e||0)),r.bindTexture(r.TEXTURE_2D,null)}ensureFormat(e,r,n,i){if(arguments.length==1){var a=arguments[0];e=a.width,r=a.height,n=a.format,i=a.type}if(e!=this.width||r!=this.height||n!=this.format||i!=this.type){var s=b("gl");this.width=e,this.height=r,this.format=n,this.type=i,s.bindTexture(s.TEXTURE_2D,this.id),s.texImage2D(s.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,null)}}drawTo(e){var r=b("gl");if(r.framebuffer=r.framebuffer||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,r.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.checkFramebufferStatus(r.FRAMEBUFFER)!==r.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");r.viewport(0,0,this.width,this.height),e(),r.bindFramebuffer(r.FRAMEBUFFER,null)}fillUsingCanvas(e){e(Ve(this));var r=b("gl");return this.format=r.RGBA,this.type=r.UNSIGNED_BYTE,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,$),this}toImage(e){this.use(),k.getDefaultShader().drawRect();var r=b("gl"),n=this.width*this.height*4,i=new Uint8Array(n),a=Ve(this),s=a.createImageData(this.width,this.height);r.readPixels(0,0,this.width,this.height,r.RGBA,r.UNSIGNED_BYTE,i);for(var o=0;o<n;o++)s.data[o]=i[o];a.putImageData(s,0,0),e.src=$.toDataURL()}swapWith(e){var r;r=e.id,e.id=this.id,this.id=r,r=e.width,e.width=this.width,this.width=r,r=e.height,e.height=this.height,this.height=r,r=e.format,e.format=this.format,this.format=r}}function Ve(t){$==null&&($=document.createElement("canvas")),$.width=t.width,$.height=t.height;var e=$.getContext("2d");return e.clearRect(0,0,$.width,$.height),e}class tr{constructor(e){var r=e.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],e.sort(function(l,c){return l[0]-c[0]});for(var n=0;n<r;n++)this.xa.push(e[n][0]),this.ya.push(e[n][1]);this.u[0]=0,this.y2[0]=0;for(var n=1;n<r-1;++n){var i=this.xa[n+1]-this.xa[n-1],a=(this.xa[n]-this.xa[n-1])/i,s=a*this.y2[n-1]+2;this.y2[n]=(a-1)/s;var o=(this.ya[n+1]-this.ya[n])/(this.xa[n+1]-this.xa[n])-(this.ya[n]-this.ya[n-1])/(this.xa[n]-this.xa[n-1]);this.u[n]=(6*o/i-a*this.u[n-1])/s}this.y2[r-1]=0;for(var n=r-2;n>=0;--n)this.y2[n]=this.y2[n]*this.y2[n+1]+this.u[n]}interpolate(e){for(var r=this.ya.length,n=0,i=r-1;i-n>1;){var a=i+n>>1;this.xa[a]>e?i=a:n=a}var s=this.xa[i]-this.xa[n],o=(this.xa[i]-e)/s,l=(e-this.xa[n])/s;return o*this.ya[n]+l*this.ya[i]+((o*o*o-o)*this.y2[n]+(l*l*l-l)*this.y2[i])*(s*s)/6}}function S(t,e,r,n){(r||this._.texture).use(),this._.spareTexture.drawTo(function(){t.uniforms(e).drawRect()}),this._.spareTexture.swapWith(n||this._.texture)}function q(t,e,r){return Math.max(t,Math.min(e,r))}function Re(t){for(var e=new tr(t),r=[],n=0;n<256;n++)r.push(q(0,Math.floor(e.interpolate(n/255)*256),255));return r}function rr(t,e){var r=b("gl");return r.brightnessContrast=r.brightnessContrast||new k(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),S.call(this,r.brightnessContrast,{brightness:q(-1,t,1),contrast:q(-1,e,1)}),this}function nr(t,e,r){var n=b("gl");t=Re(t),arguments.length==1?e=r=t:(e=Re(e),r=Re(r));for(var i=[],a=0;a<256;a++)i.splice(i.length,0,t[a],e[a],r[a],255);return this._.extraTexture.initFromBytes(256,1,i),this._.extraTexture.use(1),n.curves=n.curves||new k(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),n.curves.textures({map:1}),S.call(this,n.curves,{}),this}function ir(t){var e=b("gl");e.denoise=e.denoise||new k(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var r=0;r<2;r++)S.call(this,e.denoise,{exponent:Math.max(0,t),texSize:[this.width,this.height]});return this}function ar(t,e){var r=b("gl");return r.hueSaturation=r.hueSaturation||new k(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),S.call(this,r.hueSaturation,{hue:q(-1,t,1),saturation:q(-1,e,1)}),this}function sr(t){var e=b("gl");return e.noise=e.noise||new k(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),S.call(this,e.noise,{amount:q(0,t,1)}),this}function or(t){var e=b("gl");return e.sepia=e.sepia||new k(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),S.call(this,e.sepia,{amount:q(0,t,1)}),this}function lr(t,e){var r=b("gl");return r.unsharpMask=r.unsharpMask||new k(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){k.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(t),r.unsharpMask.textures({originalTexture:1}),S.call(this,r.unsharpMask,{strength:e}),this._.extraTexture.unuse(1),this}function hr(t){var e=b("gl");return e.vibrance=e.vibrance||new k(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),S.call(this,e.vibrance,{amount:q(-1,t,1)}),this}function cr(t,e){var r=b("gl");return r.vignette=r.vignette||new k(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),S.call(this,r.vignette,{size:q(0,t,1),amount:q(0,e,1)}),this}function Le(t,e){return new k(null,t+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+e+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}const ce="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";function ur(t,e,r){var n=b("gl");n.lensBlurPrePass=n.lensBlurPrePass||new k(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var i="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+ce+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";n.lensBlur0=n.lensBlur0||new k(null,i+"    void main() {      gl_FragColor = sample(delta0);    }  "),n.lensBlur1=n.lensBlur1||new k(null,i+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),n.lensBlur2=n.lensBlur2||new k(null,i+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var a=[],s=0;s<3;s++){var o=r+s*Math.PI*2/3;a.push([t*Math.sin(o)/this.width,t*Math.cos(o)/this.height])}var l=Math.pow(10,q(-1,e,1));return S.call(this,n.lensBlurPrePass,{power:l}),this._.extraTexture.ensureFormat(this._.texture),S.call(this,n.lensBlur0,{delta0:a[0]},this._.texture,this._.extraTexture),S.call(this,n.lensBlur1,{delta0:a[1],delta1:a[2]},this._.extraTexture,this._.extraTexture),S.call(this,n.lensBlur0,{delta0:a[1]}),this._.extraTexture.use(1),S.call(this,n.lensBlur2,{power:1/l,delta0:a[2]}),this}function dr(t,e,r,n,i,a){var s=b("gl");s.tiltShift=s.tiltShift||new k(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+ce+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var o=r-t,l=n-e,c=Math.sqrt(o*o+l*l);return S.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[t,e],end:[r,n],delta:[o/c,l/c],texSize:[this.width,this.height]}),S.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[t,e],end:[r,n],delta:[-l/c,o/c],texSize:[this.width,this.height]}),this}function fr(t){var e=b("gl");return e.triangleBlur=e.triangleBlur||new k(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+ce+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),S.call(this,e.triangleBlur,{delta:[t/this.width,0]}),S.call(this,e.triangleBlur,{delta:[0,t/this.height]}),this}function pr(t,e,r){var n=b("gl");return n.zoomBlur=n.zoomBlur||new k(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+ce+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),S.call(this,n.zoomBlur,{center:[t,e],strength:r,texSize:[this.width,this.height]}),this}function gr(t,e,r,n){var i=b("gl");return i.colorHalftone=i.colorHalftone||new k(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),S.call(this,i.colorHalftone,{center:[t,e],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this}function mr(t,e,r,n){var i=b("gl");return i.dotScreen=i.dotScreen||new k(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),S.call(this,i.dotScreen,{center:[t,e],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this}function vr(t){var e=b("gl");return e.edgeWork1=e.edgeWork1||new k(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+ce+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),e.edgeWork2=e.edgeWork2||new k(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+ce+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),S.call(this,e.edgeWork1,{delta:[t/this.width,0]}),S.call(this,e.edgeWork2,{delta:[0,t/this.height]}),this}function xr(t,e,r){var n=b("gl");return n.hexagonalPixelate=n.hexagonalPixelate||new k(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),S.call(this,n.hexagonalPixelate,{center:[t,e],scale:r,texSize:[this.width,this.height]}),this}function yr(t){var e=b("gl");return e.ink=e.ink||new k(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),S.call(this,e.ink,{strength:t*t*t*t*t,texSize:[this.width,this.height]}),this}function wr(t,e,r,n){var i=b("gl");return i.bulgePinch=i.bulgePinch||Le("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),S.call(this,i.bulgePinch,{radius:r,strength:q(-1,n,1),center:[t,e],texSize:[this.width,this.height]}),this}function Qe(t,e,r,n,i,a,s,o){var l=r-i,c=n-a,d=s-i,u=o-a,f=t-r+i-s,h=e-n+a-o,p=l*u-d*c,m=(f*u-d*h)/p,w=(l*h-f*c)/p;return[r-t+m*r,n-e+m*n,m,s-t+w*s,o-e+w*o,w,t,e,1]}function ht(t){var e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],s=t[5],o=t[6],l=t[7],c=t[8],d=e*a*c-e*s*l-r*i*c+r*s*o+n*i*l-n*a*o;return[(a*c-s*l)/d,(n*l-r*c)/d,(r*s-n*a)/d,(s*o-i*c)/d,(e*c-n*o)/d,(n*i-e*s)/d,(i*l-a*o)/d,(r*o-e*l)/d,(e*a-r*i)/d]}function br(t,e){return[t[0]*e[0]+t[1]*e[3]+t[2]*e[6],t[0]*e[1]+t[1]*e[4]+t[2]*e[7],t[0]*e[2]+t[1]*e[5]+t[2]*e[8],t[3]*e[0]+t[4]*e[3]+t[5]*e[6],t[3]*e[1]+t[4]*e[4]+t[5]*e[7],t[3]*e[2]+t[4]*e[5]+t[5]*e[8],t[6]*e[0]+t[7]*e[3]+t[8]*e[6],t[6]*e[1]+t[7]*e[4]+t[8]*e[7],t[6]*e[2]+t[7]*e[5]+t[8]*e[8]]}function Er(t,e,r){var n=b("gl");if(n.matrixWarp=n.matrixWarp||Le("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),t=Array.prototype.concat.apply([],t),t.length==4)t=[t[0],t[1],0,t[2],t[3],0,0,0,1];else if(t.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return S.call(this,n.matrixWarp,{matrix:e?ht(t):t,texSize:[this.width,this.height],useTextureSpace:r|0}),this}function Cr(t,e){var r=Qe.apply(null,e),n=Qe.apply(null,t),i=br(ht(r),n);return this.matrixWarp(i)}function Tr(t,e,r,n){var i=b("gl");return i.swirl=i.swirl||Le("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),S.call(this,i.swirl,{radius:r,center:[t,e],angle:n,texSize:[this.width,this.height]}),this}function Ar(t=32,e=1,r=0,n=20,i=1,a=1){let s=b("gl");return s.swim=s.swim||new k(null,"    const float PI = 3.14159265358979323846;    uniform float scale;    uniform float stretch;    uniform float angle;    uniform float amount;    uniform float turbulence;    uniform float time;        uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;        float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}    float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}    float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}        float perlin(vec2 p, float dim, float time) {        vec2 pos = floor(p * dim);        vec2 posx = pos + vec2(1.0, 0.0);        vec2 posy = pos + vec2(0.0, 1.0);        vec2 posxy = pos + vec2(1.0);                float c = rand(pos, dim, time);        float cx = rand(posx, dim, time);        float cy = rand(posy, dim, time);        float cxy = rand(posxy, dim, time);                vec2 d = fract(p * dim);        d = -0.5 * cos(d * PI) + 0.5;                float ccx = mix(c, cx, d.x);        float cycxy = mix(cy, cxy, d.x);        float center = mix(ccx, cycxy, d.y);                return center * 2.0 - 1.0;    }        void main(){        vec2 coord = texCoord * texSize;        float c = cos(angle);        float s = sin(angle);        float nx = c * coord.x + s * coord.y;        float ny = -s * coord.x + c * coord.y;        nx /= scale;        ny /= scale * stretch;        coord.x += amount * perlin(vec2(nx + 0.5, ny), turbulence, time);        coord.y += amount * perlin(vec2(nx, ny + 0.5), turbulence, time);        gl_FragColor = texture2D(texture, coord / texSize);        vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);        if (coord != clampedCoord) {          gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));        }   }  "),S.call(this,s.swim,{scale:t,stretch:e,angle:r,amount:n,turbulence:i,time:a,texSize:[this.width,this.height]}),this}const Ke=64;function kr(t=4,e=8,r=12){let n=b("gl");return n.oil=n.oil||new k(null,`
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
    `,!0),S.call(this,n.oil,{skip:t,levels:e,range:r,texSize:[this.width,this.height]}),this}function ct(t){return{_:t,loadContentsOf:function(e){ve({gl:this._.gl}),this._.loadContentsOf(e)},destroy:function(){ve({gl:this._.gl}),this._.destroy()}}}function _r(t){return ct(te.fromElement(t))}function Sr(t,e){var r=b("gl"),n=r.UNSIGNED_BYTE;if(r.getExtension("OES_texture_float")&&r.getExtension("OES_texture_float_linear")){var i=new te(100,100,r.RGBA,r.FLOAT);try{i.drawTo(function(){n=r.FLOAT})}catch{}i.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=t,this.height=e,this._.texture=new te(t,e,r.RGBA,n),this._.spareTexture=new te(t,e,r.RGBA,n),this._.extraTexture=this._.extraTexture||new te(0,0,r.RGBA,n),this._.flippedShader=this._.flippedShader||new k(null,"    uniform sampler2D texture;    varying vec2 texCoord;    void main() {      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));    }  "),this._.isInitialized=!0}function Ir(t,e,r){return(!this._.isInitialized||t._.width!=this.width||t._.height!=this.height)&&Sr.call(this,e||t._.width,r||t._.height),t._.use(),this._.texture.drawTo(function(){k.getDefaultShader().drawRect()}),this}function Fr(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function Rr(t){return t.parentNode.insertBefore(this,t),t.parentNode.removeChild(t),this}function Pr(){var t=b("gl"),e=new te(this._.texture.width,this._.texture.height,t.RGBA,t.UNSIGNED_BYTE);return this._.texture.use(),e.drawTo(function(){k.getDefaultShader().drawRect()}),ct(e)}function Or(){var t=b("gl"),e=this._.texture.width,r=this._.texture.height,n=new Uint8Array(e*r*4);return this._.texture.drawTo(function(){t.readPixels(0,0,e,r,t.RGBA,t.UNSIGNED_BYTE,n)}),n}function _(t){return function(){return ve({gl:this._.gl}),t.apply(this,arguments)}}function Mr(t=document.createElement("canvas")){try{ve({gl:t.getContext("webgl2")||t.getContext("webgl")||t.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{ve({gl:null})}var e=b("gl");if(!e)throw"This browser does not support WebGL";return t._={gl:e,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},t.texture=_(_r),t.draw=_(Ir),t.update=_(Fr),t.replace=_(Rr),t.contents=_(Pr),t.getPixelArray=_(Or),t.brightnessContrast=_(rr),t.hexagonalPixelate=_(xr),t.hueSaturation=_(ar),t.colorHalftone=_(gr),t.triangleBlur=_(fr),t.unsharpMask=_(lr),t.perspective=_(Cr),t.matrixWarp=_(Er),t.bulgePinch=_(wr),t.tiltShift=_(dr),t.dotScreen=_(mr),t.edgeWork=_(vr),t.lensBlur=_(ur),t.zoomBlur=_(pr),t.noise=_(sr),t.denoise=_(ir),t.curves=_(nr),t.swirl=_(Tr),t.ink=_(yr),t.vignette=_(cr),t.vibrance=_(hr),t.sepia=_(or),t.swim=_(Ar),t.oil=_(kr),t}class ut{constructor(e=!0){v(this,"fxCanvas",Mr());v(this,"textureMap");v(this,"cache");this.cache=e,e&&(this.textureMap=window._petpetTextureCache??(window._petpetTextureCache=new WeakMap))}getTexture(e){const r=this.cache&&this.textureMap.has(e)?this.textureMap.get(e):this.fxCanvas.texture(e);return this.cache&&!this.textureMap.has(e)&&this.textureMap.set(e,r),r}destroy(){this.cache}}class Br extends ut{constructor(e=!0){super(e)}draw(e,r,n){const i=this.getTexture(r);let[a,s]=n[0],[o,l]=n[1],[c,d]=n[2],[u,f]=n[3];const[h,p]=n[4];a+=h,o+=h,c+=h,u+=h,s+=p,l+=p,d+=p,f+=p;const m=e.canvas;this.fxCanvas.draw(i,m.width,m.height).perspective([0,0,m.width,0,0,m.height,m.width,m.height],[a,s,u,f,o,l,c,d]).update(),e.drawImage(this.fxCanvas,0,0),this.cache||i.destroy()}}function Dr(t){const e=document.createElement("canvas"),r=e.getContext("2d");return e.width=t.width,e.height=t.height,r.translate(t.width,0),r.scale(-1,1),r.drawImage(t,0,0),e}function Lr(t){const e=document.createElement("canvas"),r=e.getContext("2d"),n=t.width,i=t.height;e.width=n,e.height=i,r.drawImage(t,0,0);const a=r.getImageData(0,0,n,i),s=a.data;for(let o=0;o<s.length;o+=4){const l=s[o],c=s[o+1],d=s[o+2];l+c+d>383?(s[o]=255,s[o+1]=255,s[o+2]=255):(s[o]=0,s[o+1]=0,s[o+2]=0)}return r.putImageData(a,0,0),e}function zr(t){const e=document.createElement("canvas"),r=e.getContext("2d"),n=Math.min(t.width,t.height)/2;return e.width=n*2,e.height=n*2,r.save(),r.beginPath(),r.arc(n,n,n,0,2*Math.PI),r.closePath(),r.clip(),r.drawImage(t,n-t.width/2,n-t.height/2),r.restore(),e}var U="INUMBER",pe="IOP1",ge="IOP2",me="IOP3",Y="IVAR",ae="IVARNAME",ue="IFUNCALL",be="IFUNDEF",G="IEXPR",ze="IEXPREVAL",se="IMEMBER",Ee="IENDSTATEMENT",de="IARRAY";function A(t,e){this.type=t,this.value=e??0}A.prototype.toString=function(){switch(this.type){case U:case pe:case ge:case me:case Y:case ae:case Ee:return this.value;case ue:return"CALL "+this.value;case be:return"DEF "+this.value;case de:return"ARRAY "+this.value;case se:return"."+this.value;default:return"Invalid Instruction"}};function Ce(t){return new A(pe,t)}function K(t){return new A(ge,t)}function dt(t){return new A(me,t)}function Be(t,e,r,n,i){for(var a=[],s=[],o,l,c,d,u=0;u<t.length;u++){var f=t[u],h=f.type;if(h===U||h===ae)Array.isArray(f.value)?a.push.apply(a,Be(f.value.map(function(p){return new A(U,p)}).concat(new A(de,f.value.length)),e,r,n,i)):a.push(f);else if(h===Y&&i.hasOwnProperty(f.value))f=new A(U,i[f.value]),a.push(f);else if(h===ge&&a.length>1)l=a.pop(),o=a.pop(),d=r[f.value],f=new A(U,d(o.value,l.value)),a.push(f);else if(h===me&&a.length>2)c=a.pop(),l=a.pop(),o=a.pop(),f.value==="?"?a.push(o.value?l.value:c.value):(d=n[f.value],f=new A(U,d(o.value,l.value,c.value)),a.push(f));else if(h===pe&&a.length>0)o=a.pop(),d=e[f.value],f=new A(U,d(o.value)),a.push(f);else if(h===G){for(;a.length>0;)s.push(a.shift());s.push(new A(G,Be(f.value,e,r,n,i)))}else if(h===se&&a.length>0)o=a.pop(),a.push(new A(U,o.value[f.value]));else{for(;a.length>0;)s.push(a.shift());s.push(f)}}for(;a.length>0;)s.push(a.shift());return s}function ft(t,e,r){for(var n=[],i=0;i<t.length;i++){var a=t[i],s=a.type;if(s===Y&&a.value===e)for(var o=0;o<r.tokens.length;o++){var l=r.tokens[o],c;l.type===pe?c=Ce(l.value):l.type===ge?c=K(l.value):l.type===me?c=dt(l.value):c=new A(l.type,l.value),n.push(c)}else s===G?n.push(new A(G,ft(a.value,e,r))):n.push(a)}return n}function re(t,e,r){var n=[],i,a,s,o,l,c;if(Ne(t))return H(t,r);for(var d=t.length,u=0;u<d;u++){var f=t[u],h=f.type;if(h===U||h===ae)n.push(f.value);else if(h===ge)a=n.pop(),i=n.pop(),f.value==="and"?n.push(i?!!re(a,e,r):!1):f.value==="or"?n.push(i?!0:!!re(a,e,r)):f.value==="="?(o=e.binaryOps[f.value],n.push(o(i,re(a,e,r),r))):(o=e.binaryOps[f.value],n.push(o(H(i,r),H(a,r))));else if(h===me)s=n.pop(),a=n.pop(),i=n.pop(),f.value==="?"?n.push(re(i?a:s,e,r)):(o=e.ternaryOps[f.value],n.push(o(H(i,r),H(a,r),H(s,r))));else if(h===Y)if(f.value in e.functions)n.push(e.functions[f.value]);else if(f.value in e.unaryOps&&e.parser.isOperatorEnabled(f.value))n.push(e.unaryOps[f.value]);else{var p=r[f.value];if(p!==void 0)n.push(p);else throw new Error("undefined variable: "+f.value)}else if(h===pe)i=n.pop(),o=e.unaryOps[f.value],n.push(o(H(i,r)));else if(h===ue){for(c=f.value,l=[];c-- >0;)l.unshift(H(n.pop(),r));if(o=n.pop(),o.apply&&o.call)n.push(o.apply(void 0,l));else throw new Error(o+" is not a function")}else if(h===be)n.push(function(){for(var m=n.pop(),w=[],I=f.value;I-- >0;)w.unshift(n.pop());var R=n.pop(),M=function(){for(var B=Object.assign({},r),L=0,g=w.length;L<g;L++)B[w[L]]=arguments[L];return re(m,e,B)};return Object.defineProperty(M,"name",{value:R,writable:!1}),r[R]=M,M}());else if(h===G)n.push(Nr(f,e));else if(h===ze)n.push(f);else if(h===se)i=n.pop(),n.push(i[f.value]);else if(h===Ee)n.pop();else if(h===de){for(c=f.value,l=[];c-- >0;)l.unshift(n.pop());n.push(l)}else throw new Error("invalid Expression")}if(n.length>1)throw new Error("invalid Expression (parity)");return n[0]===0?0:H(n[0],r)}function Nr(t,e,r){return Ne(t)?t:{type:ze,value:function(n){return re(t.value,e,n)}}}function Ne(t){return t&&t.type===ze}function H(t,e){return Ne(t)?t.value(e):t}function je(t,e){for(var r=[],n,i,a,s,o,l,c=0;c<t.length;c++){var d=t[c],u=d.type;if(u===U)typeof d.value=="number"&&d.value<0?r.push("("+d.value+")"):Array.isArray(d.value)?r.push("["+d.value.map(Je).join(", ")+"]"):r.push(Je(d.value));else if(u===ge)i=r.pop(),n=r.pop(),s=d.value,e?s==="^"?r.push("Math.pow("+n+", "+i+")"):s==="and"?r.push("(!!"+n+" && !!"+i+")"):s==="or"?r.push("(!!"+n+" || !!"+i+")"):s==="||"?r.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):s==="=="?r.push("("+n+" === "+i+")"):s==="!="?r.push("("+n+" !== "+i+")"):s==="["?r.push(n+"[("+i+") | 0]"):r.push("("+n+" "+s+" "+i+")"):s==="["?r.push(n+"["+i+"]"):r.push("("+n+" "+s+" "+i+")");else if(u===me)if(a=r.pop(),i=r.pop(),n=r.pop(),s=d.value,s==="?")r.push("("+n+" ? "+i+" : "+a+")");else throw new Error("invalid Expression");else if(u===Y||u===ae)r.push(d.value);else if(u===pe)n=r.pop(),s=d.value,s==="-"||s==="+"?r.push("("+s+n+")"):e?s==="not"?r.push("(!"+n+")"):s==="!"?r.push("fac("+n+")"):r.push(s+"("+n+")"):s==="!"?r.push("("+n+"!)"):r.push("("+s+" "+n+")");else if(u===ue){for(l=d.value,o=[];l-- >0;)o.unshift(r.pop());s=r.pop(),r.push(s+"("+o.join(", ")+")")}else if(u===be){for(i=r.pop(),l=d.value,o=[];l-- >0;)o.unshift(r.pop());n=r.pop(),e?r.push("("+n+" = function("+o.join(", ")+") { return "+i+" })"):r.push("("+n+"("+o.join(", ")+") = "+i+")")}else if(u===se)n=r.pop(),r.push(n+"."+d.value);else if(u===de){for(l=d.value,o=[];l-- >0;)o.unshift(r.pop());r.push("["+o.join(", ")+"]")}else if(u===G)r.push("("+je(d.value,e)+")");else if(u!==Ee)throw new Error("invalid Expression")}return r.length>1&&(e?r=[r.join(",")]:r=[r.join(";")]),String(r[0])}function Je(t){return typeof t=="string"?JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):t}function le(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return!0;return!1}function Ge(t,e,r){r=r||{};for(var n=!!r.withMembers,i=null,a=0;a<t.length;a++){var s=t[a];s.type===Y||s.type===ae?!n&&!le(e,s.value)?e.push(s.value):(i!==null&&(le(e,i)||e.push(i)),i=s.value):s.type===se&&n&&i!==null?i+="."+s.value:s.type===G?Ge(s.value,e,r):i!==null&&(le(e,i)||e.push(i),i=null)}i!==null&&!le(e,i)&&e.push(i)}function X(t,e){this.tokens=t,this.parser=e,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.functions=e.functions}X.prototype.simplify=function(t){return t=t||{},new X(Be(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,t),this.parser)};X.prototype.substitute=function(t,e){return e instanceof X||(e=this.parser.parse(String(e))),new X(ft(this.tokens,t,e),this.parser)};X.prototype.evaluate=function(t){return t=t||{},re(this.tokens,this,t)};X.prototype.toString=function(){return je(this.tokens,!1)};X.prototype.symbols=function(t){t=t||{};var e=[];return Ge(this.tokens,e,t),e};X.prototype.variables=function(t){t=t||{};var e=[];Ge(this.tokens,e,t);var r=this.functions;return e.filter(function(n){return!(n in r)})};X.prototype.toJSFunction=function(t,e){var r=this,n=new Function(t,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+je(this.simplify(e).tokens,!0)+"; }");return function(){return n.apply(r,arguments)}};var xe="TEOF",P="TOP",Te="TNUMBER",pt="TSTRING",V="TPAREN",fe="TBRACKET",Ae="TCOMMA",Ue="TNAME",qe="TSEMICOLON";function gt(t,e,r){this.type=t,this.value=e,this.index=r}gt.prototype.toString=function(){return this.type+": "+this.value};function D(t,e){this.pos=0,this.current=null,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.consts=t.consts,this.expression=e,this.savedPosition=0,this.savedCurrent=null,this.options=t.options,this.parser=t}D.prototype.newToken=function(t,e,r){return new gt(t,e,r??this.pos)};D.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};D.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};D.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken(xe,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};D.prototype.isString=function(){var t=!1,e=this.pos,r=this.expression.charAt(e);if(r==="'"||r==='"')for(var n=this.expression.indexOf(r,e+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,this.expression.charAt(n-1)!=="\\"){var i=this.expression.substring(e+1,n);this.current=this.newToken(pt,this.unescape(i),e),t=!0;break}n=this.expression.indexOf(r,n+1)}return t};D.prototype.isParen=function(){var t=this.expression.charAt(this.pos);return t==="("||t===")"?(this.current=this.newToken(V,t),this.pos++,!0):!1};D.prototype.isBracket=function(){var t=this.expression.charAt(this.pos);return(t==="["||t==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(fe,t),this.pos++,!0):!1};D.prototype.isComma=function(){var t=this.expression.charAt(this.pos);return t===","?(this.current=this.newToken(Ae,","),this.pos++,!0):!1};D.prototype.isSemicolon=function(){var t=this.expression.charAt(this.pos);return t===";"?(this.current=this.newToken(qe,";"),this.pos++,!0):!1};D.prototype.isConst=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var r=this.expression.charAt(e);if(r.toUpperCase()===r.toLowerCase()&&(e===this.pos||r!=="_"&&r!=="."&&(r<"0"||r>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(n in this.consts)return this.current=this.newToken(Te,this.consts[n]),this.pos+=n.length,!0}return!1};D.prototype.isNamedOp=function(){for(var t=this.pos,e=t;e<this.expression.length;e++){var r=this.expression.charAt(e);if(r.toUpperCase()===r.toLowerCase()&&(e===this.pos||r!=="_"&&(r<"0"||r>"9")))break}if(e>t){var n=this.expression.substring(t,e);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(P,n),this.pos+=n.length,!0}return!1};D.prototype.isName=function(){for(var t=this.pos,e=t,r=!1;e<this.expression.length;e++){var n=this.expression.charAt(e);if(n.toUpperCase()===n.toLowerCase()){if(e===this.pos&&(n==="$"||n==="_")){n==="_"&&(r=!0);continue}else if(e===this.pos||!r||n!=="_"&&(n<"0"||n>"9"))break}else r=!0}if(r){var i=this.expression.substring(t,e);return this.current=this.newToken(Ue,i),this.pos+=i.length,!0}return!1};D.prototype.isWhitespace=function(){for(var t=!1,e=this.expression.charAt(this.pos);(e===" "||e==="	"||e===`
`||e==="\r")&&(t=!0,this.pos++,!(this.pos>=this.expression.length));)e=this.expression.charAt(this.pos);return t};var jr=/^[0-9a-f]{4}$/i;D.prototype.unescape=function(t){var e=t.indexOf("\\");if(e<0)return t;for(var r=t.substring(0,e);e>=0;){var n=t.charAt(++e);switch(n){case"'":r+="'";break;case'"':r+='"';break;case"\\":r+="\\";break;case"/":r+="/";break;case"b":r+="\b";break;case"f":r+="\f";break;case"n":r+=`
`;break;case"r":r+="\r";break;case"t":r+="	";break;case"u":var i=t.substring(e+1,e+5);jr.test(i)||this.parseError("Illegal escape sequence: \\u"+i),r+=String.fromCharCode(parseInt(i,16)),e+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++e;var a=t.indexOf("\\",e);r+=t.substring(e,a<0?t.length:a),e=a}return r};D.prototype.isComment=function(){var t=this.expression.charAt(this.pos);return t==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};D.prototype.isRadixInteger=function(){var t=this.pos;if(t>=this.expression.length-2||this.expression.charAt(t)!=="0")return!1;++t;var e,r;if(this.expression.charAt(t)==="x")e=16,r=/^[0-9a-f]$/i,++t;else if(this.expression.charAt(t)==="b")e=2,r=/^[01]$/i,++t;else return!1;for(var n=!1,i=t;t<this.expression.length;){var a=this.expression.charAt(t);if(r.test(a))t++,n=!0;else break}return n&&(this.current=this.newToken(Te,parseInt(this.expression.substring(i,t),e)),this.pos=t),n};D.prototype.isNumber=function(){for(var t=!1,e=this.pos,r=e,n=e,i=!1,a=!1,s;e<this.expression.length&&(s=this.expression.charAt(e),s>="0"&&s<="9"||!i&&s===".");)s==="."?i=!0:a=!0,e++,t=a;if(t&&(n=e),s==="e"||s==="E"){e++;for(var o=!0,l=!1;e<this.expression.length;){if(s=this.expression.charAt(e),o&&(s==="+"||s==="-"))o=!1;else if(s>="0"&&s<="9")l=!0,o=!1;else break;e++}l||(e=n)}return t?(this.current=this.newToken(Te,parseFloat(this.expression.substring(r,e))),this.pos=e):this.pos=n,t};D.prototype.isOperator=function(){var t=this.pos,e=this.expression.charAt(this.pos);if(e==="+"||e==="-"||e==="*"||e==="/"||e==="%"||e==="^"||e==="?"||e===":"||e===".")this.current=this.newToken(P,e);else if(e==="∙"||e==="•")this.current=this.newToken(P,"*");else if(e===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,">="),this.pos++):this.current=this.newToken(P,">");else if(e==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"<="),this.pos++):this.current=this.newToken(P,"<");else if(e==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(P,"||"),this.pos++;else return!1;else if(e==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"=="),this.pos++):this.current=this.newToken(P,e);else if(e==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(P,"!="),this.pos++):this.current=this.newToken(P,e);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=t,!1)};D.prototype.isOperatorEnabled=function(t){return this.parser.isOperatorEnabled(t)};D.prototype.getCoordinates=function(){var t=0,e,r=-1;do t++,e=this.pos-r,r=this.expression.indexOf(`
`,r+1);while(r>=0&&r<this.pos);return{line:t,column:e}};D.prototype.parseError=function(t){var e=this.getCoordinates();throw new Error("parse error ["+e.line+":"+e.column+"]: "+t)};function O(t,e,r){this.parser=t,this.tokens=e,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=r.allowMemberAccess!==!1}O.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};O.prototype.tokenMatches=function(t,e){return typeof e>"u"?!0:Array.isArray(e)?le(e,t.value):typeof e=="function"?e(t):t.value===e};O.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};O.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};O.prototype.accept=function(t,e){return this.nextToken.type===t&&this.tokenMatches(this.nextToken,e)?(this.next(),!0):!1};O.prototype.expect=function(t,e){if(!this.accept(t,e)){var r=this.tokens.getCoordinates();throw new Error("parse error ["+r.line+":"+r.column+"]: Expected "+(e||t))}};O.prototype.parseAtom=function(t){var e=this.tokens.unaryOps;function r(i){return i.value in e}if(this.accept(Ue)||this.accept(P,r))t.push(new A(Y,this.current.value));else if(this.accept(Te))t.push(new A(U,this.current.value));else if(this.accept(pt))t.push(new A(U,this.current.value));else if(this.accept(V,"("))this.parseExpression(t),this.expect(V,")");else if(this.accept(fe,"["))if(this.accept(fe,"]"))t.push(new A(de,0));else{var n=this.parseArrayList(t);t.push(new A(de,n))}else throw new Error("unexpected "+this.nextToken)};O.prototype.parseExpression=function(t){var e=[];this.parseUntilEndStatement(t,e)||(this.parseVariableAssignmentExpression(e),!this.parseUntilEndStatement(t,e)&&this.pushExpression(t,e))};O.prototype.pushExpression=function(t,e){for(var r=0,n=e.length;r<n;r++)t.push(e[r])};O.prototype.parseUntilEndStatement=function(t,e){return this.accept(qe)?(this.nextToken&&this.nextToken.type!==xe&&!(this.nextToken.type===V&&this.nextToken.value===")")&&e.push(new A(Ee)),this.nextToken.type!==xe&&this.parseExpression(e),t.push(new A(G,e)),!0):!1};O.prototype.parseArrayList=function(t){for(var e=0;!this.accept(fe,"]");)for(this.parseExpression(t),++e;this.accept(Ae);)this.parseExpression(t),++e;return e};O.prototype.parseVariableAssignmentExpression=function(t){for(this.parseConditionalExpression(t);this.accept(P,"=");){var e=t.pop(),r=[],n=t.length-1;if(e.type===ue){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,a=e.value+1;i<a;i++){var s=n-i;t[s].type===Y&&(t[s]=new A(ae,t[s].value))}this.parseVariableAssignmentExpression(r),t.push(new A(G,r)),t.push(new A(be,e.value));continue}if(e.type!==Y&&e.type!==se)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(r),t.push(new A(ae,e.value)),t.push(new A(G,r)),t.push(K("="))}};O.prototype.parseConditionalExpression=function(t){for(this.parseOrExpression(t);this.accept(P,"?");){var e=[],r=[];this.parseConditionalExpression(e),this.expect(P,":"),this.parseConditionalExpression(r),t.push(new A(G,e)),t.push(new A(G,r)),t.push(dt("?"))}};O.prototype.parseOrExpression=function(t){for(this.parseAndExpression(t);this.accept(P,"or");){var e=[];this.parseAndExpression(e),t.push(new A(G,e)),t.push(K("or"))}};O.prototype.parseAndExpression=function(t){for(this.parseComparison(t);this.accept(P,"and");){var e=[];this.parseComparison(e),t.push(new A(G,e)),t.push(K("and"))}};var Gr=["==","!=","<","<=",">=",">","in"];O.prototype.parseComparison=function(t){for(this.parseAddSub(t);this.accept(P,Gr);){var e=this.current;this.parseAddSub(t),t.push(K(e.value))}};var Ur=["+","-","||"];O.prototype.parseAddSub=function(t){for(this.parseTerm(t);this.accept(P,Ur);){var e=this.current;this.parseTerm(t),t.push(K(e.value))}};var qr=["*","/","%"];O.prototype.parseTerm=function(t){for(this.parseFactor(t);this.accept(P,qr);){var e=this.current;this.parseFactor(t),t.push(K(e.value))}};O.prototype.parseFactor=function(t){var e=this.tokens.unaryOps;function r(i){return i.value in e}if(this.save(),this.accept(P,r)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===V&&this.nextToken.value==="("){this.restore(),this.parseExponential(t);return}else if(this.nextToken.type===qe||this.nextToken.type===Ae||this.nextToken.type===xe||this.nextToken.type===V&&this.nextToken.value===")"){this.restore(),this.parseAtom(t);return}}var n=this.current;this.parseFactor(t),t.push(Ce(n.value))}else this.parseExponential(t)};O.prototype.parseExponential=function(t){for(this.parsePostfixExpression(t);this.accept(P,"^");)this.parseFactor(t),t.push(K("^"))};O.prototype.parsePostfixExpression=function(t){for(this.parseFunctionCall(t);this.accept(P,"!");)t.push(Ce("!"))};O.prototype.parseFunctionCall=function(t){var e=this.tokens.unaryOps;function r(a){return a.value in e}if(this.accept(P,r)){var n=this.current;this.parseAtom(t),t.push(Ce(n.value))}else for(this.parseMemberExpression(t);this.accept(V,"(");)if(this.accept(V,")"))t.push(new A(ue,0));else{var i=this.parseArgumentList(t);t.push(new A(ue,i))}};O.prototype.parseArgumentList=function(t){for(var e=0;!this.accept(V,")");)for(this.parseExpression(t),++e;this.accept(Ae);)this.parseExpression(t),++e;return e};O.prototype.parseMemberExpression=function(t){for(this.parseAtom(t);this.accept(P,".")||this.accept(fe,"[");){var e=this.current;if(e.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(Ue),t.push(new A(se,this.current.value))}else if(e.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(t),this.expect(fe,"]"),t.push(K("["))}else throw new Error("unexpected symbol: "+e.value)}};function Wr(t,e){return Number(t)+Number(e)}function Xr(t,e){return t-e}function Hr(t,e){return t*e}function $r(t,e){return t/e}function Zr(t,e){return t%e}function Yr(t,e){return Array.isArray(t)&&Array.isArray(e)?t.concat(e):""+t+e}function Vr(t,e){return t===e}function Qr(t,e){return t!==e}function Kr(t,e){return t>e}function Jr(t,e){return t<e}function en(t,e){return t>=e}function tn(t,e){return t<=e}function rn(t,e){return!!(t&&e)}function nn(t,e){return!!(t||e)}function an(t,e){return le(e,t)}function sn(t){return(Math.exp(t)-Math.exp(-t))/2}function on(t){return(Math.exp(t)+Math.exp(-t))/2}function ln(t){return t===1/0?1:t===-1/0?-1:(Math.exp(t)-Math.exp(-t))/(Math.exp(t)+Math.exp(-t))}function hn(t){return t===-1/0?t:Math.log(t+Math.sqrt(t*t+1))}function cn(t){return Math.log(t+Math.sqrt(t*t-1))}function un(t){return Math.log((1+t)/(1-t))/2}function et(t){return Math.log(t)*Math.LOG10E}function dn(t){return-t}function fn(t){return!t}function pn(t){return t<0?Math.ceil(t):Math.floor(t)}function gn(t){return Math.random()*(t||1)}function tt(t){return We(t+1)}function mn(t){return isFinite(t)&&t===Math.round(t)}var vn=4.7421875,Pe=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function We(t){var e,r;if(mn(t)){if(t<=0)return isFinite(t)?1/0:NaN;if(t>171)return 1/0;for(var n=t-2,i=t-1;n>1;)i*=n,n--;return i===0&&(i=1),i}if(t<.5)return Math.PI/(Math.sin(Math.PI*t)*We(1-t));if(t>=171.35)return 1/0;if(t>85){var a=t*t,s=a*t,o=s*t,l=o*t;return Math.sqrt(2*Math.PI/t)*Math.pow(t/Math.E,t)*(1+1/(12*t)+1/(288*a)-139/(51840*s)-571/(2488320*o)+163879/(209018880*l)+5246819/(75246796800*l*t))}--t,r=Pe[0];for(var c=1;c<Pe.length;++c)r+=Pe[c]/(t+c);return e=t+vn+.5,Math.sqrt(2*Math.PI)*Math.pow(e,t+.5)*Math.exp(-e)*r}function xn(t){return Array.isArray(t)?t.length:String(t).length}function rt(){for(var t=0,e=0,r=0;r<arguments.length;r++){var n=Math.abs(arguments[r]),i;e<n?(i=e/n,t=t*i*i+1,e=n):n>0?(i=n/e,t+=i*i):t+=n}return e===1/0?1/0:e*Math.sqrt(t)}function nt(t,e,r){return t?e:r}function yn(t,e){return typeof e>"u"||+e==0?Math.round(t):(t=+t,e=-+e,isNaN(t)||!(typeof e=="number"&&e%1===0)?NaN:(t=t.toString().split("e"),t=Math.round(+(t[0]+"e"+(t[1]?+t[1]-e:-e))),t=t.toString().split("e"),+(t[0]+"e"+(t[1]?+t[1]+e:e))))}function wn(t,e,r){return r&&(r[t]=e),e}function bn(t,e){return t[e|0]}function En(t){return arguments.length===1&&Array.isArray(t)?Math.max.apply(Math,t):Math.max.apply(Math,arguments)}function Cn(t){return arguments.length===1&&Array.isArray(t)?Math.min.apply(Math,t):Math.min.apply(Math,arguments)}function Tn(t,e){if(typeof t!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(e))throw new Error("Second argument to map is not an array");return e.map(function(r,n){return t(r,n)})}function An(t,e,r){if(typeof t!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(r))throw new Error("Second argument to fold is not an array");return r.reduce(function(n,i,a){return t(n,i,a)},e)}function kn(t,e){if(typeof t!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(e))throw new Error("Second argument to filter is not an array");return e.filter(function(r,n){return t(r,n)})}function _n(t,e){if(!(Array.isArray(e)||typeof e=="string"))throw new Error("Second argument to indexOf is not a string or array");return e.indexOf(t)}function Sn(t,e){if(!Array.isArray(e))throw new Error("Second argument to join is not an array");return e.join(t)}function In(t){return(t>0)-(t<0)||+t}var it=1/3;function Fn(t){return t<0?-Math.pow(-t,it):Math.pow(t,it)}function Rn(t){return Math.exp(t)-1}function Pn(t){return Math.log(1+t)}function On(t){return Math.log(t)/Math.LN2}function Q(t){this.options=t||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||sn,cosh:Math.cosh||on,tanh:Math.tanh||ln,asinh:Math.asinh||hn,acosh:Math.acosh||cn,atanh:Math.atanh||un,sqrt:Math.sqrt,cbrt:Math.cbrt||Fn,log:Math.log,log2:Math.log2||On,ln:Math.log,lg:Math.log10||et,log10:Math.log10||et,expm1:Math.expm1||Rn,log1p:Math.log1p||Pn,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||pn,"-":dn,"+":Number,exp:Math.exp,not:fn,length:xn,"!":tt,sign:Math.sign||In},this.binaryOps={"+":Wr,"-":Xr,"*":Hr,"/":$r,"%":Zr,"^":Math.pow,"||":Yr,"==":Vr,"!=":Qr,">":Kr,"<":Jr,">=":en,"<=":tn,and:rn,or:nn,in:an,"=":wn,"[":bn},this.ternaryOps={"?":nt},this.functions={random:gn,fac:tt,min:Cn,max:En,hypot:Math.hypot||rt,pyt:Math.hypot||rt,pow:Math.pow,atan2:Math.atan2,if:nt,gamma:We,roundTo:yn,map:Tn,fold:An,filter:kn,indexOf:_n,join:Sn},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}Q.prototype.parse=function(t){var e=[],r=new O(this,new D(this,t),{allowMemberAccess:this.options.allowMemberAccess});return r.parseExpression(e),r.expect(xe,"EOF"),new X(e,this)};Q.prototype.evaluate=function(t,e){return this.parse(t).evaluate(e)};var mt=new Q;Q.parse=function(t){return mt.parse(t)};Q.evaluate=function(t,e){return mt.parse(t).evaluate(e)};var at={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function Mn(t){return at.hasOwnProperty(t)?at[t]:t}Q.prototype.isOperatorEnabled=function(t){var e=Mn(t),r=this.options.operators||{};return!(e in r)||!!r[e]};var ne={},vt={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.loop=Z.conditional=Z.parse=void 0;var Bn=function t(e,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(r))r.forEach(function(s){return t(e,s,n,i)});else if(typeof r=="function")r(e,n,i,t);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},t(e,r[a],n,i[a])):i[a]=r[a](e,n,i,t)}return n};Z.parse=Bn;var Dn=function(e,r){return function(n,i,a,s){r(n,i,a)&&s(n,e,i,a)}};Z.conditional=Dn;var Ln=function(e,r){return function(n,i,a,s){for(var o=[],l=n.pos;r(n,i,a);){var c={};if(s(n,e,i,c),n.pos===l)break;l=n.pos,o.push(c)}return o}};Z.loop=Ln;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.readBits=N.readArray=N.readUnsigned=N.readString=N.peekBytes=N.readBytes=N.peekByte=N.readByte=N.buildStream=void 0;var zn=function(e){return{data:e,pos:0}};N.buildStream=zn;var xt=function(){return function(e){return e.data[e.pos++]}};N.readByte=xt;var Nn=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+e]}};N.peekByte=Nn;var ke=function(e){return function(r){return r.data.subarray(r.pos,r.pos+=e)}};N.readBytes=ke;var jn=function(e){return function(r){return r.data.subarray(r.pos,r.pos+e)}};N.peekBytes=jn;var Gn=function(e){return function(r){return Array.from(ke(e)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};N.readString=Gn;var Un=function(e){return function(r){var n=ke(2)(r);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};N.readUnsigned=Un;var qn=function(e,r){return function(n,i,a){for(var s=typeof r=="function"?r(n,i,a):r,o=ke(e),l=new Array(s),c=0;c<s;c++)l[c]=o(n);return l}};N.readArray=qn;var Wn=function(e,r,n){for(var i=0,a=0;a<n;a++)i+=e[r+a]&&Math.pow(2,n-a-1);return i},Xn=function(e){return function(r){for(var n=xt()(r),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(n&1<<a);return Object.keys(e).reduce(function(s,o){var l=e[o];return l.length?s[o]=Wn(i,l.index,l.length):s[o]=i[l.index],s},{})}};N.readBits=Xn;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=Z,r=N,n={blocks:function(f){for(var h=0,p=[],m=f.data.length,w=0,I=(0,r.readByte)()(f);I!==h&&I;I=(0,r.readByte)()(f)){if(f.pos+I>=m){var R=m-f.pos;p.push((0,r.readBytes)(R)(f)),w+=R;break}p.push((0,r.readBytes)(I)(f)),w+=I}for(var M=new Uint8Array(w),B=0,L=0;L<p.length;L++)M.set(p[L],B),B+=p[L].length;return M}},i=(0,e.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},function(u){var f=(0,r.peekBytes)(2)(u);return f[0]===33&&f[1]===249}),a=(0,e.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,r.readArray)(3,function(u,f,h){return Math.pow(2,h.descriptor.lct.size+1)})},function(u,f,h){return h.descriptor.lct.exists}),{data:[{minCodeSize:(0,r.readByte)()},n]}]},function(u){return(0,r.peekByte)()(u)===44}),s=(0,e.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(f,h,p){return(0,r.readBytes)(p.text.blockSize)(f)}},n]},function(u){var f=(0,r.peekBytes)(2)(u);return f[0]===33&&f[1]===1}),o=(0,e.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(f,h,p){return(0,r.readString)(p.blockSize)(f)}},n]},function(u){var f=(0,r.peekBytes)(2)(u);return f[0]===33&&f[1]===255}),l=(0,e.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},function(u){var f=(0,r.peekBytes)(2)(u);return f[0]===33&&f[1]===254}),c=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,e.conditional)({gct:(0,r.readArray)(3,function(u,f){return Math.pow(2,f.lsd.gct.size+1)})},function(u,f){return f.lsd.gct.exists}),{frames:(0,e.loop)([i,o,l,a,s],function(u){var f=(0,r.peekByte)()(u);return f===33||f===44})}],d=c;t.default=d})(vt);var _e={};Object.defineProperty(_e,"__esModule",{value:!0});_e.deinterlace=void 0;var Hn=function(e,r){for(var n=new Array(e.length),i=e.length/r,a=function(f,h){var p=e.slice(h*r,(h+1)*r);n.splice.apply(n,[f*r,r].concat(p))},s=[0,4,2,1],o=[8,8,4,2],l=0,c=0;c<4;c++)for(var d=s[c];d<i;d+=o[c])a(d,l),l++;return n};_e.deinterlace=Hn;var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.lzw=void 0;var $n=function(e,r,n){var i=4096,a=-1,s=n,o,l,c,d,u,f,h,g,p,m,L,w,y,x,C,E,I=new Array(n),R=new Array(i),M=new Array(i),B=new Array(i+1);for(w=e,l=1<<w,u=l+1,o=l+2,h=a,d=w+1,c=(1<<d)-1,p=0;p<l;p++)R[p]=0,M[p]=p;var L,g,y,x,E,C;for(L=g=y=x=E=C=0,m=0;m<s;){if(x===0){if(g<d){L+=r[C]<<g,g+=8,C++;continue}if(p=L&c,L>>=d,g-=d,p>o||p==u)break;if(p==l){d=w+1,c=(1<<d)-1,o=l+2,h=a;continue}if(h==a){B[x++]=M[p],h=p,y=p;continue}for(f=p,p==o&&(B[x++]=y,p=h);p>l;)B[x++]=M[p],p=R[p];y=M[p]&255,B[x++]=y,o<i&&(R[o]=h,M[o]=y,o++,!(o&c)&&o<i&&(d++,c+=o)),h=f}x--,I[E++]=B[x],m++}for(m=E;m<s;m++)I[m]=0;return I};Se.lzw=$n;Object.defineProperty(ne,"__esModule",{value:!0});var yt=ne.decompressFrames=ne.decompressFrame=wt=ne.parseGIF=void 0,Zn=Jn(vt),Yn=Z,Vn=N,Qn=_e,Kn=Se;function Jn(t){return t&&t.__esModule?t:{default:t}}var ei=function(e){var r=new Uint8Array(e);return(0,Yn.parse)((0,Vn.buildStream)(r),Zn.default)},wt=ne.parseGIF=ei,ti=function(e){for(var r=e.pixels.length,n=new Uint8ClampedArray(r*4),i=0;i<r;i++){var a=i*4,s=e.pixels[i],o=e.colorTable[s]||[0,0,0];n[a]=o[0],n[a+1]=o[1],n[a+2]=o[2],n[a+3]=s!==e.transparentIndex?255:0}return n},bt=function(e,r,n){if(!e.image){console.warn("gif frame does not have associated image.");return}var i=e.image,a=i.descriptor.width*i.descriptor.height,s=(0,Kn.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,Qn.deinterlace)(s,i.descriptor.width));var o={pixels:s,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?o.colorTable=i.lct:o.colorTable=r,e.gce&&(o.delay=(e.gce.delay||10)*10,o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),n&&(o.patch=ti(o)),o};ne.decompressFrame=bt;var ri=function(e,r){return e.frames.filter(function(n){return n.image}).map(function(n){return bt(n,e.gct,r)})};yt=ne.decompressFrames=ri;function ni(t){const e=wt(t),r=yt(e,!0),n=[];for(let i of r){const{width:a,height:s,left:o,top:l}=i.dims,c=document.createElement("canvas"),d=c.getContext("2d");c.width=a,c.height=s,d.putImageData(new ImageData(i.patch,a,s),o,l),n.push(c)}return n}async function ii(t){const e=new ImageDecoder({data:t,type:"image/gif"});await e.tracks.ready,await e.completed;const r=e.tracks.selectedTrack.frameCount,n=[];for(let i=0;i<r;i++){const a=(await e.decode({frameIndex:i})).image;a.width=a.codedWidth,a.height=a.codedHeight,n.push(he(a)),a.close()}return n}async function ai(t){const e=await t.arrayBuffer();return window.ImageDecoder?ii(e):ni(e)}var Et={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(t,e){(function(r,n){t.exports=n()})(self,function(){return(()=>{var r={"./node_modules/events/events.js":s=>{var o,l=typeof Reflect=="object"?Reflect:null,c=l&&typeof l.apply=="function"?l.apply:function(g,y,x){return Function.prototype.apply.call(g,y,x)};o=l&&typeof l.ownKeys=="function"?l.ownKeys:Object.getOwnPropertySymbols?function(g){return Object.getOwnPropertyNames(g).concat(Object.getOwnPropertySymbols(g))}:function(g){return Object.getOwnPropertyNames(g)};var d=Number.isNaN||function(g){return g!=g};function u(){u.init.call(this)}s.exports=u,s.exports.once=function(g,y){return new Promise(function(x,E){function C(F){g.removeListener(y,T),E(F)}function T(){typeof g.removeListener=="function"&&g.removeListener("error",C),x([].slice.call(arguments))}L(g,y,T,{once:!0}),y!=="error"&&function(F,z,j){typeof F.on=="function"&&L(F,"error",z,{once:!0})}(g,C)})},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var f=10;function h(g){if(typeof g!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof g)}function p(g){return g._maxListeners===void 0?u.defaultMaxListeners:g._maxListeners}function m(g,y,x,E){var C,T,F,z;if(h(x),(T=g._events)===void 0?(T=g._events=Object.create(null),g._eventsCount=0):(T.newListener!==void 0&&(g.emit("newListener",y,x.listener?x.listener:x),T=g._events),F=T[y]),F===void 0)F=T[y]=x,++g._eventsCount;else if(typeof F=="function"?F=T[y]=E?[x,F]:[F,x]:E?F.unshift(x):F.push(x),(C=p(g))>0&&F.length>C&&!F.warned){F.warned=!0;var j=new Error("Possible EventEmitter memory leak detected. "+F.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");j.name="MaxListenersExceededWarning",j.emitter=g,j.type=y,j.count=F.length,z=j,console&&console.warn&&console.warn(z)}return g}function w(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function I(g,y,x){var E={fired:!1,wrapFn:void 0,target:g,type:y,listener:x},C=w.bind(E);return C.listener=x,E.wrapFn=C,C}function R(g,y,x){var E=g._events;if(E===void 0)return[];var C=E[y];return C===void 0?[]:typeof C=="function"?x?[C.listener||C]:[C]:x?function(T){for(var F=new Array(T.length),z=0;z<F.length;++z)F[z]=T[z].listener||T[z];return F}(C):B(C,C.length)}function M(g){var y=this._events;if(y!==void 0){var x=y[g];if(typeof x=="function")return 1;if(x!==void 0)return x.length}return 0}function B(g,y){for(var x=new Array(y),E=0;E<y;++E)x[E]=g[E];return x}function L(g,y,x,E){if(typeof g.on=="function")E.once?g.once(y,x):g.on(y,x);else{if(typeof g.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof g);g.addEventListener(y,function C(T){E.once&&g.removeEventListener(y,C),x(T)})}}Object.defineProperty(u,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(g){if(typeof g!="number"||g<0||d(g))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+g+".");f=g}}),u.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(g){if(typeof g!="number"||g<0||d(g))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+g+".");return this._maxListeners=g,this},u.prototype.getMaxListeners=function(){return p(this)},u.prototype.emit=function(g){for(var y=[],x=1;x<arguments.length;x++)y.push(arguments[x]);var E=g==="error",C=this._events;if(C!==void 0)E=E&&C.error===void 0;else if(!E)return!1;if(E){var T;if(y.length>0&&(T=y[0]),T instanceof Error)throw T;var F=new Error("Unhandled error."+(T?" ("+T.message+")":""));throw F.context=T,F}var z=C[g];if(z===void 0)return!1;if(typeof z=="function")c(z,this,y);else{var j=z.length,Tt=B(z,j);for(x=0;x<j;++x)c(Tt[x],this,y)}return!0},u.prototype.addListener=function(g,y){return m(this,g,y,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(g,y){return m(this,g,y,!0)},u.prototype.once=function(g,y){return h(y),this.on(g,I(this,g,y)),this},u.prototype.prependOnceListener=function(g,y){return h(y),this.prependListener(g,I(this,g,y)),this},u.prototype.removeListener=function(g,y){var x,E,C,T,F;if(h(y),(E=this._events)===void 0)return this;if((x=E[g])===void 0)return this;if(x===y||x.listener===y)--this._eventsCount==0?this._events=Object.create(null):(delete E[g],E.removeListener&&this.emit("removeListener",g,x.listener||y));else if(typeof x!="function"){for(C=-1,T=x.length-1;T>=0;T--)if(x[T]===y||x[T].listener===y){F=x[T].listener,C=T;break}if(C<0)return this;C===0?x.shift():function(z,j){for(;j+1<z.length;j++)z[j]=z[j+1];z.pop()}(x,C),x.length===1&&(E[g]=x[0]),E.removeListener!==void 0&&this.emit("removeListener",g,F||y)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(g){var y,x,E;if((x=this._events)===void 0)return this;if(x.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):x[g]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete x[g]),this;if(arguments.length===0){var C,T=Object.keys(x);for(E=0;E<T.length;++E)(C=T[E])!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(y=x[g])=="function")this.removeListener(g,y);else if(y!==void 0)for(E=y.length-1;E>=0;E--)this.removeListener(g,y[E]);return this},u.prototype.listeners=function(g){return R(this,g,!0)},u.prototype.rawListeners=function(g){return R(this,g,!1)},u.listenerCount=function(g,y){return typeof g.listenerCount=="function"?g.listenerCount(y):M.call(g,y)},u.prototype.listenerCount=M,u.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(s,o,l)=>{l.r(o),l.d(o,{default:()=>c});const c=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":s=>{const o=navigator.userAgent.toLowerCase(),l=navigator.platform.toLowerCase(),c=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],d=c[1]==="ie"&&document.documentMode,u={name:c[1]==="version"?c[3]:c[1],version:d||parseFloat(c[1]==="opera"&&c[4]?c[4]:c[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||l.match(/mac|win|linux/)||["other"])[0]}};u[u.name]=!0,u[u.name+parseInt(u.version,10)]=!0,u.platform[u.platform.name]=!0,s.exports=u},"?569f":()=>{}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var l=n[s]={exports:{}};return r[s](l,l.exports,i),l.exports}i.d=(s,o)=>{for(var l in o)i.o(o,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:o[l]})},i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>d});var s=i("./dist/gif.worker.js.txt");const{EventEmitter:o}=i("./node_modules/events/events.js"),l=i("./src/browser.js");i("?569f");var c=function(){let u,f;return(c=class extends o{static initClass(){u={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},f={delay:500,copy:!1,dispose:-1}}constructor(h){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(h);for(let p in u){const m=u[p];this.options[p]==null&&(this.options[p]=m)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(h,p){if(this.options[h]=p,this._canvas!=null&&["width","height"].includes(h))return this._canvas[h]=p}setOptions(h){return(()=>{const p=[];for(let m of Object.keys(h||{})){const w=h[m];p.push(this.setOption(m,w))}return p})()}addFrame(h,p){p==null&&(p={});const m={};m.transparent=this.options.transparent;for(let w in f)m[w]=p[w]||f[w];if(this.options.width==null&&this.setOption("width",h.width),this.options.height==null&&this.setOption("height",h.height),typeof ImageData<"u"&&ImageData!==null&&h instanceof ImageData)m.data=h.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&h instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&h instanceof WebGLRenderingContext)p.copy?m.data=this.getContextData(h):m.context=h;else{if(h.childNodes==null)throw new Error("Invalid image");p.copy?m.data=this.getImageData(h):m.image=h}return this.frames.push(m)}render(){let h;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let m,w;const I=[];for(h=0,w=this.frames.length,m=0<=w;m?h<w:h>w;m?h++:h--)I.push(null);return I})();const p=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let m,w;for(h=0,w=p,m=0<=w;m?h<w:h>w;m?h++:h--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const h=this.activeWorkers.shift();if(h==null)break;this.log("killing active worker"),h.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const h=Math.min(this.options.workers,this.frames.length);return function(p,m,w){let I=[],R=p<m,M=m;for(let B=p;R?B<M:B>M;R?B++:B--)I.push(B);return I}(this.freeWorkers.length,h).forEach(p=>{this.log(`spawning worker ${p}`);const m=new Worker(this.workerURL);return m.onmessage=w=>(this.activeWorkers.splice(this.activeWorkers.indexOf(m),1),this.freeWorkers.push(m),this.frameFinished(w.data)),this.freeWorkers.push(m)}),h}frameFinished(h){if(this.log(`frame ${h.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[h.index]=h,this.options.globalPalette===!0&&(this.options.globalPalette=h.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let p=1,m=this.freeWorkers.length,w=1<=m;w?p<m:p>m;w?p++:p--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let h,p=0;for(h of Array.from(this.imageParts))p+=(h.data.length-1)*h.pageSize+h.cursor;p+=h.pageSize-h.cursor,this.log(`rendering finished - filesize ${Math.round(p/1e3)}kb`);const m=new Uint8Array(p);let w=0;for(h of Array.from(this.imageParts))for(let R=0;R<h.data.length;R++){const M=h.data[R];m.set(M,w),R===h.data.length-1?w+=h.cursor:w+=h.pageSize}const I=new Blob([m],{type:"image/gif"});return this.emit("finished",I,m)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const h=this.frames[this.nextFrame++],p=this.freeWorkers.shift(),m=this.getTask(h);return this.log(`starting frame ${m.index+1} of ${this.frames.length}`),this.activeWorkers.push(p),p.postMessage(m)}getContextData(h){return h.getImageData(0,0,this.options.width,this.options.height).data}getImageData(h){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const p=this._canvas.getContext("2d");return p.fillStyle=this.options.background,p.fillRect(0,0,this.options.width,this.options.height),p.drawImage(h,0,0),this.getContextData(p)}getTask(h){const p=this.frames.indexOf(h),m={index:p,last:p===this.frames.length-1,delay:h.delay,dispose:h.dispose,transparent:h.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:l.name==="chrome"};if(h.data!=null)m.data=h.data;else if(h.context!=null)m.data=this.getContextData(h.context);else{if(h.image==null)throw new Error("Invalid frame");m.data=this.getImageData(h.image)}return m}log(...h){if(this.options.debug)return console.log(...Array.from(h||[]))}}).initClass(),c}();const d=c})(),a})()})})(Et);var si=Et.exports;const qi=Wt(si),oi={frameCount:0,startTime:0};class li{constructor(e,r=1){v(this,"blob");v(this,"video");v(this,"length");v(this,"frames");v(this,"initPromise");this.blob=e,this.length=r,this.initPromise=this.init()}setFrameCount(e){return this.length=e,this.initPromise=this.init(),this}async init(){this.frames=[];const e=document.createElement("video");e.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(i=>e.addEventListener("loadeddata",i));const{startTime:r}=oi,n=(this.video.duration-r)/this.length;for(let i=0;i<this.length;i++)this.video.currentTime=i*n+r,await new Promise(a=>this.video.oncanplay=a),this.frames[i]=he(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function hi(t,e){if(e=e,e<0)throw new Error(`video frame count ${e} must >1`);return new li(t,e).getFrames()}const ci={type:"SWIRL",radius:0,angle:3,x:.5,y:.5},ui={type:"BULGE",radius:0,strength:.5,x:.5,y:.5},di={type:"SWIM",scale:32,stretch:1,angle:0,amount:10,turbulence:1,time:0},fi={type:"BLUR",radius:10},pi={type:"CONTRAST",brightness:0,contrast:0},gi={type:"HSB",hue:0,saturation:0,brightness:0},mi={type:"HALFTONE",angle:0,radius:4,x:.5,y:.5},vi={type:"DOT_SCREEN",angle:0,radius:4,x:.5,y:.5},xi={type:"NOISE",amount:.25},yi={type:"DENOISE",exponent:20},wi={type:"OIL",skip:4,levels:8,range:12},bi={SWIRL:ci,BULGE:ui,SWIM:di,BLUR:fi,CONTRAST:pi,HSB:gi,HALFTONE:mi,DOT_SCREEN:vi,NOISE:xi,DENOISE:yi,OIL:wi};function Ei(t){return{...bi[t]}}class Ci extends ut{constructor(r=!0){super(r);v(this,"nowImageEle");v(this,"nowTexture");v(this,"centerX",.5);v(this,"centerY",.5)}texture(r){return this.nowImageEle=r,this.nowTexture?this.nowTexture.loadContentsOf(r):this.nowTexture=this.getTexture(this.nowImageEle),this.fxCanvas.draw(this.nowTexture),this}apply(r){this.fxCanvas.draw(this.nowTexture);const n=this.nowImageEle.width/2,i=this.nowImageEle.height/2,a=Math.min(n,i);for(let s of r)switch(s={...Ei(s.type),...s},s.type){case"SWIRL":this.fxCanvas.swirl(n,i,s.radius||a,s.angle);break;case"BULGE":this.fxCanvas.bulgePinch(n,i,s.radius||a,s.strength);break;case"SWIM":this.fxCanvas.swim(s.scale,s.stretch,s.angle,s.amount,s.turbulence,s.time);break;case"BLUR":this.fxCanvas.triangleBlur(s.radius||10);break;case"CONTRAST":this.fxCanvas.brightnessContrast(s.brightness,s.contrast);break;case"HSB":this.fxCanvas.hueSaturation(s.hue,s.saturation);break;case"HALFTONE":this.fxCanvas.colorHalftone(n,i,s.angle,s.radius*2.828);break;case"DOT_SCREEN":this.fxCanvas.dotScreen(n,i,s.angle,s.radius*2.828);break;case"NOISE":this.fxCanvas.noise(s.amount);break;case"DENOISE":this.fxCanvas.denoise(s.exponent);break;case"OIL":this.fxCanvas.oil(s.skip,s.levels,s.range);break;default:console.warn("Unknown filter type",s)}return this.fxCanvas.update(),this}build(r,n){return n!=null&&n.length?(this.texture(r).apply(n),he(this.fxCanvas)):r}}var Ti=(t=>(t.FROM="FROM",t.TO="TO",t.GROUP="GROUP",t.BOT="BOT",t.RANDOM="RANDOM",t))(Ti||{}),Ai=(t=>(t.ZOOM="ZOOM",t.DEFORM="DEFORM",t))(Ai||{}),ki=(t=>(t.NONE="NONE",t.PIXEL="PIXEL",t.PERCENT="PERCENT",t))(ki||{}),_i=(t=>(t.CONTAIN="CONTAIN",t.COVER="COVER",t.FILL="FILL",t))(_i||{}),Si=(t=>(t.MIRROR="MIRROR",t.FLIP="FLIP",t.GRAY="GRAY",t.BINARIZATION="BINARIZATION",t))(Si||{});const Ii={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,origin:ie.DEFAULT,avatarOnTop:!0,angle:0,opacity:1};function Fi(t){if(t.compiled)return t;const e={...Ii,...t},r=e.pos;let n;switch(e.posType){case"ZOOM":n=typeof r[0]!="object"?[oe(r,4)]:r.map(i=>oe(i,4)),e.pos=n.map(i=>i.map(a=>typeof a=="number"?a:Q.parse(a)));break;case"DEFORM":try{n=r.map(i=>oe(i,5).map(a=>oe(a,2)))}catch{n=[oe(r,5).map(a=>oe(a,2))]}e.pos=n.map(i=>i.map(a=>a.map(s=>typeof s=="number"?s:Q.parse(s))));break}return e.compiled=!0,e}class Ri extends lt{constructor(r,n,i){super();v(this,"type");v(this,"template");v(this,"originBlob");v(this,"frames");v(this,"pos");v(this,"initPromise");v(this,"deformer");v(this,"filterRenderer");this.type=r.type;const a=i&&i[this.type.toString().toLowerCase()];if(this.template=Fi(a?{...r,...a}:r),this.originBlob=n[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.updateTemplate()}async updateTemplate(){await this.setCrop(),await this.setStyle(),await this.setFilter(),await this.setRound(),await this.setPos()}async loadFile(){const r=this.originBlob;if(r.type.startsWith("video/"))this.frames=await hi(r,this.template.pos.length);else if(!r.type.startsWith("image"))throw new Error("不支持的格式: "+r.type);r.type==="image/gif"?this.frames=await ai(r):this.frames=[await we(r)]}setCrop(){const r=this.template.cropType;r!=="NONE"&&(this.frames=this.frames.map(n=>Ze(n,this.template.crop,r==="PERCENT")))}setStyle(){for(const r of this.template.style)switch(r){case"FLIP":this.frames=this.frames.map(Yt);break;case"MIRROR":this.frames=this.frames.map(Dr);break;case"GRAY":this.frames=this.frames.map(Vt);break;case"BINARIZATION":this.frames=this.frames.map(Lr);break;default:console.warn("Unknown style "+r)}}setFilter(){var r,n;(n=(r=this.template)==null?void 0:r.filter)!=null&&n.length&&(this.filterRenderer=new Ci,this.frames=this.frames.map(i=>this.filterRenderer.build(i,this.template.filter)))}setRound(){this.template.round&&(this.frames=this.frames.map(zr))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(r=>r.map(this.evalExpression));break;case"DEFORM":this.deformer=new Br,this.pos=this.template.pos.map(r=>r.map(n=>n.map(this.evalExpression)));break}}evalExpression(r){return typeof r=="number"?r:r.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(r){return r<this.frames.length?this.frames[r]:this.frames.at(-1)}getPos(r){return r<this.pos.length?this.pos[r]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(r,n=0){await this.initPromise;let i=this.getFrame(n);const a=this.getPos(n);let{angle:s,opacity:o,rotate:l}=this.template;switch(r.globalAlpha=o,l&&(s+=360/this.pos.length*n),this.template.posType){case"ZOOM":const[c,d,u,f]=a;if(s)switch(r.save(),this.template.origin){case ie.DEFAULT:r.translate(c,d),r.rotate(s*Math.PI/180),r.translate(-c,-d);break;case ie.CENTER:r.translate(c+u/2,d+f/2),r.rotate(s*Math.PI/180),r.translate(-c-u/2,-d-f/2);break}switch(this.template.fit){case"FILL":r.drawImage(i,c,d,u,f);break;default:const h=Math[this.template.fit==="CONTAIN"?"min":"max"](u/i.width,f/i.height),p=i.width*h,m=i.height*h,w=c+(u-p)/2,I=d+(f-m)/2;if(this.template.fit==="CONTAIN")r.drawImage(i,w,I,p,m);else{const R=p-u,M=m-f,B=R/h/2,L=M/h/2;r.drawImage(Ze(i,[B,L,i.width-B,i.height-L]),w+R/2,I+M/2,p-R,m-M)}break}s&&r.restore();break;case"DEFORM":this.deformer.draw(r,i,a);break}r.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const r=this.frames[0];return{width:r.width,height:r.height}}destroy(){var r;(r=this.deformer)==null||r.destroy()}}class Xe{constructor(e){v(this,"arr");v(this,"initPromise");v(this,"topAvatars",[]);v(this,"bottomAvatars",[]);v(this,"sizeMap",Object.create(null));v(this,"maxLength");this.arr=e,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(e,r)=>{e.onTop?this.topAvatars.push(e):this.bottomAvatars.push(e);const n=await e.getSize();this.sizeMap[`avatar${r}Width`]=n.width,this.sizeMap[`avatar${r}Height`]=n.height,this.maxLength=await e.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}destroy(){this.arr.forEach(e=>e.destroy())}static createFrom(e,r,n){return new Xe(e.map(i=>new Ri(i,r,n)))}}const Pi=6;class He{constructor(e){v(this,"hasTemplate",!1);v(this,"width");v(this,"height");v(this,"color");v(this,"frames");v(this,"loadingPromise");e&&([this.width,this.height]=e.size.map(r=>typeof r=="number"?r:Q.parse(r)),this.color=ot(this.color),this.hasTemplate=!0)}setUrl(e,r){this.loadingPromise=He.fetchImages(e,r).then(n=>this.frames=n)}set images(e){this.frames=e}async generate(e){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(r=>{const n=this.getCtx(e);return n.drawImage(r,0,0),n.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(e).canvas];throw new Error("can not load background")}getCtx(e){const r=document.createElement("canvas"),n=a=>typeof a=="number"?a:a.evaluate(e);r.width=n(this.width),r.height=n(this.height);const i=r.getContext("2d");return i.fillStyle=this.color,i.fillRect(0,0,r.width,r.height),i}static async fetchImages(e,r){if(r!==void 0){if(r<=0)return[];const o=[];for(let l=0;l<r;l++)o.push(fetch(`${e}/${l}.png`).then(c=>c.blob()).then(we));return Promise.all(o)}let n=!1,i=new Set;const a=[];let s=0;for(;!n;){i.size>=Pi&&await Promise.race(i);const o=s++,c=fetch(`${e}/${o}.png`).then(d=>d.blob()).then(we).then(d=>{a[o]=d}).catch(()=>n=!0).then(()=>i.delete(c));i.add(c)}return await Promise.all(i),a}}var Oi=(t=>(t.IMG="IMG",t.GIF="GIF",t))(Oi||{});const Mi={type:void 0,avatar:[],text:[],background:void 0,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class Wi{constructor(e,r){v(this,"type");v(this,"template");v(this,"initPromise");v(this,"avatarList");v(this,"backgroundModel");v(this,"textModelList");v(this,"backgroundLength");this.template={...Mi,...e},this.type=e.type,this.textModelList=De.createFrom(this.template.text),this.backgroundModel=new He(this.template.background),r&&(this.background=r),this.initPromise=this.init()}set background(e){if(typeof e=="string")this.backgroundModel.setUrl(e,this.backgroundLength);else if(Array.isArray(e))this.backgroundModel.images=e;else throw console.warn(e),new Error("Unknown background")}async init(){}async generate(e,r){const n=Xe.createFrom(this.template.avatar,e,r),i=await n.getSizeMap(),a=await this.backgroundModel.generate(i);return new Bi(this.template,a,n,this.textModelList)}}class Bi{constructor(e,r,n,i){v(this,"template");v(this,"canvas");v(this,"ctx");v(this,"backgrounds");v(this,"avatars");v(this,"texts");v(this,"length");v(this,"intervalId");v(this,"initPromise");v(this,"userDelay");v(this,"i",0);v(this,"framesCache",[]);v(this,"resolveFramesCachedPromise");v(this,"framesCachedPromise",new Promise(e=>this.resolveFramesCachedPromise=e));v(this,"prevTextCacheCount");v(this,"prevTextedFramesCache");const a=document.createElement("canvas");this.canvas=a,a.width=r[0].width,a.height=r[0].height,this.ctx=a.getContext("2d"),this.template=e,this.backgrounds=r,this.avatars=n,this.texts=i,this.texts.setCacheArea(a.width,a.height),this.initPromise=this.init()}async init(){const{posLength:e,frameLength:r=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?r:this.backgrounds.length}async replay(){return this.i=0,await this.play(),new Promise(e=>setTimeout(e,this.delay*this.length))}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}playReverse(){this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.length-1-this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(e){if(!e){this.stop();return}this.userDelay=e,e>0?this.play():this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(e){return e<this.backgrounds.length?this.backgrounds[e]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}async getTextedFrames(){const e=await this.getFrames();return this.texts.texts.length===0?e:this.prevTextCacheCount===this.texts.cacheCount?this.prevTextedFramesCache:(this.prevTextedFramesCache=e.map(r=>{const n=he(r);return n.getContext("2d").drawImage(this.texts.cacheCanvas,0,0),n}),this.prevTextCacheCount=this.texts.cacheCount,this.prevTextedFramesCache)}drawTextsCache(){this.ctx.drawImage(this.texts.cacheCanvas,0,0)}drawTexts(){this.texts.draw(this.ctx)}async drawAvatarsCache(e){if(this.framesCache[e]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[e],0,0);return}await this.drawAvatars(e),this.framesCache[e]=he(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async drawAvatars(e){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const r of this.avatars.bottomAvatars)await r.draw(this.ctx,e);this.ctx.drawImage(this.getBackground(e),0,0);for(const r of this.avatars.topAvatars)await r.draw(this.ctx,e)}get settingObject(){const e=this;return this.length===1?{}:{set delay(r){e.delay=r},get delay(){return e.delay},play:()=>this.play(),stop:()=>this.stop()}}async destroy(){await this.stop(),this.avatars.destroy(),this.canvas.remove()}}const Di=qt();class Ct{constructor(e,r,n){v(this,"obj");v(this,"container");v(this,"attrMap");if(this.obj=e,this.container=document.createElement(n?"fieldset":"div"),n&&this.container.appendChild(_t(n,"legend")),this.container.classList.add("setting-container"),this.attrMap=r??{},this.obj._delete){const i=this.obj._delete;delete this.obj._delete,this.obj.delete=()=>{typeof i=="function"&&i(),this.container.remove()}}for(const[i,a]of Object.entries(this.obj)){if(a==null)continue;const s=this.createElement(i,a);this.container.appendChild(s)}}createElement(e,r){const n=this.attrMap[e]??{};let i=document.createElement("div");const a=document.createElement("label");switch(a.textContent=Di[e]??e,i.appendChild(a),n.type){case"font":const o=document.createElement("select");return o.addEventListener("change",()=>this.obj[e]=o.value),document.fonts.forEach(c=>{const d=c.family,u=document.createElement("option");u.style.fontFamily=d,u.value=d,u.textContent=d,u.selected=d===this.obj[e],o.appendChild(u)}),i.appendChild(o),i;case"select":const l=document.createElement("select");return l.addEventListener("change",()=>this.obj[e]=l.value),n.options.forEach(c=>{const d=document.createElement("option");d.value=c,d.textContent=c,d.selected=c===r,l.appendChild(d)}),i.appendChild(l),i}let s=typeof r;switch(s){case"object":i=new Ct(r,n[e],e).render();break;case"function":const o=document.createElement("button");o.textContent=e,o.addEventListener("click",async()=>{o.disabled=!0,o.style.cursor="progress";try{await r()}finally{o.disabled=!1,o.style.cursor="pointer"}}),i.appendChild(o);break;default:const l=document.createElement("input");let c=()=>this.obj[e]=l.value;switch(typeof r){case"number":c=()=>this.obj[e]=parseFloat(l.value);break;case"string":s=/^#([A-Fa-f0-9]{6})$/.test(r)?"color":"text";break;case"boolean":s="checkbox",l.checked=r,c=()=>this.obj[e]=l.checked;break}l.type=s;for(let[d,u]of Object.entries(n))l[d]=u;l.value=r.toString(),l.addEventListener("input",c),i.appendChild(l);break}return i}render(){return this.container}}export{ki as A,qi as G,Wi as P,Ct as S,ie as T,Ni as a,Wt as b,_t as c,we as d,Ui as e,Ie as f,qt as g,ai as h,Gi as i,ji as j,Ii as k,Ti as l,_i as m,Ai as n,Si as o,$t as p,Zt as q,Ht as r,Rt as s,$e as t,J as u,Mi as v,Oi as w};
