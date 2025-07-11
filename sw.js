self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("pong-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "sw.js",
        "assets/bounce.mp3",
        "assets/score.mp3",
        "assets/icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
