
    self.addEventListener('activate', function(event) {
      event.waitUntil(self.clients.claim());
    });

    var cacheName = 'dm-ai';
    var filesToCache = [
                  '/',  
                '/index.html',
                '/css/animate.css',
                '/css/main.css',
                '/css/style.css',
                '/css/style-wel.css',
                '/pages/welcome.html',
                'https://code.jquery.com/jquery-3.2.1.slim.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
                'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
    ];
    self.addEventListener('install', function(e) {
      console.log('[ServiceWorker] Install');
      e.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(filesToCache);
        })
      );
    });
    self.addEventListener('activate',  event => {
      event.waitUntil(self.clients.claim());
    });
    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request, {ignoreSearch:true}).then(response => {
          return response || fetch(event.request);
        })
      );
    });
    self.skipWaiting();