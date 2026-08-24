const CACHE='etica-em-jogo-v1';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.json','./assets/campus.png','./assets/classroom.png','./assets/library.png','./assets/laboratory.png','./assets/computer_lab.png','./assets/cafeteria.png','./assets/bedroom.png','./assets/creators_room.png','./assets/hero.png','./assets/professor.png','./assets/energy.png','./assets/knowledge.png','./assets/reputation.png','./assets/ethics.png','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
