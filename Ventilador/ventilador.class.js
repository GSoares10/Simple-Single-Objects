export class Ventilator {

    constructor(watts, brand, minRPM, maxRPM) {
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }

    get brand() {
        return this._brand;
    }

    get watts() {
        return this._watts;
    }

    get minRPM() {
        return this._minRPM;
    }

    get maxRPM() {
        return this._maxRPM;
    }

    get on() {
        return this._on;
    }

    get off() {
        return ! this._on;
    }

    get velocity() {
        return this._velocity;
    }
    
    get rpm() {
        return this._rpm;
    }

    speedUp() {
        this._on = true;
        this._velocity < 3? this._velocity++:this._velocity;
        this._velocity === 1? this._rpm = this._minRPM:null;
        this._velocity === 2? this._rpm = (this._minRPM + this._maxRPM)/2:null;
        this.velocity === 3? this._rpm = this._maxRPM:null;
    }

    slowDown() {
        if (this._velocity === 1) {
            this._on = ! this._on;
            this._rpm = 0;
            this._velocity = 0;
        } else {
            this._velocity > 0? this._velocity--:null;
            this._velocity === 2?this._rpm =(this._minRPM + this.maxRPM)/2:null;
            this.velocity === 1? this._rpm = this.minRPM: null;
        }
    }
    turnOff() {
        this._on = false;
        this._velocity = 0;
        this._rpm = 0;
    }
}
