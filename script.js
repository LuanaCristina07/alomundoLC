function inserirNome(){
let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   console.log(elemento);
   elemento.textContent = nomeUsuario;
}

const lista = Document.querySelector('Wlista');

lista.textContent = linguagens[0]
lista.textContent = linguagens[1]
lista.textContent = linguagens[2]
let aluno1 = {
    nome: 'Luana',
    idade: 17,
    anoletivo: 'terceiroensinomédio',
    materiasFavoritas: ['Matemática']
}

console.log(aluno1.nome)
console.log(aluno1.idade)
console.log(aluno1.materiasFavoritas)
console.log(aluno1.materiasFavoritas[1])