
// TODO
function checkTrue(valor) {
  return valor == True;
}

function waitForAll(lista) {
  return new Promise(function(resolve, reject) {
    let contador = 0;
    let respuestas = [];

    while (contador < lista.length) {
      lista[contador].then(funcion => {
        var ejecutarFunciones = function(lista){
          contador++;
          respuestas.push(funcion());
          if(respuestas.length == lista.length){
            if(respuestas.every(checkTrue)){
              resolve(respuestas);
            }
          }
        }
        setTimeout(ejecutarFunciones(lista), 100);
      }).catch(x => {
        reject(lista);
      });
    }
  })
};







// 1
result = waitForAll([() => true]);
result.then(m => console.log("1) ", m));
// Resultat: 1) true

// 2
result = waitForAll([() => "hola", () => 23]);
result.then(m => console.log("2) ", m));
// Resultat: 2) true

// 3
var bool = false;

result = waitForAll([() => bool, () => true]);
setTimeout(() => bool = true, 100);
console.log("3) ", bool);
result.then(m => console.log("3) ", m));
// Resultat: 3) false
//           3) true

// 4
var bool1 = false, bool2 = false;

result = waitForAll([() => bool1, () => bool2]);
var id1 = setInterval(() => bool1 = !bool1, 40);
var id2 = setInterval(() => bool2 = !bool2, 60);
setTimeout(() => { clearInterval(id1); clearInterval(id2) }, 500);
result.then(m => console.log("4) ", m));
// Resultat: 4) true

// 5
var anotherBool = false;

result = waitForAll([() => true, () => { if(anotherBool) throw "Error 123" }]);
setTimeout(() => anotherBool = true, 100);
result.catch(m => console.log("5) ", m));
// Resultat: 5) Error 123

// Your tests here
