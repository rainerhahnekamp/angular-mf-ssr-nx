This is a demo of ModuleFederation in nx and Angular 12.2.

To run the host and the remote, open two terminals and run:

```bash
npm run start:shell
npm:run start:mfe1
```

Navigate to `http://localhost:5000`. Click on the link "Flights" and you should see that the flight search wihch is provided by mfe1 is shown.

The network tab in your Browser's DevTools should also show you a request to `http://localhost:3000/remoteEntry.js`.
