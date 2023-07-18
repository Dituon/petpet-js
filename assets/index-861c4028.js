var dr=Object.defineProperty;var fr=(e,t,n)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(fr(e,typeof t!="symbol"?t+"":t,n),n),bt=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var k=(e,t,n)=>(bt(e,t,"read from private field"),n?n.call(e):t.get(e)),z=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},G=(e,t,n,r)=>(bt(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var et=(e,t,n)=>(bt(e,t,"access private method"),n);function pr(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const tt=()=>document.createElement("div");var Qe,le,ot,Ln;class Bn{constructor(t){z(this,ot);z(this,Qe,void 0);z(this,le,void 0);G(this,Qe,t)}show(){if(k(this,le))return;const t=tt();t.className="loading",t.append(tt(),tt(),tt()),k(this,Qe).appendChild(t),t.addEventListener("click",et(this,ot,Ln)),G(this,le,t)}hide(){k(this,le)&&(k(this,le).remove(),G(this,le,null))}error(){let t="加载失败";throw k(this,le).innerHTML=`<span>${t}</span>`,new Error(t)}}Qe=new WeakMap,le=new WeakMap,ot=new WeakSet,Ln=function(t){t.stopPropagation()};class Dn{constructor(){_(this,"element");_(this,"showing");_(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(t){this.element.onclick=t}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}function $e(e,t="h3"){const n=document.createElement(t);return n.textContent=e,n}var ee,Ze,Ke,Re,Ee;class vr{constructor(t){z(this,ee,void 0);z(this,Ze,void 0);z(this,Ke,new Map);z(this,Re,void 0);z(this,Ee,void 0);_(this,"mask",new Dn);this.mask.onclick=()=>{k(this,Ee)&&k(this,Ee).call(this,null),this.hide()},t&&(this.templates=t)}set templates(t){G(this,ee,document.createElement("div")),k(this,ee).className="modal-select",G(this,Ze,t);const n=document.createElement("div");n.className="index-list",G(this,Re,n);for(const i of t){const a=document.createElement("div"),s=document.createElement("img");s.src=`${i.url}/0.png`,s.alt=i.key,s.loading="lazy";const l=$e(i.key);i.alias&&i.alias.forEach(u=>l.appendChild($e(u,"span"))),a.append(s,l),a.addEventListener("click",async u=>{k(this,Ee).call(this,await gr(i)),this.hide()}),k(this,Ke).set(i,a),n.appendChild(a)}const r=document.createElement("input");r.placeholder="🔍 type to search",r.addEventListener("change",i=>{this.search(r.value.trim())}),k(this,ee).append(r,n),k(this,ee).classList.add("hide"),document.body.appendChild(k(this,ee))}hide(){this.mask.hide(),k(this,ee).classList.add("hide")}async show(){return k(this,Ze)?(this.mask.show(),k(this,ee)&&k(this,ee).classList.remove("hide"),new Promise(t=>G(this,Ee,t))):null}search(t){k(this,Re).innerHTML="";for(let[n,r]of k(this,Ke).entries()){const{key:i,alias:a}=n;!i.includes(t)&&!(a&&a.find(s=>s.includes(t)))||k(this,Re).appendChild(r)}}}ee=new WeakMap,Ze=new WeakMap,Ke=new WeakMap,Re=new WeakMap,Ee=new WeakMap;async function gr(e){if(e.type)return e;const t=await fetch(e.url+"/data.json").then(n=>n.json());return{...e,...t}}var he,ze,Be;class mr{constructor(t){z(this,he,document.createElement("div"));z(this,ze,void 0);_(this,"loading",new Bn(k(this,he)));z(this,Be,void 0);_(this,"template");if(G(this,ze,new vr(t)),k(this,he).id="template-chooser",k(this,he).textContent="Not Selected",k(this,he).addEventListener("click",async()=>{const n=await this.showModal();k(this,Be)&&k(this,Be).call(this,n)}),!t){this.loading.show();return}this.templates=t}set templates(t){this.loading.hide(),k(this,ze).templates=t}render(){const t=document.createElement("div");return t.append($e("Select Template"),k(this,he)),t}async showModal(){const t=await k(this,ze).show();return t&&(k(this,he).textContent=t.key),this.template=t,t}set onchange(t){G(this,Be,t)}}he=new WeakMap,ze=new WeakMap,Be=new WeakMap;class xr{static from(){throw new Error}}function Fe(e,t){if(e.length!==t)throw new Error("array.length != "+t);return e}function St(e,t=!1){const n=document.createElement("canvas"),r=n.getContext("2d",{willReadFrequently:t});return n.width=e.width,n.height=e.height,r.drawImage(e,0,0),n}async function at(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>t(r),r.onerror=i=>n(i),r.src=URL.createObjectURL(e)})}function $n(e="#ffffff00"){if(typeof e=="string")return e.startsWith("#")?e:e.length<<2?"#"+e:e;if(e.length&&e.length>=3&&e.length<=4){const[t,n,r,i=1]=e;return`rgba(${t}, ${n}, ${r}, ${i})`}throw new Error("cannot load color "+e)}function yr(e,t,n=!1){const r=document.createElement("canvas"),i=r.getContext("2d"),[a,s,l,u]=t.length===2?[0,0,t[0],t[1]]:t;let c=n?(l-a)/100*e.width:l-a,b=n?(u-s)/100*e.height:u-s;return r.width=n?c/100*e.width:c,r.height=n?b/100*e.height:b,i.drawImage(e,a,s,c,b,0,0,c,b),r}function wr(e){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.translate(0,e.height),n.scale(1,-1),n.drawImage(e,0,0),t}function br(e){const t=document.createElement("canvas"),n=t.getContext("2d");t.width=e.width,t.height=e.height,n.drawImage(e,0,0);const r=n.getImageData(0,0,t.width,t.height),i=r.data;for(let a=0;a<i.length;a+=4){const s=i[a],l=i[a+1],u=i[a+2],c=(s+l+u)/3;i[a]=c,i[a+1]=c,i[a+2]=c}return n.putImageData(r,0,0),t}var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Un={},D={},At={};Object.defineProperty(At,"__esModule",{value:!0});var Er=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Cr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Mr=function(){function e(t){Cr(this,e);var n=t.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],t.sort(function(u,c){return u[0]-c[0]});for(var r=0;r<n;r++)this.xa.push(t[r][0]),this.ya.push(t[r][1]);this.u[0]=0,this.y2[0]=0;for(var r=1;r<n-1;++r){var i=this.xa[r+1]-this.xa[r-1],a=(this.xa[r]-this.xa[r-1])/i,s=a*this.y2[r-1]+2;this.y2[r]=(a-1)/s;var l=(this.ya[r+1]-this.ya[r])/(this.xa[r+1]-this.xa[r])-(this.ya[r]-this.ya[r-1])/(this.xa[r]-this.xa[r-1]);this.u[r]=(6*l/i-a*this.u[r-1])/s}this.y2[n-1]=0;for(var r=n-2;r>=0;--r)this.y2[r]=this.y2[r]*this.y2[r+1]+this.u[r]}return Er(e,[{key:"interpolate",value:function(n){for(var r=this.ya.length,i=0,a=r-1;a-i>1;){var s=a+i>>1;this.xa[s]>n?a=s:i=s}var l=this.xa[a]-this.xa[i],u=(this.xa[a]-n)/l,c=(n-this.xa[i])/l;return u*this.ya[i]+c*this.ya[a]+((u*u*u-u)*this.y2[i]+(c*c*c-c)*this.y2[a])*(l*l)/6}}]),e}();At.default=Mr;Object.defineProperty(D,"__esModule",{value:!0});D.simpleShader=Sr;D.clamp=qn;D.splineInterpolate=Ar;var kr=At,Pr=Tr(kr);function Tr(e){return e&&e.__esModule?e:{default:e}}function Sr(e,t,n,r){(n||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(r||this._.texture)}function qn(e,t,n){return Math.max(e,Math.min(t,n))}function Ar(e){for(var t=new Pr.default(e),n=[],r=0;r<256;r++)n.push(qn(0,Math.floor(t.interpolate(r/255)*256),255));return n}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.set=Fr;B.get=Or;var Pt={};function Fr(e){Pt=Object.assign(Pt,e)}function Or(e){return Pt[e]}var Ft={},N={};Object.defineProperty(N,"__esModule",{value:!0});var fn=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ir=B,ye=Rr(Ir);function Rr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function zr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Br="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main() {  texCoord = _texCoord;  gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);}",Lr="uniform sampler2D texture;varying vec2 texCoord;void main() {  gl_FragColor = texture2D(texture, texCoord);}",Dr=function(){fn(e,null,[{key:"getDefaultShader",value:function(){var n=ye.get("gl");return n.defaultShader=n.defaultShader||new e,n.defaultShader}}]);function e(t,n){zr(this,e);var r=ye.get("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=r.createProgram(),t=t||Br,n=n||Lr,n="precision highp float;"+n,r.attachShader(this.program,pn(r.VERTEX_SHADER,t)),r.attachShader(this.program,pn(r.FRAGMENT_SHADER,n)),r.linkProgram(this.program),!r.getProgramParameter(this.program,r.LINK_STATUS))throw"link error: "+r.getProgramInfoLog(this.program)}return fn(e,[{key:"destroy",value:function(){var n=ye.get("gl");n.deleteProgram(this.program),this.program=null}},{key:"uniforms",value:function(n){var r=ye.get("gl");r.useProgram(this.program);for(var i in n)if(n.hasOwnProperty(i)){var a=r.getUniformLocation(this.program,i);if(a!==null){var s=n[i];if($r(s))switch(s.length){case 1:r.uniform1fv(a,new Float32Array(s));break;case 2:r.uniform2fv(a,new Float32Array(s));break;case 3:r.uniform3fv(a,new Float32Array(s));break;case 4:r.uniform4fv(a,new Float32Array(s));break;case 9:r.uniformMatrix3fv(a,!1,new Float32Array(s));break;case 16:r.uniformMatrix4fv(a,!1,new Float32Array(s));break;default:throw`dont't know how to load uniform "`+i+'" of length '+s.length}else if(Nr(s))r.uniform1f(a,s);else throw'attempted to set uniform "'+i+'" to invalid value '+(s||"undefined").toString()}}return this}},{key:"textures",value:function(n){var r=ye.get("gl");r.useProgram(this.program);for(var i in n)n.hasOwnProperty(i)&&r.uniform1i(r.getUniformLocation(this.program,i),n[i]);return this}},{key:"drawRect",value:function(n,r,i,a){var s=ye.get("gl"),l=s.getParameter(s.VIEWPORT);r=r!==void 0?(r-l[1])/l[3]:0,n=n!==void 0?(n-l[0])/l[2]:0,i=i!==void 0?(i-l[0])/l[2]:1,a=a!==void 0?(a-l[1])/l[3]:1,s.vertexBuffer==null&&(s.vertexBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([n,r,n,a,i,r,i,a]),s.STATIC_DRAW),s.texCoordBuffer==null&&(s.texCoordBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),s.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=s.getAttribLocation(this.program,"vertex"),s.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=s.getAttribLocation(this.program,"_texCoord"),s.enableVertexAttribArray(this.texCoordAttribute)),s.useProgram(this.program),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.vertexAttribPointer(this.vertexAttribute,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.vertexAttribPointer(this.texCoordAttribute,2,s.FLOAT,!1,0,0),s.drawArrays(s.TRIANGLE_STRIP,0,4)}}]),e}();N.default=Dr;function $r(e){return Object.prototype.toString.call(e)=="[object Array]"}function Nr(e){return Object.prototype.toString.call(e)=="[object Number]"}function pn(e,t){var n=ye.get("gl"),r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS))throw"compile error: "+n.getShaderInfoLog(r);return r}Object.defineProperty(Ft,"__esModule",{value:!0});var vn=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ur=B,J=Xr(Ur),qr=N,Gr=Wr(qr);function Wr(e){return e&&e.__esModule?e:{default:e}}function Xr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Hr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var oe=null,Yr=function(){vn(e,null,[{key:"fromElement",value:function(n){var r=J.get("gl"),i=new e(0,0,r.RGBA,r.UNSIGNED_BYTE);return i.loadContentsOf(n),i}}]);function e(t,n,r,i){Hr(this,e);var a=J.get("gl");this.gl=a,this.id=a.createTexture(),this.width=t,this.height=n,this.format=r,this.type=i,a.bindTexture(a.TEXTURE_2D,this.id),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),t&&n&&a.texImage2D(a.TEXTURE_2D,0,this.format,t,n,0,this.format,this.type,null)}return vn(e,[{key:"loadContentsOf",value:function(n){var r=J.get("gl");this.width=n.width||n.videoWidth,this.height=n.height||n.videoHeight,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,this.format,this.format,this.type,n)}},{key:"initFromBytes",value:function(n,r,i){var a=J.get("gl");this.width=n,this.height=r,this.format=a.RGBA,this.type=a.UNSIGNED_BYTE,a.bindTexture(a.TEXTURE_2D,this.id),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,n,r,0,a.RGBA,this.type,new Uint8Array(i))}},{key:"destroy",value:function(){var n=J.get("gl");n.deleteTexture(this.id),this.id=null}},{key:"use",value:function(n){var r=J.get("gl");r.activeTexture(r.TEXTURE0+(n||0)),r.bindTexture(r.TEXTURE_2D,this.id)}},{key:"unuse",value:function(n){var r=J.get("gl");r.activeTexture(r.TEXTURE0+(n||0)),r.bindTexture(r.TEXTURE_2D,null)}},{key:"ensureFormat",value:function(n,r,i,a){if(arguments.length==1){var s=arguments[0];n=s.width,r=s.height,i=s.format,a=s.type}if(n!=this.width||r!=this.height||i!=this.format||a!=this.type){var l=J.get("gl");this.width=n,this.height=r,this.format=i,this.type=a,l.bindTexture(l.TEXTURE_2D,this.id),l.texImage2D(l.TEXTURE_2D,0,this.format,n,r,0,this.format,this.type,null)}}},{key:"drawTo",value:function(n){var r=J.get("gl");if(r.framebuffer=r.framebuffer||r.createFramebuffer(),r.bindFramebuffer(r.FRAMEBUFFER,r.framebuffer),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,this.id,0),r.checkFramebufferStatus(r.FRAMEBUFFER)!==r.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");r.viewport(0,0,this.width,this.height),n(),r.bindFramebuffer(r.FRAMEBUFFER,null)}},{key:"fillUsingCanvas",value:function(n){n(gn(this));var r=J.get("gl");return this.format=r.RGBA,this.type=r.UNSIGNED_BYTE,r.bindTexture(r.TEXTURE_2D,this.id),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,oe),this}},{key:"toImage",value:function(n){this.use(),Gr.default.getDefaultShader().drawRect();var r=J.get("gl"),i=this.width*this.height*4,a=new Uint8Array(i),s=gn(this),l=s.createImageData(this.width,this.height);r.readPixels(0,0,this.width,this.height,r.RGBA,r.UNSIGNED_BYTE,a);for(var u=0;u<i;u++)l.data[u]=a[u];s.putImageData(l,0,0),n.src=oe.toDataURL()}},{key:"swapWith",value:function(n){var r;r=n.id,n.id=this.id,this.id=r,r=n.width,n.width=this.width,this.width=r,r=n.height,n.height=this.height,this.height=r,r=n.format,n.format=this.format,this.format=r}}]),e}();Ft.default=Yr;function gn(e){oe==null&&(oe=document.createElement("canvas")),oe.width=e.width,oe.height=e.height;var t=oe.getContext("2d");return t.clearRect(0,0,oe.width,oe.height),t}var Gn={},Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.default=function(e,t){var n=Kr.get("gl");return n.brightnessContrast=n.brightnessContrast||new Qr.default(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),_t.simpleShader.call(this,n.brightnessContrast,{brightness:(0,_t.clamp)(-1,e,1),contrast:(0,_t.clamp)(-1,t,1)}),this};var Vr=N,Qr=jr(Vr),_t=D,Zr=B,Kr=Jr(Zr);function Jr(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function jr(e){return e&&e.__esModule?e:{default:e}}var It={};Object.defineProperty(It,"__esModule",{value:!0});It.default=function(e,t,n){var r=ri.get("gl");e=(0,nt.splineInterpolate)(e),arguments.length==1?t=n=e:(t=(0,nt.splineInterpolate)(t),n=(0,nt.splineInterpolate)(n));for(var i=[],a=0;a<256;a++)i.splice(i.length,0,e[a],t[a],n[a],255);return this._.extraTexture.initFromBytes(256,1,i),this._.extraTexture.use(1),r.curves=r.curves||new ti.default(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),r.curves.textures({map:1}),nt.simpleShader.call(this,r.curves,{}),this};var ei=N,ti=ai(ei),nt=D,ni=B,ri=ii(ni);function ii(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ai(e){return e&&e.__esModule?e:{default:e}}var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.default=function(e){var t=ui.get("gl");t.denoise=t.denoise||new oi.default(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var n=0;n<2;n++)li.simpleShader.call(this,t.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this};var si=N,oi=di(si),li=D,hi=B,ui=ci(hi);function ci(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function di(e){return e&&e.__esModule?e:{default:e}}var zt={};Object.defineProperty(zt,"__esModule",{value:!0});zt.default=function(e,t){var n=gi.get("gl");return n.hueSaturation=n.hueSaturation||new pi.default(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),Et.simpleShader.call(this,n.hueSaturation,{hue:(0,Et.clamp)(-1,e,1),saturation:(0,Et.clamp)(-1,t,1)}),this};var fi=N,pi=xi(fi),Et=D,vi=B,gi=mi(vi);function mi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function xi(e){return e&&e.__esModule?e:{default:e}}var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.default=function(e){var t=_i.get("gl");return t.noise=t.noise||new wi.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),mn.simpleShader.call(this,t.noise,{amount:(0,mn.clamp)(0,e,1)}),this};var yi=N,wi=Ci(yi),mn=D,bi=B,_i=Ei(bi);function Ei(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ci(e){return e&&e.__esModule?e:{default:e}}var Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.default=function(e){var t=Ti.get("gl");return t.sepia=t.sepia||new ki.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),xn.simpleShader.call(this,t.sepia,{amount:(0,xn.clamp)(0,e,1)}),this};var Mi=N,ki=Ai(Mi),xn=D,Pi=B,Ti=Si(Pi);function Si(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ai(e){return e&&e.__esModule?e:{default:e}}var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.default=function(e,t){var n=Ri.get("gl");return n.unsharpMask=n.unsharpMask||new yn.default(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){yn.default.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),n.unsharpMask.textures({originalTexture:1}),Oi.simpleShader.call(this,n.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this};var Fi=N,yn=Bi(Fi),Oi=D,Ii=B,Ri=zi(Ii);function zi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Bi(e){return e&&e.__esModule?e:{default:e}}var $t={};Object.defineProperty($t,"__esModule",{value:!0});$t.default=function(e){var t=Ni.get("gl");return t.vibrance=t.vibrance||new Di.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),wn.simpleShader.call(this,t.vibrance,{amount:(0,wn.clamp)(-1,e,1)}),this};var Li=N,Di=qi(Li),wn=D,$i=B,Ni=Ui($i);function Ui(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function qi(e){return e&&e.__esModule?e:{default:e}}var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0});Nt.default=function(e,t){var n=Hi.get("gl");return n.vignette=n.vignette||new Wi.default(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),Ct.simpleShader.call(this,n.vignette,{size:(0,Ct.clamp)(0,e,1),amount:(0,Ct.clamp)(0,t,1)}),this};var Gi=N,Wi=Vi(Gi),Ct=D,Xi=B,Hi=Yi(Xi);function Yi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Vi(e){return e&&e.__esModule?e:{default:e}}var Ut={},Z={};Object.defineProperty(Z,"__esModule",{value:!0});Z.randomShaderFunc=void 0;Z.warpShader=Ji;var Qi=N,Zi=Ki(Qi);function Ki(e){return e&&e.__esModule?e:{default:e}}function Ji(e,t){return new Zi.default(null,e+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+t+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}Z.randomShaderFunc="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.default=function(e,t,n){var r=na.get("gl");r.lensBlurPrePass=r.lensBlurPrePass||new rt.default(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var i="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+ea.randomShaderFunc+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";r.lensBlur0=r.lensBlur0||new rt.default(null,i+"    void main() {      gl_FragColor = sample(delta0);    }  "),r.lensBlur1=r.lensBlur1||new rt.default(null,i+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),r.lensBlur2=r.lensBlur2||new rt.default(null,i+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var a=[],s=0;s<3;s++){var l=n+s*Math.PI*2/3;a.push([e*Math.sin(l)/this.width,e*Math.cos(l)/this.height])}var u=Math.pow(10,(0,Oe.clamp)(-1,t,1));return Oe.simpleShader.call(this,r.lensBlurPrePass,{power:u}),this._.extraTexture.ensureFormat(this._.texture),Oe.simpleShader.call(this,r.lensBlur0,{delta0:a[0]},this._.texture,this._.extraTexture),Oe.simpleShader.call(this,r.lensBlur1,{delta0:a[1],delta1:a[2]},this._.extraTexture,this._.extraTexture),Oe.simpleShader.call(this,r.lensBlur0,{delta0:a[1]}),this._.extraTexture.use(1),Oe.simpleShader.call(this,r.lensBlur2,{power:1/u,delta0:a[2]}),this};var ji=N,rt=ia(ji),Oe=D,ea=Z,ta=B,na=ra(ta);function ra(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ia(e){return e&&e.__esModule?e:{default:e}}var qt={};Object.defineProperty(qt,"__esModule",{value:!0});qt.default=function(e,t,n,r,i,a){var s=ha.get("gl");s.tiltShift=s.tiltShift||new sa.default(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+oa.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var l=n-e,u=r-t,c=Math.sqrt(l*l+u*u);return bn.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[n,r],delta:[l/c,u/c],texSize:[this.width,this.height]}),bn.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[n,r],delta:[-u/c,l/c],texSize:[this.width,this.height]}),this};var aa=N,sa=ca(aa),bn=D,oa=Z,la=B,ha=ua(la);function ua(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ca(e){return e&&e.__esModule?e:{default:e}}var Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.default=function(e){var t=ga.get("gl");return t.triangleBlur=t.triangleBlur||new fa.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+pa.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),_n.simpleShader.call(this,t.triangleBlur,{delta:[e/this.width,0]}),_n.simpleShader.call(this,t.triangleBlur,{delta:[0,e/this.height]}),this};var da=N,fa=xa(da),_n=D,pa=Z,va=B,ga=ma(va);function ma(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function xa(e){return e&&e.__esModule?e:{default:e}}var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});Wt.default=function(e,t,n){var r=Ca.get("gl");return r.zoomBlur=r.zoomBlur||new wa.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+_a.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),ba.simpleShader.call(this,r.zoomBlur,{center:[e,t],strength:n,texSize:[this.width,this.height]}),this};var ya=N,wa=ka(ya),ba=D,_a=Z,Ea=B,Ca=Ma(Ea);function Ma(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function ka(e){return e&&e.__esModule?e:{default:e}}var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});Xt.default=function(e,t,n,r){var i=Fa.get("gl");return i.colorHalftone=i.colorHalftone||new Ta.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),Sa.simpleShader.call(this,i.colorHalftone,{center:[e,t],angle:n,scale:Math.PI/r,texSize:[this.width,this.height]}),this};var Pa=N,Ta=Ia(Pa),Sa=D,Aa=B,Fa=Oa(Aa);function Oa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ia(e){return e&&e.__esModule?e:{default:e}}var Ht={};Object.defineProperty(Ht,"__esModule",{value:!0});Ht.default=function(e,t,n,r){var i=Da.get("gl");return i.dotScreen=i.dotScreen||new za.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),Ba.simpleShader.call(this,i.dotScreen,{center:[e,t],angle:n,scale:Math.PI/r,texSize:[this.width,this.height]}),this};var Ra=N,za=Na(Ra),Ba=D,La=B,Da=$a(La);function $a(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Na(e){return e&&e.__esModule?e:{default:e}}var Yt={};Object.defineProperty(Yt,"__esModule",{value:!0});Yt.default=function(e){var t=Ga.get("gl");return t.edgeWork1=t.edgeWork1||new En.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Mn.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),t.edgeWork2=t.edgeWork2||new En.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Mn.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),Cn.simpleShader.call(this,t.edgeWork1,{delta:[e/this.width,0]}),Cn.simpleShader.call(this,t.edgeWork2,{delta:[0,e/this.height]}),this};var Ua=N,En=Xa(Ua),Cn=D,Mn=Z,qa=B,Ga=Wa(qa);function Wa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Xa(e){return e&&e.__esModule?e:{default:e}}var Vt={};Object.defineProperty(Vt,"__esModule",{value:!0});Vt.default=function(e,t,n){var r=Za.get("gl");return r.hexagonalPixelate=r.hexagonalPixelate||new Ya.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),Va.simpleShader.call(this,r.hexagonalPixelate,{center:[e,t],scale:n,texSize:[this.width,this.height]}),this};var Ha=N,Ya=Ja(Ha),Va=D,Qa=B,Za=Ka(Qa);function Ka(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function Ja(e){return e&&e.__esModule?e:{default:e}}var Qt={};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.default=function(e){var t=rs.get("gl");return t.ink=t.ink||new es.default(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),ts.simpleShader.call(this,t.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this};var ja=N,es=as(ja),ts=D,ns=B,rs=is(ns);function is(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function as(e){return e&&e.__esModule?e:{default:e}}var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.default=function(e,t,n,r){var i=ls.get("gl");return i.bulgePinch=i.bulgePinch||(0,ss.warpShader)("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),kn.simpleShader.call(this,i.bulgePinch,{radius:n,strength:(0,kn.clamp)(-1,r,1),center:[e,t],texSize:[this.width,this.height]}),this};var ss=Z,kn=D,os=B,ls=hs(os);function hs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var Kt={},Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});Ge.getSquareToQuad=us;Ge.getInverse=cs;Ge.multiply=ds;function us(e,t,n,r,i,a,s,l){var u=n-i,c=r-a,b=s-i,x=l-a,y=e-n+i-s,g=t-r+a-l,w=u*x-b*c,P=(y*x-b*g)/w,C=(u*g-y*c)/w;return[n-e+P*n,r-t+P*r,P,s-e+C*s,l-t+C*l,C,e,t,1]}function cs(e){var t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],b=t*a*c-t*s*u-n*i*c+n*s*l+r*i*u-r*a*l;return[(a*c-s*u)/b,(r*u-n*c)/b,(n*s-r*a)/b,(s*l-i*c)/b,(t*c-r*l)/b,(r*i-t*s)/b,(i*u-a*l)/b,(n*l-t*u)/b,(t*a-n*i)/b]}function ds(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}Object.defineProperty(Kt,"__esModule",{value:!0});Kt.default=function(e,t,n){var r=ms.get("gl");if(r.matrixWarp=r.matrixWarp||(0,fs.warpShader)("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),e=Array.prototype.concat.apply([],e),e.length==4)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(e.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return vs.simpleShader.call(this,r.matrixWarp,{matrix:t?(0,ps.getInverse)(e):e,texSize:[this.width,this.height],useTextureSpace:n|0}),this};var fs=Z,ps=Ge,vs=D,gs=B,ms=xs(gs);function xs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}var Jt={};Object.defineProperty(Jt,"__esModule",{value:!0});Jt.default=function(e,t){var n=it.getSquareToQuad.apply(null,t),r=it.getSquareToQuad.apply(null,e),i=(0,it.multiply)((0,it.getInverse)(n),r);return this.matrixWarp(i)};var it=Ge,jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.default=function(e,t,n,r){var i=_s.get("gl");return i.swirl=i.swirl||(0,ys.warpShader)("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),ws.simpleShader.call(this,i.swirl,{radius:n,center:[e,t],angle:r,texSize:[this.width,this.height]}),this};var ys=Z,ws=D,bs=B,_s=Es(bs);function Es(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ot;Object.defineProperty(e,"brightnessContrast",{enumerable:!0,get:function(){return d(t).default}});var n=It;Object.defineProperty(e,"curves",{enumerable:!0,get:function(){return d(n).default}});var r=Rt;Object.defineProperty(e,"denoise",{enumerable:!0,get:function(){return d(r).default}});var i=zt;Object.defineProperty(e,"hueSaturation",{enumerable:!0,get:function(){return d(i).default}});var a=Bt;Object.defineProperty(e,"noise",{enumerable:!0,get:function(){return d(a).default}});var s=Lt;Object.defineProperty(e,"sepia",{enumerable:!0,get:function(){return d(s).default}});var l=Dt;Object.defineProperty(e,"unsharpMask",{enumerable:!0,get:function(){return d(l).default}});var u=$t;Object.defineProperty(e,"vibrance",{enumerable:!0,get:function(){return d(u).default}});var c=Nt;Object.defineProperty(e,"vignette",{enumerable:!0,get:function(){return d(c).default}});var b=Ut;Object.defineProperty(e,"lensBlur",{enumerable:!0,get:function(){return d(b).default}});var x=qt;Object.defineProperty(e,"tiltShift",{enumerable:!0,get:function(){return d(x).default}});var y=Gt;Object.defineProperty(e,"triangleBlur",{enumerable:!0,get:function(){return d(y).default}});var g=Wt;Object.defineProperty(e,"zoomBlur",{enumerable:!0,get:function(){return d(g).default}});var w=Xt;Object.defineProperty(e,"colorHalftone",{enumerable:!0,get:function(){return d(w).default}});var P=Ht;Object.defineProperty(e,"dotScreen",{enumerable:!0,get:function(){return d(P).default}});var C=Yt;Object.defineProperty(e,"edgeWork",{enumerable:!0,get:function(){return d(C).default}});var m=Vt;Object.defineProperty(e,"hexagonalPixelate",{enumerable:!0,get:function(){return d(m).default}});var h=Qt;Object.defineProperty(e,"ink",{enumerable:!0,get:function(){return d(h).default}});var v=Zt;Object.defineProperty(e,"bulgePinch",{enumerable:!0,get:function(){return d(v).default}});var f=Kt;Object.defineProperty(e,"matrixWarp",{enumerable:!0,get:function(){return d(f).default}});var E=Jt;Object.defineProperty(e,"perspective",{enumerable:!0,get:function(){return d(E).default}});var o=jt;Object.defineProperty(e,"swirl",{enumerable:!0,get:function(){return d(o).default}});function d(p){return p&&p.__esModule?p:{default:p}}})(Gn);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.splineInterpolate=void 0;var t=D;Object.defineProperty(e,"splineInterpolate",{enumerable:!0,get:function(){return t.splineInterpolate}}),e.canvas=E;var n=B,r=x(n),i=Ft,a=b(i),s=N,l=b(s),u=Gn,c=x(u);function b(o){return o&&o.__esModule?o:{default:o}}function x(o){if(o&&o.__esModule)return o;var d={};if(o!=null)for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(d[p]=o[p]);return d.default=o,d}function y(o){return{_:o,loadContentsOf:function(p){r.set({gl:this._.gl}),this._.loadContentsOf(p)},destroy:function(){r.set({gl:this._.gl}),this._.destroy()}}}function g(o){return y(a.default.fromElement(o))}function w(o,d){var p=r.get("gl"),M=p.UNSIGNED_BYTE;if(p.getExtension("OES_texture_float")&&p.getExtension("OES_texture_float_linear")){var T=new a.default(100,100,p.RGBA,p.FLOAT);try{T.drawTo(function(){M=p.FLOAT})}catch{}T.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=o,this.height=d,this._.texture=new a.default(o,d,p.RGBA,M),this._.spareTexture=new a.default(o,d,p.RGBA,M),this._.extraTexture=this._.extraTexture||new a.default(0,0,p.RGBA,M),this._.flippedShader=this._.flippedShader||new l.default(null,"	    uniform sampler2D texture;	    varying vec2 texCoord;	    void main() {	      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));	    }	  "),this._.isInitialized=!0}function P(o,d,p){return(!this._.isInitialized||o._.width!=this.width||o._.height!=this.height)&&w.call(this,d||o._.width,p||o._.height),o._.use(),this._.texture.drawTo(function(){l.default.getDefaultShader().drawRect()}),this}function C(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function m(o){return o.parentNode.insertBefore(this,o),o.parentNode.removeChild(o),this}function h(){var o=r.get("gl"),d=new a.default(this._.texture.width,this._.texture.height,o.RGBA,o.UNSIGNED_BYTE);return this._.texture.use(),d.drawTo(function(){l.default.getDefaultShader().drawRect()}),y(d)}function v(){var o=r.get("gl"),d=this._.texture.width,p=this._.texture.height,M=new Uint8Array(d*p*4);return this._.texture.drawTo(function(){o.readPixels(0,0,d,p,o.RGBA,o.UNSIGNED_BYTE,M)}),M}function f(o){return function(){return r.set({gl:this._.gl}),o.apply(this,arguments)}}function E(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("canvas");try{r.set({gl:o.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{r.set({gl:null})}var d=r.get("gl");if(!d)throw"This browser does not support WebGL";return o._={gl:d,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},o.texture=f(g),o.draw=f(P),o.update=f(C),o.replace=f(m),o.contents=f(h),o.getPixelArray=f(v),o.brightnessContrast=f(c.brightnessContrast),o.hexagonalPixelate=f(c.hexagonalPixelate),o.hueSaturation=f(c.hueSaturation),o.colorHalftone=f(c.colorHalftone),o.triangleBlur=f(c.triangleBlur),o.unsharpMask=f(c.unsharpMask),o.perspective=f(c.perspective),o.matrixWarp=f(c.matrixWarp),o.bulgePinch=f(c.bulgePinch),o.tiltShift=f(c.tiltShift),o.dotScreen=f(c.dotScreen),o.edgeWork=f(c.edgeWork),o.lensBlur=f(c.lensBlur),o.zoomBlur=f(c.zoomBlur),o.noise=f(c.noise),o.denoise=f(c.denoise),o.curves=f(c.curves),o.swirl=f(c.swirl),o.ink=f(c.ink),o.vignette=f(c.vignette),o.vibrance=f(c.vibrance),o.sepia=f(c.sepia),o}})(Un);class Cs{constructor(t=!0){_(this,"fxCanvas",Un.canvas());_(this,"textureMap",new Map);_(this,"cache");this.cache=t}draw(t,n,r){const i=this.cache&&this.textureMap.has(n)?this.textureMap.get(n):this.fxCanvas.texture(n);this.cache&&!this.textureMap.has(n)&&this.textureMap.set(n,i);let[a,s]=r[0],[l,u]=r[1],[c,b]=r[2],[x,y]=r[3];const[g,w]=r[4];a+=g,l+=g,c+=g,x+=g,s+=w,u+=w,b+=w,y+=w;const P=t.canvas;this.fxCanvas.draw(i,P.width,P.height).perspective([0,0,P.width,0,0,P.height,P.width,P.height],[a,s,x,y,l,u,c,b]).update(),t.drawImage(this.fxCanvas,0,0),this.cache||i.destroy()}destroy(){if(this.cache)for(const t of[...this.textureMap.values()])t.destroy()}}function Ms(e){const t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.translate(e.width,0),n.scale(-1,1),n.drawImage(e,0,0),t}function ks(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=e.width,i=e.height;t.width=r,t.height=i,n.drawImage(e,0,0);const a=n.getImageData(0,0,r,i),s=a.data;for(let l=0;l<s.length;l+=4){const u=s[l],c=s[l+1],b=s[l+2];u+c+b>383?(s[l]=255,s[l+1]=255,s[l+2]=255):(s[l]=0,s[l+1]=0,s[l+2]=0)}return n.putImageData(a,0,0),t}function Ps(e){const t=document.createElement("canvas"),n=t.getContext("2d"),r=Math.min(e.width,e.height)/2;return t.width=r*2,t.height=r*2,n.save(),n.beginPath(),n.arc(r,r,r,0,2*Math.PI),n.closePath(),n.clip(),n.drawImage(e,r-e.width/2,r-e.height/2),n.restore(),t}function Ts(e,t,n=!0){const r=document.createElement("canvas"),i=r.getContext("2d"),a=e.width,s=e.height;if(!n)return r.width=a,r.height=s,i.translate(a/2,s/2),i.rotate(t*Math.PI/180),i.drawImage(e,-a/2,-s/2),r;const l=Math.abs(Math.sin(t*Math.PI/180)),u=Math.abs(Math.cos(t*Math.PI/180)),c=Math.floor(a*u+s*l),b=Math.floor(s*u+a*l);return r.width=c,r.height=b,i.translate(c/2,b/2),i.rotate(t*Math.PI/180),i.drawImage(e,-a/2,-s/2),r}var Q="INUMBER",We="IOP1",Xe="IOP2",He="IOP3",de="IVAR",Pe="IVARNAME",Ne="IFUNCALL",ct="IFUNDEF",H="IEXPR",en="IEXPREVAL",Se="IMEMBER",dt="IENDSTATEMENT",Ue="IARRAY";function O(e,t){this.type=e,this.value=t??0}O.prototype.toString=function(){switch(this.type){case Q:case We:case Xe:case He:case de:case Pe:case dt:return this.value;case Ne:return"CALL "+this.value;case ct:return"DEF "+this.value;case Ue:return"ARRAY "+this.value;case Se:return"."+this.value;default:return"Invalid Instruction"}};function ft(e){return new O(We,e)}function ve(e){return new O(Xe,e)}function Wn(e){return new O(He,e)}function Tt(e,t,n,r,i){for(var a=[],s=[],l,u,c,b,x=0;x<e.length;x++){var y=e[x],g=y.type;if(g===Q||g===Pe)Array.isArray(y.value)?a.push.apply(a,Tt(y.value.map(function(w){return new O(Q,w)}).concat(new O(Ue,y.value.length)),t,n,r,i)):a.push(y);else if(g===de&&i.hasOwnProperty(y.value))y=new O(Q,i[y.value]),a.push(y);else if(g===Xe&&a.length>1)u=a.pop(),l=a.pop(),b=n[y.value],y=new O(Q,b(l.value,u.value)),a.push(y);else if(g===He&&a.length>2)c=a.pop(),u=a.pop(),l=a.pop(),y.value==="?"?a.push(l.value?u.value:c.value):(b=r[y.value],y=new O(Q,b(l.value,u.value,c.value)),a.push(y));else if(g===We&&a.length>0)l=a.pop(),b=t[y.value],y=new O(Q,b(l.value)),a.push(y);else if(g===H){for(;a.length>0;)s.push(a.shift());s.push(new O(H,Tt(y.value,t,n,r,i)))}else if(g===Se&&a.length>0)l=a.pop(),a.push(new O(Q,l.value[y.value]));else{for(;a.length>0;)s.push(a.shift());s.push(y)}}for(;a.length>0;)s.push(a.shift());return s}function Xn(e,t,n){for(var r=[],i=0;i<e.length;i++){var a=e[i],s=a.type;if(s===de&&a.value===t)for(var l=0;l<n.tokens.length;l++){var u=n.tokens[l],c;u.type===We?c=ft(u.value):u.type===Xe?c=ve(u.value):u.type===He?c=Wn(u.value):c=new O(u.type,u.value),r.push(c)}else s===H?r.push(new O(H,Xn(a.value,t,n))):r.push(a)}return r}function we(e,t,n){var r=[],i,a,s,l,u,c;if(tn(e))return se(e,n);for(var b=e.length,x=0;x<b;x++){var y=e[x],g=y.type;if(g===Q||g===Pe)r.push(y.value);else if(g===Xe)a=r.pop(),i=r.pop(),y.value==="and"?r.push(i?!!we(a,t,n):!1):y.value==="or"?r.push(i?!0:!!we(a,t,n)):y.value==="="?(l=t.binaryOps[y.value],r.push(l(i,we(a,t,n),n))):(l=t.binaryOps[y.value],r.push(l(se(i,n),se(a,n))));else if(g===He)s=r.pop(),a=r.pop(),i=r.pop(),y.value==="?"?r.push(we(i?a:s,t,n)):(l=t.ternaryOps[y.value],r.push(l(se(i,n),se(a,n),se(s,n))));else if(g===de)if(y.value in t.functions)r.push(t.functions[y.value]);else if(y.value in t.unaryOps&&t.parser.isOperatorEnabled(y.value))r.push(t.unaryOps[y.value]);else{var w=n[y.value];if(w!==void 0)r.push(w);else throw new Error("undefined variable: "+y.value)}else if(g===We)i=r.pop(),l=t.unaryOps[y.value],r.push(l(se(i,n)));else if(g===Ne){for(c=y.value,u=[];c-- >0;)u.unshift(se(r.pop(),n));if(l=r.pop(),l.apply&&l.call)r.push(l.apply(void 0,u));else throw new Error(l+" is not a function")}else if(g===ct)r.push(function(){for(var P=r.pop(),C=[],m=y.value;m-- >0;)C.unshift(r.pop());var h=r.pop(),v=function(){for(var f=Object.assign({},n),E=0,o=C.length;E<o;E++)f[C[E]]=arguments[E];return we(P,t,f)};return Object.defineProperty(v,"name",{value:h,writable:!1}),n[h]=v,v}());else if(g===H)r.push(Ss(y,t));else if(g===en)r.push(y);else if(g===Se)i=r.pop(),r.push(i[y.value]);else if(g===dt)r.pop();else if(g===Ue){for(c=y.value,u=[];c-- >0;)u.unshift(r.pop());r.push(u)}else throw new Error("invalid Expression")}if(r.length>1)throw new Error("invalid Expression (parity)");return r[0]===0?0:se(r[0],n)}function Ss(e,t,n){return tn(e)?e:{type:en,value:function(r){return we(e.value,t,r)}}}function tn(e){return e&&e.type===en}function se(e,t){return tn(e)?e.value(t):e}function nn(e,t){for(var n=[],r,i,a,s,l,u,c=0;c<e.length;c++){var b=e[c],x=b.type;if(x===Q)typeof b.value=="number"&&b.value<0?n.push("("+b.value+")"):Array.isArray(b.value)?n.push("["+b.value.map(Pn).join(", ")+"]"):n.push(Pn(b.value));else if(x===Xe)i=n.pop(),r=n.pop(),s=b.value,t?s==="^"?n.push("Math.pow("+r+", "+i+")"):s==="and"?n.push("(!!"+r+" && !!"+i+")"):s==="or"?n.push("(!!"+r+" || !!"+i+")"):s==="||"?n.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+r+"),("+i+")))"):s==="=="?n.push("("+r+" === "+i+")"):s==="!="?n.push("("+r+" !== "+i+")"):s==="["?n.push(r+"[("+i+") | 0]"):n.push("("+r+" "+s+" "+i+")"):s==="["?n.push(r+"["+i+"]"):n.push("("+r+" "+s+" "+i+")");else if(x===He)if(a=n.pop(),i=n.pop(),r=n.pop(),s=b.value,s==="?")n.push("("+r+" ? "+i+" : "+a+")");else throw new Error("invalid Expression");else if(x===de||x===Pe)n.push(b.value);else if(x===We)r=n.pop(),s=b.value,s==="-"||s==="+"?n.push("("+s+r+")"):t?s==="not"?n.push("(!"+r+")"):s==="!"?n.push("fac("+r+")"):n.push(s+"("+r+")"):s==="!"?n.push("("+r+"!)"):n.push("("+s+" "+r+")");else if(x===Ne){for(u=b.value,l=[];u-- >0;)l.unshift(n.pop());s=n.pop(),n.push(s+"("+l.join(", ")+")")}else if(x===ct){for(i=n.pop(),u=b.value,l=[];u-- >0;)l.unshift(n.pop());r=n.pop(),t?n.push("("+r+" = function("+l.join(", ")+") { return "+i+" })"):n.push("("+r+"("+l.join(", ")+") = "+i+")")}else if(x===Se)r=n.pop(),n.push(r+"."+b.value);else if(x===Ue){for(u=b.value,l=[];u-- >0;)l.unshift(n.pop());n.push("["+l.join(", ")+"]")}else if(x===H)n.push("("+nn(b.value,t)+")");else if(x!==dt)throw new Error("invalid Expression")}return n.length>1&&(t?n=[n.join(",")]:n=[n.join(";")]),String(n[0])}function Pn(e){return typeof e=="string"?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function Ie(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}function rn(e,t,n){n=n||{};for(var r=!!n.withMembers,i=null,a=0;a<e.length;a++){var s=e[a];s.type===de||s.type===Pe?!r&&!Ie(t,s.value)?t.push(s.value):(i!==null&&(Ie(t,i)||t.push(i)),i=s.value):s.type===Se&&r&&i!==null?i+="."+s.value:s.type===H?rn(s.value,t,n):i!==null&&(Ie(t,i)||t.push(i),i=null)}i!==null&&!Ie(t,i)&&t.push(i)}function ne(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}ne.prototype.simplify=function(e){return e=e||{},new ne(Tt(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)};ne.prototype.substitute=function(e,t){return t instanceof ne||(t=this.parser.parse(String(t))),new ne(Xn(this.tokens,e,t),this.parser)};ne.prototype.evaluate=function(e){return e=e||{},we(this.tokens,this,e)};ne.prototype.toString=function(){return nn(this.tokens,!1)};ne.prototype.symbols=function(e){e=e||{};var t=[];return rn(this.tokens,t,e),t};ne.prototype.variables=function(e){e=e||{};var t=[];rn(this.tokens,t,e);var n=this.functions;return t.filter(function(r){return!(r in n)})};ne.prototype.toJSFunction=function(e,t){var n=this,r=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+nn(this.simplify(t).tokens,!0)+"; }");return function(){return r.apply(n,arguments)}};var Ve="TEOF",L="TOP",pt="TNUMBER",Hn="TSTRING",fe="TPAREN",qe="TBRACKET",vt="TCOMMA",an="TNAME",sn="TSEMICOLON";function Yn(e,t,n){this.type=e,this.value=t,this.index=n}Yn.prototype.toString=function(){return this.type+": "+this.value};function U(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}U.prototype.newToken=function(e,t,n){return new Yn(e,t,n??this.pos)};U.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};U.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};U.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken(Ve,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};U.prototype.isString=function(){var e=!1,t=this.pos,n=this.expression.charAt(t);if(n==="'"||n==='"')for(var r=this.expression.indexOf(n,t+1);r>=0&&this.pos<this.expression.length;){if(this.pos=r+1,this.expression.charAt(r-1)!=="\\"){var i=this.expression.substring(t+1,r);this.current=this.newToken(Hn,this.unescape(i),t),e=!0;break}r=this.expression.indexOf(n,r+1)}return e};U.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return e==="("||e===")"?(this.current=this.newToken(fe,e),this.pos++,!0):!1};U.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return(e==="["||e==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(qe,e),this.pos++,!0):!1};U.prototype.isComma=function(){var e=this.expression.charAt(this.pos);return e===","?(this.current=this.newToken(vt,","),this.pos++,!0):!1};U.prototype.isSemicolon=function(){var e=this.expression.charAt(this.pos);return e===";"?(this.current=this.newToken(sn,";"),this.pos++,!0):!1};U.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||n!=="_"&&n!=="."&&(n<"0"||n>"9")))break}if(t>e){var r=this.expression.substring(e,t);if(r in this.consts)return this.current=this.newToken(pt,this.consts[r]),this.pos+=r.length,!0}return!1};U.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()&&(t===this.pos||n!=="_"&&(n<"0"||n>"9")))break}if(t>e){var r=this.expression.substring(e,t);if(this.isOperatorEnabled(r)&&(r in this.binaryOps||r in this.unaryOps||r in this.ternaryOps))return this.current=this.newToken(L,r),this.pos+=r.length,!0}return!1};U.prototype.isName=function(){for(var e=this.pos,t=e,n=!1;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()){if(t===this.pos&&(r==="$"||r==="_")){r==="_"&&(n=!0);continue}else if(t===this.pos||!n||r!=="_"&&(r<"0"||r>"9"))break}else n=!0}if(n){var i=this.expression.substring(e,t);return this.current=this.newToken(an,i),this.pos+=i.length,!0}return!1};U.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);(t===" "||t==="	"||t===`
`||t==="\r")&&(e=!0,this.pos++,!(this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var As=/^[0-9a-f]{4}$/i;U.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var n=e.substring(0,t);t>=0;){var r=e.charAt(++t);switch(r){case"'":n+="'";break;case'"':n+='"';break;case"\\":n+="\\";break;case"/":n+="/";break;case"b":n+="\b";break;case"f":n+="\f";break;case"n":n+=`
`;break;case"r":n+="\r";break;case"t":n+="	";break;case"u":var i=e.substring(t+1,t+5);As.test(i)||this.parseError("Illegal escape sequence: \\u"+i),n+=String.fromCharCode(parseInt(i,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+r+'"')}++t;var a=e.indexOf("\\",t);n+=e.substring(t,a<0?e.length:a),t=a}return n};U.prototype.isComment=function(){var e=this.expression.charAt(this.pos);return e==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};U.prototype.isRadixInteger=function(){var e=this.pos;if(e>=this.expression.length-2||this.expression.charAt(e)!=="0")return!1;++e;var t,n;if(this.expression.charAt(e)==="x")t=16,n=/^[0-9a-f]$/i,++e;else if(this.expression.charAt(e)==="b")t=2,n=/^[01]$/i,++e;else return!1;for(var r=!1,i=e;e<this.expression.length;){var a=this.expression.charAt(e);if(n.test(a))e++,r=!0;else break}return r&&(this.current=this.newToken(pt,parseInt(this.expression.substring(i,e),t)),this.pos=e),r};U.prototype.isNumber=function(){for(var e=!1,t=this.pos,n=t,r=t,i=!1,a=!1,s;t<this.expression.length&&(s=this.expression.charAt(t),s>="0"&&s<="9"||!i&&s===".");)s==="."?i=!0:a=!0,t++,e=a;if(e&&(r=t),s==="e"||s==="E"){t++;for(var l=!0,u=!1;t<this.expression.length;){if(s=this.expression.charAt(t),l&&(s==="+"||s==="-"))l=!1;else if(s>="0"&&s<="9")u=!0,l=!1;else break;t++}u||(t=r)}return e?(this.current=this.newToken(pt,parseFloat(this.expression.substring(n,t))),this.pos=t):this.pos=r,e};U.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if(t==="+"||t==="-"||t==="*"||t==="/"||t==="%"||t==="^"||t==="?"||t===":"||t===".")this.current=this.newToken(L,t);else if(t==="∙"||t==="•")this.current=this.newToken(L,"*");else if(t===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(L,">="),this.pos++):this.current=this.newToken(L,">");else if(t==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(L,"<="),this.pos++):this.current=this.newToken(L,"<");else if(t==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(L,"||"),this.pos++;else return!1;else if(t==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(L,"=="),this.pos++):this.current=this.newToken(L,t);else if(t==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(L,"!="),this.pos++):this.current=this.newToken(L,t);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=e,!1)};U.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)};U.prototype.getCoordinates=function(){var e=0,t,n=-1;do e++,t=this.pos-n,n=this.expression.indexOf(`
`,n+1);while(n>=0&&n<this.pos);return{line:e,column:t}};U.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)};function $(e,t,n){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=n.allowMemberAccess!==!1}$.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};$.prototype.tokenMatches=function(e,t){return typeof t>"u"?!0:Array.isArray(t)?Ie(t,e.value):typeof t=="function"?t(e):e.value===t};$.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};$.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};$.prototype.accept=function(e,t){return this.nextToken.type===e&&this.tokenMatches(this.nextToken,t)?(this.next(),!0):!1};$.prototype.expect=function(e,t){if(!this.accept(e,t)){var n=this.tokens.getCoordinates();throw new Error("parse error ["+n.line+":"+n.column+"]: Expected "+(t||e))}};$.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;function n(i){return i.value in t}if(this.accept(an)||this.accept(L,n))e.push(new O(de,this.current.value));else if(this.accept(pt))e.push(new O(Q,this.current.value));else if(this.accept(Hn))e.push(new O(Q,this.current.value));else if(this.accept(fe,"("))this.parseExpression(e),this.expect(fe,")");else if(this.accept(qe,"["))if(this.accept(qe,"]"))e.push(new O(Ue,0));else{var r=this.parseArrayList(e);e.push(new O(Ue,r))}else throw new Error("unexpected "+this.nextToken)};$.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),!this.parseUntilEndStatement(e,t)&&this.pushExpression(e,t))};$.prototype.pushExpression=function(e,t){for(var n=0,r=t.length;n<r;n++)e.push(t[n])};$.prototype.parseUntilEndStatement=function(e,t){return this.accept(sn)?(this.nextToken&&this.nextToken.type!==Ve&&!(this.nextToken.type===fe&&this.nextToken.value===")")&&t.push(new O(dt)),this.nextToken.type!==Ve&&this.parseExpression(t),e.push(new O(H,t)),!0):!1};$.prototype.parseArrayList=function(e){for(var t=0;!this.accept(qe,"]");)for(this.parseExpression(e),++t;this.accept(vt);)this.parseExpression(e),++t;return t};$.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(L,"=");){var t=e.pop(),n=[],r=e.length-1;if(t.type===Ne){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,a=t.value+1;i<a;i++){var s=r-i;e[s].type===de&&(e[s]=new O(Pe,e[s].value))}this.parseVariableAssignmentExpression(n),e.push(new O(H,n)),e.push(new O(ct,t.value));continue}if(t.type!==de&&t.type!==Se)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(n),e.push(new O(Pe,t.value)),e.push(new O(H,n)),e.push(ve("="))}};$.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(L,"?");){var t=[],n=[];this.parseConditionalExpression(t),this.expect(L,":"),this.parseConditionalExpression(n),e.push(new O(H,t)),e.push(new O(H,n)),e.push(Wn("?"))}};$.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(L,"or");){var t=[];this.parseAndExpression(t),e.push(new O(H,t)),e.push(ve("or"))}};$.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(L,"and");){var t=[];this.parseComparison(t),e.push(new O(H,t)),e.push(ve("and"))}};var Fs=["==","!=","<","<=",">=",">","in"];$.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(L,Fs);){var t=this.current;this.parseAddSub(e),e.push(ve(t.value))}};var Os=["+","-","||"];$.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(L,Os);){var t=this.current;this.parseTerm(e),e.push(ve(t.value))}};var Is=["*","/","%"];$.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(L,Is);){var t=this.current;this.parseFactor(e),e.push(ve(t.value))}};$.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;function n(i){return i.value in t}if(this.save(),this.accept(L,n)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===fe&&this.nextToken.value==="("){this.restore(),this.parseExponential(e);return}else if(this.nextToken.type===sn||this.nextToken.type===vt||this.nextToken.type===Ve||this.nextToken.type===fe&&this.nextToken.value===")"){this.restore(),this.parseAtom(e);return}}var r=this.current;this.parseFactor(e),e.push(ft(r.value))}else this.parseExponential(e)};$.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(L,"^");)this.parseFactor(e),e.push(ve("^"))};$.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(L,"!");)e.push(ft("!"))};$.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;function n(a){return a.value in t}if(this.accept(L,n)){var r=this.current;this.parseAtom(e),e.push(ft(r.value))}else for(this.parseMemberExpression(e);this.accept(fe,"(");)if(this.accept(fe,")"))e.push(new O(Ne,0));else{var i=this.parseArgumentList(e);e.push(new O(Ne,i))}};$.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(fe,")");)for(this.parseExpression(e),++t;this.accept(vt);)this.parseExpression(e),++t;return t};$.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(L,".")||this.accept(qe,"[");){var t=this.current;if(t.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(an),e.push(new O(Se,this.current.value))}else if(t.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(qe,"]"),e.push(ve("["))}else throw new Error("unexpected symbol: "+t.value)}};function Rs(e,t){return Number(e)+Number(t)}function zs(e,t){return e-t}function Bs(e,t){return e*t}function Ls(e,t){return e/t}function Ds(e,t){return e%t}function $s(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function Ns(e,t){return e===t}function Us(e,t){return e!==t}function qs(e,t){return e>t}function Gs(e,t){return e<t}function Ws(e,t){return e>=t}function Xs(e,t){return e<=t}function Hs(e,t){return!!(e&&t)}function Ys(e,t){return!!(e||t)}function Vs(e,t){return Ie(t,e)}function Qs(e){return(Math.exp(e)-Math.exp(-e))/2}function Zs(e){return(Math.exp(e)+Math.exp(-e))/2}function Ks(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function Js(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function js(e){return Math.log(e+Math.sqrt(e*e-1))}function eo(e){return Math.log((1+e)/(1-e))/2}function Tn(e){return Math.log(e)*Math.LOG10E}function to(e){return-e}function no(e){return!e}function ro(e){return e<0?Math.ceil(e):Math.floor(e)}function io(e){return Math.random()*(e||1)}function Sn(e){return on(e+1)}function ao(e){return isFinite(e)&&e===Math.round(e)}var so=4.7421875,Mt=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function on(e){var t,n;if(ao(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var r=e-2,i=e-1;r>1;)i*=r,r--;return i===0&&(i=1),i}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*on(1-e));if(e>=171.35)return 1/0;if(e>85){var a=e*e,s=a*e,l=s*e,u=l*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*a)-139/(51840*s)-571/(2488320*l)+163879/(209018880*u)+5246819/(75246796800*u*e))}--e,n=Mt[0];for(var c=1;c<Mt.length;++c)n+=Mt[c]/(e+c);return t=e+so+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*n}function oo(e){return Array.isArray(e)?e.length:String(e).length}function An(){for(var e=0,t=0,n=0;n<arguments.length;n++){var r=Math.abs(arguments[n]),i;t<r?(i=t/r,e=e*i*i+1,t=r):r>0?(i=r/t,e+=i*i):e+=r}return t===1/0?1/0:t*Math.sqrt(e)}function Fn(e,t,n){return e?t:n}function lo(e,t){return typeof t>"u"||+t==0?Math.round(e):(e=+e,t=-+t,isNaN(e)||!(typeof t=="number"&&t%1===0)?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t))))}function ho(e,t,n){return n&&(n[e]=t),t}function uo(e,t){return e[t|0]}function co(e){return arguments.length===1&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function fo(e){return arguments.length===1&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function po(e,t){if(typeof e!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map(function(n,r){return e(n,r)})}function vo(e,t,n){if(typeof e!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(n))throw new Error("Second argument to fold is not an array");return n.reduce(function(r,i,a){return e(r,i,a)},t)}function go(e,t){if(typeof e!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter(function(n,r){return e(n,r)})}function mo(e,t){if(!(Array.isArray(t)||typeof t=="string"))throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function xo(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function yo(e){return(e>0)-(e<0)||+e}var On=1/3;function wo(e){return e<0?-Math.pow(-e,On):Math.pow(e,On)}function bo(e){return Math.exp(e)-1}function _o(e){return Math.log(1+e)}function Eo(e){return Math.log(e)/Math.LN2}function pe(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||Qs,cosh:Math.cosh||Zs,tanh:Math.tanh||Ks,asinh:Math.asinh||Js,acosh:Math.acosh||js,atanh:Math.atanh||eo,sqrt:Math.sqrt,cbrt:Math.cbrt||wo,log:Math.log,log2:Math.log2||Eo,ln:Math.log,lg:Math.log10||Tn,log10:Math.log10||Tn,expm1:Math.expm1||bo,log1p:Math.log1p||_o,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||ro,"-":to,"+":Number,exp:Math.exp,not:no,length:oo,"!":Sn,sign:Math.sign||yo},this.binaryOps={"+":Rs,"-":zs,"*":Bs,"/":Ls,"%":Ds,"^":Math.pow,"||":$s,"==":Ns,"!=":Us,">":qs,"<":Gs,">=":Ws,"<=":Xs,and:Hs,or:Ys,in:Vs,"=":ho,"[":uo},this.ternaryOps={"?":Fn},this.functions={random:io,fac:Sn,min:fo,max:co,hypot:Math.hypot||An,pyt:Math.hypot||An,pow:Math.pow,atan2:Math.atan2,if:Fn,gamma:on,roundTo:lo,map:po,fold:vo,filter:go,indexOf:mo,join:xo},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}pe.prototype.parse=function(e){var t=[],n=new $(this,new U(this,e),{allowMemberAccess:this.options.allowMemberAccess});return n.parseExpression(t),n.expect(Ve,"EOF"),new ne(t,this)};pe.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var Vn=new pe;pe.parse=function(e){return Vn.parse(e)};pe.evaluate=function(e,t){return Vn.parse(e).evaluate(t)};var In={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function Co(e){return In.hasOwnProperty(e)?In[e]:e}pe.prototype.isOperatorEnabled=function(e){var t=Co(e),n=this.options.operators||{};return!(t in n)||!!n[t]};var ke={},Qn={},ce={};Object.defineProperty(ce,"__esModule",{value:!0});ce.loop=ce.conditional=ce.parse=void 0;var Mo=function e(t,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:r;if(Array.isArray(n))n.forEach(function(s){return e(t,s,r,i)});else if(typeof n=="function")n(t,r,i,e);else{var a=Object.keys(n)[0];Array.isArray(n[a])?(i[a]={},e(t,n[a],r,i[a])):i[a]=n[a](t,r,i,e)}return r};ce.parse=Mo;var ko=function(t,n){return function(r,i,a,s){n(r,i,a)&&s(r,t,i,a)}};ce.conditional=ko;var Po=function(t,n){return function(r,i,a,s){for(var l=[],u=r.pos;n(r,i,a);){var c={};if(s(r,t,i,c),r.pos===u)break;u=r.pos,l.push(c)}return l}};ce.loop=Po;var q={};Object.defineProperty(q,"__esModule",{value:!0});q.readBits=q.readArray=q.readUnsigned=q.readString=q.peekBytes=q.readBytes=q.peekByte=q.readByte=q.buildStream=void 0;var To=function(t){return{data:t,pos:0}};q.buildStream=To;var Zn=function(){return function(t){return t.data[t.pos++]}};q.readByte=Zn;var So=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(n){return n.data[n.pos+t]}};q.peekByte=So;var gt=function(t){return function(n){return n.data.subarray(n.pos,n.pos+=t)}};q.readBytes=gt;var Ao=function(t){return function(n){return n.data.subarray(n.pos,n.pos+t)}};q.peekBytes=Ao;var Fo=function(t){return function(n){return Array.from(gt(t)(n)).map(function(r){return String.fromCharCode(r)}).join("")}};q.readString=Fo;var Oo=function(t){return function(n){var r=gt(2)(n);return t?(r[1]<<8)+r[0]:(r[0]<<8)+r[1]}};q.readUnsigned=Oo;var Io=function(t,n){return function(r,i,a){for(var s=typeof n=="function"?n(r,i,a):n,l=gt(t),u=new Array(s),c=0;c<s;c++)u[c]=l(r);return u}};q.readArray=Io;var Ro=function(t,n,r){for(var i=0,a=0;a<r;a++)i+=t[n+a]&&Math.pow(2,r-a-1);return i},zo=function(t){return function(n){for(var r=Zn()(n),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(r&1<<a);return Object.keys(t).reduce(function(s,l){var u=t[l];return u.length?s[l]=Ro(i,u.index,u.length):s[l]=i[u.index],s},{})}};q.readBits=zo;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=ce,n=q,r={blocks:function(y){for(var g=0,w=[],P=y.data.length,C=0,m=(0,n.readByte)()(y);m!==g&&m;m=(0,n.readByte)()(y)){if(y.pos+m>=P){var h=P-y.pos;w.push((0,n.readBytes)(h)(y)),C+=h;break}w.push((0,n.readBytes)(m)(y)),C+=m}for(var v=new Uint8Array(C),f=0,E=0;E<w.length;E++)v.set(w[E],f),f+=w[E].length;return v}},i=(0,t.conditional)({gce:[{codes:(0,n.readBytes)(2)},{byteSize:(0,n.readByte)()},{extras:(0,n.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,n.readUnsigned)(!0)},{transparentColorIndex:(0,n.readByte)()},{terminator:(0,n.readByte)()}]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===249}),a=(0,t.conditional)({image:[{code:(0,n.readByte)()},{descriptor:[{left:(0,n.readUnsigned)(!0)},{top:(0,n.readUnsigned)(!0)},{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{lct:(0,n.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,n.readArray)(3,function(x,y,g){return Math.pow(2,g.descriptor.lct.size+1)})},function(x,y,g){return g.descriptor.lct.exists}),{data:[{minCodeSize:(0,n.readByte)()},r]}]},function(x){return(0,n.peekByte)()(x)===44}),s=(0,t.conditional)({text:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{preData:function(y,g,w){return(0,n.readBytes)(w.text.blockSize)(y)}},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===1}),l=(0,t.conditional)({application:[{codes:(0,n.readBytes)(2)},{blockSize:(0,n.readByte)()},{id:function(y,g,w){return(0,n.readString)(w.blockSize)(y)}},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===255}),u=(0,t.conditional)({comment:[{codes:(0,n.readBytes)(2)},r]},function(x){var y=(0,n.peekBytes)(2)(x);return y[0]===33&&y[1]===254}),c=[{header:[{signature:(0,n.readString)(3)},{version:(0,n.readString)(3)}]},{lsd:[{width:(0,n.readUnsigned)(!0)},{height:(0,n.readUnsigned)(!0)},{gct:(0,n.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,n.readByte)()},{pixelAspectRatio:(0,n.readByte)()}]},(0,t.conditional)({gct:(0,n.readArray)(3,function(x,y){return Math.pow(2,y.lsd.gct.size+1)})},function(x,y){return y.lsd.gct.exists}),{frames:(0,t.loop)([i,l,u,a,s],function(x){var y=(0,n.peekByte)()(x);return y===33||y===44})}],b=c;e.default=b})(Qn);var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.deinterlace=void 0;var Bo=function(t,n){for(var r=new Array(t.length),i=t.length/n,a=function(y,g){var w=t.slice(g*n,(g+1)*n);r.splice.apply(r,[y*n,n].concat(w))},s=[0,4,2,1],l=[8,8,4,2],u=0,c=0;c<4;c++)for(var b=s[c];b<i;b+=l[c])a(b,u),u++;return r};mt.deinterlace=Bo;var xt={};Object.defineProperty(xt,"__esModule",{value:!0});xt.lzw=void 0;var Lo=function(t,n,r){var i=4096,a=-1,s=r,l,u,c,b,x,y,g,o,w,P,E,C,d,p,T,M,m=new Array(r),h=new Array(i),v=new Array(i),f=new Array(i+1);for(C=t,u=1<<C,x=u+1,l=u+2,g=a,b=C+1,c=(1<<b)-1,w=0;w<u;w++)h[w]=0,v[w]=w;var E,o,d,p,M,T;for(E=o=d=p=M=T=0,P=0;P<s;){if(p===0){if(o<b){E+=n[T]<<o,o+=8,T++;continue}if(w=E&c,E>>=b,o-=b,w>l||w==x)break;if(w==u){b=C+1,c=(1<<b)-1,l=u+2,g=a;continue}if(g==a){f[p++]=v[w],g=w,d=w;continue}for(y=w,w==l&&(f[p++]=d,w=g);w>u;)f[p++]=v[w],w=h[w];d=v[w]&255,f[p++]=d,l<i&&(h[l]=g,v[l]=d,l++,!(l&c)&&l<i&&(b++,c+=l)),g=y}p--,m[M++]=f[p],P++}for(P=M;P<s;P++)m[P]=0;return m};xt.lzw=Lo;Object.defineProperty(ke,"__esModule",{value:!0});var Kn=ke.decompressFrames=ke.decompressFrame=Jn=ke.parseGIF=void 0,Do=Go(Qn),$o=ce,No=q,Uo=mt,qo=xt;function Go(e){return e&&e.__esModule?e:{default:e}}var Wo=function(t){var n=new Uint8Array(t);return(0,$o.parse)((0,No.buildStream)(n),Do.default)},Jn=ke.parseGIF=Wo,Xo=function(t){for(var n=t.pixels.length,r=new Uint8ClampedArray(n*4),i=0;i<n;i++){var a=i*4,s=t.pixels[i],l=t.colorTable[s]||[0,0,0];r[a]=l[0],r[a+1]=l[1],r[a+2]=l[2],r[a+3]=s!==t.transparentIndex?255:0}return r},jn=function(t,n,r){if(!t.image){console.warn("gif frame does not have associated image.");return}var i=t.image,a=i.descriptor.width*i.descriptor.height,s=(0,qo.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,Uo.deinterlace)(s,i.descriptor.width));var l={pixels:s,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?l.colorTable=i.lct:l.colorTable=n,t.gce&&(l.delay=(t.gce.delay||10)*10,l.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(l.transparentIndex=t.gce.transparentColorIndex)),r&&(l.patch=Xo(l)),l};ke.decompressFrame=jn;var Ho=function(t,n){return t.frames.filter(function(r){return r.image}).map(function(r){return jn(r,t.gct,n)})};Kn=ke.decompressFrames=Ho;function Yo(e){const t=Jn(e),n=Kn(t,!0),r=[];for(let i of n){const{width:a,height:s,left:l,top:u}=i.dims,c=document.createElement("canvas"),b=c.getContext("2d");c.width=a,c.height=s,b.putImageData(new ImageData(i.patch,a,s),l,u),r.push(c)}return r}async function Vo(e){const t=new ImageDecoder({data:e,type:"image/gif"});await t.tracks.ready,await t.completed;const n=t.tracks.selectedTrack.frameCount,r=[];for(let i=0;i<n;i++){const a=(await t.decode({frameIndex:i})).image;a.width=a.codedWidth,a.height=a.codedHeight,r.push(St(a)),a.close()}return r}async function Qo(e){const t=await e.arrayBuffer();return window.ImageDecoder?Vo(t):Yo(t)}const Zo={frameCount:0,startTime:0};class Ko{constructor(t,n=1){_(this,"blob");_(this,"video");_(this,"length");_(this,"frames");_(this,"initPromise");this.blob=t,this.length=n,this.initPromise=this.init()}setFrameCount(t){return this.length=t,this.initPromise=this.init(),this}async init(){this.frames=[];const t=document.createElement("video");t.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(i=>t.addEventListener("loadeddata",i));const{startTime:n}=Zo,r=(this.video.duration-n)/this.length;for(let i=0;i<this.length;i++)this.video.currentTime=i*r+n,await new Promise(a=>this.video.oncanplay=a),this.frames[i]=St(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function Jo(e,t){if(t=t,t<0)throw new Error(`video frame count ${t} must >1`);return new Ko(e,t).getFrames()}var er=(e=>(e.NONE="NONE",e.PIXEL="PIXEL",e.PERCENT="PERCENT",e))(er||{});const jo={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,avatarOnTop:!0,antialias:!0,resampling:!1,angle:0,opacity:1};function el(e){if(e.compiled)return e;const t={...jo,...e},n=t.pos;let r;switch(t.posType){case"ZOOM":r=typeof n[0]!="object"?[Fe(n,4)]:n.map(i=>Fe(i,4)),t.pos=r.map(i=>i.map(a=>typeof a=="number"?a:pe.parse(a)));break;case"DEFORM":try{r=n.map(i=>Fe(i,5).map(a=>Fe(a,2)))}catch{r=[Fe(n,5).map(a=>Fe(a,2))]}t.pos=r.map(i=>i.map(a=>a.map(s=>typeof s=="number"?s:pe.parse(s))));break}return t.compiled=!0,t}class tl extends xr{constructor(n,r,i){super();_(this,"type");_(this,"template");_(this,"originBlob");_(this,"frames");_(this,"pos");_(this,"initPromise");_(this,"deformer");this.type=n.type;const a=i&&i[this.type.toString().toLowerCase()];if(this.template=el(a?{...n,...a}:n),this.originBlob=r[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.setCrop(),await this.setStyle(),await this.setRound(),await this.setPos()}async loadFile(){const n=this.originBlob;if(n.type.startsWith("video/"))this.frames=await Jo(n,this.template.pos.length);else if(!n.type.startsWith("image"))throw new Error("不支持的格式: "+n.type);n.type==="image/gif"?this.frames=await Qo(n):this.frames=[await at(n)]}setCrop(){const n=this.template.cropType;n!=="NONE"&&(this.frames=this.frames.map(r=>yr(r,this.template.crop,n==="PERCENT")))}setStyle(){for(const n of this.template.style)switch(n){case"FLIP":this.frames=this.frames.map(wr);break;case"MIRROR":this.frames=this.frames.map(Ms);break;case"GRAY":this.frames=this.frames.map(br);break;case"BINARIZATION":this.frames=this.frames.map(ks);break;default:throw new Error("unknown style "+n)}}setRound(){this.template.round&&(this.frames=this.frames.map(Ps))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(n=>n.map(this.evalExpression));break;case"DEFORM":this.deformer=new Cs,this.pos=this.template.pos.map(n=>n.map(r=>r.map(this.evalExpression)));break}}evalExpression(n){return typeof n=="number"?n:n.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(n){return n<this.frames.length?this.frames[n]:this.frames.at(-1)}getPos(n){return n<this.pos.length?this.pos[n]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(n,r=0){await this.initPromise;let i=this.getFrame(r);const a=this.getPos(r);let{angle:s,opacity:l,rotate:u}=this.template;switch(n.globalAlpha=l,u&&(s+=360/this.pos.length*r),this.template.posType){case"ZOOM":switch(s&&(i=Ts(i,s,!this.template.round)),this.template.fit){case"FILL":n.drawImage(i,...a);break;default:const[c,b,x,y]=a,g=Math[this.template.fit==="CONTAIN"?"min":"max"](x/i.width,y/i.height),w=i.width*g,P=i.height*g,C=c+(x-w)/2,m=b+(y-P)/2;n.drawImage(i,C,m,w,P);break}break;case"DEFORM":this.deformer.draw(n,i,a);break}n.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const n=this.frames[0];return{width:n.width,height:n.height}}}class ln{constructor(t){_(this,"arr");_(this,"initPromise");_(this,"topAvatars",[]);_(this,"bottomAvatars",[]);_(this,"sizeMap",Object.create(null));_(this,"maxLength");this.arr=t,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(t,n)=>{t.onTop?this.topAvatars.push(t):this.bottomAvatars.push(t);const r=await t.getSize();this.sizeMap[`avatar${n}Width`]=r.width,this.sizeMap[`avatar${n}Height`]=r.height,this.maxLength=await t.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}static createFrom(t,n,r){return new ln(t.map(i=>new tl(i,n,r)))}}var tr={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(_r,function(){(function(){for(var C=0,m=["ms","moz","webkit","o"],h=0;h<m.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[m[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[m[h]+"CancelAnimationFrame"]||window[m[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(v,f){var E=new Date().getTime(),o=Math.max(0,16-(E-C)),d=window.setTimeout(function(){v(E+o)},o);return C=E+o,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(v){clearTimeout(v)})})(),function(){if(typeof window.CustomEvent=="function")return!1;function C(m,h){h=h||{bubbles:!1,cancelable:!1,detail:void 0};var v=document.createEvent("CustomEvent");return v.initCustomEvent(m,h.bubbles,h.cancelable,h.detail),v}C.prototype=window.Event.prototype,window.CustomEvent=C}(),function(C){try{return new CustomEvent("test"),!1}catch{}function m(h,v){v=v||{bubbles:!1,cancelable:!1};var f=document.createEvent("MouseEvent");return f.initMouseEvent(h,v.bubbles,v.cancelable,C,0,0,0,0,0,!1,!1,!1,!1,0,null),f}m.prototype=Event.prototype,C.MouseEvent=m}(window);var n=function(C,m){if(!(C instanceof m))throw new TypeError("Cannot call a class as a function")},r=function(){function C(m,h){for(var v=0;v<h.length;v++){var f=h[v];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(m,f.key,f)}}return function(m,h,v){return h&&C(m.prototype,h),v&&C(m,v),m}}(),i=function C(m,h,v){m===null&&(m=Function.prototype);var f=Object.getOwnPropertyDescriptor(m,h);if(f===void 0){var E=Object.getPrototypeOf(m);return E===null?void 0:C(E,h,v)}else{if("value"in f)return f.value;var o=f.get;return o===void 0?void 0:o.call(v)}},a=function(C,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);C.prototype=Object.create(m&&m.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(C,m):C.__proto__=m)},s=function(C,m){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:C},l=function(){function C(m,h){var v=[],f=!0,E=!1,o=void 0;try{for(var d=m[Symbol.iterator](),p;!(f=(p=d.next()).done)&&(v.push(p.value),!(h&&v.length===h));f=!0);}catch(M){E=!0,o=M}finally{try{!f&&d.return&&d.return()}finally{if(E)throw o}}return v}return function(m,h){if(Array.isArray(m))return m;if(Symbol.iterator in Object(m))return C(m,h);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function C(m,h,v,f){n(this,C);var E=this;this.position=m,this.constraints=h,this.cursor=v,this.eventBus=f,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=v,this.el.addEventListener("mousedown",o);function o(M){M.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",p),E.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:E}}))}function d(M){M.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",p),E.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:E}}))}function p(M){M.stopPropagation(),E.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:M.clientX,mouseY:M.clientY}}))}},c=function(){function C(m,h,v,f){n(this,C),this.x1=m,this.y1=h,this.x2=v,this.y2=f}return r(C,[{key:"set",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return this.x1=h??this.x1,this.y1=v??this.y1,this.x2=f??this.x2,this.y2=E??this.y2,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],E=this.x1+this.width()*f[0],o=this.y1+this.height()*f[1];return this.x1=E-h*f[0],this.y1=o-v*f[1],this.x2=this.x1+h,this.y2=this.y1+v,this}},{key:"scale",value:function(h){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],f=this.width()*h,E=this.height()*h;return this.resize(f,E,v),this}},{key:"move",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=this.width(),E=this.height();return h=h===null?this.x1:h,v=v===null?this.y1:v,this.x1=h,this.y1=v,this.x2=h+f,this.y2=v+E,this}},{key:"getRelativePoint",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],v=this.width()*h[0],f=this.height()*h[1];return[v,f]}},{key:"getAbsolutePoint",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],v=this.x1+this.width()*h[0],f=this.y1+this.height()*h[1];return[v,f]}},{key:"constrainToRatio",value:function(h){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"height";if(h!==null){switch(this.width(),this.height(),f){case"height":this.resize(this.width(),this.width()*h,v);break;case"width":this.resize(this.height()*1/h,this.height(),v);break;default:this.resize(this.width(),this.width()*h,v)}return this}}},{key:"constrainToBoundary",value:function(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],E=this.getAbsolutePoint(f),o=l(E,2),d=o[0],p=o[1],M=d,T=p,S=h-d,A=v-p,F=-2*f[0]+1,I=-2*f[1]+1,R=null,W=null;switch(F){case-1:R=M;break;case 0:R=Math.min(M,S)*2;break;case 1:R=S;break}switch(I){case-1:W=T;break;case 0:W=Math.min(T,A)*2;break;case 1:W=A;break}if(this.width()>R){var X=R/this.width();this.scale(X,f)}if(this.height()>W){var Y=W/this.height();this.scale(Y,f)}return this}},{key:"constrainToSize",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0,0],d=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null;if(d&&(d>1?(h=v*1/d,E=E*d):d<1&&(v=h*d,f=E*1/d)),h&&this.width()>h){var p=h,M=d===null?this.height():v;this.resize(p,M,o)}if(v&&this.height()>v){var T=d===null?this.width():h,S=v;this.resize(T,S,o)}if(f&&this.width()<f){var A=f,F=d===null?this.height():E;this.resize(A,F,o)}if(E&&this.height()<E){var I=d===null?this.width():f,R=E;this.resize(I,R,o)}return this}}]),C}();function b(C){C.addEventListener("touchstart",x),C.addEventListener("touchend",x),C.addEventListener("touchmove",x)}function x(C){C.preventDefault();var m=C.changedTouches[0],h={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};m.target.dispatchEvent(new MouseEvent(h[C.type],{bubbles:!0,cancelable:!0,view:window,clientX:m.clientX,clientY:m.clientY,screenX:m.screenX,screenY:m.screenY}))}var y=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],g=function(){function C(m,h){var v=this,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(n(this,C),this.options=C.parseOptions(h||{}),!m.nodeName&&(m=document.querySelector(m),m==null))throw"Unable to find element.";if(!m.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:m.parentNode,element:m},f||(m.width===0||m.height===0?m.onload=function(){v.initialize(m)}:this.initialize(m))}return r(C,[{key:"initialize",value:function(h){this.createDOM(h),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,this.options.onInitialize!==null&&this.options.onInitialize(this)}},{key:"createDOM",value:function(h){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,b(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",h.getAttribute("src")),this.imageEl.setAttribute("alt",h.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var v=document.createElement("div");v.className="croppr-handleContainer",this.handles=[];for(var f=0;f<y.length;f++){var E=new u(y[f].position,y[f].constraints,y[f].cursor,this.eventBus);this.handles.push(E),v.appendChild(E.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(v),this.containerEl.appendChild(this.cropperEl),h.parentElement.replaceChild(this.containerEl,h)}},{key:"setImage",value:function(h){var v=this;return this.imageEl.onload=function(){v.box=v.initializeBox(v.options),v.redraw()},this.imageEl.src=h,this.imageClippedEl.src=h,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(h){var v=h.startSize.width,f=h.startSize.height,E=new c(0,0,v,f);E.constrainToRatio(h.aspectRatio,[.5,.5]);var o=h.minSize,d=h.maxSize;E.constrainToSize(d.width,d.height,o.width,o.height,[.5,.5],h.aspectRatio);var p=this.cropperEl.offsetWidth,M=this.cropperEl.offsetHeight;E.constrainToBoundary(p,M,[.5,.5]);var T=this.cropperEl.offsetWidth/2-E.width()/2,S=this.cropperEl.offsetHeight/2-E.height()/2;return E.move(T,S),E}},{key:"redraw",value:function(){var h=this,v=Math.round(this.box.width()),f=Math.round(this.box.height()),E=Math.round(this.box.x1),o=Math.round(this.box.y1),d=Math.round(this.box.x2),p=Math.round(this.box.y2);window.requestAnimationFrame(function(){h.regionEl.style.transform="translate("+E+"px, "+o+"px)",h.regionEl.style.width=v+"px",h.regionEl.style.height=f+"px",h.imageClippedEl.style.clip="rect("+o+"px, "+d+"px, "+p+"px, "+E+"px)";for(var M=h.box.getAbsolutePoint([.5,.5]),T=M[0]-h.cropperEl.offsetWidth/2>>31,S=M[1]-h.cropperEl.offsetHeight/2>>31,A=(T^S)+S+S+4,F=-2*A+8,I=0;I<h.handles.length;I++){var R=h.handles[I],W=R.el.offsetWidth,X=R.el.offsetHeight,Y=E+v*R.position[0]-W/2,ae=o+f*R.position[1]-X/2;R.el.style.transform="translate("+Math.round(Y)+"px, "+Math.round(ae)+"px)",R.el.style.zIndex=F==I?5:4}})}},{key:"attachHandlerEvents",value:function(){var h=this.eventBus;h.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),h.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),h.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var h=this.eventBus;this.regionEl.addEventListener("mousedown",v),h.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),h.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),h.addEventListener("regionend",this.onRegionMoveEnd.bind(this));function v(o){o.stopPropagation(),document.addEventListener("mouseup",E),document.addEventListener("mousemove",f),h.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}function f(o){o.stopPropagation(),h.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}function E(o){o.stopPropagation(),document.removeEventListener("mouseup",E),document.removeEventListener("mousemove",f),h.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:o.clientX,mouseY:o.clientY}}))}}},{key:"attachOverlayEvents",value:function(){var h=4,v=this,f=null;this.overlayEl.addEventListener("mousedown",E);function E(p){p.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",o);var M=v.cropperEl.getBoundingClientRect(),T=p.clientX-M.left,S=p.clientY-M.top;f=v.box,v.box=new c(T,S,T+1,S+1),v.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:v.handles[h]}}))}function o(p){p.stopPropagation(),v.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:p.clientX,mouseY:p.clientY}}))}function d(p){if(p.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",o),v.box.width()===1&&v.box.height()===1){v.box=f;return}v.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:p.clientX,mouseY:p.clientY}}))}}},{key:"onHandleMoveStart",value:function(h){var v=h.detail.handle,f=[1-v.position[0],1-v.position[1]],E=this.box.getAbsolutePoint(f),o=l(E,2),d=o[0],p=o[1];this.activeHandle={handle:v,originPoint:f,originX:d,originY:p},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.cropperEl.getBoundingClientRect();f=f-o.left,E=E-o.top,f<0?f=0:f>o.width&&(f=o.width),E<0?E=0:E>o.height&&(E=o.height);var d=this.activeHandle.originPoint.slice(),p=this.activeHandle.originX,M=this.activeHandle.originY,T=this.activeHandle.handle,S=T.constraints[0]===1,A=T.constraints[1]===1,F=T.constraints[2]===1,I=T.constraints[3]===1,R=(I||A)&&(S||F),W=I||A?p:this.box.x1,X=I||A?p:this.box.x2,Y=S||F?M:this.box.y1,ae=S||F?M:this.box.y2;W=I?f:W,X=A?f:X,Y=S?E:Y,ae=F?E:ae;var Ye=!1,Ae=!1;if((I||A)&&(Ye=I?f>p:f<p),(S||F)&&(Ae=S?E>M:E<M),Ye){var K=W;W=X,X=K,d[0]=1-d[0]}if(Ae){var lr=Y;Y=ae,ae=lr,d[1]=1-d[1]}var ge=new c(W,Y,X,ae);if(this.options.aspectRatio){var yt=this.options.aspectRatio,wt=!1;R?wt=E>ge.y1+yt*ge.width()||E<ge.y2-yt*ge.width():(S||F)&&(wt=!0);var hr=wt?"width":"height";ge.constrainToRatio(yt,d,hr)}var cn=this.options.minSize,dn=this.options.maxSize;ge.constrainToSize(dn.width,dn.height,cn.width,cn.height,d,this.options.aspectRatio);var ur=this.cropperEl.offsetWidth,cr=this.cropperEl.offsetHeight;ge.constrainToBoundary(ur,cr,d),this.box=ge,this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(h){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.cropperEl.getBoundingClientRect();f=f-o.left,E=E-o.top,this.currentMove={offsetX:f-this.box.x1,offsetY:E-this.box.y1},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(h){var v=h.detail,f=v.mouseX,E=v.mouseY,o=this.currentMove,d=o.offsetX,p=o.offsetY,M=this.cropperEl.getBoundingClientRect();f=f-M.left,E=E-M.top,this.box.move(f-d,E-p),this.box.x1<0&&this.box.move(0,null),this.box.x2>M.width&&this.box.move(M.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>M.height&&this.box.move(null,M.height-this.box.height()),this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(h){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(h===null&&(h=this.options.returnMode),h=="real"){var v=this.imageEl.naturalWidth,f=this.imageEl.naturalHeight,E=this.imageEl.getBoundingClientRect(),o=E.width,d=E.height,p=v/o,M=f/d;return{x:Math.round(this.box.x1*p),y:Math.round(this.box.y1*M),width:Math.round(this.box.width()*p),height:Math.round(this.box.height()*M)}}else if(h=="ratio"){var T=this.imageEl.getBoundingClientRect(),S=T.width,A=T.height;return{x:w(this.box.x1/S,3),y:w(this.box.y1/A,3),width:w(this.box.width()/S,3),height:w(this.box.height()/A,3)}}else if(h=="raw")return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(h){var v={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},f=null;h.aspectRatio!==void 0&&(typeof h.aspectRatio=="number"?f=h.aspectRatio:h.aspectRatio instanceof Array&&(f=h.aspectRatio[1]/h.aspectRatio[0]));var E=null;h.maxSize!==void 0&&h.maxSize!==null&&(E={width:h.maxSize[0]||null,height:h.maxSize[1]||null,unit:h.maxSize[2]||"px"});var o=null;h.minSize!==void 0&&h.minSize!==null&&(o={width:h.minSize[0]||null,height:h.minSize[1]||null,unit:h.minSize[2]||"px"});var d=null;h.startSize!==void 0&&h.startSize!==null&&(d={width:h.startSize[0]||null,height:h.startSize[1]||null,unit:h.startSize[2]||"%"});var p=null;typeof h.onInitialize=="function"&&(p=h.onInitialize);var M=null;typeof h.onCropStart=="function"&&(M=h.onCropStart);var T=null;typeof h.onCropEnd=="function"&&(T=h.onCropEnd);var S=null;typeof h.onUpdate=="function"&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),S=h.onUpdate),typeof h.onCropMove=="function"&&(S=h.onCropMove);var A=null;if(h.returnMode!==void 0){var F=h.returnMode.toLowerCase();if(["real","ratio","raw"].indexOf(F)===-1)throw"Invalid return mode.";A=F}var I=function(X){for(var Y=X.offsetWidth,ae=X.offsetHeight,Ye=["maxSize","minSize","startSize"],Ae=0;Ae<Ye.length;Ae++){var K=Ye[Ae];this[K]!==null&&(this[K].unit=="%"&&(this[K].width!==null&&(this[K].width=this[K].width/100*Y),this[K].height!==null&&(this[K].height=this[K].height/100*ae)),delete this[K].unit)}},R=function(X,Y){return X!==null?X:Y};return{aspectRatio:R(f,v.aspectRatio),maxSize:R(E,v.maxSize),minSize:R(o,v.minSize),startSize:R(d,v.startSize),returnMode:R(A,v.returnMode),onInitialize:R(p,v.onInitialize),onCropStart:R(M,v.onCropStart),onCropMove:R(S,v.onCropMove),onCropEnd:R(T,v.onCropEnd),convertToPixels:I}}}]),C}();function w(C,m){return+(Math.round(C+"e"+m)+"e-"+m)}var P=function(C){a(m,C);function m(h,v){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return n(this,m),s(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,h,v,f))}return r(m,[{key:"getValue",value:function(v){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"getValue",this).call(this,v)}},{key:"setImage",value:function(v){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"setImage",this).call(this,v)}},{key:"destroy",value:function(){return i(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(v,f){return this.box.move(v,f),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(v,f){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[.5,.5];return this.box.resize(v,f,E),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(v){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.5,.5];return this.box.scale(v,f),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}}]),m}(g);return P})})(tr);var nr=tr.exports;const nl=Nn(nr),rl=pr({__proto__:null,default:nl},[nr]);var re;class il{constructor(t){z(this,re,document.createElement("div"));_(this,"croppr");_(this,"mask",new Dn);_(this,"callback");_(this,"imageFile");_(this,"initPromise");k(this,re).classList.add("avatar-cropper"),this.imageFile=t,this.mask.onclick=()=>this.cancel(),this.initPromise=this.init()}async init(){const t=await at(this.imageFile);k(this,re).appendChild(t),document.body.append(k(this,re)),this.croppr=new rl(t,{startSize:[90,60],minSize:[1,1,"px"],returnMode:"real"});const n=document.createElement("div");n.className="button-group";const r=document.createElement("div");r.innerText="Cancel",r.addEventListener("click",()=>this.cancel());const i=document.createElement("div");i.innerText="Save",i.addEventListener("click",()=>this.save()),n.append(r,i),k(this,re).appendChild(n)}cancel(){this.callback(null),this.hide()}save(){const{x:t,y:n,width:r,height:i}=this.croppr.getValue("real");this.callback([t,n,t+r,n+i]),this.hide()}hide(){k(this,re).classList.add("hide"),this.mask.hide()}async show(){return await this.initPromise,this.mask.show(),k(this,re).classList.remove("hide"),new Promise(t=>this.callback=t)}async destroy(){await this.initPromise,k(this,re).remove(),this.croppr.destroy(),this.mask.destroy()}}re=new WeakMap;const kt=e=>{e.stopPropagation(),e.preventDefault()};var V,me,xe,Je,lt;class al{constructor(t){_(this,"type");z(this,V,document.createElement("label"));z(this,me,void 0);z(this,xe,void 0);z(this,Je,void 0);z(this,lt,new Promise(t=>G(this,Je,t)));_(this,"cropPos");this.type=t,k(this,V).title="右键裁切",k(this,V).setAttribute("type",t),k(this,V).addEventListener("dragenter",kt,!1),k(this,V).addEventListener("dragover",kt,!1),k(this,V).addEventListener("drop",r=>{kt(r),this.setFiles(r.dataTransfer.files)},!1),k(this,V).addEventListener("contextmenu",async r=>{if(r.preventDefault(),!k(this,me))return;const i=this.cropPos,a=new il(k(this,me));this.cropPos=await a.show(),await a.destroy(),this.cropPos!==i&&k(this,xe)&&k(this,xe).call(this,this)});const n=document.createElement("input");n.type="file",n.accept="image/*",n.addEventListener("change",()=>this.setFiles(n.files)),k(this,V).appendChild(n)}render(){return k(this,V)}set onchange(t){G(this,xe,t)}get file(){return k(this,me)}async waitFile(){return await k(this,lt),k(this,me)}setFiles(t){let n=t.item(0);if(n){if(!n.type.startsWith("image"))throw new Error("仅支持图片格式");k(this,V).style.backgroundImage=`url(${URL.createObjectURL(n)})`,k(this,V).style.backgroundSize="cover",G(this,me,n),k(this,Je).call(this),this.cropPos=void 0,k(this,xe)&&k(this,xe).call(this,this)}}}V=new WeakMap,me=new WeakMap,xe=new WeakMap,Je=new WeakMap,lt=new WeakMap;const Rn=["FROM","TO","BOT","GROUP"];var ie,je,te;class rr{constructor(){z(this,ie,void 0);z(this,je,new Map(Rn.map(t=>[t,new al(t)])));z(this,te,void 0);G(this,ie,document.createElement("div")),k(this,ie).className="avatar-uploader",k(this,ie).innerHTML="No Avatar"}set types(t){if(!t||t.length===0){k(this,ie).innerHTML="No Avatar";return}k(this,ie).innerHTML="",G(this,te,t.map(n=>k(this,je).get(n))),k(this,ie).append(...k(this,te).map(n=>n.render()))}render(){const t=document.createElement("div");return t.append($e("Upload Avatar"),k(this,ie)),t}get ready(){var t;return(t=k(this,te))!=null&&t.length?k(this,te).some(n=>n.file):!0}set onchange(t){for(const n of k(this,je).values())n.onchange=()=>this.ready&&t(this)}get data(){var n;const t={};if(!((n=k(this,te))!=null&&n.length))return t;for(const r of k(this,te))t[r.type.toLowerCase()]=r.file;return t}get extraTemplate(){var r;const t={};let n=!1;if(!((r=k(this,te))!=null&&r.length))return t;for(const i of k(this,te))n=n||!!i.cropPos,t[i.type.toLowerCase()]={cropType:er.PIXEL,crop:i.cropPos};return n?t:void 0}}ie=new WeakMap,je=new WeakMap,te=new WeakMap,_(rr,"types",Rn);const sl=6;class hn{constructor(t){_(this,"hasTemplate",!1);_(this,"width");_(this,"height");_(this,"color");_(this,"frames");_(this,"loadingPromise");t&&([this.width,this.height]=t.size.map(n=>typeof n=="number"?n:pe.parse(n)),this.color=$n(this.color),this.hasTemplate=!0)}setUrl(t,n){this.loadingPromise=hn.fetchImages(t,n).then(r=>this.frames=r)}set images(t){this.frames=t}async generate(t){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(n=>{const r=this.getCtx(t);return r.drawImage(n,0,0),r.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(t).canvas];throw new Error("can not load background")}getCtx(t){const n=document.createElement("canvas"),r=a=>typeof a=="number"?a:a.evaluate(t);n.width=r(this.width),n.height=r(this.height);const i=n.getContext("2d");return i.fillStyle=this.color,i.fillRect(0,0,n.width,n.height),i}static async fetchImages(t,n){if(n!==void 0){if(n<=0)return[];const l=[];for(let u=0;u<n;u++)l.push(fetch(`${t}/${u}.png`).then(c=>c.blob()).then(at));return Promise.all(l)}let r=!1,i=new Set;const a=[];let s=0;for(;!r;){i.size>=sl&&await Promise.race(i);const l=s++,c=fetch(`${t}/${l}.png`).then(b=>b.blob()).then(at).then(b=>{a[l]=b}).catch(()=>r=!0).then(()=>i.delete(c));i.add(c)}return await Promise.all(i),a}}const ol=document.createElement("canvas"),j=ol.getContext("2d");j.textBaseline="alphabetic";j.textAlign="left";const zn={text:"default text",color:"#191919",pos:[50,50],size:16,font:"arial",style:"PLAIN",wrap:"NONE",align:"CENTER",position:["LEFT","TOP"],strokeColor:"",strokeSize:0},_e=class{constructor(t=zn){_(this,"template");_(this,"textStyle");_(this,"pixelSize");_(this,"defaultPixelSize");_(this,"width");_(this,"height");_(this,"backgroundSize");_(this,"drawOptions");_(this,"onChangeCallback");_(this,"disabled",!1);this.template={...zn,...t},this.defaultPixelSize=t.size*_e.dpiScale,this.pixelSize=this.defaultPixelSize,this.template.color=$n(this.template.color),this.textStyle=this.template.style==="PLAIN"?"normal":this.template.style.toLowerCase(),this.template.font=this.template.font.replace(" ","-"),this.template.text=this.template.text.replace(_e.TEXT_VAR_REGEX,(n,r)=>r),this.setDrawOptions()}set size(t){this.pixelSize=t*_e.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:t,style:n,wrap:r}=this.template;j.font=`${this.textStyle} ${this.pixelSize}px ${t.replace(" ","-")}`,this.width=0,this.height=0;const i=this.template.text.split(`
`),a=[];let s=0;switch(r){case"NONE":{for(const l of i){const[u,c,b,x]=this.getPosition(j.measureText(l),s++);this.width=Math.max(this.width,b),this.height=x,a.push([l,u,c])}break}case"BREAK":{const l=this.template.pos[2]||_e.DEFAULT_MAX_WIDTH;let u,c;for(let b of i)if(u=j.measureText(b),c=u.width,c>l){let x,y,g;for(;c>l;){for(x=0,y=0,g="";y<l;)x++,g=b.substr(0,x),y=j.measureText(b.substr(0,x)).width;x--,g=g.substr(0,x);const w=x;if(b.substr(x,1)!=" "){for(;b.substr(x,1)!=" "&&x!=0;)x--;x==0&&(x=w),g=b.substr(0,x)}b=b.substr(x);const[P,C,m,h]=this.getPosition(j.measureText(g),s++);this.width=Math.max(this.width,m),this.height=h,c=m,a.push([g,P,C])}}else{const[x,y,g,w]=this.getPosition(u,s++);this.width=Math.max(this.width,g),this.height=w,a.push([b,x,y])}break}case"ZOOM":{const l=this.template.pos[2]||_e.DEFAULT_MAX_WIDTH;j.font=`${this.textStyle} ${this.defaultPixelSize}px ${t}`;let u=Math.max(...i.map(x=>j.measureText(x).width));const b=l/(u||1)*this.defaultPixelSize;this.pixelSize=b,j.font=`${this.textStyle} ${b}px ${t}`;for(const x of i){const[y,g,w,P]=this.getPosition(j.measureText(x),s++);this.width=Math.max(this.width,w),this.height=P,a.push([x,y,g])}break}}return this.drawOptions=a,a}getPosition(t,n){const[r,i]=this.template.pos,a=t.width,s=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,l=s*n,u=s*(n+1);switch(this.template.align){case"LEFT":return[r,i+l,a,u];case"RIGHT":return[r-a,i+l,a,u];case"CENTER":return[r-a/2,i+l,a,u]}}get hidden(){return this.disabled}set hidden(t){this.disabled=t,this.onChangeCallback&&this.onChangeCallback(this)}get size(){return this.template.size}draw(t){if(this.disabled)return;let{color:n,align:r,font:i,strokeColor:a,strokeSize:s}=this.template;t.font=`${this.textStyle} ${this.pixelSize}px ${i}`,t.fillStyle=n,t.textBaseline=r==="CENTER"?"middle":"alphabetic";for(let l of this.drawOptions)t.fillText(...l);if(a&&s){t.strokeStyle=a,t.lineWidth=s;for(let l of this.drawOptions)t.strokeText(...l)}}get settingObject(){const t=this;return new Proxy({get x(){return t.template.pos[0]},set x(n){t.template.pos[0]=n},get y(){return t.template.pos[1]},set y(n){t.template.pos[1]=n},text:t.template.text,color:t.template.color,get size(){return t.template.wrap==="ZOOM"?void 0:t.pixelSize},set size(n){t.pixelSize=n},get hidden(){return t.disabled},set hidden(n){t.hidden=n},_delete:()=>t.hidden=!0},{set:(n,r,i)=>(n[r]=i,t.template[r]=i,t.disabled||(this.setDrawOptions(),t.onChangeCallback&&t.onChangeCallback(this)),!0)})}get settingAttributes(){const t={type:"range",min:0,step:1};return{x:{...t,max:this.backgroundSize?this.backgroundSize[0]:1e3},y:{...t,max:this.backgroundSize?this.backgroundSize[1]:1e3},size:{...t,max:256}}}set onchange(t){this.onChangeCallback=t}};let be=_e;_(be,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),_(be,"DEFAULT_MAX_WIDTH",300),_(be,"dpiScale",(window.devicePixelRatio||1)*96/72);class un{constructor(t){_(this,"arr");_(this,"cacheCtx");_(this,"topAvatars",[]);_(this,"bottomAvatars",[]);_(this,"sizeMap",Object.create(null));_(this,"needUpdate",!1);if(this.arr=t,!(t!=null&&t.length))return;let n=0;for(const r of t)r.onchange=()=>this.needUpdate=!0,this.sizeMap[`text${n}Width`]=r.width,this.sizeMap[`text${n}Height`]=r.height,n++}draw(t){for(const n of this.arr)n.draw(t)}setCacheArea(t,n){for(const i of this.arr)i.backgroundSize=[t,n];const r=document.createElement("canvas");r.width=t,r.height=n,this.cacheCtx=r.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache(),this.needUpdate=!1}getCachedCanvas(){return this.needUpdate&&this.updateCache(),this.cacheCtx.canvas}addTextModel(){const t=new be;return this.arr.push(t),this.needUpdate=!0,t.onchange=()=>this.needUpdate=!0,t.backgroundSize=[this.cacheCtx.canvas.width,this.cacheCtx.canvas.height],t}get texts(){return this.arr}static createFrom(t){return new un(t.map(n=>new be(n)))}}const ll={type:void 0,avatar:[],text:[],background:null,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class hl{constructor(t,n){_(this,"type");_(this,"template");_(this,"initPromise");_(this,"avatarList");_(this,"backgroundModel");_(this,"textModelList");_(this,"backgroundLength");this.template={...ll,...t},this.type=t.type,this.textModelList=un.createFrom(this.template.text),this.backgroundModel=new hn(this.template.background),n&&(this.background=n),this.initPromise=this.init()}set background(t){if(typeof t=="string")this.backgroundModel.setUrl(t,this.backgroundLength);else if(Array.isArray(t))this.backgroundModel.images=t;else throw new Error("unknown background",t)}async init(){}async generate(t,n){const r=ln.createFrom(this.template.avatar,t,n),i=await r.getSizeMap(),a=await this.backgroundModel.generate(i);return new ul(this.template,a,r,this.textModelList)}}class ul{constructor(t,n,r,i){_(this,"template");_(this,"canvas");_(this,"ctx");_(this,"backgrounds");_(this,"avatars");_(this,"texts");_(this,"length");_(this,"intervalId");_(this,"initPromise");_(this,"userDelay");_(this,"i",0);_(this,"framesCache",[]);_(this,"resolveFramesCachedPromise");_(this,"framesCachedPromise",new Promise(t=>this.resolveFramesCachedPromise=t));const a=document.createElement("canvas");this.canvas=a,a.width=n[0].width,a.height=n[0].height,this.ctx=a.getContext("2d"),this.template=t,this.backgrounds=n,this.avatars=r,this.texts=i,this.texts.setCacheArea(a.width,a.height),this.initPromise=this.init()}async init(){const{posLength:t,frameLength:n=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?n:this.backgrounds.length}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=setInterval(async()=>{await this.drawAvatarsCache(this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}playReverse(){this.intervalId=setInterval(async()=>{await this.drawAvatarsCache(this.length-1-this.i++%this.length),this.drawTextsCache()},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(t){if(!t){this.stop();return}this.userDelay=t,t>0?this.stop().then(()=>this.play()):this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(t){return t<this.backgrounds.length?this.backgrounds[t]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}drawTextsCache(){this.ctx.drawImage(this.texts.getCachedCanvas(),0,0)}drawTexts(){this.texts.draw(this.ctx)}async drawAvatarsCache(t){if(this.framesCache[t]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[t],0,0);return}await this.drawAvatars(t),this.framesCache[t]=St(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async drawAvatars(t){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const n of this.avatars.bottomAvatars)await n.draw(this.ctx,t);this.ctx.drawImage(this.getBackground(t),0,0);for(const n of this.avatars.topAvatars)await n.draw(this.ctx,t)}get settingObject(){const t=this;return this.length===1?{}:{set delay(n){t.delay=n},get delay(){return t.delay},play:()=>this.play(),stop:()=>this.stop()}}async destroy(){await this.stop(),this.canvas.remove()}}var Le,ue,Ce,De,Me,ht,ir,ut,ar;class cl{constructor(){z(this,ht);z(this,ut);z(this,Le,document.createElement("div"));z(this,ue,document.createElement("div"));z(this,Ce,document.createElement("canvas"));z(this,De,void 0);z(this,Me,void 0);k(this,ue).className="result-area",k(this,Le).append($e("Result"),k(this,ue)),et(this,ht,ir).call(this),k(this,ue).appendChild(k(this,Ce)),G(this,Me,new Bn(k(this,ue))),k(this,Me).show()}set canvas(t){k(this,ue).innerHTML="",G(this,Ce,t),k(this,ue).appendChild(t),et(this,ut,ar).call(this),k(this,Me).hide()}set setting(t){k(this,De)&&k(this,De).remove(),G(this,De,t),k(this,Le).appendChild(t)}showLoading(){k(this,Me).show()}render(){return k(this,Le)}}Le=new WeakMap,ue=new WeakMap,Ce=new WeakMap,De=new WeakMap,Me=new WeakMap,ht=new WeakSet,ir=function(){k(this,Ce).classList.add("hide")},ut=new WeakSet,ar=function(){k(this,Ce).classList.remove("hide")};class Te{constructor(t,n){_(this,"obj");_(this,"container");_(this,"attrMap");if(this.obj=t,this.container=document.createElement("div"),this.container.classList.add("setting-container"),this.attrMap=n??{},this.obj._delete){const r=this.obj._delete;delete this.obj._delete,this.obj.delete=()=>{typeof r=="function"&&r(),this.container.remove()}}}createInput(t,n){const r=this.attrMap[t]??{},i=document.createElement("div"),a=document.createElement("span");a.textContent=t,i.appendChild(a);let s=typeof n;switch(s){case"object":const l=new Te(n).render();i.appendChild(l);break;case"function":const u=document.createElement("button");u.textContent=t,u.addEventListener("click",async()=>{u.disabled=!0,await n(),u.disabled=!1}),i.appendChild(u);break;default:const c=document.createElement("input");let b=()=>this.obj[t]=c.value;switch(typeof n){case"number":b=()=>this.obj[t]=parseFloat(c.value);break;case"string":s=/^#([A-Fa-f0-9]{6})$/.test(n)?"color":"text";break;case"boolean":s="checkbox",b=()=>this.obj[t]=c.checked;break}c.type=s;for(let[x,y]of Object.entries(r))c[x]=y;c.value=n.toString(),c.addEventListener("input",b),i.appendChild(c);break}return i}render(){for(const[t,n]of Object.entries(this.obj)){if(n==null)continue;const r=this.createInput(t,n);this.container.appendChild(r)}return this.container}}var sr={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,t){(function(n,r){e.exports=r()})(self,function(){return(()=>{var n={"./node_modules/events/events.js":s=>{var l,u=typeof Reflect=="object"?Reflect:null,c=u&&typeof u.apply=="function"?u.apply:function(o,d,p){return Function.prototype.apply.call(o,d,p)};l=u&&typeof u.ownKeys=="function"?u.ownKeys:Object.getOwnPropertySymbols?function(o){return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o))}:function(o){return Object.getOwnPropertyNames(o)};var b=Number.isNaN||function(o){return o!=o};function x(){x.init.call(this)}s.exports=x,s.exports.once=function(o,d){return new Promise(function(p,M){function T(A){o.removeListener(d,S),M(A)}function S(){typeof o.removeListener=="function"&&o.removeListener("error",T),p([].slice.call(arguments))}E(o,d,S,{once:!0}),d!=="error"&&function(A,F,I){typeof A.on=="function"&&E(A,"error",F,{once:!0})}(o,T)})},x.EventEmitter=x,x.prototype._events=void 0,x.prototype._eventsCount=0,x.prototype._maxListeners=void 0;var y=10;function g(o){if(typeof o!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof o)}function w(o){return o._maxListeners===void 0?x.defaultMaxListeners:o._maxListeners}function P(o,d,p,M){var T,S,A,F;if(g(p),(S=o._events)===void 0?(S=o._events=Object.create(null),o._eventsCount=0):(S.newListener!==void 0&&(o.emit("newListener",d,p.listener?p.listener:p),S=o._events),A=S[d]),A===void 0)A=S[d]=p,++o._eventsCount;else if(typeof A=="function"?A=S[d]=M?[p,A]:[A,p]:M?A.unshift(p):A.push(p),(T=w(o))>0&&A.length>T&&!A.warned){A.warned=!0;var I=new Error("Possible EventEmitter memory leak detected. "+A.length+" "+String(d)+" listeners added. Use emitter.setMaxListeners() to increase limit");I.name="MaxListenersExceededWarning",I.emitter=o,I.type=d,I.count=A.length,F=I,console&&console.warn&&console.warn(F)}return o}function C(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(o,d,p){var M={fired:!1,wrapFn:void 0,target:o,type:d,listener:p},T=C.bind(M);return T.listener=p,M.wrapFn=T,T}function h(o,d,p){var M=o._events;if(M===void 0)return[];var T=M[d];return T===void 0?[]:typeof T=="function"?p?[T.listener||T]:[T]:p?function(S){for(var A=new Array(S.length),F=0;F<A.length;++F)A[F]=S[F].listener||S[F];return A}(T):f(T,T.length)}function v(o){var d=this._events;if(d!==void 0){var p=d[o];if(typeof p=="function")return 1;if(p!==void 0)return p.length}return 0}function f(o,d){for(var p=new Array(d),M=0;M<d;++M)p[M]=o[M];return p}function E(o,d,p,M){if(typeof o.on=="function")M.once?o.once(d,p):o.on(d,p);else{if(typeof o.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof o);o.addEventListener(d,function T(S){M.once&&o.removeEventListener(d,T),p(S)})}}Object.defineProperty(x,"defaultMaxListeners",{enumerable:!0,get:function(){return y},set:function(o){if(typeof o!="number"||o<0||b(o))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+o+".");y=o}}),x.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},x.prototype.setMaxListeners=function(o){if(typeof o!="number"||o<0||b(o))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+o+".");return this._maxListeners=o,this},x.prototype.getMaxListeners=function(){return w(this)},x.prototype.emit=function(o){for(var d=[],p=1;p<arguments.length;p++)d.push(arguments[p]);var M=o==="error",T=this._events;if(T!==void 0)M=M&&T.error===void 0;else if(!M)return!1;if(M){var S;if(d.length>0&&(S=d[0]),S instanceof Error)throw S;var A=new Error("Unhandled error."+(S?" ("+S.message+")":""));throw A.context=S,A}var F=T[o];if(F===void 0)return!1;if(typeof F=="function")c(F,this,d);else{var I=F.length,R=f(F,I);for(p=0;p<I;++p)c(R[p],this,d)}return!0},x.prototype.addListener=function(o,d){return P(this,o,d,!1)},x.prototype.on=x.prototype.addListener,x.prototype.prependListener=function(o,d){return P(this,o,d,!0)},x.prototype.once=function(o,d){return g(d),this.on(o,m(this,o,d)),this},x.prototype.prependOnceListener=function(o,d){return g(d),this.prependListener(o,m(this,o,d)),this},x.prototype.removeListener=function(o,d){var p,M,T,S,A;if(g(d),(M=this._events)===void 0)return this;if((p=M[o])===void 0)return this;if(p===d||p.listener===d)--this._eventsCount==0?this._events=Object.create(null):(delete M[o],M.removeListener&&this.emit("removeListener",o,p.listener||d));else if(typeof p!="function"){for(T=-1,S=p.length-1;S>=0;S--)if(p[S]===d||p[S].listener===d){A=p[S].listener,T=S;break}if(T<0)return this;T===0?p.shift():function(F,I){for(;I+1<F.length;I++)F[I]=F[I+1];F.pop()}(p,T),p.length===1&&(M[o]=p[0]),M.removeListener!==void 0&&this.emit("removeListener",o,A||d)}return this},x.prototype.off=x.prototype.removeListener,x.prototype.removeAllListeners=function(o){var d,p,M;if((p=this._events)===void 0)return this;if(p.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):p[o]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete p[o]),this;if(arguments.length===0){var T,S=Object.keys(p);for(M=0;M<S.length;++M)(T=S[M])!=="removeListener"&&this.removeAllListeners(T);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(d=p[o])=="function")this.removeListener(o,d);else if(d!==void 0)for(M=d.length-1;M>=0;M--)this.removeListener(o,d[M]);return this},x.prototype.listeners=function(o){return h(this,o,!0)},x.prototype.rawListeners=function(o){return h(this,o,!1)},x.listenerCount=function(o,d){return typeof o.listenerCount=="function"?o.listenerCount(d):v.call(o,d)},x.prototype.listenerCount=v,x.prototype.eventNames=function(){return this._eventsCount>0?l(this._events):[]}},"./dist/gif.worker.js.txt":(s,l,u)=>{u.r(l),u.d(l,{default:()=>c});const c=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":s=>{const l=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),c=l.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],b=c[1]==="ie"&&document.documentMode,x={name:c[1]==="version"?c[3]:c[1],version:b||parseFloat(c[1]==="opera"&&c[4]?c[4]:c[2]),platform:{name:l.match(/ip(?:ad|od|hone)/)?"ios":(l.match(/(?:webos|android)/)||u.match(/mac|win|linux/)||["other"])[0]}};x[x.name]=!0,x[x.name+parseInt(x.version,10)]=!0,x.platform[x.platform.name]=!0,s.exports=x},"?569f":()=>{}},r={};function i(s){var l=r[s];if(l!==void 0)return l.exports;var u=r[s]={exports:{}};return n[s](u,u.exports,i),u.exports}i.d=(s,l)=>{for(var u in l)i.o(l,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:l[u]})},i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>b});var s=i("./dist/gif.worker.js.txt");const{EventEmitter:l}=i("./node_modules/events/events.js"),u=i("./src/browser.js");i("?569f");var c=function(){let x,y;return(c=class extends l{static initClass(){x={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},y={delay:500,copy:!1,dispose:-1}}constructor(g){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(g);for(let w in x){const P=x[w];this.options[w]==null&&(this.options[w]=P)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(g,w){if(this.options[g]=w,this._canvas!=null&&["width","height"].includes(g))return this._canvas[g]=w}setOptions(g){return(()=>{const w=[];for(let P of Object.keys(g||{})){const C=g[P];w.push(this.setOption(P,C))}return w})()}addFrame(g,w){w==null&&(w={});const P={};P.transparent=this.options.transparent;for(let C in y)P[C]=w[C]||y[C];if(this.options.width==null&&this.setOption("width",g.width),this.options.height==null&&this.setOption("height",g.height),typeof ImageData<"u"&&ImageData!==null&&g instanceof ImageData)P.data=g.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&g instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&g instanceof WebGLRenderingContext)w.copy?P.data=this.getContextData(g):P.context=g;else{if(g.childNodes==null)throw new Error("Invalid image");w.copy?P.data=this.getImageData(g):P.image=g}return this.frames.push(P)}render(){let g;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let P,C;const m=[];for(g=0,C=this.frames.length,P=0<=C;P?g<C:g>C;P?g++:g--)m.push(null);return m})();const w=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let P,C;for(g=0,C=w,P=0<=C;P?g<C:g>C;P?g++:g--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const g=this.activeWorkers.shift();if(g==null)break;this.log("killing active worker"),g.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const g=Math.min(this.options.workers,this.frames.length);return function(w,P,C){let m=[],h=w<P,v=P;for(let f=w;h?f<v:f>v;h?f++:f--)m.push(f);return m}(this.freeWorkers.length,g).forEach(w=>{this.log(`spawning worker ${w}`);const P=new Worker(this.workerURL);return P.onmessage=C=>(this.activeWorkers.splice(this.activeWorkers.indexOf(P),1),this.freeWorkers.push(P),this.frameFinished(C.data)),this.freeWorkers.push(P)}),g}frameFinished(g){if(this.log(`frame ${g.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[g.index]=g,this.options.globalPalette===!0&&(this.options.globalPalette=g.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let w=1,P=this.freeWorkers.length,C=1<=P;C?w<P:w>P;C?w++:w--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let g,w=0;for(g of Array.from(this.imageParts))w+=(g.data.length-1)*g.pageSize+g.cursor;w+=g.pageSize-g.cursor,this.log(`rendering finished - filesize ${Math.round(w/1e3)}kb`);const P=new Uint8Array(w);let C=0;for(g of Array.from(this.imageParts))for(let h=0;h<g.data.length;h++){const v=g.data[h];P.set(v,C),h===g.data.length-1?C+=g.cursor:C+=g.pageSize}const m=new Blob([P],{type:"image/gif"});return this.emit("finished",m,P)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const g=this.frames[this.nextFrame++],w=this.freeWorkers.shift(),P=this.getTask(g);return this.log(`starting frame ${P.index+1} of ${this.frames.length}`),this.activeWorkers.push(w),w.postMessage(P)}getContextData(g){return g.getImageData(0,0,this.options.width,this.options.height).data}getImageData(g){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const w=this._canvas.getContext("2d");return w.fillStyle=this.options.background,w.fillRect(0,0,this.options.width,this.options.height),w.drawImage(g,0,0),this.getContextData(w)}getTask(g){const w=this.frames.indexOf(g),P={index:w,last:w===this.frames.length-1,delay:g.delay,dispose:g.dispose,transparent:g.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:u.name==="chrome"};if(g.data!=null)P.data=g.data;else if(g.context!=null)P.data=this.getContextData(g.context);else{if(g.image==null)throw new Error("Invalid frame");P.data=this.getImageData(g.image)}return P}log(...g){if(this.options.debug)return console.log(...Array.from(g||[]))}}).initClass(),c}();const b=c})(),a})()})})(sr);var dl=sr.exports;const fl=Nn(dl),or={workers:2,quality:10,background:"#ffffff",dither:!1};async function pl(e,t){const n=new fl(or);return e.forEach(r=>n.addFrame(r,{delay:t})),new Promise(r=>{n.on("finished",r),n.render()})}class st{constructor(t){_(this,"initPromise");_(this,"viewer");_(this,"frames");this.viewer=t,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async renderAsync(){await this.initPromise;const t=document.createElement("div");if(this.frames.length!==1){const r=new Te(or);t.appendChild(r.render())}const n=new Te({download:async()=>await this.download()});return t.append(n.render()),t}async download(){if(!this.frames)return;if(this.frames.length===1){const i=`${this.viewer.template.key}.png`;st.downloadBlob(await new Promise(a=>this.frames[0].toBlob(s=>a(s))),i);return}const t=this.viewer.delay,n=await pl(t>0?this.frames:this.frames.reverse(),Math.abs(t)||65),r=`${this.viewer.template.key}.gif`;st.downloadBlob(n,r)}static downloadBlob(t,n){const r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}}const vl="index.json",gl="index.map.json",ml="./data/xmmt.dituon.petpet";class xl{constructor(t){_(this,"urls");_(this,"urlSet",new Set);_(this,"initPromise");_(this,"idMap");_(this,"lengthMap",new Map);_(this,"fonts");_(this,"fontPromises",[]);this.urls=t,this.initPromise=this.init()}async init(){const t=new Map,n=new Map;await Promise.allSettled(this.urls.map(async r=>{const i=await fetch(`${r}/${vl}`).then(u=>u.json()),{dataPath:a=ml,dataList:s,fontList:l}=i;try{const u=await fetch(`${r}/${gl}`).then(c=>c.json());Object.entries(u.length).forEach(([c,b])=>this.lengthMap.set(c,b))}catch{console.warn(`no index.map.json in ${r} `)}for(const u of s)t.has(u)||t.set(u,`${r}/${a}/${u}`);for(const u of l)n.has(u)||n.set(u,`${r}/${a}/fonts/${u}`);this.urlSet.add(r)})),this.idMap=t;for(let[r,i]of n){r=r.split(".")[0],console.log(r,i);const a=new FontFace(r,`url(${i})`);this.fontPromises.push(a.load().then(s=>{document.fonts.add(s)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getLengthMap(){return await this.initPromise,this.lengthMap}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const yl={server:[window.location.origin+window.location.pathname,"https://raw.githubusercontent.com/Dituon/petpet/main"],alternateFont:["MiSans-Bold","sans-serif"].join(",")};class wl{constructor(){_(this,"textModels");_(this,"textDomList",document.createElement("div"));_(this,"settingDom",new Te({add:()=>this.addTextModel()}).render());this.textDomList.appendChild(this.settingDom)}set texts(t){this.textModels=t,this.textDomList.innerHTML="",this.textDomList.appendChild(this.settingDom);for(let n of this.textModels.texts)this.addTextModel(n)}addTextModel(t=this.textModels.addTextModel()){const n=new Te(t.settingObject,t.settingAttributes);this.textDomList.appendChild(n.render())}render(){const t=document.createElement("div");return t.append($e("Set Text"),this.textDomList),t}}class bl{constructor(t){_(this,"appElement");_(this,"templateChooser");_(this,"avatarUploader");_(this,"textUploader");_(this,"resultArea");_(this,"inputElement",document.createElement("div"));_(this,"outputElement",document.createElement("div"));_(this,"prevTemplate");_(this,"initPromise");_(this,"backgroundLengthMap");_(this,"viewer");this.appElement=document.getElementById(t),this.appElement.classList.add("petpet-app"),this.templateChooser=new mr,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new rr,this.avatarUploader.onchange=()=>this.update(),this.textUploader=new wl,this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render(),this.textUploader.render()),this.resultArea=new cl,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){const t=new xl(yl.server),n=await t.getIdMap();this.backgroundLengthMap=await t.getLengthMap();const r=[];for(const[i,a]of n.entries())r.push({key:i,url:a});this.templateChooser.templates=r,(await t.getUrlSet()).size||this.templateChooser.loading.error()}async update(){await this.initPromise,this.viewer&&this.viewer.destroy();const t=this.templateChooser.template||await this.templateChooser.showModal();if(this.prevTemplate!==t&&(this.avatarUploader.types=[...new Set(t.avatar.map(l=>l.type))]),!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const n=new hl(t);n.backgroundLength=this.backgroundLengthMap.get(t.key),n.background=t.url;const r=await n.generate(this.avatarUploader.data,this.avatarUploader.extraTemplate);this.textUploader.texts=n.textModelList,await r.play(),this.resultArea.canvas=r.canvas;const i=document.createElement("div");this.resultArea.setting=i;const a=new Te(r.settingObject,{delay:{type:"range",min:1,max:256,step:1}});i.appendChild(a.render());const s=new st(r);i.appendChild(await s.renderAsync()),this.prevTemplate=t,this.viewer=r}}new bl("app");
