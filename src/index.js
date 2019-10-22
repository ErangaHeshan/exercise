const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE
const promises = [];

for (let i = 1; i < 101; i++) {
    promises.push(new Promise(resolve => {
        if (i % 3 === 0 && i % 5 == 0) {
            resolve(`${i}: FizzBuzz`);
        } else if(i % 3 === 0){
            resolve(`${i}: Fizz`);
        } else if(i % 5 === 0){
            resolve(`${i}: Buzz`);
        } else {
            getRandomWord().then(word => resolve(`${i}: ${word}`));
        }
    }));
}

Promise.all(promises).then(response => {
    response.forEach(line => {
        console.log(line);
    })
});
