'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4c82141e90c9cda5b68c9151a867f72e",
".git/config": "1d283777bdd356f5217648fb4150fead",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bb007b8a7a7d6dae646a602cbbcf9207",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "5335c500ff0dead36de837b7a6d3038d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46f4325a8f37334d196608f1480c557b",
".git/logs/refs/heads/master": "46f4325a8f37334d196608f1480c557b",
".git/logs/refs/remotes/origin/master": "435b2a60215f63d7517856ced1c1b2f2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/43314872e5ba5acb5acba1524eff44fe601778": "820b54fa6895a7a1c7169f6b89b4c3cb",
".git/objects/0b/f24393385792c9dac717b05ebbddc3e1f0773c": "ef138d7c0e26875866def03666d22cf6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/10/e2c73d6f301a3c007b68f81de0cd9cfb9ac72e": "85ddd885a595c981aebb0438cbc885e3",
".git/objects/13/ae303048e70d4aeb947be6ccddf081e2db1b3a": "ee22bac76a6d0fa677ce2e6cb1d93a96",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/9bbbd2a4d640fca2586bf0a506fd48108d3661": "a8a2863b3d8bdeab37f957d5fd9bece7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/8ea77f04d62d56fce73216f11dc59c39ddc254": "0fe135da4d2e6072c525882e198c1f87",
".git/objects/2a/dabbd0f3c1ec7afacc31fc1374792ad718ccc7": "3cf4d40ef00fb3e7cd7bbb5d0e27b3ad",
".git/objects/2d/ebd0ac012e43e9e29b6d2277225e75880dfc53": "4274959c30260909df9d90e8c0b03a44",
".git/objects/35/e11aa7c63b9664409b02fc83e80b5660f713e1": "df98666aabd8b624666c6a55ac72d1be",
".git/objects/37/7531f503cac64eb3e5076b6beae7c5979747d4": "6a910d35532f3ff4305b554607a48ea2",
".git/objects/3f/0ede44ef2f58cd701e4ae971844205b60328d2": "302e82fb66456d91d53f3aca56efe02b",
".git/objects/4b/89bb4e33effdd7f98e5f9c72674de7b8b60b62": "84d601dfefabda4e12817bad0ed65da2",
".git/objects/50/7f7b210a031bc2a139d0d7cf586fc639ee44bb": "b3374b67268c5a2d8a7823f8d323b7f9",
".git/objects/5f/659a56235eaa6a2c680edf9425d999eb0df4a2": "f4a35d113f21e89fc3f466937051eb5c",
".git/objects/6c/de7524e2d54bccb4e2e0ea15416f81c46fc7aa": "f7cdb5ceabf52d60274e401439aee4fe",
".git/objects/6e/0369a857c86566a39494743649bb626b631c8c": "86e34bc3aaf11a799c0dc31caca95d18",
".git/objects/7c/48aaac404e390a5d5c4135da28f7e5651454d1": "f6fdd7d0c1956988aae0e3eb92e9cc87",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/c2eb6eaa869d97c37ae473a231d1ec8bd04318": "380ddd3781799eb4c6c69becd0a6f1ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/72dcdb110a29c3b86ad0199790018ed120d6b1": "81beecb95a0dc83b235b19fec1e6c4d3",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/9b/5003eaacb3cacd0528dde2c2790974c043f60c": "cd7fbe4fbf20bcbb3e174e35a6a53f0b",
".git/objects/9c/b938a2ffc806530a0d0ca2d62a10a72156998c": "c4d1beae38b65c368513a210d92b830e",
".git/objects/9e/b5cabf87143b8424a28acfd5e81667be18f05d": "f6b6925d60253a9a979f4c9b3d10933d",
".git/objects/a6/8ca41ec1cb5d477951a6b077947b51cfc941c7": "66c0182581750d0b48b861bab135390c",
".git/objects/ad/6de6cd8154ebbe6b652d8e40536e1b9005a994": "ec2cf711daa2c8dc43ef851996e94ece",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3f0929d4a5ef42a823231ab44f447883f10c6d": "22298ef7a2a6b7e9244466427e7fb950",
".git/objects/bc/f5aebf4202864303346f091d15b13d7726869f": "7723c66fe005ac1ecb94357b14e77fcc",
".git/objects/c4/5f452a1bde4df6f0b2b02bd2a5c6221ea95b87": "e4d7273828d7f4b64920f95c3202019e",
".git/objects/cd/d78ea0260dc44f439407ae7dd7d0db6df8d3d6": "f6963159d049d87a8a0a70fb05eb2f38",
".git/objects/d4/e508923bf00f598f7ce2876c183177bbf8f6d9": "d09dfe75b315e6a449e6a3fd1ecfe2d9",
".git/objects/d5/ed75621d2138c6f918eb50658fdbdb7cd6c23d": "57b76cd936b5a71812d5af2cfa18e031",
".git/objects/d5/fab7451051e6d58b819b922237b60c19762e44": "90ee5143d2e12e96136d40b737fb88ae",
".git/objects/da/c02ca39f3d123667937668dc80b74eec505b8e": "b115ce263f66b2e26e1608743bc685eb",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/de/b0f7f39ba376d013a3e02afcb2f470f5a3f9e9": "bc8e3cc066cbec603a701ce011a6e2f9",
".git/objects/df/91de589eae662727975aaa7d0cb74bd435b620": "addf9e56b3d40c522a4de70b7958adb0",
".git/objects/df/9e5a9688dec5232efe4fd88a9179753c81f491": "95b4bf4058b3dc15aa04aca3890c5345",
".git/objects/e9/df37bc8400d3165bb14cd9d909bb5d9e575d7a": "3837952452456476ab71b605ea548127",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f1/e2422d1a59edd49f71614e7a29144e9e2a0dda": "c6b719e85112df7a81181609dd1fbac2",
".git/objects/f3/4e5aa8842bffb160e80a2aefbc43d85c812a88": "4ebaba565cfd49e6ec43fdee669fc170",
".git/objects/f6/340fad405adcbb0571c91d92ae0312cd28f8bd": "d22a0d2c315d5b3a7eaa988d0061670f",
".git/objects/f7/16255972003da796514131dc98519a3a0db11b": "2fb2db42e1001d394b78e65585c68eed",
".git/objects/fb/ca5438eb36025ae397897d994010f6d0da6300": "24f8dfe61ef038b95180d34bb7e95556",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "afb2a1e3688e7bb19ca275481063dd75",
".git/refs/heads/master": "7bef1dd0b1313e8eadcf9a96aa493644",
".git/refs/remotes/origin/master": "7bef1dd0b1313e8eadcf9a96aa493644",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "b417fdbb01d8bbde32ca38a3573bfd90",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/softsync_png.png": "19712b4f595e79c54627118df602f93c",
"CNAME": "10826b7babe1c596bc396a7ca2fc98ff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icon.png": "120b989dc0e3c5e508b928ec0dc4a016",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c7fdaa99d2a73fd14c5078e16ef15a8d",
"/": "c7fdaa99d2a73fd14c5078e16ef15a8d",
"main.dart.js": "8fb711802dd991cbb3880f251597edf7",
"manifest.json": "0bbccf43f0d6e634261e0f5ea570e18a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
