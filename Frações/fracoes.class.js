export class Fraction {
    constructor(numerator = 0, denominator = 0) {
        this._numerator = numerator;
        this._denominator = denominator;
        this._canReduce = canReduce(numerator, denominator);
    }

    get numerator() {
        return this._numerator;
    }

    get denominator() {
        return this._denominator;
    }

    get canReduce() {
        this._canReduce = canReduce(this.numerator, this.denominator);
        return this._canReduce;
    }

    plus(frac) {
        if (frac.denominator === this.denominator) {
            return frac.numerator + this.numerator + '/' + this.denominator;
        } else {
            return mmc(frac.denominator, this.denominator);
        }
    }

    reduce() {
        if (this.canReduce) {
            if (this._numerator > this._denominator) {
                for (let i = 2; i <= this._numerator; i++) {
                    if ((this._numerator % i === 0) &&
                        (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
            if (this._numerator < this._denominator) {
                for (let i = 2; i <= this._denominator; i++) {
                    if ((this._numerator % i === 0) &&
                        (this._denominator % i === 0)) {
                        this._numerator = this._numerator / i;
                        this._denominator = this._denominator / i;
                    }
                }
            }
        }
    }

    divide(frac) {
        const frac2 = frac.numerator*this.denominator;
        const frac1 = frac.denominator*this.numerator;
        return frac1 + '/' + frac2;
    }

    multiply(frac) {
        const frac1 = frac.numerator*this.numerator;
        const frac2 = frac.denominator*this.denominator;
        return frac1 + '/' + frac2;
    }

    greaterThan(frac) {
        const frac1 = frac.numerator / frac.denominator;
        const frac2 = this.numerator / this.denominator;
        if (frac1 < frac2) return true;
        else return false;
    }

    lessThan(frac) {
        const frac1 = frac.numerator / frac.denominator;
        const frac2 = this.numerator / this.denominator;
        if (frac1 > frac2) return true;
        else return false;
    }

    equals(frac) {
        const frac1 = frac.numerator / frac.denominator;
        const frac2 = this.numerator / this.denominator;
        if (frac1 === frac2) return true;
        else return false;
    }

    toString() {
        return this._numerator+ '/' +this._denominator;
    }
}

function canReduce(numer, denom) {
    const numerator1 = numer;
    const denominator2 = denom;
    if (numerator1 > denominator2) {
        for (let i = 2; i <= numerator1; i++) {
            if ((numerator1 % i === 0) && (denominator2 % i === 0)) return true;
        }
        return false;
    }
    if (numerator1 < denominator2) {
        for (let i = 2; i <= denominator2; i++) {
            if ((numerator1 % i === 0) && (denominator2 % i === 0)) return true;
        }
        return false;
    }
}

function mmc(num, num1) {
    let denominator1 = num;
    let denominator2 = num1;
    let r = 1;
    for (; r !== 0;) {
        r = denominator1 % denominator2;
        denominator1 = denominator2;
        denominator2 = r;
    }
    return (num * num1) / denominator1;
}

