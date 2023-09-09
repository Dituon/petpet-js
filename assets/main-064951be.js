var Ze=Object.defineProperty;var Ke=(b,e,a)=>e in b?Ze(b,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):b[e]=a;var _=(b,e,a)=>(Ke(b,typeof e!="symbol"?e+"":e,a),a),Pe=(b,e,a)=>{if(!e.has(b))throw TypeError("Cannot "+a)};var h=(b,e,a)=>(Pe(b,e,"read from private field"),a?a.call(b):e.get(b)),P=(b,e,a)=>{if(e.has(b))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(b):e.set(b,a)},T=(b,e,a,f)=>(Pe(b,e,"write to private field"),f?f.call(b,a):e.set(b,a),a);var ye=(b,e,a)=>(Pe(b,e,"access private method"),a);import"./app-d2e00ec3.js";import{c as de,m as X,j as Je,k as Be,n as et,o as tt,S as pe,p as ue,l as nt}from"./petpet-model-b5e9bc07.js";import{i as it}from"./readme-e506e057.js";const rt="index.json",st="index.map.json",at="./data/xmmt.dituon.petpet";class ot{constructor(e){_(this,"urls");_(this,"urlSet",new Set);_(this,"initPromise");_(this,"idMap");_(this,"lengthMap",new Map);_(this,"aliasMap",new Map);_(this,"fonts");_(this,"fontPromises",[]);this.urls=[...new Set(e)],this.initPromise=this.init()}async init(){const e=new Map,a=new Map;await Promise.allSettled(this.urls.map(async f=>{const v=await fetch(`${f}/${rt}`).then(k=>k.json()),{dataPath:I=at,dataList:M,fontList:F}=v;try{const k=await fetch(`${f}/${st}`).then(L=>L.json());Object.entries(k.length).forEach(([L,B])=>this.lengthMap.set(L,B)),Object.entries(k.alias).forEach(([L,B])=>this.aliasMap.set(L,B))}catch{console.warn(`cannot find index.map.json in ${f} `)}for(const k of M)e.has(k)||e.set(k,`${f}/${I}/${k}`);for(const k of F)a.has(k)||a.set(k,`${f}/${I}/fonts/${k}`);this.urlSet.add(f)})),this.idMap=e;for(let[f,v]of a){f=f.split(".")[0],console.log(f,v);const I=new FontFace(f,`url(${v})`);this.fontPromises.push(I.load().then(M=>{document.fonts.add(M)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getLengthMap(){return await this.initPromise,this.lengthMap}async getPreviewList(){const e=await this.getIdMap(),a=[];for(const[f,v]of e.entries())a.push({key:f,url:v,alias:this.aliasMap.get(f)});return a}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const xe=()=>document.createElement("div");var fe,Y,_e,Re;class Oe{constructor(e){P(this,_e);P(this,fe,void 0);P(this,Y,void 0);T(this,fe,e)}show(){if(h(this,Y))return;const e=xe();e.className="loading",e.append(xe(),xe(),xe()),h(this,fe).appendChild(e),e.addEventListener("click",ye(this,_e,Re)),T(this,Y,e)}hide(){h(this,Y)&&(h(this,Y).remove(),T(this,Y,null))}error(){let e="加载失败";throw h(this,Y).innerHTML=`<span>${e}</span>`,new Error(e)}}fe=new WeakMap,Y=new WeakMap,_e=new WeakSet,Re=function(e){e.stopPropagation()};class Ge{constructor(){_(this,"element");_(this,"showing");_(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(e){this.element.onclick=e}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}var N,me,ve,se,J,ee;const re=class{constructor(e){P(this,N,document.createElement("div"));P(this,me,void 0);P(this,ve,new Map);P(this,se,void 0);P(this,J,void 0);P(this,ee,0);_(this,"mask",new Ge);h(this,N).classList.add("modal-select","hide",re.ICON_SIZE_LIST[h(this,ee)]),h(this,N).addEventListener("contextmenu",a=>{a.preventDefault(),this.changeIconSize()}),document.body.appendChild(h(this,N)),this.mask.onclick=()=>{h(this,J)&&h(this,J).call(this,null),this.hide()},e&&(this.templates=e)}set templates(e){T(this,me,e);const a=document.createElement("div");a.className="index-list",T(this,se,a);for(const v of e){const I=document.createElement("div"),M=document.createElement("img");M.src=`${v.url}/0.png`,M.alt=v.key,M.onerror=()=>I.remove(),M.loading="lazy";const F=de(v.key);v.alias&&v.alias.forEach(k=>F.appendChild(de(k,"span"))),I.append(M,F),I.addEventListener("click",async k=>{h(this,J).call(this,await De(v)),this.hide()}),h(this,ve).set(v,I),a.appendChild(I)}const f=document.createElement("input");f.placeholder=`🔍 ${X().typeToSearch} / ${X().rightClickOrLongPress}`,f.addEventListener("change",v=>{this.search(f.value.trim())}),h(this,N).append(f,a)}hide(){this.mask.hide(),h(this,N).classList.add("hide")}async show(){return h(this,me)?(this.mask.show(),h(this,N)&&h(this,N).classList.remove("hide"),new Promise(e=>T(this,J,e))):null}changeIconSize(){const e=(h(this,ee)+1)%re.ICON_SIZE_LIST.length;h(this,N).classList.replace(re.ICON_SIZE_LIST[h(this,ee)],re.ICON_SIZE_LIST[e]),T(this,ee,e)}search(e){h(this,se).innerHTML="";for(let[a,f]of h(this,ve).entries()){const{key:v,alias:I}=a;!v.includes(e)&&!(I&&I.find(M=>M.includes(e)))||h(this,se).appendChild(f)}}};let Ee=re;N=new WeakMap,me=new WeakMap,ve=new WeakMap,se=new WeakMap,J=new WeakMap,ee=new WeakMap,_(Ee,"ICON_SIZE_LIST",["big","medium","small"]);async function De(b){if(b.type)return b;const e=await fetch(b.url+"/data.json").then(a=>a.json());return{...b,...e}}var U,ae,ge,oe;class lt{constructor(e){P(this,U,document.createElement("div"));P(this,ae,void 0);P(this,ge,void 0);_(this,"loading",new Oe(h(this,U)));P(this,oe,void 0);_(this,"template");if(T(this,ae,new Ee(e)),h(this,U).classList.add("template-chooser"),h(this,U).textContent=X().notSelected,h(this,U).addEventListener("click",async()=>{const a=await this.showModal();h(this,oe)&&h(this,oe).call(this,a)}),!e){this.loading.show();return}this.templates=e}set templates(e){this.loading.hide(),T(this,ge,e),h(this,ae).templates=e}async setTemplate(e){if(!e)return;const a=h(this,ge).find(f=>f.key===e);if(!a)throw new Error(`key ${e} not found`);h(this,U).textContent=a.key,this.template=await De(a)}get templateKey(){var e;return(e=this.template)==null?void 0:e.key}render(){const e=document.createElement("div");return e.append(de(X().selectTemplate),h(this,U)),e}async showModal(){const e=await h(this,ae).show();return e&&(h(this,U).textContent=e.key,this.template=e),e??this.template}set onchange(e){T(this,oe,e)}}U=new WeakMap,ae=new WeakMap,ge=new WeakMap,oe=new WeakMap;var Ne={exports:{}};(function(b,e){(function(a,f){b.exports=f()})(Je,function(){(function(){for(var p=0,r=["ms","moz","webkit","o"],t=0;t<r.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[r[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[t]+"CancelAnimationFrame"]||window[r[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,s){var d=new Date().getTime(),n=Math.max(0,16-(d-p)),o=window.setTimeout(function(){i(d+n)},n);return p=d+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(i){clearTimeout(i)})})(),function(){if(typeof window.CustomEvent=="function")return!1;function p(r,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t.bubbles,t.cancelable,t.detail),i}p.prototype=window.Event.prototype,window.CustomEvent=p}(),function(p){try{return new CustomEvent("test"),!1}catch{}function r(t,i){i=i||{bubbles:!1,cancelable:!1};var s=document.createEvent("MouseEvent");return s.initMouseEvent(t,i.bubbles,i.cancelable,p,0,0,0,0,0,!1,!1,!1,!1,0,null),s}r.prototype=Event.prototype,p.MouseEvent=r}(window);var a=function(p,r){if(!(p instanceof r))throw new TypeError("Cannot call a class as a function")},f=function(){function p(r,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}return function(r,t,i){return t&&p(r.prototype,t),i&&p(r,i),r}}(),v=function p(r,t,i){r===null&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,t);if(s===void 0){var d=Object.getPrototypeOf(r);return d===null?void 0:p(d,t,i)}else{if("value"in s)return s.value;var n=s.get;return n===void 0?void 0:n.call(i)}},I=function(p,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);p.prototype=Object.create(r&&r.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(p,r):p.__proto__=r)},M=function(p,r){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:p},F=function(){function p(r,t){var i=[],s=!0,d=!1,n=void 0;try{for(var o=r[Symbol.iterator](),l;!(s=(l=o.next()).done)&&(i.push(l.value),!(t&&i.length===t));s=!0);}catch(u){d=!0,n=u}finally{try{!s&&o.return&&o.return()}finally{if(d)throw n}}return i}return function(r,t){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return p(r,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=function p(r,t,i,s){a(this,p);var d=this;this.position=r,this.constraints=t,this.cursor=i,this.eventBus=s,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=i,this.el.addEventListener("mousedown",n);function n(u){u.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",l),d.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:d}}))}function o(u){u.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",l),d.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:d}}))}function l(u){u.stopPropagation(),d.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:u.clientX,mouseY:u.clientY}}))}},L=function(){function p(r,t,i,s){a(this,p),this.x1=r,this.y1=t,this.x2=i,this.y2=s}return f(p,[{key:"set",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return this.x1=t??this.x1,this.y1=i??this.y1,this.x2=s??this.x2,this.y2=d??this.y2,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],d=this.x1+this.width()*s[0],n=this.y1+this.height()*s[1];return this.x1=d-t*s[0],this.y1=n-i*s[1],this.x2=this.x1+t,this.y2=this.y1+i,this}},{key:"scale",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],s=this.width()*t,d=this.height()*t;return this.resize(s,d,i),this}},{key:"move",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=this.width(),d=this.height();return t=t===null?this.x1:t,i=i===null?this.y1:i,this.x1=t,this.y1=i,this.x2=t+s,this.y2=i+d,this}},{key:"getRelativePoint",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.width()*t[0],s=this.height()*t[1];return[i,s]}},{key:"getAbsolutePoint",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.x1+this.width()*t[0],s=this.y1+this.height()*t[1];return[i,s]}},{key:"constrainToRatio",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"height";if(t!==null){switch(this.width(),this.height(),s){case"height":this.resize(this.width(),this.width()*t,i);break;case"width":this.resize(this.height()*1/t,this.height(),i);break;default:this.resize(this.width(),this.width()*t,i)}return this}}},{key:"constrainToBoundary",value:function(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],d=this.getAbsolutePoint(s),n=F(d,2),o=n[0],l=n[1],u=o,g=l,m=t-o,x=i-l,C=-2*s[0]+1,S=-2*s[1]+1,z=null,j=null;switch(C){case-1:z=u;break;case 0:z=Math.min(u,m)*2;break;case 1:z=m;break}switch(S){case-1:j=g;break;case 0:j=Math.min(g,x)*2;break;case 1:j=x;break}if(this.width()>z){var A=z/this.width();this.scale(A,s)}if(this.height()>j){var O=j/this.height();this.scale(O,s)}return this}},{key:"constrainToSize",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0,0],o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null;if(o&&(o>1?(t=i*1/o,d=d*o):o<1&&(i=t*o,s=d*1/o)),t&&this.width()>t){var l=t,u=o===null?this.height():i;this.resize(l,u,n)}if(i&&this.height()>i){var g=o===null?this.width():t,m=i;this.resize(g,m,n)}if(s&&this.width()<s){var x=s,C=o===null?this.height():d;this.resize(x,C,n)}if(d&&this.height()<d){var S=o===null?this.width():s,z=d;this.resize(S,z,n)}return this}}]),p}();function B(p){p.addEventListener("touchstart",E),p.addEventListener("touchend",E),p.addEventListener("touchmove",E)}function E(p){p.preventDefault();var r=p.changedTouches[0],t={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};r.target.dispatchEvent(new MouseEvent(t[p.type],{bubbles:!0,cancelable:!0,view:window,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY}))}var G=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],c=function(){function p(r,t){var i=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(a(this,p),this.options=p.parseOptions(t||{}),!r.nodeName&&(r=document.querySelector(r),r==null))throw"Unable to find element.";if(!r.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:r.parentNode,element:r},s||(r.width===0||r.height===0?r.onload=function(){i.initialize(r)}:this.initialize(r))}return f(p,[{key:"initialize",value:function(t){this.createDOM(t),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,this.options.onInitialize!==null&&this.options.onInitialize(this)}},{key:"createDOM",value:function(t){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,B(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",t.getAttribute("src")),this.imageEl.setAttribute("alt",t.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var i=document.createElement("div");i.className="croppr-handleContainer",this.handles=[];for(var s=0;s<G.length;s++){var d=new k(G[s].position,G[s].constraints,G[s].cursor,this.eventBus);this.handles.push(d),i.appendChild(d.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(i),this.containerEl.appendChild(this.cropperEl),t.parentElement.replaceChild(this.containerEl,t)}},{key:"setImage",value:function(t){var i=this;return this.imageEl.onload=function(){i.box=i.initializeBox(i.options),i.redraw()},this.imageEl.src=t,this.imageClippedEl.src=t,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(t){var i=t.startSize.width,s=t.startSize.height,d=new L(0,0,i,s);d.constrainToRatio(t.aspectRatio,[.5,.5]);var n=t.minSize,o=t.maxSize;d.constrainToSize(o.width,o.height,n.width,n.height,[.5,.5],t.aspectRatio);var l=this.cropperEl.offsetWidth,u=this.cropperEl.offsetHeight;d.constrainToBoundary(l,u,[.5,.5]);var g=this.cropperEl.offsetWidth/2-d.width()/2,m=this.cropperEl.offsetHeight/2-d.height()/2;return d.move(g,m),d}},{key:"redraw",value:function(){var t=this,i=Math.round(this.box.width()),s=Math.round(this.box.height()),d=Math.round(this.box.x1),n=Math.round(this.box.y1),o=Math.round(this.box.x2),l=Math.round(this.box.y2);window.requestAnimationFrame(function(){t.regionEl.style.transform="translate("+d+"px, "+n+"px)",t.regionEl.style.width=i+"px",t.regionEl.style.height=s+"px",t.imageClippedEl.style.clip="rect("+n+"px, "+o+"px, "+l+"px, "+d+"px)";for(var u=t.box.getAbsolutePoint([.5,.5]),g=u[0]-t.cropperEl.offsetWidth/2>>31,m=u[1]-t.cropperEl.offsetHeight/2>>31,x=(g^m)+m+m+4,C=-2*x+8,S=0;S<t.handles.length;S++){var z=t.handles[S],j=z.el.offsetWidth,A=z.el.offsetHeight,O=d+i*z.position[0]-j/2,$=n+s*z.position[1]-A/2;z.el.style.transform="translate("+Math.round(O)+"px, "+Math.round($)+"px)",z.el.style.zIndex=C==S?5:4}})}},{key:"attachHandlerEvents",value:function(){var t=this.eventBus;t.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),t.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),t.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var t=this.eventBus;this.regionEl.addEventListener("mousedown",i),t.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),t.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),t.addEventListener("regionend",this.onRegionMoveEnd.bind(this));function i(n){n.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",s),t.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}function s(n){n.stopPropagation(),t.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}function d(n){n.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",s),t.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}}},{key:"attachOverlayEvents",value:function(){var t=4,i=this,s=null;this.overlayEl.addEventListener("mousedown",d);function d(l){l.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",n);var u=i.cropperEl.getBoundingClientRect(),g=l.clientX-u.left,m=l.clientY-u.top;s=i.box,i.box=new L(g,m,g+1,m+1),i.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:i.handles[t]}}))}function n(l){l.stopPropagation(),i.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}function o(l){if(l.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",n),i.box.width()===1&&i.box.height()===1){i.box=s;return}i.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}}},{key:"onHandleMoveStart",value:function(t){var i=t.detail.handle,s=[1-i.position[0],1-i.position[1]],d=this.box.getAbsolutePoint(s),n=F(d,2),o=n[0],l=n[1];this.activeHandle={handle:i,originPoint:s,originX:o,originY:l},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(t){var i=t.detail,s=i.mouseX,d=i.mouseY,n=this.cropperEl.getBoundingClientRect();s=s-n.left,d=d-n.top,s<0?s=0:s>n.width&&(s=n.width),d<0?d=0:d>n.height&&(d=n.height);var o=this.activeHandle.originPoint.slice(),l=this.activeHandle.originX,u=this.activeHandle.originY,g=this.activeHandle.handle,m=g.constraints[0]===1,x=g.constraints[1]===1,C=g.constraints[2]===1,S=g.constraints[3]===1,z=(S||x)&&(m||C),j=S||x?l:this.box.x1,A=S||x?l:this.box.x2,O=m||C?u:this.box.y1,$=m||C?u:this.box.y2;j=S?s:j,A=x?s:A,O=m?d:O,$=C?d:$;var ce=!1,ie=!1;if((S||x)&&(ce=S?s>l:s<l),(m||C)&&(ie=m?d>u:d<u),ce){var D=j;j=A,A=D,o[0]=1-o[0]}if(ie){var $e=O;O=$,$=$e,o[1]=1-o[1]}var Q=new L(j,O,A,$);if(this.options.aspectRatio){var Fe=this.options.aspectRatio,Le=!1;z?Le=d>Q.y1+Fe*Q.width()||d<Q.y2-Fe*Q.width():(m||C)&&(Le=!0);var Ye=Le?"width":"height";Q.constrainToRatio(Fe,o,Ye)}var Te=this.options.minSize,je=this.options.maxSize;Q.constrainToSize(je.width,je.height,Te.width,Te.height,o,this.options.aspectRatio);var Ve=this.cropperEl.offsetWidth,Qe=this.cropperEl.offsetHeight;Q.constrainToBoundary(Ve,Qe,o),this.box=Q,this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(t){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(t){var i=t.detail,s=i.mouseX,d=i.mouseY,n=this.cropperEl.getBoundingClientRect();s=s-n.left,d=d-n.top,this.currentMove={offsetX:s-this.box.x1,offsetY:d-this.box.y1},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(t){var i=t.detail,s=i.mouseX,d=i.mouseY,n=this.currentMove,o=n.offsetX,l=n.offsetY,u=this.cropperEl.getBoundingClientRect();s=s-u.left,d=d-u.top,this.box.move(s-o,d-l),this.box.x1<0&&this.box.move(0,null),this.box.x2>u.width&&this.box.move(u.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>u.height&&this.box.move(null,u.height-this.box.height()),this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(t){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(t===null&&(t=this.options.returnMode),t=="real"){var i=this.imageEl.naturalWidth,s=this.imageEl.naturalHeight,d=this.imageEl.getBoundingClientRect(),n=d.width,o=d.height,l=i/n,u=s/o;return{x:Math.round(this.box.x1*l),y:Math.round(this.box.y1*u),width:Math.round(this.box.width()*l),height:Math.round(this.box.height()*u)}}else if(t=="ratio"){var g=this.imageEl.getBoundingClientRect(),m=g.width,x=g.height;return{x:w(this.box.x1/m,3),y:w(this.box.y1/x,3),width:w(this.box.width()/m,3),height:w(this.box.height()/x,3)}}else if(t=="raw")return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(t){var i={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},s=null;t.aspectRatio!==void 0&&(typeof t.aspectRatio=="number"?s=t.aspectRatio:t.aspectRatio instanceof Array&&(s=t.aspectRatio[1]/t.aspectRatio[0]));var d=null;t.maxSize!==void 0&&t.maxSize!==null&&(d={width:t.maxSize[0]||null,height:t.maxSize[1]||null,unit:t.maxSize[2]||"px"});var n=null;t.minSize!==void 0&&t.minSize!==null&&(n={width:t.minSize[0]||null,height:t.minSize[1]||null,unit:t.minSize[2]||"px"});var o=null;t.startSize!==void 0&&t.startSize!==null&&(o={width:t.startSize[0]||null,height:t.startSize[1]||null,unit:t.startSize[2]||"%"});var l=null;typeof t.onInitialize=="function"&&(l=t.onInitialize);var u=null;typeof t.onCropStart=="function"&&(u=t.onCropStart);var g=null;typeof t.onCropEnd=="function"&&(g=t.onCropEnd);var m=null;typeof t.onUpdate=="function"&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),m=t.onUpdate),typeof t.onCropMove=="function"&&(m=t.onCropMove);var x=null;if(t.returnMode!==void 0){var C=t.returnMode.toLowerCase();if(["real","ratio","raw"].indexOf(C)===-1)throw"Invalid return mode.";x=C}var S=function(A){for(var O=A.offsetWidth,$=A.offsetHeight,ce=["maxSize","minSize","startSize"],ie=0;ie<ce.length;ie++){var D=ce[ie];this[D]!==null&&(this[D].unit=="%"&&(this[D].width!==null&&(this[D].width=this[D].width/100*O),this[D].height!==null&&(this[D].height=this[D].height/100*$)),delete this[D].unit)}},z=function(A,O){return A!==null?A:O};return{aspectRatio:z(s,i.aspectRatio),maxSize:z(d,i.maxSize),minSize:z(n,i.minSize),startSize:z(o,i.startSize),returnMode:z(x,i.returnMode),onInitialize:z(l,i.onInitialize),onCropStart:z(u,i.onCropStart),onCropMove:z(m,i.onCropMove),onCropEnd:z(g,i.onCropEnd),convertToPixels:S}}}]),p}();function w(p,r){return+(Math.round(p+"e"+r)+"e-"+r)}var y=function(p){I(r,p);function r(t,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return a(this,r),M(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t,i,s))}return f(r,[{key:"getValue",value:function(i){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"getValue",this).call(this,i)}},{key:"setImage",value:function(i){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"setImage",this).call(this,i)}},{key:"destroy",value:function(){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(i,s){return this.box.move(i,s),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(i,s){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[.5,.5];return this.box.resize(i,s,d),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.5,.5];return this.box.scale(i,s),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}}]),r}(c);return y})})(Ne);var ht=Ne.exports;const dt=Be(ht);var W;class ct{constructor(e){P(this,W,document.createElement("div"));_(this,"croppr");_(this,"mask",new Ge);_(this,"callback");_(this,"imageFile");_(this,"initPromise");h(this,W).classList.add("avatar-cropper"),this.imageFile=e,this.mask.onclick=()=>this.cancel(),this.initPromise=this.init()}async init(){const e=await et(this.imageFile);h(this,W).appendChild(e),document.body.append(h(this,W)),this.croppr=new dt(e,{startSize:[90,60],minSize:[1,1,"px"],returnMode:"real"});const a=document.createElement("div");a.className="button-group";const f=document.createElement("div");f.innerText="Cancel",f.addEventListener("click",()=>this.cancel());const v=document.createElement("div");v.innerText="Save",v.addEventListener("click",()=>this.save()),a.append(f,v),h(this,W).appendChild(a)}cancel(){this.callback(null),this.hide()}save(){const{x:e,y:a,width:f,height:v}=this.croppr.getValue("real");this.callback([e,a,e+f,a+v]),this.hide()}hide(){h(this,W).classList.add("hide"),this.mask.hide()}async show(){return await this.initPromise,this.mask.show(),h(this,W).classList.remove("hide"),new Promise(e=>this.callback=e)}async destroy(){await this.initPromise,h(this,W).remove(),this.croppr.destroy(),this.mask.destroy()}}W=new WeakMap;const ze=b=>{b.stopPropagation(),b.preventDefault()};var R,Z,K,be,Ce;class ut{constructor(e){_(this,"type");P(this,R,document.createElement("label"));P(this,Z,void 0);P(this,K,void 0);P(this,be,void 0);P(this,Ce,new Promise(e=>T(this,be,e)));_(this,"cropPos");this.type=e,h(this,R).title=X().rightClickOrLongPress,h(this,R).setAttribute("type",e),h(this,R).addEventListener("dragenter",ze,!1),h(this,R).addEventListener("dragover",ze,!1),h(this,R).addEventListener("drop",f=>{ze(f),this.setFiles(f.dataTransfer.files)},!1),h(this,R).addEventListener("contextmenu",async f=>{if(f.preventDefault(),!h(this,Z))return;const v=this.cropPos,I=new ct(h(this,Z));this.cropPos=await I.show(),await I.destroy(),this.cropPos!==v&&h(this,K)&&h(this,K).call(this,this)});const a=document.createElement("input");a.type="file",a.accept="image/*",a.addEventListener("change",()=>this.setFiles(a.files)),h(this,R).appendChild(a)}render(){return h(this,R)}set onchange(e){T(this,K,e)}get file(){return h(this,Z)}async waitFile(){return await h(this,Ce),h(this,Z)}setFiles(e){let a=e.item(0);if(a){if(!a.type.startsWith("image"))throw new Error("仅支持图片格式");h(this,R).style.backgroundImage=`url(${URL.createObjectURL(a)})`,h(this,R).style.backgroundSize="cover",T(this,Z,a),h(this,be).call(this),this.cropPos=void 0,h(this,K)&&h(this,K).call(this,this)}}}R=new WeakMap,Z=new WeakMap,K=new WeakMap,be=new WeakMap,Ce=new WeakMap;const Ae=["FROM","TO","BOT","GROUP"];var H,we,q;class qe{constructor(){P(this,H,void 0);P(this,we,new Map(Ae.map(e=>[e,new ut(e)])));P(this,q,void 0);T(this,H,document.createElement("div")),h(this,H).className="avatar-uploader",h(this,H).innerHTML=X().noAvatar}set types(e){if(!e||e.length===0){h(this,H).innerHTML=X().noAvatar;return}h(this,H).innerHTML="",T(this,q,e.map(a=>h(this,we).get(a))),h(this,H).append(...h(this,q).map(a=>a.render()))}render(){const e=document.createElement("div");return e.append(de(X().uploadAvatar),h(this,H)),e}get ready(){var e;return(e=h(this,q))!=null&&e.length?h(this,q).some(a=>a.file):!0}set onchange(e){for(const a of h(this,we).values())a.onchange=()=>this.ready&&e(this)}get data(){var a;const e={};if(!((a=h(this,q))!=null&&a.length))return e;for(const f of h(this,q))e[f.type.toLowerCase()]=f.file;return e}get extraTemplate(){var f;const e={};let a=!1;if(!((f=h(this,q))!=null&&f.length))return e;for(const v of h(this,q))a=a||!!v.cropPos,e[v.type.toLowerCase()]={cropType:tt.PIXEL,crop:v.cropPos};return a?e:void 0}}H=new WeakMap,we=new WeakMap,q=new WeakMap,_(qe,"types",Ae);class pt{constructor(){_(this,"textModels");_(this,"textDomList",document.createElement("div"));_(this,"settingDom",new pe({add:()=>this.addTextModel()}).render());this.textDomList.appendChild(this.settingDom)}set texts(e){this.textModels=e,this.textDomList.innerHTML="",this.textDomList.appendChild(this.settingDom);for(let a of this.textModels.texts)this.addTextModel(a)}addTextModel(e=this.textModels.addTextModel()){const a=new pe(e.settingObject,e.settingAttributes,`Text - ${this.textModels.texts.length}`);this.textDomList.appendChild(a.render())}render(){const e=document.createElement("div");return e.append(de(X().setText),this.textDomList),e}}var Ue={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(b,e){(function(a,f){b.exports=f()})(self,function(){return(()=>{var a={"./node_modules/events/events.js":M=>{var F,k=typeof Reflect=="object"?Reflect:null,L=k&&typeof k.apply=="function"?k.apply:function(n,o,l){return Function.prototype.apply.call(n,o,l)};F=k&&typeof k.ownKeys=="function"?k.ownKeys:Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:function(n){return Object.getOwnPropertyNames(n)};var B=Number.isNaN||function(n){return n!=n};function E(){E.init.call(this)}M.exports=E,M.exports.once=function(n,o){return new Promise(function(l,u){function g(x){n.removeListener(o,m),u(x)}function m(){typeof n.removeListener=="function"&&n.removeListener("error",g),l([].slice.call(arguments))}d(n,o,m,{once:!0}),o!=="error"&&function(x,C,S){typeof x.on=="function"&&d(x,"error",C,{once:!0})}(n,g)})},E.EventEmitter=E,E.prototype._events=void 0,E.prototype._eventsCount=0,E.prototype._maxListeners=void 0;var G=10;function c(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}function w(n){return n._maxListeners===void 0?E.defaultMaxListeners:n._maxListeners}function y(n,o,l,u){var g,m,x,C;if(c(l),(m=n._events)===void 0?(m=n._events=Object.create(null),n._eventsCount=0):(m.newListener!==void 0&&(n.emit("newListener",o,l.listener?l.listener:l),m=n._events),x=m[o]),x===void 0)x=m[o]=l,++n._eventsCount;else if(typeof x=="function"?x=m[o]=u?[l,x]:[x,l]:u?x.unshift(l):x.push(l),(g=w(n))>0&&x.length>g&&!x.warned){x.warned=!0;var S=new Error("Possible EventEmitter memory leak detected. "+x.length+" "+String(o)+" listeners added. Use emitter.setMaxListeners() to increase limit");S.name="MaxListenersExceededWarning",S.emitter=n,S.type=o,S.count=x.length,C=S,console&&console.warn&&console.warn(C)}return n}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function r(n,o,l){var u={fired:!1,wrapFn:void 0,target:n,type:o,listener:l},g=p.bind(u);return g.listener=l,u.wrapFn=g,g}function t(n,o,l){var u=n._events;if(u===void 0)return[];var g=u[o];return g===void 0?[]:typeof g=="function"?l?[g.listener||g]:[g]:l?function(m){for(var x=new Array(m.length),C=0;C<x.length;++C)x[C]=m[C].listener||m[C];return x}(g):s(g,g.length)}function i(n){var o=this._events;if(o!==void 0){var l=o[n];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}function s(n,o){for(var l=new Array(o),u=0;u<o;++u)l[u]=n[u];return l}function d(n,o,l,u){if(typeof n.on=="function")u.once?n.once(o,l):n.on(o,l);else{if(typeof n.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n);n.addEventListener(o,function g(m){u.once&&n.removeEventListener(o,g),l(m)})}}Object.defineProperty(E,"defaultMaxListeners",{enumerable:!0,get:function(){return G},set:function(n){if(typeof n!="number"||n<0||B(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");G=n}}),E.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},E.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||B(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},E.prototype.getMaxListeners=function(){return w(this)},E.prototype.emit=function(n){for(var o=[],l=1;l<arguments.length;l++)o.push(arguments[l]);var u=n==="error",g=this._events;if(g!==void 0)u=u&&g.error===void 0;else if(!u)return!1;if(u){var m;if(o.length>0&&(m=o[0]),m instanceof Error)throw m;var x=new Error("Unhandled error."+(m?" ("+m.message+")":""));throw x.context=m,x}var C=g[n];if(C===void 0)return!1;if(typeof C=="function")L(C,this,o);else{var S=C.length,z=s(C,S);for(l=0;l<S;++l)L(z[l],this,o)}return!0},E.prototype.addListener=function(n,o){return y(this,n,o,!1)},E.prototype.on=E.prototype.addListener,E.prototype.prependListener=function(n,o){return y(this,n,o,!0)},E.prototype.once=function(n,o){return c(o),this.on(n,r(this,n,o)),this},E.prototype.prependOnceListener=function(n,o){return c(o),this.prependListener(n,r(this,n,o)),this},E.prototype.removeListener=function(n,o){var l,u,g,m,x;if(c(o),(u=this._events)===void 0)return this;if((l=u[n])===void 0)return this;if(l===o||l.listener===o)--this._eventsCount==0?this._events=Object.create(null):(delete u[n],u.removeListener&&this.emit("removeListener",n,l.listener||o));else if(typeof l!="function"){for(g=-1,m=l.length-1;m>=0;m--)if(l[m]===o||l[m].listener===o){x=l[m].listener,g=m;break}if(g<0)return this;g===0?l.shift():function(C,S){for(;S+1<C.length;S++)C[S]=C[S+1];C.pop()}(l,g),l.length===1&&(u[n]=l[0]),u.removeListener!==void 0&&this.emit("removeListener",n,x||o)}return this},E.prototype.off=E.prototype.removeListener,E.prototype.removeAllListeners=function(n){var o,l,u;if((l=this._events)===void 0)return this;if(l.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):l[n]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete l[n]),this;if(arguments.length===0){var g,m=Object.keys(l);for(u=0;u<m.length;++u)(g=m[u])!=="removeListener"&&this.removeAllListeners(g);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(o=l[n])=="function")this.removeListener(n,o);else if(o!==void 0)for(u=o.length-1;u>=0;u--)this.removeListener(n,o[u]);return this},E.prototype.listeners=function(n){return t(this,n,!0)},E.prototype.rawListeners=function(n){return t(this,n,!1)},E.listenerCount=function(n,o){return typeof n.listenerCount=="function"?n.listenerCount(o):i.call(n,o)},E.prototype.listenerCount=i,E.prototype.eventNames=function(){return this._eventsCount>0?F(this._events):[]}},"./dist/gif.worker.js.txt":(M,F,k)=>{k.r(F),k.d(F,{default:()=>L});const L=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":M=>{const F=navigator.userAgent.toLowerCase(),k=navigator.platform.toLowerCase(),L=F.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],B=L[1]==="ie"&&document.documentMode,E={name:L[1]==="version"?L[3]:L[1],version:B||parseFloat(L[1]==="opera"&&L[4]?L[4]:L[2]),platform:{name:F.match(/ip(?:ad|od|hone)/)?"ios":(F.match(/(?:webos|android)/)||k.match(/mac|win|linux/)||["other"])[0]}};E[E.name]=!0,E[E.name+parseInt(E.version,10)]=!0,E.platform[E.platform.name]=!0,M.exports=E},"?569f":()=>{}},f={};function v(M){var F=f[M];if(F!==void 0)return F.exports;var k=f[M]={exports:{}};return a[M](k,k.exports,v),k.exports}v.d=(M,F)=>{for(var k in F)v.o(F,k)&&!v.o(M,k)&&Object.defineProperty(M,k,{enumerable:!0,get:F[k]})},v.o=(M,F)=>Object.prototype.hasOwnProperty.call(M,F),v.r=M=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})};var I={};return(()=>{v.r(I),v.d(I,{default:()=>B});var M=v("./dist/gif.worker.js.txt");const{EventEmitter:F}=v("./node_modules/events/events.js"),k=v("./src/browser.js");v("?569f");var L=function(){let E,G;return(L=class extends F{static initClass(){E={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},G={delay:500,copy:!1,dispose:-1}}constructor(c){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(c);for(let w in E){const y=E[w];this.options[w]==null&&(this.options[w]=y)}this.workerURL=window.URL.createObjectURL(new Blob([M.default]))}setOption(c,w){if(this.options[c]=w,this._canvas!=null&&["width","height"].includes(c))return this._canvas[c]=w}setOptions(c){return(()=>{const w=[];for(let y of Object.keys(c||{})){const p=c[y];w.push(this.setOption(y,p))}return w})()}addFrame(c,w){w==null&&(w={});const y={};y.transparent=this.options.transparent;for(let p in G)y[p]=w[p]||G[p];if(this.options.width==null&&this.setOption("width",c.width),this.options.height==null&&this.setOption("height",c.height),typeof ImageData<"u"&&ImageData!==null&&c instanceof ImageData)y.data=c.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&c instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&c instanceof WebGLRenderingContext)w.copy?y.data=this.getContextData(c):y.context=c;else{if(c.childNodes==null)throw new Error("Invalid image");w.copy?y.data=this.getImageData(c):y.image=c}return this.frames.push(y)}render(){let c;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let y,p;const r=[];for(c=0,p=this.frames.length,y=0<=p;y?c<p:c>p;y?c++:c--)r.push(null);return r})();const w=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let y,p;for(c=0,p=w,y=0<=p;y?c<p:c>p;y?c++:c--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const c=this.activeWorkers.shift();if(c==null)break;this.log("killing active worker"),c.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const c=Math.min(this.options.workers,this.frames.length);return function(w,y,p){let r=[],t=w<y,i=y;for(let s=w;t?s<i:s>i;t?s++:s--)r.push(s);return r}(this.freeWorkers.length,c).forEach(w=>{this.log(`spawning worker ${w}`);const y=new Worker(this.workerURL);return y.onmessage=p=>(this.activeWorkers.splice(this.activeWorkers.indexOf(y),1),this.freeWorkers.push(y),this.frameFinished(p.data)),this.freeWorkers.push(y)}),c}frameFinished(c){if(this.log(`frame ${c.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[c.index]=c,this.options.globalPalette===!0&&(this.options.globalPalette=c.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let w=1,y=this.freeWorkers.length,p=1<=y;p?w<y:w>y;p?w++:w--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let c,w=0;for(c of Array.from(this.imageParts))w+=(c.data.length-1)*c.pageSize+c.cursor;w+=c.pageSize-c.cursor,this.log(`rendering finished - filesize ${Math.round(w/1e3)}kb`);const y=new Uint8Array(w);let p=0;for(c of Array.from(this.imageParts))for(let t=0;t<c.data.length;t++){const i=c.data[t];y.set(i,p),t===c.data.length-1?p+=c.cursor:p+=c.pageSize}const r=new Blob([y],{type:"image/gif"});return this.emit("finished",r,y)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const c=this.frames[this.nextFrame++],w=this.freeWorkers.shift(),y=this.getTask(c);return this.log(`starting frame ${y.index+1} of ${this.frames.length}`),this.activeWorkers.push(w),w.postMessage(y)}getContextData(c){return c.getImageData(0,0,this.options.width,this.options.height).data}getImageData(c){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const w=this._canvas.getContext("2d");return w.fillStyle=this.options.background,w.fillRect(0,0,this.options.width,this.options.height),w.drawImage(c,0,0),this.getContextData(w)}getTask(c){const w=this.frames.indexOf(c),y={index:w,last:w===this.frames.length-1,delay:c.delay,dispose:c.dispose,transparent:c.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:k.name==="chrome"};if(c.data!=null)y.data=c.data;else if(c.context!=null)y.data=this.getContextData(c.context);else{if(c.image==null)throw new Error("Invalid frame");y.data=this.getImageData(c.image)}return y}log(...c){if(this.options.debug)return console.log(...Array.from(c||[]))}}).initClass(),L}();const B=L})(),I})()})})(Ue);var ft=Ue.exports;const mt=Be(ft),We={workers:2,quality:10,background:"#ffffff",dither:!1};async function vt(b,e){const a=new mt(We);return b.forEach(f=>a.addFrame(f,{delay:e})),new Promise(f=>{a.on("finished",f),a.render()})}var le,V,te,he,ne,Me,He,Se,Xe;class gt{constructor(){P(this,Me);P(this,Se);P(this,le,document.createElement("div"));P(this,V,document.createElement("div"));P(this,te,document.createElement("canvas"));P(this,he,void 0);P(this,ne,void 0);h(this,V).className="result-area",h(this,le).append(de(X().result),h(this,V)),ye(this,Me,He).call(this),h(this,V).appendChild(h(this,te)),T(this,ne,new Oe(h(this,V))),h(this,ne).show()}set canvas(e){h(this,V).innerHTML="",T(this,te,e),h(this,V).appendChild(e),ye(this,Se,Xe).call(this),h(this,ne).hide()}set setting(e){h(this,he)&&h(this,he).remove(),T(this,he,e),h(this,le).appendChild(e)}showLoading(){h(this,ne).show()}render(){return h(this,le)}}le=new WeakMap,V=new WeakMap,te=new WeakMap,he=new WeakMap,ne=new WeakMap,Me=new WeakSet,He=function(){h(this,te).classList.add("hide")},Se=new WeakSet,Xe=function(){h(this,te).classList.remove("hide")};class ke{constructor(e){_(this,"initPromise");_(this,"viewer");_(this,"frames");_(this,"cache");_(this,"prevFramesCache");_(this,"downloadOptions",{download:async()=>await this.download(),copy:async()=>await this.copy(),share:async()=>await this.share()});this.viewer=e,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async getTextFrames(){return await this.viewer.getTextedFrames()}async renderAsync(){await this.initPromise;const e=document.createElement("div");if(this.frames.length!==1){const f=new pe(We,{quality:{type:"range",min:"1",max:"20",className:"reversed"}},"GIF Render");e.appendChild(f.render())}const a=new pe(this.downloadOptions,void 0,"Save & Share");return e.append(a.render()),e}async getOptions(){await this.initPromise;const e=await this.getTextFrames();if(this.cache&&this.prevFramesCache===e)return this.cache;if(!this.frames)return;if(this.prevFramesCache=e,e.length===1)return this.cache={blob:await new Promise(f=>e[0].toBlob(v=>f(v))),fileName:`${this.viewer.template.key}.png`},this.cache;const a=this.viewer.delay;return this.cache={blob:await vt(a>0?e:e.reverse(),Math.abs(a)),fileName:`${this.viewer.template.key}.gif`},this.cache}async download(){const{blob:e,fileName:a}=await this.getOptions();ke.download(e,a)}async copy(){const{blob:e}=await this.getOptions();if(this.frames.length===1){await ke.copy(e);return}const a=URL.createObjectURL(e),f=`width=${this.frames[0].width}, height=${this.frames[0].height}`;window.open(a,void 0,f),URL.revokeObjectURL(a)}async share(){const{blob:e,fileName:a}=await this.getOptions(),f=new File([e],a,{type:e.type});await navigator.share({url:document.location.href,title:a,files:[f]})}static download(e,a){const f=URL.createObjectURL(e),v=document.createElement("a");v.href=f,v.download=a,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(f)}static async copy(e){try{await navigator.clipboard.write([new ClipboardItem({[e.type]:e})])}catch(a){console.error(a,a.message)}}}const Ie=new URL(location.href);function bt(b,e){window.history.replaceState&&(Ie.searchParams.set(b,e),window.history.replaceState({},"",Ie.toString()))}const wt=["lang","template","server"];for(let b of wt){const e=Ie.searchParams.get(b);if(e)switch(b){case"server":ue.server.push(...e.split(","));break;default:ue[b]=e;break}}class yt{constructor(e){_(this,"appElement");_(this,"templateChooser");_(this,"avatarUploader");_(this,"textUploader");_(this,"resultArea");_(this,"inputElement",document.createElement("div"));_(this,"outputElement",document.createElement("div"));_(this,"prevTemplate");_(this,"initPromise");_(this,"backgroundLengthMap");_(this,"viewer");this.appElement=document.getElementById(e),this.appElement.classList.add("petpet-app"),this.templateChooser=new lt,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new qe,this.avatarUploader.onchange=()=>this.update(),this.textUploader=new pt,this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render(),this.textUploader.render()),this.resultArea=new gt,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){it();const e=new ot(ue.server);this.backgroundLengthMap=await e.getLengthMap(),this.templateChooser.templates=await e.getPreviewList(),await this.templateChooser.setTemplate(ue.template),(await e.getUrlSet()).size||this.templateChooser.loading.error()}async update(){var k,L;await this.initPromise,this.viewer&&this.viewer.destroy();const e=this.templateChooser.template||await this.templateChooser.showModal();if(!e)return;const a=this.templateChooser.templateKey;if(ue.template=a,bt("template",a),this.prevTemplate!==e&&(this.avatarUploader.types=[...new Set((k=e.avatar)==null?void 0:k.map(B=>B.type))]),(L=e.avatar)!=null&&L.length&&!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const f=new nt(e);f.backgroundLength=this.backgroundLengthMap.get(e.key),f.background=e.url;const v=await f.generate(this.avatarUploader.data,this.avatarUploader.extraTemplate);this.textUploader.texts=f.textModelList,await v.play(),this.resultArea.canvas=v.canvas;const I=document.createElement("div");this.resultArea.setting=I;const M=new pe(v.settingObject,{delay:{type:"range",min:"1",max:"256",step:"1"}});I.appendChild(M.render());const F=new ke(v);I.appendChild(await F.renderAsync()),this.prevTemplate=e,this.viewer=v}}new yt("app");
