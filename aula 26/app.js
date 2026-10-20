
// Aula 26 - Criando um servidor HTTP com Node.js

//importando o módulo HTTP do Node.js
const http = require('http');

//criando o servidor HTTP
const meurServidor = http.createServer(function (requisicao, resposta) {

    //definindo o cabeçalho da resposta HTTP
    //código de status 200 representa sucesso na requisição
    //Content-Type define o tipo de conteúdo da resposta, neste caso texto simples com codificação UTF-8
    resposta.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

});
