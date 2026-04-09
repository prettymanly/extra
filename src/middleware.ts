import { defineMiddleware } from "astro:middleware";

const SITE_PASSWORD = "opensesame??";
const COOKIE_NAME = "site-auth";

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, url } = context;

  // Allow static assets through
  if (url.pathname.startsWith("/_astro") || url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|mp4|webm)$/)) {
    return next();
  }

  // Check if already authenticated
  if (cookies.get(COOKIE_NAME)?.value === "true") {
    return next();
  }

  // Handle password submission on any path
  if (request.method === "POST") {
    try {
      const formData = await request.formData();
      const password = formData.get("password");

      if (password === SITE_PASSWORD) {
        cookies.set(COOKIE_NAME, "true", {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });
        return new Response(null, {
          status: 302,
          headers: { Location: "/" },
        });
      }
    } catch {}

    // Wrong password — show form again with error
    return new Response(passwordPage(true), {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  }

  // Show password form
  return new Response(passwordPage(false), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
});

function passwordPage(error: boolean) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Required</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F6F6F3;
      font-family: 'Inter', system-ui, sans-serif;
      color: #0A0A0A;
    }
    .container {
      text-align: center;
      max-width: 320px;
      width: 100%;
      padding: 0 1rem;
    }
    h1 {
      font-size: 1.125rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    form { display: flex; flex-direction: column; gap: 0.75rem; }
    input {
      padding: 0.625rem 0.75rem;
      border: 1px solid #d1d1d1;
      border-radius: 6px;
      font-size: 0.875rem;
      background: white;
      outline: none;
      text-align: center;
    }
    input:focus { border-color: #0A0A0A; }
    button {
      padding: 0.625rem 0.75rem;
      background: #0A0A0A;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 0.875rem;
      cursor: pointer;
    }
    button:hover { background: #333; }
    .error {
      color: #dc2626;
      font-size: 0.8rem;
      margin-top: 0.25rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>This site is currently private</h1>
    <form method="POST">
      <input type="password" name="password" placeholder="Enter password" autofocus required />
      <button type="submit">Enter</button>
      ${error ? '<p class="error">Incorrect password</p>' : ''}
    </form>
  </div>
</body>
</html>`;
}
