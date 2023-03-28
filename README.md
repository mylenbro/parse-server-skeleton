# What is this?
A simple skeleton project that runs the [Parse Server](https://github.com/parse-community/parse-server) and [Parse Dashboard](https://github.com/parse-community/parse-dashboard) at the same server/port.

Both are used as [express](https://github.com/expressjs/express) middleware.

# Quick Start

Install dependencies:

```
$ npm install
```

[Configure](https://github.com/parse-community/parse-server#basic-options) your .env file:
```
MONGODB_URI=Connection to MongoDB database
SERVER_URL=http://localhost:1337
APP_ID=myAppId
MASTER_KEY=myMasterKey
USER=admin
PASS=admin
PORT=1337
DEV=1
```

Start the server:
```
$ npm start
```