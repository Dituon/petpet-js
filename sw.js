if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const d=e=>i(e,l),o={module:{uri:l},exports:t,require:d};s[l]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/app-41166075.css",revision:null},{url:"assets/app-d2e00ec3.js",revision:null},{url:"assets/editor-d647ef1d.js",revision:null},{url:"assets/index-6421ce99.css",revision:null},{url:"assets/index-db61e03f.css",revision:null},{url:"assets/main-f8ac6efd.js",revision:null},{url:"assets/petpet-model-53078d09.css",revision:null},{url:"assets/petpet-model-d51b3d58.js",revision:null},{url:"assets/readme-c6b26520.css",revision:null},{url:"assets/readme-e506e057.js",revision:null},{url:"editor/index.html",revision:"478408b58cdda89658b2a14601439396"},{url:"index.html",revision:"8cc9f3a3be7a44212db628e8a310ba5c"},{url:"inject.js",revision:"090d96323aa9d2917e800607d9923cd1"},{url:"readme.html",revision:"9c8d52f932bd35fe2847fb1ff0f840d5"},{url:"manifest.webmanifest",revision:"7da6adb949275130e6ed83731f74a6ad"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
