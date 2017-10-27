import * as http from 'http';

const server = http.createServer();

server.listen(3000, () => console.log('Server listen in port 3000'));

