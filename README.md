# Module Federation in nx and SSR/Prerender

This is a demo of an application based on ModuleFederation in nx and Angular 12.2.

At the moment both prerender and SSR are not working.

## 1. Setup

To run the host and the remote, open two terminals and run:

```bash
npm run start:shell
npm:run start:mfe1
```

Navigate to `http://localhost:5000`. Click on the link "Flights" and you should see that the flight search wihch is provided by mfe1 is shown.

The network tab in your Browser's DevTools should also show you a request to `http://localhost:3000/remoteEntry.js`.

## 2. SSR

Run following commands

```bash
npm run build:client-and-server:shell
npm run build:client-and-server:mfe1
```

Run following two commands in two separate terminals:

```bash
npm run serve:ssr:shell
```

```bash
npm run serve:ssr:mfe1
```

If you navigate to "http://localhost:3000", you will see that the Remote is working.

**"http://localhost:5000/flights/flights-search" will show an error** in the console. It only works after Angular has been fully loaded.

## 3. Prerender

Prerender the remote first:

```bash
npm run prerender:mfe1
```

Inside "dist/mfe1/browser", you will find the prerendered html files.

In order to prerender the host, run:

```bash
npm run prerender:shell
```

**It will fail with an error that it can't extrat the routes from the application.**. If you remove the route linking to the remote and retry, it will work.
