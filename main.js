const notasPorAluno = [
  { nome: 'Julia', nota: 9.5 },
  { nome: 'Rudolph', nota: 9 },
  { nome: 'Marco', nota: 3.8 },
  { nome: 'Jordana', nota: 7.5 },
  { nome: 'Carlos', nota: 8.5 },
  { nome: 'Roberto', nota: 9.5 },
  { nome: 'Marta', nota: 6 },
  { nome: 'Cintia', nota: 6.5 },
  { nome: 'Jonas', nota: 5 },
  { nome: 'Marcela', nota: 10 },
];

function buscarAlunosAprovados(listaAlunos, notaDeCorte) {
  return listaAlunos.filter(aluno => aluno.nota >= notaDeCorte);
} 

const nomesAprovados = buscarAlunosAprovados(notasPorAluno, 6).map(aluno => aluno.nome);
console.log(nomesAprovados);