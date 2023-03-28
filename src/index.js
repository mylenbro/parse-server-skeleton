import 'dotenv/config'
import express from 'express';
import { ParseServer } from 'parse-server';
import ParseDashboard from 'parse-dashboard'

const databaseURI = process.env.MONGODB_URI
if (!databaseURI) {
    throw 'Enviroment variable MONGODB_URI not found.'
}

const dev = process.env.DEV === '0' ? false : true
const appId = process.env.APP_ID ?? 'appId'
const masterKey = process.env.MASTER_KEY ?? 'masterKey'
const serverURL = process.env.SERVER_URL ?? "http://localhost:1337"
const user = process.env.USER ?? 'admin'
const pass = process.env.PASS ?? 'admin'
const port = process.env.PORT ?? 1337

const server = new ParseServer({
    appId: appId,
    masterKey: masterKey,
    databaseURI: databaseURI,
    allowExpiredAuthDataToken: false,
    allowClientClassCreation: false
});

console.log('Starting parse-server . . .')
await server.start()

const dashboard = new ParseDashboard({
    apps:
        [{
            appName: "myApplication",
            iconName: "parse-icon.png",
            appId: appId,
            masterKey: masterKey,
            serverURL: serverURL + '/parse',
            production: !dev
        }],
    users:
        [{
            user: user,
            pass: pass,
            apps: [{ appId: appId }]
        }],
    iconsFolder: "icons",
    trustProxy: 1
}, {
    allowInsecureHTTP: false
});

const app = express();
app.use('/parse', server.app);
app.use('/', dashboard);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});