let first_number = (prompt('enter number'));
let second_number = (prompt('enter number'));
let options = prompt('enter an operation');


const add = (a,b)=> {
    console.log(a+b)
}

const multiply = (a,b)=> {
    console.log(a*b)
}

const subtract = (a,b)=> {
    console.log(a-b)
}
   
const divide =(a,b)=> {
    console.log(a/b)
}

const calc= (a,b,c)=> {
    
    if (c == '+') {
        add(a,b)
    }else if (c == '-'){
        subtract(a,b)
    }else if (c=='*'){
        multiply(a,b)
    }else if (c=='/') {
        divide(a,b)
    }

}

calc(first_number,second_number,options)