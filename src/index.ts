function multiplicarNumeros(num1: number, num2: number): number {
  return num1 * num2;
}

function saudacao(nome: string): string {
  return `Olá ${nome}`;
}

const resultadoMultiplicacao = multiplicarNumeros(2, 4);
console.log(resultadoMultiplicacao);

console.log(saudacao('Otávio'));