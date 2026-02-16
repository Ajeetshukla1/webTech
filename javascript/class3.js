//array destructuring
//we take array and place its elements in different variable
let numbers= [10,20,30]
let [a,b,c]=numbers
console.log(a)
console.log(b)
console.log(c)

// rest operator
//bacha hua
//eg) rest of the students
const arr=[10,20,30]
const[x1,...y1]=arr
//it means rest of the variable will be placed in y1
console.log(x1)
console.log(y1)
//output:
//10
//[ 20, 30 ]
const[a1,b1,c1,d1]=arr
console.log(a1,b1,c1,d1)
//d1 will return undefined

//object destructuring

let wtobj={
    name:"ajeet",
    age:21,
    key:"xyz"
}
//javascript is a object baseline language not object oriented 
console.log(wtobj)

let duplicate={...wtobj,key:"abc"};//here ...  gives the rest of the variable of the object
//  // it doesn't  update the original object
//we updated the value of key without equal to operator 
duplicate['add']="gzb" //we can also add parameter 
console.log(wtobj)
console.log(duplicate)
console.log(typeof(duplicate))
wtobj['new']="yes"
console.log(wtobj)
// if i want only specific variable from the object
let {name,age:currentage}=wtobj //we can also change the name
console.log(name,currentage)

const emp={
    name:"aju",
    empid:"10",
    dept:"cs"
}
let myemp={...emp,dept:"cse"} //copying the obj with destructuring the array and modifying values while copying
console.log(myemp)

let {name:myname,dept:currentdept}=emp //storing the variables of object by changing the variable name
console.log(myname,currentdept)

//object destructuring in functions
//note: variable name should be same as the original objects variable
//by not passing whole object we are passing only elements of the object that are needed by destructuring
function show({name,age}){
    console.log(name,age)
}
show(wtobj)


//rest and spread
// we can pass elements in function how much we want by using ...  operator

function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0)
}
console.log(sum(1,2,3,4,5,6,7))

function show(a,...b){
    console.log(a)
    console.log(b)
}
show(10,20,30)
//spread- it 