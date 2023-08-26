var $e=Object.defineProperty;var Ye=(x,t,a)=>t in x?$e(x,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):x[t]=a;var k=(x,t,a)=>(Ye(x,typeof t!="symbol"?t+"":t,a),a),Fe=(x,t,a)=>{if(!t.has(x))throw TypeError("Cannot "+a)};var h=(x,t,a)=>(Fe(x,t,"read from private field"),a?a.call(x):t.get(x)),L=(x,t,a)=>{if(t.has(x))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(x):t.set(x,a)},T=(x,t,a,f)=>(Fe(x,t,"write to private field"),f?f.call(x,a):t.set(x,a),a);var be=(x,t,a)=>(Fe(x,t,"access private method"),a);import"./app-d2e00ec3.js";import{c as de,k as H,l as Ve,m as Te,n as Qe,o as Ze,S as ue,j as Je}from"./petpet-model-8cd868f0.js";import{i as Ke}from"./readme-e506e057.js";const et="index.json",tt="index.map.json",nt="./data/xmmt.dituon.petpet";class it{constructor(t){k(this,"urls");k(this,"urlSet",new Set);k(this,"initPromise");k(this,"idMap");k(this,"lengthMap",new Map);k(this,"aliasMap",new Map);k(this,"fonts");k(this,"fontPromises",[]);this.urls=[...new Set(t)],this.initPromise=this.init()}async init(){const t=new Map,a=new Map;await Promise.allSettled(this.urls.map(async f=>{const v=await fetch(`${f}/${et}`).then(_=>_.json()),{dataPath:I=nt,dataList:M,fontList:F}=v;try{const _=await fetch(`${f}/${tt}`).then(z=>z.json());Object.entries(_.length).forEach(([z,R])=>this.lengthMap.set(z,R)),Object.entries(_.alias).forEach(([z,R])=>this.aliasMap.set(z,R))}catch{console.warn(`cannot find index.map.json in ${f} `)}for(const _ of M)t.has(_)||t.set(_,`${f}/${I}/${_}`);for(const _ of F)a.has(_)||a.set(_,`${f}/${I}/fonts/${_}`);this.urlSet.add(f)})),this.idMap=t;for(let[f,v]of a){f=f.split(".")[0],console.log(f,v);const I=new FontFace(f,`url(${v})`);this.fontPromises.push(I.load().then(M=>{document.fonts.add(M)}))}}async getIdMap(){return await this.initPromise,this.idMap}async getLengthMap(){return await this.initPromise,this.lengthMap}async getPreviewList(){const t=await this.getIdMap(),a=[];for(const[f,v]of t.entries())a.push({key:f,url:v,alias:this.aliasMap.get(f)});return a}async getFonts(){return await this.initPromise,await Promise.all(this.fontPromises),this.fonts}async getUrlSet(){return await this.initPromise,this.urlSet}}const we=()=>document.createElement("div");var pe,$,Ee,Ae;class je{constructor(t){L(this,Ee);L(this,pe,void 0);L(this,$,void 0);T(this,pe,t)}show(){if(h(this,$))return;const t=we();t.className="loading",t.append(we(),we(),we()),h(this,pe).appendChild(t),t.addEventListener("click",be(this,Ee,Ae)),T(this,$,t)}hide(){h(this,$)&&(h(this,$).remove(),T(this,$,null))}error(){let t="加载失败";throw h(this,$).innerHTML=`<span>${t}</span>`,new Error(t)}}pe=new WeakMap,$=new WeakMap,Ee=new WeakSet,Ae=function(t){t.stopPropagation()};class Be{constructor(){k(this,"element");k(this,"showing");k(this,"timer");this.element=document.createElement("div"),this.element.className="mask",document.body.appendChild(this.element),this.showing=!1}set onclick(t){this.element.onclick=t}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}toggle(){this.showing?this.hide():this.show()}destroy(){this.element.remove()}}var N,fe,me,se,K,ee;const re=class{constructor(t){L(this,N,document.createElement("div"));L(this,fe,void 0);L(this,me,new Map);L(this,se,void 0);L(this,K,void 0);L(this,ee,0);k(this,"mask",new Be);h(this,N).classList.add("modal-select","hide",re.ICON_SIZE_LIST[h(this,ee)]),h(this,N).addEventListener("contextmenu",a=>{a.preventDefault(),this.changeIconSize()}),document.body.appendChild(h(this,N)),this.mask.onclick=()=>{h(this,K)&&h(this,K).call(this,null),this.hide()},t&&(this.templates=t)}set templates(t){T(this,fe,t);const a=document.createElement("div");a.className="index-list",T(this,se,a);for(const v of t){const I=document.createElement("div"),M=document.createElement("img");M.src=`${v.url}/0.png`,M.alt=v.key,M.onerror=()=>I.remove(),M.loading="lazy";const F=de(v.key);v.alias&&v.alias.forEach(_=>F.appendChild(de(_,"span"))),I.append(M,F),I.addEventListener("click",async _=>{h(this,K).call(this,await rt(v)),this.hide()}),h(this,me).set(v,I),a.appendChild(I)}const f=document.createElement("input");f.placeholder=`🔍 ${H().typeToSearch} / ${H().rightClickOrLongPress}`,f.addEventListener("change",v=>{this.search(f.value.trim())}),h(this,N).append(f,a)}hide(){this.mask.hide(),h(this,N).classList.add("hide")}async show(){return h(this,fe)?(this.mask.show(),h(this,N)&&h(this,N).classList.remove("hide"),new Promise(t=>T(this,K,t))):null}changeIconSize(){const t=(h(this,ee)+1)%re.ICON_SIZE_LIST.length;h(this,N).classList.replace(re.ICON_SIZE_LIST[h(this,ee)],re.ICON_SIZE_LIST[t]),T(this,ee,t)}search(t){h(this,se).innerHTML="";for(let[a,f]of h(this,me).entries()){const{key:v,alias:I}=a;!v.includes(t)&&!(I&&I.find(M=>M.includes(t)))||h(this,se).appendChild(f)}}};let ye=re;N=new WeakMap,fe=new WeakMap,me=new WeakMap,se=new WeakMap,K=new WeakMap,ee=new WeakMap,k(ye,"ICON_SIZE_LIST",["big","medium","small"]);async function rt(x){if(x.type)return x;const t=await fetch(x.url+"/data.json").then(a=>a.json());return{...x,...t}}var Y,ae,oe;class st{constructor(t){L(this,Y,document.createElement("div"));L(this,ae,void 0);k(this,"loading",new je(h(this,Y)));L(this,oe,void 0);k(this,"template");if(T(this,ae,new ye(t)),h(this,Y).classList.add("template-chooser"),h(this,Y).textContent=H().notSelected,h(this,Y).addEventListener("click",async()=>{const a=await this.showModal();h(this,oe)&&h(this,oe).call(this,a)}),!t){this.loading.show();return}this.templates=t}set templates(t){this.loading.hide(),h(this,ae).templates=t}render(){const t=document.createElement("div");return t.append(de(H().selectTemplate),h(this,Y)),t}async showModal(){const t=await h(this,ae).show();return t&&(h(this,Y).textContent=t.key),this.template=t,t}set onchange(t){T(this,oe,t)}}Y=new WeakMap,ae=new WeakMap,oe=new WeakMap;var Oe={exports:{}};(function(x,t){(function(a,f){x.exports=f()})(Ve,function(){(function(){for(var p=0,r=["ms","moz","webkit","o"],e=0;e<r.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[r[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[e]+"CancelAnimationFrame"]||window[r[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i,s){var d=new Date().getTime(),n=Math.max(0,16-(d-p)),o=window.setTimeout(function(){i(d+n)},n);return p=d+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(i){clearTimeout(i)})})(),function(){if(typeof window.CustomEvent=="function")return!1;function p(r,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(r,e.bubbles,e.cancelable,e.detail),i}p.prototype=window.Event.prototype,window.CustomEvent=p}(),function(p){try{return new CustomEvent("test"),!1}catch{}function r(e,i){i=i||{bubbles:!1,cancelable:!1};var s=document.createEvent("MouseEvent");return s.initMouseEvent(e,i.bubbles,i.cancelable,p,0,0,0,0,0,!1,!1,!1,!1,0,null),s}r.prototype=Event.prototype,p.MouseEvent=r}(window);var a=function(p,r){if(!(p instanceof r))throw new TypeError("Cannot call a class as a function")},f=function(){function p(r,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(r,s.key,s)}}return function(r,e,i){return e&&p(r.prototype,e),i&&p(r,i),r}}(),v=function p(r,e,i){r===null&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,e);if(s===void 0){var d=Object.getPrototypeOf(r);return d===null?void 0:p(d,e,i)}else{if("value"in s)return s.value;var n=s.get;return n===void 0?void 0:n.call(i)}},I=function(p,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);p.prototype=Object.create(r&&r.prototype,{constructor:{value:p,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(p,r):p.__proto__=r)},M=function(p,r){if(!p)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:p},F=function(){function p(r,e){var i=[],s=!0,d=!1,n=void 0;try{for(var o=r[Symbol.iterator](),l;!(s=(l=o.next()).done)&&(i.push(l.value),!(e&&i.length===e));s=!0);}catch(u){d=!0,n=u}finally{try{!s&&o.return&&o.return()}finally{if(d)throw n}}return i}return function(r,e){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return p(r,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_=function p(r,e,i,s){a(this,p);var d=this;this.position=r,this.constraints=e,this.cursor=i,this.eventBus=s,this.el=document.createElement("div"),this.el.className="croppr-handle",this.el.style.cursor=i,this.el.addEventListener("mousedown",n);function n(u){u.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",l),d.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:d}}))}function o(u){u.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",l),d.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{handle:d}}))}function l(u){u.stopPropagation(),d.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:u.clientX,mouseY:u.clientY}}))}},z=function(){function p(r,e,i,s){a(this,p),this.x1=r,this.y1=e,this.x2=i,this.y2=s}return f(p,[{key:"set",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return this.x1=e??this.x1,this.y1=i??this.y1,this.x2=s??this.x2,this.y2=d??this.y2,this}},{key:"width",value:function(){return Math.abs(this.x2-this.x1)}},{key:"height",value:function(){return Math.abs(this.y2-this.y1)}},{key:"resize",value:function(e,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],d=this.x1+this.width()*s[0],n=this.y1+this.height()*s[1];return this.x1=d-e*s[0],this.y1=n-i*s[1],this.x2=this.x1+e,this.y2=this.y1+i,this}},{key:"scale",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],s=this.width()*e,d=this.height()*e;return this.resize(s,d,i),this}},{key:"move",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=this.width(),d=this.height();return e=e===null?this.x1:e,i=i===null?this.y1:i,this.x1=e,this.y1=i,this.x2=e+s,this.y2=i+d,this}},{key:"getRelativePoint",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.width()*e[0],s=this.height()*e[1];return[i,s]}},{key:"getAbsolutePoint",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0],i=this.x1+this.width()*e[0],s=this.y1+this.height()*e[1];return[i,s]}},{key:"constrainToRatio",value:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[0,0],s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"height";if(e!==null){switch(this.width(),this.height(),s){case"height":this.resize(this.width(),this.width()*e,i);break;case"width":this.resize(this.height()*1/e,this.height(),i);break;default:this.resize(this.width(),this.width()*e,i)}return this}}},{key:"constrainToBoundary",value:function(e,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0],d=this.getAbsolutePoint(s),n=F(d,2),o=n[0],l=n[1],u=o,g=l,m=e-o,y=i-l,C=-2*s[0]+1,S=-2*s[1]+1,P=null,j=null;switch(C){case-1:P=u;break;case 0:P=Math.min(u,m)*2;break;case 1:P=m;break}switch(S){case-1:j=g;break;case 0:j=Math.min(g,y)*2;break;case 1:j=y;break}if(this.width()>P){var A=P/this.width();this.scale(A,s)}if(this.height()>j){var B=j/this.height();this.scale(B,s)}return this}},{key:"constrainToSize",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,n=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[0,0],o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null;if(o&&(o>1?(e=i*1/o,d=d*o):o<1&&(i=e*o,s=d*1/o)),e&&this.width()>e){var l=e,u=o===null?this.height():i;this.resize(l,u,n)}if(i&&this.height()>i){var g=o===null?this.width():e,m=i;this.resize(g,m,n)}if(s&&this.width()<s){var y=s,C=o===null?this.height():d;this.resize(y,C,n)}if(d&&this.height()<d){var S=o===null?this.width():s,P=d;this.resize(S,P,n)}return this}}]),p}();function R(p){p.addEventListener("touchstart",E),p.addEventListener("touchend",E),p.addEventListener("touchmove",E)}function E(p){p.preventDefault();var r=p.changedTouches[0],e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"};r.target.dispatchEvent(new MouseEvent(e[p.type],{bubbles:!0,cancelable:!0,view:window,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY}))}var G=[{position:[0,0],constraints:[1,0,0,1],cursor:"nw-resize"},{position:[.5,0],constraints:[1,0,0,0],cursor:"n-resize"},{position:[1,0],constraints:[1,1,0,0],cursor:"ne-resize"},{position:[1,.5],constraints:[0,1,0,0],cursor:"e-resize"},{position:[1,1],constraints:[0,1,1,0],cursor:"se-resize"},{position:[.5,1],constraints:[0,0,1,0],cursor:"s-resize"},{position:[0,1],constraints:[0,0,1,1],cursor:"sw-resize"},{position:[0,.5],constraints:[0,0,0,1],cursor:"w-resize"}],c=function(){function p(r,e){var i=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(a(this,p),this.options=p.parseOptions(e||{}),!r.nodeName&&(r=document.querySelector(r),r==null))throw"Unable to find element.";if(!r.getAttribute("src"))throw"Image src not provided.";this._initialized=!1,this._restore={parent:r.parentNode,element:r},s||(r.width===0||r.height===0?r.onload=function(){i.initialize(r)}:this.initialize(r))}return f(p,[{key:"initialize",value:function(e){this.createDOM(e),this.options.convertToPixels(this.cropperEl),this.attachHandlerEvents(),this.attachRegionEvents(),this.attachOverlayEvents(),this.box=this.initializeBox(this.options),this.redraw(),this._initialized=!0,this.options.onInitialize!==null&&this.options.onInitialize(this)}},{key:"createDOM",value:function(e){this.containerEl=document.createElement("div"),this.containerEl.className="croppr-container",this.eventBus=this.containerEl,R(this.containerEl),this.cropperEl=document.createElement("div"),this.cropperEl.className="croppr",this.imageEl=document.createElement("img"),this.imageEl.setAttribute("src",e.getAttribute("src")),this.imageEl.setAttribute("alt",e.getAttribute("alt")),this.imageEl.className="croppr-image",this.imageClippedEl=this.imageEl.cloneNode(),this.imageClippedEl.className="croppr-imageClipped",this.regionEl=document.createElement("div"),this.regionEl.className="croppr-region",this.overlayEl=document.createElement("div"),this.overlayEl.className="croppr-overlay";var i=document.createElement("div");i.className="croppr-handleContainer",this.handles=[];for(var s=0;s<G.length;s++){var d=new _(G[s].position,G[s].constraints,G[s].cursor,this.eventBus);this.handles.push(d),i.appendChild(d.el)}this.cropperEl.appendChild(this.imageEl),this.cropperEl.appendChild(this.imageClippedEl),this.cropperEl.appendChild(this.regionEl),this.cropperEl.appendChild(this.overlayEl),this.cropperEl.appendChild(i),this.containerEl.appendChild(this.cropperEl),e.parentElement.replaceChild(this.containerEl,e)}},{key:"setImage",value:function(e){var i=this;return this.imageEl.onload=function(){i.box=i.initializeBox(i.options),i.redraw()},this.imageEl.src=e,this.imageClippedEl.src=e,this}},{key:"destroy",value:function(){this._restore.parent.replaceChild(this._restore.element,this.containerEl)}},{key:"initializeBox",value:function(e){var i=e.startSize.width,s=e.startSize.height,d=new z(0,0,i,s);d.constrainToRatio(e.aspectRatio,[.5,.5]);var n=e.minSize,o=e.maxSize;d.constrainToSize(o.width,o.height,n.width,n.height,[.5,.5],e.aspectRatio);var l=this.cropperEl.offsetWidth,u=this.cropperEl.offsetHeight;d.constrainToBoundary(l,u,[.5,.5]);var g=this.cropperEl.offsetWidth/2-d.width()/2,m=this.cropperEl.offsetHeight/2-d.height()/2;return d.move(g,m),d}},{key:"redraw",value:function(){var e=this,i=Math.round(this.box.width()),s=Math.round(this.box.height()),d=Math.round(this.box.x1),n=Math.round(this.box.y1),o=Math.round(this.box.x2),l=Math.round(this.box.y2);window.requestAnimationFrame(function(){e.regionEl.style.transform="translate("+d+"px, "+n+"px)",e.regionEl.style.width=i+"px",e.regionEl.style.height=s+"px",e.imageClippedEl.style.clip="rect("+n+"px, "+o+"px, "+l+"px, "+d+"px)";for(var u=e.box.getAbsolutePoint([.5,.5]),g=u[0]-e.cropperEl.offsetWidth/2>>31,m=u[1]-e.cropperEl.offsetHeight/2>>31,y=(g^m)+m+m+4,C=-2*y+8,S=0;S<e.handles.length;S++){var P=e.handles[S],j=P.el.offsetWidth,A=P.el.offsetHeight,B=d+i*P.position[0]-j/2,X=n+s*P.position[1]-A/2;P.el.style.transform="translate("+Math.round(B)+"px, "+Math.round(X)+"px)",P.el.style.zIndex=C==S?5:4}})}},{key:"attachHandlerEvents",value:function(){var e=this.eventBus;e.addEventListener("handlestart",this.onHandleMoveStart.bind(this)),e.addEventListener("handlemove",this.onHandleMoveMoving.bind(this)),e.addEventListener("handleend",this.onHandleMoveEnd.bind(this))}},{key:"attachRegionEvents",value:function(){var e=this.eventBus;this.regionEl.addEventListener("mousedown",i),e.addEventListener("regionstart",this.onRegionMoveStart.bind(this)),e.addEventListener("regionmove",this.onRegionMoveMoving.bind(this)),e.addEventListener("regionend",this.onRegionMoveEnd.bind(this));function i(n){n.stopPropagation(),document.addEventListener("mouseup",d),document.addEventListener("mousemove",s),e.dispatchEvent(new CustomEvent("regionstart",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}function s(n){n.stopPropagation(),e.dispatchEvent(new CustomEvent("regionmove",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}function d(n){n.stopPropagation(),document.removeEventListener("mouseup",d),document.removeEventListener("mousemove",s),e.dispatchEvent(new CustomEvent("regionend",{detail:{mouseX:n.clientX,mouseY:n.clientY}}))}}},{key:"attachOverlayEvents",value:function(){var e=4,i=this,s=null;this.overlayEl.addEventListener("mousedown",d);function d(l){l.stopPropagation(),document.addEventListener("mouseup",o),document.addEventListener("mousemove",n);var u=i.cropperEl.getBoundingClientRect(),g=l.clientX-u.left,m=l.clientY-u.top;s=i.box,i.box=new z(g,m,g+1,m+1),i.eventBus.dispatchEvent(new CustomEvent("handlestart",{detail:{handle:i.handles[e]}}))}function n(l){l.stopPropagation(),i.eventBus.dispatchEvent(new CustomEvent("handlemove",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}function o(l){if(l.stopPropagation(),document.removeEventListener("mouseup",o),document.removeEventListener("mousemove",n),i.box.width()===1&&i.box.height()===1){i.box=s;return}i.eventBus.dispatchEvent(new CustomEvent("handleend",{detail:{mouseX:l.clientX,mouseY:l.clientY}}))}}},{key:"onHandleMoveStart",value:function(e){var i=e.detail.handle,s=[1-i.position[0],1-i.position[1]],d=this.box.getAbsolutePoint(s),n=F(d,2),o=n[0],l=n[1];this.activeHandle={handle:i,originPoint:s,originX:o,originY:l},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onHandleMoveMoving",value:function(e){var i=e.detail,s=i.mouseX,d=i.mouseY,n=this.cropperEl.getBoundingClientRect();s=s-n.left,d=d-n.top,s<0?s=0:s>n.width&&(s=n.width),d<0?d=0:d>n.height&&(d=n.height);var o=this.activeHandle.originPoint.slice(),l=this.activeHandle.originX,u=this.activeHandle.originY,g=this.activeHandle.handle,m=g.constraints[0]===1,y=g.constraints[1]===1,C=g.constraints[2]===1,S=g.constraints[3]===1,P=(S||y)&&(m||C),j=S||y?l:this.box.x1,A=S||y?l:this.box.x2,B=m||C?u:this.box.y1,X=m||C?u:this.box.y2;j=S?s:j,A=y?s:A,B=m?d:B,X=C?d:X;var ce=!1,ie=!1;if((S||y)&&(ce=S?s>l:s<l),(m||C)&&(ie=m?d>u:d<u),ce){var D=j;j=A,A=D,o[0]=1-o[0]}if(ie){var Ue=B;B=X,X=Ue,o[1]=1-o[1]}var Q=new z(j,B,A,X);if(this.options.aspectRatio){var Me=this.options.aspectRatio,Se=!1;P?Se=d>Q.y1+Me*Q.width()||d<Q.y2-Me*Q.width():(m||C)&&(Se=!0);var We=Se?"width":"height";Q.constrainToRatio(Me,o,We)}var Pe=this.options.minSize,ze=this.options.maxSize;Q.constrainToSize(ze.width,ze.height,Pe.width,Pe.height,o,this.options.aspectRatio);var He=this.cropperEl.offsetWidth,Xe=this.cropperEl.offsetHeight;Q.constrainToBoundary(He,Xe,o),this.box=Q,this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onHandleMoveEnd",value:function(e){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"onRegionMoveStart",value:function(e){var i=e.detail,s=i.mouseX,d=i.mouseY,n=this.cropperEl.getBoundingClientRect();s=s-n.left,d=d-n.top,this.currentMove={offsetX:s-this.box.x1,offsetY:d-this.box.y1},this.options.onCropStart!==null&&this.options.onCropStart(this.getValue())}},{key:"onRegionMoveMoving",value:function(e){var i=e.detail,s=i.mouseX,d=i.mouseY,n=this.currentMove,o=n.offsetX,l=n.offsetY,u=this.cropperEl.getBoundingClientRect();s=s-u.left,d=d-u.top,this.box.move(s-o,d-l),this.box.x1<0&&this.box.move(0,null),this.box.x2>u.width&&this.box.move(u.width-this.box.width(),null),this.box.y1<0&&this.box.move(null,0),this.box.y2>u.height&&this.box.move(null,u.height-this.box.height()),this.redraw(),this.options.onCropMove!==null&&this.options.onCropMove(this.getValue())}},{key:"onRegionMoveEnd",value:function(e){this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue())}},{key:"getValue",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(e===null&&(e=this.options.returnMode),e=="real"){var i=this.imageEl.naturalWidth,s=this.imageEl.naturalHeight,d=this.imageEl.getBoundingClientRect(),n=d.width,o=d.height,l=i/n,u=s/o;return{x:Math.round(this.box.x1*l),y:Math.round(this.box.y1*u),width:Math.round(this.box.width()*l),height:Math.round(this.box.height()*u)}}else if(e=="ratio"){var g=this.imageEl.getBoundingClientRect(),m=g.width,y=g.height;return{x:b(this.box.x1/m,3),y:b(this.box.y1/y,3),width:b(this.box.width()/m,3),height:b(this.box.height()/y,3)}}else if(e=="raw")return{x:Math.round(this.box.x1),y:Math.round(this.box.y1),width:Math.round(this.box.width()),height:Math.round(this.box.height())}}}],[{key:"parseOptions",value:function(e){var i={aspectRatio:null,maxSize:{width:null,height:null},minSize:{width:null,height:null},startSize:{width:100,height:100,unit:"%"},returnMode:"real",onInitialize:null,onCropStart:null,onCropMove:null,onCropEnd:null},s=null;e.aspectRatio!==void 0&&(typeof e.aspectRatio=="number"?s=e.aspectRatio:e.aspectRatio instanceof Array&&(s=e.aspectRatio[1]/e.aspectRatio[0]));var d=null;e.maxSize!==void 0&&e.maxSize!==null&&(d={width:e.maxSize[0]||null,height:e.maxSize[1]||null,unit:e.maxSize[2]||"px"});var n=null;e.minSize!==void 0&&e.minSize!==null&&(n={width:e.minSize[0]||null,height:e.minSize[1]||null,unit:e.minSize[2]||"px"});var o=null;e.startSize!==void 0&&e.startSize!==null&&(o={width:e.startSize[0]||null,height:e.startSize[1]||null,unit:e.startSize[2]||"%"});var l=null;typeof e.onInitialize=="function"&&(l=e.onInitialize);var u=null;typeof e.onCropStart=="function"&&(u=e.onCropStart);var g=null;typeof e.onCropEnd=="function"&&(g=e.onCropEnd);var m=null;typeof e.onUpdate=="function"&&(console.warn("Croppr.js: `onUpdate` is deprecated and will be removed in the next major release. Please use `onCropMove` or `onCropEnd` instead."),m=e.onUpdate),typeof e.onCropMove=="function"&&(m=e.onCropMove);var y=null;if(e.returnMode!==void 0){var C=e.returnMode.toLowerCase();if(["real","ratio","raw"].indexOf(C)===-1)throw"Invalid return mode.";y=C}var S=function(A){for(var B=A.offsetWidth,X=A.offsetHeight,ce=["maxSize","minSize","startSize"],ie=0;ie<ce.length;ie++){var D=ce[ie];this[D]!==null&&(this[D].unit=="%"&&(this[D].width!==null&&(this[D].width=this[D].width/100*B),this[D].height!==null&&(this[D].height=this[D].height/100*X)),delete this[D].unit)}},P=function(A,B){return A!==null?A:B};return{aspectRatio:P(s,i.aspectRatio),maxSize:P(d,i.maxSize),minSize:P(n,i.minSize),startSize:P(o,i.startSize),returnMode:P(y,i.returnMode),onInitialize:P(l,i.onInitialize),onCropStart:P(u,i.onCropStart),onCropMove:P(m,i.onCropMove),onCropEnd:P(g,i.onCropEnd),convertToPixels:S}}}]),p}();function b(p,r){return+(Math.round(p+"e"+r)+"e-"+r)}var w=function(p){I(r,p);function r(e,i){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return a(this,r),M(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,i,s))}return f(r,[{key:"getValue",value:function(i){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"getValue",this).call(this,i)}},{key:"setImage",value:function(i){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"setImage",this).call(this,i)}},{key:"destroy",value:function(){return v(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"destroy",this).call(this)}},{key:"moveTo",value:function(i,s){return this.box.move(i,s),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"resizeTo",value:function(i,s){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[.5,.5];return this.box.resize(i,s,d),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"scaleBy",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.5,.5];return this.box.scale(i,s),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}},{key:"reset",value:function(){return this.box=this.initializeBox(this.options),this.redraw(),this.options.onCropEnd!==null&&this.options.onCropEnd(this.getValue()),this}}]),r}(c);return w})})(Oe);var at=Oe.exports;const ot=Te(at);var U;class lt{constructor(t){L(this,U,document.createElement("div"));k(this,"croppr");k(this,"mask",new Be);k(this,"callback");k(this,"imageFile");k(this,"initPromise");h(this,U).classList.add("avatar-cropper"),this.imageFile=t,this.mask.onclick=()=>this.cancel(),this.initPromise=this.init()}async init(){const t=await Qe(this.imageFile);h(this,U).appendChild(t),document.body.append(h(this,U)),this.croppr=new ot(t,{startSize:[90,60],minSize:[1,1,"px"],returnMode:"real"});const a=document.createElement("div");a.className="button-group";const f=document.createElement("div");f.innerText="Cancel",f.addEventListener("click",()=>this.cancel());const v=document.createElement("div");v.innerText="Save",v.addEventListener("click",()=>this.save()),a.append(f,v),h(this,U).appendChild(a)}cancel(){this.callback(null),this.hide()}save(){const{x:t,y:a,width:f,height:v}=this.croppr.getValue("real");this.callback([t,a,t+f,a+v]),this.hide()}hide(){h(this,U).classList.add("hide"),this.mask.hide()}async show(){return await this.initPromise,this.mask.show(),h(this,U).classList.remove("hide"),new Promise(t=>this.callback=t)}async destroy(){await this.initPromise,h(this,U).remove(),this.croppr.destroy(),this.mask.destroy()}}U=new WeakMap;const Le=x=>{x.stopPropagation(),x.preventDefault()};var O,Z,J,ve,ke;class ht{constructor(t){k(this,"type");L(this,O,document.createElement("label"));L(this,Z,void 0);L(this,J,void 0);L(this,ve,void 0);L(this,ke,new Promise(t=>T(this,ve,t)));k(this,"cropPos");this.type=t,h(this,O).title=H().rightClickOrLongPress,h(this,O).setAttribute("type",t),h(this,O).addEventListener("dragenter",Le,!1),h(this,O).addEventListener("dragover",Le,!1),h(this,O).addEventListener("drop",f=>{Le(f),this.setFiles(f.dataTransfer.files)},!1),h(this,O).addEventListener("contextmenu",async f=>{if(f.preventDefault(),!h(this,Z))return;const v=this.cropPos,I=new lt(h(this,Z));this.cropPos=await I.show(),await I.destroy(),this.cropPos!==v&&h(this,J)&&h(this,J).call(this,this)});const a=document.createElement("input");a.type="file",a.accept="image/*",a.addEventListener("change",()=>this.setFiles(a.files)),h(this,O).appendChild(a)}render(){return h(this,O)}set onchange(t){T(this,J,t)}get file(){return h(this,Z)}async waitFile(){return await h(this,ke),h(this,Z)}setFiles(t){let a=t.item(0);if(a){if(!a.type.startsWith("image"))throw new Error("仅支持图片格式");h(this,O).style.backgroundImage=`url(${URL.createObjectURL(a)})`,h(this,O).style.backgroundSize="cover",T(this,Z,a),h(this,ve).call(this),this.cropPos=void 0,h(this,J)&&h(this,J).call(this,this)}}}O=new WeakMap,Z=new WeakMap,J=new WeakMap,ve=new WeakMap,ke=new WeakMap;const Ie=["FROM","TO","BOT","GROUP"];var W,ge,q;class Re{constructor(){L(this,W,void 0);L(this,ge,new Map(Ie.map(t=>[t,new ht(t)])));L(this,q,void 0);T(this,W,document.createElement("div")),h(this,W).className="avatar-uploader",h(this,W).innerHTML=H().noAvatar}set types(t){if(!t||t.length===0){h(this,W).innerHTML=H().noAvatar;return}h(this,W).innerHTML="",T(this,q,t.map(a=>h(this,ge).get(a))),h(this,W).append(...h(this,q).map(a=>a.render()))}render(){const t=document.createElement("div");return t.append(de(H().uploadAvatar),h(this,W)),t}get ready(){var t;return(t=h(this,q))!=null&&t.length?h(this,q).some(a=>a.file):!0}set onchange(t){for(const a of h(this,ge).values())a.onchange=()=>this.ready&&t(this)}get data(){var a;const t={};if(!((a=h(this,q))!=null&&a.length))return t;for(const f of h(this,q))t[f.type.toLowerCase()]=f.file;return t}get extraTemplate(){var f;const t={};let a=!1;if(!((f=h(this,q))!=null&&f.length))return t;for(const v of h(this,q))a=a||!!v.cropPos,t[v.type.toLowerCase()]={cropType:Ze.PIXEL,crop:v.cropPos};return a?t:void 0}}W=new WeakMap,ge=new WeakMap,q=new WeakMap,k(Re,"types",Ie);class dt{constructor(){k(this,"textModels");k(this,"textDomList",document.createElement("div"));k(this,"settingDom",new ue({add:()=>this.addTextModel()}).render());this.textDomList.appendChild(this.settingDom)}set texts(t){this.textModels=t,this.textDomList.innerHTML="",this.textDomList.appendChild(this.settingDom);for(let a of this.textModels.texts)this.addTextModel(a)}addTextModel(t=this.textModels.addTextModel()){const a=new ue(t.settingObject,t.settingAttributes,`Text - ${this.textModels.texts.length}`);this.textDomList.appendChild(a.render())}render(){const t=document.createElement("div");return t.append(de(H().setText),this.textDomList),t}}var le,V,te,he,ne,_e,Ge,Ce,De;class ct{constructor(){L(this,_e);L(this,Ce);L(this,le,document.createElement("div"));L(this,V,document.createElement("div"));L(this,te,document.createElement("canvas"));L(this,he,void 0);L(this,ne,void 0);h(this,V).className="result-area",h(this,le).append(de(H().result),h(this,V)),be(this,_e,Ge).call(this),h(this,V).appendChild(h(this,te)),T(this,ne,new je(h(this,V))),h(this,ne).show()}set canvas(t){h(this,V).innerHTML="",T(this,te,t),h(this,V).appendChild(t),be(this,Ce,De).call(this),h(this,ne).hide()}set setting(t){h(this,he)&&h(this,he).remove(),T(this,he,t),h(this,le).appendChild(t)}showLoading(){h(this,ne).show()}render(){return h(this,le)}}le=new WeakMap,V=new WeakMap,te=new WeakMap,he=new WeakMap,ne=new WeakMap,_e=new WeakSet,Ge=function(){h(this,te).classList.add("hide")},Ce=new WeakSet,De=function(){h(this,te).classList.remove("hide")};var Ne={exports:{}};/*! For license information please see gif.js.LICENSE.txt */(function(x,t){(function(a,f){x.exports=f()})(self,function(){return(()=>{var a={"./node_modules/events/events.js":M=>{var F,_=typeof Reflect=="object"?Reflect:null,z=_&&typeof _.apply=="function"?_.apply:function(n,o,l){return Function.prototype.apply.call(n,o,l)};F=_&&typeof _.ownKeys=="function"?_.ownKeys:Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:function(n){return Object.getOwnPropertyNames(n)};var R=Number.isNaN||function(n){return n!=n};function E(){E.init.call(this)}M.exports=E,M.exports.once=function(n,o){return new Promise(function(l,u){function g(y){n.removeListener(o,m),u(y)}function m(){typeof n.removeListener=="function"&&n.removeListener("error",g),l([].slice.call(arguments))}d(n,o,m,{once:!0}),o!=="error"&&function(y,C,S){typeof y.on=="function"&&d(y,"error",C,{once:!0})}(n,g)})},E.EventEmitter=E,E.prototype._events=void 0,E.prototype._eventsCount=0,E.prototype._maxListeners=void 0;var G=10;function c(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}function b(n){return n._maxListeners===void 0?E.defaultMaxListeners:n._maxListeners}function w(n,o,l,u){var g,m,y,C;if(c(l),(m=n._events)===void 0?(m=n._events=Object.create(null),n._eventsCount=0):(m.newListener!==void 0&&(n.emit("newListener",o,l.listener?l.listener:l),m=n._events),y=m[o]),y===void 0)y=m[o]=l,++n._eventsCount;else if(typeof y=="function"?y=m[o]=u?[l,y]:[y,l]:u?y.unshift(l):y.push(l),(g=b(n))>0&&y.length>g&&!y.warned){y.warned=!0;var S=new Error("Possible EventEmitter memory leak detected. "+y.length+" "+String(o)+" listeners added. Use emitter.setMaxListeners() to increase limit");S.name="MaxListenersExceededWarning",S.emitter=n,S.type=o,S.count=y.length,C=S,console&&console.warn&&console.warn(C)}return n}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function r(n,o,l){var u={fired:!1,wrapFn:void 0,target:n,type:o,listener:l},g=p.bind(u);return g.listener=l,u.wrapFn=g,g}function e(n,o,l){var u=n._events;if(u===void 0)return[];var g=u[o];return g===void 0?[]:typeof g=="function"?l?[g.listener||g]:[g]:l?function(m){for(var y=new Array(m.length),C=0;C<y.length;++C)y[C]=m[C].listener||m[C];return y}(g):s(g,g.length)}function i(n){var o=this._events;if(o!==void 0){var l=o[n];if(typeof l=="function")return 1;if(l!==void 0)return l.length}return 0}function s(n,o){for(var l=new Array(o),u=0;u<o;++u)l[u]=n[u];return l}function d(n,o,l,u){if(typeof n.on=="function")u.once?n.once(o,l):n.on(o,l);else{if(typeof n.addEventListener!="function")throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n);n.addEventListener(o,function g(m){u.once&&n.removeEventListener(o,g),l(m)})}}Object.defineProperty(E,"defaultMaxListeners",{enumerable:!0,get:function(){return G},set:function(n){if(typeof n!="number"||n<0||R(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");G=n}}),E.init=function(){this._events!==void 0&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},E.prototype.setMaxListeners=function(n){if(typeof n!="number"||n<0||R(n))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+n+".");return this._maxListeners=n,this},E.prototype.getMaxListeners=function(){return b(this)},E.prototype.emit=function(n){for(var o=[],l=1;l<arguments.length;l++)o.push(arguments[l]);var u=n==="error",g=this._events;if(g!==void 0)u=u&&g.error===void 0;else if(!u)return!1;if(u){var m;if(o.length>0&&(m=o[0]),m instanceof Error)throw m;var y=new Error("Unhandled error."+(m?" ("+m.message+")":""));throw y.context=m,y}var C=g[n];if(C===void 0)return!1;if(typeof C=="function")z(C,this,o);else{var S=C.length,P=s(C,S);for(l=0;l<S;++l)z(P[l],this,o)}return!0},E.prototype.addListener=function(n,o){return w(this,n,o,!1)},E.prototype.on=E.prototype.addListener,E.prototype.prependListener=function(n,o){return w(this,n,o,!0)},E.prototype.once=function(n,o){return c(o),this.on(n,r(this,n,o)),this},E.prototype.prependOnceListener=function(n,o){return c(o),this.prependListener(n,r(this,n,o)),this},E.prototype.removeListener=function(n,o){var l,u,g,m,y;if(c(o),(u=this._events)===void 0)return this;if((l=u[n])===void 0)return this;if(l===o||l.listener===o)--this._eventsCount==0?this._events=Object.create(null):(delete u[n],u.removeListener&&this.emit("removeListener",n,l.listener||o));else if(typeof l!="function"){for(g=-1,m=l.length-1;m>=0;m--)if(l[m]===o||l[m].listener===o){y=l[m].listener,g=m;break}if(g<0)return this;g===0?l.shift():function(C,S){for(;S+1<C.length;S++)C[S]=C[S+1];C.pop()}(l,g),l.length===1&&(u[n]=l[0]),u.removeListener!==void 0&&this.emit("removeListener",n,y||o)}return this},E.prototype.off=E.prototype.removeListener,E.prototype.removeAllListeners=function(n){var o,l,u;if((l=this._events)===void 0)return this;if(l.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):l[n]!==void 0&&(--this._eventsCount==0?this._events=Object.create(null):delete l[n]),this;if(arguments.length===0){var g,m=Object.keys(l);for(u=0;u<m.length;++u)(g=m[u])!=="removeListener"&&this.removeAllListeners(g);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(typeof(o=l[n])=="function")this.removeListener(n,o);else if(o!==void 0)for(u=o.length-1;u>=0;u--)this.removeListener(n,o[u]);return this},E.prototype.listeners=function(n){return e(this,n,!0)},E.prototype.rawListeners=function(n){return e(this,n,!1)},E.listenerCount=function(n,o){return typeof n.listenerCount=="function"?n.listenerCount(o):i.call(n,o)},E.prototype.listenerCount=i,E.prototype.eventNames=function(){return this._eventsCount>0?F(this._events):[]}},"./dist/gif.worker.js.txt":(M,F,_)=>{_.r(F),_.d(F,{default:()=>z});const z=`/******/ (() => { // webpackBootstrap
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
;`},"./src/browser.js":M=>{const F=navigator.userAgent.toLowerCase(),_=navigator.platform.toLowerCase(),z=F.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],R=z[1]==="ie"&&document.documentMode,E={name:z[1]==="version"?z[3]:z[1],version:R||parseFloat(z[1]==="opera"&&z[4]?z[4]:z[2]),platform:{name:F.match(/ip(?:ad|od|hone)/)?"ios":(F.match(/(?:webos|android)/)||_.match(/mac|win|linux/)||["other"])[0]}};E[E.name]=!0,E[E.name+parseInt(E.version,10)]=!0,E.platform[E.platform.name]=!0,M.exports=E},"?569f":()=>{}},f={};function v(M){var F=f[M];if(F!==void 0)return F.exports;var _=f[M]={exports:{}};return a[M](_,_.exports,v),_.exports}v.d=(M,F)=>{for(var _ in F)v.o(F,_)&&!v.o(M,_)&&Object.defineProperty(M,_,{enumerable:!0,get:F[_]})},v.o=(M,F)=>Object.prototype.hasOwnProperty.call(M,F),v.r=M=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(M,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(M,"__esModule",{value:!0})};var I={};return(()=>{v.r(I),v.d(I,{default:()=>R});var M=v("./dist/gif.worker.js.txt");const{EventEmitter:F}=v("./node_modules/events/events.js"),_=v("./src/browser.js");v("?569f");var z=function(){let E,G;return(z=class extends F{static initClass(){E={workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},G={delay:500,copy:!1,dispose:-1}}constructor(c){super(),this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(c);for(let b in E){const w=E[b];this.options[b]==null&&(this.options[b]=w)}this.workerURL=window.URL.createObjectURL(new Blob([M.default]))}setOption(c,b){if(this.options[c]=b,this._canvas!=null&&["width","height"].includes(c))return this._canvas[c]=b}setOptions(c){return(()=>{const b=[];for(let w of Object.keys(c||{})){const p=c[w];b.push(this.setOption(w,p))}return b})()}addFrame(c,b){b==null&&(b={});const w={};w.transparent=this.options.transparent;for(let p in G)w[p]=b[p]||G[p];if(this.options.width==null&&this.setOption("width",c.width),this.options.height==null&&this.setOption("height",c.height),typeof ImageData<"u"&&ImageData!==null&&c instanceof ImageData)w.data=c.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&c instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&c instanceof WebGLRenderingContext)b.copy?w.data=this.getContextData(c):w.context=c;else{if(c.childNodes==null)throw new Error("Invalid image");b.copy?w.data=this.getImageData(c):w.image=c}return this.frames.push(w)}render(){let c;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(()=>{let w,p;const r=[];for(c=0,p=this.frames.length,w=0<=p;w?c<p:c>p;w?c++:c--)r.push(null);return r})();const b=this.spawnWorkers();if(this.options.globalPalette===!0)this.renderNextFrame();else{let w,p;for(c=0,p=b,w=0<=p;w?c<p:c>p;w?c++:c--)this.renderNextFrame()}return this.emit("start"),this.emit("progress",0)}abort(){for(;;){const c=this.activeWorkers.shift();if(c==null)break;this.log("killing active worker"),c.terminate()}return this.running=!1,this.emit("abort")}spawnWorkers(){const c=Math.min(this.options.workers,this.frames.length);return function(b,w,p){let r=[],e=b<w,i=w;for(let s=b;e?s<i:s>i;e?s++:s--)r.push(s);return r}(this.freeWorkers.length,c).forEach(b=>{this.log(`spawning worker ${b}`);const w=new Worker(this.workerURL);return w.onmessage=p=>(this.activeWorkers.splice(this.activeWorkers.indexOf(w),1),this.freeWorkers.push(w),this.frameFinished(p.data)),this.freeWorkers.push(w)}),c}frameFinished(c){if(this.log(`frame ${c.index} finished - ${this.activeWorkers.length} active`),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[c.index]=c,this.options.globalPalette===!0&&(this.options.globalPalette=c.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(let b=1,w=this.freeWorkers.length,p=1<=w;p?b<w:b>w;p?b++:b--)this.renderNextFrame();return Array.from(this.imageParts).includes(null)?this.renderNextFrame():this.finishRendering()}finishRendering(){let c,b=0;for(c of Array.from(this.imageParts))b+=(c.data.length-1)*c.pageSize+c.cursor;b+=c.pageSize-c.cursor,this.log(`rendering finished - filesize ${Math.round(b/1e3)}kb`);const w=new Uint8Array(b);let p=0;for(c of Array.from(this.imageParts))for(let e=0;e<c.data.length;e++){const i=c.data[e];w.set(i,p),e===c.data.length-1?p+=c.cursor:p+=c.pageSize}const r=new Blob([w],{type:"image/gif"});return this.emit("finished",r,w)}renderNextFrame(){if(this.freeWorkers.length===0)throw new Error("No free workers");if(this.nextFrame>=this.frames.length)return;const c=this.frames[this.nextFrame++],b=this.freeWorkers.shift(),w=this.getTask(c);return this.log(`starting frame ${w.index+1} of ${this.frames.length}`),this.activeWorkers.push(b),b.postMessage(w)}getContextData(c){return c.getImageData(0,0,this.options.width,this.options.height).data}getImageData(c){this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height);const b=this._canvas.getContext("2d");return b.fillStyle=this.options.background,b.fillRect(0,0,this.options.width,this.options.height),b.drawImage(c,0,0),this.getContextData(b)}getTask(c){const b=this.frames.indexOf(c),w={index:b,last:b===this.frames.length-1,delay:c.delay,dispose:c.dispose,transparent:c.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:_.name==="chrome"};if(c.data!=null)w.data=c.data;else if(c.context!=null)w.data=this.getContextData(c.context);else{if(c.image==null)throw new Error("Invalid frame");w.data=this.getImageData(c.image)}return w}log(...c){if(this.options.debug)return console.log(...Array.from(c||[]))}}).initClass(),z}();const R=z})(),I})()})})(Ne);var ut=Ne.exports;const pt=Te(ut),qe={workers:2,quality:10,background:"#ffffff",dither:!1};async function ft(x,t){const a=new pt(qe);return x.forEach(f=>a.addFrame(f,{delay:t})),new Promise(f=>{a.on("finished",f),a.render()})}class xe{constructor(t){k(this,"initPromise");k(this,"viewer");k(this,"frames");k(this,"cache");k(this,"prevFramesCache");k(this,"downloadOptions",{download:async()=>await this.download(),copy:async()=>await this.copy(),share:async()=>await this.share()});this.viewer=t,this.initPromise=this.init()}async init(){this.frames=await this.viewer.getFrames()}async getTextFrames(){return await this.viewer.getTextedFrames()}async renderAsync(){await this.initPromise;const t=document.createElement("div");if(this.frames.length!==1){const f=new ue(qe,{quality:{type:"range",min:"1",max:"20",className:"reversed"}},"GIF Render");t.appendChild(f.render())}const a=new ue(this.downloadOptions,void 0,"Save & Share");return t.append(a.render()),t}async getOptions(){await this.initPromise;const t=await this.getTextFrames();if(this.cache&&this.prevFramesCache===t)return this.cache;if(!this.frames)return;if(this.prevFramesCache=t,t.length===1)return this.cache={blob:await new Promise(f=>t[0].toBlob(v=>f(v))),fileName:`${this.viewer.template.key}.png`},this.cache;const a=this.viewer.delay;return this.cache={blob:await ft(a>0?t:t.reverse(),Math.abs(a)),fileName:`${this.viewer.template.key}.gif`},this.cache}async download(){const{blob:t,fileName:a}=await this.getOptions();xe.download(t,a)}async copy(){const{blob:t}=await this.getOptions();if(this.frames.length===1){await xe.copy(t);return}const a=URL.createObjectURL(t),f=`width=${this.frames[0].width}, height=${this.frames[0].height}`;window.open(a,void 0,f),URL.revokeObjectURL(a)}async share(){const{blob:t,fileName:a}=await this.getOptions(),f=new File([t],a,{type:t.type});await navigator.share({url:document.location.href,title:a,files:[f]})}static download(t,a){const f=URL.createObjectURL(t),v=document.createElement("a");v.href=f,v.download=a,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(f)}static async copy(t){try{await navigator.clipboard.write([new ClipboardItem({[t.type]:t})])}catch(a){console.error(a,a.message)}}}const mt={server:[window.location.origin+window.location.pathname,"https://d2n.moe/petpet-js","https://d2n.moe/petpet"],alternateFont:["MiSans-Bold","sans-serif"].join(",")};class vt{constructor(t){k(this,"appElement");k(this,"templateChooser");k(this,"avatarUploader");k(this,"textUploader");k(this,"resultArea");k(this,"inputElement",document.createElement("div"));k(this,"outputElement",document.createElement("div"));k(this,"prevTemplate");k(this,"initPromise");k(this,"backgroundLengthMap");k(this,"viewer");this.appElement=document.getElementById(t),this.appElement.classList.add("petpet-app"),this.templateChooser=new st,this.templateChooser.onchange=()=>this.update(),this.avatarUploader=new Re,this.avatarUploader.onchange=()=>this.update(),this.textUploader=new dt,this.inputElement.append(this.templateChooser.render(),this.avatarUploader.render(),this.textUploader.render()),this.resultArea=new ct,this.outputElement.appendChild(this.resultArea.render()),this.outputElement.style.display="none",this.appElement.append(this.inputElement,this.outputElement),this.initPromise=this.init(),this.update()}async init(){Ke();const t=new it(mt.server);this.backgroundLengthMap=await t.getLengthMap(),this.templateChooser.templates=await t.getPreviewList(),(await t.getUrlSet()).size||this.templateChooser.loading.error()}async update(){await this.initPromise,this.viewer&&this.viewer.destroy();const t=this.templateChooser.template||await this.templateChooser.showModal();if(this.prevTemplate!==t&&(this.avatarUploader.types=[...new Set(t.avatar.map(F=>F.type))]),!this.avatarUploader.ready){this.outputElement.style.display="none";return}this.outputElement.style.display="flex",this.resultArea.showLoading();const a=new Je(t);a.backgroundLength=this.backgroundLengthMap.get(t.key),a.background=t.url;const f=await a.generate(this.avatarUploader.data,this.avatarUploader.extraTemplate);this.textUploader.texts=a.textModelList,await f.play(),this.resultArea.canvas=f.canvas;const v=document.createElement("div");this.resultArea.setting=v;const I=new ue(f.settingObject,{delay:{type:"range",min:"1",max:"256",step:"1"}});v.appendChild(I.render());const M=new xe(f);v.appendChild(await M.renderAsync()),this.prevTemplate=t,this.viewer=f}}new vt("app");
