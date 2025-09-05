'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b2995ccd0202be931271dbc7e37bd992",
"assets/AssetManifest.bin.json": "a1c64ba71392043cbb64f2d0ea8e953d",
"assets/AssetManifest.json": "a8ffea36f13baadf54e24e90bfa590b5",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/images/4.jpg": "cdf642cc8024dc6c92df4e23e41086bb",
"assets/assets/images/a1.jpg": "a609aa60c1f9824955067b110162f15d",
"assets/assets/images/a2.jpg": "0e8abe4d3b55cb0f1dbcf46a99b1c85d",
"assets/assets/images/a2poster.png": "127c0a359a96bce36e6d9905a353d464",
"assets/assets/images/a3.jpg": "05e59e207820e7b4c085b53ccfe3e260",
"assets/assets/images/a4.jpg": "1e495d3ff0ef3d3ab3dbd0ff3b7747a4",
"assets/assets/images/a5.jpg": "2802ab41e5341f1f4b5cc87ab03dd08c",
"assets/assets/images/a6.jpg": "a43ca6fbf48b708f026aedbcb4b3008a",
"assets/assets/images/a7.jpg": "c56adeba615d1264deaa5677ef58820e",
"assets/assets/images/a8.jpg": "ad1f4818bcab78a0490062636768ae5c",
"assets/assets/images/a9.jpg": "1f8bc74aa65f890a46a2e15cce4a639c",
"assets/assets/images/b1.jpg": "f4c0a7ac1a01ae36128f20e037a906d3",
"assets/assets/images/b2.jpg": "7ff89777cc0713d70a41c2cd4dc59fdf",
"assets/assets/images/b3.jpg": "17f7bc4320186f1661af12aea82060cf",
"assets/assets/images/b6.png": "fdc10529d0c60d9d90d20a39e07c7613",
"assets/assets/images/banner.jpg": "5d869ba97fad0630fb033f18ba86648c",
"assets/assets/images/banner4.jpg": "818114b6dbc0bd1e701f821f0a8b939d",
"assets/assets/images/bannernew.png": "d55324dffaaa84805f2a63c31e1285be",
"assets/assets/images/bannerweb.jpg": "13c49ea3b3181d183144433983076fd1",
"assets/assets/images/bannerweb.png": "4fe0fe6de1a1234ec6081fa9d0a0aaa4",
"assets/assets/images/bannerweb2.png": "08563b866bb0db1db20ba494a8eb35e9",
"assets/assets/images/big.jpg": "502f4e1b9206144abf1782914b8ed4cc",
"assets/assets/images/brocherbanner.jpg": "b1ae7d65bb31726348e8d4809aae0116",
"assets/assets/images/broucher.jpg": "c2e7e08fac0f8db18150b8172dadc4dd",
"assets/assets/images/broucher1.jpg": "1d82fc8a23a69ca99e06cece63c859b2",
"assets/assets/images/broucher2.jpg": "c06d56cbeec83b25c8e9b46133fc4174",
"assets/assets/images/broucher3.jpg": "fffaf408ae7baf6e23de34c47180d1f3",
"assets/assets/images/calenderbanner.jpg": "4733fe5988e10831eaf6cf6f9562dc13",
"assets/assets/images/card%2520calender.jpg": "ced1cefbafa49b4b5a7fdc9e2b8e92ee",
"assets/assets/images/card1.jpg": "f6d45e718362064adad4d1096b25189b",
"assets/assets/images/card2.jpg": "ff100f47fc93b93bd299c09bfe6d8f00",
"assets/assets/images/card3.jpg": "dec420e898f3900ccb6e7db05089fc43",
"assets/assets/images/card4.jpg": "400e20e79c827f8b918d17faad5244aa",
"assets/assets/images/cardbanner.jpg": "d4e937dd455625a664f114b9d6c26e61",
"assets/assets/images/customizedcalender.jpg": "f29e2205aa28897ad327119137ee24ec",
"assets/assets/images/d1.jpg": "0cc16b5ad8a43807eadfecb064fd896c",
"assets/assets/images/d2.jpeg": "a4477fa4eb1ad14acdb954b3b2608bad",
"assets/assets/images/d3.jpg": "177851e779bf948ec5878c43120528d1",
"assets/assets/images/d4.jpg": "25ea825ae481646ba17c7b90cfde83e6",
"assets/assets/images/deskcalender.jpg": "f2def75ca1bc5e0b95a77b6bdfb6074d",
"assets/assets/images/easyprint.jpg": "6235bc4a21ab1b167a2309d95350a3ee",
"assets/assets/images/envelope.jpg": "d90f9f380a075ab239a6856e04381506",
"assets/assets/images/Flyer.jpg": "8f340f368faa3c29fccfb0f7138456a1",
"assets/assets/images/Flyer1.jpg": "1fb355eb86f0bc913b1f57ed3b6168fb",
"assets/assets/images/Flyer2.jpg": "78b5e3263224370aa57475a3eca90c36",
"assets/assets/images/Flyer3.jpg": "e39fb6f4df75222cd33b19937e982951",
"assets/assets/images/gift.jpg": "59e11a81079ce0344d4cd1ed5b8ea43a",
"assets/assets/images/l2.jpg": "502f4e1b9206144abf1782914b8ed4cc",
"assets/assets/images/l3.jpg": "c8af9734fca606e98e428c60bb9670ef",
"assets/assets/images/logo.png": "708ba0700ead0c4c39061ae916a2bda8",
"assets/assets/images/logos.png": "e19df8c8838823e4aadee939954179a9",
"assets/assets/images/mainbanner.jpg": "e9c142783747125fcd4350db2b66e210",
"assets/assets/images/mainbanner.png": "2cb93315683aca54651879119458241d",
"assets/assets/images/mugs.jpg": "118550a193685ca0878543745a530752",
"assets/assets/images/postcard.jpg": "cf059b91f04cd53ef5f9d2f2dc57621d",
"assets/assets/images/product.png": "91a59a918b3b3ff42530c170fdde6d2c",
"assets/assets/images/tshirt1.jpg": "30e9b6433cc60fd51f74a235b1271e6c",
"assets/assets/images/tshirt2.jpg": "dd5ca8f7c471af9e6deebb2ccad40f13",
"assets/assets/images/tshirt3.jpg": "ae1cb1eab07d7ef552b4ad8c193ed596",
"assets/assets/images/tshirt4.jpg": "49445135182b4f1b1837a8f2f507cd16",
"assets/assets/images/tshirtbanner.jpg": "7ab3cb56eaba8b2b90d29efd2303c81b",
"assets/assets/images/w1.jpg": "5836a87ddf7fcb60714b3c8c5fe16bea",
"assets/assets/images/w2.jpg": "9c452c2cb37841bc3a5d6e57dc2d1d04",
"assets/assets/images/w3.jpg": "e7a46cbf83b58154e9705c0802e55819",
"assets/assets/images/w4.jpg": "03dae79f7b122a9a01ab87fe35a8db73",
"assets/assets/images/wallcalender.jpg": "7bdba1fcc2e052c914a20f5abd5fe7cd",
"assets/assets/images/whatsapp.png": "96c9c52ef4c22fb09b95f35d22c05706",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "15b7043d2b7366468dba42d109f2cc93",
"assets/NOTICES": "e07152995a506076d31f44634ab2b2e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "dfea03b5985689c9d5cb2142579aaa1f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ef98e8e53bd9dd178dbffa02dcc96d0e",
"icons/Icon-192.png": "dfea03b5985689c9d5cb2142579aaa1f",
"icons/Icon-512.png": "4834c8e412a9acb70765d8da49d76b36",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce0f803bb2bedb260509e6c3faa541e5",
"/": "ce0f803bb2bedb260509e6c3faa541e5",
"main.dart.js": "0a717e3dc6bbcc2af410c021a53b8588",
"manifest.json": "04baa50888e5fcf7dba9a24058039e83",
"version.json": "e6f4a13706ff900e7089f5afcfb6c8ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
