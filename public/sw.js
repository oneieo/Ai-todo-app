if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>i(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Disabled.FAi.png",revision:"617df68c1cf6076a0040aba2df235601"},{url:"/Disabled.PAi.png",revision:"acf1919a6b29442d564fc502a393546b"},{url:"/Fai.png",revision:"79503a2c07c64e6f77061f368b749260"},{url:"/Fai2.png",revision:"3162ec527dfa0660ac843c159e88958d"},{url:"/Loading.FAi.gif",revision:"30f6b9f6474710703a3dc0e15af0f8e8"},{url:"/Loading.PAi.gif",revision:"b299f1ec2b933300f95489ea76311e0c"},{url:"/LoadingSpinner.gif",revision:"f690f8cac3864650f6f04c0c8ec7e321"},{url:"/Pai.png",revision:"0192e468e18a6bb1e04b19b82d9b7cc4"},{url:"/Pai2.png",revision:"282a7413b9e8ef19ff064ee5667f6760"},{url:"/_next/app-build-manifest.json",revision:"8a7f257824d52d5d3e68c5b9487b4a18"},{url:"/_next/static/2VBZYz2E8R1xOVbMzfdYy/_buildManifest.js",revision:"3e2d62a10f4d6bf0b92e14aecf7836f4"},{url:"/_next/static/2VBZYz2E8R1xOVbMzfdYy/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1279-135fbb65de8b07a7.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/131-7bbc6c448eee80d4.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/1429-ed73a1a2611213ab.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/1444-a5cef2cb6c407846.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/231-1d54837ae8ad4852.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/2678-10ecf20071b07feb.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/3202-503bd758c1dab640.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/3424-8a54bba0cc0912a8.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/3492-f34c458c469977fa.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/4007-1b8e76ab85d892ea.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/4032-9e363812286eeb8b.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/4222-ce36839f0c926554.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/5169-f4523681c2f4b3d6.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/5570-24f0788e8aa108ad.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/5909-5e5d13b73dc30387.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/5956-9cab98977be00e19.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/5e22fd23-4f0afb276be0bd4a.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/6351-8953377d75332edc.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/6374.e08cfbbbbee2c9d4.js",revision:"e08cfbbbbee2c9d4"},{url:"/_next/static/chunks/6431-95777a4681c64b7f.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/6648-4bcac4d3206dc643.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/7023-6182b76eddf5c24f.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/7035.cb726032edead13d.js",revision:"cb726032edead13d"},{url:"/_next/static/chunks/7583-545b5ea315128f09.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/8765-4807d22476b1928d.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/8e1d74a4-fb639afd2d87018c.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/9544-04d309b2b4018ea9.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/9852-f5089f5f7959d5e6.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/9c4e2130-9164acf0f106f7c9.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(auth)/layout-2a544e07d087ea44.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(auth)/login/find-password/page-5be7083fc58318a1.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(auth)/login/page-1b1a138259661d31.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(auth)/login/reset-password/page-4f085b4fd650a1b2.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(auth)/sign-up/page-6b34a6601d7274c7.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(landing-page)/layout-eebdbfbee50d24b1.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(landing-page)/page-38ec5a0ad0009289.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/chat/%5Bai_type%5D/%5Bid%5D/page-4a86f24077f7ac5d.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/chat/%5Bai_type%5D/layout-efa64a13db5baa12.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/chat/page-bb241df11a321d25.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/diary-detail/%5Bid%5D/page-53f9b3635df15d81.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/diary-map/%5Bid%5D/page-2098bacd86bbfdfb.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/page-b850af4cf7cb47ea.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/write-diary/%5Bid%5D/page-25ca8a50f935a083.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/write-diary/layout-3aff9ed1784e2039.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/diary/write-diary/page-164e86eed762f618.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/home/page-755749a169c3eb34.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/layout-4422ca04ee46f68c.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/loading-c4fa652b18c93050.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/todo-list/loading-2eed173f9d1576a5.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(main)/todo-list/page-914fcee582e0beb4.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(non-header)/layout-06a692c0af9e42d9.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(non-header)/my-page/account/delete-account/page-2ede7b2fdf475c04.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(non-header)/my-page/account/nickname/page-c8eaaa05d842a2e0.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(non-header)/my-page/account/password/page-18bb09a7eec898e5.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/(non-header)/my-page/page-c48aa39d85e563b2.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/_not-found/page-b5e229489a84e56a.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/layout-9cacaf800d01b59d.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/app/loading-d2cdc736a3276a50.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/cff4c5fa-75138d140f423d30.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/e8686b1f-015a470cda794108.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/fd9d1056-2f3c8401e41ee9b0.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/framework-8e0e0f4a6b83a956.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/main-app-b2ea76ebb2b5734c.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/main-c63131544a18a744.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/pages/_app-f870474a17b7f2fd.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/pages/_error-c66a4e8afc46f17b.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4c772f16048745c1.js",revision:"2VBZYz2E8R1xOVbMzfdYy"},{url:"/_next/static/css/12162bfe73c45da2.css",revision:"12162bfe73c45da2"},{url:"/_next/static/css/6b73a2adb136f33d.css",revision:"6b73a2adb136f33d"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/css/b534b6cb49de5040.css",revision:"b534b6cb49de5040"},{url:"/_next/static/css/f4d9c5cabd9c8386.css",revision:"f4d9c5cabd9c8386"},{url:"/_next/static/css/fb9a9af3f6f81ba5.css",revision:"fb9a9af3f6f81ba5"},{url:"/bannerHome1-Mobile.png",revision:"4ab0a7fb9944ca0415ea030385881f4c"},{url:"/bannerHome1-PC.png",revision:"54a5810f8a1faa16da10dbf705ad5872"},{url:"/bannerHome2-Mobile.png",revision:"de0bf1ffc809f5e3639206a47002becf"},{url:"/bannerHome2-PC.png",revision:"8a11051d064ada2adbe062f45aa98dc7"},{url:"/desktop-layout/image.layout.chat.search.svg",revision:"c03458d2859d6fbd9df4d4947d9b8b76"},{url:"/desktop-layout/image.layout.chat.svg",revision:"4a028e81e65a528e7267ac27a2d9305f"},{url:"/desktop-layout/image.layout.default.svg",revision:"2acce8ce5c5c06a009dba9919d9cb0e7"},{url:"/desktop-layout/image.layout.diary.svg",revision:"fa2f2ec024f5f319776613a1e69c3b10"},{url:"/desktop-layout/image.layout.fai.svg",revision:"05641135b5e6cb0a2381053ab50ef0a2"},{url:"/desktop-layout/image.layout.home.svg",revision:"68595c709371083bfc0946f731b84b5b"},{url:"/desktop-layout/image.layout.pai.svg",revision:"5646ea214fd5898753bb656abfb0b5cd"},{url:"/desktop-layout/image.layout.todo.svg",revision:"f28e82336222bf9fb93925de38643b3e"},{url:"/fai.svg",revision:"88d4b3e740aaf7cfb9afc52b79de2af8"},{url:"/fonts/SUIT-Bold.otf",revision:"63030b6a45104b353d4b6505b0a1571a"},{url:"/fonts/SUIT-ExtraBold.otf",revision:"c8024d6cc095b1d3c0e813e6033c0b51"},{url:"/fonts/SUIT-ExtraLight.otf",revision:"e008d271624cbc88f4688250a5cd082b"},{url:"/fonts/SUIT-Heavy.otf",revision:"6c6324307633dbe196e0e5166af66dbd"},{url:"/fonts/SUIT-Light.otf",revision:"dbbffc15f676cd17b50188b5ee13b9b3"},{url:"/fonts/SUIT-Medium.otf",revision:"3f3df4b60f6bb6ea0b6b96fcba104f92"},{url:"/fonts/SUIT-Regular.otf",revision:"8eaee96593f44d5d86d4f5962bb63dbd"},{url:"/fonts/SUIT-SemiBold.otf",revision:"da50459cdb58f90988e8060fa7d7048a"},{url:"/fonts/SUIT-Thin.otf",revision:"91e1d159ef66e595bdd7f90723d56ffd"},{url:"/homeFAi.png",revision:"a649c23f3840295d509b7d262d42be96"},{url:"/homePAi.png",revision:"f6be9912e0ac83d1e6367de918041568"},{url:"/icons/favicon.png",revision:"6a3874b21b2f86e2eb0de31fe6cbbc73"},{url:"/icons/pai.favicon 2.png",revision:"830419c6ab2b7c45936aff550522a3d9"},{url:"/icons/pai.favicon.png",revision:"830419c6ab2b7c45936aff550522a3d9"},{url:"/icons/pwa-icon-512.png",revision:"63297696b6377049f888521e45bc6cc6"},{url:"/icons/pwa-icon-72.png",revision:"c4892059e99bbb945f5f9b23973f9cf4"},{url:"/image.layout.chat.png",revision:"935b3e3127fc066609d54778b8d770d4"},{url:"/image.layout.chat.search.png",revision:"2a7c4e13fe1872f76a1bf3782c82a741"},{url:"/image.layout.default.png",revision:"994c9be4c558aa8dceee3e2391807928"},{url:"/image.layout.diary.png",revision:"99a2007503cd882549187f7c4def10d4"},{url:"/image.layout.fai.png",revision:"681edbe88fe46be7ce94d7299dbe4a04"},{url:"/image.layout.home.png",revision:"a6cd59fa90f5d5b2388edbee33d1d059"},{url:"/image.layout.pai.png",revision:"2f7d877a8dcb86646c281945ecfb4d85"},{url:"/image.layout.todo.png",revision:"3e672ce572cbf738451b5e728a31ac78"},{url:"/landingIMG/Landing_Img_1_Mobile.png",revision:"b4714fb426ac537e571693774816cefa"},{url:"/landingIMG/Landing_Img_1_PC.png",revision:"71d13f2965336e01df0b2bea93e9e6a1"},{url:"/landingIMG/Landing_Img_2(common).png",revision:"16077a29f056d1c2596e1c06f5c86f70"},{url:"/landingIMG/Landing_Img_3(common).png",revision:"7e24acf239322ff1bae82f32e761f999"},{url:"/landingIMG/Landing_Img_4(common).png",revision:"acbf7e8510dfeffb1c0a5ef4350dd62d"},{url:"/main-banner/Banner.Home-PC(1284_320).svg",revision:"397caae64c91b566f1dbaf71f05e74b2"},{url:"/main-banner/bannerHome1-PC.svg",revision:"21de3bacb0d721a671190b389501b14a"},{url:"/main-banner/bannerHome2-Mobile.svg",revision:"23e4d8af1708a6b0e08ff4b7d57a81c8"},{url:"/main-banner/bannerHome2-PC.svg",revision:"98decdc8565c3e6ed42e68574b16cb52"},{url:"/main.logo.svg",revision:"5dfa1a4c2e4a028bc73369565ce6e7af"},{url:"/manifest.json",revision:"a20d2a35a8d9b9b811df1c411a332189"},{url:"/pai.svg",revision:"1eec15059ecf614728a2001a7ce4444b"},{url:"/saveDiary.gif",revision:"07d712818a4a0bb53dc68ecd2ea04eef"},{url:"/search.loading.spinner.gif",revision:"f36f2ded006070be37dbfc7bdc1855f5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
