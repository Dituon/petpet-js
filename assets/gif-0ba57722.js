var yr=Object.defineProperty;var wr=(e,t,r)=>t in e?yr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var y=(e,t,r)=>(wr(e,typeof t!="symbol"?t+"":t,r),r),$e=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var le=(e,t,r)=>($e(e,t,"read from private field"),r?r.call(e):t.get(e)),_e=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},Ee=(e,t,r,n)=>($e(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var Pt=(e,t,r)=>($e(e,t,"access private method"),r);const Lo=(e,t=1e3)=>{const r=document.getElementById("message");r&&r.remove();const n=document.createElement("div");n.id="message",n.innerText=e,document.body.appendChild(n),setTimeout(()=>{n.style.top="0px"},1),setTimeout(()=>{n.style.top=""},t)},Ce=()=>document.createElement("div");var be,V,Me,er;class $o{constructor(t){_e(this,Me);_e(this,be,void 0);_e(this,V,void 0);Ee(this,be,t)}show(){if(le(this,V))return;const t=Ce();return t.className="loading",t.append(Ce(),Ce(),Ce()),le(this,be).appendChild(t),t.addEventListener("click",Pt(this,Me,er)),Ee(this,V,t),this}hide(){if(le(this,V))return le(this,V).remove(),Ee(this,V,null),this}error(){let t="加载失败";throw le(this,V).innerHTML=`<span>${t}</span>`,new Error(t)}}be=new WeakMap,V=new WeakMap,Me=new WeakSet,er=function(t){t.stopPropagation()};class No{constructor(){y(this,"element");y(this,"showing");y(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(t){this.element.onclick=t}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}function br(e,t="h3"){const r=document.createElement(t);return r.textContent=e,r}const _r={server:[window.location.origin+window.location.pathname,"https://d2n.moe/petpet-js","https://d2n.moe/petpet"],lang:void 0,template:void 0},Er=["lang","template","server"],Ae=new URL(location.href),Ne=Cr();function Cr(){const{lang:e,template:t,server:r=[]}=Sr();let n={..._r,...JSON.parse(localStorage.getItem("config")||"{}")};n.lang=e??n.lang,n.template=t??n.template;function a(){localStorage.setItem("config",JSON.stringify(n))}return n.save=a,n.server=[...new Set([...r,...n.server])],n=new Proxy(n,{set(i,s,o){return Array.isArray(i[s])?i[s]=new Proxy(o,{set(u,h,c){return u[h]=c,a(),!0},deleteProperty(u,h){return u.splice(h,1),a(),!0}}):i[s]=o,a(),!0}}),n.save(),n}function Tr(e,t){if(window.history.replaceState){if(!t){Ae.searchParams.delete(e);return}Ae.searchParams.set(e,t),window.history.replaceState({},"",Ae.toString())}}function Sr(){const e={};for(let t of Er){const r=Ae.searchParams.get(t);if(r)switch(t){case"server":e.server=r.split(","),Tr("server",void 0);break;default:e[t]=r;break}}return e}const kr={selectTemplate:"Template auswählen",uploadAvatar:"Avatar hochladen",setText:"Text setzen",result:"Ergebnis",typeToSearch:"Suche",cancel:"Abbrechen",save:"Speichern",add:"Hinzufügen",x:"X",y:"Y",text:"Text",color:"Farbe",size:"Größe",font:"Schriftart",fontStyle:"Schriftstil",strokeSize:"Konturgröße",strokeColor:"Konturfarbe",hidden:"Verstecken",delete:"Löschen",delay:"Verzögerung",play:"Abspielen",stop:"Stoppen",workers:"Anzahl der Threads",quality:"Qualität",background:"Hintergrund",dither:"Dither",download:"Download",copy:"Kopieren",share:"Teilen",notSelected:"Nicht ausgewählt",noAvatar:"Keine Avatar",rightClickOrLongPress:"Rechtsklick oder Doppelklick",type:"Typ",deform:"Verformung",round:"Rund",rotate:"Drehen",avatarOnTop:"Avatar oben",opacity:"Deckkraft",fit:"Anpassen",style:"Stil",FLIP:"Umdrehen",MIRROR:"Spiegeln",GRAY:"Grau",BINARIZATION:"Binarisierung"},Ar={selectTemplate:"Sélectionnez un modèle",uploadAvatar:"Télécharger avatar",setText:"Définir le texte",result:"Résultat",typeToSearch:"Rechercher",cancel:"Annuler",save:"Enregistrer",add:"Ajouter",x:"X",y:"Y",text:"Texte",color:"Couleur",size:"Taille",font:"Police",fontStyle:"Style de police",strokeSize:"Taille du contour",strokeColor:"Couleur du contour",hidden:"Cacher",delete:"Supprimer",delay:"Délai",play:"Lecture",stop:"Arrêter",workers:"Nombre de nœuds",quality:"Qualité",background:"Fond",dither:"Dither",download:"Télécharger",copy:"Copier",share:"Partager",notSelected:"Non sélectionné",noAvatar:"Aucun avatar",rightClickOrLongPress:"Cliquer ou longue-cliquer pour sélectionner",type:"Type",deform:"Déformation",round:"Rond",rotate:"Rotation",avatarOnTop:"Avatar en haut",opacity:"Opacité",fit:"Ajustement",style:"Style",FLIP:"Retourner",MIRROR:"Miroir",GRAY:"Gris",BINARIZATION:"Binarisation"},Pr={selectTemplate:"テンプレートを選択",uploadAvatar:"アバターをアップロード",setText:"テキストを設定",result:"結果",typeToSearch:"検索",cancel:"キャンセル",save:"保存",add:"追加",x:"X",y:"Y",text:"テキスト",color:"色",size:"サイズ",font:"フォント",fontStyle:"フォントスタイル",strokeSize:"線の太さ",strokeColor:"線の色",hidden:"隠す",delete:"削除",delay:"遅延",play:"再生",stop:"停止",workers:"線程数",quality:"質量",background:"背景色",dither:"抖動",download:"ダウンロード",copy:"コピー",share:"シェア",notSelected:"未選択",noAvatar:"アバターなし",rightClickOrLongPress:"右クリックまたは長押し",type:"タイプ",deform:"変形",round:"ラウンド",rotate:"回転",avatarOnTop:"上にアバター",opacity:"不透明度",fit:"フィット",style:"スタイル",FLIP:"反転",MIRROR:"ミラー",GRAY:"グレー",BINARIZATION:"二値化"},Mr={selectTemplate:"템플릿 선택",uploadAvatar:"아바타 업로드",setText:"텍스트 설정",result:"결과",typeToSearch:"검색",cancel:"취소",save:"저장",add:"추가",x:"X",y:"Y",text:"텍스트",color:"색",size:"크기",font:"글꼴",fontStyle:"글꼴 스타일",strokeSize:"선 굵기",strokeColor:"선 색상",hidden:"숨김",delete:"삭제",delay:"연속",play:"재생",stop:"중지",workers:"쓰레드 수",quality:"질량",background:"배경색",dither:"쓰레드",download:"다운로드",copy:"복사",share:"공유",notSelected:"선택되지 않음",noAvatar:"아바타 없음",rightClickOrLongPress:"마우스 오른쪽클릭",type:"유형",deform:"변형",round:"둥근",rotate:"회전",avatarOnTop:"상단 아바타",opacity:"불투명도",fit:"맞춤",style:"스타일",FLIP:"뒤집기",MIRROR:"거울상",GRAY:"그레이",BINARIZATION:"이진화"},Or={selectTemplate:"Выберите шаблон",uploadAvatar:"Загрузить аватар",setText:"Установить текст",result:"Результат",typeToSearch:"Поиск",cancel:"Отмена",save:"Сохранить",add:"Добавить",x:"X",y:"Y",text:"Текст",color:"Цвет",size:"Размер",font:"Шрифт",fontStyle:"Стиль шрифта",strokeSize:"Толщина обводки",strokeColor:"Цвет обводки",hidden:"Скрыть",delete:"Удалить",delay:"Задержка",play:"Воспроизведение",stop:"Остановить",workers:"Количество нитей",quality:"Качество",background:"Фон",dither:"Контроль",download:"Скачать",copy:"Копировать",share:"Поделиться",notSelected:"Не выбрано",noAvatar:"Нет аватара",rightClickOrLongPress:"Кликните или перетащите мышкой",type:"Тип",deform:"Деформация",round:"Круглый",rotate:"Поворот",avatarOnTop:"Аватар сверху",opacity:"Непрозрачность",fit:"Подгонка",style:"Стиль",FLIP:"Перевернуть",MIRROR:"Зеркало",GRAY:"Серый",BINARIZATION:"Бинаризация"},Rr={selectTemplate:"Select template",uploadAvatar:"Upload avatar",setText:"Set text",result:"Result",typeToSearch:"Type to search",cancel:"Cancel",save:"Save",add:"Add",x:"X",y:"Y",text:"Text",color:"Color",size:"Size",font:"Font",fontStyle:"Font Style",strokeSize:"Stroke Size",strokeColor:"Stroke Color",hidden:"Hidden",delete:"Delete",delay:"Delay",play:"Play",stop:"Stop",workers:"Workers",quality:"Quality",background:"Background",dither:"Dither",download:"Download",copy:"Copy",share:"Share",notSelected:"Not Selected",noAvatar:"No Avatar",rightClickOrLongPress:"Right Click or Long Press",type:"Type",deform:"Deform",round:"Round",rotate:"Rotate",avatarOnTop:"Avatar on Top",opacity:"Opacity",fit:"Fit",style:"Style",FLIP:"Flip",MIRROR:"Mirror",GRAY:"Gray",BINARIZATION:"Binarization"},Ir={selectTemplate:"选择模板",uploadAvatar:"上传头像",setText:"设置文字",result:"结果",typeToSearch:"搜索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"颜色",size:"大小",font:"字体",fontStyle:"字体风格",strokeSize:"描边大小",strokeColor:"描边颜色",hidden:"隐藏",delete:"删除",delay:"延迟",play:"播放",stop:"停止",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"未选择",noAvatar:"无头像",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},Fr={selectTemplate:"烟弹口味",uploadAvatar:"动物朋友的相片",setText:"自调烟油",result:"试抽一下",typeToSearch:"找一找",cancel:"不",save:"好了",add:"多一个",x:"左右",y:"上下",text:"藏话",color:"烟油颜色",size:"烟嘴尺寸",font:"雾化器",fontStyle:"雾化湿度",strokeSize:"烟杆长度",strokeColor:"烟杆颜色",hidden:"低欧姆雾化",delete:"不抽了",delay:"吐圈速度",play:"开溜",stop:"等会",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"芋泥波波",noAvatar:"雪豹已失联",rightClickOrLongPress:"右键或长按",type:"类型",deform:"变形",round:"圆形",rotate:"旋转",avatarOnTop:"头像置顶",opacity:"透明度",fit:"适应",style:"风格",FLIP:"翻转",MIRROR:"镜像",GRAY:"灰阶",BINARIZATION:"二值化"},Br={selectTemplate:"選擇模板",uploadAvatar:"上傳頭像",setText:"設置文字",result:"結果",typeToSearch:"檢索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"顏色",size:"大小",font:"字型",fontStyle:"字型風格",strokeSize:"描邊大小",strokeColor:"描邊顏色",hidden:"隱藏",delete:"刪除",delay:"延遲",play:"播放",stop:"停止",workers:"線程數",quality:"質量",background:"背景",dither:"抖動",download:"下載",copy:"複製",share:"分享",notSelected:"未選擇",noAvatar:"無頭像",rightClickOrLongPress:"右鍵或長按",type:"類型",deform:"變形",round:"圓形",rotate:"旋轉",avatarOnTop:"頭像置顶",opacity:"透明度",fit:"適應",style:"風格",FLIP:"翻轉",MIRROR:"鏡像",GRAY:"灰階",BINARIZATION:"二值化"},Dr=[{id:"zh-CN",text:"简体中文",alias:["zh"]},{id:"zh-TW",text:"繁體中文",alias:["zh-HK","zh-SG"]},{id:"en-US",text:"English",alias:["en","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT"]},{id:"ru",text:"русский язык",alias:["ru-RU"]},{id:"de",text:"Deutsch",alias:["de-CH","de-AT","de-LU","de-LI"]},{id:"es",text:"español",alias:["es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"]},{id:"fr",text:"Français",alias:["fr-BE","fr-CA","fr-CH","fr-LU"]},{id:"ja",text:"日本語",alias:["ja-JP"]},{id:"ko",text:"한국어",alias:["ko-KR"]}],He={en_US:Rr,zh_TW:Br,zh_CN:Ir,de:kr,fr:Ar,ja:Pr,ko:Mr,ru:Or,zh_DZ:Fr};var jt;let Ge=He[(jt=Ne==null?void 0:Ne.lang)==null?void 0:jt.replace("-","_")];function zr(){if(Ge)return Ge;const e=navigator.language;let t="en-US";for(const r of Dr){if(e===r.id){t=r.id;break}r.alias.forEach(n=>{n===e&&(t=r.id)})}return t=t.replace("-","_"),Ge=He[t],He[t]}class Lr{static from(){throw new Error}}function ue(e,t){if(e.length!==t)throw new Error("array.length != "+t);return e}function ye(e,t=!1){const r=document.createElement("canvas"),n=r.getContext("2d",{willReadFrequently:t});return r.width=e.width,r.height=e.height,n.drawImage(e,0,0),r}async function Go(e){const t=await Pe(e);return ye(t)}async function Pe(e){return new Promise((t,r)=>{const n=new Image;n.onload=()=>t(n),n.onerror=a=>r(a),n.src=URL.createObjectURL(e)})}function tr(e="#ffffff00"){if(typeof e=="string")return e.startsWith("#")?e:e.length<<2?"#"+e:e;if(e.length&&e.length>=3&&e.length<=4){const[t,r,n,a=1]=e;return`rgba(${t}, ${r}, ${n}, ${a})`}throw new Error("cannot load color "+e)}function Mt(e,t,r=!1){const n=document.createElement("canvas"),a=n.getContext("2d"),[i,s,o,u]=t.length===2?[0,0,t[0],t[1]]:t;let h=r?(o-i)/100*e.width:o-i,c=r?(u-s)/100*e.height:u-s;return n.width=r?h/100*e.width:h,n.height=r?c/100*e.height:c,a.drawImage(e,i,s,h,c,0,0,h,c),n}function $r(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(0,e.height),r.scale(1,-1),r.drawImage(e,0,0),t}function Nr(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0);const n=r.getImageData(0,0,t.width,t.height),a=n.data;for(let i=0;i<a.length;i+=4){const s=a[i],o=a[i+1],u=a[i+2],h=(s+o+u)/3;a[i]=h,a[i+1]=h,a[i+2]=h}return r.putImageData(n,0,0),t}var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function qo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){if(this instanceof n){var a=[null];a.push.apply(a,arguments);var i=Function.bind.apply(t,a);return new i}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,a.get?a:{enumerable:!0,get:function(){return e[n]}})}),r}var rr={},R={},Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});var Ur=function(){function e(t,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function qr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Wr=function(){function e(t){qr(this,e);var r=t.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],t.sort(function(u,h){return u[0]-h[0]});for(var n=0;n<r;n++)this.xa.push(t[n][0]),this.ya.push(t[n][1]);this.u[0]=0,this.y2[0]=0;for(var n=1;n<r-1;++n){var a=this.xa[n+1]-this.xa[n-1],i=(this.xa[n]-this.xa[n-1])/a,s=i*this.y2[n-1]+2;this.y2[n]=(i-1)/s;var o=(this.ya[n+1]-this.ya[n])/(this.xa[n+1]-this.xa[n])-(this.ya[n]-this.ya[n-1])/(this.xa[n]-this.xa[n-1]);this.u[n]=(6*o/a-i*this.u[n-1])/s}this.y2[r-1]=0;for(var n=r-2;n>=0;--n)this.y2[n]=this.y2[n]*this.y2[n+1]+this.u[n]}return Ur(e,[{key:"interpolate",value:function(r){for(var n=this.ya.length,a=0,i=n-1;i-a>1;){var s=i+a>>1;this.xa[s]>r?i=s:a=s}var o=this.xa[i]-this.xa[a],u=(this.xa[i]-r)/o,h=(r-this.xa[a])/o;return u*this.ya[a]+h*this.ya[i]+((u*u*u-u)*this.y2[a]+(h*h*h-h)*this.y2[i])*(o*o)/6}}]),e}();Ve.default=Wr;Object.defineProperty(R,"__esModule",{value:!0});R.simpleShader=Yr;R.clamp=nr;R.splineInterpolate=Vr;var Xr=Ve,Hr=Zr(Xr);function Zr(e){return e&&e.__esModule?e:{default:e}}function Yr(e,t,r,n){(r||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(n||this._.texture)}function nr(e,t,r){return Math.max(e,Math.min(t,r))}function Vr(e){for(var t=new Hr.default(e),r=[],n=0;n<256;n++)r.push(nr(0,Math.floor(t.interpolate(n/255)*256),255));return r}var M={};Object.defineProperty(M,"__esModule",{value:!0});M.set=Qr;M.get=Kr;var Ze={};function Qr(e){Ze=Object.assign(Ze,e)}function Kr(e){return Ze[e]}var Qe={},B={};Object.defineProperty(B,"__esModule",{value:!0});var Ot=function(){function e(t,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Jr=M,ne=jr(Jr);function jr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function en(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var tn="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main() {  texCoord = _texCoord;  gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);}",rn="uniform sampler2D texture;varying vec2 texCoord;void main() {  gl_FragColor = texture2D(texture, texCoord);}",nn=function(){Ot(e,null,[{key:"getDefaultShader",value:function(){var r=ne.get("gl");return r.defaultShader=r.defaultShader||new e,r.defaultShader}}]);function e(t,r){en(this,e);var n=ne.get("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=n.createProgram(),t=t||tn,r=r||rn,r="precision highp float;"+r,n.attachShader(this.program,Rt(n.VERTEX_SHADER,t)),n.attachShader(this.program,Rt(n.FRAGMENT_SHADER,r)),n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS))throw"link error: "+n.getProgramInfoLog(this.program)}return Ot(e,[{key:"destroy",value:function(){var r=ne.get("gl");r.deleteProgram(this.program),this.program=null}},{key:"uniforms",value:function(r){var n=ne.get("gl");n.useProgram(this.program);for(var a in r)if(r.hasOwnProperty(a)){var i=n.getUniformLocation(this.program,a);if(i!==null){var s=r[a];if(an(s))switch(s.length){case 1:n.uniform1fv(i,new Float32Array(s));break;case 2:n.uniform2fv(i,new Float32Array(s));break;case 3:n.uniform3fv(i,new Float32Array(s));break;case 4:n.uniform4fv(i,new Float32Array(s));break;case 9:n.uniformMatrix3fv(i,!1,new Float32Array(s));break;case 16:n.uniformMatrix4fv(i,!1,new Float32Array(s));break;default:throw`dont't know how to load uniform "`+a+'" of length '+s.length}else if(sn(s))n.uniform1f(i,s);else throw'attempted to set uniform "'+a+'" to invalid value '+(s||"undefined").toString()}}return this}},{key:"textures",value:function(r){var n=ne.get("gl");n.useProgram(this.program);for(var a in r)r.hasOwnProperty(a)&&n.uniform1i(n.getUniformLocation(this.program,a),r[a]);return this}},{key:"drawRect",value:function(r,n,a,i){var s=ne.get("gl"),o=s.getParameter(s.VIEWPORT);n=n!==void 0?(n-o[1])/o[3]:0,r=r!==void 0?(r-o[0])/o[2]:0,a=a!==void 0?(a-o[0])/o[2]:1,i=i!==void 0?(i-o[1])/o[3]:1,s.vertexBuffer==null&&(s.vertexBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([r,n,r,i,a,n,a,i]),s.STATIC_DRAW),s.texCoordBuffer==null&&(s.texCoordBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),s.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=s.getAttribLocation(this.program,"vertex"),s.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=s.getAttribLocation(this.program,"_texCoord"),s.enableVertexAttribArray(this.texCoordAttribute)),s.useProgram(this.program),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.vertexAttribPointer(this.vertexAttribute,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.vertexAttribPointer(this.texCoordAttribute,2,s.FLOAT,!1,0,0),s.drawArrays(s.TRIANGLE_STRIP,0,4)}}]),e}();B.default=nn;function an(e){return Object.prototype.toString.call(e)=="[object Array]"}function sn(e){return Object.prototype.toString.call(e)=="[object Number]"}function Rt(e,t){var r=ne.get("gl"),n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw"compile error: "+r.getShaderInfoLog(n);return n}Object.defineProperty(Qe,"__esModule",{value:!0});var It=function(){function e(t,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),on=M,q=cn(on),ln=B,un=hn(ln);function hn(e){return e&&e.__esModule?e:{default:e}}function cn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function dn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Y=null,fn=function(){It(e,null,[{key:"fromElement",value:function(r){var n=q.get("gl"),a=new e(0,0,n.RGBA,n.UNSIGNED_BYTE);return a.loadContentsOf(r),a}}]);function e(t,r,n,a){dn(this,e);var i=q.get("gl");this.gl=i,this.id=i.createTexture(),this.width=t,this.height=r,this.format=n,this.type=a,i.bindTexture(i.TEXTURE_2D,this.id),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),t&&r&&i.texImage2D(i.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}return It(e,[{key:"loadContentsOf",value:function(r){var n=q.get("gl");this.width=r.width||r.videoWidth,this.height=r.height||r.videoHeight,n.bindTexture(n.TEXTURE_2D,this.id),n.texImage2D(n.TEXTURE_2D,0,this.format,this.format,this.type,r)}},{key:"initFromBytes",value:function(r,n,a){var i=q.get("gl");this.width=r,this.height=n,this.format=i.RGBA,this.type=i.UNSIGNED_BYTE,i.bindTexture(i.TEXTURE_2D,this.id),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,r,n,0,i.RGBA,this.type,new Uint8Array(a))}},{key:"destroy",value:function(){var r=q.get("gl");r.deleteTexture(this.id),this.id=null}},{key:"use",value:function(r){var n=q.get("gl");n.activeTexture(n.TEXTURE0+(r||0)),n.bindTexture(n.TEXTURE_2D,this.id)}},{key:"unuse",value:function(r){var n=q.get("gl");n.activeTexture(n.TEXTURE0+(r||0)),n.bindTexture(n.TEXTURE_2D,null)}},{key:"ensureFormat",value:function(r,n,a,i){if(arguments.length==1){var s=arguments[0];r=s.width,n=s.height,a=s.format,i=s.type}if(r!=this.width||n!=this.height||a!=this.format||i!=this.type){var o=q.get("gl");this.width=r,this.height=n,this.format=a,this.type=i,o.bindTexture(o.TEXTURE_2D,this.id),o.texImage2D(o.TEXTURE_2D,0,this.format,r,n,0,this.format,this.type,null)}}},{key:"drawTo",value:function(r){var n=q.get("gl");if(n.framebuffer=n.framebuffer||n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,n.framebuffer),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.id,0),n.checkFramebufferStatus(n.FRAMEBUFFER)!==n.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");n.viewport(0,0,this.width,this.height),r(),n.bindFramebuffer(n.FRAMEBUFFER,null)}},{key:"fillUsingCanvas",value:function(r){r(Ft(this));var n=q.get("gl");return this.format=n.RGBA,this.type=n.UNSIGNED_BYTE,n.bindTexture(n.TEXTURE_2D,this.id),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,Y),this}},{key:"toImage",value:function(r){this.use(),un.default.getDefaultShader().drawRect();var n=q.get("gl"),a=this.width*this.height*4,i=new Uint8Array(a),s=Ft(this),o=s.createImageData(this.width,this.height);n.readPixels(0,0,this.width,this.height,n.RGBA,n.UNSIGNED_BYTE,i);for(var u=0;u<a;u++)o.data[u]=i[u];s.putImageData(o,0,0),r.src=Y.toDataURL()}},{key:"swapWith",value:function(r){var n;n=r.id,r.id=this.id,this.id=n,n=r.width,r.width=this.width,this.width=n,n=r.height,r.height=this.height,this.height=n,n=r.format,r.format=this.format,this.format=n}}]),e}();Qe.default=fn;function Ft(e){Y==null&&(Y=document.createElement("canvas")),Y.width=e.width,Y.height=e.height;var t=Y.getContext("2d");return t.clearRect(0,0,Y.width,Y.height),t}var ar={},Ke={};Object.defineProperty(Ke,"__esModule",{value:!0});Ke.default=function(e,t){var r=mn.get("gl");return r.brightnessContrast=r.brightnessContrast||new gn.default(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),Ue.simpleShader.call(this,r.brightnessContrast,{brightness:(0,Ue.clamp)(-1,e,1),contrast:(0,Ue.clamp)(-1,t,1)}),this};var pn=B,gn=yn(pn),Ue=R,vn=M,mn=xn(vn);function xn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function yn(e){return e&&e.__esModule?e:{default:e}}var Je={};Object.defineProperty(Je,"__esModule",{value:!0});Je.default=function(e,t,r){var n=En.get("gl");e=(0,Te.splineInterpolate)(e),arguments.length==1?t=r=e:(t=(0,Te.splineInterpolate)(t),r=(0,Te.splineInterpolate)(r));for(var a=[],i=0;i<256;i++)a.splice(a.length,0,e[i],t[i],r[i],255);return this._.extraTexture.initFromBytes(256,1,a),this._.extraTexture.use(1),n.curves=n.curves||new bn.default(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),n.curves.textures({map:1}),Te.simpleShader.call(this,n.curves,{}),this};var wn=B,bn=Tn(wn),Te=R,_n=M,En=Cn(_n);function Cn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Tn(e){return e&&e.__esModule?e:{default:e}}var je={};Object.defineProperty(je,"__esModule",{value:!0});je.default=function(e){var t=Mn.get("gl");t.denoise=t.denoise||new kn.default(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var r=0;r<2;r++)An.simpleShader.call(this,t.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this};var Sn=B,kn=Rn(Sn),An=R,Pn=M,Mn=On(Pn);function On(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Rn(e){return e&&e.__esModule?e:{default:e}}var et={};Object.defineProperty(et,"__esModule",{value:!0});et.default=function(e,t){var r=Dn.get("gl");return r.hueSaturation=r.hueSaturation||new Fn.default(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),qe.simpleShader.call(this,r.hueSaturation,{hue:(0,qe.clamp)(-1,e,1),saturation:(0,qe.clamp)(-1,t,1)}),this};var In=B,Fn=Ln(In),qe=R,Bn=M,Dn=zn(Bn);function zn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ln(e){return e&&e.__esModule?e:{default:e}}var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.default=function(e){var t=Un.get("gl");return t.noise=t.noise||new Nn.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),Bt.simpleShader.call(this,t.noise,{amount:(0,Bt.clamp)(0,e,1)}),this};var $n=B,Nn=Wn($n),Bt=R,Gn=M,Un=qn(Gn);function qn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Wn(e){return e&&e.__esModule?e:{default:e}}var rt={};Object.defineProperty(rt,"__esModule",{value:!0});rt.default=function(e){var t=Yn.get("gl");return t.sepia=t.sepia||new Hn.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),Dt.simpleShader.call(this,t.sepia,{amount:(0,Dt.clamp)(0,e,1)}),this};var Xn=B,Hn=Qn(Xn),Dt=R,Zn=M,Yn=Vn(Zn);function Vn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Qn(e){return e&&e.__esModule?e:{default:e}}var nt={};Object.defineProperty(nt,"__esModule",{value:!0});nt.default=function(e,t){var r=ea.get("gl");return r.unsharpMask=r.unsharpMask||new zt.default(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){zt.default.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),r.unsharpMask.textures({originalTexture:1}),Jn.simpleShader.call(this,r.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this};var Kn=B,zt=ra(Kn),Jn=R,jn=M,ea=ta(jn);function ta(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ra(e){return e&&e.__esModule?e:{default:e}}var at={};Object.defineProperty(at,"__esModule",{value:!0});at.default=function(e){var t=sa.get("gl");return t.vibrance=t.vibrance||new aa.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),Lt.simpleShader.call(this,t.vibrance,{amount:(0,Lt.clamp)(-1,e,1)}),this};var na=B,aa=la(na),Lt=R,ia=M,sa=oa(ia);function oa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function la(e){return e&&e.__esModule?e:{default:e}}var it={};Object.defineProperty(it,"__esModule",{value:!0});it.default=function(e,t){var r=da.get("gl");return r.vignette=r.vignette||new ha.default(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),We.simpleShader.call(this,r.vignette,{size:(0,We.clamp)(0,e,1),amount:(0,We.clamp)(0,t,1)}),this};var ua=B,ha=pa(ua),We=R,ca=M,da=fa(ca);function fa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function pa(e){return e&&e.__esModule?e:{default:e}}var st={},U={};Object.defineProperty(U,"__esModule",{value:!0});U.randomShaderFunc=void 0;U.warpShader=xa;var ga=B,va=ma(ga);function ma(e){return e&&e.__esModule?e:{default:e}}function xa(e,t){return new va.default(null,e+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+t+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}U.randomShaderFunc="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";Object.defineProperty(st,"__esModule",{value:!0});st.default=function(e,t,r){var n=_a.get("gl");n.lensBlurPrePass=n.lensBlurPrePass||new Se.default(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var a="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+wa.randomShaderFunc+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";n.lensBlur0=n.lensBlur0||new Se.default(null,a+"    void main() {      gl_FragColor = sample(delta0);    }  "),n.lensBlur1=n.lensBlur1||new Se.default(null,a+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),n.lensBlur2=n.lensBlur2||new Se.default(null,a+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var i=[],s=0;s<3;s++){var o=r+s*Math.PI*2/3;i.push([e*Math.sin(o)/this.width,e*Math.cos(o)/this.height])}var u=Math.pow(10,(0,he.clamp)(-1,t,1));return he.simpleShader.call(this,n.lensBlurPrePass,{power:u}),this._.extraTexture.ensureFormat(this._.texture),he.simpleShader.call(this,n.lensBlur0,{delta0:i[0]},this._.texture,this._.extraTexture),he.simpleShader.call(this,n.lensBlur1,{delta0:i[1],delta1:i[2]},this._.extraTexture,this._.extraTexture),he.simpleShader.call(this,n.lensBlur0,{delta0:i[1]}),this._.extraTexture.use(1),he.simpleShader.call(this,n.lensBlur2,{power:1/u,delta0:i[2]}),this};var ya=B,Se=Ca(ya),he=R,wa=U,ba=M,_a=Ea(ba);function Ea(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ca(e){return e&&e.__esModule?e:{default:e}}var ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.default=function(e,t,r,n,a,i){var s=Pa.get("gl");s.tiltShift=s.tiltShift||new Sa.default(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+ka.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var o=r-e,u=n-t,h=Math.sqrt(o*o+u*u);return $t.simpleShader.call(this,s.tiltShift,{blurRadius:a,gradientRadius:i,start:[e,t],end:[r,n],delta:[o/h,u/h],texSize:[this.width,this.height]}),$t.simpleShader.call(this,s.tiltShift,{blurRadius:a,gradientRadius:i,start:[e,t],end:[r,n],delta:[-u/h,o/h],texSize:[this.width,this.height]}),this};var Ta=B,Sa=Oa(Ta),$t=R,ka=U,Aa=M,Pa=Ma(Aa);function Ma(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Oa(e){return e&&e.__esModule?e:{default:e}}var lt={};Object.defineProperty(lt,"__esModule",{value:!0});lt.default=function(e){var t=Da.get("gl");return t.triangleBlur=t.triangleBlur||new Ia.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Fa.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),Nt.simpleShader.call(this,t.triangleBlur,{delta:[e/this.width,0]}),Nt.simpleShader.call(this,t.triangleBlur,{delta:[0,e/this.height]}),this};var Ra=B,Ia=La(Ra),Nt=R,Fa=U,Ba=M,Da=za(Ba);function za(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function La(e){return e&&e.__esModule?e:{default:e}}var ut={};Object.defineProperty(ut,"__esModule",{value:!0});ut.default=function(e,t,r){var n=Wa.get("gl");return n.zoomBlur=n.zoomBlur||new Na.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+Ua.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),Ga.simpleShader.call(this,n.zoomBlur,{center:[e,t],strength:r,texSize:[this.width,this.height]}),this};var $a=B,Na=Ha($a),Ga=R,Ua=U,qa=M,Wa=Xa(qa);function Xa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ha(e){return e&&e.__esModule?e:{default:e}}var ht={};Object.defineProperty(ht,"__esModule",{value:!0});ht.default=function(e,t,r,n){var a=Ka.get("gl");return a.colorHalftone=a.colorHalftone||new Ya.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),Va.simpleShader.call(this,a.colorHalftone,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this};var Za=B,Ya=ja(Za),Va=R,Qa=M,Ka=Ja(Qa);function Ja(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ja(e){return e&&e.__esModule?e:{default:e}}var ct={};Object.defineProperty(ct,"__esModule",{value:!0});ct.default=function(e,t,r,n){var a=ai.get("gl");return a.dotScreen=a.dotScreen||new ti.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),ri.simpleShader.call(this,a.dotScreen,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this};var ei=B,ti=si(ei),ri=R,ni=M,ai=ii(ni);function ii(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function si(e){return e&&e.__esModule?e:{default:e}}var dt={};Object.defineProperty(dt,"__esModule",{value:!0});dt.default=function(e){var t=ui.get("gl");return t.edgeWork1=t.edgeWork1||new Gt.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+qt.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),t.edgeWork2=t.edgeWork2||new Gt.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+qt.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),Ut.simpleShader.call(this,t.edgeWork1,{delta:[e/this.width,0]}),Ut.simpleShader.call(this,t.edgeWork2,{delta:[0,e/this.height]}),this};var oi=B,Gt=ci(oi),Ut=R,qt=U,li=M,ui=hi(li);function hi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ci(e){return e&&e.__esModule?e:{default:e}}var ft={};Object.defineProperty(ft,"__esModule",{value:!0});ft.default=function(e,t,r){var n=vi.get("gl");return n.hexagonalPixelate=n.hexagonalPixelate||new fi.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),pi.simpleShader.call(this,n.hexagonalPixelate,{center:[e,t],scale:r,texSize:[this.width,this.height]}),this};var di=B,fi=xi(di),pi=R,gi=M,vi=mi(gi);function mi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function xi(e){return e&&e.__esModule?e:{default:e}}var pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.default=function(e){var t=Ei.get("gl");return t.ink=t.ink||new wi.default(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),bi.simpleShader.call(this,t.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this};var yi=B,wi=Ti(yi),bi=R,_i=M,Ei=Ci(_i);function Ci(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ti(e){return e&&e.__esModule?e:{default:e}}var gt={};Object.defineProperty(gt,"__esModule",{value:!0});gt.default=function(e,t,r,n){var a=Ai.get("gl");return a.bulgePinch=a.bulgePinch||(0,Si.warpShader)("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),Wt.simpleShader.call(this,a.bulgePinch,{radius:r,strength:(0,Wt.clamp)(-1,n,1),center:[e,t],texSize:[this.width,this.height]}),this};var Si=U,Wt=R,ki=M,Ai=Pi(ki);function Pi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var vt={},ge={};Object.defineProperty(ge,"__esModule",{value:!0});ge.getSquareToQuad=Mi;ge.getInverse=Oi;ge.multiply=Ri;function Mi(e,t,r,n,a,i,s,o){var u=r-a,h=n-i,c=s-a,p=o-i,f=e-r+a-s,d=t-n+i-o,m=u*p-c*h,x=(f*p-c*d)/m,w=(u*d-f*h)/m;return[r-e+x*r,n-t+x*n,x,s-e+w*s,o-t+w*o,w,e,t,1]}function Oi(e){var t=e[0],r=e[1],n=e[2],a=e[3],i=e[4],s=e[5],o=e[6],u=e[7],h=e[8],c=t*i*h-t*s*u-r*a*h+r*s*o+n*a*u-n*i*o;return[(i*h-s*u)/c,(n*u-r*h)/c,(r*s-n*i)/c,(s*o-a*h)/c,(t*h-n*o)/c,(n*a-t*s)/c,(a*u-i*o)/c,(r*o-t*u)/c,(t*i-r*a)/c]}function Ri(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}Object.defineProperty(vt,"__esModule",{value:!0});vt.default=function(e,t,r){var n=zi.get("gl");if(n.matrixWarp=n.matrixWarp||(0,Ii.warpShader)("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),e=Array.prototype.concat.apply([],e),e.length==4)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(e.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return Bi.simpleShader.call(this,n.matrixWarp,{matrix:t?(0,Fi.getInverse)(e):e,texSize:[this.width,this.height],useTextureSpace:r|0}),this};var Ii=U,Fi=ge,Bi=R,Di=M,zi=Li(Di);function Li(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.default=function(e,t){var r=ke.getSquareToQuad.apply(null,t),n=ke.getSquareToQuad.apply(null,e),a=(0,ke.multiply)((0,ke.getInverse)(r),n);return this.matrixWarp(a)};var ke=ge,xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.default=function(e,t,r,n){var a=Ui.get("gl");return a.swirl=a.swirl||(0,$i.warpShader)("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),Ni.simpleShader.call(this,a.swirl,{radius:r,center:[e,t],angle:n,texSize:[this.width,this.height]}),this};var $i=U,Ni=R,Gi=M,Ui=qi(Gi);function qi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ke;Object.defineProperty(e,"brightnessContrast",{enumerable:!0,get:function(){return v(t).default}});var r=Je;Object.defineProperty(e,"curves",{enumerable:!0,get:function(){return v(r).default}});var n=je;Object.defineProperty(e,"denoise",{enumerable:!0,get:function(){return v(n).default}});var a=et;Object.defineProperty(e,"hueSaturation",{enumerable:!0,get:function(){return v(a).default}});var i=tt;Object.defineProperty(e,"noise",{enumerable:!0,get:function(){return v(i).default}});var s=rt;Object.defineProperty(e,"sepia",{enumerable:!0,get:function(){return v(s).default}});var o=nt;Object.defineProperty(e,"unsharpMask",{enumerable:!0,get:function(){return v(o).default}});var u=at;Object.defineProperty(e,"vibrance",{enumerable:!0,get:function(){return v(u).default}});var h=it;Object.defineProperty(e,"vignette",{enumerable:!0,get:function(){return v(h).default}});var c=st;Object.defineProperty(e,"lensBlur",{enumerable:!0,get:function(){return v(c).default}});var p=ot;Object.defineProperty(e,"tiltShift",{enumerable:!0,get:function(){return v(p).default}});var f=lt;Object.defineProperty(e,"triangleBlur",{enumerable:!0,get:function(){return v(f).default}});var d=ut;Object.defineProperty(e,"zoomBlur",{enumerable:!0,get:function(){return v(d).default}});var m=ht;Object.defineProperty(e,"colorHalftone",{enumerable:!0,get:function(){return v(m).default}});var x=ct;Object.defineProperty(e,"dotScreen",{enumerable:!0,get:function(){return v(x).default}});var w=dt;Object.defineProperty(e,"edgeWork",{enumerable:!0,get:function(){return v(w).default}});var S=ft;Object.defineProperty(e,"hexagonalPixelate",{enumerable:!0,get:function(){return v(S).default}});var A=pt;Object.defineProperty(e,"ink",{enumerable:!0,get:function(){return v(A).default}});var P=gt;Object.defineProperty(e,"bulgePinch",{enumerable:!0,get:function(){return v(P).default}});var b=vt;Object.defineProperty(e,"matrixWarp",{enumerable:!0,get:function(){return v(b).default}});var I=mt;Object.defineProperty(e,"perspective",{enumerable:!0,get:function(){return v(I).default}});var l=xt;Object.defineProperty(e,"swirl",{enumerable:!0,get:function(){return v(l).default}});function v(g){return g&&g.__esModule?g:{default:g}}})(ar);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.splineInterpolate=void 0;var t=R;Object.defineProperty(e,"splineInterpolate",{enumerable:!0,get:function(){return t.splineInterpolate}}),e.canvas=I;var r=M,n=p(r),a=Qe,i=c(a),s=B,o=c(s),u=ar,h=p(u);function c(l){return l&&l.__esModule?l:{default:l}}function p(l){if(l&&l.__esModule)return l;var v={};if(l!=null)for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&(v[g]=l[g]);return v.default=l,v}function f(l){return{_:l,loadContentsOf:function(g){n.set({gl:this._.gl}),this._.loadContentsOf(g)},destroy:function(){n.set({gl:this._.gl}),this._.destroy()}}}function d(l){return f(i.default.fromElement(l))}function m(l,v){var g=n.get("gl"),_=g.UNSIGNED_BYTE;if(g.getExtension("OES_texture_float")&&g.getExtension("OES_texture_float_linear")){var E=new i.default(100,100,g.RGBA,g.FLOAT);try{E.drawTo(function(){_=g.FLOAT})}catch{}E.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=l,this.height=v,this._.texture=new i.default(l,v,g.RGBA,_),this._.spareTexture=new i.default(l,v,g.RGBA,_),this._.extraTexture=this._.extraTexture||new i.default(0,0,g.RGBA,_),this._.flippedShader=this._.flippedShader||new o.default(null,"	    uniform sampler2D texture;	    varying vec2 texCoord;	    void main() {	      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));	    }	  "),this._.isInitialized=!0}function x(l,v,g){return(!this._.isInitialized||l._.width!=this.width||l._.height!=this.height)&&m.call(this,v||l._.width,g||l._.height),l._.use(),this._.texture.drawTo(function(){o.default.getDefaultShader().drawRect()}),this}function w(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function S(l){return l.parentNode.insertBefore(this,l),l.parentNode.removeChild(l),this}function A(){var l=n.get("gl"),v=new i.default(this._.texture.width,this._.texture.height,l.RGBA,l.UNSIGNED_BYTE);return this._.texture.use(),v.drawTo(function(){o.default.getDefaultShader().drawRect()}),f(v)}function P(){var l=n.get("gl"),v=this._.texture.width,g=this._.texture.height,_=new Uint8Array(v*g*4);return this._.texture.drawTo(function(){l.readPixels(0,0,v,g,l.RGBA,l.UNSIGNED_BYTE,_)}),_}function b(l){return function(){return n.set({gl:this._.gl}),l.apply(this,arguments)}}function I(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("canvas");try{n.set({gl:l.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{n.set({gl:null})}var v=n.get("gl");if(!v)throw"This browser does not support WebGL";return l._={gl:v,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},l.texture=b(d),l.draw=b(x),l.update=b(w),l.replace=b(S),l.contents=b(A),l.getPixelArray=b(P),l.brightnessContrast=b(h.brightnessContrast),l.hexagonalPixelate=b(h.hexagonalPixelate),l.hueSaturation=b(h.hueSaturation),l.colorHalftone=b(h.colorHalftone),l.triangleBlur=b(h.triangleBlur),l.unsharpMask=b(h.unsharpMask),l.perspective=b(h.perspective),l.matrixWarp=b(h.matrixWarp),l.bulgePinch=b(h.bulgePinch),l.tiltShift=b(h.tiltShift),l.dotScreen=b(h.dotScreen),l.edgeWork=b(h.edgeWork),l.lensBlur=b(h.lensBlur),l.zoomBlur=b(h.zoomBlur),l.noise=b(h.noise),l.denoise=b(h.denoise),l.curves=b(h.curves),l.swirl=b(h.swirl),l.ink=b(h.ink),l.vignette=b(h.vignette),l.vibrance=b(h.vibrance),l.sepia=b(h.sepia),l}})(rr);class ir{constructor(t=!0){y(this,"fxCanvas",rr.canvas());y(this,"textureMap");y(this,"cache");this.cache=t,t&&(this.textureMap=window._petpetTextureCache??(window._petpetTextureCache=new WeakMap))}getTexture(t){const r=this.cache&&this.textureMap.has(t)?this.textureMap.get(t):this.fxCanvas.texture(t);return this.cache&&!this.textureMap.has(t)&&this.textureMap.set(t,r),r}destroy(){if(this.cache)for(const[t,r]of this.textureMap.entries())this.textureMap.delete(t),r.destroy()}}class Wi extends ir{constructor(t=!0){super(t)}draw(t,r,n){const a=this.getTexture(r);let[i,s]=n[0],[o,u]=n[1],[h,c]=n[2],[p,f]=n[3];const[d,m]=n[4];i+=d,o+=d,h+=d,p+=d,s+=m,u+=m,c+=m,f+=m;const x=t.canvas;this.fxCanvas.draw(a,x.width,x.height).perspective([0,0,x.width,0,0,x.height,x.width,x.height],[i,s,p,f,o,u,h,c]).update(),t.drawImage(this.fxCanvas,0,0),this.cache||a.destroy()}}function Xi(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(e.width,0),r.scale(-1,1),r.drawImage(e,0,0),t}function Hi(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,a=e.height;t.width=n,t.height=a,r.drawImage(e,0,0);const i=r.getImageData(0,0,n,a),s=i.data;for(let o=0;o<s.length;o+=4){const u=s[o],h=s[o+1],c=s[o+2];u+h+c>383?(s[o]=255,s[o+1]=255,s[o+2]=255):(s[o]=0,s[o+1]=0,s[o+2]=0)}return r.putImageData(i,0,0),t}function Zi(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=Math.min(e.width,e.height)/2;return t.width=n*2,t.height=n*2,r.save(),r.beginPath(),r.arc(n,n,n,0,2*Math.PI),r.closePath(),r.clip(),r.drawImage(e,n-e.width/2,n-e.height/2),r.restore(),t}var G="INUMBER",ve="IOP1",me="IOP2",xe="IOP3",K="IVAR",se="IVARNAME",de="IFUNCALL",Oe="IFUNDEF",N="IEXPR",yt="IEXPREVAL",oe="IMEMBER",Re="IENDSTATEMENT",fe="IARRAY";function T(e,t){this.type=e,this.value=t??0}T.prototype.toString=function(){switch(this.type){case G:case ve:case me:case xe:case K:case se:case Re:return this.value;case de:return"CALL "+this.value;case Oe:return"DEF "+this.value;case fe:return"ARRAY "+this.value;case oe:return"."+this.value;default:return"Invalid Instruction"}};function Ie(e){return new T(ve,e)}function ee(e){return new T(me,e)}function sr(e){return new T(xe,e)}function Ye(e,t,r,n,a){for(var i=[],s=[],o,u,h,c,p=0;p<e.length;p++){var f=e[p],d=f.type;if(d===G||d===se)Array.isArray(f.value)?i.push.apply(i,Ye(f.value.map(function(m){return new T(G,m)}).concat(new T(fe,f.value.length)),t,r,n,a)):i.push(f);else if(d===K&&a.hasOwnProperty(f.value))f=new T(G,a[f.value]),i.push(f);else if(d===me&&i.length>1)u=i.pop(),o=i.pop(),c=r[f.value],f=new T(G,c(o.value,u.value)),i.push(f);else if(d===xe&&i.length>2)h=i.pop(),u=i.pop(),o=i.pop(),f.value==="?"?i.push(o.value?u.value:h.value):(c=n[f.value],f=new T(G,c(o.value,u.value,h.value)),i.push(f));else if(d===ve&&i.length>0)o=i.pop(),c=t[f.value],f=new T(G,c(o.value)),i.push(f);else if(d===N){for(;i.length>0;)s.push(i.shift());s.push(new T(N,Ye(f.value,t,r,n,a)))}else if(d===oe&&i.length>0)o=i.pop(),i.push(new T(G,o.value[f.value]));else{for(;i.length>0;)s.push(i.shift());s.push(f)}}for(;i.length>0;)s.push(i.shift());return s}function or(e,t,r){for(var n=[],a=0;a<e.length;a++){var i=e[a],s=i.type;if(s===K&&i.value===t)for(var o=0;o<r.tokens.length;o++){var u=r.tokens[o],h;u.type===ve?h=Ie(u.value):u.type===me?h=ee(u.value):u.type===xe?h=sr(u.value):h=new T(u.type,u.value),n.push(h)}else s===N?n.push(new T(N,or(i.value,t,r))):n.push(i)}return n}function ae(e,t,r){var n=[],a,i,s,o,u,h;if(wt(e))return Z(e,r);for(var c=e.length,p=0;p<c;p++){var f=e[p],d=f.type;if(d===G||d===se)n.push(f.value);else if(d===me)i=n.pop(),a=n.pop(),f.value==="and"?n.push(a?!!ae(i,t,r):!1):f.value==="or"?n.push(a?!0:!!ae(i,t,r)):f.value==="="?(o=t.binaryOps[f.value],n.push(o(a,ae(i,t,r),r))):(o=t.binaryOps[f.value],n.push(o(Z(a,r),Z(i,r))));else if(d===xe)s=n.pop(),i=n.pop(),a=n.pop(),f.value==="?"?n.push(ae(a?i:s,t,r)):(o=t.ternaryOps[f.value],n.push(o(Z(a,r),Z(i,r),Z(s,r))));else if(d===K)if(f.value in t.functions)n.push(t.functions[f.value]);else if(f.value in t.unaryOps&&t.parser.isOperatorEnabled(f.value))n.push(t.unaryOps[f.value]);else{var m=r[f.value];if(m!==void 0)n.push(m);else throw new Error("undefined variable: "+f.value)}else if(d===ve)a=n.pop(),o=t.unaryOps[f.value],n.push(o(Z(a,r)));else if(d===de){for(h=f.value,u=[];h-- >0;)u.unshift(Z(n.pop(),r));if(o=n.pop(),o.apply&&o.call)n.push(o.apply(void 0,u));else throw new Error(o+" is not a function")}else if(d===Oe)n.push(function(){for(var x=n.pop(),w=[],S=f.value;S-- >0;)w.unshift(n.pop());var A=n.pop(),P=function(){for(var b=Object.assign({},r),I=0,l=w.length;I<l;I++)b[w[I]]=arguments[I];return ae(x,t,b)};return Object.defineProperty(P,"name",{value:A,writable:!1}),r[A]=P,P}());else if(d===N)n.push(Yi(f,t));else if(d===yt)n.push(f);else if(d===oe)a=n.pop(),n.push(a[f.value]);else if(d===Re)n.pop();else if(d===fe){for(h=f.value,u=[];h-- >0;)u.unshift(n.pop());n.push(u)}else throw new Error("invalid Expression")}if(n.length>1)throw new Error("invalid Expression (parity)");return n[0]===0?0:Z(n[0],r)}function Yi(e,t,r){return wt(e)?e:{type:yt,value:function(n){return ae(e.value,t,n)}}}function wt(e){return e&&e.type===yt}function Z(e,t){return wt(e)?e.value(t):e}function bt(e,t){for(var r=[],n,a,i,s,o,u,h=0;h<e.length;h++){var c=e[h],p=c.type;if(p===G)typeof c.value=="number"&&c.value<0?r.push("("+c.value+")"):Array.isArray(c.value)?r.push("["+c.value.map(Xt).join(", ")+"]"):r.push(Xt(c.value));else if(p===me)a=r.pop(),n=r.pop(),s=c.value,t?s==="^"?r.push("Math.pow("+n+", "+a+")"):s==="and"?r.push("(!!"+n+" && !!"+a+")"):s==="or"?r.push("(!!"+n+" || !!"+a+")"):s==="||"?r.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+a+")))"):s==="=="?r.push("("+n+" === "+a+")"):s==="!="?r.push("("+n+" !== "+a+")"):s==="["?r.push(n+"[("+a+") | 0]"):r.push("("+n+" "+s+" "+a+")"):s==="["?r.push(n+"["+a+"]"):r.push("("+n+" "+s+" "+a+")");else if(p===xe)if(i=r.pop(),a=r.pop(),n=r.pop(),s=c.value,s==="?")r.push("("+n+" ? "+a+" : "+i+")");else throw new Error("invalid Expression");else if(p===K||p===se)r.push(c.value);else if(p===ve)n=r.pop(),s=c.value,s==="-"||s==="+"?r.push("("+s+n+")"):t?s==="not"?r.push("(!"+n+")"):s==="!"?r.push("fac("+n+")"):r.push(s+"("+n+")"):s==="!"?r.push("("+n+"!)"):r.push("("+s+" "+n+")");else if(p===de){for(u=c.value,o=[];u-- >0;)o.unshift(r.pop());s=r.pop(),r.push(s+"("+o.join(", ")+")")}else if(p===Oe){for(a=r.pop(),u=c.value,o=[];u-- >0;)o.unshift(r.pop());n=r.pop(),t?r.push("("+n+" = function("+o.join(", ")+") { return "+a+" })"):r.push("("+n+"("+o.join(", ")+") = "+a+")")}else if(p===oe)n=r.pop(),r.push(n+"."+c.value);else if(p===fe){for(u=c.value,o=[];u-- >0;)o.unshift(r.pop());r.push("["+o.join(", ")+"]")}else if(p===N)r.push("("+bt(c.value,t)+")");else if(p!==Re)throw new Error("invalid Expression")}return r.length>1&&(t?r=[r.join(",")]:r=[r.join(";")]),String(r[0])}function Xt(e){return typeof e=="string"?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function ce(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}function _t(e,t,r){r=r||{};for(var n=!!r.withMembers,a=null,i=0;i<e.length;i++){var s=e[i];s.type===K||s.type===se?!n&&!ce(t,s.value)?t.push(s.value):(a!==null&&(ce(t,a)||t.push(a)),a=s.value):s.type===oe&&n&&a!==null?a+="."+s.value:s.type===N?_t(s.value,t,r):a!==null&&(ce(t,a)||t.push(a),a=null)}a!==null&&!ce(t,a)&&t.push(a)}function X(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}X.prototype.simplify=function(e){return e=e||{},new X(Ye(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)};X.prototype.substitute=function(e,t){return t instanceof X||(t=this.parser.parse(String(t))),new X(or(this.tokens,e,t),this.parser)};X.prototype.evaluate=function(e){return e=e||{},ae(this.tokens,this,e)};X.prototype.toString=function(){return bt(this.tokens,!1)};X.prototype.symbols=function(e){e=e||{};var t=[];return _t(this.tokens,t,e),t};X.prototype.variables=function(e){e=e||{};var t=[];_t(this.tokens,t,e);var r=this.functions;return t.filter(function(n){return!(n in r)})};X.prototype.toJSFunction=function(e,t){var r=this,n=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+bt(this.simplify(t).tokens,!0)+"; }");return function(){return n.apply(r,arguments)}};var we="TEOF",O="TOP",Fe="TNUMBER",lr="TSTRING",J="TPAREN",pe="TBRACKET",Be="TCOMMA",Et="TNAME",Ct="TSEMICOLON";function ur(e,t,r){this.type=e,this.value=t,this.index=r}ur.prototype.toString=function(){return this.type+": "+this.value};function D(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}D.prototype.newToken=function(e,t,r){return new ur(e,t,r??this.pos)};D.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};D.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};D.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken(we,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};D.prototype.isString=function(){var e=!1,t=this.pos,r=this.expression.charAt(t);if(r==="'"||r==='"')for(var n=this.expression.indexOf(r,t+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,this.expression.charAt(n-1)!=="\\"){var a=this.expression.substring(t+1,n);this.current=this.newToken(lr,this.unescape(a),t),e=!0;break}n=this.expression.indexOf(r,n+1)}return e};D.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return e==="("||e===")"?(this.current=this.newToken(J,e),this.pos++,!0):!1};D.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return(e==="["||e==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(pe,e),this.pos++,!0):!1};D.prototype.isComma=function(){var e=this.expression.charAt(this.pos);return e===","?(this.current=this.newToken(Be,","),this.pos++,!0):!1};D.prototype.isSemicolon=function(){var e=this.expression.charAt(this.pos);return e===";"?(this.current=this.newToken(Ct,";"),this.pos++,!0):!1};D.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&r!=="."&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(n in this.consts)return this.current=this.newToken(Fe,this.consts[n]),this.pos+=n.length,!0}return!1};D.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(O,n),this.pos+=n.length,!0}return!1};D.prototype.isName=function(){for(var e=this.pos,t=e,r=!1;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()){if(t===this.pos&&(n==="$"||n==="_")){n==="_"&&(r=!0);continue}else if(t===this.pos||!r||n!=="_"&&(n<"0"||n>"9"))break}else r=!0}if(r){var a=this.expression.substring(e,t);return this.current=this.newToken(Et,a),this.pos+=a.length,!0}return!1};D.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);(t===" "||t==="	"||t===`
`||t==="\r")&&(e=!0,this.pos++,!(this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var Vi=/^[0-9a-f]{4}$/i;D.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var r=e.substring(0,t);t>=0;){var n=e.charAt(++t);switch(n){case"'":r+="'";break;case'"':r+='"';break;case"\\":r+="\\";break;case"/":r+="/";break;case"b":r+="\b";break;case"f":r+="\f";break;case"n":r+=`
`;break;case"r":r+="\r";break;case"t":r+="	";break;case"u":var a=e.substring(t+1,t+5);Vi.test(a)||this.parseError("Illegal escape sequence: \\u"+a),r+=String.fromCharCode(parseInt(a,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++t;var i=e.indexOf("\\",t);r+=e.substring(t,i<0?e.length:i),t=i}return r};D.prototype.isComment=function(){var e=this.expression.charAt(this.pos);return e==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};D.prototype.isRadixInteger=function(){var e=this.pos;if(e>=this.expression.length-2||this.expression.charAt(e)!=="0")return!1;++e;var t,r;if(this.expression.charAt(e)==="x")t=16,r=/^[0-9a-f]$/i,++e;else if(this.expression.charAt(e)==="b")t=2,r=/^[01]$/i,++e;else return!1;for(var n=!1,a=e;e<this.expression.length;){var i=this.expression.charAt(e);if(r.test(i))e++,n=!0;else break}return n&&(this.current=this.newToken(Fe,parseInt(this.expression.substring(a,e),t)),this.pos=e),n};D.prototype.isNumber=function(){for(var e=!1,t=this.pos,r=t,n=t,a=!1,i=!1,s;t<this.expression.length&&(s=this.expression.charAt(t),s>="0"&&s<="9"||!a&&s===".");)s==="."?a=!0:i=!0,t++,e=i;if(e&&(n=t),s==="e"||s==="E"){t++;for(var o=!0,u=!1;t<this.expression.length;){if(s=this.expression.charAt(t),o&&(s==="+"||s==="-"))o=!1;else if(s>="0"&&s<="9")u=!0,o=!1;else break;t++}u||(t=n)}return e?(this.current=this.newToken(Fe,parseFloat(this.expression.substring(r,t))),this.pos=t):this.pos=n,e};D.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if(t==="+"||t==="-"||t==="*"||t==="/"||t==="%"||t==="^"||t==="?"||t===":"||t===".")this.current=this.newToken(O,t);else if(t==="∙"||t==="•")this.current=this.newToken(O,"*");else if(t===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(O,">="),this.pos++):this.current=this.newToken(O,">");else if(t==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(O,"<="),this.pos++):this.current=this.newToken(O,"<");else if(t==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(O,"||"),this.pos++;else return!1;else if(t==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(O,"=="),this.pos++):this.current=this.newToken(O,t);else if(t==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(O,"!="),this.pos++):this.current=this.newToken(O,t);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=e,!1)};D.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)};D.prototype.getCoordinates=function(){var e=0,t,r=-1;do e++,t=this.pos-r,r=this.expression.indexOf(`
`,r+1);while(r>=0&&r<this.pos);return{line:e,column:t}};D.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)};function F(e,t,r){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=r.allowMemberAccess!==!1}F.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};F.prototype.tokenMatches=function(e,t){return typeof t>"u"?!0:Array.isArray(t)?ce(t,e.value):typeof t=="function"?t(e):e.value===t};F.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};F.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};F.prototype.accept=function(e,t){return this.nextToken.type===e&&this.tokenMatches(this.nextToken,t)?(this.next(),!0):!1};F.prototype.expect=function(e,t){if(!this.accept(e,t)){var r=this.tokens.getCoordinates();throw new Error("parse error ["+r.line+":"+r.column+"]: Expected "+(t||e))}};F.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;function r(a){return a.value in t}if(this.accept(Et)||this.accept(O,r))e.push(new T(K,this.current.value));else if(this.accept(Fe))e.push(new T(G,this.current.value));else if(this.accept(lr))e.push(new T(G,this.current.value));else if(this.accept(J,"("))this.parseExpression(e),this.expect(J,")");else if(this.accept(pe,"["))if(this.accept(pe,"]"))e.push(new T(fe,0));else{var n=this.parseArrayList(e);e.push(new T(fe,n))}else throw new Error("unexpected "+this.nextToken)};F.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),!this.parseUntilEndStatement(e,t)&&this.pushExpression(e,t))};F.prototype.pushExpression=function(e,t){for(var r=0,n=t.length;r<n;r++)e.push(t[r])};F.prototype.parseUntilEndStatement=function(e,t){return this.accept(Ct)?(this.nextToken&&this.nextToken.type!==we&&!(this.nextToken.type===J&&this.nextToken.value===")")&&t.push(new T(Re)),this.nextToken.type!==we&&this.parseExpression(t),e.push(new T(N,t)),!0):!1};F.prototype.parseArrayList=function(e){for(var t=0;!this.accept(pe,"]");)for(this.parseExpression(e),++t;this.accept(Be);)this.parseExpression(e),++t;return t};F.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(O,"=");){var t=e.pop(),r=[],n=e.length-1;if(t.type===de){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var a=0,i=t.value+1;a<i;a++){var s=n-a;e[s].type===K&&(e[s]=new T(se,e[s].value))}this.parseVariableAssignmentExpression(r),e.push(new T(N,r)),e.push(new T(Oe,t.value));continue}if(t.type!==K&&t.type!==oe)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(r),e.push(new T(se,t.value)),e.push(new T(N,r)),e.push(ee("="))}};F.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(O,"?");){var t=[],r=[];this.parseConditionalExpression(t),this.expect(O,":"),this.parseConditionalExpression(r),e.push(new T(N,t)),e.push(new T(N,r)),e.push(sr("?"))}};F.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(O,"or");){var t=[];this.parseAndExpression(t),e.push(new T(N,t)),e.push(ee("or"))}};F.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(O,"and");){var t=[];this.parseComparison(t),e.push(new T(N,t)),e.push(ee("and"))}};var Qi=["==","!=","<","<=",">=",">","in"];F.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(O,Qi);){var t=this.current;this.parseAddSub(e),e.push(ee(t.value))}};var Ki=["+","-","||"];F.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(O,Ki);){var t=this.current;this.parseTerm(e),e.push(ee(t.value))}};var Ji=["*","/","%"];F.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(O,Ji);){var t=this.current;this.parseFactor(e),e.push(ee(t.value))}};F.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;function r(a){return a.value in t}if(this.save(),this.accept(O,r)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===J&&this.nextToken.value==="("){this.restore(),this.parseExponential(e);return}else if(this.nextToken.type===Ct||this.nextToken.type===Be||this.nextToken.type===we||this.nextToken.type===J&&this.nextToken.value===")"){this.restore(),this.parseAtom(e);return}}var n=this.current;this.parseFactor(e),e.push(Ie(n.value))}else this.parseExponential(e)};F.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(O,"^");)this.parseFactor(e),e.push(ee("^"))};F.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(O,"!");)e.push(Ie("!"))};F.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;function r(i){return i.value in t}if(this.accept(O,r)){var n=this.current;this.parseAtom(e),e.push(Ie(n.value))}else for(this.parseMemberExpression(e);this.accept(J,"(");)if(this.accept(J,")"))e.push(new T(de,0));else{var a=this.parseArgumentList(e);e.push(new T(de,a))}};F.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(J,")");)for(this.parseExpression(e),++t;this.accept(Be);)this.parseExpression(e),++t;return t};F.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(O,".")||this.accept(pe,"[");){var t=this.current;if(t.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(Et),e.push(new T(oe,this.current.value))}else if(t.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(pe,"]"),e.push(ee("["))}else throw new Error("unexpected symbol: "+t.value)}};function ji(e,t){return Number(e)+Number(t)}function es(e,t){return e-t}function ts(e,t){return e*t}function rs(e,t){return e/t}function ns(e,t){return e%t}function as(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function is(e,t){return e===t}function ss(e,t){return e!==t}function os(e,t){return e>t}function ls(e,t){return e<t}function us(e,t){return e>=t}function hs(e,t){return e<=t}function cs(e,t){return!!(e&&t)}function ds(e,t){return!!(e||t)}function fs(e,t){return ce(t,e)}function ps(e){return(Math.exp(e)-Math.exp(-e))/2}function gs(e){return(Math.exp(e)+Math.exp(-e))/2}function vs(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function ms(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function xs(e){return Math.log(e+Math.sqrt(e*e-1))}function ys(e){return Math.log((1+e)/(1-e))/2}function Ht(e){return Math.log(e)*Math.LOG10E}function ws(e){return-e}function bs(e){return!e}function _s(e){return e<0?Math.ceil(e):Math.floor(e)}function Es(e){return Math.random()*(e||1)}function Zt(e){return Tt(e+1)}function Cs(e){return isFinite(e)&&e===Math.round(e)}var Ts=4.7421875,Xe=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function Tt(e){var t,r;if(Cs(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var n=e-2,a=e-1;n>1;)a*=n,n--;return a===0&&(a=1),a}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*Tt(1-e));if(e>=171.35)return 1/0;if(e>85){var i=e*e,s=i*e,o=s*e,u=o*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*i)-139/(51840*s)-571/(2488320*o)+163879/(209018880*u)+5246819/(75246796800*u*e))}--e,r=Xe[0];for(var h=1;h<Xe.length;++h)r+=Xe[h]/(e+h);return t=e+Ts+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*r}function Ss(e){return Array.isArray(e)?e.length:String(e).length}function Yt(){for(var e=0,t=0,r=0;r<arguments.length;r++){var n=Math.abs(arguments[r]),a;t<n?(a=t/n,e=e*a*a+1,t=n):n>0?(a=n/t,e+=a*a):e+=n}return t===1/0?1/0:t*Math.sqrt(e)}function Vt(e,t,r){return e?t:r}function ks(e,t){return typeof t>"u"||+t==0?Math.round(e):(e=+e,t=-+t,isNaN(e)||!(typeof t=="number"&&t%1===0)?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t))))}function As(e,t,r){return r&&(r[e]=t),t}function Ps(e,t){return e[t|0]}function Ms(e){return arguments.length===1&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function Os(e){return arguments.length===1&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function Rs(e,t){if(typeof e!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map(function(r,n){return e(r,n)})}function Is(e,t,r){if(typeof e!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(r))throw new Error("Second argument to fold is not an array");return r.reduce(function(n,a,i){return e(n,a,i)},t)}function Fs(e,t){if(typeof e!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter(function(r,n){return e(r,n)})}function Bs(e,t){if(!(Array.isArray(t)||typeof t=="string"))throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function Ds(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function zs(e){return(e>0)-(e<0)||+e}var Qt=1/3;function Ls(e){return e<0?-Math.pow(-e,Qt):Math.pow(e,Qt)}function $s(e){return Math.exp(e)-1}function Ns(e){return Math.log(1+e)}function Gs(e){return Math.log(e)/Math.LN2}function j(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||ps,cosh:Math.cosh||gs,tanh:Math.tanh||vs,asinh:Math.asinh||ms,acosh:Math.acosh||xs,atanh:Math.atanh||ys,sqrt:Math.sqrt,cbrt:Math.cbrt||Ls,log:Math.log,log2:Math.log2||Gs,ln:Math.log,lg:Math.log10||Ht,log10:Math.log10||Ht,expm1:Math.expm1||$s,log1p:Math.log1p||Ns,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||_s,"-":ws,"+":Number,exp:Math.exp,not:bs,length:Ss,"!":Zt,sign:Math.sign||zs},this.binaryOps={"+":ji,"-":es,"*":ts,"/":rs,"%":ns,"^":Math.pow,"||":as,"==":is,"!=":ss,">":os,"<":ls,">=":us,"<=":hs,and:cs,or:ds,in:fs,"=":As,"[":Ps},this.ternaryOps={"?":Vt},this.functions={random:Es,fac:Zt,min:Os,max:Ms,hypot:Math.hypot||Yt,pyt:Math.hypot||Yt,pow:Math.pow,atan2:Math.atan2,if:Vt,gamma:Tt,roundTo:ks,map:Rs,fold:Is,filter:Fs,indexOf:Bs,join:Ds},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}j.prototype.parse=function(e){var t=[],r=new F(this,new D(this,e),{allowMemberAccess:this.options.allowMemberAccess});return r.parseExpression(t),r.expect(we,"EOF"),new X(t,this)};j.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var hr=new j;j.parse=function(e){return hr.parse(e)};j.evaluate=function(e,t){return hr.parse(e).evaluate(t)};var Kt={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function Us(e){return Kt.hasOwnProperty(e)?Kt[e]:e}j.prototype.isOperatorEnabled=function(e){var t=Us(e),r=this.options.operators||{};return!(t in r)||!!r[t]};var ie={},cr={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.loop=Q.conditional=Q.parse=void 0;var qs=function e(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(r))r.forEach(function(s){return e(t,s,n,a)});else if(typeof r=="function")r(t,n,a,e);else{var i=Object.keys(r)[0];Array.isArray(r[i])?(a[i]={},e(t,r[i],n,a[i])):a[i]=r[i](t,n,a,e)}return n};Q.parse=qs;var Ws=function(t,r){return function(n,a,i,s){r(n,a,i)&&s(n,t,a,i)}};Q.conditional=Ws;var Xs=function(t,r){return function(n,a,i,s){for(var o=[],u=n.pos;r(n,a,i);){var h={};if(s(n,t,a,h),n.pos===u)break;u=n.pos,o.push(h)}return o}};Q.loop=Xs;var L={};Object.defineProperty(L,"__esModule",{value:!0});L.readBits=L.readArray=L.readUnsigned=L.readString=L.peekBytes=L.readBytes=L.peekByte=L.readByte=L.buildStream=void 0;var Hs=function(t){return{data:t,pos:0}};L.buildStream=Hs;var dr=function(){return function(t){return t.data[t.pos++]}};L.readByte=dr;var Zs=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+t]}};L.peekByte=Zs;var De=function(t){return function(r){return r.data.subarray(r.pos,r.pos+=t)}};L.readBytes=De;var Ys=function(t){return function(r){return r.data.subarray(r.pos,r.pos+t)}};L.peekBytes=Ys;var Vs=function(t){return function(r){return Array.from(De(t)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};L.readString=Vs;var Qs=function(t){return function(r){var n=De(2)(r);return t?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};L.readUnsigned=Qs;var Ks=function(t,r){return function(n,a,i){for(var s=typeof r=="function"?r(n,a,i):r,o=De(t),u=new Array(s),h=0;h<s;h++)u[h]=o(n);return u}};L.readArray=Ks;var Js=function(t,r,n){for(var a=0,i=0;i<n;i++)a+=t[r+i]&&Math.pow(2,n-i-1);return a},js=function(t){return function(r){for(var n=dr()(r),a=new Array(8),i=0;i<8;i++)a[7-i]=!!(n&1<<i);return Object.keys(t).reduce(function(s,o){var u=t[o];return u.length?s[o]=Js(a,u.index,u.length):s[o]=a[u.index],s},{})}};L.readBits=js;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=Q,r=L,n={blocks:function(f){for(var d=0,m=[],x=f.data.length,w=0,S=(0,r.readByte)()(f);S!==d&&S;S=(0,r.readByte)()(f)){if(f.pos+S>=x){var A=x-f.pos;m.push((0,r.readBytes)(A)(f)),w+=A;break}m.push((0,r.readBytes)(S)(f)),w+=S}for(var P=new Uint8Array(w),b=0,I=0;I<m.length;I++)P.set(m[I],b),b+=m[I].length;return P}},a=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},function(p){var f=(0,r.peekBytes)(2)(p);return f[0]===33&&f[1]===249}),i=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,function(p,f,d){return Math.pow(2,d.descriptor.lct.size+1)})},function(p,f,d){return d.descriptor.lct.exists}),{data:[{minCodeSize:(0,r.readByte)()},n]}]},function(p){return(0,r.peekByte)()(p)===44}),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(f,d,m){return(0,r.readBytes)(m.text.blockSize)(f)}},n]},function(p){var f=(0,r.peekBytes)(2)(p);return f[0]===33&&f[1]===1}),o=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(f,d,m){return(0,r.readString)(m.blockSize)(f)}},n]},function(p){var f=(0,r.peekBytes)(2)(p);return f[0]===33&&f[1]===255}),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},function(p){var f=(0,r.peekBytes)(2)(p);return f[0]===33&&f[1]===254}),h=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,function(p,f){return Math.pow(2,f.lsd.gct.size+1)})},function(p,f){return f.lsd.gct.exists}),{frames:(0,t.loop)([a,o,u,i,s],function(p){var f=(0,r.peekByte)()(p);return f===33||f===44})}],c=h;e.default=c})(cr);var ze={};Object.defineProperty(ze,"__esModule",{value:!0});ze.deinterlace=void 0;var eo=function(t,r){for(var n=new Array(t.length),a=t.length/r,i=function(f,d){var m=t.slice(d*r,(d+1)*r);n.splice.apply(n,[f*r,r].concat(m))},s=[0,4,2,1],o=[8,8,4,2],u=0,h=0;h<4;h++)for(var c=s[h];c<a;c+=o[h])i(c,u),u++;return n};ze.deinterlace=eo;var Le={};Object.defineProperty(Le,"__esModule",{value:!0});Le.lzw=void 0;var to=function(t,r,n){var a=4096,i=-1,s=n,o,u,h,c,p,f,d,l,m,x,I,w,v,g,E,_,S=new Array(n),A=new Array(a),P=new Array(a),b=new Array(a+1);for(w=t,u=1<<w,p=u+1,o=u+2,d=i,c=w+1,h=(1<<c)-1,m=0;m<u;m++)A[m]=0,P[m]=m;var I,l,v,g,_,E;for(I=l=v=g=_=E=0,x=0;x<s;){if(g===0){if(l<c){I+=r[E]<<l,l+=8,E++;continue}if(m=I&h,I>>=c,l-=c,m>o||m==p)break;if(m==u){c=w+1,h=(1<<c)-1,o=u+2,d=i;continue}if(d==i){b[g++]=P[m],d=m,v=m;continue}for(f=m,m==o&&(b[g++]=v,m=d);m>u;)b[g++]=P[m],m=A[m];v=P[m]&255,b[g++]=v,o<a&&(A[o]=d,P[o]=v,o++,!(o&h)&&o<a&&(c++,h+=o)),d=f}g--,S[_++]=b[g],x++}for(x=_;x<s;x++)S[x]=0;return S};Le.lzw=to;Object.defineProperty(ie,"__esModule",{value:!0});var fr=ie.decompressFrames=ie.decompressFrame=pr=ie.parseGIF=void 0,ro=oo(cr),no=Q,ao=L,io=ze,so=Le;function oo(e){return e&&e.__esModule?e:{default:e}}var lo=function(t){var r=new Uint8Array(t);return(0,no.parse)((0,ao.buildStream)(r),ro.default)},pr=ie.parseGIF=lo,uo=function(t){for(var r=t.pixels.length,n=new Uint8ClampedArray(r*4),a=0;a<r;a++){var i=a*4,s=t.pixels[a],o=t.colorTable[s]||[0,0,0];n[i]=o[0],n[i+1]=o[1],n[i+2]=o[2],n[i+3]=s!==t.transparentIndex?255:0}return n},gr=function(t,r,n){if(!t.image){console.warn("gif frame does not have associated image.");return}var a=t.image,i=a.descriptor.width*a.descriptor.height,s=(0,so.lzw)(a.data.minCodeSize,a.data.blocks,i);a.descriptor.lct.interlaced&&(s=(0,io.deinterlace)(s,a.descriptor.width));var o={pixels:s,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return a.descriptor.lct&&a.descriptor.lct.exists?o.colorTable=a.lct:o.colorTable=r,t.gce&&(o.delay=(t.gce.delay||10)*10,o.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(o.transparentIndex=t.gce.transparentColorIndex)),n&&(o.patch=uo(o)),o};ie.decompressFrame=gr;var ho=function(t,r){return t.frames.filter(function(n){return n.image}).map(function(n){return gr(n,t.gct,r)})};fr=ie.decompressFrames=ho;function co(e){const t=pr(e),r=fr(t,!0),n=[];for(let a of r){const{width:i,height:s,left:o,top:u}=a.dims,h=document.createElement("canvas"),c=h.getContext("2d");h.width=i,h.height=s,c.putImageData(new ImageData(a.patch,i,s),o,u),n.push(h)}return n}async function fo(e){const t=new ImageDecoder({data:e,type:"image/gif"});await t.tracks.ready,await t.completed;const r=t.tracks.selectedTrack.frameCount,n=[];for(let a=0;a<r;a++){const i=(await t.decode({frameIndex:a})).image;i.width=i.codedWidth,i.height=i.codedHeight,n.push(ye(i)),i.close()}return n}async function po(e){const t=await e.arrayBuffer();return window.ImageDecoder?fo(t):co(t)}const go={frameCount:0,startTime:0};class vo{constructor(t,r=1){y(this,"blob");y(this,"video");y(this,"length");y(this,"frames");y(this,"initPromise");this.blob=t,this.length=r,this.initPromise=this.init()}setFrameCount(t){return this.length=t,this.initPromise=this.init(),this}async init(){this.frames=[];const t=document.createElement("video");t.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(a=>t.addEventListener("loadeddata",a));const{startTime:r}=go,n=(this.video.duration-r)/this.length;for(let a=0;a<this.length;a++)this.video.currentTime=a*n+r,await new Promise(i=>this.video.oncanplay=i),this.frames[a]=ye(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function mo(e,t){if(t=t,t<0)throw new Error(`video frame count ${t} must >1`);return new vo(e,t).getFrames()}const xo=document.createElement("canvas"),W=xo.getContext("2d");W.textBaseline="bottom";W.textAlign="left";var yo=(e=>(e.LEFT="LEFT",e.RIGHT="RIGHT",e.CENTER="CENTER",e))(yo||{}),wo=(e=>(e.NONE="NONE",e.BREAK="BREAK",e.ZOOM="ZOOM",e))(wo||{}),bo=(e=>(e.PLAIN="PLAIN",e.BOLD="BOLD",e.ITALIC="ITALIC",e))(bo||{});const Jt={text:"default text",color:"#191919",pos:[50,50],size:16,font:"arial",style:"PLAIN",wrap:"NONE",align:"CENTER",position:["LEFT","TOP"],strokeColor:"#ffffff",strokeSize:0},re=class{constructor(t=Jt){y(this,"template");y(this,"fontStyle");y(this,"pixelSize");y(this,"defaultPixelSize");y(this,"width");y(this,"height");y(this,"backgroundSize");y(this,"drawOptions");y(this,"onChangeCallback");y(this,"disabled",!1);var r,n;this.template={...Jt,...t},this.defaultPixelSize=t.size*re.dpiScale,this.pixelSize=this.defaultPixelSize,this.template.color=tr(this.template.color),this.style=this.template.style,this.template.font=((n=(r=this.template)==null?void 0:r.font)==null?void 0:n.replace(" ","-"))||re.DEFAULT_FONT_FAMILY,this.template.text=this.template.text.replace(re.TEXT_VAR_REGEX,(a,i)=>i),this.setDrawOptions()}set size(t){this.pixelSize=t*re.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:t,wrap:r}=this.template;W.font=`${this.fontStyle} ${this.pixelSize}px ${t.replace(" ","-")}`,this.width=0,this.height=0;const n=this.template.text.split(`
`),a=[];let i=0;switch(r){case"NONE":{for(const s of n){const[o,u,h,c]=this.getPosition(W.measureText(s),i++);this.width=Math.max(this.width,h),this.height=c,a.push([s,o,u])}break}case"BREAK":{const s=this.template.pos[2]||re.DEFAULT_MAX_WIDTH;let o,u;for(let h of n)if(o=W.measureText(h),u=o.width,u>s){let c,p,f;for(;u>s;){for(c=0,p=0,f="";p<s;)c++,f=h.substr(0,c),p=W.measureText(h.substr(0,c)).width;c--,f=f.substr(0,c);const d=c;if(h.substr(c,1)!=" "){for(;h.substr(c,1)!=" "&&c!=0;)c--;c==0&&(c=d),f=h.substr(0,c)}h=h.substr(c);const[m,x,w,S]=this.getPosition(W.measureText(f),i++);this.width=Math.max(this.width,w),this.height=S,u=w,a.push([f,m,x])}}else{const[c,p,f,d]=this.getPosition(o,i++);this.width=Math.max(this.width,f),this.height=d,a.push([h,c,p])}break}case"ZOOM":{const s=this.template.pos[2]||re.DEFAULT_MAX_WIDTH;W.font=`${this.fontStyle} ${this.defaultPixelSize}px ${t}`;let o=Math.max(...n.map(c=>W.measureText(c).width));const h=s/(o||1)*this.defaultPixelSize;this.pixelSize=h,W.font=`${this.fontStyle} ${h}px ${t}`;for(const c of n){const[p,f,d,m]=this.getPosition(W.measureText(c),i++);this.width=Math.max(this.width,d),this.height=m,a.push([c,p,f])}break}}return this.drawOptions=a,a}getPosition(t,r){const[n,a]=this.template.pos,i=t.width,s=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,o=s*r,u=s*(r+1);switch(this.template.align){case"LEFT":return[n,a+o,i,u];case"RIGHT":return[n-i,a+o,i,u];case"CENTER":return[n-i/2,a+o,i,u]}}get hidden(){return this.disabled}set hidden(t){this.disabled=t,this.onChangeCallback&&this.onChangeCallback(this)}get size(){return this.template.size}set style(t){this.fontStyle=t==="PLAIN"?"normal":t.toLowerCase(),this.template.style=t}get style(){return this.template.style}draw(t){if(this.disabled)return;let{color:r,align:n,font:a,strokeColor:i,strokeSize:s}=this.template;t.font=`${this.fontStyle} ${this.pixelSize}px ${a}`,t.fillStyle=r,t.textBaseline=n==="CENTER"?"middle":"bottom";for(let o of this.drawOptions)t.fillText(...o);if(i&&s){t.strokeStyle=i,t.lineWidth=s;for(let o of this.drawOptions)t.strokeText(...o)}}get settingObject(){const t=this;return new Proxy({get x(){return t.template.pos[0]},set x(r){t.template.pos[0]=r},get y(){return t.template.pos[1]},set y(r){t.template.pos[1]=r},text:t.template.text,color:t.template.color,get size(){return t.template.wrap==="ZOOM"?void 0:t.pixelSize},set size(r){t.pixelSize=r},font:t.template.font,set fontStyle(r){t.fontStyle=r},get fontStyle(){return t.fontStyle},strokeSize:t.template.strokeSize,strokeColor:t.template.strokeColor,get hidden(){return t.disabled},set hidden(r){t.hidden=r},_delete:()=>t.hidden=!0},{set:(r,n,a)=>(r[n]=a,t.template[n]=a,t.disabled||(this.setDrawOptions(),t.onChangeCallback&&t.onChangeCallback(this)),!0)})}get settingAttributes(){const t={type:"range",min:0,step:1};return{x:{...t,max:this.backgroundSize?this.backgroundSize[0]:1e3},y:{...t,max:this.backgroundSize?this.backgroundSize[1]:1e3},size:{...t,max:256},fontStyle:{type:"select",options:["normal","bold","italic","bold italic"]},strokeSize:{...t,max:16},font:{type:"font"}}}set onchange(t){this.onChangeCallback=t}};let te=re;y(te,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),y(te,"DEFAULT_MAX_WIDTH",300),y(te,"DEFAULT_FONT_FAMILY","Arial"),y(te,"dpiScale",(window.devicePixelRatio||1)*96/72);class St{constructor(t){y(this,"arr");y(this,"cacheCtx");y(this,"topAvatars",[]);y(this,"bottomAvatars",[]);y(this,"sizeMap",Object.create(null));y(this,"needUpdate",!1);y(this,"cacheCount",0);if(this.arr=t,!(t!=null&&t.length))return;let r=0;for(const n of t)n.onchange=()=>this.needUpdate=!0,this.sizeMap[`text${r}Width`]=n.width,this.sizeMap[`text${r}Height`]=n.height,r++}draw(t){for(const r of this.arr)r.draw(t)}setCacheArea(t,r){for(const a of this.arr)a.backgroundSize=[t,r];const n=document.createElement("canvas");n.width=t,n.height=r,this.cacheCtx=n.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache(),this.needUpdate=!1,this.cacheCount++}get cacheCanvas(){return this.needUpdate&&this.updateCache(),this.cacheCtx.canvas}addTextModel(){const t=new te;return this.arr.push(t),this.needUpdate=!0,t.onchange=()=>this.needUpdate=!0,t.backgroundSize=[this.cacheCtx.canvas.width,this.cacheCtx.canvas.height],t}get texts(){return this.arr}static createFrom(t){return new St(t.map(r=>new te(r)))}}const _o=6;class kt{constructor(t){y(this,"hasTemplate",!1);y(this,"width");y(this,"height");y(this,"color");y(this,"frames");y(this,"loadingPromise");t&&([this.width,this.height]=t.size.map(r=>typeof r=="number"?r:j.parse(r)),this.color=tr(this.color),this.hasTemplate=!0)}setUrl(t,r){this.loadingPromise=kt.fetchImages(t,r).then(n=>this.frames=n)}set images(t){this.frames=t}async generate(t){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(r=>{const n=this.getCtx(t);return n.drawImage(r,0,0),n.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(t).canvas];throw new Error("can not load background")}getCtx(t){const r=document.createElement("canvas"),n=i=>typeof i=="number"?i:i.evaluate(t);r.width=n(this.width),r.height=n(this.height);const a=r.getContext("2d");return a.fillStyle=this.color,a.fillRect(0,0,r.width,r.height),a}static async fetchImages(t,r){if(r!==void 0){if(r<=0)return[];const o=[];for(let u=0;u<r;u++)o.push(fetch(`${t}/${u}.png`).then(h=>h.blob()).then(Pe));return Promise.all(o)}let n=!1,a=new Set;const i=[];let s=0;for(;!n;){a.size>=_o&&await Promise.race(a);const o=s++,h=fetch(`${t}/${o}.png`).then(c=>c.blob()).then(Pe).then(c=>{i[o]=c}).catch(()=>n=!0).then(()=>a.delete(h));a.add(h)}return await Promise.all(a),i}}var Eo=(e=>(e.IMG="IMG",e.GIF="GIF",e))(Eo||{});const Co={type:void 0,avatar:[],text:[],background:void 0,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class Wo{constructor(t,r){y(this,"type");y(this,"template");y(this,"initPromise");y(this,"avatarList");y(this,"backgroundModel");y(this,"textModelList");y(this,"backgroundLength");this.template={...Co,...t},this.type=t.type,this.textModelList=St.createFrom(this.template.text),this.backgroundModel=new kt(this.template.background),r&&(this.background=r),this.initPromise=this.init()}set background(t){if(typeof t=="string")this.backgroundModel.setUrl(t,this.backgroundLength);else if(Array.isArray(t))this.backgroundModel.images=t;else throw console.warn(t),new Error("Unknown background")}async init(){}async generate(t,r){const n=At.createFrom(this.template.avatar,t,r),a=await n.getSizeMap(),i=await this.backgroundModel.generate(a);return new To(this.template,i,n,this.textModelList)}}class To{constructor(t,r,n,a){y(this,"template");y(this,"canvas");y(this,"ctx");y(this,"backgrounds");y(this,"avatars");y(this,"texts");y(this,"length");y(this,"intervalId");y(this,"initPromise");y(this,"userDelay");y(this,"i",0);y(this,"framesCache",[]);y(this,"resolveFramesCachedPromise");y(this,"framesCachedPromise",new Promise(t=>this.resolveFramesCachedPromise=t));y(this,"prevTextCacheCount");y(this,"prevTextedFramesCache");const i=document.createElement("canvas");this.canvas=i,i.width=r[0].width,i.height=r[0].height,this.ctx=i.getContext("2d"),this.template=t,this.backgrounds=r,this.avatars=n,this.texts=a,this.texts.setCacheArea(i.width,i.height),this.initPromise=this.init()}async init(){const{posLength:t,frameLength:r=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?r:this.backgrounds.length}async replay(){return this.i=0,await this.play(),new Promise(t=>setTimeout(t,this.delay*this.length))}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}playReverse(){this.intervalId=window.setInterval(async()=>{await this.drawAvatarsCache(this.length-1-this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(t){if(!t){this.stop();return}this.userDelay=t,t>0?this.play():this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(t){return t<this.backgrounds.length?this.backgrounds[t]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}async getTextedFrames(){const t=await this.getFrames();return this.texts.texts.length===0?t:this.prevTextCacheCount===this.texts.cacheCount?this.prevTextedFramesCache:(this.prevTextedFramesCache=t.map(r=>{const n=ye(r);return n.getContext("2d").drawImage(this.texts.cacheCanvas,0,0),n}),this.prevTextCacheCount=this.texts.cacheCount,this.prevTextedFramesCache)}drawTextsCache(){this.ctx.drawImage(this.texts.cacheCanvas,0,0)}drawTexts(){this.texts.draw(this.ctx)}async drawAvatarsCache(t){if(this.framesCache[t]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[t],0,0);return}await this.drawAvatars(t),this.framesCache[t]=ye(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async drawAvatars(t){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const r of this.avatars.bottomAvatars)await r.draw(this.ctx,t);this.ctx.drawImage(this.getBackground(t),0,0);for(const r of this.avatars.topAvatars)await r.draw(this.ctx,t)}get settingObject(){const t=this;return this.length===1?{}:{set delay(r){t.delay=r},get delay(){return t.delay},play:()=>this.play(),stop:()=>this.stop()}}async destroy(){await this.stop(),this.avatars.destroy(),this.canvas.remove()}}class So extends ir{constructor(r=!0){super(r);y(this,"centerX",.5);y(this,"centerY",.5)}build(r,n){if(!(n!=null&&n.length))return r;const a=this.getTexture(r),i=document.createElement("canvas");i.width=r.width,i.height=r.height;const s=i.getContext("2d"),o=r.width/2,u=r.height/2,h=Math.min(o,u);this.fxCanvas.draw(a);for(const c of n)switch(c.type){case H.SWIRL:this.fxCanvas.swirl(o,u,c.radius||h,c.angle||3);break;case H.BULGE:this.fxCanvas.bulgePinch(o,u,c.radius||h,c.strength||.5);break;case H.BLUR:this.fxCanvas.triangleBlur(c.radius||10);break;case H.CONTRAST:this.fxCanvas.brightnessContrast(c.brightness||0,c.contrast||0);break;case H.HSB:this.fxCanvas.hueSaturation(c.hue||0,c.saturation||0);break;case H.HALFTONE:this.fxCanvas.colorHalftone(o,u,c.angle||0,c.radius||4);break;case H.DOT_SCREEN:this.fxCanvas.dotScreen(o,u,c.angle||0,c.radius||4);break;case H.NOISE:this.fxCanvas.noise(c.amount||.25);break;case H.DENOISE:this.fxCanvas.denoise(c.exponent||20);break;default:console.warn("Unknown filter type",c)}return this.fxCanvas.update(),s.drawImage(this.fxCanvas,0,0),i}}var ko=(e=>(e.FROM="FROM",e.TO="TO",e.GROUP="GROUP",e.BOT="BOT",e.RANDOM="RANDOM",e))(ko||{}),Ao=(e=>(e.ZOOM="ZOOM",e.DEFORM="DEFORM",e))(Ao||{}),Po=(e=>(e.NONE="NONE",e.PIXEL="PIXEL",e.PERCENT="PERCENT",e))(Po||{}),Mo=(e=>(e.CONTAIN="CONTAIN",e.COVER="COVER",e.FILL="FILL",e))(Mo||{}),Oo=(e=>(e.MIRROR="MIRROR",e.FLIP="FLIP",e.GRAY="GRAY",e.BINARIZATION="BINARIZATION",e))(Oo||{}),H=(e=>(e.SWIRL="SWIRL",e.BULGE="BULGE",e.BLUR="BLUR",e.CONTRAST="CONTRAST",e.HSB="HSB",e.HALFTONE="HALFTONE",e.DOT_SCREEN="DOT_SCREEN",e.NOISE="NOISE",e.DENOISE="DENOISE",e))(H||{});const Ro={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,origin:"DEFAULT",avatarOnTop:!0,angle:0,opacity:1};function Io(e){if(e.compiled)return e;const t={...Ro,...e},r=t.pos;let n;switch(t.posType){case"ZOOM":n=typeof r[0]!="object"?[ue(r,4)]:r.map(a=>ue(a,4)),t.pos=n.map(a=>a.map(i=>typeof i=="number"?i:j.parse(i)));break;case"DEFORM":try{n=r.map(a=>ue(a,5).map(i=>ue(i,2)))}catch{n=[ue(r,5).map(i=>ue(i,2))]}t.pos=n.map(a=>a.map(i=>i.map(s=>typeof s=="number"?s:j.parse(s))));break}return t.compiled=!0,t}class Fo extends Lr{constructor(r,n,a){super();y(this,"type");y(this,"template");y(this,"originBlob");y(this,"frames");y(this,"pos");y(this,"initPromise");y(this,"deformer");y(this,"filterRenderer");this.type=r.type;const i=a&&a[this.type.toString().toLowerCase()];if(this.template=Io(i?{...r,...i}:r),this.originBlob=n[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.updateTemplate()}async updateTemplate(){await this.setCrop(),await this.setStyle(),await this.setFilter(),await this.setRound(),await this.setPos()}async loadFile(){const r=this.originBlob;if(r.type.startsWith("video/"))this.frames=await mo(r,this.template.pos.length);else if(!r.type.startsWith("image"))throw new Error("不支持的格式: "+r.type);r.type==="image/gif"?this.frames=await po(r):this.frames=[await Pe(r)]}setCrop(){const r=this.template.cropType;r!=="NONE"&&(this.frames=this.frames.map(n=>Mt(n,this.template.crop,r==="PERCENT")))}setStyle(){for(const r of this.template.style)switch(r){case"FLIP":this.frames=this.frames.map($r);break;case"MIRROR":this.frames=this.frames.map(Xi);break;case"GRAY":this.frames=this.frames.map(Nr);break;case"BINARIZATION":this.frames=this.frames.map(Hi);break;default:console.warn("Unknown style "+r)}}setFilter(){var r,n;(n=(r=this.template)==null?void 0:r.filter)!=null&&n.length&&(this.filterRenderer=new So,this.frames=this.frames.map(a=>this.filterRenderer.build(a,this.template.filter)))}setRound(){this.template.round&&(this.frames=this.frames.map(Zi))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(r=>r.map(this.evalExpression));break;case"DEFORM":this.deformer=new Wi,this.pos=this.template.pos.map(r=>r.map(n=>n.map(this.evalExpression)));break}}evalExpression(r){return typeof r=="number"?r:r.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(r){return r<this.frames.length?this.frames[r]:this.frames.at(-1)}getPos(r){return r<this.pos.length?this.pos[r]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(r,n=0){await this.initPromise;let a=this.getFrame(n);const i=this.getPos(n);let{angle:s,opacity:o,rotate:u}=this.template;switch(r.globalAlpha=o,u&&(s+=360/this.pos.length*n),this.template.posType){case"ZOOM":const[h,c,p,f]=i;if(s)switch(r.save(),this.template.origin){case"DEFAULT":r.translate(h,c),r.rotate(s*Math.PI/180),r.translate(-h,-c);break;case"CENTER":r.translate(h+p/2,c+f/2),r.rotate(s*Math.PI/180),r.translate(-h-p/2,-c-f/2);break}switch(this.template.fit){case"FILL":r.drawImage(a,h,c,p,f);break;default:const d=Math[this.template.fit==="CONTAIN"?"min":"max"](p/a.width,f/a.height),m=a.width*d,x=a.height*d,w=h+(p-m)/2,S=c+(f-x)/2;if(this.template.fit==="CONTAIN")r.drawImage(a,w,S,m,x);else{const A=m-p,P=x-f,b=A/d/2,I=P/d/2;r.drawImage(Mt(a,[b,I,a.width-b,a.height-I]),w+A/2,S+P/2,m-A,x-P)}break}s&&r.restore();break;case"DEFORM":this.deformer.draw(r,a,i);break}r.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const r=this.frames[0];return{width:r.width,height:r.height}}destroy(){var r;(r=this.deformer)==null||r.destroy()}}class At{constructor(t){y(this,"arr");y(this,"initPromise");y(this,"topAvatars",[]);y(this,"bottomAvatars",[]);y(this,"sizeMap",Object.create(null));y(this,"maxLength");this.arr=t,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(t,r)=>{t.onTop?this.topAvatars.push(t):this.bottomAvatars.push(t);const n=await t.getSize();this.sizeMap[`avatar${r}Width`]=n.width,this.sizeMap[`avatar${r}Height`]=n.height,this.maxLength=await t.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}destroy(){this.arr.forEach(t=>t.destroy())}static createFrom(t,r,n){return new At(t.map(a=>new Fo(a,r,n)))}}const Bo=zr();class vr{constructor(t,r,n){y(this,"obj");y(this,"container");y(this,"attrMap");if(this.obj=t,this.container=document.createElement(n?"fieldset":"div"),n&&this.container.appendChild(br(n,"legend")),this.container.classList.add("setting-container"),this.attrMap=r??{},this.obj._delete){const a=this.obj._delete;delete this.obj._delete,this.obj.delete=()=>{typeof a=="function"&&a(),this.container.remove()}}for(const[a,i]of Object.entries(this.obj)){if(i==null)continue;const s=this.createElement(a,i);this.container.appendChild(s)}}createElement(t,r){const n=this.attrMap[t]??{};let a=document.createElement("div");const i=document.createElement("label");switch(i.textContent=Bo[t]??t,a.appendChild(i),n.type){case"font":const o=document.createElement("select");return o.addEventListener("change",()=>this.obj[t]=o.value),document.fonts.forEach(h=>{const c=h.family,p=document.createElement("option");p.style.fontFamily=c,p.value=c,p.textContent=c,p.selected=c===this.obj[t],o.appendChild(p)}),a.appendChild(o),a;case"select":const u=document.createElement("select");return u.addEventListener("change",()=>this.obj[t]=u.value),n.options.forEach(h=>{const c=document.createElement("option");c.value=h,c.textContent=h,c.selected=h===r,u.appendChild(c)}),a.appendChild(u),a}let s=typeof r;switch(s){case"object":a=new vr(r,n[t],t).render();break;case"function":const o=document.createElement("button");o.textContent=t,o.addEventListener("click",async()=>{o.disabled=!0,o.style.cursor="progress";try{await r()}finally{o.disabled=!1,o.style.cursor="pointer"}}),a.appendChild(o);break;default:const u=document.createElement("input");let h=()=>this.obj[t]=u.value;switch(typeof r){case"number":h=()=>this.obj[t]=parseFloat(u.value);break;case"string":s=/^#([A-Fa-f0-9]{6})$/.test(r)?"color":"text";break;case"boolean":s="checkbox",u.checked=r,h=()=>this.obj[t]=u.checked;break}u.type=s;for(let[c,p]of Object.entries(n))u[c]=p;u.value=r.toString(),u.addEventListener("input",h),a.appendChild(u);break}return a}render(){return this.container}}var mr={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,t){(function(r,n){e.exports=n()})(self,function(){return(()=>{var r={"./node_modules/events/events.js":s=>{var o,u=typeof Reflect=="object"?Reflect:null,h=u&&typeof u.apply=="function"?u.apply:function(l,v,g){return Function.prototype.apply.call(l,v,g)};o=u&&typeof u.ownKeys=="function"?u.ownKeys:Object.getOwnPropertySymbols?function(l){return Object.getOwnPropertyNames(l).concat(Object.getOwnPropertySymbols(l))}:function(l){return Object.getOwnPropertyNames(l)};var c=Number.isNaN||function(l){return l!=l};function p(){p.init.call(this)}s.exports=p,s.exports.once=function(l,v){return new Promise(function(g,_){function E(k){l.removeListener(v,C),_(k)}function C(){typeof l.removeListener=="function"&&l.removeListener("error",E),g([].slice.call(arguments))}I(l,v,C,{once:!0}),v!=="error"&&function(k,z,$){typeof k.on=="function"&&I(k,"error",z,{once:!0})}(l,E)})},p.EventEmitter=p,p.prototype._events=void 0,p.prototype._eventsCount=0,p.prototype._maxListeners=void 0;var f=10;function d(l){if(typeof l!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof l)}function m(l){return l._maxListeners===void 0?p.defaultMaxListeners:l._maxListeners}function x(l,v,g,_){var E,C,k,z;if(d(g),(C=l._events)===void 0?(C=l._events=Object.create(null),l._eventsCount=0):(C.newListener!==void 0&&(l.emit("newListener",v,g.listener?g.listener:g),C=l._events),k=C[v]),k===void 0)k=C[v]=g,++l._eventsCount;else if(typeof k=="function"?k=C[v]=_?[g,k]:[k,g]:_?k.unshift(g):k.push(g),(E=m(l))>0&&k.length>E&&!k.warned){k.warned=!0;var $=new Error("Possible EventEmitter memory leak detected. "+k.length+" "+String(v)+" listeners added. Use emitter.setMaxListeners() to increase limit");$.name="MaxListenersExceededWarning",$.emitter=l,$.type=v,$.count=k.length,z=$,console&&console.warn&&console.warn(z)}return l}function w(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function S(l,v,g){var _={fired:!1,wrapFn:void 0,target:l,type:v,listener:g},E=w.bind(_);return E.listener=g,_.wrapFn=E,E}function A(l,v,g){var _=l._events;if(_===void 0)return[];var E=_[v];return E===void 0?[]:typeof E=="function"?g?[E.listener||E]:[E]:g?function(C){for(var k=new Array(C.length),z=0;z<k.length;++z)k[z]=C[z].listener||C[z];return k}(E):b(E,E.length)}function P(l){var v=this._events;if(v!==void 0){var g=v[l];if(typeof g=="function")return 1;if(g!==void 0)return g.length}return 0}function b(l,v){for(var g=new Array(v),_=0;_<v;++_)g[_]=l[_];return g}function I(l,v,g,_){if(typeof l.on=="function")_.once?l.once(v,g):l.on(v,g);else{if(typeof l.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof l);l.addEventListener(v,function E(C){_.once&&l.removeEventListener(v,E),g(C)})}}Object.defineProperty(p,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(l){if(typeof l!="number"||l<0||c(l))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+l+".");f=l}}),p.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},p.prototype.setMaxListeners=function(l){if(typeof l!="number"||l<0||c(l))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+l+".");return this._maxListeners=l,this},p.prototype.getMaxListeners=function(){return m(this)},p.prototype.emit=function(l){for(var v=[],g=1;g<arguments.length;g++)v.push(arguments[g]);var _=l==="error",E=this._events;if(E!==void 0)_=_&&E.error===void 0;else if(!_)return!1;if(_){var C;if(v.length>0&&(C=v[0]),C instanceof Error)throw C;var k=new Error("Unhandled error."+(C?" ("+C.message+")":""));throw k.context=C,k}var z=E[l];if(z===void 0)return!1;if(typeof z=="function")h(z,this,v);else{var $=z.length,xr=b(z,$);for(g=0;g<$;++g)h(xr[g],this,v)}return!0},p.prototype.addListener=function(l,v){return x(this,l,v,!1)},p.prototype.on=p.prototype.addListener,p.prototype.prependListener=function(l,v){return x(this,l,v,!0)},p.prototype.once=function(l,v){return d(v),this.on(l,S(this,l,v)),this},p.prototype.prependOnceListener=function(l,v){return d(v),this.prependListener(l,S(this,l,v)),this},p.prototype.removeListener=function(l,v){var g,_,E,C,k;if(d(v),(_=this._events)===void 0)return this;if((g=_[l])===void 0)return this;if(g===v||g.listener===v)--this._eventsCount==0?this._events=Object.create(null):(delete _[l],_.removeListener&&this.emit("removeListener",l,g.listener||v));else if(typeof g!="function"){for(E=-1,C=g.length-1;C>=0;C--)if(g[C]===v||g[C].listener===v){k=g[C].listener,E=C;break}if(E<0)return this;E===0?g.shift():function(z,$){for(;$+1<z.length;$++)z[$]=z[$+1];z.pop()}(g,E),g.length===1&&(_[l]=g[0]),_.removeListener!==void 0&&this.emit("removeListener",l,k||v)}return this},p.prototype.off=p.prototype.removeListener,p.prototype.removeAllListeners=function(l){var v,g,_;if((g=this._events)===void 0)return this;if(g.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):g[l]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete g[l]),this;if(arguments.length===0){var E,C=Object.keys(g);for(_=0;_<C.length;++_)(E=C[_])!=="removeListener"&&this.removeAllListeners(E);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(v=g[l])=="function")this.removeListener(l,v);else if(v!==void 0)for(_=v.length-1;_>=0;_--)this.removeListener(l,v[_]);return this},p.prototype.listeners=function(l){return A(this,l,!0)},p.prototype.rawListeners=function(l){return A(this,l,!1)},p.listenerCount=function(l,v){return typeof l.listenerCount=="function"?l.listenerCount(v):P.call(l,v)},p.prototype.listenerCount=P,p.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(s,o,u)=>{u.r(o),u.d(o,{default:()=>h});const h=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":s=>{const o=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),h=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],c=h[1]==="ie"&&document.documentMode,p={name:h[1]==="version"?h[3]:h[1],version:c||parseFloat(h[1]==="opera"&&h[4]?h[4]:h[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||u.match(/mac|win|linux/)||["other"])[0]}};p[p.name]=!0,p[p.name+parseInt(p.version,10)]=!0,p.platform[p.platform.name]=!0,s.exports=p},"?569f":()=>{}},n={};function a(s){var o=n[s];if(o!==void 0)return o.exports;var u=n[s]={exports:{}};return r[s](u,u.exports,a),u.exports}a.d=(s,o)=>{for(var u in o)a.o(o,u)&&!a.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:o[u]})},a.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),a.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var i={};return(()=>{a.r(i),a.d(i,{default:()=>c});var s=a("./dist/gif.worker.js.txt");const{EventEmitter:o}=a("./node_modules/events/events.js"),u=a("./src/browser.js");a("?569f");var h=function(){let p,f;return(h=class extends o{static initClass(){p={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},f={delay:500,copy:!1,dispose:-1}}constructor(d){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(d);for(let m in p){const x=p[m];this.options[m]==null&&(this.options[m]=x)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(d,m){if(this.options[d]=m,this._canvas!=null&&["width","height"].includes(d))return this._canvas[d]=m}setOptions(d){return(()=>{const m=[];for(let x of Object.keys(d||{})){const w=d[x];m.push(this.setOption(x,w))}return m})()}addFrame(d,m){m==null&&(m={});const x={};x.transparent=this.options.transparent;for(let w in f)x[w]=m[w]||f[w];if(this.options.width==null&&this.setOption("width",d.width),this.options.height==null&&this.setOption("height",d.height),typeof ImageData<"u"&&ImageData!==null&&d instanceof ImageData)x.data=d.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&d instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&d instanceof WebGLRenderingContext)m.copy?x.data=this.getContextData(d):x.context=d;else{if(d.childNodes==null)throw new Error("Invalid image");m.copy?x.data=this.getImageData(d):x.image=d}return this.frames.push(x)}render(){let d;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let x,w;const S=[];for(d=0,w=this.frames.length,x=0<=w;x?d<w:d>w;x?d++:d--)S.push(null);return S})();const m=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let x,w;for(d=0,w=m,x=0<=w;x?d<w:d>w;x?d++:d--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const d=this.activeWorkers.shift();if(d==null)break;this.log("killing active worker"),d.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const d=Math.min(this.options.workers,this.frames.length);return function(m,x,w){let S=[],A=m<x,P=x;for(let b=m;A?b<P:b>P;A?b++:b--)S.push(b);return S}(this.freeWorkers.length,d).forEach(m=>{this.log(`spawning worker ${m}`);const x=new Worker(this.workerURL);return x.onmessage=w=>(this.activeWorkers.splice(this.activeWorkers.indexOf(x),1),this.freeWorkers.push(x),this.frameFinished(w.data)),this.freeWorkers.push(x)}),d}frameFinished(d){if(this.log(`frame ${d.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[d.index]=d,this.options.globalPalette===!0&&(this.options.globalPalette=d.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let m=1,x=this.freeWorkers.length,w=1<=x;w?m<x:m>x;w?m++:m--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let d,m=0;for(d of Array.from(this.imageParts))m+=(d.data.length-1)*d.pageSize+d.cursor;m+=d.pageSize-d.cursor,this.log(`rendering finished - filesize ${Math.round(m/1e3)}kb`);const x=new Uint8Array(m);let w=0;for(d of Array.from(this.imageParts))for(let A=0;A<d.data.length;A++){const P=d.data[A];x.set(P,w),A===d.data.length-1?w+=d.cursor:w+=d.pageSize}const S=new Blob([x],{type:"image/gif"});return this.emit("finished",S,x)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const d=this.frames[this.nextFrame++],m=this.freeWorkers.shift(),x=this.getTask(d);return this.log(`starting frame ${x.index+1} of ${this.frames.length}`),this.activeWorkers.push(m),m.postMessage(x)}getContextData(d){return d.getImageData(0,0,this.options.width,this.options.height).data}getImageData(d){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const m=this._canvas.getContext("2d");return m.fillStyle=this.options.background,m.fillRect(0,0,this.options.width,this.options.height),m.drawImage(d,0,0),this.getContextData(m)}getTask(d){const m=this.frames.indexOf(d),x={index:m,last:m===this.frames.length-1,delay:d.delay,dispose:d.dispose,transparent:d.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:u.name==="chrome"};if(d.data!=null)x.data=d.data;else if(d.context!=null)x.data=this.getContextData(d.context);else{if(d.image==null)throw new Error("Invalid frame");x.data=this.getImageData(d.image)}return x}log(...d){if(this.options.debug)return console.log(...Array.from(d||[]))}}).initClass(),h}();const c=h})(),i})()})})(mr);var Do=mr.exports;const Xo=Gr(Do);export{Po as A,Xo as G,$o as L,No as M,Wo as P,vr as S,wo as T,Uo as a,Gr as b,br as c,Pe as d,Ne as e,po as f,zr as g,Go as h,qo as i,Ro as j,ko as k,Mo as l,Ao as m,Oo as n,bo as o,yo as p,Jt as q,te as r,Tr as s,Co as t,Eo as u,Lo as v};
