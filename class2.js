const user ={
    name:"ajeet",
    age: 40,
    welcome:function(){
        console.log(`${this.name}, welcome to ES6`)
        console.log(this)
    }
};
//java treats object as variable and also function as variable
user.welcome();
user.name="test"
user.welcome()
console.log(this.name)

const employee={
    name:" amit",
    age : 20,
    salary:10000,
    bonus:0.2,
    calcbonus:function(){
        console.log(`bonus of monthly ${this.salary*this.bonus}`)
    }
};
employee.calcbonus()
let a=5 //global
function outer(){
    let b=10; //lexical
    function inner(){
        let c=15; //local
        console.log(a,b,c);
    }
    inner();

}
outer();
//inner();

// let abc={
//     name:"ajeet",
//     outer:function(){
//         console.log("here is log.", this.name),
//         function inner(){
//             console.log("in inner",this.name)
//         }
//         inner(); // error as this in  normal function do not taks the near by context this,only works in arrow function
//     }

// };
// abc.outer()
let abc={
    name:"ajeet",
    outer:function(){
        console.log("here is log.", this.name),
        inner=()=>{
            console.log("in inner",this.name)
        }
        inner(); //lexical this,only works in arrow function
    }

};
abc.outer()

//destructuring of array
let num=[10,20,30];
let [b,c,d]=num;
console.log(b);
console.log(c);
console.log(d);
const arr=[10,20,30]
const [a1,b1,,c1]=arr
const [x1,...y1]=arr
console.log(c1) //  it will gvie undefined because ,,
console.log(y1) // rest of the array