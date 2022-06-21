# NextStop
The NextStop app displays Metro Transit bus stops for a given route & direction.

## Getting Started
Once you have downloaded or cloned the NextStop project repo, run the following command in your terminal:

```bash
npm install
```

## Commands
#### `npm run dev`
Run the app in development mode.
Open http://localhost:3000/ to view it in the browser.
#### `npm run build`
Create a production ready bundle for deployment to a hosting platform.
#### `npm run start`
Run the app in production mode locally.
Open http://localhost:3000/ to view it in the browser.
#### `npm run lint`
Run ESLint on the app.
#### `npm run test`
Run available tests.

## Development Assumptions
- Majority of users for this app will be on mobile device.
- Application does not need to be server-rendered, instead we can focus on a smaller package that fetches data on the client side.
- Creating a custom app store with native react hooks vs interating larger supporting libraries such as Redux. 
- Focus on frameworks that are fast and work natively with page routing.
- Explore UI frameworks the emphasize speed and performance.

## Technologies
The NextStop application is built with the following technologies:
- [Next.js](https://nextjs.org/docs) - A flexible React framework that provides developers with the building blocks to create fast web applications.
- [SWR](https://swr.vercel.app/) - A react hooks library for fetching data on the client-side while supporting caching, revalidation, and de-duping of requests.
- [Grommet](https://v2.grommet.io/) - A UI framework focuse on building responsive and accessible mobile-first projects for the web with an easy to use component library.

## Third-party Integrations
The NextStop app integrates with the MetroTransit NextTrip API:
- [Metro Transit NextTrip Intorduction](https://svc.metrotransit.org/nextrip)
- [Swagger: NextTrip Api](https://svc.metrotransit.org/swagger/index.html)

## Todo
Further enhancements:
- Error Handling
- On loading tansitions and animations
- Test coverage - current test implementation is for demonstration purposes

