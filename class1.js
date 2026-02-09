let show1= function(){
    console.log("Hello World");
}
show1();
let show2=()=> {
    console.log("arrow...");
}
show2();
let show3=(a,b)=>a+b;
console.log(show3(2,3));
let show4=function(a,b=50){
    let result=a+b;

    return result;
}
console.log(show4(20));
console.log(show4(20,30));

class student{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
}
const s1= new student("Alice",85);
console.log(s1.name);
console.log(s1.marks);
const s2= new student("Bob",90);
const s3=new student("Charlie",95);
const s4=new student("David",80);
const s5=new student("Eve",88);

let students=[s1,s2,s3,s4,s5];
students.sort((a,b)=>b.marks - a.marks);
console.log(students[3].marks)

//write a program to find odd and even numbers

function oddEven(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let findOddEven=(num)=>{
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }      
}
console.log(oddEven(5));
console.log(findOddEven(10));
let greater=(a,b)=>{
    if(a>b){
        console.log(a," is greater")
    }
    else if(a<b){
        console.log(b," is greater")
    }
    else{
        console.log("both are equal")
    }
}
greater(10,20);
let ternary=(a,b)=>a>b?console.log(a," is greater"):a<b?console.log(b," is greater"):console.log("both are equal");
ternary(30,20);


// write a program to make simple calc;
let calc = (num1, num2, operator) => {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1/num2;
        case '%':
            return num1 % num2;
        default:
            return "Invalid operator";
    }
}

console.log(calc(10, 5, '+'));   // 15
console.log(calc(10, 5, '-'));   // 5
console.log(calc(10, 5, '*'));   // 50
console.log(calc(10, 5, '/'));   // 2
console.log(calc(10, 3, '%'));   // 1

