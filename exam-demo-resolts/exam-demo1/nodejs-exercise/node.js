
const raceN = function(list, N) {
  return new Promise((resolve, reject) => {
    if(list.length == 0) {
      return;
    }

    var Np = Math.min(N, list.length);

    var llista = [];

    list.forEach(promise => {
      promise.then(res => {
        if (llista.length < Np) {
          llista.push(res);
        }

        if(llista.length == Np) {
          resolve(llista);
        }
      }).catch(err => {
        reject(err);
      })
    })
  });
}

// 1
p = raceN([Promise.resolve(1),Promise.resolve(2)], 1);
p.then(console.log);
// Resultat: [1]

// 2
p = raceN([Promise.resolve(1),Promise.resolve(2)], 2);
p.then(console.log);
// Resultat: [1, 2]

// 3
var plate = new Promise(function(resolve, reject) {
setTimeout(() => resolve(1), 500);
});
p = raceN([plate,Promise.resolve(2)], 1);
p.then(console.log);
// Resultat: [2]

// 4
var plate = new Promise(function(resolve, reject) {
setTimeout(() => reject(1), 500);
});
p = raceN([plate,Promise.resolve(2)], 2);
p.then(console.log).catch(e => console.log("err: " + e));
// Resultat: err: 1
