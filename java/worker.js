// And thisss.... is your action file // worker itself.

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Example backend endpoint. Add more API routes here later.
    if (url.pathname === "/api/health") {
      return Response.json({ status: "ok" });
    }

    // Serve HTML, CSS, images, and other website files.
    return env.ASSETS.fetch(request);
  }
};