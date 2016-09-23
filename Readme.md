Contains:

* React
* Immutable
* Babel
* Mocha/chai/sinon with coverage

To start a Webpack development server run `npm start` and go to http://localhost:3000. Use the `PORT` env variable
to customise the server port.

To compile a minimised build run `npm run build --prod` and deploy the contents of `dist/`.

To watch all src/test files to run the test suite, do `npm run test-watch`, otherwise run `npm test` for a single run.
