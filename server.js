const WebSocketServer = require( 'websocket' ).server;
const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(404);
    response.end();
});

server.listen('8888', () => {
    console.log('Server is listening on port 8888');
});

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

let connections = [];

let todoItems = [
    { id: 1, text: 'Item 1', selected: false },
    { id: 2, text: 'Item 2', selected: false },
    { id: 3, text: 'Item 3', selected: false },
    { id: 4, text: 'Item 4', selected: false },
    { id: 5, text: 'Item 5', selected: false },
    { id: 6, text: 'Item 6', selected: true },
    { id: 7, text: 'Item 7', selected: true },
    { id: 8, text: 'Item 8', selected: true },
    { id: 9, text: 'Item 9', selected: true },
    { id: 10, text: 'Item 10', selected: true },
];

const checkOrigin = (origin) => {
    return true; //origin === 'http://xxx.xx.xxx.xxx:xxxx';
}

wsServer.on('request', req => {
    if (!checkOrigin(req.origin)) {
        req.reject();
        console.log('Invalid origin: Connection refused');
        return false;
    }

    const connection = req.accept('echo-protocol', req.origin);
    connections.push(connection);
    console.log(`Connection accepted: ${req.remoteAddress}. Count: ${connections.length}`);
    connection.sendUTF( JSON.stringify(todoItems));

    connection.on('message', message => {
        if (message.type === 'utf8') {
            var msgData = JSON.parse(message.utf8Data);

            todoItems = msgData;
            connections.forEach(conn => {
                if (conn !== this) {
                    conn.sendUTF(JSON.stringify(todoItems));
                }
            })
        }
    });

    connection.on('close', function() {
        let address = '';
        connections = connections.filter(conn => {
          if (conn !== this) {
              return conn
          }
          address = conn.remoteAddress;
        });
      
        console.log(`Peer: ${address} disconnected. Count: ${connections.length}`);
    });

});
