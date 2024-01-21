// Crea una función que calcule el índice de masa corporal 
// (IMC) de una persona a partir de su altura en metros y peso 
// en kilogramos, que se recibirán como parámetros.

function calculaIMC(estatura, peso){
  estaturaCentimetros = parseFloat(estatura) * 100;
  tuIMC = peso * estaturaCentimetros / 1000;
  console.log(`El índice de masa corporal es ${tuIMC}`);
  return;
}
calculaIMC(1.80, 110);

// Crea una función que calcule el valor del factorial 
// de un número pasado como parámetro.

function factorialNumero(num) {
  var resultado = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    resultado *= num;
    console.log(`${resultado}`)
  }
  return;
}
factorialNumero(5);

// Crea una función que convierta un valor en dólares, pasado como 
// parámetro, y devuelva el valor equivalente en reales
// (moneda brasileña,si deseas puedes hacerlo con el valor del dólar 
// en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function tasaDeCambio(num){
  realBrasil = 4.93;
  precio = realBrasil * num;
  console.log(`USD $${num} Dolares es igual a R$${precio} Reales brasileños`);
  return;
}
tasaDeCambio(3);

// Crea una función que muestre en pantalla el área y el perímetro 
// de una sala rectangular, utilizando la altura y la anchura que se 
// proporcionarán como parámetros.
function areaPerimetroRectangulo(alto, ancho){
  perimetro = alto * 2 + ancho * 2;
  area = alto * ancho;
  console.log(`El perímetro del rectangulo es de ${perimetro} cm y su área es de ${area} cm²`);
  return;
}
areaPerimetroRectangulo(3,5);

// Crea una función que muestre en pantalla el área y el perímetro 
// de una sala circular, utilizando su radio que se proporcionará 
// como parámetro. Considera Pi = 3,14.
function areaPerimetroCirculo(diametro){
  perimetro = Math.PI * diametro;
  radio = diametro/2;
  area = Math.PI * (radio * radio);
  console.log(`El perímetro del círculo es ${perimetro.toFixed(2)} cm y su area es ${area.toFixed(2)} cm²`)
  return;
}
areaPerimetroCirculo(10);

// Crea una función que muestre en pantalla la tabla 
// de multiplicar de un número dado como parámetro.
let n = 0;
let x = 0;

function tablaDel(num){
  console.log(`Tabla del ${num}`);
  while (n < 12) {
    n++;
    x += n;
    resultado = n * num;
    console.log(`${n} x ${num} = ${resultado}`);
  }
  return;
}
tablaDel(7);