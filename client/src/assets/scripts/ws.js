importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
),
  workbox &&
    (workbox.setConfig({ debug: !1 }),
    workbox.precaching.precacheAndRoute([
      {
        url: "https://www.infomoney.com.br/wp-content/themes/infomoney/assets/fonts/material-icons.woff2",
        revision: "ff10",
      },
      {
        url: "https://www.infomoney.com.br/wp-content/themes/infomoney/assets/fontawesome/fa-brands-400.woff",
        revision: "ff60",
      },
    ]),
    workbox.precaching.cleanupOutdatedCaches(),
    workbox.routing.registerRoute(
      /^https:\/\/www\.infomoney\.com\.br\/wp-content\/themes\/.*/,
      new workbox.strategies.CacheFirst({
        cacheName: "im-assets",
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 86400,
          }),
        ],
      })
    ),
    workbox.routing.registerRoute(
      ({ url: e }) =>
        "https://fonts.googleapis.com" === e.origin ||
        "https://fonts.gstatic.com" === e.origin ||
        "https://connect.facebook.net" === e.origin ||
        "https://cdn.xpi.com.br/" === e.origin ||
        "https://a.optmnstr.com/" === e.origin,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: "heavy",
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 20,
            maxAgeSeconds: 86400,
          }),
        ],
      })
    ),
    workbox.core.skipWaiting(),
    workbox.core.clientsClaim());
