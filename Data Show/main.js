import {DataShow} from './datashow.class.js';

console.log('Teste DataShow!!!');

const sony = new DataShow('Sony', 3000+'Lumens', 'Branco');
console.log(sony.on);// false, pois está desligada.

sony.onOff(); // Ligar!
console.log(sony);
console.log(sony.marca);
console.log(sony.modelo);
console.log(sony.cor);
// -----------------------
console.log(sony.on);
console.log(sony.zoom);
console.log(sony.foco);
console.log(sony.volume);
//------------------------
sony.aumentarVolume();
console.log(sony.volume); // volume = 6;
sony.aumentarVolume();
console.log(sony.volume); // volume = 7;

// Max volume ->
for (let i = 0; i < 500; i++) sony.aumentarVolume();
console.log(sony.volume); // volume = 100 'MAX';

sony.diminuirVolume();
console.log(sony.volume); // volume = 99;
//------------------------

sony.aumentarZoom();
console.log(sony.zoom); // zoom = 1;
sony.aumentarZoom();
console.log(sony.zoom); // zoom = 2;

// Max zoom ->  
for (let i = 0; i < 500; i++) sony.aumentarZoom();
console.log(sony.zoom); // zoom = 100 'MAX';

sony.diminuirZoom();
console.log(sony.zoom); // zoom = 99;
//-------------------------

sony.ajustarFoco();
console.log(sony.foco); // foco = true;
//------------------------

sony.onOff(); // Desligar!
console.log(sony.on); // false, pois está desligado.
sony.onOff(); // Ligar!
console.log(sony.on); // True;




