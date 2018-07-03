export class DataShow {
    constructor(marca, modelo, cor) {
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._on = false;
        this._zoom = 0;
        this._foco = false;
        this._volume = 5;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    get cor() {
        return this._cor;
    }

    get on() {
        return this._on;
    }

    get zoom() {
        return this._zoom;
    }

    get foco() {
        return this._foco;
    }

    get volume() {
        return this._volume;
    }

    onOff() {
        this._on =! this._on;
    }

    aumentarZoom () {
        if (! this.onOff) return;
        if (this._zoom < 100) {
            this._zoom = this._zoom + 1;
        }
    }

    diminuirZoom() {
        if (! this.onOff) return;
        if (this._zoom > 0) {
            this._zoom--;
        }
    }

    ajustarFoco() {
        if (! this.onOff) return;
        if (! this._foco) {
            this._foco = true;
        }
    }

    aumentarVolume() {
        if (! this.onOff) return;
        if (this._volume < 100) {
            this._volume = this._volume + 1;
        }
    }

    diminuirVolume() {
        if (! this.onOff) return;
        if (this._volume > 0) {
            this._volume--;
        }
    }

    toString() {
        const var0 = `${this.marca} ${this.modelo}`;
        const var1 = `${this.cor}`;
        return `${var0}${var1}`;
    }

}