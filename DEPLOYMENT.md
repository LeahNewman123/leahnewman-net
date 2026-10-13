# Cloudflare Workers deployment

This Next.js app uses OpenNext to produce `.open-next/worker.js` and assets.
`wrangler.jsonc` is the deployment configuration. Its Worker name and
`WORKER_SELF_REFERENCE` service must both remain `leahnewman-net`.
The npm package name is independent of the Worker name.

In Cloudflare Workers & Pages, select the `leahnewman-net` Worker and connect
`LeahNewman123/leahnewman.net`, production branch `main`, root directory `/`.

- Build command: leave empty (Wrangler runs the configured OpenNext build).
- Deploy command: `npx wrangler deploy`
- If a build command is required by the dashboard, `npm run build` also works,
  but repeats the Next.js build during deployment.

The existing `npm run build` / `npx wrangler deploy` dashboard settings remain
compatible. Retry using the latest commit after changing settings.
Do not configure a Pages output directory: this is a Workers deployment.

Local commands:

```sh
npm ci
npm run build:cloudflare
npx wrangler deploy --dry-run
npm run deploy
```

`npm run deploy` builds through Wrangler and publishes to Cloudflare; it requires
Cloudflare authentication. For local Next.js development, use `npm run dev`.
OpenNext recommends WSL on Windows if its production build fails natively.

Error 10143 in the original log came from a self-reference to the nonexistent
`leah-newman-portfolio` Worker. No second Worker with that name is needed.
After successful deployment, configure `leahnewman.net` under the Worker's
Settings > Domains & Routes if it is not already attached.
