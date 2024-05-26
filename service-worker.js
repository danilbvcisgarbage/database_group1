/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "4d032277d8c16da467888cd6385ffeab"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d8c1bca9.css",
    "revision": "b8f0f84b72218fcd082501a240ef33b8"
  },
  {
    "url": "assets/img/Delete.9d82c3fd.jpg",
    "revision": "9d82c3fd049795d8fe4ebe482be79089"
  },
  {
    "url": "assets/img/diagram.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/Exception_handling.1001eb49.jpg",
    "revision": "1001eb492cb07bdb5211ae4e1cc5f8a9"
  },
  {
    "url": "assets/img/GET_user_by_id.4dbf45e5.jpg",
    "revision": "4dbf45e59481a91c381f3126e5d0572b"
  },
  {
    "url": "assets/img/GET_users.044693f1.jpg",
    "revision": "044693f1e2bd3239f35d6cea9f1c6e82"
  },
  {
    "url": "assets/img/PATCH_update_user.fea63534.jpg",
    "revision": "fea63534753b9817062c598be873d2a4"
  },
  {
    "url": "assets/img/Post.da4470af.jpg",
    "revision": "da4470af044ed263245d37cdb08df1f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start_server.567d23cb.jpg",
    "revision": "567d23cb945e3ddbf283a4f88f4b58bc"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.a6edf82a.js",
    "revision": "295a4aa1a0faf978437e25bba160c404"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.55990b44.js",
    "revision": "768de984c2ab4ef73fa1ddc8135d28ca"
  },
  {
    "url": "assets/js/18.410c3e79.js",
    "revision": "809414cc76ae2454e33d75fde6abfa7c"
  },
  {
    "url": "assets/js/19.5e4c39c9.js",
    "revision": "87f4a530aacfe658619ccbd0f76f2f70"
  },
  {
    "url": "assets/js/2.c887a8bf.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.40869d68.js",
    "revision": "10189e0d113cdd33f96838094ee17486"
  },
  {
    "url": "assets/js/21.50b1ea50.js",
    "revision": "1f0b7315b7d89f23696de944a59e0da2"
  },
  {
    "url": "assets/js/22.6543b886.js",
    "revision": "167b87a32676546346c5da7bdbf987c7"
  },
  {
    "url": "assets/js/23.ab1c1834.js",
    "revision": "0b9988e10347cb7487c2e93bd9643ff1"
  },
  {
    "url": "assets/js/24.34ecc27b.js",
    "revision": "850f8e4348e82796f0ceb368ce434eb1"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.19ce4dae.js",
    "revision": "d283035184a19eeb9cef705585175773"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.aabb1671.js",
    "revision": "b48d37fa740acf7cad62757ed116aeae"
  },
  {
    "url": "assets/js/7.d760a0f6.js",
    "revision": "91853f31d936ac14cdc687d508519b57"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.b1c6c4cc.js",
    "revision": "ddf339633a1109d390fd3d68b49baf9a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fc894fb0bc1136331f0317e3786992c1"
  },
  {
    "url": "design/index.html",
    "revision": "429acd332417ec7be5a62eea27a55cf2"
  },
  {
    "url": "index.html",
    "revision": "c3000c628bf578e6576750a6d6906309"
  },
  {
    "url": "intro/index.html",
    "revision": "721e7ea922027cf4871bb21415d65053"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6af939b7891ecfe4334c7261ff76eef0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "edb2c16295587df6c7a71f94ea30c097"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "31418bd12f10f02fed9616d8ad9a5f24"
  },
  {
    "url": "software/index.html",
    "revision": "e0709efc87c7dc5c8e04cfb9974c45bc"
  },
  {
    "url": "test/index.html",
    "revision": "6f83d092cf8ce7c6fc2a06b38a7b778f"
  },
  {
    "url": "use cases/index.html",
    "revision": "40a8600d2e1f7567d6e027401bf2e51d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
