// Aula 26 - Criando um servidor HTTP com Node.js


    //importando o módulo HTTP do Node.js
    const http = require('http');

    //criando o servidor HTTP
    const meurServidor = http.createServer(function (requisicao, resposta) {

    //definindo o cabeçalho da resposta HTTP
    //código de status 200 representa sucesso na requisição
    //Content-Type define o tipo de conteúdo da resposta, neste caso texto simples com codificação UTF-8
    resposta.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });


    //verificando a URL da requisição para determinar a resposta apropriada
    if (requisicao.url === '/') {
        reposta.end('Você está na página inicial do servdor')

    //verificando se a URL da requisição é '/sobre'   
    } else if (requisicao.url === '/contato') {
        resposta.end('Esta é a página de contato: contato@empresa.com');
       
        
    } else {
        //se a URL não corresponder a nenhuma das rotas definidas, retorna um erro 404
        reposta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        reposta.end('Erro 404: Página não encontrada');
    }
});


const PORTA = 3000;
meurServidor.listen(PORTA, function() {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});