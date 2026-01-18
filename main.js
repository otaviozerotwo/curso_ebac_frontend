function Cliente(codigo, cpf, nome, vlrCompra) {
  let _codigo;
  if (typeof codigo === 'number') {
    _codigo = codigo;
  }

  let _cpf;
  let formatCpf = String(cpf);
  if (formatCpf.length == 11) {
    _cpf = formatCpf;
  }

  let _nome;
  if (typeof nome === 'string') {
    _nome = nome;
  }

  let _vlrCompra;
  if (typeof vlrCompra === 'number') {
    _vlrCompra = vlrCompra;
  }

  this.getCodigo = function() {
    return _codigo;
  }

  this.setCodigo = function(codigo) {
    if (typeof codigo === 'number') {
      _codigo = codigo;
    }
  }

  this.getCpf = function() {
    return _cpf;
  }

  this.setCpf = function(cpf) {
    let formatCpf = String(cpf);
    if (formatCpf.length == 11) {
      _cpf = formatCpf;
    }
  }

  this.getNome = function() {
    return _nome;
  }

  this.setNome = function(nome) {
    if (typeof nome === 'string') {
      _nome = nome;
    }
  }

  this.getvlrCompra = function() {
    return _vlrCompra;
  }

  this.setvlrCompra = function(vlrCompra) {
    if (typeof vlrCompra === 'number') {
      _vlrCompra = vlrCompra;
    }
  }

  this.comprar = function() {
    console.log(`O cliente ${nome} fez uma compra.`);
  }
}

function ClienteFidelidade(codigo, cpf, nome, vlrCompra) {
  Cliente.call(this, codigo, cpf, nome, vlrCompra);

  // Cliente Fidelidade recebe 10% de desconto nas compras
  this.aplicarDesconto = function() {
    const vlrTotal = this.getvlrCompra();
    const vlrDesconto = vlrTotal * 0.1;
    const vlrFinal = vlrTotal - vlrDesconto;
    
    console.log(`Desconto aplicado de R$ ${vlrDesconto}`);

    this.setvlrCompra(vlrFinal);
  }
}

function ClienteConvenio(codigo, cpf, nome, vlrCompra) {
  Cliente.call(this, codigo, cpf, nome, vlrCompra);

  // Cliente Convenidado recebe 15% de desconto nas compras
  this.aplicarDesconto = function() {
    const vlrTotal = this.getvlrCompra();
    const vlrDesconto = vlrTotal * 0.15;
    const vlrFinal = vlrTotal - vlrDesconto;

    console.log(`Desconto aplicado de R$ ${vlrDesconto}`);

    this.setvlrCompra(vlrFinal);
  }
}

const cliente1 = new Cliente(1, 11111111111, 'João', 19.90);
const cliente2 = new ClienteFidelidade(2, 22222222222, 'Maria', 19.90);
const cliente3 = new ClienteConvenio(3, 33333333333, 'José', 19.90);

// Dados cliente 1
console.log('Código:', cliente1.getCodigo());
console.log('CPF:', cliente1.getCpf());
console.log('Nome:', cliente1.getNome());
cliente1.comprar();
console.log('Valor compra:', cliente1.getvlrCompra());

console.log('\n');

// Dados cliente 2
console.log('Código:', cliente2.getCodigo());
console.log('CPF:', cliente2.getCpf());
console.log('Nome:', cliente2.getNome());
cliente2.comprar();
console.log('Valor compra:', cliente2.getvlrCompra());
cliente2.aplicarDesconto();
console.log('Valor compra com desconto:', cliente2.getvlrCompra());

console.log('\n');

// Dados cliente 3
console.log('Código:', cliente3.getCodigo());
console.log('CPF:', cliente3.getCpf());
console.log('Nome:', cliente3.getNome());
cliente3.comprar();
console.log('Valor compra:', cliente3.getvlrCompra());
cliente3.aplicarDesconto();
console.log('Valor compra com desconto:', cliente3.getvlrCompra());

console.log('\n');