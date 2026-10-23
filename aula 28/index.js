//1. Importando os módulos necessários
const express = require('express');
const cors = require('cors');

//2. Criando uma instância do Express
const app = express();

//3. Configurações de intermendiários (Middleware)
app.use(cors()); //Liberamos o servidor para receber requisições de outros locais (como nosso HTML)
app.use(express.json()); //Permitimos que o servidor entenda requisições no formato JSON

// Nosso "Banco de dados" ficticio armazenado na memória na memória RAM
const usuarios = [
    { nome: 'Ana Costa', cargo: 'Desenvolvedora' },
    { nome: 'Carlos Souza', cargo: 'Designer' },

];

//Rota get: Envia a lista atual para quem solicitar
app.get('/usuarios', function(requisicao, resposta) {
    return resposta.json(usuarios);});
//Rota post: Recebe novos dados do Frontend e insere na nosso lista
app.post('/usuarios', function(requisicao, resposta) {
    const dadosRecebidos = requisicao.body; // Pega o que o usuário preencheu no formulário
    // Monta o novo objeto de usuário com um ID automático incremental
    const novoUsuario = {
        nome: dadosRecebidos.nome,
        cargo: dadosRecebidos.cargo
    };
    usuarios.push(novoUsuario);
    return resposta.status(201).json(novoUsuario); //Adiciona na nossa lista/banco
    //Devolve o status 201 (Criado) e o objetivo do usuário que acabou de ser salvo
    return resposta.status(201).json(novoUsuario);
});
// Inicialização do servidor na porta 3000
const PORTA = 3000;
app.listen(PORTA, function() {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});