self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});
self.addEventListener("push", (event) => {
  console.log("📩 Push received:", event);
  const data = event.data ? event.data.json() : {};
  console.log("Data:: ", data);
  const title = data.title || "Thông báo mới";
  const options = {
    body: data.body || "Bạn có thông báo mới!",
    icon: "/public/images/icon_192x192.png",
    badge: "/public/images/icon_192x192.png",
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow("/"));
});
