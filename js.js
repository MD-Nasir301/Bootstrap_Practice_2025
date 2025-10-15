
let a = 5;


function divide(x, y) {
    if (y === 0) {
        console.log("Error: Division by zero");
        
    }   
    let result = x / y;
    let message = `The division of ${x} by ${y} is ${result}`;
    console.log(message);
    return result;
}   

divide(a, 0);   


