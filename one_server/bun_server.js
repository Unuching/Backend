import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Hello Unu", { status: 200 });
    } else if (url.pathname === "/unu") {
      return new Response("Hello Unuching Marma", { status: 200 });
    } else {
      return new Response("404 not found anything", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
