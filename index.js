//Framework hapi.js
const Hapi = require('hapi');
// Máquina e Porto Lógico
const host = 'localhost';
const port = 3002;
// Criação do Servidor
const server = Hapi.Server({
    host: host,
    port: port || process.env.PORT
});
// Iniciar servidor
const init = async () => {
await server.start();
    console.log("Server up no porto: " + port);
}
//Definir routes
require('./routes/routes')(server);
//Inicialização da App
init();