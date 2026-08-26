const CACHE='etica-academica-v16-pista10';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/campus.png','./assets/classroom.png','./assets/library.png','./assets/laboratory.png','./assets/computer_lab.png','./assets/cafeteria.png','./assets/bedroom.png','./assets/creators_room.png','./assets/professor.png','./assets/energy.png','./assets/knowledge.png','./assets/reputation.png','./assets/ethics.png','./assets/folder.png','./assets/article.png','./assets/laptop.png','./assets/choice.png','./assets/trophy.png',...['left','right'].flatMap(d=>[0,1,2,3].map(i=>`./assets/hero_frames/${d}_${i}.png`)),
  './assets/audio/click.wav',
  './assets/audio/success.wav',
  './assets/audio/warning.wav',
  './assets/audio/mission.wav',
  './assets/audio/step.wav'
  './assets/hero_frames/front_0.png',
  './assets/hero_frames/front_1.png',
  './assets/hero_frames/front_2.png',
  './assets/hero_frames/front_3.png',
  './assets/hero_frames/back_0.png',
  './assets/hero_frames/back_1.png',
  './assets/hero_frames/back_2.png',
  './assets/hero_frames/back_3.png',
  './assets/hero_frames/left_0.png',
  './assets/hero_frames/left_1.png',
  './assets/hero_frames/left_2.png',
  './assets/hero_frames/left_3.png',
  './assets/hero_frames/right_0.png',
  './assets/hero_frames/right_1.png',
  './assets/hero_frames/right_2.png',
  './assets/hero_frames/right_3.png',
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
