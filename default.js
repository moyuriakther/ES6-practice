function add(num1, num2 = 0) {  //default perameter num2 = 0;
    // if (num2 == undefined) {
    //     num2 = 0;    //default perameter num2 = 0; second way 
    // }
    // num2 = num2 || 0;   //default perameter num2 = 0; third way 
    return num1 + num2;
}
const total = add(15);
console.log(total);