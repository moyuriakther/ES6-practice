// function doubleIt(num){   //function expression
//     return num * 2;
// }

// const doubleIt = function (num) {    //function declaretion
//     return num * 2;
// }
//function name  //single perameter
const doubleIt = (num) =>  num *2;   //arrow function
    //more then one perameters  //return
const add = (num1, num2) => num1 + num2 
            //without perameter
const give5 = () =>5; 

const doMath = (x, y) => {    //boro function hole second braket dia likhte hobe. and return korte hobe.
    const sum = x + y;
    const sub = x - y;
    const result = sum * sub;
    return result;
}


const double = add(5, 10);
const result = give5();
const result2 = doMath( 30, 20);
console.log(result2);