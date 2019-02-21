self.addEventListener('install', (event) => {
    console.log("Hello World");
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                // cache.add('/');
                // cache.add('/index.html');
                // cache.add('/src/js/app.js');
                cache.addAll([
                    '/',
                    'index.html',
                    '/src/js/app.js',
                    '/src/css/app.css',
                    '/src/images/pwa.jpg',
                    'https://fonts.googleapis.com/css?family=Raleway:400,700'
                ]);
            })
    );
});

self.addEventListener('activate', () => {
    console.log("Activated");
});

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
        .then((res)=>{
            if(res)
                return res;
            else{
                return fetch(event.request)
            }
        })
    );
});