var Xr=Object.defineProperty;var Hr=(e,t,r)=>t in e?Xr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var x=(e,t,r)=>(Hr(e,typeof t!="symbol"?t+"":t,r),r),lt=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var w=(e,t,r)=>(lt(e,t,"read from private field"),r?r.call(e):t.get(e)),k=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},U=(e,t,r,n)=>(lt(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var We=(e,t,r)=>(lt(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const Xe=()=>document.createElement("div");var ze,ee,Ye,Er;class _r{constructor(t){k(this,Ye);k(this,ze,void 0);k(this,ee,void 0);U(this,ze,t)}show(){if(w(this,ee))return;const t=Xe();t.className="loading",t.append(Xe(),Xe(),Xe()),w(this,ze).appendChild(t),t.addEventListener("click",We(this,Ye,Er)),U(this,ee,t)}hide(){w(this,ee)&&(w(this,ee).remove(),U(this,ee,null))}error(){let t="加载失败";throw w(this,ee).innerHTML=`<span>${t}</span>`,new Error(t)}}ze=new WeakMap,ee=new WeakMap,Ye=new WeakSet,Er=function(t){t.stopPropagation()};const ut=new class{constructor(){x(this,"element");x(this,"showing");x(this,"timer");this.element=document.createElement("div"),this.element.id="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(e){this.timer||this.element.addEventListener("click",e)}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}};function De(e,t="h3"){const r=document.createElement(t);return r.textContent=e,r}var Z,Ne,Ue,be,_e;class Qr{constructor(t){k(this,Z,void 0);k(this,Ne,void 0);k(this,Ue,new Map);k(this,be,void 0);k(this,_e,void 0);t&&(this.templates=t)}set templates(t){U(this,Z,document.createElement("div")),w(this,Z).className="modal-select",U(this,Ne,t);const r=document.createElement("div");r.className="index-list",U(this,be,r);for(const i of t){const a=document.createElement("div"),s=document.createElement("img");s.src=`${i.url}/0.png`,s.alt=i.key,s.loading="lazy";const o=De(i.key);i.alias&&i.alias.forEach(u=>o.appendChild(De(u,"span"))),a.append(s,o),a.addEventListener("click",async u=>{w(this,_e).call(this,await Vr(i)),this.hide()}),w(this,Ue).set(i,a),r.appendChild(a)}const n=document.createElement("input");n.placeholder="🔍 type to search",n.addEventListener("change",i=>{this.search(n.value.trim())}),w(this,Z).append(n,r),ut.onclick=()=>{this.hide(),w(this,_e).call(this,null)},w(this,Z).classList.add("hide"),document.body.appendChild(w(this,Z))}hide(){ut.hide(),w(this,Z).classList.add("hide")}async show(){return w(this,Ne)?(ut.show(),w(this,Z)&&w(this,Z).classList.remove("hide"),new Promise(t=>U(this,_e,t))):null}search(t){w(this,be).innerHTML="";for(let[r,n]of w(this,Ue).entries()){const{key:i,alias:a}=r;!i.includes(t)&&!(a&&a.find(s=>s.includes(t)))||w(this,be).appendChild(n)}}}Z=new WeakMap,Ne=new WeakMap,Ue=new WeakMap,be=new WeakMap,_e=new WeakMap;async function Vr(e){if(e.type)return e;const t=await fetch(e.url+"/data.json").then(r=>r.json());return{...e,...t}}var te,Ee,Ce;class Zr{constructor(t){k(this,te,document.createElement("div"));k(this,Ee,void 0);x(this,"loading",new _r(w(this,te)));k(this,Ce,void 0);x(this,"template");if(U(this,Ee,new Qr(t)),w(this,te).id="template-chooser",w(this,te).textContent="Not Selected",w(this,te).addEventListener("click",async()=>{const r=await this.showModal();w(this,Ce)&&w(this,Ce).call(this,r)}),!t){this.loading.show();return}this.templates=t}set templates(t){this.loading.hide(),w(this,Ee).templates=t}render(){const t=document.createElement("div");return t.append(De("Select Template"),w(this,te)),t}async showModal(){const t=await w(this,Ee).show();return t&&(w(this,te).textContent=t.key),this.template=t,t}set onchange(t){U(this,Ce,t)}}te=new WeakMap,Ee=new WeakMap,Ce=new WeakMap;class Yr{static from(){throw new Error}}function me(e,t){if(e.length!==t)throw new Error("array.length != "+t);return e}function xt(e,t=!1){const r=document.createElement("canvas"),n=r.getContext("2d",{willReadFrequently:t});return r.width=e.width,r.height=e.height,n.drawImage(e,0,0),r}async function Cr(e){return new Promise((t,r)=>{const n=new Image;n.onload=()=>t(n),n.onerror=i=>r(i),n.src=URL.createObjectURL(e)})}function Mr(e="#ffffff00"){if(typeof e=="string")return e.length<<2?"#"+e:e;if(e.length&&e.length>=3&&e.length<=4){const[t,r,n,i=1]=e;return`rgba(${t}, ${r}, ${n}, ${i})`}throw new Error("cannot load color "+e)}function Kr(e,t,r=!1){const n=document.createElement("canvas"),i=n.getContext("2d"),[a,s,o,u]=t.length===2?[0,0,t[0],t[1]]:t,h=r?o/100*e.width:o,m=r?u/100*e.height:u;return n.width=h,n.height=m,i.drawImage(e,a,s,h,m,0,0,h,m),n}function Jr(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(0,e.height),r.scale(1,-1),r.drawImage(e,0,0),t}function jr(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0);const n=r.getImageData(0,0,t.width,t.height),i=n.data;for(let a=0;a<i.length;a+=4){const s=i[a],o=i[a+1],u=i[a+2],h=(s+o+u)/3;i[a]=h,i[a+1]=h,i[a+2]=h}return r.putImageData(n,0,0),t}function en(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tr={},O={},yt={};Object.defineProperty(yt,"__esModule",{value:!0});var tn=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function rn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var nn=function(){function e(t){rn(this,e);var r=t.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],t.sort(function(u,h){return u[0]-h[0]});for(var n=0;n<r;n++)this.xa.push(t[n][0]),this.ya.push(t[n][1]);this.u[0]=0,this.y2[0]=0;for(var n=1;n<r-1;++n){var i=this.xa[n+1]-this.xa[n-1],a=(this.xa[n]-this.xa[n-1])/i,s=a*this.y2[n-1]+2;this.y2[n]=(a-1)/s;var o=(this.ya[n+1]-this.ya[n])/(this.xa[n+1]-this.xa[n])-(this.ya[n]-this.ya[n-1])/(this.xa[n]-this.xa[n-1]);this.u[n]=(6*o/i-a*this.u[n-1])/s}this.y2[r-1]=0;for(var n=r-2;n>=0;--n)this.y2[n]=this.y2[n]*this.y2[n+1]+this.u[n]}return tn(e,[{key:"interpolate",value:function(r){for(var n=this.ya.length,i=0,a=n-1;a-i>1;){var s=a+i>>1;this.xa[s]>r?a=s:i=s}var o=this.xa[a]-this.xa[i],u=(this.xa[a]-r)/o,h=(r-this.xa[i])/o;return u*this.ya[i]+h*this.ya[a]+((u*u*u-u)*this.y2[i]+(h*h*h-h)*this.y2[a])*(o*o)/6}}]),e}();yt.default=nn;Object.defineProperty(O,"__esModule",{value:!0});O.simpleShader=ln;O.clamp=Pr;O.splineInterpolate=un;var an=yt,sn=on(an);function on(e){return e&&e.__esModule?e:{default:e}}function ln(e,t,r,n){(r||this._.texture).use(),this._.spareTexture.drawTo(function(){e.uniforms(t).drawRect()}),this._.spareTexture.swapWith(n||this._.texture)}function Pr(e,t,r){return Math.max(e,Math.min(t,r))}function un(e){for(var t=new sn.default(e),r=[],n=0;n<256;n++)r.push(Pr(0,Math.floor(t.interpolate(n/255)*256),255));return r}var S={};Object.defineProperty(S,"__esModule",{value:!0});S.set=hn;S.get=cn;var vt={};function hn(e){vt=Object.assign(vt,e)}function cn(e){return vt[e]}var wt={},D={};Object.defineProperty(D,"__esModule",{value:!0});var jt=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),dn=S,ue=fn(dn);function fn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function pn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var vn="attribute vec2 vertex;attribute vec2 _texCoord;varying vec2 texCoord;void main() {  texCoord = _texCoord;  gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);}",gn="uniform sampler2D texture;varying vec2 texCoord;void main() {  gl_FragColor = texture2D(texture, texCoord);}",mn=function(){jt(e,null,[{key:"getDefaultShader",value:function(){var r=ue.get("gl");return r.defaultShader=r.defaultShader||new e,r.defaultShader}}]);function e(t,r){pn(this,e);var n=ue.get("gl");if(this.vertexAttribute=null,this.texCoordAttribute=null,this.program=n.createProgram(),t=t||vn,r=r||gn,r="precision highp float;"+r,n.attachShader(this.program,er(n.VERTEX_SHADER,t)),n.attachShader(this.program,er(n.FRAGMENT_SHADER,r)),n.linkProgram(this.program),!n.getProgramParameter(this.program,n.LINK_STATUS))throw"link error: "+n.getProgramInfoLog(this.program)}return jt(e,[{key:"destroy",value:function(){var r=ue.get("gl");r.deleteProgram(this.program),this.program=null}},{key:"uniforms",value:function(r){var n=ue.get("gl");n.useProgram(this.program);for(var i in r)if(r.hasOwnProperty(i)){var a=n.getUniformLocation(this.program,i);if(a!==null){var s=r[i];if(xn(s))switch(s.length){case 1:n.uniform1fv(a,new Float32Array(s));break;case 2:n.uniform2fv(a,new Float32Array(s));break;case 3:n.uniform3fv(a,new Float32Array(s));break;case 4:n.uniform4fv(a,new Float32Array(s));break;case 9:n.uniformMatrix3fv(a,!1,new Float32Array(s));break;case 16:n.uniformMatrix4fv(a,!1,new Float32Array(s));break;default:throw`dont't know how to load uniform "`+i+'" of length '+s.length}else if(yn(s))n.uniform1f(a,s);else throw'attempted to set uniform "'+i+'" to invalid value '+(s||"undefined").toString()}}return this}},{key:"textures",value:function(r){var n=ue.get("gl");n.useProgram(this.program);for(var i in r)r.hasOwnProperty(i)&&n.uniform1i(n.getUniformLocation(this.program,i),r[i]);return this}},{key:"drawRect",value:function(r,n,i,a){var s=ue.get("gl"),o=s.getParameter(s.VIEWPORT);n=n!==void 0?(n-o[1])/o[3]:0,r=r!==void 0?(r-o[0])/o[2]:0,i=i!==void 0?(i-o[0])/o[2]:1,a=a!==void 0?(a-o[1])/o[3]:1,s.vertexBuffer==null&&(s.vertexBuffer=s.createBuffer()),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([r,n,r,a,i,n,i,a]),s.STATIC_DRAW),s.texCoordBuffer==null&&(s.texCoordBuffer=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),s.STATIC_DRAW)),this.vertexAttribute==null&&(this.vertexAttribute=s.getAttribLocation(this.program,"vertex"),s.enableVertexAttribArray(this.vertexAttribute)),this.texCoordAttribute==null&&(this.texCoordAttribute=s.getAttribLocation(this.program,"_texCoord"),s.enableVertexAttribArray(this.texCoordAttribute)),s.useProgram(this.program),s.bindBuffer(s.ARRAY_BUFFER,s.vertexBuffer),s.vertexAttribPointer(this.vertexAttribute,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,s.texCoordBuffer),s.vertexAttribPointer(this.texCoordAttribute,2,s.FLOAT,!1,0,0),s.drawArrays(s.TRIANGLE_STRIP,0,4)}}]),e}();D.default=mn;function xn(e){return Object.prototype.toString.call(e)=="[object Array]"}function yn(e){return Object.prototype.toString.call(e)=="[object Number]"}function er(e,t){var r=ue.get("gl"),n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw"compile error: "+r.getShaderInfoLog(n);return n}Object.defineProperty(wt,"__esModule",{value:!0});var tr=function(){function e(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),wn=S,Q=Cn(wn),bn=D,_n=En(bn);function En(e){return e&&e.__esModule?e:{default:e}}function Cn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Mn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var j=null,Tn=function(){tr(e,null,[{key:"fromElement",value:function(r){var n=Q.get("gl"),i=new e(0,0,n.RGBA,n.UNSIGNED_BYTE);return i.loadContentsOf(r),i}}]);function e(t,r,n,i){Mn(this,e);var a=Q.get("gl");this.gl=a,this.id=a.createTexture(),this.width=t,this.height=r,this.format=n,this.type=i,a.bindTexture(a.TEXTURE_2D,this.id),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),t&&r&&a.texImage2D(a.TEXTURE_2D,0,this.format,t,r,0,this.format,this.type,null)}return tr(e,[{key:"loadContentsOf",value:function(r){var n=Q.get("gl");this.width=r.width||r.videoWidth,this.height=r.height||r.videoHeight,n.bindTexture(n.TEXTURE_2D,this.id),n.texImage2D(n.TEXTURE_2D,0,this.format,this.format,this.type,r)}},{key:"initFromBytes",value:function(r,n,i){var a=Q.get("gl");this.width=r,this.height=n,this.format=a.RGBA,this.type=a.UNSIGNED_BYTE,a.bindTexture(a.TEXTURE_2D,this.id),a.texImage2D(a.TEXTURE_2D,0,a.RGBA,r,n,0,a.RGBA,this.type,new Uint8Array(i))}},{key:"destroy",value:function(){var r=Q.get("gl");r.deleteTexture(this.id),this.id=null}},{key:"use",value:function(r){var n=Q.get("gl");n.activeTexture(n.TEXTURE0+(r||0)),n.bindTexture(n.TEXTURE_2D,this.id)}},{key:"unuse",value:function(r){var n=Q.get("gl");n.activeTexture(n.TEXTURE0+(r||0)),n.bindTexture(n.TEXTURE_2D,null)}},{key:"ensureFormat",value:function(r,n,i,a){if(arguments.length==1){var s=arguments[0];r=s.width,n=s.height,i=s.format,a=s.type}if(r!=this.width||n!=this.height||i!=this.format||a!=this.type){var o=Q.get("gl");this.width=r,this.height=n,this.format=i,this.type=a,o.bindTexture(o.TEXTURE_2D,this.id),o.texImage2D(o.TEXTURE_2D,0,this.format,r,n,0,this.format,this.type,null)}}},{key:"drawTo",value:function(r){var n=Q.get("gl");if(n.framebuffer=n.framebuffer||n.createFramebuffer(),n.bindFramebuffer(n.FRAMEBUFFER,n.framebuffer),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,this.id,0),n.checkFramebufferStatus(n.FRAMEBUFFER)!==n.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");n.viewport(0,0,this.width,this.height),r(),n.bindFramebuffer(n.FRAMEBUFFER,null)}},{key:"fillUsingCanvas",value:function(r){r(rr(this));var n=Q.get("gl");return this.format=n.RGBA,this.type=n.UNSIGNED_BYTE,n.bindTexture(n.TEXTURE_2D,this.id),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,j),this}},{key:"toImage",value:function(r){this.use(),_n.default.getDefaultShader().drawRect();var n=Q.get("gl"),i=this.width*this.height*4,a=new Uint8Array(i),s=rr(this),o=s.createImageData(this.width,this.height);n.readPixels(0,0,this.width,this.height,n.RGBA,n.UNSIGNED_BYTE,a);for(var u=0;u<i;u++)o.data[u]=a[u];s.putImageData(o,0,0),r.src=j.toDataURL()}},{key:"swapWith",value:function(r){var n;n=r.id,r.id=this.id,this.id=n,n=r.width,r.width=this.width,this.width=n,n=r.height,r.height=this.height,this.height=n,n=r.format,r.format=this.format,this.format=n}}]),e}();wt.default=Tn;function rr(e){j==null&&(j=document.createElement("canvas")),j.width=e.width,j.height=e.height;var t=j.getContext("2d");return t.clearRect(0,0,j.width,j.height),t}var Ar={},bt={};Object.defineProperty(bt,"__esModule",{value:!0});bt.default=function(e,t){var r=Sn.get("gl");return r.brightnessContrast=r.brightnessContrast||new An.default(null,"    uniform sampler2D texture;    uniform float brightness;    uniform float contrast;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.rgb += brightness;      if (contrast > 0.0) {        color.rgb = (color.rgb - 0.5) / (1.0 - contrast) + 0.5;      } else {        color.rgb = (color.rgb - 0.5) * (1.0 + contrast) + 0.5;      }      gl_FragColor = color;    }  "),ht.simpleShader.call(this,r.brightnessContrast,{brightness:(0,ht.clamp)(-1,e,1),contrast:(0,ht.clamp)(-1,t,1)}),this};var Pn=D,An=In(Pn),ht=O,kn=S,Sn=Fn(kn);function Fn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function In(e){return e&&e.__esModule?e:{default:e}}var _t={};Object.defineProperty(_t,"__esModule",{value:!0});_t.default=function(e,t,r){var n=Dn.get("gl");e=(0,He.splineInterpolate)(e),arguments.length==1?t=r=e:(t=(0,He.splineInterpolate)(t),r=(0,He.splineInterpolate)(r));for(var i=[],a=0;a<256;a++)i.splice(i.length,0,e[a],t[a],r[a],255);return this._.extraTexture.initFromBytes(256,1,i),this._.extraTexture.use(1),n.curves=n.curves||new Rn.default(null,"    uniform sampler2D texture;    uniform sampler2D map;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color.r = texture2D(map, vec2(color.r)).r;      color.g = texture2D(map, vec2(color.g)).g;      color.b = texture2D(map, vec2(color.b)).b;      gl_FragColor = color;    }  "),n.curves.textures({map:1}),He.simpleShader.call(this,n.curves,{}),this};var On=D,Rn=Ln(On),He=O,Bn=S,Dn=$n(Bn);function $n(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ln(e){return e&&e.__esModule?e:{default:e}}var Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.default=function(e){var t=Gn.get("gl");t.denoise=t.denoise||new Nn.default(null,"    uniform sampler2D texture;    uniform float exponent;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec4 center = texture2D(texture, texCoord);      vec4 color = vec4(0.0);      float total = 0.0;      for (float x = -4.0; x <= 4.0; x += 1.0) {        for (float y = -4.0; y <= 4.0; y += 1.0) {          vec4 sample = texture2D(texture, texCoord + vec2(x, y) / texSize);          float weight = 1.0 - abs(dot(sample.rgb - center.rgb, vec3(0.25)));          weight = pow(weight, exponent);          color += sample * weight;          total += weight;        }      }      gl_FragColor = color / total;    }  ");for(var r=0;r<2;r++)Un.simpleShader.call(this,t.denoise,{exponent:Math.max(0,e),texSize:[this.width,this.height]});return this};var zn=D,Nn=Xn(zn),Un=O,qn=S,Gn=Wn(qn);function Wn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Xn(e){return e&&e.__esModule?e:{default:e}}var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.default=function(e,t){var r=Zn.get("gl");return r.hueSaturation=r.hueSaturation||new Qn.default(null,"    uniform sampler2D texture;    uniform float hue;    uniform float saturation;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            /* hue adjustment, wolfram alpha: RotationTransform[angle, {1, 1, 1}][{x, y, z}] */      float angle = hue * 3.14159265;      float s = sin(angle), c = cos(angle);      vec3 weights = (vec3(2.0 * c, -sqrt(3.0) * s - c, sqrt(3.0) * s - c) + 1.0) / 3.0;      float len = length(color.rgb);      color.rgb = vec3(        dot(color.rgb, weights.xyz),        dot(color.rgb, weights.zxy),        dot(color.rgb, weights.yzx)      );            /* saturation adjustment */      float average = (color.r + color.g + color.b) / 3.0;      if (saturation > 0.0) {        color.rgb += (average - color.rgb) * (1.0 - 1.0 / (1.001 - saturation));      } else {        color.rgb += (average - color.rgb) * (-saturation);      }            gl_FragColor = color;    }  "),ct.simpleShader.call(this,r.hueSaturation,{hue:(0,ct.clamp)(-1,e,1),saturation:(0,ct.clamp)(-1,t,1)}),this};var Hn=D,Qn=Kn(Hn),ct=O,Vn=S,Zn=Yn(Vn);function Yn(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Kn(e){return e&&e.__esModule?e:{default:e}}var Mt={};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.default=function(e){var t=ti.get("gl");return t.noise=t.noise||new jn.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    float rand(vec2 co) {      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);    }    void main() {      vec4 color = texture2D(texture, texCoord);            float diff = (rand(texCoord) - 0.5) * amount;      color.r += diff;      color.g += diff;      color.b += diff;            gl_FragColor = color;    }  "),nr.simpleShader.call(this,t.noise,{amount:(0,nr.clamp)(0,e,1)}),this};var Jn=D,jn=ni(Jn),nr=O,ei=S,ti=ri(ei);function ri(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ni(e){return e&&e.__esModule?e:{default:e}}var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.default=function(e){var t=oi.get("gl");return t.sepia=t.sepia||new ai.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float r = color.r;      float g = color.g;      float b = color.b;            color.r = min(1.0, (r * (1.0 - (0.607 * amount))) + (g * (0.769 * amount)) + (b * (0.189 * amount)));      color.g = min(1.0, (r * 0.349 * amount) + (g * (1.0 - (0.314 * amount))) + (b * 0.168 * amount));      color.b = min(1.0, (r * 0.272 * amount) + (g * 0.534 * amount) + (b * (1.0 - (0.869 * amount))));            gl_FragColor = color;    }  "),ir.simpleShader.call(this,t.sepia,{amount:(0,ir.clamp)(0,e,1)}),this};var ii=D,ai=ui(ii),ir=O,si=S,oi=li(si);function li(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ui(e){return e&&e.__esModule?e:{default:e}}var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.default=function(e,t){var r=fi.get("gl");return r.unsharpMask=r.unsharpMask||new ar.default(null,"    uniform sampler2D blurredTexture;    uniform sampler2D originalTexture;    uniform float strength;    uniform float threshold;    varying vec2 texCoord;    void main() {      vec4 blurred = texture2D(blurredTexture, texCoord);      vec4 original = texture2D(originalTexture, texCoord);      gl_FragColor = mix(blurred, original, 1.0 + strength);    }  "),this._.extraTexture.ensureFormat(this._.texture),this._.texture.use(),this._.extraTexture.drawTo(function(){ar.default.getDefaultShader().drawRect()}),this._.extraTexture.use(1),this.triangleBlur(e),r.unsharpMask.textures({originalTexture:1}),ci.simpleShader.call(this,r.unsharpMask,{strength:t}),this._.extraTexture.unuse(1),this};var hi=D,ar=vi(hi),ci=O,di=S,fi=pi(di);function pi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function vi(e){return e&&e.__esModule?e:{default:e}}var At={};Object.defineProperty(At,"__esModule",{value:!0});At.default=function(e){var t=yi.get("gl");return t.vibrance=t.vibrance||new mi.default(null,"    uniform sampler2D texture;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      float mx = max(color.r, max(color.g, color.b));      float amt = (mx - average) * (-amount * 3.0);      color.rgb = mix(color.rgb, vec3(mx), amt);      gl_FragColor = color;    }  "),sr.simpleShader.call(this,t.vibrance,{amount:(0,sr.clamp)(-1,e,1)}),this};var gi=D,mi=bi(gi),sr=O,xi=S,yi=wi(xi);function wi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function bi(e){return e&&e.__esModule?e:{default:e}}var kt={};Object.defineProperty(kt,"__esModule",{value:!0});kt.default=function(e,t){var r=Mi.get("gl");return r.vignette=r.vignette||new Ei.default(null,"    uniform sampler2D texture;    uniform float size;    uniform float amount;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);            float dist = distance(texCoord, vec2(0.5, 0.5));      color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount + size));            gl_FragColor = color;    }  "),dt.simpleShader.call(this,r.vignette,{size:(0,dt.clamp)(0,e,1),amount:(0,dt.clamp)(0,t,1)}),this};var _i=D,Ei=Pi(_i),dt=O,Ci=S,Mi=Ti(Ci);function Ti(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Pi(e){return e&&e.__esModule?e:{default:e}}var St={},H={};Object.defineProperty(H,"__esModule",{value:!0});H.randomShaderFunc=void 0;H.warpShader=Fi;var Ai=D,ki=Si(Ai);function Si(e){return e&&e.__esModule?e:{default:e}}function Fi(e,t){return new ki.default(null,e+"    uniform sampler2D texture;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 coord = texCoord * texSize;      "+t+"      gl_FragColor = texture2D(texture, coord / texSize);      vec2 clampedCoord = clamp(coord, vec2(0.0), texSize);      if (coord != clampedCoord) {        /* fade to transparent if we are outside the image */        gl_FragColor.a *= max(0.0, 1.0 - length(coord - clampedCoord));      }    }")}H.randomShaderFunc="  float random(vec3 scale, float seed) {    /* use the fragment position for a different seed per-pixel */    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);  }";Object.defineProperty(St,"__esModule",{value:!0});St.default=function(e,t,r){var n=Bi.get("gl");n.lensBlurPrePass=n.lensBlurPrePass||new Qe.default(null,"    uniform sampler2D texture;    uniform float power;    varying vec2 texCoord;    void main() {      vec4 color = texture2D(texture, texCoord);      color = pow(color, vec4(power));      gl_FragColor = vec4(color);    }  ");var i="    uniform sampler2D texture0;    uniform sampler2D texture1;    uniform vec2 delta0;    uniform vec2 delta1;    uniform float power;    varying vec2 texCoord;    "+Oi.randomShaderFunc+"    vec4 sample(vec2 delta) {      /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(delta, 151.7182), 0.0);            vec4 color = vec4(0.0);      float total = 0.0;      for (float t = 0.0; t <= 30.0; t++) {        float percent = (t + offset) / 30.0;        color += texture2D(texture0, texCoord + delta * percent);        total += 1.0;      }      return color / total;    }  ";n.lensBlur0=n.lensBlur0||new Qe.default(null,i+"    void main() {      gl_FragColor = sample(delta0);    }  "),n.lensBlur1=n.lensBlur1||new Qe.default(null,i+"    void main() {      gl_FragColor = (sample(delta0) + sample(delta1)) * 0.5;    }  "),n.lensBlur2=n.lensBlur2||new Qe.default(null,i+"    void main() {      vec4 color = (sample(delta0) + 2.0 * texture2D(texture1, texCoord)) / 3.0;      gl_FragColor = pow(color, vec4(power));    }  ").textures({texture1:1});for(var a=[],s=0;s<3;s++){var o=r+s*Math.PI*2/3;a.push([e*Math.sin(o)/this.width,e*Math.cos(o)/this.height])}var u=Math.pow(10,(0,xe.clamp)(-1,t,1));return xe.simpleShader.call(this,n.lensBlurPrePass,{power:u}),this._.extraTexture.ensureFormat(this._.texture),xe.simpleShader.call(this,n.lensBlur0,{delta0:a[0]},this._.texture,this._.extraTexture),xe.simpleShader.call(this,n.lensBlur1,{delta0:a[1],delta1:a[2]},this._.extraTexture,this._.extraTexture),xe.simpleShader.call(this,n.lensBlur0,{delta0:a[1]}),this._.extraTexture.use(1),xe.simpleShader.call(this,n.lensBlur2,{power:1/u,delta0:a[2]}),this};var Ii=D,Qe=$i(Ii),xe=O,Oi=H,Ri=S,Bi=Di(Ri);function Di(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function $i(e){return e&&e.__esModule?e:{default:e}}var Ft={};Object.defineProperty(Ft,"__esModule",{value:!0});Ft.default=function(e,t,r,n,i,a){var s=qi.get("gl");s.tiltShift=s.tiltShift||new zi.default(null,"    uniform sampler2D texture;    uniform float blurRadius;    uniform float gradientRadius;    uniform vec2 start;    uniform vec2 end;    uniform vec2 delta;    uniform vec2 texSize;    varying vec2 texCoord;    "+Ni.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));      float radius = smoothstep(0.0, 1.0, abs(dot(texCoord * texSize - start, normal)) / gradientRadius) * blurRadius;      for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta / texSize * percent * radius);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  ");var o=r-e,u=n-t,h=Math.sqrt(o*o+u*u);return or.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[r,n],delta:[o/h,u/h],texSize:[this.width,this.height]}),or.simpleShader.call(this,s.tiltShift,{blurRadius:i,gradientRadius:a,start:[e,t],end:[r,n],delta:[-u/h,o/h],texSize:[this.width,this.height]}),this};var Li=D,zi=Wi(Li),or=O,Ni=H,Ui=S,qi=Gi(Ui);function Gi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Wi(e){return e&&e.__esModule?e:{default:e}}var It={};Object.defineProperty(It,"__esModule",{value:!0});It.default=function(e){var t=Zi.get("gl");return t.triangleBlur=t.triangleBlur||new Hi.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+Qi.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec4 sample = texture2D(texture, texCoord + delta * percent);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),lr.simpleShader.call(this,t.triangleBlur,{delta:[e/this.width,0]}),lr.simpleShader.call(this,t.triangleBlur,{delta:[0,e/this.height]}),this};var Xi=D,Hi=Ki(Xi),lr=O,Qi=H,Vi=S,Zi=Yi(Vi);function Yi(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ki(e){return e&&e.__esModule?e:{default:e}}var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.default=function(e,t,r){var n=na.get("gl");return n.zoomBlur=n.zoomBlur||new ji.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    "+ta.randomShaderFunc+"    void main() {      vec4 color = vec4(0.0);      float total = 0.0;      vec2 toCenter = center - texCoord * texSize;            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = 0.0; t <= 40.0; t++) {        float percent = (t + offset) / 40.0;        float weight = 4.0 * (percent - percent * percent);        vec4 sample = texture2D(texture, texCoord + toCenter * percent * strength / texSize);                /* switch to pre-multiplied alpha to correctly blur transparent images */        sample.rgb *= sample.a;                color += sample * weight;        total += weight;      }            gl_FragColor = color / total;            /* switch back from pre-multiplied alpha */      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;    }  "),ea.simpleShader.call(this,n.zoomBlur,{center:[e,t],strength:r,texSize:[this.width,this.height]}),this};var Ji=D,ji=aa(Ji),ea=O,ta=H,ra=S,na=ia(ra);function ia(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function aa(e){return e&&e.__esModule?e:{default:e}}var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.default=function(e,t,r,n){var i=ha.get("gl");return i.colorHalftone=i.colorHalftone||new oa.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern(float angle) {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      vec3 cmy = 1.0 - color.rgb;      float k = min(cmy.x, min(cmy.y, cmy.z));      cmy = (cmy - k) / (1.0 - k);      cmy = clamp(cmy * 10.0 - 3.0 + vec3(pattern(angle + 0.26179), pattern(angle + 1.30899), pattern(angle)), 0.0, 1.0);      k = clamp(k * 10.0 - 5.0 + pattern(angle + 0.78539), 0.0, 1.0);      gl_FragColor = vec4(1.0 - cmy - k, color.a);    }  "),la.simpleShader.call(this,i.colorHalftone,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this};var sa=D,oa=da(sa),la=O,ua=S,ha=ca(ua);function ca(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function da(e){return e&&e.__esModule?e:{default:e}}var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.default=function(e,t,r,n){var i=ma.get("gl");return i.dotScreen=i.dotScreen||new pa.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float angle;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;        float pattern() {      float s = sin(angle), c = cos(angle);      vec2 tex = texCoord * texSize - center;      vec2 point = vec2(        c * tex.x - s * tex.y,        s * tex.x + c * tex.y      ) * scale;      return (sin(point.x) * sin(point.y)) * 4.0;    }        void main() {      vec4 color = texture2D(texture, texCoord);      float average = (color.r + color.g + color.b) / 3.0;      gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);    }  "),va.simpleShader.call(this,i.dotScreen,{center:[e,t],angle:r,scale:Math.PI/n,texSize:[this.width,this.height]}),this};var fa=D,pa=ya(fa),va=O,ga=S,ma=xa(ga);function xa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function ya(e){return e&&e.__esModule?e:{default:e}}var Dt={};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.default=function(e){var t=_a.get("gl");return t.edgeWork1=t.edgeWork1||new ur.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+cr.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec3 sample = texture2D(texture, texCoord + delta * percent).rgb;        float average = (sample.r + sample.g + sample.b) / 3.0;        color.x += average * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += average * weight;          total.y += weight;        }      }      gl_FragColor = vec4(color / total, 0.0, 1.0);    }  "),t.edgeWork2=t.edgeWork2||new ur.default(null,"    uniform sampler2D texture;    uniform vec2 delta;    varying vec2 texCoord;    "+cr.randomShaderFunc+"    void main() {      vec2 color = vec2(0.0);      vec2 total = vec2(0.0);            /* randomize the lookup values to hide the fixed number of samples */      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);            for (float t = -30.0; t <= 30.0; t++) {        float percent = (t + offset - 0.5) / 30.0;        float weight = 1.0 - abs(percent);        vec2 sample = texture2D(texture, texCoord + delta * percent).xy;        color.x += sample.x * weight;        total.x += weight;        if (abs(t) < 15.0) {          weight = weight * 2.0 - 1.0;          color.y += sample.y * weight;          total.y += weight;        }      }      float c = clamp(10000.0 * (color.y / total.y - color.x / total.x) + 0.5, 0.0, 1.0);      gl_FragColor = vec4(c, c, c, 1.0);    }  "),hr.simpleShader.call(this,t.edgeWork1,{delta:[e/this.width,0]}),hr.simpleShader.call(this,t.edgeWork2,{delta:[0,e/this.height]}),this};var wa=D,ur=Ca(wa),hr=O,cr=H,ba=S,_a=Ea(ba);function Ea(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ca(e){return e&&e.__esModule?e:{default:e}}var $t={};Object.defineProperty($t,"__esModule",{value:!0});$t.default=function(e,t,r){var n=ka.get("gl");return n.hexagonalPixelate=n.hexagonalPixelate||new Ta.default(null,"    uniform sampler2D texture;    uniform vec2 center;    uniform float scale;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 tex = (texCoord * texSize - center) / scale;      tex.y /= 0.866025404;      tex.x -= tex.y * 0.5;            vec2 a;      if (tex.x + tex.y - floor(tex.x) - floor(tex.y) < 1.0) a = vec2(floor(tex.x), floor(tex.y));      else a = vec2(ceil(tex.x), ceil(tex.y));      vec2 b = vec2(ceil(tex.x), floor(tex.y));      vec2 c = vec2(floor(tex.x), ceil(tex.y));            vec3 TEX = vec3(tex.x, tex.y, 1.0 - tex.x - tex.y);      vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);      vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);      vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);            float alen = length(TEX - A);      float blen = length(TEX - B);      float clen = length(TEX - C);            vec2 choice;      if (alen < blen) {        if (alen < clen) choice = a;        else choice = c;      } else {        if (blen < clen) choice = b;        else choice = c;      }            choice.x += choice.y * 0.5;      choice.y *= 0.866025404;      choice *= scale / texSize;      gl_FragColor = texture2D(texture, choice + center / texSize);    }  "),Pa.simpleShader.call(this,n.hexagonalPixelate,{center:[e,t],scale:r,texSize:[this.width,this.height]}),this};var Ma=D,Ta=Fa(Ma),Pa=O,Aa=S,ka=Sa(Aa);function Sa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Fa(e){return e&&e.__esModule?e:{default:e}}var Lt={};Object.defineProperty(Lt,"__esModule",{value:!0});Lt.default=function(e){var t=Da.get("gl");return t.ink=t.ink||new Oa.default(null,"    uniform sampler2D texture;    uniform float strength;    uniform vec2 texSize;    varying vec2 texCoord;    void main() {      vec2 dx = vec2(1.0 / texSize.x, 0.0);      vec2 dy = vec2(0.0, 1.0 / texSize.y);      vec4 color = texture2D(texture, texCoord);      float bigTotal = 0.0;      float smallTotal = 0.0;      vec3 bigAverage = vec3(0.0);      vec3 smallAverage = vec3(0.0);      for (float x = -2.0; x <= 2.0; x += 1.0) {        for (float y = -2.0; y <= 2.0; y += 1.0) {          vec3 sample = texture2D(texture, texCoord + dx * x + dy * y).rgb;          bigAverage += sample;          bigTotal += 1.0;          if (abs(x) + abs(y) < 2.0) {            smallAverage += sample;            smallTotal += 1.0;          }        }      }      vec3 edge = max(vec3(0.0), bigAverage / bigTotal - smallAverage / smallTotal);      gl_FragColor = vec4(color.rgb - dot(edge, edge) * strength * 100000.0, color.a);    }  "),Ra.simpleShader.call(this,t.ink,{strength:e*e*e*e*e,texSize:[this.width,this.height]}),this};var Ia=D,Oa=La(Ia),Ra=O,Ba=S,Da=$a(Ba);function $a(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function La(e){return e&&e.__esModule?e:{default:e}}var zt={};Object.defineProperty(zt,"__esModule",{value:!0});zt.default=function(e,t,r,n){var i=Ua.get("gl");return i.bulgePinch=i.bulgePinch||(0,za.warpShader)("    uniform float radius;    uniform float strength;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = distance / radius;      if (strength > 0.0) {        coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);      } else {        coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);      }    }    coord += center;  "),dr.simpleShader.call(this,i.bulgePinch,{radius:r,strength:(0,dr.clamp)(-1,n,1),center:[e,t],texSize:[this.width,this.height]}),this};var za=H,dr=O,Na=S,Ua=qa(Na);function qa(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var Nt={},Ie={};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.getSquareToQuad=Ga;Ie.getInverse=Wa;Ie.multiply=Xa;function Ga(e,t,r,n,i,a,s,o){var u=r-i,h=n-a,m=s-i,d=o-a,p=e-r+i-s,c=t-n+a-o,g=u*d-m*h,y=(p*d-m*c)/g,b=(u*c-p*h)/g;return[r-e+y*r,n-t+y*n,y,s-e+b*s,o-t+b*o,b,e,t,1]}function Wa(e){var t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],s=e[5],o=e[6],u=e[7],h=e[8],m=t*a*h-t*s*u-r*i*h+r*s*o+n*i*u-n*a*o;return[(a*h-s*u)/m,(n*u-r*h)/m,(r*s-n*a)/m,(s*o-i*h)/m,(t*h-n*o)/m,(n*i-t*s)/m,(i*u-a*o)/m,(r*o-t*u)/m,(t*a-r*i)/m]}function Xa(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}Object.defineProperty(Nt,"__esModule",{value:!0});Nt.default=function(e,t,r){var n=Ya.get("gl");if(n.matrixWarp=n.matrixWarp||(0,Ha.warpShader)("    uniform mat3 matrix;    uniform bool useTextureSpace;  ","    if (useTextureSpace) coord = coord / texSize * 2.0 - 1.0;    vec3 warp = matrix * vec3(coord, 1.0);    coord = warp.xy / warp.z;    if (useTextureSpace) coord = (coord * 0.5 + 0.5) * texSize;  "),e=Array.prototype.concat.apply([],e),e.length==4)e=[e[0],e[1],0,e[2],e[3],0,0,0,1];else if(e.length!=9)throw"can only warp with 2x2 or 3x3 matrix";return Va.simpleShader.call(this,n.matrixWarp,{matrix:t?(0,Qa.getInverse)(e):e,texSize:[this.width,this.height],useTextureSpace:r|0}),this};var Ha=H,Qa=Ie,Va=O,Za=S,Ya=Ka(Za);function Ka(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var Ut={};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.default=function(e,t){var r=Ve.getSquareToQuad.apply(null,t),n=Ve.getSquareToQuad.apply(null,e),i=(0,Ve.multiply)((0,Ve.getInverse)(r),n);return this.matrixWarp(i)};var Ve=Ie,qt={};Object.defineProperty(qt,"__esModule",{value:!0});qt.default=function(e,t,r,n){var i=ts.get("gl");return i.swirl=i.swirl||(0,Ja.warpShader)("    uniform float radius;    uniform float angle;    uniform vec2 center;  ","    coord -= center;    float distance = length(coord);    if (distance < radius) {      float percent = (radius - distance) / radius;      float theta = percent * percent * angle;      float s = sin(theta);      float c = cos(theta);      coord = vec2(        coord.x * c - coord.y * s,        coord.x * s + coord.y * c      );    }    coord += center;  "),ja.simpleShader.call(this,i.swirl,{radius:r,center:[e,t],angle:n,texSize:[this.width,this.height]}),this};var Ja=H,ja=O,es=S,ts=rs(es);function rs(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=bt;Object.defineProperty(e,"brightnessContrast",{enumerable:!0,get:function(){return v(t).default}});var r=_t;Object.defineProperty(e,"curves",{enumerable:!0,get:function(){return v(r).default}});var n=Et;Object.defineProperty(e,"denoise",{enumerable:!0,get:function(){return v(n).default}});var i=Ct;Object.defineProperty(e,"hueSaturation",{enumerable:!0,get:function(){return v(i).default}});var a=Mt;Object.defineProperty(e,"noise",{enumerable:!0,get:function(){return v(a).default}});var s=Tt;Object.defineProperty(e,"sepia",{enumerable:!0,get:function(){return v(s).default}});var o=Pt;Object.defineProperty(e,"unsharpMask",{enumerable:!0,get:function(){return v(o).default}});var u=At;Object.defineProperty(e,"vibrance",{enumerable:!0,get:function(){return v(u).default}});var h=kt;Object.defineProperty(e,"vignette",{enumerable:!0,get:function(){return v(h).default}});var m=St;Object.defineProperty(e,"lensBlur",{enumerable:!0,get:function(){return v(m).default}});var d=Ft;Object.defineProperty(e,"tiltShift",{enumerable:!0,get:function(){return v(d).default}});var p=It;Object.defineProperty(e,"triangleBlur",{enumerable:!0,get:function(){return v(p).default}});var c=Ot;Object.defineProperty(e,"zoomBlur",{enumerable:!0,get:function(){return v(c).default}});var g=Rt;Object.defineProperty(e,"colorHalftone",{enumerable:!0,get:function(){return v(g).default}});var y=Bt;Object.defineProperty(e,"dotScreen",{enumerable:!0,get:function(){return v(y).default}});var b=Dt;Object.defineProperty(e,"edgeWork",{enumerable:!0,get:function(){return v(b).default}});var P=$t;Object.defineProperty(e,"hexagonalPixelate",{enumerable:!0,get:function(){return v(P).default}});var F=Lt;Object.defineProperty(e,"ink",{enumerable:!0,get:function(){return v(F).default}});var B=zt;Object.defineProperty(e,"bulgePinch",{enumerable:!0,get:function(){return v(B).default}});var E=Nt;Object.defineProperty(e,"matrixWarp",{enumerable:!0,get:function(){return v(E).default}});var $=Ut;Object.defineProperty(e,"perspective",{enumerable:!0,get:function(){return v($).default}});var l=qt;Object.defineProperty(e,"swirl",{enumerable:!0,get:function(){return v(l).default}});function v(f){return f&&f.__esModule?f:{default:f}}})(Ar);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.splineInterpolate=void 0;var t=O;Object.defineProperty(e,"splineInterpolate",{enumerable:!0,get:function(){return t.splineInterpolate}}),e.canvas=$;var r=S,n=d(r),i=wt,a=m(i),s=D,o=m(s),u=Ar,h=d(u);function m(l){return l&&l.__esModule?l:{default:l}}function d(l){if(l&&l.__esModule)return l;var v={};if(l!=null)for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(v[f]=l[f]);return v.default=l,v}function p(l){return{_:l,loadContentsOf:function(f){n.set({gl:this._.gl}),this._.loadContentsOf(f)},destroy:function(){n.set({gl:this._.gl}),this._.destroy()}}}function c(l){return p(a.default.fromElement(l))}function g(l,v){var f=n.get("gl"),_=f.UNSIGNED_BYTE;if(f.getExtension("OES_texture_float")&&f.getExtension("OES_texture_float_linear")){var C=new a.default(100,100,f.RGBA,f.FLOAT);try{C.drawTo(function(){_=f.FLOAT})}catch{}C.destroy()}this._.texture&&this._.texture.destroy(),this._.spareTexture&&this._.spareTexture.destroy(),this.width=l,this.height=v,this._.texture=new a.default(l,v,f.RGBA,_),this._.spareTexture=new a.default(l,v,f.RGBA,_),this._.extraTexture=this._.extraTexture||new a.default(0,0,f.RGBA,_),this._.flippedShader=this._.flippedShader||new o.default(null,"	    uniform sampler2D texture;	    varying vec2 texCoord;	    void main() {	      gl_FragColor = texture2D(texture, vec2(texCoord.x, 1.0 - texCoord.y));	    }	  "),this._.isInitialized=!0}function y(l,v,f){return(!this._.isInitialized||l._.width!=this.width||l._.height!=this.height)&&g.call(this,v||l._.width,f||l._.height),l._.use(),this._.texture.drawTo(function(){o.default.getDefaultShader().drawRect()}),this}function b(){return this._.texture.use(),this._.flippedShader.drawRect(),this}function P(l){return l.parentNode.insertBefore(this,l),l.parentNode.removeChild(l),this}function F(){var l=n.get("gl"),v=new a.default(this._.texture.width,this._.texture.height,l.RGBA,l.UNSIGNED_BYTE);return this._.texture.use(),v.drawTo(function(){o.default.getDefaultShader().drawRect()}),p(v)}function B(){var l=n.get("gl"),v=this._.texture.width,f=this._.texture.height,_=new Uint8Array(v*f*4);return this._.texture.drawTo(function(){l.readPixels(0,0,v,f,l.RGBA,l.UNSIGNED_BYTE,_)}),_}function E(l){return function(){return n.set({gl:this._.gl}),l.apply(this,arguments)}}function $(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("canvas");try{n.set({gl:l.getContext("experimental-webgl",{premultipliedAlpha:!1})})}catch{n.set({gl:null})}var v=n.get("gl");if(!v)throw"This browser does not support WebGL";return l._={gl:v,isInitialized:!1,texture:null,spareTexture:null,flippedShader:null},l.texture=E(c),l.draw=E(y),l.update=E(b),l.replace=E(P),l.contents=E(F),l.getPixelArray=E(B),l.brightnessContrast=E(h.brightnessContrast),l.hexagonalPixelate=E(h.hexagonalPixelate),l.hueSaturation=E(h.hueSaturation),l.colorHalftone=E(h.colorHalftone),l.triangleBlur=E(h.triangleBlur),l.unsharpMask=E(h.unsharpMask),l.perspective=E(h.perspective),l.matrixWarp=E(h.matrixWarp),l.bulgePinch=E(h.bulgePinch),l.tiltShift=E(h.tiltShift),l.dotScreen=E(h.dotScreen),l.edgeWork=E(h.edgeWork),l.lensBlur=E(h.lensBlur),l.zoomBlur=E(h.zoomBlur),l.noise=E(h.noise),l.denoise=E(h.denoise),l.curves=E(h.curves),l.swirl=E(h.swirl),l.ink=E(h.ink),l.vignette=E(h.vignette),l.vibrance=E(h.vibrance),l.sepia=E(h.sepia),l}})(Tr);class ns{constructor(t=!0){x(this,"fxCanvas",Tr.canvas());x(this,"textureMap",new Map);x(this,"cache");this.cache=t}draw(t,r,n){const i=this.cache&&this.textureMap.has(r)?this.textureMap.get(r):this.fxCanvas.texture(r);this.cache&&!this.textureMap.has(r)&&this.textureMap.set(r,i);let[a,s]=n[0],[o,u]=n[1],[h,m]=n[2],[d,p]=n[3];const[c,g]=n[4];a+=c,o+=c,h+=c,d+=c,s+=g,u+=g,m+=g,p+=g;const y=t.canvas;this.fxCanvas.draw(i,y.width,y.height).perspective([0,0,y.width,0,0,y.height,y.width,y.height],[a,s,d,p,o,u,h,m]).update(),t.drawImage(this.fxCanvas,0,0),this.cache||i.destroy()}destroy(){if(this.cache)for(const t of[...this.textureMap.values()])t.destroy()}}function is(e){const t=document.createElement("canvas"),r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.translate(e.width,0),r.scale(-1,1),r.drawImage(e,0,0),t}function as(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,i=e.height;t.width=n,t.height=i,r.drawImage(e,0,0);const a=r.getImageData(0,0,n,i),s=a.data;for(let o=0;o<s.length;o+=4){const u=s[o],h=s[o+1],m=s[o+2];u+h+m>383?(s[o]=255,s[o+1]=255,s[o+2]=255):(s[o]=0,s[o+1]=0,s[o+2]=0)}return r.putImageData(a,0,0),t}function ss(e){const t=document.createElement("canvas"),r=t.getContext("2d"),n=Math.min(e.width,e.height)/2;return t.width=n*2,t.height=n*2,r.save(),r.beginPath(),r.arc(n,n,n,0,2*Math.PI),r.closePath(),r.clip(),r.drawImage(e,n-e.width/2,n-e.height/2),r.restore(),t}function os(e,t){const r=Math.abs(Math.sin(t*Math.PI/180)),n=Math.abs(Math.cos(t*Math.PI/180)),i=e.width,a=e.height,s=Math.floor(i*n+a*r),o=Math.floor(a*n+i*r),u=document.createElement("canvas"),h=u.getContext("2d");return u.width=s,u.height=o,h.translate(s/2,o/2),h.rotate(t*Math.PI/180),h.drawImage(e,-i/2,-a/2),u}var X="INUMBER",Oe="IOP1",Re="IOP2",Be="IOP3",ae="IVAR",ve="IVARNAME",ke="IFUNCALL",et="IFUNDEF",G="IEXPR",Gt="IEXPREVAL",ge="IMEMBER",tt="IENDSTATEMENT",Se="IARRAY";function T(e,t){this.type=e,this.value=t??0}T.prototype.toString=function(){switch(this.type){case X:case Oe:case Re:case Be:case ae:case ve:case tt:return this.value;case ke:return"CALL "+this.value;case et:return"DEF "+this.value;case Se:return"ARRAY "+this.value;case ge:return"."+this.value;default:return"Invalid Instruction"}};function rt(e){return new T(Oe,e)}function le(e){return new T(Re,e)}function kr(e){return new T(Be,e)}function gt(e,t,r,n,i){for(var a=[],s=[],o,u,h,m,d=0;d<e.length;d++){var p=e[d],c=p.type;if(c===X||c===ve)Array.isArray(p.value)?a.push.apply(a,gt(p.value.map(function(g){return new T(X,g)}).concat(new T(Se,p.value.length)),t,r,n,i)):a.push(p);else if(c===ae&&i.hasOwnProperty(p.value))p=new T(X,i[p.value]),a.push(p);else if(c===Re&&a.length>1)u=a.pop(),o=a.pop(),m=r[p.value],p=new T(X,m(o.value,u.value)),a.push(p);else if(c===Be&&a.length>2)h=a.pop(),u=a.pop(),o=a.pop(),p.value==="?"?a.push(o.value?u.value:h.value):(m=n[p.value],p=new T(X,m(o.value,u.value,h.value)),a.push(p));else if(c===Oe&&a.length>0)o=a.pop(),m=t[p.value],p=new T(X,m(o.value)),a.push(p);else if(c===G){for(;a.length>0;)s.push(a.shift());s.push(new T(G,gt(p.value,t,r,n,i)))}else if(c===ge&&a.length>0)o=a.pop(),a.push(new T(X,o.value[p.value]));else{for(;a.length>0;)s.push(a.shift());s.push(p)}}for(;a.length>0;)s.push(a.shift());return s}function Sr(e,t,r){for(var n=[],i=0;i<e.length;i++){var a=e[i],s=a.type;if(s===ae&&a.value===t)for(var o=0;o<r.tokens.length;o++){var u=r.tokens[o],h;u.type===Oe?h=rt(u.value):u.type===Re?h=le(u.value):u.type===Be?h=kr(u.value):h=new T(u.type,u.value),n.push(h)}else s===G?n.push(new T(G,Sr(a.value,t,r))):n.push(a)}return n}function he(e,t,r){var n=[],i,a,s,o,u,h;if(Wt(e))return J(e,r);for(var m=e.length,d=0;d<m;d++){var p=e[d],c=p.type;if(c===X||c===ve)n.push(p.value);else if(c===Re)a=n.pop(),i=n.pop(),p.value==="and"?n.push(i?!!he(a,t,r):!1):p.value==="or"?n.push(i?!0:!!he(a,t,r)):p.value==="="?(o=t.binaryOps[p.value],n.push(o(i,he(a,t,r),r))):(o=t.binaryOps[p.value],n.push(o(J(i,r),J(a,r))));else if(c===Be)s=n.pop(),a=n.pop(),i=n.pop(),p.value==="?"?n.push(he(i?a:s,t,r)):(o=t.ternaryOps[p.value],n.push(o(J(i,r),J(a,r),J(s,r))));else if(c===ae)if(p.value in t.functions)n.push(t.functions[p.value]);else if(p.value in t.unaryOps&&t.parser.isOperatorEnabled(p.value))n.push(t.unaryOps[p.value]);else{var g=r[p.value];if(g!==void 0)n.push(g);else throw new Error("undefined variable: "+p.value)}else if(c===Oe)i=n.pop(),o=t.unaryOps[p.value],n.push(o(J(i,r)));else if(c===ke){for(h=p.value,u=[];h-- >0;)u.unshift(J(n.pop(),r));if(o=n.pop(),o.apply&&o.call)n.push(o.apply(void 0,u));else throw new Error(o+" is not a function")}else if(c===et)n.push(function(){for(var y=n.pop(),b=[],P=p.value;P-- >0;)b.unshift(n.pop());var F=n.pop(),B=function(){for(var E=Object.assign({},r),$=0,l=b.length;$<l;$++)E[b[$]]=arguments[$];return he(y,t,E)};return Object.defineProperty(B,"name",{value:F,writable:!1}),r[F]=B,B}());else if(c===G)n.push(ls(p,t));else if(c===Gt)n.push(p);else if(c===ge)i=n.pop(),n.push(i[p.value]);else if(c===tt)n.pop();else if(c===Se){for(h=p.value,u=[];h-- >0;)u.unshift(n.pop());n.push(u)}else throw new Error("invalid Expression")}if(n.length>1)throw new Error("invalid Expression (parity)");return n[0]===0?0:J(n[0],r)}function ls(e,t,r){return Wt(e)?e:{type:Gt,value:function(n){return he(e.value,t,n)}}}function Wt(e){return e&&e.type===Gt}function J(e,t){return Wt(e)?e.value(t):e}function Xt(e,t){for(var r=[],n,i,a,s,o,u,h=0;h<e.length;h++){var m=e[h],d=m.type;if(d===X)typeof m.value=="number"&&m.value<0?r.push("("+m.value+")"):Array.isArray(m.value)?r.push("["+m.value.map(fr).join(", ")+"]"):r.push(fr(m.value));else if(d===Re)i=r.pop(),n=r.pop(),s=m.value,t?s==="^"?r.push("Math.pow("+n+", "+i+")"):s==="and"?r.push("(!!"+n+" && !!"+i+")"):s==="or"?r.push("(!!"+n+" || !!"+i+")"):s==="||"?r.push("(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }(("+n+"),("+i+")))"):s==="=="?r.push("("+n+" === "+i+")"):s==="!="?r.push("("+n+" !== "+i+")"):s==="["?r.push(n+"[("+i+") | 0]"):r.push("("+n+" "+s+" "+i+")"):s==="["?r.push(n+"["+i+"]"):r.push("("+n+" "+s+" "+i+")");else if(d===Be)if(a=r.pop(),i=r.pop(),n=r.pop(),s=m.value,s==="?")r.push("("+n+" ? "+i+" : "+a+")");else throw new Error("invalid Expression");else if(d===ae||d===ve)r.push(m.value);else if(d===Oe)n=r.pop(),s=m.value,s==="-"||s==="+"?r.push("("+s+n+")"):t?s==="not"?r.push("(!"+n+")"):s==="!"?r.push("fac("+n+")"):r.push(s+"("+n+")"):s==="!"?r.push("("+n+"!)"):r.push("("+s+" "+n+")");else if(d===ke){for(u=m.value,o=[];u-- >0;)o.unshift(r.pop());s=r.pop(),r.push(s+"("+o.join(", ")+")")}else if(d===et){for(i=r.pop(),u=m.value,o=[];u-- >0;)o.unshift(r.pop());n=r.pop(),t?r.push("("+n+" = function("+o.join(", ")+") { return "+i+" })"):r.push("("+n+"("+o.join(", ")+") = "+i+")")}else if(d===ge)n=r.pop(),r.push(n+"."+m.value);else if(d===Se){for(u=m.value,o=[];u-- >0;)o.unshift(r.pop());r.push("["+o.join(", ")+"]")}else if(d===G)r.push("("+Xt(m.value,t)+")");else if(d!==tt)throw new Error("invalid Expression")}return r.length>1&&(t?r=[r.join(",")]:r=[r.join(";")]),String(r[0])}function fr(e){return typeof e=="string"?JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029"):e}function we(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}function Ht(e,t,r){r=r||{};for(var n=!!r.withMembers,i=null,a=0;a<e.length;a++){var s=e[a];s.type===ae||s.type===ve?!n&&!we(t,s.value)?t.push(s.value):(i!==null&&(we(t,i)||t.push(i)),i=s.value):s.type===ge&&n&&i!==null?i+="."+s.value:s.type===G?Ht(s.value,t,r):i!==null&&(we(t,i)||t.push(i),i=null)}i!==null&&!we(t,i)&&t.push(i)}function Y(e,t){this.tokens=e,this.parser=t,this.unaryOps=t.unaryOps,this.binaryOps=t.binaryOps,this.ternaryOps=t.ternaryOps,this.functions=t.functions}Y.prototype.simplify=function(e){return e=e||{},new Y(gt(this.tokens,this.unaryOps,this.binaryOps,this.ternaryOps,e),this.parser)};Y.prototype.substitute=function(e,t){return t instanceof Y||(t=this.parser.parse(String(t))),new Y(Sr(this.tokens,e,t),this.parser)};Y.prototype.evaluate=function(e){return e=e||{},he(this.tokens,this,e)};Y.prototype.toString=function(){return Xt(this.tokens,!1)};Y.prototype.symbols=function(e){e=e||{};var t=[];return Ht(this.tokens,t,e),t};Y.prototype.variables=function(e){e=e||{};var t=[];Ht(this.tokens,t,e);var r=this.functions;return t.filter(function(n){return!(n in r)})};Y.prototype.toJSFunction=function(e,t){var r=this,n=new Function(e,"with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return "+Xt(this.simplify(t).tokens,!0)+"; }");return function(){return n.apply(r,arguments)}};var $e="TEOF",I="TOP",nt="TNUMBER",Fr="TSTRING",se="TPAREN",Fe="TBRACKET",it="TCOMMA",Qt="TNAME",Vt="TSEMICOLON";function Ir(e,t,r){this.type=e,this.value=t,this.index=r}Ir.prototype.toString=function(){return this.type+": "+this.value};function L(e,t){this.pos=0,this.current=null,this.unaryOps=e.unaryOps,this.binaryOps=e.binaryOps,this.ternaryOps=e.ternaryOps,this.consts=e.consts,this.expression=t,this.savedPosition=0,this.savedCurrent=null,this.options=e.options,this.parser=e}L.prototype.newToken=function(e,t,r){return new Ir(e,t,r??this.pos)};L.prototype.save=function(){this.savedPosition=this.pos,this.savedCurrent=this.current};L.prototype.restore=function(){this.pos=this.savedPosition,this.current=this.savedCurrent};L.prototype.next=function(){if(this.pos>=this.expression.length)return this.newToken($e,"EOF");if(this.isWhitespace()||this.isComment())return this.next();if(this.isRadixInteger()||this.isNumber()||this.isOperator()||this.isString()||this.isParen()||this.isBracket()||this.isComma()||this.isSemicolon()||this.isNamedOp()||this.isConst()||this.isName())return this.current;this.parseError('Unknown character "'+this.expression.charAt(this.pos)+'"')};L.prototype.isString=function(){var e=!1,t=this.pos,r=this.expression.charAt(t);if(r==="'"||r==='"')for(var n=this.expression.indexOf(r,t+1);n>=0&&this.pos<this.expression.length;){if(this.pos=n+1,this.expression.charAt(n-1)!=="\\"){var i=this.expression.substring(t+1,n);this.current=this.newToken(Fr,this.unescape(i),t),e=!0;break}n=this.expression.indexOf(r,n+1)}return e};L.prototype.isParen=function(){var e=this.expression.charAt(this.pos);return e==="("||e===")"?(this.current=this.newToken(se,e),this.pos++,!0):!1};L.prototype.isBracket=function(){var e=this.expression.charAt(this.pos);return(e==="["||e==="]")&&this.isOperatorEnabled("[")?(this.current=this.newToken(Fe,e),this.pos++,!0):!1};L.prototype.isComma=function(){var e=this.expression.charAt(this.pos);return e===","?(this.current=this.newToken(it,","),this.pos++,!0):!1};L.prototype.isSemicolon=function(){var e=this.expression.charAt(this.pos);return e===";"?(this.current=this.newToken(Vt,";"),this.pos++,!0):!1};L.prototype.isConst=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&r!=="."&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(n in this.consts)return this.current=this.newToken(nt,this.consts[n]),this.pos+=n.length,!0}return!1};L.prototype.isNamedOp=function(){for(var e=this.pos,t=e;t<this.expression.length;t++){var r=this.expression.charAt(t);if(r.toUpperCase()===r.toLowerCase()&&(t===this.pos||r!=="_"&&(r<"0"||r>"9")))break}if(t>e){var n=this.expression.substring(e,t);if(this.isOperatorEnabled(n)&&(n in this.binaryOps||n in this.unaryOps||n in this.ternaryOps))return this.current=this.newToken(I,n),this.pos+=n.length,!0}return!1};L.prototype.isName=function(){for(var e=this.pos,t=e,r=!1;t<this.expression.length;t++){var n=this.expression.charAt(t);if(n.toUpperCase()===n.toLowerCase()){if(t===this.pos&&(n==="$"||n==="_")){n==="_"&&(r=!0);continue}else if(t===this.pos||!r||n!=="_"&&(n<"0"||n>"9"))break}else r=!0}if(r){var i=this.expression.substring(e,t);return this.current=this.newToken(Qt,i),this.pos+=i.length,!0}return!1};L.prototype.isWhitespace=function(){for(var e=!1,t=this.expression.charAt(this.pos);(t===" "||t==="	"||t===`
`||t==="\r")&&(e=!0,this.pos++,!(this.pos>=this.expression.length));)t=this.expression.charAt(this.pos);return e};var us=/^[0-9a-f]{4}$/i;L.prototype.unescape=function(e){var t=e.indexOf("\\");if(t<0)return e;for(var r=e.substring(0,t);t>=0;){var n=e.charAt(++t);switch(n){case"'":r+="'";break;case'"':r+='"';break;case"\\":r+="\\";break;case"/":r+="/";break;case"b":r+="\b";break;case"f":r+="\f";break;case"n":r+=`
`;break;case"r":r+="\r";break;case"t":r+="	";break;case"u":var i=e.substring(t+1,t+5);us.test(i)||this.parseError("Illegal escape sequence: \\u"+i),r+=String.fromCharCode(parseInt(i,16)),t+=4;break;default:throw this.parseError('Illegal escape sequence: "\\'+n+'"')}++t;var a=e.indexOf("\\",t);r+=e.substring(t,a<0?e.length:a),t=a}return r};L.prototype.isComment=function(){var e=this.expression.charAt(this.pos);return e==="/"&&this.expression.charAt(this.pos+1)==="*"?(this.pos=this.expression.indexOf("*/",this.pos)+2,this.pos===1&&(this.pos=this.expression.length),!0):!1};L.prototype.isRadixInteger=function(){var e=this.pos;if(e>=this.expression.length-2||this.expression.charAt(e)!=="0")return!1;++e;var t,r;if(this.expression.charAt(e)==="x")t=16,r=/^[0-9a-f]$/i,++e;else if(this.expression.charAt(e)==="b")t=2,r=/^[01]$/i,++e;else return!1;for(var n=!1,i=e;e<this.expression.length;){var a=this.expression.charAt(e);if(r.test(a))e++,n=!0;else break}return n&&(this.current=this.newToken(nt,parseInt(this.expression.substring(i,e),t)),this.pos=e),n};L.prototype.isNumber=function(){for(var e=!1,t=this.pos,r=t,n=t,i=!1,a=!1,s;t<this.expression.length&&(s=this.expression.charAt(t),s>="0"&&s<="9"||!i&&s===".");)s==="."?i=!0:a=!0,t++,e=a;if(e&&(n=t),s==="e"||s==="E"){t++;for(var o=!0,u=!1;t<this.expression.length;){if(s=this.expression.charAt(t),o&&(s==="+"||s==="-"))o=!1;else if(s>="0"&&s<="9")u=!0,o=!1;else break;t++}u||(t=n)}return e?(this.current=this.newToken(nt,parseFloat(this.expression.substring(r,t))),this.pos=t):this.pos=n,e};L.prototype.isOperator=function(){var e=this.pos,t=this.expression.charAt(this.pos);if(t==="+"||t==="-"||t==="*"||t==="/"||t==="%"||t==="^"||t==="?"||t===":"||t===".")this.current=this.newToken(I,t);else if(t==="∙"||t==="•")this.current=this.newToken(I,"*");else if(t===">")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(I,">="),this.pos++):this.current=this.newToken(I,">");else if(t==="<")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(I,"<="),this.pos++):this.current=this.newToken(I,"<");else if(t==="|")if(this.expression.charAt(this.pos+1)==="|")this.current=this.newToken(I,"||"),this.pos++;else return!1;else if(t==="=")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(I,"=="),this.pos++):this.current=this.newToken(I,t);else if(t==="!")this.expression.charAt(this.pos+1)==="="?(this.current=this.newToken(I,"!="),this.pos++):this.current=this.newToken(I,t);else return!1;return this.pos++,this.isOperatorEnabled(this.current.value)?!0:(this.pos=e,!1)};L.prototype.isOperatorEnabled=function(e){return this.parser.isOperatorEnabled(e)};L.prototype.getCoordinates=function(){var e=0,t,r=-1;do e++,t=this.pos-r,r=this.expression.indexOf(`
`,r+1);while(r>=0&&r<this.pos);return{line:e,column:t}};L.prototype.parseError=function(e){var t=this.getCoordinates();throw new Error("parse error ["+t.line+":"+t.column+"]: "+e)};function R(e,t,r){this.parser=e,this.tokens=t,this.current=null,this.nextToken=null,this.next(),this.savedCurrent=null,this.savedNextToken=null,this.allowMemberAccess=r.allowMemberAccess!==!1}R.prototype.next=function(){return this.current=this.nextToken,this.nextToken=this.tokens.next()};R.prototype.tokenMatches=function(e,t){return typeof t>"u"?!0:Array.isArray(t)?we(t,e.value):typeof t=="function"?t(e):e.value===t};R.prototype.save=function(){this.savedCurrent=this.current,this.savedNextToken=this.nextToken,this.tokens.save()};R.prototype.restore=function(){this.tokens.restore(),this.current=this.savedCurrent,this.nextToken=this.savedNextToken};R.prototype.accept=function(e,t){return this.nextToken.type===e&&this.tokenMatches(this.nextToken,t)?(this.next(),!0):!1};R.prototype.expect=function(e,t){if(!this.accept(e,t)){var r=this.tokens.getCoordinates();throw new Error("parse error ["+r.line+":"+r.column+"]: Expected "+(t||e))}};R.prototype.parseAtom=function(e){var t=this.tokens.unaryOps;function r(i){return i.value in t}if(this.accept(Qt)||this.accept(I,r))e.push(new T(ae,this.current.value));else if(this.accept(nt))e.push(new T(X,this.current.value));else if(this.accept(Fr))e.push(new T(X,this.current.value));else if(this.accept(se,"("))this.parseExpression(e),this.expect(se,")");else if(this.accept(Fe,"["))if(this.accept(Fe,"]"))e.push(new T(Se,0));else{var n=this.parseArrayList(e);e.push(new T(Se,n))}else throw new Error("unexpected "+this.nextToken)};R.prototype.parseExpression=function(e){var t=[];this.parseUntilEndStatement(e,t)||(this.parseVariableAssignmentExpression(t),!this.parseUntilEndStatement(e,t)&&this.pushExpression(e,t))};R.prototype.pushExpression=function(e,t){for(var r=0,n=t.length;r<n;r++)e.push(t[r])};R.prototype.parseUntilEndStatement=function(e,t){return this.accept(Vt)?(this.nextToken&&this.nextToken.type!==$e&&!(this.nextToken.type===se&&this.nextToken.value===")")&&t.push(new T(tt)),this.nextToken.type!==$e&&this.parseExpression(t),e.push(new T(G,t)),!0):!1};R.prototype.parseArrayList=function(e){for(var t=0;!this.accept(Fe,"]");)for(this.parseExpression(e),++t;this.accept(it);)this.parseExpression(e),++t;return t};R.prototype.parseVariableAssignmentExpression=function(e){for(this.parseConditionalExpression(e);this.accept(I,"=");){var t=e.pop(),r=[],n=e.length-1;if(t.type===ke){if(!this.tokens.isOperatorEnabled("()="))throw new Error("function definition is not permitted");for(var i=0,a=t.value+1;i<a;i++){var s=n-i;e[s].type===ae&&(e[s]=new T(ve,e[s].value))}this.parseVariableAssignmentExpression(r),e.push(new T(G,r)),e.push(new T(et,t.value));continue}if(t.type!==ae&&t.type!==ge)throw new Error("expected variable for assignment");this.parseVariableAssignmentExpression(r),e.push(new T(ve,t.value)),e.push(new T(G,r)),e.push(le("="))}};R.prototype.parseConditionalExpression=function(e){for(this.parseOrExpression(e);this.accept(I,"?");){var t=[],r=[];this.parseConditionalExpression(t),this.expect(I,":"),this.parseConditionalExpression(r),e.push(new T(G,t)),e.push(new T(G,r)),e.push(kr("?"))}};R.prototype.parseOrExpression=function(e){for(this.parseAndExpression(e);this.accept(I,"or");){var t=[];this.parseAndExpression(t),e.push(new T(G,t)),e.push(le("or"))}};R.prototype.parseAndExpression=function(e){for(this.parseComparison(e);this.accept(I,"and");){var t=[];this.parseComparison(t),e.push(new T(G,t)),e.push(le("and"))}};var hs=["==","!=","<","<=",">=",">","in"];R.prototype.parseComparison=function(e){for(this.parseAddSub(e);this.accept(I,hs);){var t=this.current;this.parseAddSub(e),e.push(le(t.value))}};var cs=["+","-","||"];R.prototype.parseAddSub=function(e){for(this.parseTerm(e);this.accept(I,cs);){var t=this.current;this.parseTerm(e),e.push(le(t.value))}};var ds=["*","/","%"];R.prototype.parseTerm=function(e){for(this.parseFactor(e);this.accept(I,ds);){var t=this.current;this.parseFactor(e),e.push(le(t.value))}};R.prototype.parseFactor=function(e){var t=this.tokens.unaryOps;function r(i){return i.value in t}if(this.save(),this.accept(I,r)){if(this.current.value!=="-"&&this.current.value!=="+"){if(this.nextToken.type===se&&this.nextToken.value==="("){this.restore(),this.parseExponential(e);return}else if(this.nextToken.type===Vt||this.nextToken.type===it||this.nextToken.type===$e||this.nextToken.type===se&&this.nextToken.value===")"){this.restore(),this.parseAtom(e);return}}var n=this.current;this.parseFactor(e),e.push(rt(n.value))}else this.parseExponential(e)};R.prototype.parseExponential=function(e){for(this.parsePostfixExpression(e);this.accept(I,"^");)this.parseFactor(e),e.push(le("^"))};R.prototype.parsePostfixExpression=function(e){for(this.parseFunctionCall(e);this.accept(I,"!");)e.push(rt("!"))};R.prototype.parseFunctionCall=function(e){var t=this.tokens.unaryOps;function r(a){return a.value in t}if(this.accept(I,r)){var n=this.current;this.parseAtom(e),e.push(rt(n.value))}else for(this.parseMemberExpression(e);this.accept(se,"(");)if(this.accept(se,")"))e.push(new T(ke,0));else{var i=this.parseArgumentList(e);e.push(new T(ke,i))}};R.prototype.parseArgumentList=function(e){for(var t=0;!this.accept(se,")");)for(this.parseExpression(e),++t;this.accept(it);)this.parseExpression(e),++t;return t};R.prototype.parseMemberExpression=function(e){for(this.parseAtom(e);this.accept(I,".")||this.accept(Fe,"[");){var t=this.current;if(t.value==="."){if(!this.allowMemberAccess)throw new Error('unexpected ".", member access is not permitted');this.expect(Qt),e.push(new T(ge,this.current.value))}else if(t.value==="["){if(!this.tokens.isOperatorEnabled("["))throw new Error('unexpected "[]", arrays are disabled');this.parseExpression(e),this.expect(Fe,"]"),e.push(le("["))}else throw new Error("unexpected symbol: "+t.value)}};function fs(e,t){return Number(e)+Number(t)}function ps(e,t){return e-t}function vs(e,t){return e*t}function gs(e,t){return e/t}function ms(e,t){return e%t}function xs(e,t){return Array.isArray(e)&&Array.isArray(t)?e.concat(t):""+e+t}function ys(e,t){return e===t}function ws(e,t){return e!==t}function bs(e,t){return e>t}function _s(e,t){return e<t}function Es(e,t){return e>=t}function Cs(e,t){return e<=t}function Ms(e,t){return!!(e&&t)}function Ts(e,t){return!!(e||t)}function Ps(e,t){return we(t,e)}function As(e){return(Math.exp(e)-Math.exp(-e))/2}function ks(e){return(Math.exp(e)+Math.exp(-e))/2}function Ss(e){return e===1/0?1:e===-1/0?-1:(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function Fs(e){return e===-1/0?e:Math.log(e+Math.sqrt(e*e+1))}function Is(e){return Math.log(e+Math.sqrt(e*e-1))}function Os(e){return Math.log((1+e)/(1-e))/2}function pr(e){return Math.log(e)*Math.LOG10E}function Rs(e){return-e}function Bs(e){return!e}function Ds(e){return e<0?Math.ceil(e):Math.floor(e)}function $s(e){return Math.random()*(e||1)}function vr(e){return Zt(e+1)}function Ls(e){return isFinite(e)&&e===Math.round(e)}var zs=4.7421875,ft=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22];function Zt(e){var t,r;if(Ls(e)){if(e<=0)return isFinite(e)?1/0:NaN;if(e>171)return 1/0;for(var n=e-2,i=e-1;n>1;)i*=n,n--;return i===0&&(i=1),i}if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*Zt(1-e));if(e>=171.35)return 1/0;if(e>85){var a=e*e,s=a*e,o=s*e,u=o*e;return Math.sqrt(2*Math.PI/e)*Math.pow(e/Math.E,e)*(1+1/(12*e)+1/(288*a)-139/(51840*s)-571/(2488320*o)+163879/(209018880*u)+5246819/(75246796800*u*e))}--e,r=ft[0];for(var h=1;h<ft.length;++h)r+=ft[h]/(e+h);return t=e+zs+.5,Math.sqrt(2*Math.PI)*Math.pow(t,e+.5)*Math.exp(-t)*r}function Ns(e){return Array.isArray(e)?e.length:String(e).length}function gr(){for(var e=0,t=0,r=0;r<arguments.length;r++){var n=Math.abs(arguments[r]),i;t<n?(i=t/n,e=e*i*i+1,t=n):n>0?(i=n/t,e+=i*i):e+=n}return t===1/0?1/0:t*Math.sqrt(e)}function mr(e,t,r){return e?t:r}function Us(e,t){return typeof t>"u"||+t==0?Math.round(e):(e=+e,t=-+t,isNaN(e)||!(typeof t=="number"&&t%1===0)?NaN:(e=e.toString().split("e"),e=Math.round(+(e[0]+"e"+(e[1]?+e[1]-t:-t))),e=e.toString().split("e"),+(e[0]+"e"+(e[1]?+e[1]+t:t))))}function qs(e,t,r){return r&&(r[e]=t),t}function Gs(e,t){return e[t|0]}function Ws(e){return arguments.length===1&&Array.isArray(e)?Math.max.apply(Math,e):Math.max.apply(Math,arguments)}function Xs(e){return arguments.length===1&&Array.isArray(e)?Math.min.apply(Math,e):Math.min.apply(Math,arguments)}function Hs(e,t){if(typeof e!="function")throw new Error("First argument to map is not a function");if(!Array.isArray(t))throw new Error("Second argument to map is not an array");return t.map(function(r,n){return e(r,n)})}function Qs(e,t,r){if(typeof e!="function")throw new Error("First argument to fold is not a function");if(!Array.isArray(r))throw new Error("Second argument to fold is not an array");return r.reduce(function(n,i,a){return e(n,i,a)},t)}function Vs(e,t){if(typeof e!="function")throw new Error("First argument to filter is not a function");if(!Array.isArray(t))throw new Error("Second argument to filter is not an array");return t.filter(function(r,n){return e(r,n)})}function Zs(e,t){if(!(Array.isArray(t)||typeof t=="string"))throw new Error("Second argument to indexOf is not a string or array");return t.indexOf(e)}function Ys(e,t){if(!Array.isArray(t))throw new Error("Second argument to join is not an array");return t.join(e)}function Ks(e){return(e>0)-(e<0)||+e}var xr=1/3;function Js(e){return e<0?-Math.pow(-e,xr):Math.pow(e,xr)}function js(e){return Math.exp(e)-1}function eo(e){return Math.log(1+e)}function to(e){return Math.log(e)/Math.LN2}function oe(e){this.options=e||{},this.unaryOps={sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,sinh:Math.sinh||As,cosh:Math.cosh||ks,tanh:Math.tanh||Ss,asinh:Math.asinh||Fs,acosh:Math.acosh||Is,atanh:Math.atanh||Os,sqrt:Math.sqrt,cbrt:Math.cbrt||Js,log:Math.log,log2:Math.log2||to,ln:Math.log,lg:Math.log10||pr,log10:Math.log10||pr,expm1:Math.expm1||js,log1p:Math.log1p||eo,abs:Math.abs,ceil:Math.ceil,floor:Math.floor,round:Math.round,trunc:Math.trunc||Ds,"-":Rs,"+":Number,exp:Math.exp,not:Bs,length:Ns,"!":vr,sign:Math.sign||Ks},this.binaryOps={"+":fs,"-":ps,"*":vs,"/":gs,"%":ms,"^":Math.pow,"||":xs,"==":ys,"!=":ws,">":bs,"<":_s,">=":Es,"<=":Cs,and:Ms,or:Ts,in:Ps,"=":qs,"[":Gs},this.ternaryOps={"?":mr},this.functions={random:$s,fac:vr,min:Xs,max:Ws,hypot:Math.hypot||gr,pyt:Math.hypot||gr,pow:Math.pow,atan2:Math.atan2,if:mr,gamma:Zt,roundTo:Us,map:Hs,fold:Qs,filter:Vs,indexOf:Zs,join:Ys},this.consts={E:Math.E,PI:Math.PI,true:!0,false:!1}}oe.prototype.parse=function(e){var t=[],r=new R(this,new L(this,e),{allowMemberAccess:this.options.allowMemberAccess});return r.parseExpression(t),r.expect($e,"EOF"),new Y(t,this)};oe.prototype.evaluate=function(e,t){return this.parse(e).evaluate(t)};var Or=new oe;oe.parse=function(e){return Or.parse(e)};oe.evaluate=function(e,t){return Or.parse(e).evaluate(t)};var yr={"+":"add","-":"subtract","*":"multiply","/":"divide","%":"remainder","^":"power","!":"factorial","<":"comparison",">":"comparison","<=":"comparison",">=":"comparison","==":"comparison","!=":"comparison","||":"concatenate",and:"logical",or:"logical",not:"logical","?":"conditional",":":"conditional","=":"assignment","[":"array","()=":"fndef"};function ro(e){return yr.hasOwnProperty(e)?yr[e]:e}oe.prototype.isOperatorEnabled=function(e){var t=ro(e),r=this.options.operators||{};return!(t in r)||!!r[t]};var pe={},Rr={},ie={};Object.defineProperty(ie,"__esModule",{value:!0});ie.loop=ie.conditional=ie.parse=void 0;var no=function e(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(r))r.forEach(function(s){return e(t,s,n,i)});else if(typeof r=="function")r(t,n,i,e);else{var a=Object.keys(r)[0];Array.isArray(r[a])?(i[a]={},e(t,r[a],n,i[a])):i[a]=r[a](t,n,i,e)}return n};ie.parse=no;var io=function(t,r){return function(n,i,a,s){r(n,i,a)&&s(n,t,i,a)}};ie.conditional=io;var ao=function(t,r){return function(n,i,a,s){for(var o=[],u=n.pos;r(n,i,a);){var h={};if(s(n,t,i,h),n.pos===u)break;u=n.pos,o.push(h)}return o}};ie.loop=ao;var N={};Object.defineProperty(N,"__esModule",{value:!0});N.readBits=N.readArray=N.readUnsigned=N.readString=N.peekBytes=N.readBytes=N.peekByte=N.readByte=N.buildStream=void 0;var so=function(t){return{data:t,pos:0}};N.buildStream=so;var Br=function(){return function(t){return t.data[t.pos++]}};N.readByte=Br;var oo=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+t]}};N.peekByte=oo;var at=function(t){return function(r){return r.data.subarray(r.pos,r.pos+=t)}};N.readBytes=at;var lo=function(t){return function(r){return r.data.subarray(r.pos,r.pos+t)}};N.peekBytes=lo;var uo=function(t){return function(r){return Array.from(at(t)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};N.readString=uo;var ho=function(t){return function(r){var n=at(2)(r);return t?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};N.readUnsigned=ho;var co=function(t,r){return function(n,i,a){for(var s=typeof r=="function"?r(n,i,a):r,o=at(t),u=new Array(s),h=0;h<s;h++)u[h]=o(n);return u}};N.readArray=co;var fo=function(t,r,n){for(var i=0,a=0;a<n;a++)i+=t[r+a]&&Math.pow(2,n-a-1);return i},po=function(t){return function(r){for(var n=Br()(r),i=new Array(8),a=0;a<8;a++)i[7-a]=!!(n&1<<a);return Object.keys(t).reduce(function(s,o){var u=t[o];return u.length?s[o]=fo(i,u.index,u.length):s[o]=i[u.index],s},{})}};N.readBits=po;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=ie,r=N,n={blocks:function(p){for(var c=0,g=[],y=p.data.length,b=0,P=(0,r.readByte)()(p);P!==c&&P;P=(0,r.readByte)()(p)){if(p.pos+P>=y){var F=y-p.pos;g.push((0,r.readBytes)(F)(p)),b+=F;break}g.push((0,r.readBytes)(P)(p)),b+=P}for(var B=new Uint8Array(b),E=0,$=0;$<g.length;$++)B.set(g[$],E),E+=g[$].length;return B}},i=(0,t.conditional)({gce:[{codes:(0,r.readBytes)(2)},{byteSize:(0,r.readByte)()},{extras:(0,r.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,r.readUnsigned)(!0)},{transparentColorIndex:(0,r.readByte)()},{terminator:(0,r.readByte)()}]},function(d){var p=(0,r.peekBytes)(2)(d);return p[0]===33&&p[1]===249}),a=(0,t.conditional)({image:[{code:(0,r.readByte)()},{descriptor:[{left:(0,r.readUnsigned)(!0)},{top:(0,r.readUnsigned)(!0)},{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{lct:(0,r.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,t.conditional)({lct:(0,r.readArray)(3,function(d,p,c){return Math.pow(2,c.descriptor.lct.size+1)})},function(d,p,c){return c.descriptor.lct.exists}),{data:[{minCodeSize:(0,r.readByte)()},n]}]},function(d){return(0,r.peekByte)()(d)===44}),s=(0,t.conditional)({text:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{preData:function(p,c,g){return(0,r.readBytes)(g.text.blockSize)(p)}},n]},function(d){var p=(0,r.peekBytes)(2)(d);return p[0]===33&&p[1]===1}),o=(0,t.conditional)({application:[{codes:(0,r.readBytes)(2)},{blockSize:(0,r.readByte)()},{id:function(p,c,g){return(0,r.readString)(g.blockSize)(p)}},n]},function(d){var p=(0,r.peekBytes)(2)(d);return p[0]===33&&p[1]===255}),u=(0,t.conditional)({comment:[{codes:(0,r.readBytes)(2)},n]},function(d){var p=(0,r.peekBytes)(2)(d);return p[0]===33&&p[1]===254}),h=[{header:[{signature:(0,r.readString)(3)},{version:(0,r.readString)(3)}]},{lsd:[{width:(0,r.readUnsigned)(!0)},{height:(0,r.readUnsigned)(!0)},{gct:(0,r.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,r.readByte)()},{pixelAspectRatio:(0,r.readByte)()}]},(0,t.conditional)({gct:(0,r.readArray)(3,function(d,p){return Math.pow(2,p.lsd.gct.size+1)})},function(d,p){return p.lsd.gct.exists}),{frames:(0,t.loop)([i,o,u,a,s],function(d){var p=(0,r.peekByte)()(d);return p===33||p===44})}],m=h;e.default=m})(Rr);var st={};Object.defineProperty(st,"__esModule",{value:!0});st.deinterlace=void 0;var vo=function(t,r){for(var n=new Array(t.length),i=t.length/r,a=function(p,c){var g=t.slice(c*r,(c+1)*r);n.splice.apply(n,[p*r,r].concat(g))},s=[0,4,2,1],o=[8,8,4,2],u=0,h=0;h<4;h++)for(var m=s[h];m<i;m+=o[h])a(m,u),u++;return n};st.deinterlace=vo;var ot={};Object.defineProperty(ot,"__esModule",{value:!0});ot.lzw=void 0;var go=function(t,r,n){var i=4096,a=-1,s=n,o,u,h,m,d,p,c,l,g,y,$,b,v,f,C,_,P=new Array(n),F=new Array(i),B=new Array(i),E=new Array(i+1);for(b=t,u=1<<b,d=u+1,o=u+2,c=a,m=b+1,h=(1<<m)-1,g=0;g<u;g++)F[g]=0,B[g]=g;var $,l,v,f,_,C;for($=l=v=f=_=C=0,y=0;y<s;){if(f===0){if(l<m){$+=r[C]<<l,l+=8,C++;continue}if(g=$&h,$>>=m,l-=m,g>o||g==d)break;if(g==u){m=b+1,h=(1<<m)-1,o=u+2,c=a;continue}if(c==a){E[f++]=B[g],c=g,v=g;continue}for(p=g,g==o&&(E[f++]=v,g=c);g>u;)E[f++]=B[g],g=F[g];v=B[g]&255,E[f++]=v,o<i&&(F[o]=c,B[o]=v,o++,!(o&h)&&o<i&&(m++,h+=o)),c=p}f--,P[_++]=E[f],y++}for(y=_;y<s;y++)P[y]=0;return P};ot.lzw=go;Object.defineProperty(pe,"__esModule",{value:!0});var Dr=pe.decompressFrames=pe.decompressFrame=$r=pe.parseGIF=void 0,mo=_o(Rr),xo=ie,yo=N,wo=st,bo=ot;function _o(e){return e&&e.__esModule?e:{default:e}}var Eo=function(t){var r=new Uint8Array(t);return(0,xo.parse)((0,yo.buildStream)(r),mo.default)},$r=pe.parseGIF=Eo,Co=function(t){for(var r=t.pixels.length,n=new Uint8ClampedArray(r*4),i=0;i<r;i++){var a=i*4,s=t.pixels[i],o=t.colorTable[s]||[0,0,0];n[a]=o[0],n[a+1]=o[1],n[a+2]=o[2],n[a+3]=s!==t.transparentIndex?255:0}return n},Lr=function(t,r,n){if(!t.image){console.warn("gif frame does not have associated image.");return}var i=t.image,a=i.descriptor.width*i.descriptor.height,s=(0,bo.lzw)(i.data.minCodeSize,i.data.blocks,a);i.descriptor.lct.interlaced&&(s=(0,wo.deinterlace)(s,i.descriptor.width));var o={pixels:s,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?o.colorTable=i.lct:o.colorTable=r,t.gce&&(o.delay=(t.gce.delay||10)*10,o.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(o.transparentIndex=t.gce.transparentColorIndex)),n&&(o.patch=Co(o)),o};pe.decompressFrame=Lr;var Mo=function(t,r){return t.frames.filter(function(n){return n.image}).map(function(n){return Lr(n,t.gct,r)})};Dr=pe.decompressFrames=Mo;function To(e){const t=$r(e),r=Dr(t,!0),n=[];for(let i of r){const{width:a,height:s,left:o,top:u}=i.dims,h=document.createElement("canvas"),m=h.getContext("2d");h.width=a,h.height=s,m.putImageData(new ImageData(i.patch,a,s),o,u),n.push(h)}return n}async function Po(e){const t=new ImageDecoder({data:e,type:"image/gif"});await t.tracks.ready,await t.completed;const r=t.tracks.selectedTrack.frameCount,n=[];for(let i=0;i<r;i++){const a=(await t.decode({frameIndex:i})).image;a.width=a.codedWidth,a.height=a.codedHeight,n.push(xt(a)),a.close()}return n}async function Ao(e){const t=await e.arrayBuffer();return window.ImageDecoder?Po(t):To(t)}const ko={frameCount:0,startTime:0};class So{constructor(t,r=1){x(this,"blob");x(this,"video");x(this,"length");x(this,"frames");x(this,"initPromise");this.blob=t,this.length=r,this.initPromise=this.init()}setFrameCount(t){return this.length=t,this.initPromise=this.init(),this}async init(){this.frames=[];const t=document.createElement("video");t.src=URL.createObjectURL(this.blob)+"#t=0.0001",await new Promise(i=>t.addEventListener("loadeddata",i));const{startTime:r}=ko,n=(this.video.duration-r)/this.length;for(let i=0;i<this.length;i++)this.video.currentTime=i*n+r,await new Promise(a=>this.video.oncanplay=a),this.frames[i]=xt(this.video)}async getFrames(){return await this.initPromise,this.frames}}async function Fo(e,t){if(t=t,t<0)throw new Error(`video frame count ${t} must >1`);return new So(e,t).getFrames()}const Io={type:void 0,pos:void 0,posType:"ZOOM",crop:null,cropType:"NONE",style:[],fit:"FILL",round:!1,rotate:!1,avatarOnTop:!0,antialias:!0,resampling:!1,angle:0,opacity:1};function Oo(e){if(e.compiled)return e;const t={...Io,...e},r=t.pos;let n;switch(t.posType){case"ZOOM":n=typeof r[0]!="object"?[me(r,4)]:r.map(i=>me(i,4)),t.pos=n.map(i=>i.map(a=>typeof a=="number"?a:oe.parse(a)));break;case"DEFORM":try{n=r.map(i=>me(i,5).map(a=>me(a,2)))}catch{n=[me(r,5).map(a=>me(a,2))]}t.pos=n.map(i=>i.map(a=>a.map(s=>typeof s=="number"?s:oe.parse(s))));break}return t.compiled=!0,t}class Ro extends Yr{constructor(r,n){super();x(this,"type");x(this,"template");x(this,"originBlob");x(this,"frames");x(this,"pos");x(this,"initPromise");x(this,"deformer");if(this.template=Oo(r),this.type=r.type,this.originBlob=n[this.type.toString().toLowerCase()],!this.originBlob)throw new Error(`no ${this.type} image`);this.initPromise=this.init()}async init(){await this.loadFile(),await this.setCrop(),await this.setStyle(),await this.setRound(),await this.setPos()}async loadFile(){const r=this.originBlob;if(r.type.startsWith("video/"))this.frames=await Fo(r,this.template.pos.length);else if(!r.type.startsWith("image"))throw console.log(r),new Error("不支持的格式: "+r.type);r.type==="image/gif"?this.frames=await Ao(r):this.frames=[await Cr(r)]}setCrop(){const r=this.template.cropType;r!=="NONE"&&(this.frames=this.frames.map(n=>Kr(n,this.template.crop,r==="PERCENT")))}setStyle(){for(const r of this.template.style)switch(r){case"FLIP":this.frames=this.frames.map(Jr);break;case"MIRROR":this.frames=this.frames.map(is);break;case"GRAY":this.frames=this.frames.map(jr);break;case"BINARIZATION":this.frames=this.frames.map(as);break;default:throw new Error("unknown style "+r)}}setRound(){this.template.round&&(this.frames=this.frames.map(ss))}async setPos(){switch(this.template.posType){case"ZOOM":this.pos=this.template.pos.map(r=>r.map(this.evalExpression));break;case"DEFORM":this.deformer=new ns,this.pos=this.template.pos.map(r=>r.map(n=>n.map(this.evalExpression)));break}}evalExpression(r){return typeof r=="number"?r:r.evaluate({height:this.frames[0].height,width:this.frames[0].width})}getFrame(r){return r<this.frames.length?this.frames[r]:this.frames.at(-1)}getPos(r){return r<this.pos.length?this.pos[r]:this.pos.at(-1)}async getLength(){return await this.initPromise,{posLength:this.pos.length,frameLength:this.frames.length}}async draw(r,n=0){await this.initPromise;let i=this.getFrame(n);const a=this.getPos(n);let{angle:s,opacity:o,rotate:u}=this.template;switch(r.globalAlpha=o,u&&(s+=360/a.length*n),this.template.posType){case"ZOOM":switch(s&&(i=os(i,s)),this.template.fit){case"FILL":r.drawImage(i,...a);break;default:const[h,m,d,p]=a,c=Math[this.template.fit==="CONTAIN"?"min":"max"](d/i.width,p/i.height),g=i.width*c,y=i.height*c,b=h+(d-g)/2,P=m+(p-y)/2;r.drawImage(i,b,P,g,y);break}break;case"DEFORM":this.deformer.draw(r,i,a);break}r.globalAlpha=1}get onTop(){return this.template.avatarOnTop}async getSize(){await this.initPromise;const r=this.frames[0];return{width:r.width,height:r.height}}}class Yt{constructor(t){x(this,"arr");x(this,"initPromise");x(this,"topAvatars",[]);x(this,"bottomAvatars",[]);x(this,"sizeMap",Object.create(null));x(this,"maxLength");this.arr=t,this.initPromise=this.init()}async init(){return Promise.all(this.arr.map(async(t,r)=>{t.onTop?this.topAvatars.push(t):this.bottomAvatars.push(t);const n=await t.getSize();this.sizeMap[`avatar${r}Width`]=n.width,this.sizeMap[`avatar${r}Height`]=n.height,this.maxLength=await t.getLength()}))}async getSizeMap(){return await this.initPromise,this.sizeMap}async getMaxLength(){return await this.initPromise,this.maxLength||{posLength:0,frameLength:void 0}}static createFrom(t,r){return new Yt(t.map(n=>new Ro(n,r)))}}const pt=e=>{e.stopPropagation(),e.preventDefault()};var W,Me,Te,qe,Ke;class Bo{constructor(t){x(this,"type");k(this,W,void 0);k(this,Me,void 0);k(this,Te,void 0);k(this,qe,void 0);k(this,Ke,new Promise(t=>U(this,qe,t)));this.type=t,U(this,W,document.createElement("label")),w(this,W).setAttribute("type",t),w(this,W).addEventListener("dragenter",pt,!1),w(this,W).addEventListener("dragover",pt,!1),w(this,W).addEventListener("drop",n=>{pt(n),this.setFiles(n.dataTransfer.files)},!1);const r=document.createElement("input");r.type="file",r.accept="image/*",r.addEventListener("change",()=>this.setFiles(r.files)),w(this,W).appendChild(r)}render(){return w(this,W)}set onchange(t){U(this,Te,t)}get file(){return w(this,Me)}async waitFile(){return await w(this,Ke),w(this,Me)}setFiles(t){let r=t.item(0);if(r){if(!r.type.startsWith("image"))throw new Error("仅支持图片格式");w(this,W).style.backgroundImage=`url(${URL.createObjectURL(r)})`,w(this,W).style.backgroundSize="cover",U(this,Me,r),w(this,qe).call(this),w(this,Te)&&w(this,Te).call(this,this)}}}W=new WeakMap,Me=new WeakMap,Te=new WeakMap,qe=new WeakMap,Ke=new WeakMap;const wr=["FROM","TO","BOT","GROUP"];var K,Ge,re,mt;class zr{constructor(){k(this,K,void 0);k(this,Ge,new Map(wr.map(t=>[t,new Bo(t)])));k(this,re,void 0);k(this,mt,void 0);U(this,K,document.createElement("div")),w(this,K).className="avatar-uploader",w(this,K).innerHTML="No Avatar"}set types(t){if(!t||t.length===0){w(this,K).innerHTML="No Avatar";return}w(this,K).innerHTML="",U(this,re,t.map(r=>w(this,Ge).get(r))),w(this,K).append(...w(this,re).map(r=>r.render()))}render(){const t=document.createElement("div");return t.append(De("Upload Avatar"),w(this,K)),t}get ready(){var t;return(t=w(this,re))!=null&&t.length?w(this,re).some(r=>r.file):!0}set onchange(t){for(const r of w(this,Ge).values())r.onchange=()=>this.ready&&t(this)}get data(){var r;const t={};if(!((r=w(this,re))!=null&&r.length))return t;for(const n of w(this,re))t[n.type.toLowerCase()]=n.file;return t}}K=new WeakMap,Ge=new WeakMap,re=new WeakMap,mt=new WeakMap,x(zr,"types",wr);const Do=6;class Kt{constructor(t){x(this,"hasTemplate",!1);x(this,"width");x(this,"height");x(this,"color");x(this,"frames");x(this,"loadingPromise");t&&([this.width,this.height]=t.size.map(r=>typeof r=="number"?r:oe.parse(r)),this.color=Mr(this.color),this.hasTemplate=!0)}set url(t){this.loadingPromise=Kt.fetchImages(t).then(r=>this.frames=r)}set images(t){this.frames=t}async generate(t){if(await this.loadingPromise,this.frames)return this.hasTemplate?this.frames.map(r=>{const n=this.getCtx(t);return n.drawImage(r,0,0),n.canvas}):this.frames;if(this.hasTemplate)return[this.getCtx(t).canvas];throw new Error("can not load background")}getCtx(t){const r=document.createElement("canvas"),n=a=>typeof a=="number"?a:a.evaluate(t);r.width=n(this.width),r.height=n(this.height);const i=r.getContext("2d");return i.fillStyle=this.color,i.fillRect(0,0,r.width,r.height),i}static async fetchImages(t){let r=!1;const n=new Set,i=[];let a=0;for(;!r;){n.size>=Do&&await Promise.race(n);const s=a++,u=fetch(`${t}/${s}.png`).then(h=>h.blob()).then(Cr).then(h=>{i[s]=h}).catch(()=>r=!0).then(()=>n.delete(u));n.add(u)}return await Promise.all(n),i}}const $o=document.createElement("canvas"),V=$o.getContext("2d");V.textBaseline="alphabetic";V.textAlign="left";V.font="plain 12px FFF";const br={text:"default text",color:"#191919",pos:[10,10],size:12,font:"arial",style:"PLAIN",wrap:"NONE",align:"LEFT",position:["LEFT","TOP"],strokeColor:"",strokeSize:0},ce=class{constructor(t=br){x(this,"template");x(this,"textStyle");x(this,"pixelSize");x(this,"width");x(this,"height");x(this,"drawOptions");this.template={...br,...t},this.pixelSize=t.size*ce.dpiScale,this.template.color=Mr(this.template.color),this.textStyle=this.template.style==="PLAIN"?"normal":this.template.style.toLowerCase(),this.template.font=this.template.font.replace(" ","-"),this.template.text=this.template.text.replace(ce.TEXT_VAR_REGEX,(r,n)=>n),this.setDrawOptions()}set size(t){this.pixelSize=t*ce.dpiScale,this.setDrawOptions()}setDrawOptions(){let{font:t,style:r,wrap:n}=this.template;V.font=`${this.textStyle} ${this.pixelSize}px ${t.replace(" ","-")}`,this.width=0,this.height=0;const i=this.template.text.split(`
`),a=[];let s=0;switch(n){case"NONE":{for(const o of i){const[u,h,m,d]=this.getPosition(V.measureText(o),s++);this.width=Math.max(this.width,m),this.height=d,a.push([o,u,h])}break}case"BREAK":{const o=this.template.pos[2]||ce.DEFAULT_MAX_WIDTH;let u,h;for(let m of i)if(u=V.measureText(m),h=u.width,h>o){let d,p,c;for(;h>o;){for(d=0,p=0,c="";p<o;)d++,c=m.substr(0,d),p=V.measureText(m.substr(0,d)).width;d--,c=c.substr(0,d);const g=d;if(m.substr(d,1)!=" "){for(;m.substr(d,1)!=" "&&d!=0;)d--;d==0&&(d=g),c=m.substr(0,d)}m=m.substr(d);const[y,b,P,F]=this.getPosition(V.measureText(c),s++);this.width=Math.max(this.width,P),this.height=F,h=P,a.push([c,y,b])}}else{const[d,p,c,g]=this.getPosition(u,s++);this.width=Math.max(this.width,c),this.height=g,a.push([m,d,p])}break}case"ZOOM":{const o=this.template.pos[2]||ce.DEFAULT_MAX_WIDTH;let u=Math.max(...i.map(d=>V.measureText(d).width));const m=o/u*this.pixelSize;this.pixelSize=m,V.font=`${this.textStyle} ${m}px ${t}`;for(const d of i){const[p,c,g,y]=this.getPosition(V.measureText(d),s++);this.width=Math.max(this.width,g),this.height=y,a.push([d,p,c])}break}}return this.drawOptions=a,a}getPosition(t,r){const[n,i]=this.template.pos,a=t.width,s=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,o=s*r,u=s*(r+1);switch(this.template.align){case"LEFT":return[n,i+o,a,u];case"RIGHT":return[n-a,i+o,a,u];case"CENTER":return[n-a/2,i+o,a,u]}}get size(){return this.template.size}draw(t){let{text:r,color:n,pos:i,align:a,size:s,font:o,strokeColor:u,strokeSize:h}=this.template;t.font=`${this.textStyle} ${this.pixelSize}px ${o}`,t.fillStyle=n,t.textBaseline=a==="CENTER"?"middle":"alphabetic";for(let m of this.drawOptions)t.fillText(...m);if(u&&h){t.strokeStyle=u,t.lineWidth=h;for(let m of this.drawOptions)t.strokeText(...m)}}};let ye=ce;x(ye,"TEXT_VAR_REGEX",/\$txt\d+\[(.*?)]/g),x(ye,"DEFAULT_MAX_WIDTH",300),x(ye,"dpiScale",(window.devicePixelRatio||1)*96/72);class Jt{constructor(t){x(this,"arr");x(this,"cacheCtx");x(this,"topAvatars",[]);x(this,"bottomAvatars",[]);x(this,"sizeMap",Object.create(null));x(this,"maxLength");if(this.arr=t,!(t!=null&&t.length))return;let r=0;for(const n of t)this.sizeMap[`text${r}Width`]=n.width,this.sizeMap[`text${r}Height`]=n.height,r++}draw(t){for(const r of this.arr)r.draw(t)}setCacheArea(t,r){const n=document.createElement("canvas");n.width=t,n.height=r,this.cacheCtx=n.getContext("2d"),this.drawCache()}drawCache(){this.draw(this.cacheCtx)}updateCache(){this.cacheCtx.clearRect(0,0,this.cacheCtx.canvas.width,this.cacheCtx.canvas.height),this.drawCache()}getCachedCanvas(){return this.cacheCtx.canvas}static createFrom(t){return new Jt(t.map(r=>new ye(r)))}}const Lo={type:void 0,avatar:[],text:[],background:null,delay:65,alias:[],inRandomList:!0,reverse:!1,hidden:!1};class zo{constructor(t,r){x(this,"type");x(this,"template");x(this,"initPromise");x(this,"avatarList");x(this,"backgroundModel");this.template={...Lo,...t},this.type=t.type,this.backgroundModel=new Kt(this.template.background),r&&(this.background=r),this.initPromise=this.init()}set background(t){if(typeof t=="string")this.backgroundModel.url=t;else if(Array.isArray(t))this.backgroundModel.images=t;else throw new Error("unknown background",t)}async init(){}async generate(t){const r=Yt.createFrom(this.template.avatar,t),n=Jt.createFrom(this.template.text),i=await r.getSizeMap(),a=await this.backgroundModel.generate(i);return new No(this.template,a,r,n)}}class No{constructor(t,r,n,i){x(this,"template");x(this,"canvas");x(this,"ctx");x(this,"backgrounds");x(this,"avatars");x(this,"texts");x(this,"length");x(this,"intervalId");x(this,"initPromise");x(this,"userDelay");x(this,"i",0);x(this,"framesCache",[]);x(this,"resolveFramesCachedPromise");x(this,"framesCachedPromise",new Promise(t=>this.resolveFramesCachedPromise=t));const a=document.createElement("canvas");this.canvas=a,a.width=r[0].width,a.height=r[0].height,this.ctx=a.getContext("2d"),this.template=t,this.backgrounds=r,this.avatars=n,this.texts=i,this.texts.setCacheArea(this.canvas.width,this.canvas.height),this.initPromise=this.init()}async init(){const{posLength:t,frameLength:r=this.backgrounds.length}=await this.avatars.getMaxLength();this.length=this.template.type==="IMG"?r:this.backgrounds.length}async play(){if(await this.stop(),this.template.reverse)return this.playReverse();this.intervalId=setInterval(()=>{this.drawCache(this.i++%this.length)},Math.abs(this.delay))}playReverse(){this.intervalId=setInterval(()=>{this.drawCache(this.length-1-this.i++%this.length)},Math.abs(this.delay))}async stop(){await this.initPromise,clearInterval(this.intervalId)}set delay(t){if(!t){this.stop();return}this.userDelay=t,t>0?this.stop().then(()=>this.play()):this.stop().then(()=>this.playReverse())}get delay(){return this.userDelay||this.template.delay}getBackground(t){return t<this.backgrounds.length?this.backgrounds[t]:this.backgrounds.at(-1)}async getFrames(){return await this.framesCachedPromise,this.framesCache}async drawCache(t){if(this.framesCache[t]){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.framesCache[t],0,0),this.ctx.drawImage(this.texts.getCachedCanvas(),0,0);return}await this.draw(t),this.framesCache[t]=xt(this.canvas,!0),this.framesCache.length===this.length&&this.resolveFramesCachedPromise()}async draw(t){await this.initPromise,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(const r of this.avatars.bottomAvatars)await r.draw(this.ctx,t);this.ctx.drawImage(this.getBackground(t),0,0);for(const r of this.avatars.topAvatars)await r.draw(this.ctx,t);this.ctx.drawImage(this.texts.getCachedCanvas(),0,0)}get settingObject(){const t=this;return this.length===1?{}:{set delay(r){t.delay=r},get delay(){return t.delay},play:()=>this.play(),stop:()=>this.stop()}}}var Pe,ne,de,Ae,fe,Je,Nr,je,Ur;class Uo{constructor(){k(this,Je);k(this,je);k(this,Pe,document.createElement("div"));k(this,ne,document.createElement("div"));k(this,de,document.createElement("canvas"));k(this,Ae,void 0);k(this,fe,void 0);w(this,ne).className="result-area",w(this,Pe).append(De("Result"),w(this,ne)),We(this,Je,Nr).call(this),w(this,ne).appendChild(w(this,de)),U(this,fe,new _r(w(this,ne))),w(this,fe).show()}set canvas(t){w(this,ne).innerHTML="",U(this,de,t),w(this,ne).appendChild(t),We(this,je,Ur).call(this),w(this,fe).hide()}set setting(t){w(this,Ae)&&w(this,Ae).remove(),U(this,Ae,t),w(this,Pe).appendChild(t)}showLoading(){w(this,fe).show()}render(){return w(this,Pe)}}Pe=new WeakMap,ne=new WeakMap,de=new WeakMap,Ae=new WeakMap,fe=new WeakMap,Je=new WeakSet,Nr=function(){w(this,de).classList.add("hide")},je=new WeakSet,Ur=function(){w(this,de).classList.remove("hide")};class Le{constructor(t){x(this,"obj");x(this,"container");this.obj=t,this.container=document.createElement("div"),this.container.classList.add("setting-container")}createInput(t,r){const n=document.createElement("div"),i=document.createElement("span");i.textContent=t,n.appendChild(i);let a=typeof r;switch(a){case"object":const s=new Le(r).render();n.appendChild(s);break;case"function":const o=document.createElement("button");o.textContent=t,o.addEventListener("click",async()=>{o.disabled=!0,await r(),o.disabled=!1}),n.appendChild(o);break;default:const u=document.createElement("input");let h=()=>this.obj[t]=u.value;switch(typeof r){case"number":h=()=>this.obj[t]=parseFloat(u.value);break;case"string":a=/^#([A-Fa-f0-9]{6})$/.test(r)?"color":"text";break;case"boolean":a="checkbox",h=()=>this.obj[t]=u.value==="true";break}u.type=a,u.value=r.toString(),u.addEventListener("change",h),n.appendChild(u);break}return n}render(){for(const[t,r]of Object.entries(this.obj)){const n=this.createInput(t,r);this.container.appendChild(n)}return this.container}}var qr={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(e,t){(function(r,n){e.exports=n()})(self,function(){return(()=>{var r={"./node_modules/events/events.js":s=>{var o,u=typeof Reflect=="object"?Reflect:null,h=u&&typeof u.apply=="function"?u.apply:function(l,v,f){return Function.prototype.apply.call(l,v,f)};o=u&&typeof u.ownKeys=="function"?u.ownKeys:Object.getOwnPropertySymbols?function(l){return Object.getOwnPropertyNames(l).concat(Object.getOwnPropertySymbols(l))}:function(l){return Object.getOwnPropertyNames(l)};var m=Number.isNaN||function(l){return l!=l};function d(){d.init.call(this)}s.exports=d,s.exports.once=function(l,v){return new Promise(function(f,_){function C(A){l.removeListener(v,M),_(A)}function M(){typeof l.removeListener=="function"&&l.removeListener("error",C),f([].slice.call(arguments))}$(l,v,M,{once:!0}),v!=="error"&&function(A,z,q){typeof A.on=="function"&&$(A,"error",z,{once:!0})}(l,C)})},d.EventEmitter=d,d.prototype._events=void 0,d.prototype._eventsCount=0,d.prototype._maxListeners=void 0;var p=10;function c(l){if(typeof l!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof l)}function g(l){return l._maxListeners===void 0?d.defaultMaxListeners:l._maxListeners}function y(l,v,f,_){var C,M,A,z;if(c(f),(M=l._events)===void 0?(M=l._events=Object.create(null),l._eventsCount=0):(M.newListener!==void 0&&(l.emit("newListener",v,f.listener?f.listener:f),M=l._events),A=M[v]),A===void 0)A=M[v]=f,++l._eventsCount;else if(typeof A=="function"?A=M[v]=_?[f,A]:[A,f]:_?A.unshift(f):A.push(f),(C=g(l))>0&&A.length>C&&!A.warned){A.warned=!0;var q=new Error("Possible EventEmitter memory leak detected. "+A.length+" "+String(v)+" listeners added. Use emitter.setMaxListeners() to increase limit");q.name="MaxListenersExceededWarning",q.emitter=l,q.type=v,q.count=A.length,z=q,console&&console.warn&&console.warn(z)}return l}function b(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function P(l,v,f){var _={fired:!1,wrapFn:void 0,target:l,type:v,listener:f},C=b.bind(_);return C.listener=f,_.wrapFn=C,C}function F(l,v,f){var _=l._events;if(_===void 0)return[];var C=_[v];return C===void 0?[]:typeof C=="function"?f?[C.listener||C]:[C]:f?function(M){for(var A=new Array(M.length),z=0;z<A.length;++z)A[z]=M[z].listener||M[z];return A}(C):E(C,C.length)}function B(l){var v=this._events;if(v!==void 0){var f=v[l];if(typeof f=="function")return 1;if(f!==void 0)return f.length}return 0}function E(l,v){for(var f=new Array(v),_=0;_<v;++_)f[_]=l[_];return f}function $(l,v,f,_){if(typeof l.on=="function")_.once?l.once(v,f):l.on(v,f);else{if(typeof l.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof l);l.addEventListener(v,function C(M){_.once&&l.removeEventListener(v,C),f(M)})}}Object.defineProperty(d,"defaultMaxListeners",{enumerable:!0,get:function(){return p},set:function(l){if(typeof l!="number"||l<0||m(l))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+l+".");p=l}}),d.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},d.prototype.setMaxListeners=function(l){if(typeof l!="number"||l<0||m(l))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+l+".");return this._maxListeners=l,this},d.prototype.getMaxListeners=function(){return g(this)},d.prototype.emit=function(l){for(var v=[],f=1;f<arguments.length;f++)v.push(arguments[f]);var _=l==="error",C=this._events;if(C!==void 0)_=_&&C.error===void 0;else if(!_)return!1;if(_){var M;if(v.length>0&&(M=v[0]),M instanceof Error)throw M;var A=new Error("Unhandled error."+(M?" ("+M.message+")":""));throw A.context=M,A}var z=C[l];if(z===void 0)return!1;if(typeof z=="function")h(z,this,v);else{var q=z.length,Wr=E(z,q);for(f=0;f<q;++f)h(Wr[f],this,v)}return!0},d.prototype.addListener=function(l,v){return y(this,l,v,!1)},d.prototype.on=d.prototype.addListener,d.prototype.prependListener=function(l,v){return y(this,l,v,!0)},d.prototype.once=function(l,v){return c(v),this.on(l,P(this,l,v)),this},d.prototype.prependOnceListener=function(l,v){return c(v),this.prependListener(l,P(this,l,v)),this},d.prototype.removeListener=function(l,v){var f,_,C,M,A;if(c(v),(_=this._events)===void 0)return this;if((f=_[l])===void 0)return this;if(f===v||f.listener===v)--this._eventsCount==0?this._events=Object.create(null):(delete _[l],_.removeListener&&this.emit("removeListener",l,f.listener||v));else if(typeof f!="function"){for(C=-1,M=f.length-1;M>=0;M--)if(f[M]===v||f[M].listener===v){A=f[M].listener,C=M;break}if(C<0)return this;C===0?f.shift():function(z,q){for(;q+1<z.length;q++)z[q]=z[q+1];z.pop()}(f,C),f.length===1&&(_[l]=f[0]),_.removeListener!==void 0&&this.emit("removeListener",l,A||v)}return this},d.prototype.off=d.prototype.removeListener,d.prototype.removeAllListeners=function(l){var v,f,_;if((f=this._events)===void 0)return this;if(f.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):f[l]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete f[l]),this;if(arguments.length===0){var C,M=Object.keys(f);for(_=0;_<M.length;++_)(C=M[_])!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(v=f[l])=="function")this.removeListener(l,v);else if(v!==void 0)for(_=v.length-1;_>=0;_--)this.removeListener(l,v[_]);return this},d.prototype.listeners=function(l){return F(this,l,!0)},d.prototype.rawListeners=function(l){return F(this,l,!1)},d.listenerCount=function(l,v){return typeof l.listenerCount=="function"?l.listenerCount(v):B.call(l,v)},d.prototype.listenerCount=B,d.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]}},"./dist/gif.worker.js.txt":(s,o,u)=>{u.r(o),u.d(o,{default:()=>h});const h=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":s=>{const o=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),h=o.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],m=h[1]==="ie"&&document.documentMode,d={name:h[1]==="version"?h[3]:h[1],version:m||parseFloat(h[1]==="opera"&&h[4]?h[4]:h[2]),platform:{name:o.match(/ip(?:ad|od|hone)/)?"ios":(o.match(/(?:webos|android)/)||u.match(/mac|win|linux/)||["other"])[0]}};d[d.name]=!0,d[d.name+parseInt(d.version,10)]=!0,d.platform[d.platform.name]=!0,s.exports=d},"?569f":()=>{}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var u=n[s]={exports:{}};return r[s](u,u.exports,i),u.exports}i.d=(s,o)=>{for(var u in o)i.o(o,u)&&!i.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:o[u]})},i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>m});var s=i("./dist/gif.worker.js.txt");const{EventEmitter:o}=i("./node_modules/events/events.js"),u=i("./src/browser.js");i("?569f");var h=function(){let d,p;return(h=class extends o{static initClass(){d={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},p={delay:500,copy:!1,dispose:-1}}constructor(c){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(c);for(let g in d){const y=d[g];this.options[g]==null&&(this.options[g]=y)}this.workerURL=window.URL.createObjectURL(new Blob([s.default]))}setOption(c,g){if(this.options[c]=g,this._canvas!=null&&["width","height"].includes(c))return this._canvas[c]=g}setOptions(c){return(()=>{const g=[];for(let y of Object.keys(c||{})){const b=c[y];g.push(this.setOption(y,b))}return g})()}addFrame(c,g){g==null&&(g={});const y={};y.transparent=this.options.transparent;for(let b in p)y[b]=g[b]||p[b];if(this.options.width==null&&this.setOption("width",c.width),this.options.height==null&&this.setOption("height",c.height),typeof ImageData<"u"&&ImageData!==null&&c instanceof ImageData)y.data=c.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&c instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&c instanceof WebGLRenderingContext)g.copy?y.data=this.getContextData(c):y.context=c;else{if(c.childNodes==null)throw new Error("Invalid image");g.copy?y.data=this.getImageData(c):y.image=c}return this.frames.push(y)}render(){let c;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let y,b;const P=[];for(c=0,b=this.frames.length,y=0<=b;y?c<b:c>b;y?c++:c--)P.push(null);return P})();const g=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let y,b;for(c=0,b=g,y=0<=b;y?c<b:c>b;y?c++:c--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const c=this.activeWorkers.shift();if(c==null)break;this.log("killing active worker"),c.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const c=Math.min(this.options.workers,this.frames.length);return function(g,y,b){let P=[],F=g<y,B=y;for(let E=g;F?E<B:E>B;F?E++:E--)P.push(E);return P}(this.freeWorkers.length,c).forEach(g=>{this.log(`spawning worker ${g}`);const y=new Worker(this.workerURL);return y.onmessage=b=>(this.activeWorkers.splice(this.activeWorkers.indexOf(y),1),this.freeWorkers.push(y),this.frameFinished(b.data)),this.freeWorkers.push(y)}),c}frameFinished(c){if(this.log(`frame ${c.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[c.index]=c,this.options.globalPalette===!0&&(this.options.globalPalette=c.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let g=1,y=this.freeWorkers.length,b=1<=y;b?g<y:g>y;b?g++:g--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let c,g=0;for(c of Array.from(this.imageParts))g+=(c.data.length-1)*c.pageSize+c.cursor;g+=c.pageSize-c.cursor,this.log(`rendering finished - filesize ${Math.round(g/1e3)}kb`);const y=new Uint8Array(g);let b=0;for(c of Array.from(this.imageParts))for(let F=0;F<c.data.length;F++){const B=c.data[F];y.set(B,b),F===c.data.length-1?b+=c.cursor:b+=c.pageSize}const P=new Blob([y],{type:"image/gif"});return this.emit("finished",P,y)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const c=this.frames[this.nextFrame++],g=this.freeWorkers.shift(),y=this.getTask(c);return this.log(`starting frame ${y.index+1} of ${this.frames.length}`),this.activeWorkers.push(g),g.postMessage(y)}getContextData(c){return c.getImageData(0,0,this.options.width,this.options.height).data}getImageData(c){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const g=this._canvas.getContext("2d");return g.fillStyle=this.options.background,g.fillRect(0,0,this.options.width,this.options.height),g.drawImage(c,0,0),this.getContextData(g)}getTask(c){const g=this.frames.indexOf(c),y={index:g,last:g===this.frames.length-1,delay:c.delay,dispose:c.dispose,transparent:c.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:u.name==="chrome"};if(c.data!=null)y.data=c.data;else if(c.context!=null)y.data=this.getContextData(c.context);else{if(c.image==null)throw new Error("Invalid frame");y.data=this.getImageData(c.image)}return y}log(...c){if(this.options.debug)return console.log(...Array.from(c||[]))}}).initClass(),h}();const m=h})(),a})()})})(qr);var qo=qr.exports;const Go=en(qo),Gr={workers:2,quality:10,background:"#ffffff",dither:!1};async function Wo(e,t){const r=new Go(Gr);return e.forEach(n=>r.addFrame(n,{delay:t})),new Promise(n=>{r.on("finished",n),r.render()})}class Ze{constructor(t){x(this,"initPromise");x(this,"viewer");x(this,"frames");this.viewer=t,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async renderAsync(){await this.initPromise;const t=document.createElement("div");if(this.frames.length!==1){const n=new Le(Gr);t.appendChild(n.render())}const r=new Le({download:async()=>await this.download()});return t.append(r.render()),t}async download(){if(!this.frames)return;if(this.frames.length===1){const i=`${this.viewer.template.key}.png`;Ze.downloadBlob(await new Promise(a=>this.frames[0].toBlob(s=>a(s))),i);return}const t=this.viewer.delay;console.log(t);const r=await Wo(t>0?this.frames:this.frames.reverse(),Math.abs(t)||65),n=`${this.viewer.template.key}.gif`;Ze.downloadBlob(r,n)}static downloadBlob(t,r){const n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=r,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}}const Xo="index.json",Ho="./data/xmmt.dituon.petpet";class Qo{constructor(t){x(this,"urls");x(this,"urlSet",new Set);x(this,"initPromise");x(this,"idMap");x(this,"fonts");x(this,"fontPromises",[]);this.urls=t,this.initPromise=this.init()}async init(){const t=new Map,r=new Map;await Promise.all(this.urls.map(async n=>{const i=await fetch(`${n}/${Xo}`).then(u=>u.json()),{dataPath:a=Ho,dataList:s,fontList:o}=i;for(const u of s)t.has(u)||t.set(u,`${n}/${a}/${u}`);for(const u of o)r.has(u)||r.set(u,`${n}/${a}/fonts/${u}`);this.urlSet.add(n)})),this.idMap=t;for(let[n,i]of r){n=n.split(".")[0],console.log(n,i);const a=new FontFace(n,`url(${i})`);this.fontPromises.push(a.load().then(s=>{document.fonts.add(s)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const Vo={server:[window.location.origin+window.location.pathname,"https://raw.githubusercontent.com/Dituon/petpet/main"],alternateFont:["MiSans-Bold","sans-serif"].join(",")};class Zo{constructor(t){x(this,"appElement");x(this,"templateChooser");x(this,"avatarUploader");x(this,"resultArea");x(this,"inputElement",document.createElement("div"));x(this,"outputElement",document.createElement("div"));x(this,"prevTemplate");x(this,"initPromise");this.appElement=document.getElementById(t),this.appElement.classList.add("petpet-app"),this.templateChooser=new Zr,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new zr,this.avatarUploader.onchange=()=>this.update(),this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render()),this.resultArea=new Uo,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){const t=new Qo(Vo.server),r=await t.getIdMap(),n=[];for(const[i,a]of r.entries())n.push({key:i,url:a});this.templateChooser.templates=n,(await t.getUrlSet()).size||this.templateChooser.loading.error()}async update(){await this.initPromise;const t=this.templateChooser.template||await this.templateChooser.showModal();if(this.prevTemplate!==t&&(this.avatarUploader.types=[...new Set(t.avatar.map(o=>o.type))]),!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const n=await new zo(t,t.url).generate(this.avatarUploader.data);await n.play(),this.resultArea.canvas=n.canvas;const i=document.createElement("div");this.resultArea.setting=i;const a=new Le(n.settingObject);i.appendChild(a.render());const s=new Ze(n);i.appendChild(await s.renderAsync()),this.prevTemplate=t}}new Zo("app");
