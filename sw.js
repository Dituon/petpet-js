if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let l={};const o=e=>i(e,a),c={module:{uri:a},exports:l,require:o};s[a]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app-41166075.css",revision:null},{url:"assets/app-d2e00ec3.js",revision:null},{url:"assets/avatar-d84cfc5a.png",revision:null},{url:"assets/change-template-size-59801ef5.mp4",revision:null},{url:"assets/edit-avatar-a271232d.mp4",revision:null},{url:"assets/editor-8969190b.js",revision:null},{url:"assets/gif-4aec5b19.js",revision:null},{url:"assets/gif-aa86af30.css",revision:null},{url:"assets/icon-128x128-7ad5d31d.png",revision:null},{url:"assets/icon-192x192-b77abe40.png",revision:null},{url:"assets/icon-96x96-084473ea.png",revision:null},{url:"assets/index-3e51610b.css",revision:null},{url:"assets/index-e4ddeae3.css",revision:null},{url:"assets/main-6f121cba.js",revision:null},{url:"assets/readme-c6b26520.css",revision:null},{url:"assets/readme-e506e057.js",revision:null},{url:"assets/result-preview-79577a4b.mp4",revision:null},{url:"assets/select-template-56b49c1f.mp4",revision:null},{url:"assets/upload-avatar-381ae173.mp4",revision:null},{url:"data/moe.d2n.petpet-js/osu/0.png",revision:"1cdb8b4577e449db0f734d253262a236"},{url:"data/moe.d2n.petpet-js/osu/data.json",revision:"84a70770d12151ab54e5c27deffff8fc"},{url:"editor/index.html",revision:"3cb283f0a2fa98efce2ddd819635d319"},{url:"icons/icon-128x128.png",revision:"f3c72a059f860ec9a8e40182af51b954"},{url:"icons/icon-144x144.png",revision:"e65e6137fddb4f7d1b865ae66608bfe3"},{url:"icons/icon-152x152.png",revision:"8c6164721afab4b14557524ecbfe2b78"},{url:"icons/icon-192x192.png",revision:"403b45e5525b37c01f34dc336203e0d2"},{url:"icons/icon-284x284.png",revision:"adccd6d3373968dca2bc9d062918bfc0"},{url:"icons/icon-48x48.png",revision:"cb75d81799fb0752924b548fca4c52d4"},{url:"icons/icon-512x512.png",revision:"7caf7257bbd1c72ee8cfbd27a710102e"},{url:"icons/icon-72x72.png",revision:"1f7bd2b6102e604c41e4a609f18788f4"},{url:"icons/icon-96x96.png",revision:"8a98b8a7a350f82a7c9ebbbc5716f10b"},{url:"index.html",revision:"aa7b2fbf9ecf3fe135b7a77cd589359c"},{url:"index.json",revision:"8d02d3e0f3dad210dee42bdc092f99e9"},{url:"index.map.json",revision:"523e295672051de84fdadf0c376aea25"},{url:"inject.js",revision:"669ea2f0611b02f9c70687b0b5b88213"},{url:"manifest.webmanifest",revision:"7da6adb949275130e6ed83731f74a6ad"},{url:"readme.html",revision:"604e0a2156af0de72babd7a25cb91bb5"},{url:"README.md",revision:"471eabee197d53ae3f2b8a952a5675e1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"7da6adb949275130e6ed83731f74a6ad"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
