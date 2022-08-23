class Conta {
  constructor(saldo_cc, saldo_cp, juros_cp) {
    this.saldo_cc = saldo_cc;
    this.saldo_cp = saldo_cp;
    this.juros_cp = juros_cp;
  }

  deposito(valor) {
    this.saldo_cc += valor;
  }

  saque(valor) {
    this.saldo_cc -= valor;
  }

  transferir_cp(valor) {
    this.saldo_cc -= valor;
    this.saldo_cp += valor;
  }

  transferir_cc(valor) {
    this.saldo_cp -= valor;
    this.saldo_cc += valor;
  }

  jurosMensal(dia) {
    if (dia >= 30) {
      let valorPoupanca = this.saldo_cp * (this.juros_cp / 100);
      this.saldo_cp += valorPoupanca;
    }
  }
}

class ContaEspecial extends Conta {
  constructor(saldo_cc, saldo_cp, juros_cp) {
    super(saldo_cc, saldo_cp, juros_cp * 2);
  }
}

let conta = new Conta(1000, 1000, 2);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(2000);

console.log(conta);

conta.transferir_cp(1000);

console.log(conta);

conta.jurosMensal(30);

console.log(conta);

let contaEspecial = new ContaEspecial(1000, 1000, 2);

console.log(contaEspecial);

contaEspecial.jurosMensal(30);

console.log(contaEspecial);
