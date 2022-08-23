class ContaBanco {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(value) {
    this.saldo += value;
  }

  saque(value) {
    this.saldo -= value;
  }
}

let newAccount = new ContaBanco(2000);

newAccount.deposito(1000);
newAccount.saque(250);

console.log(newAccount);
