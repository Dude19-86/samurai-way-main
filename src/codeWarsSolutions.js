function fakeBin(x) {
    return x.split('').map(e => e < 5 ? 0 : e >= 5 ? 1 : '').join('')
}

// console.log(fakeBin('45385593107843568'))


function grow(x) {
    return x.reduce((a, b) => a * b, 1);
}

//console.log(grow([3,4,5,6,7]))


function arrayDiff(a, b) {
    // return a.filter(e => !b.includes(e))
    // return a.filter(e =>  b.indexOf(e) === -1 );
    b = new Set(b)
    console.log(typeof b)
    return a.filter(v => !b.has(v))
}

//console.log(arrayDiff([1, 2, 2, 2, 1,3], [1, 2]))

// function zero(f) {
//     return f ? f(0) : 0
// }
//
// function one(f) {
//     return f ? f(1) : 1
// }
//
// function two(f) {
//     return f ? f(2) : 2
// }
//
// function three(f) {
//     return f ? f(3) : 3
// }
//
// function four(f) {
//     return f ? f(4) : 4
// }
//
// function five(f) {
//     return f ? f(5) : 5
// }
//
// function six(f) {
//     return f ? f(6) : 6
// }
//
// function seven(f) {
//     return f ? f(7) : 7
// }
//
// function eight(f) {
//     return f ? f(8) : 8
// }
//
// function nine(f) {
//     return f ? f(9) : 9
// }
//
// function plus(x) {
//     return (z) => {
//         return z + x;
//     }
// }
//
// function minus(x) {
//     return (z) => {
//         return z - x;
//     }
// }
//
// function times(x) {
//     return (z) => {
//         return z * x;
//     }
// }
//
// function dividedBy(x) {
//     return (z) => {
//         return Math.floor(z / x);
//     }
// }

const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

/*const [zero, one, two, three, four, five, six, seven, eight, nine] = // define the names of all functions as an array
  [...Array(10)].map( // create a new array of the same length of the 'names' array, and for each item in that array, return the content of the map function
    (_functionName, number) => { // ignore the actual value (functionName, which would be 'zero' 'one' etc.), pass in the index number as 'number'
      return ( // return
        function (operation) { // a new function, allowing for the 'operation' function to be passed in as a parameter
          return ( // return
            operation ? operation(number) : number // if operation is not null, return operation(number), otherwise return number
          )
        }
      )
    }
  );*/

console.log(six(times(eight(times(two())))))
