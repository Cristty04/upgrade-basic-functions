//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la
// suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sumTotal = 0;
  for(i=0; i<param.length; i++){
    sumTotal = sumTotal+param[i];
  }
  return sumTotal;
}
console.log(sumAll(numbers));