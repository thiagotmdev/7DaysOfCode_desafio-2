function processarDados(){

    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let linguagem = document.getElementById('linguagem').value;

    alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem} !`);

    let resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if(resposta == 1){
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    }else{
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
}