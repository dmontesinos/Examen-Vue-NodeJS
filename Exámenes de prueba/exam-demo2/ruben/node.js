var waitForAll = function(list) {

  return new Promise(function(resolve, reject) {

    var f = function() {
      let state = true;
      let i = 0;

      while (i < list.length && state) {
        try {
          state = list[i]();
        } catch (error) {
          state = false;
          clearInterval(id);
          reject(error);
        }
        i++;
      }

      if (state) {
        resolve(true);
        clearInterval(id);
      }

    }

    var id = setInterval(f, 10);

  });
}

var result;

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
var bool1 = false,
  bool2 = false;

result = waitForAll([() => bool1, () => bool2]);
var id1 = setInterval(() => bool1 = !bool1, 40);
var id2 = setInterval(() => bool2 = !bool2, 60);
setTimeout(() => {
  clearInterval(id1);
  clearInterval(id2)
}, 500);
result.then(m => console.log("4) ", m));
// Resultat: 4) true

// 5
var anotherBool = false;

result = waitForAll([() => true, () => {
  if (anotherBool) throw "Error 123"
}]);
setTimeout(() => anotherBool = true, 100);
result.catch(m => console.log("5) ", m));
// Resultat: 5) Error 123

// Your tests here

//6
var m = 1;
var a = function() {
  console.log(m);
  m++;
  return true;
}
var b = function() {
  throw ("ERROR 404");
}

result = waitForAll([a, a, a, b, a, a, a]);

result.then(x => console.log("TODO - OK " + x)).catch(err => console.log("maybe " + err));


//7
result = waitForAll([() => true, () => true]);

result.then(x => console.log("TODO - OK " + x)).catch(err => console.log("maybe " + err));