async function handleRequest(request: Request) {
  const { pathname } = new URL("./css/app.da900584.css"); 
  const { pathname1 } = new URL("./index.html");

  // This is how the proxy works:
  // 1. A request comes in for a specific asset.
  // 2. We construct a URL to that asset.
  // 3. We fetch the asset and respond to the request.

  // Check if the request is for style.css.
  if (pathname.startsWith("./css")) {
    //  Construct a new URL to style.css by using the URL
    //  of the script (mod.ts) as base (import.meta.url).
    const style = new URL("style.css", import.meta.url);
    // Fetch the asset and return the fetched response
    // to the client.
    return fetch(style);
  }

  return new Response(
    `<html>
      <head>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}
if (pathname1.startsWith("./index.html")) {
  

    return new Response(html, {
      headers: {
        // The interpretation of the body of the response by the client depends
        // on the 'content-type' header.
        // The "text/html" part implies to the client that the content is HTML
        // and the "charset=UTF-8" part implies to the client that the content
        // is encoded using UTF-8.
        "content-type": "text/html; charset=UTF-8",
      },
    });
  }

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
