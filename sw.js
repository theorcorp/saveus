/* 세이브어스 — 인터넷 없이도 열리게 한다.
   한 번 방문하면 모든 파일을 담아 두고, 다음부터는 담아 둔 것을 먼저 쓴다.
   새 버전을 올리면 CACHE 이름이 바뀌어 통째로 다시 받는다. */
const CACHE = "saveus-202611051323";
const ASSETS = [
 "./advisory.js",
 "./alarm-education.js",
 "./design.css",
 "./design.js",
 "./i18n/en.js",
 "./i18n/ja.js",
 "./i18n/ko.js",
 "./i18n/zh.js",
 "./img/act-check.webp",
 "./img/act-guide.webp",
 "./img/act-pack.webp",
 "./img/coach/arms.webp",
 "./img/coach/call.webp",
 "./img/coach/hands.webp",
 "./img/coach/lay.webp",
 "./img/coach/press.webp",
 "./img/coach/speaker.webp",
 "./img/coach/swap.webp",
 "./img/face-calm.webp",
 "./img/face-focus.webp",
 "./img/face-happy.webp",
 "./img/face-smile.webp",
 "./img/face-worry.webp",
 "./img/gear.webp",
 "./img/hero-check.webp",
 "./img/hero-walk.webp",
 "./img/pose-back.webp",
 "./img/pose-front.webp",
 "./img/pose-side.webp",
 "./img/pose-threeq.webp",
 "./index.html",
 "./links.js",
 "./manifest.webmanifest",
 "./media.js",
 "./shelter.js",
 "./video/opening.mp4",
 "./video/saveus.m4a",
 "./voice/ko/alarm/intro.m4a",
 "./voice/ko/alarm/outro.m4a",
 "./voice/ko/f/arms.m4a",
 "./voice/ko/f/arms2.m4a",
 "./voice/ko/f/call.m4a",
 "./voice/ko/f/dontstop.m4a",
 "./voice/ko/f/good.m4a",
 "./voice/ko/f/hands.m4a",
 "./voice/ko/f/handsonly.m4a",
 "./voice/ko/f/keep.m4a",
 "./voice/ko/f/lay.m4a",
 "./voice/ko/f/press.m4a",
 "./voice/ko/f/ready.m4a",
 "./voice/ko/f/recoil.m4a",
 "./voice/ko/f/speaker.m4a",
 "./voice/ko/f/swap.m4a",
 "./voice/ko/m/arms.m4a",
 "./voice/ko/m/arms2.m4a",
 "./voice/ko/m/call.m4a",
 "./voice/ko/m/dontstop.m4a",
 "./voice/ko/m/good.m4a",
 "./voice/ko/m/hands.m4a",
 "./voice/ko/m/handsonly.m4a",
 "./voice/ko/m/keep.m4a",
 "./voice/ko/m/lay.m4a",
 "./voice/ko/m/press.m4a",
 "./voice/ko/m/ready.m4a",
 "./voice/ko/m/recoil.m4a",
 "./voice/ko/m/speaker.m4a",
 "./voice/ko/m/swap.m4a",
 "./webicon/apple-touch-icon.png",
 "./webicon/icon-192.png",
 "./webicon/icon-512.png",
 "./webicon/icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        /* 받아온 것도 담아 둔다. 실패하면 그냥 넘어간다. */
        if (res && res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
