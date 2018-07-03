export class Conta {

    constructor(agencia, numero) {
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = 500;
    }
    get numero() {
        return this._numero;
    }

    get agencia() {
        return this._agencia;
    }

    get saldo() {
        return this._saldo;
    }
    
    toString() {
        return `ag ${this._agencia} cc ${this._numero} saldo ${this._saldo}.00`;
    }

    sacar(money) {
        this._saldo >= money? this._saldo -= money:null;
    }

    depositarEmDinheiro(money) {
        money <= 1000? this._saldo += money: null;
    }

    depositarEmCheque(money) {
        money <= 10000? this._saldo += money: null;
    }
}
