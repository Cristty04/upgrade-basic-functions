//Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let masLargo=''; 
  for(i=0; i<param.length; i++){
    if(param[i].length>masLargo.length){
      masLargo=param[i];
    }
  }
  return masLargo;
  } 
  console.log(findLongestWord(avengers));