const botao = document.getElementById('cadastrar');

botao.addEventListener('click', function () {

    let nome = document.getElementById('nome').value;
    let cargo = document.getElementById('cargo').value;

    if (nome === '') {
        alert('Preencha o campo nome');
    } else if (cargo === '') {
        alert('Preencha o campo cargo')
    } else {
        alert("Usuário cadastrado!");
    }
});