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

let todoItems = [];

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
