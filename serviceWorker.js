console.log('serviceWorker.js');

const staticResourceMatcher = /.*\.((png)|(jpg)|(svg)|(mp4)|(webp))/;
const cacheName = 'cacheName';

self.addEventListener('install', (event) => {
  console.log('service worker installed.');
});

this.addEventListener('activate', (event) => {
  console.log('service worker activated.');

  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          return caches.delete(key);
        }),
      ),
    ),
  );
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  if (staticResourceMatcher.test(url)) {
    console.log('match offline resource rules: ' + url);
    event.respondWith(
      caches.match(event.request).then((response) => {
        // caches.match() always resolves
        // but in case of success response will have value
        if (response !== undefined) {
          return response;
        } else {
          return (
            fetch(event.request)
              .then((response) => {
                // response may be used only once
                // we need to save clone to put one copy in cache
                // and serve second one
                console.log('service worker fetch ' + url + ' ' + response.ok);

                if (response.ok) {
                  let responseClone = response.clone();

                  caches.open(cacheName).then((cache) => {
                    console.log('service worker save resource ' + url);
                    cache.put(event.request, responseClone);
                  });
                }
                return response;
              })
              // try again
              .catch(() => console.log('cannot get response ' + url))
          );
        }
      }),
    );
  }
});
