# VIRTUAL CONTROL FRONTEND TEST

You need to create a simple counter application that can do the following:
* Add a named counter to a list of counters
* Increment any of the counters
* Decrement any of the counters
* Delete a counter
* Show a sum of all the counter values
* It must persist data back to the server

We have provided:
* Compiled Directory: of `/static/`
* `/static/index.html` that will be served at `localhost:3000` when the server is running
* `/static/app.js` and `/static/app.css` will be used automatically by `/static/index.html`

> If you need other publicly available files, other than `index.html`, `app.js`, `app.css` you will have to modify the server code in `/index.js`

What I needed to see in this exam

* Don't use create-react-app to create the FE
* Create your webpack.config
* If you plan to use CSS, either use `Sass` (compiled using webpack) or `Styled-Components`
* Use React Hooks
* While this is a simple test, I would like to see how you would implement redux in this exam
* Use a middleware in performing async calls. That can either be redux-thunk, redux-observable or redux-saga
* Create unit test (JEST):
  * ACTIONS
  * Reducers
  * Components
  * Async Calls

Some other notes:
* The design, layout, ux, is all up to you.
* You can change anything you want (server stuff included) as long as the above list is completed.
* This isn't a backend test, don't make it require any databases.
* We don't want to run any `npm install -g whatever` commands. **NO GLOBAL DEPENDENCIES**
* Be practical, but at the same time, show-off your skills here.

A possible layout could be:
```
         Counter App
+-----------------------------+
| Input                   [+] |
+-----------------------------+
+-----------------------------+
| [x] Bob           [-] 5 [+] |
| [x] Steve         [-] 1 [+] |
| [x] Pat           [-] 4 [+] |
+-----------------------------+
+-----------------------------+
| Total                    10 |
+-----------------------------+
```

## Install and start the server

```
$ npm install
$ npm start
$ npm run build
```

## API endpoints / examples

> The following endpoints are expecting a `Content-Type: application/json`

```
GET /api/v1/counters
# []

POST {title: "bob"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0}
# ]

POST {title: "steve"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "asdf"} /api/v1/counter/inc
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "qwer"} /api/v1/counter/dec
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: -1}
# ]

DELETE {id: "qwer"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 1}
# ]

GET /api/v1/counters
# [
#   {id: "asdf", title: "bob", count: 1},
# ]
```

> **NOTE:* Each request returns the current state of all counters.
