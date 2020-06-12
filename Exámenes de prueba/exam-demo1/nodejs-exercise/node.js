var raceN = function(promisesList, n) {
  return new Promise(function(resolve, reject) {
    let i = 0;
    let count = 0;
    let responses = [];

    while (i < promisesList.length) {
      promisesList[i].then(x => {
        count++;
        if (responses.length < n) {
          responses.push(x);
        }
        if (count == promisesList.length) {
          resolve(responses);
        }
      }).catch(x => {
        reject(x);
      });
      i++;
    }
  });
};


var p = raceN([Promise.resolve(1), Promise.resolve(2)], 1);
p.then(console.log);

var p = raceN([Promise.resolve(1), Promise.resolve(2)], 2);
p.then(console.log);

var plate = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 500);
});
p = raceN([plate, Promise.resolve(2)], 1);
p.then(console.log);

plate = new Promise(function(resolve, reject) {
  setTimeout(() => reject(1), 500);
});
p = raceN([plate, Promise.resolve(2)], 2);
p.then(console.log).catch(e => console.log("err: " + e));

p = raceN([Promise.resolve(8), Promise.reject(20)], 100);
p.then(console.log).catch(e => console.log("err: " + e));

p = raceN([], 1);
p.then(console.log).catch(e => console.log("err: " + e));








//