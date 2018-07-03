export class ATM {

    constructor(numeroSerie, valor = 0) {
        this._numeroSerie = numeroSerie;
        this._valor = valor;
        this._notas5 = 0;
        this._notas10 = 0;
        this._notas20 = 0;
        this._notas50 = 0;
        this._notas100 = 0;

    }

    get valor() {
        this._valor = this.calc_valor();
        return this._valor;
    }

    get numeroSerie() {
        return this._numeroSerie;
    }

    abastecer(numero, notas) {
        if((notas === 5 ) && ((this._notas5 + numero) <= 100 )){
        return this._notas5 += numero;
        }else{
            if ((notas === 10) && ((this._notas10 + numero) <= 100)){
            return this._notas10 += numero;
            }else{
                if ((notas === 20) && ((this._notas20 + numero) <= 100)){
                return this._notas20 += numero;
                }else{
                    if ((notas === 50) && ((this._notas50 + numero) <= 100)){
                    return this._notas50 += numero;
                    }else{
                        if ((notas === 100) && ((this._notas100 + numero) <= 100)){
                        return this._notas100 += numero;
                        }else{
                            return 0;   
                        }
                    }
                }
            }
        }
    }

    cedulas(notas) {
        if (notas === 5) return this._notas5;
        else 
        if (notas === 10) return this._notas10;
        else 
        if (notas === 20) return this._notas20;
        else 
        if (notas === 50) return this._notas50;
        else 
        if (notas === 100) return this._notas100;
        else 
        return 0;
    }

    calc_valor() {
        return ((this._notas5 * 5) + (this._notas10 * 10) + 
        (this._notas20 * 20) + (this._notas50 * 50) + (this._notas100 * 100));
    }

    retirar(valor) {
        if (valor <= ((this._notas5 * 5) + (this._notas10 * 10) + 
        (this._notas20 * 20) + (this._notas50 * 50) + (this._notas100 * 100))) {

            if (valor > 0 && (valor % 100 == 0) 
            && this._notas100 >= Math.floor(valor / 100)) {
		        this._notas100 -= Math.floor(valor / 100);
		        console.log(Math.floor(valor / 100));
		        valor -= (Math.floor(valor / 100) * 100);
		    }
            if (valor > 0 && (valor % 50 == 0 || Math.floor(valor / 50) > 0) 
            && this._notas50 >= Math.floor(valor / 50)) {
		        this._notas50 -= Math.floor(valor / 50);
		        console.log(Math.floor(valor / 50));
		        valor -= (Math.floor(valor / 50) * 50);
		    }
            if (valor > 0 && (valor % 20 == 0 || Math.floor(valor / 20) > 0) 
            && this._notas20 >= Math.floor(valor / 20)) {
		        this._notas20 -= Math.floor(valor / 20);
		        console.log(Math.floor(valor / 20));
		        valor -= (Math.floor(valor / 20) * 20);
		    }
            if (valor > 0 && (valor % 10 == 0 || Math.floor(valor / 10) > 0) 
            && this._notas10 >= Math.floor(valor / 10)) {
		        this._notas10 -= Math.floor(valor / 10);
		        console.log(Math.floor(valor / 10));
		        valor -= (Math.floor(valor / 10) * 10);
		    }
            if (valor > 0 && (valor % 5 == 0 || Math.floor(valor / 5) > 0) 
            && this._notas5 >= Math.floor(valor / 5)) {
		        this._notas5 -= Math.floor(valor / 5);
		        console.log(Math.floor(valor / 5));
		        valor -= (Math.floor(valor / 5) * 5);
		    }
        } 
	}

}

