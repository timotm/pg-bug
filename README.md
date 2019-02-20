    npm install
    npm run start


```
    self.activeQuery.handleCommandComplete(msg, con)
                     ^

TypeError: Cannot read property 'handleCommandComplete' of null
    at Connection.<anonymous> (/Users/metsala/pg-bug/node_modules/pg/lib/client.js:271:22)
    at emitOne (events.js:116:13)
    at Connection.emit (events.js:211:7)
    at Socket.<anonymous> (/Users/metsala/pg-bug/node_modules/pg/lib/connection.js:125:12)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
    at Socket.Readable.push (_stream_readable.js:208:10)
    at TCP.onread (net.js:597:20)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pg-bug@1.0.0 start: `createdb pg-bug-local-test-db; node index.js`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the pg-bug@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
```
