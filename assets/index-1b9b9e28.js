var mr=Object.defineProperty;var xr=(e,t,n)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var b=(e,t,n)=>(xr(e,typeof t!="symbol"?t+"":t,n),n),Tt=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var M=(e,t,n)=>(Tt(e,t,"read from private field"),n?n.call(e):t.get(e)),R=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},G=(e,t,n,r)=>(Tt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var rt=(e,t,n)=>(Tt(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const yr="index.json",wr="index.map.json",br="./data/xmmt.dituon.petpet";class _r{constructor(t){b(this,"urls");b(this,"urlSet",new Set);b(this,"initPromise");b(this,"idMap");b(this,"lengthMap",new Map);b(this,"aliasMap",new Map);b(this,"fonts");b(this,"fontPromises",[]);this.urls=[...new Set(t)],this.initPromise=this.init()}async init(){const t=new Map,n=new Map;await Promise.allSettled(this.urls.map(async r=>{const i=await fetch(`${r}/${yr}`).then(u=>u.json()),{dataPath:a=br,dataList:s,fontList:l}=i;try{const u=await fetch(`${r}/${wr}`).then(c=>c.json());Object.entries(u.length).forEach(([c,w])=>this.lengthMap.set(c,w)),Object.entries(u.alias).forEach(([c,w])=>this.aliasMap.set(c,w))}catch{console.warn(`cannot find index.map.json in ${r} `)}for(const u of s)t.has(u)||t.set(u,`${r}/${a}/${u}`);for(const u of l)n.has(u)||n.set(u,`${r}/${a}/fonts/${u}`);this.urlSet.add(r)})),this.idMap=t;for(let[r,i]of n){r=r.split(".")[0],console.log(r,i);const a=new FontFace(r,`url(${i})`);this.fontPromises.push(a.load().then(s=>{document.fonts.add(s)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getLengthMap(){return await this.initPromise,this.lengthMap}async getPreviewList(){const t=await this.getIdMap(),n=[];for(const[r,i]of t.entries())n.push({key:r,url:i,alias:this.aliasMap.get(r)});return n}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const it=()=>document.createElement("div");var Je,he,dt,Gn;class qn{constructor(t){R(this,dt);R(this,Je,void 0);R(this,he,void 0);G(this,Je,t)}show(){if(M(this,he))return;const t=it();t.className="loading",t.append(it(),it(),it()),M(this,Je).appendChild(t),t.addEventListener("click",rt(this,dt,Gn)),G(this,he,t)}hide(){M(this,he)&&(M(this,he).remove(),G(this,he,null))}error(){let t="加载失败";throw M(this,he).innerHTML=`<span>${t}</span>`,new Error(t)}}Je=new WeakMap,he=new WeakMap,dt=new WeakSet,Gn=function(t){t.stopPropagation()};class Wn{constructor(){b(this,"element");b(this,"showing");b(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(t){this.element.onclick=t}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}function qe(e,t="h3"){const n=document.createElement(t);return n.textContent=e,n}const Er={selectTemplate:"Select template",uploadAvatar:"Upload avatar",setText:"Set text",result:"Result",typeToSearch:"Type to search",cancel:"Cancel",save:"Save",add:"Add",x:"X",y:"Y",text:"Text",color:"Color",size:"Size",font:"Font",hidden:"Hidden",delete:"Delete",delay:"Delay",play:"Play",stop:"Stop",workers:"Workers",quality:"Quality",background:"Background",dither:"Dither",download:"Download",copy:"Copy",share:"Share",notSelected:"Not Selected",noAvatar:"No Avatar",rightClickOrLongPress:"Right Click or Long Press"},Cr={selectTemplate:"選擇模板",uploadAvatar:"上傳頭像",setText:"設置文字",result:"結果",typeToSearch:"檢索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"顏色",size:"大小",font:"字型",hidden:"隱藏",delete:"刪除",delay:"延遲",play:"播放",stop:"停止",workers:"線程數",quality:"質量",background:"背景",dither:"抖動",download:"下載",copy:"複製",share:"分享",notSelected:"未選擇",noAvatar:"無頭像",rightClickOrLongPress:"右鍵或長按"},Mr={selectTemplate:"选择模板",uploadAvatar:"上传头像",setText:"设置文字",result:"结果",typeToSearch:"搜索文字",cancel:"取消",save:"保存",add:"添加",x:"X",y:"Y",text:"文字",color:"颜色",size:"大小",font:"字体",hidden:"隐藏",delete:"删除",delay:"延迟",play:"播放",stop:"停止",workers:"线程数",quality:"质量",background:"背景",dither:"抖动",download:"下载",copy:"复制",share:"分享",notSelected:"未选择",noAvatar:"无头像",rightClickOrLongPress:"右键或长按"},Tr={selectTemplate:"Template auswählen",uploadAvatar:"Avatar hochladen",setText:"Text setzen",result:"Ergebnis",typeToSearch:"Suche",cancel:"Abbrechen",save:"Speichern",add:"Hinzufügen",x:"X",y:"Y",text:"Text",color:"Farbe",size:"Größe",font:"Schriftart",hidden:"Verstecken",delete:"Löschen",delay:"Verzögerung",play:"Abspielen",stop:"Stoppen",workers:"Anzahl der Threads",quality:"Qualität",background:"Hintergrund",dither:"Dither",download:"Download",copy:"Kopieren",share:"Teilen",notSelected:"Nicht ausgewählt",noAvatar:"Keine Avatar",rightClickOrLongPress:"Rechtsklick oder Doppelklick"},Sr={selectTemplate:"テンプレートを選択",uploadAvatar:"アバターをアップロード",setText:"テキストを設定",result:"結果",typeToSearch:"検索",cancel:"キャンセル",save:"保存",add:"追加",x:"X",y:"Y",text:"テキスト",color:"色",size:"サイズ",font:"フォント",hidden:"隠す",delete:"削除",delay:"遅延",play:"再生",stop:"停止",workers:"線程数",quality:"質量",background:"背景色",dither:"抖動",download:"ダウンロード",copy:"コピー",share:"シェア",notSelected:"未選択",noAvatar:"アバターなし",rightClickOrLongPress:"右クリックまたは長押し"},kr={selectTemplate:"템플릿 선택",uploadAvatar:"아바타 업로드",setText:"텍스트 설정",result:"결과",typeToSearch:"검색",cancel:"취소",save:"저장",add:"추가",x:"X",y:"Y",text:"텍스트",color:"색",size:"크기",font:"글꼴",hidden:"숨김",delete:"삭제",delay:"연속",play:"재생",stop:"중지",workers:"쓰레드 수",quality:"질량",background:"배경색",dither:"쓰레드",download:"다운로드",copy:"복사",share:"공유",notSelected:"선택되지 않음",noAvatar:"아바타 없음",rightClickOrLongPress:"마우스 오른쪽클릭"},Pr={selectTemplate:"Выберите шаблон",uploadAvatar:"Загрузить аватар",setText:"Установить текст",result:"Результат",typeToSearch:"Поиск",cancel:"Отмена",save:"Сохранить",add:"Добавить",x:"X",y:"Y",text:"Текст",color:"Цвет",size:"Размер",font:"Шрифт",hidden:"Скрыть",delete:"Удалить",delay:"Задержка",play:"Воспроизведение",stop:"Остановить",workers:"Количество нитей",quality:"Качество",background:"Фон",dither:"Контроль",download:"Скачать",copy:"Копировать",share:"Поделиться",notSelected:"Не выбрано",noAvatar:"Нет аватара",rightClickOrLongPress:"Кликните или перетащите мышкой"},Ar={selectTemplate:"Sélectionnez un modèle",uploadAvatar:"Télécharger avatar",setText:"Définir le texte",result:"Résultat",typeToSearch:"Rechercher",cancel:"Annuler",save:"Enregistrer",add:"Ajouter",x:"X",y:"Y",text:"Texte",color:"Couleur",size:"Taille",font:"Police",hidden:"Cacher",delete:"Supprimer",delay:"Délai",play:"Lecture",stop:"Arrêter",workers:"Nombre de nœuds",quality:"Qualité",background:"Fond",dither:"Dither",download:"Télécharger",copy:"Copier",share:"Partager",notSelected:"Non sélectionné",noAvatar:"Aucun avatar",rightClickOrLongPress:"Cliquer ou longue-cliquer pour sélectionner"},Fr=[{id:"zh-CN",text:"简体中文",alias:["zh"]},{id:"zh-TW",text:"繁體中文",alias:["zh-HK","zh-SG"]},{id:"en-US",text:"English",alias:["en","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT"]},{id:"ru",text:"русский язык",alias:["ru-RU"]},{id:"de",text:"Deutsch",alias:["de-CH","de-AT","de-LU","de-LI"]},{id:"es",text:"español",alias:["es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"]},{id:"fr",text:"Français",alias:["fr-BE","fr-CA","fr-CH","fr-LU"]},{id:"ja",text:"日本語",alias:["ja-JP"]},{id:"ko",text:"한국어",alias:["ko-KR"]}];let St;function ne(){if(St)return St;const e=navigator.language;let t="en-US";for(const n of Fr){if(e===n.id){t=n.id;break}n.alias.forEach(r=>{r===e&&(t=n.id)})}return t=t.replace("-","_"),St=xn[t],xn[t]}const xn={en_US:Er,zh_TW:Cr,zh_CN:Mr,de:Tr,fr:Ar,ja:Sr,ko:kr,ru:Pr};var ee,je,et,Be,Ce,Me;const Le=class{constructor(t){R(this,ee,document.createElement("div"));R(this,je,void 0);R(this,et,new Map);R(this,Be,void 0);R(this,Ce,void 0);R(this,Me,0);b(this,"mask",new Wn);M(this,ee).classList.add("modal-select","hide",Le.ICON_SIZE_LIST[M(this,Me)]),M(this,ee).addEventListener("contextmenu",n=>{n.preventDefault(),this.changeIconSize()}),document.body.appendChild(M(this,ee)),this.mask.onclick=()=>{M(this,Ce)&&M(this,Ce).call(this,null),this.hide()},t&&(this.templates=t)}set templates(t){G(this,je,t);const n=document.createElement("div");n.className="index-list",G(this,Be,n);for(const i of t){const a=document.createElement("div"),s=document.createElement("img");s.src=`${i.url}/0.png`,s.alt=i.key,s.onerror=()=>a.remove(),s.loading="lazy";const l=qe(i.key);i.alias&&i.alias.forEach(u=>l.appendChild(qe(u,"span"))),a.append(s,l),a.addEventListener("click",async u=>{M(this,Ce).call(this,await Or(i)),this.hide()}),M(this,et).set(i,a),n.appendChild(a)}const r=document.createElement("input");r.placeholder=`🔍 ${ne().typeToSearch} / ${ne().rightClickOrLongPress}`,r.addEventListener("change",i=>{this.search(r.value.trim())}),M(this,ee).append(r,n)}hide(){this.mask.hide(),M(this,ee).classList.add("hide")}async show(){return M(this,je)?(this.mask.show(),M(this,ee)&&M(this,ee).classList.remove("hide"),new Promise(t=>G(this,Ce,t))):null}changeIconSize(){const t=(M(this,Me)+1)%Le.ICON_SIZE_LIST.length;M(this,ee).classList.replace(Le.ICON_SIZE_LIST[M(this,Me)],Le.ICON_SIZE_LIST[t]),G(this,Me,t)}search(t){M(this,Be).innerHTML="";for(let[n,r]of M(this,et).entries()){const{key:i,alias:a}=n;!i.includes(t)&&!(a&&a.find(s=>s.includes(t)))||M(this,Be).appendChild(r)}}};let lt=Le;ee=new WeakMap,je=new WeakMap,et=new WeakMap,Be=new WeakMap,Ce=new WeakMap,Me=new WeakMap,b(lt,"ICON_SIZE_LIST",["big","medium","small"]);async function Or(e){if(e.type)return e;const t=await fetch(e.url+"/data.json").then(n=>n.json());return{...e,...t}}var ue,De,$e;class Ir{constructor(t){R(this,ue,document.createElement("div"));R(this,De,void 0);b(this,"loading",new qn(M(this,ue)));R(this,$e,void 0);b(this,"template");if(G(this,De,new lt(t)),M(this,ue).classList.add("template-chooser"),M(this,ue).textContent=ne().notSelected,M(this,ue).addEventListener("click",async()=>{const n=await this.showModal();M(this,$e)&&M(this,$e).call(this,n)}),!t){this.loading.show();return}this.templates=t}set templates(t){this.loading.hide(),M(this,De).templates=t}render(){const t=document.createElement("div");return t.append(qe(ne().selectTemplate),M(this,ue)),t}async showModal(){const t=await M(this,De).show();return t&&(M(this,ue).textContent=t.key),this.template=t,t}set onchange(t){G(this,$e,t)}}ue=new WeakMap,De=new WeakMap,$e=new WeakMap;class Rr{static from(){throw new Error}}function Ie(e,t){if(e.length!==t)throw new Error("array.length != "+t);return e}function ht(e,t=!1){const n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:t});return n.width=e.width,n.height=e.height,r.drawImage(e,0,0),n}async function ut(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=i=>n(i),r.src=URL.createObjectURL(e)})}function Xn(e="#ffffff00"){if(typeof e=="string")return e.startsWith("#")?e:e.length<<2?"#"+e:e;if(e.length&&e.length>=3&&e.length<=4){const[t,n,r,i=1]=e;return`rgba(${t}, ${n}, ${r}, ${i})`}throw new Error("cannot load color "+e)}function zr(e,t,n=!1){const r=document.createElement("canvas"),i=r.getContext("2d"),[a,s,l,u]=t.length===2?[0,0,t[0],t[1]]:t;let c=n?(l-a)/100*e.width:l-a,w=n?(u-s)/100*e.height:u-s;return r.width=n?c/100*e.width:c,r.height=n?w/100*e.height:w,i.drawImage(e,a,s,c,w,0,0,c,w),r}function Lr(e){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.translate(0,e.height),n.scale(1,-1),n.drawImage(e,0,0),t}function Br(e){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.width,t.height=e.height,n.drawImage(e,0,0);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let a=0;a<i.length;a+=4){const s=i[a],l=i[a+1],u=i[a+2],c=(s+l+u)/3;i[a]=c,i[a+1]=c,i[a+2]=c}return n.putImageData(r,0,0),t}var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yn={},D={},zt={};Object.defineProperty(zt,"__esModule",{value:!0});var $r=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Nr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ur=function(){function e(t){Nr(this,e);var n=t.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],t.sort(function(u,c){return u[0]-c[0]});for(var r=0;r<n;r++)this.xa.push(t[r][0]),this.ya.push(t[r][1]);this.u[0]=0,this.y2[0]=0;for(var r=1;r<n-1;++r){var i=this.xa[r+1]-this.xa[r-1],a=(this.xa[r]-this.xa[r-1])/i,s=a*this.y2[r-1]+2;this.y2[r]=(a-1)/s;var l=(this.ya[r+1]-this.ya[r])/(this.xa[r+1]-this.xa[r])-(this.ya[r]-this.ya[r-1])/(this.xa[r]-this.xa[r-1]);this.u[r]=(6*l/i-a*this.u[r-1])/s}this.y2[n-1]=0;for(var r=n-2;r>=0;--r)this.y2[r]=this.y2[r]*this.y2[r+1]+this.u[r]}return $r(e,[{key:"interpolate",value:function(n){for(var r=this.ya.length,i=0,a=r-1;a-i>1;){var s=a+i>>1;this.xa[s]>n?a=s:i=s}var l=this.xa[a]-this.xa[i],u=(this.xa[a]-n)/l,c=(n-this.xa[i])/l;return u*this.ya[i]+c*this.ya[a]+((u*u*u-u)*this.y2[i]+(c*c*c-c)*this.y2[a])*(l*l)/6}}]),e}();zt.default=Ur;Object.defineProperty(D,"__esModule",{value:!0});D.simpleShader=Xr;D.clamp=Vn;D.splineInterpolate=Hr;var qr=zt,Gr=Wr(qr);function Wr(e){return e&&e.__esModule?e:{default:e}}function Xr(e,t,n,r){(n||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(r||this._.texture)}function Vn(e,t,n){return Math.max(e,Math.min(t,n))}function Hr(e){for(var t=new Gr.default(e),n=[],r=0;r<256;r++)n.push(Vn(0,Math.floor(t.interpolate(r/255)*256),255));return n}var L={};Object.defineProperty(L,"__esModule",{value:!0});L.set=Yr;L.get=Vr;var It={};function Yr(e){It=Object.assign(It,e)}function Vr(e){return It[e]}var Lt={},N={};Object.defineProperty(N,"__esModule",{value:!0});var yn=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Zr=L,we=Qr(Zr);function Qr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Kr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Jr="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main() {  texCoord = _texCoord;  gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);}",jr="uniform sampler2D texture;varying vec2 texCoord;void main() {  gl_FragColor = texture2D(texture, texCoord);}",ei=function(){yn(e,null,[{key:"getDefaultShader",value:function(){var n=we.get("gl");return n.defaultShader=n.defaultShader||new e,n.defaultShader}}]);function e(t,n){Kr(this,e);var r=we.get("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=r.createProgram(),t=t||Jr,n=n||jr,n="precision highp float;"+n,r.attachShader(this.program,wn(r.VERTEX_SHADER,t)),r.attachShader(this.program,wn(r.FRAGMENT_SHADER,n)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw"link error: "+r.getProgramInfoLog(this.program)}return yn(e,[{key:"destroy",value:function(){var n=we.get("gl");n.deleteProgram(this.program),this.program=null}},{key:"uniforms",value:function(n){var r=we.get("gl");r.useProgram(this.program);for(var i in n)if(n.hasOwnProperty(i)){var a=r.getUniformLocation(this.program,i);if(a!==null){var s=n[i];if(ti(s))switch(s.length){case 1:r.uniform1fv(a,new Float32Array(s));break;case 2:r.uniform2fv(a,new Float32Array(s));break;case 3:r.uniform3fv(a,new Float32Array(s));break;case 4:r.uniform4fv(a,new Float32Array(s));break;case 9:r.uniformMatrix3fv(a,!1,new Float32Array(s));break;case 16:r.uniformMatrix4fv(a,!1,new Float32Array(s));break;default:throw`dont't know how to load uniform "`+i+'" of length '+s.length}else if(ni(s))r.uniform1f(a,s);else throw'attempted to set uniform "'+i+'" to invalid value '+(s||"undefined").toString()}}return this}},{key:"textures",value:function(n){var r=we.get("gl");r.useProgram(this.program);for(var i in n)n.hasOwnProperty(i)&&r.uniform1i(r.getUniformLocation(this.program,i),n[i]);return this}},{key:"drawRect",value:function(n,r,i,a){var s=we.get("gl"),l=s.getParameter(s.VIEWPORT);r=r!==void 0?(r-l[1])/l[3]:0,n=n!==void 0?(n-l[0])/l[2]:0,i=i!==void 0?(i-l[0])/l[2]:1,a=a!==void 0?(a-l[1])/l[3]:1,s.vertexBuffer==null&&(s.vertexBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([n,r,n,a,i,r,i,a]),s.STATIC_DRAW),s.texCoordBuffer==null&&(s.texCoordBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),s.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=s.getAttribLocation(this.program,"vertex"),s.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=s.getAttribLocation(this.program,"_texCoord"),s.enableVertexAttribArray(this.texCoordAttribute)),s.useProgram(this.program),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.vertexAttribPointer(this.vertexAttribute,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.vertexAttribPointer(this.texCoordAttribute,2,s.FLOAT,!1,0,0),s.drawArrays(s.TRIANGLE_STRIP,0,4)}}]),e}();N.default=ei;function ti(e){return Object.prototype.toString.call(e)=="[object Array]"}function ni(e){return Object.prototype.toString.call(e)=="[object Number]"}function wn(e,t){var n=we.get("gl"),r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw"compile error: "+n.getShaderInfoLog(r);return r}Object.defineProperty(Lt,"__esModule",{value:!0});var bn=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ri=L,J=oi(ri),ii=N,ai=si(ii);function si(e){return e&&e.__esModule?e:{default:e}}function oi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function li(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var le=null,hi=function(){bn(e,null,[{key:"fromElement",value:function(n){var r=J.get("gl"),i=new e(0,0,r.RGBA,r.UNSIGNED_BYTE);return i.loadContentsOf(n),i}}]);function e(t,n,r,i){li(this,e);var a=J.get("gl");this.gl=a,this.id=a.createTexture(),this.width=t,this.height=n,this.format=r,this.type=i,a.bindTexture(a.TEXTURE_2D,this.id),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),t&&n&&a.texImage2D(a.TEXTURE_2D,0,this.format,t,n,0,this.format,this.type,null)}return bn(e,[{key:"loadContentsOf",value:function(n){var r=J.get("gl");this.width=n.width||n.videoWidth,this.height=n.height||n.videoHeight,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,this.format,this.format,this.type,n)}},{key:"initFromBytes",value:function(n,r,i){var a=J.get("gl");this.width=n,this.height=r,this.format=a.RGBA,this.type=a.UNSIGNED_BYTE,a.bindTexture(a.TEXTURE_2D,this.id),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,n,r,0,a.RGBA,this.type,new Uint8Array(i))}},{key:"destroy",value:function(){var n=J.get("gl");n.deleteTexture(this.id),this.id=null}},{key:"use",value:function(n){var r=J.get("gl");r.activeTexture(r.TEXTURE0+(n||0)),r.bindTexture(r.TEXTURE_2D,this.id)}},{key:"unuse",value:function(n){var r=J.get("gl");r.activeTexture(r.TEXTURE0+(n||0)),r.bindTexture(r.TEXTURE_2D,null)}},{key:"ensureFormat",value:function(n,r,i,a){if(arguments.length==1){var s=arguments[0];n=s.width,r=s.height,i=s.format,a=s.type}if(n!=this.width||r!=this.height||i!=this.format||a!=this.type){var l=J.get("gl");this.width=n,this.height=r,this.format=i,this.type=a,l.bindTexture(l.TEXTURE_2D,this.id),l.texImage2D(l.TEXTURE_2D,0,this.format,n,r,0,this.format,this.type,null)}}},{key:"drawTo",value:function(n){var r=J.get("gl");if(r.framebuffer=r.framebuffer||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,r.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.checkFramebufferStatus(r.FRAMEBUFFER)!==r.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");r.viewport(0,0,this.width,this.height),n(),r.bindFramebuffer(r.FRAMEBUFFER,null)}},{key:"fillUsingCanvas",value:function(n){n(_n(this));var r=J.get("gl");return this.format=r.RGBA,this.type=r.UNSIGNED_BYTE,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,le),this}},{key:"toImage",value:function(n){this.use(),ai.default.getDefaultShader().drawRect();var r=J.get("gl"),i=this.width*this.height*4,a=new Uint8Array(i),s=_n(this),l=s.createImageData(this.width,this.height);r.readPixels(0,0,this.width,this.height,r.RGBA,r.UNSIGNED_BYTE,a);for(var u=0;u<i;u++)l.data[u]=a[u];s.putImageData(l,0,0),n.src=le.toDataURL()}},{key:"swapWith",value:function(n){var r;r=n.id,n.id=this.id,this.id=r,r=n.width,n.width=this.width,this.width=r,r=n.height,n.height=this.height,this.height=r,r=n.format,n.format=this.format,this.format=r}}]),e}();Lt.default=hi;function _n(e){le==null&&(le=document.createElement("canvas")),le.width=e.width,le.height=e.height;var t=le.getContext("2d");return t.clearRect(0,0,le.width,le.height),t}var Zn={},Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.default=function(e,t){var n=fi.get("gl");return n.brightnessContrast=n.brightnessContrast||new ci.default(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),kt.simpleShader.call(this,n.brightnessContrast,{brightness:(0,kt.clamp)(-1,e,1),contrast:(0,kt.clamp)(-1,t,1)}),this};var ui=N,ci=vi(ui),kt=D,di=L,fi=pi(di);function pi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function vi(e){return e&&e.__esModule?e:{default:e}}var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.default=function(e,t,n){var r=yi.get("gl");e=(0,at.splineInterpolate)(e),arguments.length==1?t=n=e:(t=(0,at.splineInterpolate)(t),n=(0,at.splineInterpolate)(n));for(var i=[],a=0;a<256;a++)i.splice(i.length,0,e[a],t[a],n[a],255);return this._.extraTexture.initFromBytes(256,1,i),this._.extraTexture.use(1),r.curves=r.curves||new mi.default(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),r.curves.textures({map:1}),at.simpleShader.call(this,r.curves,{}),this};var gi=N,mi=bi(gi),at=D,xi=L,yi=wi(xi);function wi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function bi(e){return e&&e.__esModule?e:{default:e}}var $t={};Object.defineProperty($t,"__esModule",{value:!0});$t.default=function(e){var t=Ti.get("gl");t.denoise=t.denoise||new Ei.default(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var n=0;n<2;n++)Ci.simpleShader.call(this,t.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this};var _i=N,Ei=ki(_i),Ci=D,Mi=L,Ti=Si(Mi);function Si(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ki(e){return e&&e.__esModule?e:{default:e}}var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.default=function(e,t){var n=Oi.get("gl");return n.hueSaturation=n.hueSaturation||new Ai.default(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),Pt.simpleShader.call(this,n.hueSaturation,{hue:(0,Pt.clamp)(-1,e,1),saturation:(0,Pt.clamp)(-1,t,1)}),this};var Pi=N,Ai=Ri(Pi),Pt=D,Fi=L,Oi=Ii(Fi);function Ii(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ri(e){return e&&e.__esModule?e:{default:e}}var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.default=function(e){var t=Di.get("gl");return t.noise=t.noise||new Li.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),En.simpleShader.call(this,t.noise,{amount:(0,En.clamp)(0,e,1)}),this};var zi=N,Li=Ni(zi),En=D,Bi=L,Di=$i(Bi);function $i(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ni(e){return e&&e.__esModule?e:{default:e}}var qt={};Object.defineProperty(qt,"__esModule",{value:!0});qt.default=function(e){var t=Wi.get("gl");return t.sepia=t.sepia||new qi.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),Cn.simpleShader.call(this,t.sepia,{amount:(0,Cn.clamp)(0,e,1)}),this};var Ui=N,qi=Hi(Ui),Cn=D,Gi=L,Wi=Xi(Gi);function Xi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Hi(e){return e&&e.__esModule?e:{default:e}}var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.default=function(e,t){var n=Qi.get("gl");return n.unsharpMask=n.unsharpMask||new Mn.default(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){Mn.default.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),n.unsharpMask.textures({originalTexture:1}),Vi.simpleShader.call(this,n.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this};var Yi=N,Mn=Ji(Yi),Vi=D,Zi=L,Qi=Ki(Zi);function Ki(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ji(e){return e&&e.__esModule?e:{default:e}}var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});Wt.default=function(e){var t=na.get("gl");return t.vibrance=t.vibrance||new ea.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),Tn.simpleShader.call(this,t.vibrance,{amount:(0,Tn.clamp)(-1,e,1)}),this};var ji=N,ea=ia(ji),Tn=D,ta=L,na=ra(ta);function ra(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ia(e){return e&&e.__esModule?e:{default:e}}var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});Xt.default=function(e,t){var n=la.get("gl");return n.vignette=n.vignette||new sa.default(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),At.simpleShader.call(this,n.vignette,{size:(0,At.clamp)(0,e,1),amount:(0,At.clamp)(0,t,1)}),this};var aa=N,sa=ua(aa),At=D,oa=L,la=ha(oa);function ha(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ua(e){return e&&e.__esModule?e:{default:e}}var Ht={},Q={};Object.defineProperty(Q,"__esModule",{value:!0});Q.randomShaderFunc=void 0;Q.warpShader=pa;var ca=N,da=fa(ca);function fa(e){return e&&e.__esModule?e:{default:e}}function pa(e,t){return new da.default(null,e+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+t+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}Q.randomShaderFunc="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.default=function(e,t,n){var r=xa.get("gl");r.lensBlurPrePass=r.lensBlurPrePass||new st.default(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var i="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+ga.randomShaderFunc+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";r.lensBlur0=r.lensBlur0||new st.default(null,i+"    void main() {      gl_FragColor = sample(delta0);    }  "),r.lensBlur1=r.lensBlur1||new st.default(null,i+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),r.lensBlur2=r.lensBlur2||new st.default(null,i+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var a=[],s=0;s<3;s++){var l=n+s*Math.PI*2/3;a.push([e*Math.sin(l)/this.width,e*Math.cos(l)/this.height])}var u=Math.pow(10,(0,Re.clamp)(-1,t,1));return Re.simpleShader.call(this,r.lensBlurPrePass,{power:u}),this._.extraTexture.ensureFormat(this._.texture),Re.simpleShader.call(this,r.lensBlur0,{delta0:a[0]},this._.texture,this._.extraTexture),Re.simpleShader.call(this,r.lensBlur1,{delta0:a[1],delta1:a[2]},this._.extraTexture,this._.extraTexture),Re.simpleShader.call(this,r.lensBlur0,{delta0:a[1]}),this._.extraTexture.use(1),Re.simpleShader.call(this,r.lensBlur2,{power:1/u,delta0:a[2]}),this};var va=N,st=wa(va),Re=D,ga=Q,ma=L,xa=ya(ma);function ya(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function wa(e){return e&&e.__esModule?e:{default:e}}var Yt={};Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=function(e,t,n,r,i,a){var s=Ma.get("gl");s.tiltShift=s.tiltShift||new _a.default(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+Ea.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var l=n-e,u=r-t,c=Math.sqrt(l*l+u*u);return Sn.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[n,r],delta:[l/c,u/c],texSize:[this.width,this.height]}),Sn.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[n,r],delta:[-u/c,l/c],texSize:[this.width,this.height]}),this};var ba=N,_a=Sa(ba),Sn=D,Ea=Q,Ca=L,Ma=Ta(Ca);function Ta(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Sa(e){return e&&e.__esModule?e:{default:e}}var Vt={};Object.defineProperty(Vt,"__esModule",{value:!0});Vt.default=function(e){var t=Oa.get("gl");return t.triangleBlur=t.triangleBlur||new Pa.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Aa.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),kn.simpleShader.call(this,t.triangleBlur,{delta:[e/this.width,0]}),kn.simpleShader.call(this,t.triangleBlur,{delta:[0,e/this.height]}),this};var ka=N,Pa=Ra(ka),kn=D,Aa=Q,Fa=L,Oa=Ia(Fa);function Ia(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ra(e){return e&&e.__esModule?e:{default:e}}var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=function(e,t,n){var r=Na.get("gl");return r.zoomBlur=r.zoomBlur||new La.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+Da.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),Ba.simpleShader.call(this,r.zoomBlur,{center:[e,t],strength:n,texSize:[this.width,this.height]}),this};var za=N,La=qa(za),Ba=D,Da=Q,$a=L,Na=Ua($a);function Ua(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function qa(e){return e&&e.__esModule?e:{default:e}}var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.default=function(e,t,n,r){var i=Ya.get("gl");return i.colorHalftone=i.colorHalftone||new Wa.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),Xa.simpleShader.call(this,i.colorHalftone,{center:[e,t],angle:n,scale:Math.PI/r,texSize:[this.width,this.height]}),this};var Ga=N,Wa=Za(Ga),Xa=D,Ha=L,Ya=Va(Ha);function Va(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Za(e){return e&&e.__esModule?e:{default:e}}var Kt={};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.default=function(e,t,n,r){var i=es.get("gl");return i.dotScreen=i.dotScreen||new Ka.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),Ja.simpleShader.call(this,i.dotScreen,{center:[e,t],angle:n,scale:Math.PI/r,texSize:[this.width,this.height]}),this};var Qa=N,Ka=ns(Qa),Ja=D,ja=L,es=ts(ja);function ts(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ns(e){return e&&e.__esModule?e:{default:e}}var Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});Jt.default=function(e){var t=as.get("gl");return t.edgeWork1=t.edgeWork1||new Pn.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Fn.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),t.edgeWork2=t.edgeWork2||new Pn.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Fn.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),An.simpleShader.call(this,t.edgeWork1,{delta:[e/this.width,0]}),An.simpleShader.call(this,t.edgeWork2,{delta:[0,e/this.height]}),this};var rs=N,Pn=os(rs),An=D,Fn=Q,is=L,as=ss(is);function ss(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function os(e){return e&&e.__esModule?e:{default:e}}var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.default=function(e,t,n){var r=ds.get("gl");return r.hexagonalPixelate=r.hexagonalPixelate||new hs.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),us.simpleShader.call(this,r.hexagonalPixelate,{center:[e,t],scale:n,texSize:[this.width,this.height]}),this};var ls=N,hs=ps(ls),us=D,cs=L,ds=fs(cs);function fs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ps(e){return e&&e.__esModule?e:{default:e}}var en={};Object.defineProperty(en,"__esModule",{value:!0});en.default=function(e){var t=ys.get("gl");return t.ink=t.ink||new gs.default(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),ms.simpleShader.call(this,t.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this};var vs=N,gs=bs(vs),ms=D,xs=L,ys=ws(xs);function ws(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function bs(e){return e&&e.__esModule?e:{default:e}}var tn={};Object.defineProperty(tn,"__esModule",{value:!0});tn.default=function(e,t,n,r){var i=Cs.get("gl");return i.bulgePinch=i.bulgePinch||(0,_s.warpShader)("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),On.simpleShader.call(this,i.bulgePinch,{radius:n,strength:(0,On.clamp)(-1,r,1),center:[e,t],texSize:[this.width,this.height]}),this};var _s=Q,On=D,Es=L,Cs=Ms(Es);function Ms(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var nn={},He={};Object.defineProperty(He,"__esModule",{value:!0});He.getSquareToQuad=Ts;He.getInverse=Ss;He.multiply=ks;function Ts(e,t,n,r,i,a,s,l){var u=n-i,c=r-a,w=s-i,x=l-a,y=e-n+i-s,g=t-r+a-l,_=u*x-w*c,S=(y*x-w*g)/_,C=(u*g-y*c)/_;return[n-e+S*n,r-t+S*r,S,s-e+C*s,l-t+C*l,C,e,t,1]}function Ss(e){var t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],w=t*a*c-t*s*u-n*i*c+n*s*l+r*i*u-r*a*l;return[(a*c-s*u)/w,(r*u-n*c)/w,(n*s-r*a)/w,(s*l-i*c)/w,(t*c-r*l)/w,(r*i-t*s)/w,(i*u-a*l)/w,(n*l-t*u)/w,(t*a-n*i)/w]}function ks(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}Object.defineProperty(nn,"__esModule",{value:!0});nn.default=function(e,t,n){var r=Is.get("gl");if(r.matrixWarp=r.matrixWarp||(0,Ps.warpShader)("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),e=Array.prototype.concat.apply([],e),e.length==4)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(e.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return Fs.simpleShader.call(this,r.matrixWarp,{matrix:t?(0,As.getInverse)(e):e,texSize:[this.width,this.height],useTextureSpace:n|0}),this};var Ps=Q,As=He,Fs=D,Os=L,Is=Rs(Os);function Rs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var rn={};Object.defineProperty(rn,"__esModule",{value:!0});rn.default=function(e,t){var n=ot.getSquareToQuad.apply(null,t),r=ot.getSquareToQuad.apply(null,e),i=(0,ot.multiply)((0,ot.getInverse)(n),r);return this.matrixWarp(i)};var ot=He,an={};Object.defineProperty(an,"__esModule",{value:!0});an.default=function(e,t,n,r){var i=Ds.get("gl");return i.swirl=i.swirl||(0,zs.warpShader)("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),Ls.simpleShader.call(this,i.swirl,{radius:n,center:[e,t],angle:r,texSize:[this.width,this.height]}),this};var zs=Q,Ls=D,Bs=L,Ds=$s(Bs);function $s(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Bt;Object.defineProperty(e,"brightnessContrast",{enumerable:!0,get:function(){return d(t).default}});var n=Dt;Object.defineProperty(e,"curves",{enumerable:!0,get:function(){return d(n).default}});var r=$t;Object.defineProperty(e,"denoise",{enumerable:!0,get:function(){return d(r).default}});var i=Nt;Object.defineProperty(e,"hueSaturation",{enumerable:!0,get:function(){return d(i).default}});var a=Ut;Object.defineProperty(e,"noise",{enumerable:!0,get:function(){return d(a).default}});var s=qt;Object.defineProperty(e,"sepia",{enumerable:!0,get:function(){return d(s).default}});var l=Gt;Object.defineProperty(e,"unsharpMask",{enumerable:!0,get:function(){return d(l).default}});var u=Wt;Object.defineProperty(e,"vibrance",{enumerable:!0,get:function(){return d(u).default}});var c=Xt;Object.defineProperty(e,"vignette",{enumerable:!0,get:function(){return d(c).default}});var w=Ht;Object.defineProperty(e,"lensBlur",{enumerable:!0,get:function(){return d(w).default}});var x=Yt;Object.defineProperty(e,"tiltShift",{enumerable:!0,get:function(){return d(x).default}});var y=Vt;Object.defineProperty(e,"triangleBlur",{enumerable:!0,get:function(){return d(y).default}});var g=Zt;Object.defineProperty(e,"zoomBlur",{enumerable:!0,get:function(){return d(g).default}});var _=Qt;Object.defineProperty(e,"colorHalftone",{enumerable:!0,get:function(){return d(_).default}});var S=Kt;Object.defineProperty(e,"dotScreen",{enumerable:!0,get:function(){return d(S).default}});var C=Jt;Object.defineProperty(e,"edgeWork",{enumerable:!0,get:function(){return d(C).default}});var m=jt;Object.defineProperty(e,"hexagonalPixelate",{enumerable:!0,get:function(){return d(m).default}});var h=en;Object.defineProperty(e,"ink",{enumerable:!0,get:function(){return d(h).default}});var v=tn;Object.defineProperty(e,"bulgePinch",{enumerable:!0,get:function(){return d(v).default}});var f=nn;Object.defineProperty(e,"matrixWarp",{enumerable:!0,get:function(){return d(f).default}});var E=rn;Object.defineProperty(e,"perspective",{enumerable:!0,get:function(){return d(E).default}});var o=an;Object.defineProperty(e,"swirl",{enumerable:!0,get:function(){return d(o).default}});function d(p){return p&&p.__esModule?p:{default:p}}})(Zn);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.splineInterpolate=void 0;var t=D;Object.defineProperty(e,"splineInterpolate",{enumerable:!0,get:function(){return t.splineInterpolate}}),e.canvas=E;var n=L,r=x(n),i=Lt,a=w(i),s=N,l=w(s),u=Zn,c=x(u);function w(o){return o&&o.__esModule?o:{default:o}}function x(o){if(o&&o.__esModule)return o;var d={};if(o!=null)for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(d[p]=o[p]);return d.default=o,d}function y(o){return{_:o,loadContentsOf:function(p){r.set({gl:this._.gl}),this._.loadContentsOf(p)},destroy:function(){r.set({gl:this._.gl}),this._.destroy()}}}function g(o){return y(a.default.fromElement(o))}function _(o,d){var p=r.get("gl"),T=p.UNSIGNED_BYTE;if(p.getExtension("OES_texture_float")&&p.getExtension("OES_texture_float_linear")){var k=new a.default(100,100,p.RGBA,p.FLOAT);try{k.drawTo(function(){T=p.FLOAT})}catch{}k.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=o,this.height=d,this._.texture=new a.default(o,d,p.RGBA,T),this._.spareTexture=new a.default(o,d,p.RGBA,T),this._.extraTexture=this._.extraTexture||new a.default(0,0,p.RGBA,T),this._.flippedShader=this._.flippedShader||new l.default(null,"	    uniform sampler2D texture;	    varying vec2 texCoord;	    void main() {	      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));	    }	  "),this._.isInitialized=!0}function S(o,d,p){return(!this._.isInitialized||o._.width!=this.width||o._.height!=this.height)&&_.call(this,d||o._.width,p||o._.height),o._.use(),this._.texture.drawTo(function(){l.default.getDefaultShader().drawRect()}),this}function C(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function m(o){return o.parentNode.insertBefore(this,o),o.parentNode.removeChild(o),this}function h(){var o=r.get("gl"),d=new a.default(this._.texture.width,this._.texture.height,o.RGBA,o.UNSIGNED_BYTE);return this._.texture.use(),d.drawTo(function(){l.default.getDefaultShader().drawRect()}),y(d)}function v(){var o=r.get("gl"),d=this._.texture.width,p=this._.texture.height,T=new Uint8Array(d*p*4);return this._.texture.drawTo(function(){o.readPixels(0,0,d,p,o.RGBA,o.UNSIGNED_BYTE,T)}),T}function f(o){return function(){return r.set({gl:this._.gl}),o.apply(this,arguments)}}function E(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("canvas");try{r.set({gl:o.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{r.set({gl:null})}var d=r.get("gl");if(!d)throw"This browser does not support WebGL";return o._={gl:d,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},o.texture=f(g),o.draw=f(S),o.update=f(C),o.replace=f(m),o.contents=f(h),o.getPixelArray=f(v),o.brightnessContrast=f(c.brightnessContrast),o.hexagonalPixelate=f(c.hexagonalPixelate),o.hueSaturation=f(c.hueSaturation),o.colorHalftone=f(c.colorHalftone),o.triangleBlur=f(c.triangleBlur),o.unsharpMask=f(c.unsharpMask),o.perspective=f(c.perspective),o.matrixWarp=f(c.matrixWarp),o.bulgePinch=f(c.bulgePinch),o.tiltShift=f(c.tiltShift),o.dotScreen=f(c.dotScreen),o.edgeWork=f(c.edgeWork),o.lensBlur=f(c.lensBlur),o.zoomBlur=f(c.zoomBlur),o.noise=f(c.noise),o.denoise=f(c.denoise),o.curves=f(c.curves),o.swirl=f(c.swirl),o.ink=f(c.ink),o.vignette=f(c.vignette),o.vibrance=f(c.vibrance),o.sepia=f(c.sepia),o}})(Yn);class Ns{constructor(t=!0){b(this,"fxCanvas",Yn.canvas());b(this,"textureMap",new Map);b(this,"cache");this.cache=t}draw(t,n,r){const i=this.cache&&this.textureMap.has(n)?this.textureMap.get(n):this.fxCanvas.texture(n);this.cache&&!this.textureMap.has(n)&&this.textureMap.set(n,i);let[a,s]=r[0],[l,u]=r[1],[c,w]=r[2],[x,y]=r[3];const[g,_]=r[4];a+=g,l+=g,c+=g,x+=g,s+=_,u+=_,w+=_,y+=_;const S=t.canvas;this.fxCanvas.draw(i,S.width,S.height).perspective([0,0,S.width,0,0,S.height,S.width,S.height],[a,s,x,y,l,u,c,w]).update(),t.drawImage(this.fxCanvas,0,0),this.cache||i.destroy()}destroy(){if(this.cache)for(const t of[...this.textureMap.values()])t.destroy()}}function Us(e){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.translate(e.width,0),n.scale(-1,1),n.drawImage(e,0,0),t}function qs(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=e.width,i=e.height;t.width=r,t.height=i,n.drawImage(e,0,0);const a=n.getImageData(0,0,r,i),s=a.data;for(let l=0;l<s.length;l+=4){const u=s[l],c=s[l+1],w=s[l+2];u+c+w>383?(s[l]=255,s[l+1]=255,s[l+2]=255):(s[l]=0,s[l+1]=0,s[l+2]=0)}return n.putImageData(a,0,0),t}function Gs(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=Math.min(e.width,e.height)/2;return t.width=r*2,t.height=r*2,n.save(),n.beginPath(),n.arc(r,r,r,0,2*Math.PI),n.closePath(),n.clip(),n.drawImage(e,r-e.width/2,r-e.height/2),n.restore(),t}function Ws(e,t,n=!0){const r=document.createElement("canvas"),i=r.getContext("2d"),a=e.width,s=e.height;if(!n)return r.width=a,r.height=s,i.translate(a/2,s/2),i.rotate(t*Math.PI/180),i.drawImage(e,-a/2,-s/2),r;const l=Math.abs(Math.sin(t*Math.PI/180)),u=Math.abs(Math.cos(t*Math.PI/180)),c=Math.floor(a*u+s*l),w=Math.floor(s*u+a*l);return r.width=c,r.height=w,i.translate(c/2,w/2),i.rotate(t*Math.PI/180),i.drawImage(e,-a/2,-s/2),r}var Z="INUMBER",Ye="IOP1",Ve="IOP2",Ze="IOP3",fe="IVAR",Pe="IVARNAME",Ge="IFUNCALL",gt="IFUNDEF",H="IEXPR",sn="IEXPREVAL",Fe="IMEMBER",mt="IENDSTATEMENT",We="IARRAY";function O(e,t){this.type=e,this.value=t??0}O.prototype.toString=function(){switch(this.type){case Z:case Ye:case Ve:case Ze:case fe:case Pe:case mt:return this.value;case Ge:return"CALL "+this.value;case gt:return"DEF "+this.value;case We:return"ARRAY "+this.value;case Fe:return"."+this.value;default:return"Invalid Instruction"}};function xt(e){return new O(Ye,e)}function ge(e){return new O(Ve,e)}function Qn(e){return new O(Ze,e)}function Rt(e,t,n,r,i){for(var a=[],s=[],l,u,c,w,x=0;x<e.length;x++){var y=e[x],g=y.type;if(g===Z||g===Pe)Array.isArray(y.value)?a.push.apply(a,Rt(y.value.map(function(_){return new O(Z,_)}).concat(new O(We,y.value.length)),t,n,r,i)):a.push(y);else if(g===fe&&i.hasOwnProperty(y.value))y=new O(Z,i[y.value]),a.push(y);else if(g===Ve&&a.length>1)u=a.pop(),l=a.pop(),w=n[y.value],y=new O(Z,w(l.value,u.value)),a.push(y);else if(g===Ze&&a.length>2)c=a.pop(),u=a.pop(),l=a.pop(),y.value==="?"?a.push(l.value?u.value:c.value):(w=r[y.value],y=new O(Z,w(l.value,u.value,c.value)),a.push(y));else if(g===Ye&&a.length>0)l=a.pop(),w=t[y.value],y=new O(Z,w(l.value)),a.push(y);else if(g===H){for(;a.length>0;)s.push(a.shift());s.push(new O(H,Rt(y.value,t,n,r,i)))}else if(g===Fe&&a.length>0)l=a.pop(),a.push(new O(Z,l.value[y.value]));else{for(;a.length>0;)s.push(a.shift());s.push(y)}}for(;a.length>0;)s.push(a.shift());return s}function Kn(e,t,n){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=a.type;if(s===fe&&a.value===t)for(var l=0;l<n.tokens.length;l++){var u=n.tokens[l],c;u.type===Ye?c=xt(u.value):u.type===Ve?c=ge(u.value):u.type===Ze?c=Qn(u.value):c=new O(u.type,u.value),r.push(c)}else s===H?r.push(new O(H,Kn(a.value,t,n))):r.push(a)}return r}function be(e,t,n){var r=[],i,a,s,l,u,c;if(on(e))return oe(e,n);for(var w=e.length,x=0;x<w;x++){var y=e[x],g=y.type;if(g===Z||g===Pe)r.push(y.value);else if(g===Ve)a=r.pop(),i=r.pop(),y.value==="and"?r.push(i?!!be(a,t,n):!1):y.value==="or"?r.push(i?!0:!!be(a,t,n)):y.value==="="?(l=t.binaryOps[y.value],r.push(l(i,be(a,t,n),n))):(l=t.binaryOps[y.value],r.push(l(oe(i,n),oe(a,n))));else if(g===Ze)s=r.pop(),a=r.pop(),i=r.pop(),y.value==="?"?r.push(be(i?a:s,t,n)):(l=t.ternaryOps[y.value],r.push(l(oe(i,n),oe(a,n),oe(s,n))));else if(g===fe)if(y.value in t.functions)r.push(t.functions[y.value]);else if(y.value in t.unaryOps&&t.parser.isOperatorEnabled(y.value))r.push(t.unaryOps[y.value]);else{var _=n[y.value];if(_!==void 0)r.push(_);else throw new Error("undefined variable: "+y.value)}else if(g===Ye)i=r.pop(),l=t.unaryOps[y.value],r.push(l(oe(i,n)));else if(g===Ge){for(c=y.value,u=[];c-- >0;)u.unshift(oe(r.pop(),n));if(l=r.pop(),l.apply&&l.call)r.push(l.apply(void 0,u));else throw new Error(l+" is not a function")}else if(g===gt)r.push(function(){for(var S=r.pop(),C=[],m=y.value;m-- >0;)C.unshift(r.pop());var h=r.pop(),v=function(){for(var f=Object.assign({},n),E=0,o=C.length;E<o;E++)f[C[E]]=arguments[E];return be(S,t,f)};return Object.defineProperty(v,"name",{value:h,writable:!1}),n[h]=v,v}());else if(g===H)r.push(Xs(y,t));else if(g===sn)r.push(y);else if(g===Fe)i=r.pop(),r.push(i[y.value]);else if(g===mt)r.pop();else if(g===We){for(c=y.value,u=[];c-- >0;)u.unshift(r.pop());r.push(u)}else throw new Error("invalid Expression")}if(r.length>1)throw new Error("invalid Expression (parity)");return r[0]===0?0:oe(r[0],n)}function Xs(e,t,n){return on(e)?e:{type:sn,value:function(r){return be(e.value,t,r)}}}function on(e){return e&&e.type===sn}function oe(e,t){return on(e)?e.value(t):e}function ln(e,t){for(var n=[],r,i,a,s,l,u,c=0;c<e.length;c++){var w=e[c],x=w.type;if(x===Z)typeof w.value=="number"&&w.value<0?n.push("("+w.value+")"):Array.isArray(w.value)?n.push("["+w.value.map(In).join(", ")+"]"):n.push(In(w.value));else if(x===Ve)i=n.pop(),r=n.pop(),s=w.value,t?s==="^"?n.push("Math.pow("+r+", "+i+")"):s==="and"?n.push("(!!"+r+" && !!"+i+")"):s==="or"?n.push("(!!"+r+" || !!"+i+")"):s==="||"?n.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+r+"),("+i+")))"):s==="=="?n.push("("+r+" === "+i+")"):s==="!="?n.push("("+r+" !== "+i+")"):s==="["?n.push(r+"[("+i+") | 0]"):n.push("("+r+" "+s+" "+i+")"):s==="["?n.push(r+"["+i+"]"):n.push("("+r+" "+s+" "+i+")");else if(x===Ze)if(a=n.pop(),i=n.pop(),r=n.pop(),s=w.value,s==="?")n.push("("+r+" ? "+i+" : "+a+")");else throw new Error("invalid Expression");else if(x===fe||x===Pe)n.push(w.value);else if(x===Ye)r=n.pop(),s=w.value,s==="-"||s==="+"?n.push("("+s+r+")"):t?s==="not"?n.push("(!"+r+")"):s==="!"?n.push("fac("+r+")"):n.push(s+"("+r+")"):s==="!"?n.push("("+r+"!)"):n.push("("+s+" "+r+")");else if(x===Ge){for(u=w.value,l=[];u-- >0;)l.unshift(n.pop());s=n.pop(),n.push(s+"("+l.join(", ")+")")}else if(x===gt){for(i=n.pop(),u=w.value,l=[];u-- >0;)l.unshift(n.pop());r=n.pop(),t?n.push("("+r+" = function("+l.join(", ")+") { return "+i+" })"):n.push("("+r+"("+l.join(", ")+") = "+i+")")}else if(x===Fe)r=n.pop(),n.push(r+"."+w.value);else if(x===We){for(u=w.value,l=[];u-- >0;)l.unshift(n.pop());n.push("["+l.join(", ")+"]")}else if(x===H)n.push("("+ln(w.value,t)+")");else if(x!==mt)throw new Error("invalid Expression")}return n.length>1&&(t?n=[n.join(",")]:n=[n.join(";")]),String(n[0])}function In(e){return typeof e=="string"?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function ze(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function hn(e,t,n){n=n||{};for(var r=!!n.withMembers,i=null,a=0;a<e.length;a++){var s=e[a];s.type===fe||s.type===Pe?!r&&!ze(t,s.value)?t.push(s.value):(i!==null&&(ze(t,i)||t.push(i)),i=s.value):s.type===Fe&&r&&i!==null?i+="."+s.value:s.type===H?hn(s.value,t,n):i!==null&&(ze(t,i)||t.push(i),i=null)}i!==null&&!ze(t,i)&&t.push(i)}function re(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}re.prototype.simplify=function(e){return e=e||{},new re(Rt(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)};re.prototype.substitute=function(e,t){return t instanceof re||(t=this.parser.parse(String(t))),new re(Kn(this.tokens,e,t),this.parser)};re.prototype.evaluate=function(e){return e=e||{},be(this.tokens,this,e)};re.prototype.toString=function(){return ln(this.tokens,!1)};re.prototype.symbols=function(e){e=e||{};var t=[];return hn(this.tokens,t,e),t};re.prototype.variables=function(e){e=e||{};var t=[];hn(this.tokens,t,e);var n=this.functions;return t.filter(function(r){return!(r in n)})};re.prototype.toJSFunction=function(e,t){var n=this,r=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+ln(this.simplify(t).tokens,!0)+"; }");return function(){return r.apply(n,arguments)}};var Ke="TEOF",B="TOP",yt="TNUMBER",Jn="TSTRING",pe="TPAREN",Xe="TBRACKET",wt="TCOMMA",un="TNAME",cn="TSEMICOLON";function jn(e,t,n){this.type=e,this.value=t,this.index=n}jn.prototype.toString=function(){return this.type+": "+this.value};function U(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}U.prototype.newToken=function(e,t,n){return new jn(e,t,n??this.pos)};U.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};U.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};U.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken(Ke,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};U.prototype.isString=function(){var e=!1,t=this.pos,n=this.expression.charAt(t);if(n==="'"||n==='"')for(var r=this.expression.indexOf(n,t+1);r>=0&&this.pos<this.expression.length;){if(this.pos=r+1,this.expression.charAt(r-1)!=="\\"){var i=this.expression.substring(t+1,r);this.current=this.newToken(Jn,this.unescape(i),t),e=!0;break}r=this.expression.indexOf(n,r+1)}return e};U.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return e==="("||e===")"?(this.current=this.newToken(pe,e),this.pos++,!0):!1};U.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return(e==="["||e==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(Xe,e),this.pos++,!0):!1};U.prototype.isComma=function(){var e=this.expression.charAt(this.pos);return e===","?(this.current=this.newToken(wt,","),this.pos++,!0):!1};U.prototype.isSemicolon=function(){var e=this.expression.charAt(this.pos);return e===";"?(this.current=this.newToken(cn,";"),this.pos++,!0):!1};U.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||n!=="_"&&n!=="."&&(n<"0"||n>"9")))break}if(t>e){var r=this.expression.substring(e,t);if(r in this.consts)return this.current=this.newToken(yt,this.consts[r]),this.pos+=r.length,!0}return!1};U.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||n!=="_"&&(n<"0"||n>"9")))break}if(t>e){var r=this.expression.substring(e,t);if(this.isOperatorEnabled(r)&&(r in this.binaryOps||r in this.unaryOps||r in this.ternaryOps))return this.current=this.newToken(B,r),this.pos+=r.length,!0}return!1};U.prototype.isName=function(){for(var e=this.pos,t=e,n=!1;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()){if(t===this.pos&&(r==="$"||r==="_")){r==="_"&&(n=!0);continue}else if(t===this.pos||!n||r!=="_"&&(r<"0"||r>"9"))break}else n=!0}if(n){var i=this.expression.substring(e,t);return this.current=this.newToken(un,i),this.pos+=i.length,!0}return!1};U.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);(t===" "||t==="	"||t===`
`||t==="\r")&&(e=!0,this.pos++,!(this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var Hs=/^[0-9a-f]{4}$/i;U.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var n=e.substring(0,t);t>=0;){var r=e.charAt(++t);switch(r){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+=`
`;break;case"r":n+="\r";break;case"t":n+="	";break;case"u":var i=e.substring(t+1,t+5);Hs.test(i)||this.parseError("Illegal escape sequence: \\u"+i),n+=String.fromCharCode(parseInt(i,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+r+'"')}++t;var a=e.indexOf("\\",t);n+=e.substring(t,a<0?e.length:a),t=a}return n};U.prototype.isComment=function(){var e=this.expression.charAt(this.pos);return e==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};U.prototype.isRadixInteger=function(){var e=this.pos;if(e>=this.expression.length-2||this.expression.charAt(e)!=="0")return!1;++e;var t,n;if(this.expression.charAt(e)==="x")t=16,n=/^[0-9a-f]$/i,++e;else if(this.expression.charAt(e)==="b")t=2,n=/^[01]$/i,++e;else return!1;for(var r=!1,i=e;e<this.expression.length;){var a=this.expression.charAt(e);if(n.test(a))e++,r=!0;else break}return r&&(this.current=this.newToken(yt,parseInt(this.expression.substring(i,e),t)),this.pos=e),r};U.prototype.isNumber=function(){for(var e=!1,t=this.pos,n=t,r=t,i=!1,a=!1,s;t<this.expression.length&&(s=this.expression.charAt(t),s>="0"&&s<="9"||!i&&s===".");)s==="."?i=!0:a=!0,t++,e=a;if(e&&(r=t),s==="e"||s==="E"){t++;for(var l=!0,u=!1;t<this.expression.length;){if(s=this.expression.charAt(t),l&&(s==="+"||s==="-"))l=!1;else if(s>="0"&&s<="9")u=!0,l=!1;else break;t++}u||(t=r)}return e?(this.current=this.newToken(yt,parseFloat(this.expression.substring(n,t))),this.pos=t):this.pos=r,e};U.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if(t==="+"||t==="-"||t==="*"||t==="/"||t==="%"||t==="^"||t==="?"||t===":"||t===".")this.current=this.newToken(B,t);else if(t==="∙"||t==="•")this.current=this.newToken(B,"*");else if(t===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(B,">="),this.pos++):this.current=this.newToken(B,">");else if(t==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(B,"<="),this.pos++):this.current=this.newToken(B,"<");else if(t==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(B,"||"),this.pos++;else return!1;else if(t==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(B,"=="),this.pos++):this.current=this.newToken(B,t);else if(t==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(B,"!="),this.pos++):this.current=this.newToken(B,t);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=e,!1)};U.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)};U.prototype.getCoordinates=function(){var e=0,t,n=-1;do e++,t=this.pos-n,n=this.expression.indexOf(`
`,n+1);while(n>=0&&n<this.pos);return{line:e,column:t}};U.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)};function $(e,t,n){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=n.allowMemberAccess!==!1}$.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};$.prototype.tokenMatches=function(e,t){return typeof t>"u"?!0:Array.isArray(t)?ze(t,e.value):typeof t=="function"?t(e):e.value===t};$.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};$.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};$.prototype.accept=function(e,t){return this.nextToken.type===e&&this.tokenMatches(this.nextToken,t)?(this.next(),!0):!1};$.prototype.expect=function(e,t){if(!this.accept(e,t)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(t||e))}};$.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;function n(i){return i.value in t}if(this.accept(un)||this.accept(B,n))e.push(new O(fe,this.current.value));else if(this.accept(yt))e.push(new O(Z,this.current.value));else if(this.accept(Jn))e.push(new O(Z,this.current.value));else if(this.accept(pe,"("))this.parseExpression(e),this.expect(pe,")");else if(this.accept(Xe,"["))if(this.accept(Xe,"]"))e.push(new O(We,0));else{var r=this.parseArrayList(e);e.push(new O(We,r))}else throw new Error("unexpected "+this.nextToken)};$.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),!this.parseUntilEndStatement(e,t)&&this.pushExpression(e,t))};$.prototype.pushExpression=function(e,t){for(var n=0,r=t.length;n<r;n++)e.push(t[n])};$.prototype.parseUntilEndStatement=function(e,t){return this.accept(cn)?(this.nextToken&&this.nextToken.type!==Ke&&!(this.nextToken.type===pe&&this.nextToken.value===")")&&t.push(new O(mt)),this.nextToken.type!==Ke&&this.parseExpression(t),e.push(new O(H,t)),!0):!1};$.prototype.parseArrayList=function(e){for(var t=0;!this.accept(Xe,"]");)for(this.parseExpression(e),++t;this.accept(wt);)this.parseExpression(e),++t;return t};$.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(B,"=");){var t=e.pop(),n=[],r=e.length-1;if(t.type===Ge){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,a=t.value+1;i<a;i++){var s=r-i;e[s].type===fe&&(e[s]=new O(Pe,e[s].value))}this.parseVariableAssignmentExpression(n),e.push(new O(H,n)),e.push(new O(gt,t.value));continue}if(t.type!==fe&&t.type!==Fe)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),e.push(new O(Pe,t.value)),e.push(new O(H,n)),e.push(ge("="))}};$.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(B,"?");){var t=[],n=[];this.parseConditionalExpression(t),this.expect(B,":"),this.parseConditionalExpression(n),e.push(new O(H,t)),e.push(new O(H,n)),e.push(Qn("?"))}};$.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(B,"or");){var t=[];this.parseAndExpression(t),e.push(new O(H,t)),e.push(ge("or"))}};$.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(B,"and");){var t=[];this.parseComparison(t),e.push(new O(H,t)),e.push(ge("and"))}};var Ys=["==","!=","<","<=",">=",">","in"];$.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(B,Ys);){var t=this.current;this.parseAddSub(e),e.push(ge(t.value))}};var Vs=["+","-","||"];$.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(B,Vs);){var t=this.current;this.parseTerm(e),e.push(ge(t.value))}};var Zs=["*","/","%"];$.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(B,Zs);){var t=this.current;this.parseFactor(e),e.push(ge(t.value))}};$.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;function n(i){return i.value in t}if(this.save(),this.accept(B,n)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===pe&&this.nextToken.value==="("){this.restore(),this.parseExponential(e);return}else if(this.nextToken.type===cn||this.nextToken.type===wt||this.nextToken.type===Ke||this.nextToken.type===pe&&this.nextToken.value===")"){this.restore(),this.parseAtom(e);return}}var r=this.current;this.parseFactor(e),e.push(xt(r.value))}else this.parseExponential(e)};$.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(B,"^");)this.parseFactor(e),e.push(ge("^"))};$.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(B,"!");)e.push(xt("!"))};$.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;function n(a){return a.value in t}if(this.accept(B,n)){var r=this.current;this.parseAtom(e),e.push(xt(r.value))}else for(this.parseMemberExpression(e);this.accept(pe,"(");)if(this.accept(pe,")"))e.push(new O(Ge,0));else{var i=this.parseArgumentList(e);e.push(new O(Ge,i))}};$.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(pe,")");)for(this.parseExpression(e),++t;this.accept(wt);)this.parseExpression(e),++t;return t};$.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(B,".")||this.accept(Xe,"[");){var t=this.current;if(t.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(un),e.push(new O(Fe,this.current.value))}else if(t.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(Xe,"]"),e.push(ge("["))}else throw new Error("unexpected symbol: "+t.value)}};function Qs(e,t){return Number(e)+Number(t)}function Ks(e,t){return e-t}function Js(e,t){return e*t}function js(e,t){return e/t}function eo(e,t){return e%t}function to(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function no(e,t){return e===t}function ro(e,t){return e!==t}function io(e,t){return e>t}function ao(e,t){return e<t}function so(e,t){return e>=t}function oo(e,t){return e<=t}function lo(e,t){return!!(e&&t)}function ho(e,t){return!!(e||t)}function uo(e,t){return ze(t,e)}function co(e){return(Math.exp(e)-Math.exp(-e))/2}function fo(e){return(Math.exp(e)+Math.exp(-e))/2}function po(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function vo(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function go(e){return Math.log(e+Math.sqrt(e*e-1))}function mo(e){return Math.log((1+e)/(1-e))/2}function Rn(e){return Math.log(e)*Math.LOG10E}function xo(e){return-e}function yo(e){return!e}function wo(e){return e<0?Math.ceil(e):Math.floor(e)}function bo(e){return Math.random()*(e||1)}function zn(e){return dn(e+1)}function _o(e){return isFinite(e)&&e===Math.round(e)}var Eo=4.7421875,Ft=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function dn(e){var t,n;if(_o(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var r=e-2,i=e-1;r>1;)i*=r,r--;return i===0&&(i=1),i}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*dn(1-e));if(e>=171.35)return 1/0;if(e>85){var a=e*e,s=a*e,l=s*e,u=l*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*a)-139/(51840*s)-571/(2488320*l)+163879/(209018880*u)+5246819/(75246796800*u*e))}--e,n=Ft[0];for(var c=1;c<Ft.length;++c)n+=Ft[c]/(e+c);return t=e+Eo+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*n}function Co(e){return Array.isArray(e)?e.length:String(e).length}function Ln(){for(var e=0,t=0,n=0;n<arguments.length;n++){var r=Math.abs(arguments[n]),i;t<r?(i=t/r,e=e*i*i+1,t=r):r>0?(i=r/t,e+=i*i):e+=r}return t===1/0?1/0:t*Math.sqrt(e)}function Bn(e,t,n){return e?t:n}function Mo(e,t){return typeof t>"u"||+t==0?Math.round(e):(e=+e,t=-+t,isNaN(e)||!(typeof t=="number"&&t%1===0)?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t))))}function To(e,t,n){return n&&(n[e]=t),t}function So(e,t){return e[t|0]}function ko(e){return arguments.length===1&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function Po(e){return arguments.length===1&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function Ao(e,t){if(typeof e!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map(function(n,r){return e(n,r)})}function Fo(e,t,n){if(typeof e!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce(function(r,i,a){return e(r,i,a)},t)}function Oo(e,t){if(typeof e!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter(function(n,r){return e(n,r)})}function Io(e,t){if(!(Array.isArray(t)||typeof t=="string"))throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function Ro(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function zo(e){return(e>0)-(e<0)||+e}var Dn=1/3;function Lo(e){return e<0?-Math.pow(-e,Dn):Math.pow(e,Dn)}function Bo(e){return Math.exp(e)-1}function Do(e){return Math.log(1+e)}function $o(e){return Math.log(e)/Math.LN2}function ve(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||co,cosh:Math.cosh||fo,tanh:Math.tanh||po,asinh:Math.asinh||vo,acosh:Math.acosh||go,atanh:Math.atanh||mo,sqrt:Math.sqrt,cbrt:Math.cbrt||Lo,log:Math.log,log2:Math.log2||$o,ln:Math.log,lg:Math.log10||Rn,log10:Math.log10||Rn,expm1:Math.expm1||Bo,log1p:Math.log1p||Do,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||wo,"-":xo,"+":Number,exp:Math.exp,not:yo,length:Co,"!":zn,sign:Math.sign||zo},this.binaryOps={"+":Qs,"-":Ks,"*":Js,"/":js,"%":eo,"^":Math.pow,"||":to,"==":no,"!=":ro,">":io,"<":ao,">=":so,"<=":oo,and:lo,or:ho,in:uo,"=":To,"[":So},this.ternaryOps={"?":Bn},this.functions={random:bo,fac:zn,min:Po,max:ko,hypot:Math.hypot||Ln,pyt:Math.hypot||Ln,pow:Math.pow,atan2:Math.atan2,if:Bn,gamma:dn,roundTo:Mo,map:Ao,fold:Fo,filter:Oo,indexOf:Io,join:Ro},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}ve.prototype.parse=function(e){var t=[],n=new $(this,new U(this,e),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(t),n.expect(Ke,"EOF"),new re(t,this)};ve.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var er=new ve;ve.parse=function(e){return er.parse(e)};ve.evaluate=function(e,t){return er.parse(e).evaluate(t)};var $n={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function No(e){return $n.hasOwnProperty(e)?$n[e]:e}ve.prototype.isOperatorEnabled=function(e){var t=No(e),n=this.options.operators||{};return!(t in n)||!!n[t]};var ke={},tr={},de={};Object.defineProperty(de,"__esModule",{value:!0});de.loop=de.conditional=de.parse=void 0;var Uo=function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;if(Array.isArray(n))n.forEach(function(s){return e(t,s,r,i)});else if(typeof n=="function")n(t,r,i,e);else{var a=Object.keys(n)[0];Array.isArray(n[a])?(i[a]={},e(t,n[a],r,i[a])):i[a]=n[a](t,r,i,e)}return r};de.parse=Uo;var qo=function(t,n){return function(r,i,a,s){n(r,i,a)&&s(r,t,i,a)}};de.conditional=qo;var Go=function(t,n){return function(r,i,a,s){for(var l=[],u=r.pos;n(r,i,a);){var c={};if(s(r,t,i,c),r.pos===u)break;u=r.pos,l.push(c)}return l}};de.loop=Go;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.readBits=q.readArray=q.readUnsigned=q.readString=q.peekBytes=q.readBytes=q.peekByte=q.readByte=q.buildStream=void 0;var Wo=function(t){return{data:t,pos:0}};q.buildStream=Wo;var nr=function(){return function(t){return t.data[t.pos++]}};q.readByte=nr;var Xo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+t]}};q.peekByte=Xo;var bt=function(t){return function(n){return n.data.subarray(n.pos,n.pos+=t)}};q.readBytes=bt;var Ho=function(t){return function(n){return n.data.subarray(n.pos,n.pos+t)}};q.peekBytes=Ho;var Yo=function(t){return function(n){return Array.from(bt(t)(n)).map(function(r){return String.fromCharCode(r)}).join("")}};q.readString=Yo;var Vo=function(t){return function(n){var r=bt(2)(n);return t?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};q.readUnsigned=Vo;var Zo=function(t,n){return function(r,i,a){for(var s=typeof n=="function"?n(r,i,a):n,l=bt(t),u=new Array(s),c=0;c<s;c++)u[c]=l(r);return u}};q.readArray=Zo;var Qo=function(t,n,r){for(var i=0,a=0;a<r;a++)i+=t[n+a]&&Math.pow(2,r-a-1);return i},Ko=function(t){return function(n){for(var r=nr()(n),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(r&1<<a);return Object.keys(t).reduce(function(s,l){var u=t[l];return u.length?s[l]=Qo(i,u.index,u.length):s[l]=i[u.index],s},{})}};q.readBits=Ko;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=de,n=q,r={blocks:function(y){for(var g=0,_=[],S=y.data.length,C=0,m=(0,n.readByte)()(y);m!==g&&m;m=(0,n.readByte)()(y)){if(y.pos+m>=S){var h=S-y.pos;_.push((0,n.readBytes)(h)(y)),C+=h;break}_.push((0,n.readBytes)(m)(y)),C+=m}for(var v=new Uint8Array(C),f=0,E=0;E<_.length;E++)v.set(_[E],f),f+=_[E].length;return v}},i=(0,t.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===249}),a=(0,t.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,n.readArray)(3,function(x,y,g){return Math.pow(2,g.descriptor.lct.size+1)})},function(x,y,g){return g.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},r]}]},function(x){return(0,n.peekByte)()(x)===44}),s=(0,t.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(y,g,_){return(0,n.readBytes)(_.text.blockSize)(y)}},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===1}),l=(0,t.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(y,g,_){return(0,n.readString)(_.blockSize)(y)}},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===255}),u=(0,t.conditional)({comment:[{codes:(0,n.readBytes)(2)},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===254}),c=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,t.conditional)({gct:(0,n.readArray)(3,function(x,y){return Math.pow(2,y.lsd.gct.size+1)})},function(x,y){return y.lsd.gct.exists}),{frames:(0,t.loop)([i,l,u,a,s],function(x){var y=(0,n.peekByte)()(x);return y===33||y===44})}],w=c;e.default=w})(tr);var _t={};Object.defineProperty(_t,"__esModule",{value:!0});_t.deinterlace=void 0;var Jo=function(t,n){for(var r=new Array(t.length),i=t.length/n,a=function(y,g){var _=t.slice(g*n,(g+1)*n);r.splice.apply(r,[y*n,n].concat(_))},s=[0,4,2,1],l=[8,8,4,2],u=0,c=0;c<4;c++)for(var w=s[c];w<i;w+=l[c])a(w,u),u++;return r};_t.deinterlace=Jo;var Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.lzw=void 0;var jo=function(t,n,r){var i=4096,a=-1,s=r,l,u,c,w,x,y,g,o,_,S,E,C,d,p,k,T,m=new Array(r),h=new Array(i),v=new Array(i),f=new Array(i+1);for(C=t,u=1<<C,x=u+1,l=u+2,g=a,w=C+1,c=(1<<w)-1,_=0;_<u;_++)h[_]=0,v[_]=_;var E,o,d,p,T,k;for(E=o=d=p=T=k=0,S=0;S<s;){if(p===0){if(o<w){E+=n[k]<<o,o+=8,k++;continue}if(_=E&c,E>>=w,o-=w,_>l||_==x)break;if(_==u){w=C+1,c=(1<<w)-1,l=u+2,g=a;continue}if(g==a){f[p++]=v[_],g=_,d=_;continue}for(y=_,_==l&&(f[p++]=d,_=g);_>u;)f[p++]=v[_],_=h[_];d=v[_]&255,f[p++]=d,l<i&&(h[l]=g,v[l]=d,l++,!(l&c)&&l<i&&(w++,c+=l)),g=y}p--,m[T++]=f[p],S++}for(S=T;S<s;S++)m[S]=0;return m};Et.lzw=jo;Object.defineProperty(ke,"__esModule",{value:!0});var rr=ke.decompressFrames=ke.decompressFrame=ir=ke.parseGIF=void 0,el=al(tr),tl=de,nl=q,rl=_t,il=Et;function al(e){return e&&e.__esModule?e:{default:e}}var sl=function(t){var n=new Uint8Array(t);return(0,tl.parse)((0,nl.buildStream)(n),el.default)},ir=ke.parseGIF=sl,ol=function(t){for(var n=t.pixels.length,r=new Uint8ClampedArray(n*4),i=0;i<n;i++){var a=i*4,s=t.pixels[i],l=t.colorTable[s]||[0,0,0];r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=s!==t.transparentIndex?255:0}return r},ar=function(t,n,r){if(!t.image){console.warn("gif frame does not have associated image.");return}var i=t.image,a=i.descriptor.width*i.descriptor.height,s=(0,il.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,rl.deinterlace)(s,i.descriptor.width));var l={pixels:s,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?l.colorTable=i.lct:l.colorTable=n,t.gce&&(l.delay=(t.gce.delay||10)*10,l.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(l.transparentIndex=t.gce.transparentColorIndex)),r&&(l.patch=ol(l)),l};ke.decompressFrame=ar;var ll=function(t,n){return t.frames.filter(function(r){return r.image}).map(function(r){return ar(r,t.gct,n)})};rr=ke.decompressFrames=ll;function hl(e){const t=ir(e),n=rr(t,!0),r=[];for(let i of n){const{width:a,height:s,left:l,top:u}=i.dims,c=document.createElement("canvas"),w=c.getContext("2d");c.width=a,c.height=s,w.putImageData(new ImageData(i.patch,a,s),l,u),r.push(c)}return r}async function ul(e){const t=new ImageDecoder({data:e,type:"image/gif"});await t.tracks.ready,await t.completed;const n=t.tracks.selectedTrack.frameCount,r=[];for(let i=0;i<n;i++){const a=(await t.decode({frameIndex:i})).image;a.width=a.codedWidth,a.height=a.codedHeight,r.push(ht(a)),a.close()}return r}async function cl(e){const t=await e.arrayBuffer();return window.ImageDecoder?ul(t):hl(t)}const dl={frameCount:0,startTime:0};class fl{constructor(t,n=1){b(this,"blob");b(this,"video");b(this,"length");b(this,"frames");b(this,"initPromise");this.blob=t,this.length=n,this.initPromise=this.init()}setFrameCount(t){return this.length=t,this.initPromise=this.init(),this}async init(){this.frames=[];const t=document.createElement("video");t.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(i=>t.addEventListener("loadeddata",i));const{startTime:n}=dl,r=(this.video.duration-n)/this.length;for(let i=0;i<this.length;i++)this.video.currentTime=i*r+n,await new Promise(a=>this.video.oncanplay=a),this.frames[i]=ht(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function pl(e,t){if(t=t,t<0)throw new Error(`video frame count ${t} must >1`);return new fl(e,t).getFrames()}var sr=(e=>(e.NONE="NONE",e.PIXEL="PIXEL",e.PERCENT="PERCENT",e))(sr||{});const vl={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,avatarOnTop:!0,antialias:!0,resampling:!1,angle:0,opacity:1};function gl(e){if(e.compiled)return e;const t={...vl,...e},n=t.pos;let r;switch(t.posType){case"ZOOM":r=typeof n[0]!="object"?[Ie(n,4)]:n.map(i=>Ie(i,4)),t.pos=r.map(i=>i.map(a=>typeof a=="number"?a:ve.parse(a)));break;case"DEFORM":try{r=n.map(i=>Ie(i,5).map(a=>Ie(a,2)))}catch{r=[Ie(n,5).map(a=>Ie(a,2))]}t.pos=r.map(i=>i.map(a=>a.map(s=>typeof s=="number"?s:ve.parse(s))));break}return t.compiled=!0,t}class ml extends Rr{constructor(n,r,i){super();b(this,"type");b(this,"template");b(this,"originBlob");b(this,"frames");b(this,"pos");b(this,"initPromise");b(this,"deformer");this.type=n.type;const a=i&&i[this.type.toString().toLowerCase()];if(this.template=gl(a?{...n,...a}:n),this.originBlob=r[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.setCrop(),await this.setStyle(),await this.setRound(),await this.setPos()}async loadFile(){const n=this.originBlob;if(n.type.startsWith("video/"))this.frames=await pl(n,this.template.pos.length);else if(!n.type.startsWith("image"))throw new Error("不支持的格式: "+n.type);n.type==="image/gif"?this.frames=await cl(n):this.frames=[await ut(n)]}setCrop(){const n=this.template.cropType;n!=="NONE"&&(this.frames=this.frames.map(r=>zr(r,this.template.crop,n==="PERCENT")))}setStyle(){for(const n of this.template.style)switch(n){case"FLIP":this.frames=this.frames.map(Lr);break;case"MIRROR":this.frames=this.frames.map(Us);break;case"GRAY":this.frames=this.frames.map(Br);break;case"BINARIZATION":this.frames=this.frames.map(qs);break;default:throw new Error("unknown style "+n)}}setRound(){this.template.round&&(this.frames=this.frames.map(Gs))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(n=>n.map(this.evalExpression));break;case"DEFORM":this.deformer=new Ns,this.pos=this.template.pos.map(n=>n.map(r=>r.map(this.evalExpression)));break}}evalExpression(n){return typeof n=="number"?n:n.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(n){return n<this.frames.length?this.frames[n]:this.frames.at(-1)}getPos(n){return n<this.pos.length?this.pos[n]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(n,r=0){await this.initPromise;let i=this.getFrame(r);const a=this.getPos(r);let{angle:s,opacity:l,rotate:u}=this.template;switch(n.globalAlpha=l,u&&(s+=360/this.pos.length*r),this.template.posType){case"ZOOM":switch(s&&(i=Ws(i,s,!this.template.round)),this.template.fit){case"FILL":n.drawImage(i,...a);break;default:const[c,w,x,y]=a,g=Math[this.template.fit==="CONTAIN"?"min":"max"](x/i.width,y/i.height),_=i.width*g,S=i.height*g,C=c+(x-_)/2,m=w+(y-S)/2;n.drawImage(i,C,m,_,S);break}break;case"DEFORM":this.deformer.draw(n,i,a);break}n.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const n=this.frames[0];return{width:n.width,height:n.height}}}class fn{constructor(t){b(this,"arr");b(this,"initPromise");b(this,"topAvatars",[]);b(this,"bottomAvatars",[]);b(this,"sizeMap",Object.create(null));b(this,"maxLength");this.arr=t,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(t,n)=>{t.onTop?this.topAvatars.push(t):this.bottomAvatars.push(t);const r=await t.getSize();this.sizeMap[`avatar${n}Width`]=r.width,this.sizeMap[`avatar${n}Height`]=r.height,this.maxLength=await t.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}static createFrom(t,n,r){return new fn(t.map(i=>new ml(i,n,r)))}}var or={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Dr,function(){(function(){for(var C=0,m=["ms","moz","webkit","o"],h=0;h<m.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[m[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[h]+"CancelAnimationFrame"]||window[m[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(v,f){var E=new Date().getTime(),o=Math.max(0,16-(E-C)),d=window.setTimeout(function(){v(E+o)},o);return C=E+o,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(v){clearTimeout(v)})})(),function(){if(typeof window.CustomEvent=="function")return!1;function C(m,h){h=h||{bubbles:!1,cancelable:!1,detail:void 0};var v=document.createEvent("CustomEvent");return v.initCustomEvent(m,h.bubbles,h.cancelable,h.detail),v}C.prototype=window.Event.prototype,window.CustomEvent=C}(),function(C){try{return new CustomEvent("test"),!1}catch{}function m(h,v){v=v||{bubbles:!1,cancelable:!1};var f=document.createEvent("MouseEvent");return f.initMouseEvent(h,v.bubbles,v.cancelable,C,0,0,0,0,0,!1,!1,!1,!1,0,null),f}m.prototype=Event.prototype,C.MouseEvent=m}(window);var n=function(C,m){if(!(C instanceof m))throw new TypeError("Cannot call a class as a function")},r=function(){function C(m,h){for(var v=0;v<h.length;v++){var f=h[v];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(m,f.key,f)}}return function(m,h,v){return h&&C(m.prototype,h),v&&C(m,v),m}}(),i=function C(m,h,v){m===null&&(m=Function.prototype);var f=Object.getOwnPropertyDescriptor(m,h);if(f===void 0){var E=Object.getPrototypeOf(m);return E===null?void 0:C(E,h,v)}else{if("value"in f)return f.value;var o=f.get;return o===void 0?void 0:o.call(v)}},a=function(C,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);C.prototype=Object.create(m&&m.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(C,m):C.__proto__=m)},s=function(C,m){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:C},l=function(){function C(m,h){var v=[],f=!0,E=!1,o=void 0;try{for(var d=m[Symbol.iterator](),p;!(f=(p=d.next()).done)&&(v.push(p.value),!(h&&v.length===h));f=!0);}catch(T){E=!0,o=T}finally{try{!f&&d.return&&d.return()}finally{if(E)throw o}}return v}return function(m,h){if(Array.isArray(m))return m;if(Symbol.iterator in Object(m))return C(m,h);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function C(m,h,v,f){n(this,C);var E=this;this.position=m,this.constraints=h,this.cursor=v,this.eventBus=f,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=v,this.el.addEventListener("mousedown",o);function o(T){T.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",p),E.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:E}}))}function d(T){T.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",p),E.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:E}}))}function p(T){T.stopPropagation(),E.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:T.clientX,mouseY:T.clientY}}))}},c=function(){function C(m,h,v,f){n(this,C),this.x1=m,this.y1=h,this.x2=v,this.y2=f}return r(C,[{key:"set",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return this.x1=h??this.x1,this.y1=v??this.y1,this.x2=f??this.x2,this.y2=E??this.y2,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],E=this.x1+this.width()*f[0],o=this.y1+this.height()*f[1];return this.x1=E-h*f[0],this.y1=o-v*f[1],this.x2=this.x1+h,this.y2=this.y1+v,this}},{key:"scale",value:function(h){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],f=this.width()*h,E=this.height()*h;return this.resize(f,E,v),this}},{key:"move",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=this.width(),E=this.height();return h=h===null?this.x1:h,v=v===null?this.y1:v,this.x1=h,this.y1=v,this.x2=h+f,this.y2=v+E,this}},{key:"getRelativePoint",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],v=this.width()*h[0],f=this.height()*h[1];return[v,f]}},{key:"getAbsolutePoint",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],v=this.x1+this.width()*h[0],f=this.y1+this.height()*h[1];return[v,f]}},{key:"constrainToRatio",value:function(h){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"height";if(h!==null){switch(this.width(),this.height(),f){case"height":this.resize(this.width(),this.width()*h,v);break;case"width":this.resize(this.height()*1/h,this.height(),v);break;default:this.resize(this.width(),this.width()*h,v)}return this}}},{key:"constrainToBoundary",value:function(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],E=this.getAbsolutePoint(f),o=l(E,2),d=o[0],p=o[1],T=d,k=p,P=h-d,A=v-p,F=-2*f[0]+1,I=-2*f[1]+1,z=null,W=null;switch(F){case-1:z=T;break;case 0:z=Math.min(T,P)*2;break;case 1:z=P;break}switch(I){case-1:W=k;break;case 0:W=Math.min(k,A)*2;break;case 1:W=A;break}if(this.width()>z){var X=z/this.width();this.scale(X,f)}if(this.height()>W){var Y=W/this.height();this.scale(Y,f)}return this}},{key:"constrainToSize",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0,0],d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null;if(d&&(d>1?(h=v*1/d,E=E*d):d<1&&(v=h*d,f=E*1/d)),h&&this.width()>h){var p=h,T=d===null?this.height():v;this.resize(p,T,o)}if(v&&this.height()>v){var k=d===null?this.width():h,P=v;this.resize(k,P,o)}if(f&&this.width()<f){var A=f,F=d===null?this.height():E;this.resize(A,F,o)}if(E&&this.height()<E){var I=d===null?this.width():f,z=E;this.resize(I,z,o)}return this}}]),C}();function w(C){C.addEventListener("touchstart",x),C.addEventListener("touchend",x),C.addEventListener("touchmove",x)}function x(C){C.preventDefault();var m=C.changedTouches[0],h={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};m.target.dispatchEvent(new MouseEvent(h[C.type],{bubbles:!0,cancelable:!0,view:window,clientX:m.clientX,clientY:m.clientY,screenX:m.screenX,screenY:m.screenY}))}var y=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],g=function(){function C(m,h){var v=this,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(n(this,C),this.options=C.parseOptions(h||{}),!m.nodeName&&(m=document.querySelector(m),m==null))throw"Unable to find element.";if(!m.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:m.parentNode,element:m},f||(m.width===0||m.height===0?m.onload=function(){v.initialize(m)}:this.initialize(m))}return r(C,[{key:"initialize",value:function(h){this.createDOM(h),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,this.options.onInitialize!==null&&this.options.onInitialize(this)}},{key:"createDOM",value:function(h){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,w(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",h.getAttribute("src")),this.imageEl.setAttribute("alt",h.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var v=document.createElement("div");v.className="croppr-handleContainer",this.handles=[];for(var f=0;f<y.length;f++){var E=new u(y[f].position,y[f].constraints,y[f].cursor,this.eventBus);this.handles.push(E),v.appendChild(E.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(v),this.containerEl.appendChild(this.cropperEl),h.parentElement.replaceChild(this.containerEl,h)}},{key:"setImage",value:function(h){var v=this;return this.imageEl.onload=function(){v.box=v.initializeBox(v.options),v.redraw()},this.imageEl.src=h,this.imageClippedEl.src=h,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(h){var v=h.startSize.width,f=h.startSize.height,E=new c(0,0,v,f);E.constrainToRatio(h.aspectRatio,[.5,.5]);var o=h.minSize,d=h.maxSize;E.constrainToSize(d.width,d.height,o.width,o.height,[.5,.5],h.aspectRatio);var p=this.cropperEl.offsetWidth,T=this.cropperEl.offsetHeight;E.constrainToBoundary(p,T,[.5,.5]);var k=this.cropperEl.offsetWidth/2-E.width()/2,P=this.cropperEl.offsetHeight/2-E.height()/2;return E.move(k,P),E}},{key:"redraw",value:function(){var h=this,v=Math.round(this.box.width()),f=Math.round(this.box.height()),E=Math.round(this.box.x1),o=Math.round(this.box.y1),d=Math.round(this.box.x2),p=Math.round(this.box.y2);window.requestAnimationFrame(function(){h.regionEl.style.transform="translate("+E+"px, "+o+"px)",h.regionEl.style.width=v+"px",h.regionEl.style.height=f+"px",h.imageClippedEl.style.clip="rect("+o+"px, "+d+"px, "+p+"px, "+E+"px)";for(var T=h.box.getAbsolutePoint([.5,.5]),k=T[0]-h.cropperEl.offsetWidth/2>>31,P=T[1]-h.cropperEl.offsetHeight/2>>31,A=(k^P)+P+P+4,F=-2*A+8,I=0;I<h.handles.length;I++){var z=h.handles[I],W=z.el.offsetWidth,X=z.el.offsetHeight,Y=E+v*z.position[0]-W/2,se=o+f*z.position[1]-X/2;z.el.style.transform="translate("+Math.round(Y)+"px, "+Math.round(se)+"px)",z.el.style.zIndex=F==I?5:4}})}},{key:"attachHandlerEvents",value:function(){var h=this.eventBus;h.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),h.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),h.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var h=this.eventBus;this.regionEl.addEventListener("mousedown",v),h.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),h.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),h.addEventListener("regionend",this.onRegionMoveEnd.bind(this));function v(o){o.stopPropagation(),document.addEventListener("mouseup",E),document.addEventListener("mousemove",f),h.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}function f(o){o.stopPropagation(),h.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}function E(o){o.stopPropagation(),document.removeEventListener("mouseup",E),document.removeEventListener("mousemove",f),h.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}}},{key:"attachOverlayEvents",value:function(){var h=4,v=this,f=null;this.overlayEl.addEventListener("mousedown",E);function E(p){p.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",o);var T=v.cropperEl.getBoundingClientRect(),k=p.clientX-T.left,P=p.clientY-T.top;f=v.box,v.box=new c(k,P,k+1,P+1),v.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:v.handles[h]}}))}function o(p){p.stopPropagation(),v.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:p.clientX,mouseY:p.clientY}}))}function d(p){if(p.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",o),v.box.width()===1&&v.box.height()===1){v.box=f;return}v.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:p.clientX,mouseY:p.clientY}}))}}},{key:"onHandleMoveStart",value:function(h){var v=h.detail.handle,f=[1-v.position[0],1-v.position[1]],E=this.box.getAbsolutePoint(f),o=l(E,2),d=o[0],p=o[1];this.activeHandle={handle:v,originPoint:f,originX:d,originY:p},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.cropperEl.getBoundingClientRect();f=f-o.left,E=E-o.top,f<0?f=0:f>o.width&&(f=o.width),E<0?E=0:E>o.height&&(E=o.height);var d=this.activeHandle.originPoint.slice(),p=this.activeHandle.originX,T=this.activeHandle.originY,k=this.activeHandle.handle,P=k.constraints[0]===1,A=k.constraints[1]===1,F=k.constraints[2]===1,I=k.constraints[3]===1,z=(I||A)&&(P||F),W=I||A?p:this.box.x1,X=I||A?p:this.box.x2,Y=P||F?T:this.box.y1,se=P||F?T:this.box.y2;W=I?f:W,X=A?f:X,Y=P?E:Y,se=F?E:se;var Qe=!1,Oe=!1;if((I||A)&&(Qe=I?f>p:f<p),(P||F)&&(Oe=P?E>T:E<T),Qe){var K=W;W=X,X=K,d[0]=1-d[0]}if(Oe){var fr=Y;Y=se,se=fr,d[1]=1-d[1]}var me=new c(W,Y,X,se);if(this.options.aspectRatio){var Ct=this.options.aspectRatio,Mt=!1;z?Mt=E>me.y1+Ct*me.width()||E<me.y2-Ct*me.width():(P||F)&&(Mt=!0);var pr=Mt?"width":"height";me.constrainToRatio(Ct,d,pr)}var gn=this.options.minSize,mn=this.options.maxSize;me.constrainToSize(mn.width,mn.height,gn.width,gn.height,d,this.options.aspectRatio);var vr=this.cropperEl.offsetWidth,gr=this.cropperEl.offsetHeight;me.constrainToBoundary(vr,gr,d),this.box=me,this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(h){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.cropperEl.getBoundingClientRect();f=f-o.left,E=E-o.top,this.currentMove={offsetX:f-this.box.x1,offsetY:E-this.box.y1},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.currentMove,d=o.offsetX,p=o.offsetY,T=this.cropperEl.getBoundingClientRect();f=f-T.left,E=E-T.top,this.box.move(f-d,E-p),this.box.x1<0&&this.box.move(0,null),this.box.x2>T.width&&this.box.move(T.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>T.height&&this.box.move(null,T.height-this.box.height()),this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(h){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(h===null&&(h=this.options.returnMode),h=="real"){var v=this.imageEl.naturalWidth,f=this.imageEl.naturalHeight,E=this.imageEl.getBoundingClientRect(),o=E.width,d=E.height,p=v/o,T=f/d;return{x:Math.round(this.box.x1*p),y:Math.round(this.box.y1*T),width:Math.round(this.box.width()*p),height:Math.round(this.box.height()*T)}}else if(h=="ratio"){var k=this.imageEl.getBoundingClientRect(),P=k.width,A=k.height;return{x:_(this.box.x1/P,3),y:_(this.box.y1/A,3),width:_(this.box.width()/P,3),height:_(this.box.height()/A,3)}}else if(h=="raw")return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(h){var v={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},f=null;h.aspectRatio!==void 0&&(typeof h.aspectRatio=="number"?f=h.aspectRatio:h.aspectRatio instanceof Array&&(f=h.aspectRatio[1]/h.aspectRatio[0]));var E=null;h.maxSize!==void 0&&h.maxSize!==null&&(E={width:h.maxSize[0]||null,height:h.maxSize[1]||null,unit:h.maxSize[2]||"px"});var o=null;h.minSize!==void 0&&h.minSize!==null&&(o={width:h.minSize[0]||null,height:h.minSize[1]||null,unit:h.minSize[2]||"px"});var d=null;h.startSize!==void 0&&h.startSize!==null&&(d={width:h.startSize[0]||null,height:h.startSize[1]||null,unit:h.startSize[2]||"%"});var p=null;typeof h.onInitialize=="function"&&(p=h.onInitialize);var T=null;typeof h.onCropStart=="function"&&(T=h.onCropStart);var k=null;typeof h.onCropEnd=="function"&&(k=h.onCropEnd);var P=null;typeof h.onUpdate=="function"&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),P=h.onUpdate),typeof h.onCropMove=="function"&&(P=h.onCropMove);var A=null;if(h.returnMode!==void 0){var F=h.returnMode.toLowerCase();if(["real","ratio","raw"].indexOf(F)===-1)throw"Invalid return mode.";A=F}var I=function(X){for(var Y=X.offsetWidth,se=X.offsetHeight,Qe=["maxSize","minSize","startSize"],Oe=0;Oe<Qe.length;Oe++){var K=Qe[Oe];this[K]!==null&&(this[K].unit=="%"&&(this[K].width!==null&&(this[K].width=this[K].width/100*Y),this[K].height!==null&&(this[K].height=this[K].height/100*se)),delete this[K].unit)}},z=function(X,Y){return X!==null?X:Y};return{aspectRatio:z(f,v.aspectRatio),maxSize:z(E,v.maxSize),minSize:z(o,v.minSize),startSize:z(d,v.startSize),returnMode:z(A,v.returnMode),onInitialize:z(p,v.onInitialize),onCropStart:z(T,v.onCropStart),onCropMove:z(P,v.onCropMove),onCropEnd:z(k,v.onCropEnd),convertToPixels:I}}}]),C}();function _(C,m){return+(Math.round(C+"e"+m)+"e-"+m)}var S=function(C){a(m,C);function m(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return n(this,m),s(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,h,v,f))}return r(m,[{key:"getValue",value:function(v){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"getValue",this).call(this,v)}},{key:"setImage",value:function(v){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"setImage",this).call(this,v)}},{key:"destroy",value:function(){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(v,f){return this.box.move(v,f),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(v,f){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[.5,.5];return this.box.resize(v,f,E),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(v){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.5,.5];return this.box.scale(v,f),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}}]),m}(g);return S})})(or);var xl=or.exports;const yl=Hn(xl);var ie;class wl{constructor(t){R(this,ie,document.createElement("div"));b(this,"croppr");b(this,"mask",new Wn);b(this,"callback");b(this,"imageFile");b(this,"initPromise");M(this,ie).classList.add("avatar-cropper"),this.imageFile=t,this.mask.onclick=()=>this.cancel(),this.initPromise=this.init()}async init(){const t=await ut(this.imageFile);M(this,ie).appendChild(t),document.body.append(M(this,ie)),this.croppr=new yl(t,{startSize:[90,60],minSize:[1,1,"px"],returnMode:"real"});const n=document.createElement("div");n.className="button-group";const r=document.createElement("div");r.innerText="Cancel",r.addEventListener("click",()=>this.cancel());const i=document.createElement("div");i.innerText="Save",i.addEventListener("click",()=>this.save()),n.append(r,i),M(this,ie).appendChild(n)}cancel(){this.callback(null),this.hide()}save(){const{x:t,y:n,width:r,height:i}=this.croppr.getValue("real");this.callback([t,n,t+r,n+i]),this.hide()}hide(){M(this,ie).classList.add("hide"),this.mask.hide()}async show(){return await this.initPromise,this.mask.show(),M(this,ie).classList.remove("hide"),new Promise(t=>this.callback=t)}async destroy(){await this.initPromise,M(this,ie).remove(),this.croppr.destroy(),this.mask.destroy()}}ie=new WeakMap;const Ot=e=>{e.stopPropagation(),e.preventDefault()};var V,xe,ye,tt,ft;class bl{constructor(t){b(this,"type");R(this,V,document.createElement("label"));R(this,xe,void 0);R(this,ye,void 0);R(this,tt,void 0);R(this,ft,new Promise(t=>G(this,tt,t)));b(this,"cropPos");this.type=t,M(this,V).title=ne().rightClickOrLongPress,M(this,V).setAttribute("type",t),M(this,V).addEventListener("dragenter",Ot,!1),M(this,V).addEventListener("dragover",Ot,!1),M(this,V).addEventListener("drop",r=>{Ot(r),this.setFiles(r.dataTransfer.files)},!1),M(this,V).addEventListener("contextmenu",async r=>{if(r.preventDefault(),!M(this,xe))return;const i=this.cropPos,a=new wl(M(this,xe));this.cropPos=await a.show(),await a.destroy(),this.cropPos!==i&&M(this,ye)&&M(this,ye).call(this,this)});const n=document.createElement("input");n.type="file",n.accept="image/*",n.addEventListener("change",()=>this.setFiles(n.files)),M(this,V).appendChild(n)}render(){return M(this,V)}set onchange(t){G(this,ye,t)}get file(){return M(this,xe)}async waitFile(){return await M(this,ft),M(this,xe)}setFiles(t){let n=t.item(0);if(n){if(!n.type.startsWith("image"))throw new Error("仅支持图片格式");M(this,V).style.backgroundImage=`url(${URL.createObjectURL(n)})`,M(this,V).style.backgroundSize="cover",G(this,xe,n),M(this,tt).call(this),this.cropPos=void 0,M(this,ye)&&M(this,ye).call(this,this)}}}V=new WeakMap,xe=new WeakMap,ye=new WeakMap,tt=new WeakMap,ft=new WeakMap;const Nn=["FROM","TO","BOT","GROUP"];var ae,nt,te;class lr{constructor(){R(this,ae,void 0);R(this,nt,new Map(Nn.map(t=>[t,new bl(t)])));R(this,te,void 0);G(this,ae,document.createElement("div")),M(this,ae).className="avatar-uploader",M(this,ae).innerHTML=ne().noAvatar}set types(t){if(!t||t.length===0){M(this,ae).innerHTML=ne().noAvatar;return}M(this,ae).innerHTML="",G(this,te,t.map(n=>M(this,nt).get(n))),M(this,ae).append(...M(this,te).map(n=>n.render()))}render(){const t=document.createElement("div");return t.append(qe(ne().uploadAvatar),M(this,ae)),t}get ready(){var t;return(t=M(this,te))!=null&&t.length?M(this,te).some(n=>n.file):!0}set onchange(t){for(const n of M(this,nt).values())n.onchange=()=>this.ready&&t(this)}get data(){var n;const t={};if(!((n=M(this,te))!=null&&n.length))return t;for(const r of M(this,te))t[r.type.toLowerCase()]=r.file;return t}get extraTemplate(){var r;const t={};let n=!1;if(!((r=M(this,te))!=null&&r.length))return t;for(const i of M(this,te))n=n||!!i.cropPos,t[i.type.toLowerCase()]={cropType:sr.PIXEL,crop:i.cropPos};return n?t:void 0}}ae=new WeakMap,nt=new WeakMap,te=new WeakMap,b(lr,"types",Nn);const _l=ne();class Ae{constructor(t,n){b(this,"obj");b(this,"container");b(this,"attrMap");if(this.obj=t,this.container=document.createElement("div"),this.container.classList.add("setting-container"),this.attrMap=n??{},this.obj._delete){const r=this.obj._delete;delete this.obj._delete,this.obj.delete=()=>{typeof r=="function"&&r(),this.container.remove()}}}createInput(t,n){const r=this.attrMap[t]??{},i=document.createElement("div"),a=document.createElement("label");if(a.textContent=_l[t]??t,i.appendChild(a),t==="font"){const l=document.createElement("select");return l.addEventListener("change",()=>this.obj[t]=l.value),document.fonts.forEach(u=>{const c=u.family,w=document.createElement("option");w.style.fontFamily=c,w.value=c,w.textContent=c,w.selected=c===this.obj[t],l.appendChild(w)}),i.appendChild(l),i}let s=typeof n;switch(s){case"object":const l=new Ae(n).render();i.appendChild(l);break;case"function":const u=document.createElement("button");u.textContent=t,u.addEventListener("click",async()=>{u.disabled=!0,u.style.cursor="progress";try{await n()}finally{u.disabled=!1,u.style.cursor="pointer"}}),i.appendChild(u);break;default:const c=document.createElement("input");let w=()=>this.obj[t]=c.value;switch(typeof n){case"number":w=()=>this.obj[t]=parseFloat(c.value);break;case"string":s=/^#([A-Fa-f0-9]{6})$/.test(n)?"color":"text";break;case"boolean":s="checkbox",w=()=>this.obj[t]=c.checked;break}c.type=s;for(let[x,y]of Object.entries(r))c[x]=y;c.value=n.toString(),c.addEventListener("input",w),i.appendChild(c);break}return i}render(){for(const[t,n]of Object.entries(this.obj)){if(n==null)continue;const r=this.createInput(t,n);this.container.appendChild(r)}return this.container}}class El{constructor(){b(this,"textModels");b(this,"textDomList",document.createElement("div"));b(this,"settingDom",new Ae({add:()=>this.addTextModel()}).render());this.textDomList.appendChild(this.settingDom)}set texts(t){this.textModels=t,this.textDomList.innerHTML="",this.textDomList.appendChild(this.settingDom);for(let n of this.textModels.texts)this.addTextModel(n)}addTextModel(t=this.textModels.addTextModel()){const n=new Ae(t.settingObject,t.settingAttributes);this.textDomList.appendChild(n.render())}render(){const t=document.createElement("div");return t.append(qe(ne().setText),this.textDomList),t}}const Cl=6;class pn{constructor(t){b(this,"hasTemplate",!1);b(this,"width");b(this,"height");b(this,"color");b(this,"frames");b(this,"loadingPromise");t&&([this.width,this.height]=t.size.map(n=>typeof n=="number"?n:ve.parse(n)),this.color=Xn(this.color),this.hasTemplate=!0)}setUrl(t,n){this.loadingPromise=pn.fetchImages(t,n).then(r=>this.frames=r)}set images(t){this.frames=t}async generate(t){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(n=>{const r=this.getCtx(t);return r.drawImage(n,0,0),r.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(t).canvas];throw new Error("can not load background")}getCtx(t){const n=document.createElement("canvas"),r=a=>typeof a=="number"?a:a.evaluate(t);n.width=r(this.width),n.height=r(this.height);const i=n.getContext("2d");return i.fillStyle=this.color,i.fillRect(0,0,n.width,n.height),i}static async fetchImages(t,n){if(n!==void 0){if(n<=0)return[];const l=[];for(let u=0;u<n;u++)l.push(fetch(`${t}/${u}.png`).then(c=>c.blob()).then(ut));return Promise.all(l)}let r=!1,i=new Set;const a=[];let s=0;for(;!r;){i.size>=Cl&&await Promise.race(i);const l=s++,c=fetch(`${t}/${l}.png`).then(w=>w.blob()).then(ut).then(w=>{a[l]=w}).catch(()=>r=!0).then(()=>i.delete(c));i.add(c)}return await Promise.all(i),a}}const Ml=document.createElement("canvas"),j=Ml.getContext("2d");j.textBaseline="alphabetic";j.textAlign="left";const Un={text:"default text",color:"#191919",pos:[50,50],size:16,font:"arial",style:"PLAIN",wrap:"NONE",align:"CENTER",position:["LEFT","TOP"],strokeColor:"",strokeSize:0},Ee=class{constructor(t=Un){b(this,"template");b(this,"textStyle");b(this,"pixelSize");b(this,"defaultPixelSize");b(this,"width");b(this,"height");b(this,"backgroundSize");b(this,"drawOptions");b(this,"onChangeCallback");b(this,"disabled",!1);this.template={...Un,...t},this.defaultPixelSize=t.size*Ee.dpiScale,this.pixelSize=this.defaultPixelSize,this.template.color=Xn(this.template.color),this.textStyle=this.template.style==="PLAIN"?"normal":this.template.style.toLowerCase(),this.template.font=this.template.font.replace(" ","-"),this.template.text=this.template.text.replace(Ee.TEXT_VAR_REGEX,(n,r)=>r),this.setDrawOptions()}set size(t){this.pixelSize=t*Ee.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:t,style:n,wrap:r}=this.template;j.font=`${this.textStyle} ${this.pixelSize}px ${t.replace(" ","-")}`,this.width=0,this.height=0;const i=this.template.text.split(`
`),a=[];let s=0;switch(r){case"NONE":{for(const l of i){const[u,c,w,x]=this.getPosition(j.measureText(l),s++);this.width=Math.max(this.width,w),this.height=x,a.push([l,u,c])}break}case"BREAK":{const l=this.template.pos[2]||Ee.DEFAULT_MAX_WIDTH;let u,c;for(let w of i)if(u=j.measureText(w),c=u.width,c>l){let x,y,g;for(;c>l;){for(x=0,y=0,g="";y<l;)x++,g=w.substr(0,x),y=j.measureText(w.substr(0,x)).width;x--,g=g.substr(0,x);const _=x;if(w.substr(x,1)!=" "){for(;w.substr(x,1)!=" "&&x!=0;)x--;x==0&&(x=_),g=w.substr(0,x)}w=w.substr(x);const[S,C,m,h]=this.getPosition(j.measureText(g),s++);this.width=Math.max(this.width,m),this.height=h,c=m,a.push([g,S,C])}}else{const[x,y,g,_]=this.getPosition(u,s++);this.width=Math.max(this.width,g),this.height=_,a.push([w,x,y])}break}case"ZOOM":{const l=this.template.pos[2]||Ee.DEFAULT_MAX_WIDTH;j.font=`${this.textStyle} ${this.defaultPixelSize}px ${t}`;let u=Math.max(...i.map(x=>j.measureText(x).width));const w=l/(u||1)*this.defaultPixelSize;this.pixelSize=w,j.font=`${this.textStyle} ${w}px ${t}`;for(const x of i){const[y,g,_,S]=this.getPosition(j.measureText(x),s++);this.width=Math.max(this.width,_),this.height=S,a.push([x,y,g])}break}}return this.drawOptions=a,a}getPosition(t,n){const[r,i]=this.template.pos,a=t.width,s=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,l=s*n,u=s*(n+1);switch(this.template.align){case"LEFT":return[r,i+l,a,u];case"RIGHT":return[r-a,i+l,a,u];case"CENTER":return[r-a/2,i+l,a,u]}}get hidden(){return this.disabled}set hidden(t){this.disabled=t,this.onChangeCallback&&this.onChangeCallback(this)}get size(){return this.template.size}draw(t){if(this.disabled)return;let{color:n,align:r,font:i,strokeColor:a,strokeSize:s}=this.template;t.font=`${this.textStyle} ${this.pixelSize}px ${i}`,t.fillStyle=n,t.textBaseline=r==="CENTER"?"middle":"alphabetic";for(let l of this.drawOptions)t.fillText(...l);if(a&&s){t.strokeStyle=a,t.lineWidth=s;for(let l of this.drawOptions)t.strokeText(...l)}}get settingObject(){const t=this;return new Proxy({get x(){return t.template.pos[0]},set x(n){t.template.pos[0]=n},get y(){return t.template.pos[1]},set y(n){t.template.pos[1]=n},text:t.template.text,color:t.template.color,get size(){return t.template.wrap==="ZOOM"?void 0:t.pixelSize},set size(n){t.pixelSize=n},font:t.template.font,get hidden(){return t.disabled},set hidden(n){t.hidden=n},_delete:()=>t.hidden=!0},{set:(n,r,i)=>(n[r]=i,t.template[r]=i,t.disabled||(this.setDrawOptions(),t.onChangeCallback&&t.onChangeCallback(this)),!0)})}get settingAttributes(){const t={type:"range",min:0,step:1};return{x:{...t,max:this.backgroundSize?this.backgroundSize[0]:1e3},y:{...t,max:this.backgroundSize?this.backgroundSize[1]:1e3},size:{...t,max:256}}}set onchange(t){this.onChangeCallback=t}};let _e=Ee;b(_e,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),b(_e,"DEFAULT_MAX_WIDTH",300),b(_e,"dpiScale",(window.devicePixelRatio||1)*96/72);class vn{constructor(t){b(this,"arr");b(this,"cacheCtx");b(this,"topAvatars",[]);b(this,"bottomAvatars",[]);b(this,"sizeMap",Object.create(null));b(this,"needUpdate",!1);b(this,"cacheCount",0);if(this.arr=t,!(t!=null&&t.length))return;let n=0;for(const r of t)r.onchange=()=>this.needUpdate=!0,this.sizeMap[`text${n}Width`]=r.width,this.sizeMap[`text${n}Height`]=r.height,n++}draw(t){for(const n of this.arr)n.draw(t)}setCacheArea(t,n){for(const i of this.arr)i.backgroundSize=[t,n];const r=document.createElement("canvas");r.width=t,r.height=n,this.cacheCtx=r.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache(),this.needUpdate=!1,this.cacheCount++}get cacheCanvas(){return this.needUpdate&&this.updateCache(),this.cacheCtx.canvas}addTextModel(){const t=new _e;return this.arr.push(t),this.needUpdate=!0,t.onchange=()=>this.needUpdate=!0,t.backgroundSize=[this.cacheCtx.canvas.width,this.cacheCtx.canvas.height],t}get texts(){return this.arr}static createFrom(t){return new vn(t.map(n=>new _e(n)))}}const Tl={type:void 0,avatar:[],text:[],background:null,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class Sl{constructor(t,n){b(this,"type");b(this,"template");b(this,"initPromise");b(this,"avatarList");b(this,"backgroundModel");b(this,"textModelList");b(this,"backgroundLength");this.template={...Tl,...t},this.type=t.type,this.textModelList=vn.createFrom(this.template.text),this.backgroundModel=new pn(this.template.background),n&&(this.background=n),this.initPromise=this.init()}set background(t){if(typeof t=="string")this.backgroundModel.setUrl(t,this.backgroundLength);else if(Array.isArray(t))this.backgroundModel.images=t;else throw new Error("unknown background",t)}async init(){}async generate(t,n){const r=fn.createFrom(this.template.avatar,t,n),i=await r.getSizeMap(),a=await this.backgroundModel.generate(i);return new kl(this.template,a,r,this.textModelList)}}class kl{constructor(t,n,r,i){b(this,"template");b(this,"canvas");b(this,"ctx");b(this,"backgrounds");b(this,"avatars");b(this,"texts");b(this,"length");b(this,"intervalId");b(this,"initPromise");b(this,"userDelay");b(this,"i",0);b(this,"framesCache",[]);b(this,"resolveFramesCachedPromise");b(this,"framesCachedPromise",new Promise(t=>this.resolveFramesCachedPromise=t));b(this,"prevTextCacheCount");b(this,"prevTextedFramesCache");const a=document.createElement("canvas");this.canvas=a,a.width=n[0].width,a.height=n[0].height,this.ctx=a.getContext("2d"),this.template=t,this.backgrounds=n,this.avatars=r,this.texts=i,this.texts.setCacheArea(a.width,a.height),this.initPromise=this.init()}async init(){const{posLength:t,frameLength:n=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?n:this.backgrounds.length}async replay(){return this.i=0,await this.play(),new Promise(t=>setTimeout(t,this.delay*this.length))}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=setInterval(async()=>{await this.drawAvatarsCache(this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}playReverse(){this.intervalId=setInterval(async()=>{await this.drawAvatarsCache(this.length-1-this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(t){if(!t){this.stop();return}this.userDelay=t,t>0?this.play():this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(t){return t<this.backgrounds.length?this.backgrounds[t]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}async getTextedFrames(){const t=await this.getFrames();return this.texts.texts.length===0?t:this.prevTextCacheCount===this.texts.cacheCount?this.prevTextedFramesCache:(this.prevTextedFramesCache=t.map(n=>{const r=ht(n);return r.getContext("2d").drawImage(this.texts.cacheCanvas,0,0),r}),this.prevTextCacheCount=this.texts.cacheCount,this.prevTextedFramesCache)}drawTextsCache(){this.ctx.drawImage(this.texts.cacheCanvas,0,0)}drawTexts(){this.texts.draw(this.ctx)}async drawAvatarsCache(t){if(this.framesCache[t]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[t],0,0);return}await this.drawAvatars(t),this.framesCache[t]=ht(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async drawAvatars(t){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const n of this.avatars.bottomAvatars)await n.draw(this.ctx,t);this.ctx.drawImage(this.getBackground(t),0,0);for(const n of this.avatars.topAvatars)await n.draw(this.ctx,t)}get settingObject(){const t=this;return this.length===1?{}:{set delay(n){t.delay=n},get delay(){return t.delay},play:()=>this.play(),stop:()=>this.stop()}}async destroy(){await this.stop(),this.canvas.remove()}}var Ne,ce,Te,Ue,Se,pt,hr,vt,ur;class Pl{constructor(){R(this,pt);R(this,vt);R(this,Ne,document.createElement("div"));R(this,ce,document.createElement("div"));R(this,Te,document.createElement("canvas"));R(this,Ue,void 0);R(this,Se,void 0);M(this,ce).className="result-area",M(this,Ne).append(qe(ne().result),M(this,ce)),rt(this,pt,hr).call(this),M(this,ce).appendChild(M(this,Te)),G(this,Se,new qn(M(this,ce))),M(this,Se).show()}set canvas(t){M(this,ce).innerHTML="",G(this,Te,t),M(this,ce).appendChild(t),rt(this,vt,ur).call(this),M(this,Se).hide()}set setting(t){M(this,Ue)&&M(this,Ue).remove(),G(this,Ue,t),M(this,Ne).appendChild(t)}showLoading(){M(this,Se).show()}render(){return M(this,Ne)}}Ne=new WeakMap,ce=new WeakMap,Te=new WeakMap,Ue=new WeakMap,Se=new WeakMap,pt=new WeakSet,hr=function(){M(this,Te).classList.add("hide")},vt=new WeakSet,ur=function(){M(this,Te).classList.remove("hide")};var cr={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,t){(function(n,r){e.exports=r()})(self,function(){return(()=>{var n={"./node_modules/events/events.js":s=>{var l,u=typeof Reflect=="object"?Reflect:null,c=u&&typeof u.apply=="function"?u.apply:function(o,d,p){return Function.prototype.apply.call(o,d,p)};l=u&&typeof u.ownKeys=="function"?u.ownKeys:Object.getOwnPropertySymbols?function(o){return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o))}:function(o){return Object.getOwnPropertyNames(o)};var w=Number.isNaN||function(o){return o!=o};function x(){x.init.call(this)}s.exports=x,s.exports.once=function(o,d){return new Promise(function(p,T){function k(A){o.removeListener(d,P),T(A)}function P(){typeof o.removeListener=="function"&&o.removeListener("error",k),p([].slice.call(arguments))}E(o,d,P,{once:!0}),d!=="error"&&function(A,F,I){typeof A.on=="function"&&E(A,"error",F,{once:!0})}(o,k)})},x.EventEmitter=x,x.prototype._events=void 0,x.prototype._eventsCount=0,x.prototype._maxListeners=void 0;var y=10;function g(o){if(typeof o!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof o)}function _(o){return o._maxListeners===void 0?x.defaultMaxListeners:o._maxListeners}function S(o,d,p,T){var k,P,A,F;if(g(p),(P=o._events)===void 0?(P=o._events=Object.create(null),o._eventsCount=0):(P.newListener!==void 0&&(o.emit("newListener",d,p.listener?p.listener:p),P=o._events),A=P[d]),A===void 0)A=P[d]=p,++o._eventsCount;else if(typeof A=="function"?A=P[d]=T?[p,A]:[A,p]:T?A.unshift(p):A.push(p),(k=_(o))>0&&A.length>k&&!A.warned){A.warned=!0;var I=new Error("Possible EventEmitter memory leak detected. "+A.length+" "+String(d)+" listeners added. Use emitter.setMaxListeners() to increase limit");I.name="MaxListenersExceededWarning",I.emitter=o,I.type=d,I.count=A.length,F=I,console&&console.warn&&console.warn(F)}return o}function C(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(o,d,p){var T={fired:!1,wrapFn:void 0,target:o,type:d,listener:p},k=C.bind(T);return k.listener=p,T.wrapFn=k,k}function h(o,d,p){var T=o._events;if(T===void 0)return[];var k=T[d];return k===void 0?[]:typeof k=="function"?p?[k.listener||k]:[k]:p?function(P){for(var A=new Array(P.length),F=0;F<A.length;++F)A[F]=P[F].listener||P[F];return A}(k):f(k,k.length)}function v(o){var d=this._events;if(d!==void 0){var p=d[o];if(typeof p=="function")return 1;if(p!==void 0)return p.length}return 0}function f(o,d){for(var p=new Array(d),T=0;T<d;++T)p[T]=o[T];return p}function E(o,d,p,T){if(typeof o.on=="function")T.once?o.once(d,p):o.on(d,p);else{if(typeof o.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof o);o.addEventListener(d,function k(P){T.once&&o.removeEventListener(d,k),p(P)})}}Object.defineProperty(x,"defaultMaxListeners",{enumerable:!0,get:function(){return y},set:function(o){if(typeof o!="number"||o<0||w(o))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+o+".");y=o}}),x.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},x.prototype.setMaxListeners=function(o){if(typeof o!="number"||o<0||w(o))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+o+".");return this._maxListeners=o,this},x.prototype.getMaxListeners=function(){return _(this)},x.prototype.emit=function(o){for(var d=[],p=1;p<arguments.length;p++)d.push(arguments[p]);var T=o==="error",k=this._events;if(k!==void 0)T=T&&k.error===void 0;else if(!T)return!1;if(T){var P;if(d.length>0&&(P=d[0]),P instanceof Error)throw P;var A=new Error("Unhandled error."+(P?" ("+P.message+")":""));throw A.context=P,A}var F=k[o];if(F===void 0)return!1;if(typeof F=="function")c(F,this,d);else{var I=F.length,z=f(F,I);for(p=0;p<I;++p)c(z[p],this,d)}return!0},x.prototype.addListener=function(o,d){return S(this,o,d,!1)},x.prototype.on=x.prototype.addListener,x.prototype.prependListener=function(o,d){return S(this,o,d,!0)},x.prototype.once=function(o,d){return g(d),this.on(o,m(this,o,d)),this},x.prototype.prependOnceListener=function(o,d){return g(d),this.prependListener(o,m(this,o,d)),this},x.prototype.removeListener=function(o,d){var p,T,k,P,A;if(g(d),(T=this._events)===void 0)return this;if((p=T[o])===void 0)return this;if(p===d||p.listener===d)--this._eventsCount==0?this._events=Object.create(null):(delete T[o],T.removeListener&&this.emit("removeListener",o,p.listener||d));else if(typeof p!="function"){for(k=-1,P=p.length-1;P>=0;P--)if(p[P]===d||p[P].listener===d){A=p[P].listener,k=P;break}if(k<0)return this;k===0?p.shift():function(F,I){for(;I+1<F.length;I++)F[I]=F[I+1];F.pop()}(p,k),p.length===1&&(T[o]=p[0]),T.removeListener!==void 0&&this.emit("removeListener",o,A||d)}return this},x.prototype.off=x.prototype.removeListener,x.prototype.removeAllListeners=function(o){var d,p,T;if((p=this._events)===void 0)return this;if(p.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):p[o]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete p[o]),this;if(arguments.length===0){var k,P=Object.keys(p);for(T=0;T<P.length;++T)(k=P[T])!=="removeListener"&&this.removeAllListeners(k);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(d=p[o])=="function")this.removeListener(o,d);else if(d!==void 0)for(T=d.length-1;T>=0;T--)this.removeListener(o,d[T]);return this},x.prototype.listeners=function(o){return h(this,o,!0)},x.prototype.rawListeners=function(o){return h(this,o,!1)},x.listenerCount=function(o,d){return typeof o.listenerCount=="function"?o.listenerCount(d):v.call(o,d)},x.prototype.listenerCount=v,x.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]}},"./dist/gif.worker.js.txt":(s,l,u)=>{u.r(l),u.d(l,{default:()=>c});const c=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":s=>{const l=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),c=l.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],w=c[1]==="ie"&&document.documentMode,x={name:c[1]==="version"?c[3]:c[1],version:w||parseFloat(c[1]==="opera"&&c[4]?c[4]:c[2]),platform:{name:l.match(/ip(?:ad|od|hone)/)?"ios":(l.match(/(?:webos|android)/)||u.match(/mac|win|linux/)||["other"])[0]}};x[x.name]=!0,x[x.name+parseInt(x.version,10)]=!0,x.platform[x.platform.name]=!0,s.exports=x},"?569f":()=>{}},r={};function i(s){var l=r[s];if(l!==void 0)return l.exports;var u=r[s]={exports:{}};return n[s](u,u.exports,i),u.exports}i.d=(s,l)=>{for(var u in l)i.o(l,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:l[u]})},i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>w});var s=i("./dist/gif.worker.js.txt");const{EventEmitter:l}=i("./node_modules/events/events.js"),u=i("./src/browser.js");i("?569f");var c=function(){let x,y;return(c=class extends l{static initClass(){x={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},y={delay:500,copy:!1,dispose:-1}}constructor(g){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(g);for(let _ in x){const S=x[_];this.options[_]==null&&(this.options[_]=S)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(g,_){if(this.options[g]=_,this._canvas!=null&&["width","height"].includes(g))return this._canvas[g]=_}setOptions(g){return(()=>{const _=[];for(let S of Object.keys(g||{})){const C=g[S];_.push(this.setOption(S,C))}return _})()}addFrame(g,_){_==null&&(_={});const S={};S.transparent=this.options.transparent;for(let C in y)S[C]=_[C]||y[C];if(this.options.width==null&&this.setOption("width",g.width),this.options.height==null&&this.setOption("height",g.height),typeof ImageData<"u"&&ImageData!==null&&g instanceof ImageData)S.data=g.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&g instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&g instanceof WebGLRenderingContext)_.copy?S.data=this.getContextData(g):S.context=g;else{if(g.childNodes==null)throw new Error("Invalid image");_.copy?S.data=this.getImageData(g):S.image=g}return this.frames.push(S)}render(){let g;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let S,C;const m=[];for(g=0,C=this.frames.length,S=0<=C;S?g<C:g>C;S?g++:g--)m.push(null);return m})();const _=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let S,C;for(g=0,C=_,S=0<=C;S?g<C:g>C;S?g++:g--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const g=this.activeWorkers.shift();if(g==null)break;this.log("killing active worker"),g.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const g=Math.min(this.options.workers,this.frames.length);return function(_,S,C){let m=[],h=_<S,v=S;for(let f=_;h?f<v:f>v;h?f++:f--)m.push(f);return m}(this.freeWorkers.length,g).forEach(_=>{this.log(`spawning worker ${_}`);const S=new Worker(this.workerURL);return S.onmessage=C=>(this.activeWorkers.splice(this.activeWorkers.indexOf(S),1),this.freeWorkers.push(S),this.frameFinished(C.data)),this.freeWorkers.push(S)}),g}frameFinished(g){if(this.log(`frame ${g.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[g.index]=g,this.options.globalPalette===!0&&(this.options.globalPalette=g.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let _=1,S=this.freeWorkers.length,C=1<=S;C?_<S:_>S;C?_++:_--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let g,_=0;for(g of Array.from(this.imageParts))_+=(g.data.length-1)*g.pageSize+g.cursor;_+=g.pageSize-g.cursor,this.log(`rendering finished - filesize ${Math.round(_/1e3)}kb`);const S=new Uint8Array(_);let C=0;for(g of Array.from(this.imageParts))for(let h=0;h<g.data.length;h++){const v=g.data[h];S.set(v,C),h===g.data.length-1?C+=g.cursor:C+=g.pageSize}const m=new Blob([S],{type:"image/gif"});return this.emit("finished",m,S)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const g=this.frames[this.nextFrame++],_=this.freeWorkers.shift(),S=this.getTask(g);return this.log(`starting frame ${S.index+1} of ${this.frames.length}`),this.activeWorkers.push(_),_.postMessage(S)}getContextData(g){return g.getImageData(0,0,this.options.width,this.options.height).data}getImageData(g){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const _=this._canvas.getContext("2d");return _.fillStyle=this.options.background,_.fillRect(0,0,this.options.width,this.options.height),_.drawImage(g,0,0),this.getContextData(_)}getTask(g){const _=this.frames.indexOf(g),S={index:_,last:_===this.frames.length-1,delay:g.delay,dispose:g.dispose,transparent:g.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:u.name==="chrome"};if(g.data!=null)S.data=g.data;else if(g.context!=null)S.data=this.getContextData(g.context);else{if(g.image==null)throw new Error("Invalid frame");S.data=this.getImageData(g.image)}return S}log(...g){if(this.options.debug)return console.log(...Array.from(g||[]))}}).initClass(),c}();const w=c})(),a})()})})(cr);var Al=cr.exports;const Fl=Hn(Al),dr={workers:2,quality:10,background:"#ffffff",dither:!1};async function Ol(e,t){const n=new Fl(dr);return e.forEach(r=>n.addFrame(r,{delay:t})),new Promise(r=>{n.on("finished",r),n.render()})}class ct{constructor(t){b(this,"initPromise");b(this,"viewer");b(this,"frames");b(this,"cache");b(this,"prevFramesCache");b(this,"downloadOptions",{download:async()=>await this.download(),copy:async()=>await this.copy(),share:async()=>await this.share()});this.viewer=t,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async getTextFrames(){return await this.viewer.getTextedFrames()}async renderAsync(){await this.initPromise;const t=document.createElement("div");if(this.frames.length!==1){const r=new Ae(dr);t.appendChild(r.render())}const n=new Ae(this.downloadOptions);return t.append(n.render()),t}async getOptions(){await this.initPromise;const t=await this.getTextFrames();if(this.cache&&this.prevFramesCache===t)return this.cache;if(!this.frames)return;if(this.prevFramesCache=t,t.length===1)return this.cache={blob:await new Promise(r=>t[0].toBlob(i=>r(i))),fileName:`${this.viewer.template.key}.png`},this.cache;const n=this.viewer.delay;return this.cache={blob:await Ol(n>0?t:t.reverse(),Math.abs(n)),fileName:`${this.viewer.template.key}.gif`},this.cache}async download(){const{blob:t,fileName:n}=await this.getOptions();ct.download(t,n)}async copy(){const{blob:t}=await this.getOptions();if(this.frames.length===1){await ct.copy(t);return}const n=URL.createObjectURL(t),r=`width=${this.frames[0].width}, height=${this.frames[0].height}`;window.open(n,void 0,r),URL.revokeObjectURL(n)}async share(){const{blob:t,fileName:n}=await this.getOptions(),r=new File([t],n,{type:t.type});await navigator.share({url:document.location.href,title:n,files:[r]})}static download(t,n){const r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static async copy(t){try{await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}catch(n){console.error(n,n.message)}}}const Il={server:[window.location.origin+window.location.pathname,"https://d2n.moe/petpet"],alternateFont:["MiSans-Bold","sans-serif"].join(",")};class Rl{constructor(t){b(this,"appElement");b(this,"templateChooser");b(this,"avatarUploader");b(this,"textUploader");b(this,"resultArea");b(this,"inputElement",document.createElement("div"));b(this,"outputElement",document.createElement("div"));b(this,"prevTemplate");b(this,"initPromise");b(this,"backgroundLengthMap");b(this,"viewer");this.appElement=document.getElementById(t),this.appElement.classList.add("petpet-app"),this.templateChooser=new Ir,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new lr,this.avatarUploader.onchange=()=>this.update(),this.textUploader=new El,this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render(),this.textUploader.render()),this.resultArea=new Pl,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){const t=new _r(Il.server);this.backgroundLengthMap=await t.getLengthMap(),this.templateChooser.templates=await t.getPreviewList(),(await t.getUrlSet()).size||this.templateChooser.loading.error()}async update(){await this.initPromise,this.viewer&&this.viewer.destroy();const t=this.templateChooser.template||await this.templateChooser.showModal();if(this.prevTemplate!==t&&(this.avatarUploader.types=[...new Set(t.avatar.map(l=>l.type))]),!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const n=new Sl(t);n.backgroundLength=this.backgroundLengthMap.get(t.key),n.background=t.url;const r=await n.generate(this.avatarUploader.data,this.avatarUploader.extraTemplate);this.textUploader.texts=n.textModelList,await r.play(),this.resultArea.canvas=r.canvas;const i=document.createElement("div");this.resultArea.setting=i;const a=new Ae(r.settingObject,{delay:{type:"range",min:"1",max:"256",step:"1"}});i.appendChild(a.render());const s=new ct(r);i.appendChild(await s.renderAsync()),this.prevTemplate=t,this.viewer=r}}new Rl("app");
