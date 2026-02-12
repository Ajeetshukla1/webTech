// console.log("before execution");
// for(let i=0;i<2;i++){
//     setTimeout(function(){
//         console.log("set time put message");
//         func1()
        
//     },1000)
//     func2()
// }
// console.log("after execution");
// function func1(){
//     console.log("in function 1");
    
// }
// function func2(){
//     console.log("in function 2");
    
// }

// call back functions
// // function is a first class variable in javascript
// function bakeCake(myCallBack)
// {
//     console.log("1. cake is in oven");
//     setTimeout(function(){
//         console.log("2.cake is baked");
//         myCallBack()
        
//     },2000) 
// }
// bakeCake(()=>{
//     console.log("3. cake is ready");
    
// }) // this method will execute when it is called using callback


// Using promise to handle error is call back function

// function bakeCake(){
//     return new Promise((resolve,reject)=>{
//         console.log("1.baking cake");
//         setTimeout(()=>{
//             let flag=true;
//             if(flag){
//                 resolve("2.cake is ready")
//             }
//             else{
//                 reject("2.cake is burnt");
//             }

//         },2000)
        
//     });
// }
// bakeCake().then((msg)=>{
//     console.log(msg);
//     console.log("3. eat cake");
    
    
// }).catch((msg)=>{
//     console.log(msg);
//     console.log("3. order pizza");
    
    
// })

//async and await

function bakeCake(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            if(flag){
                resolve("2.cake is ready")
            }
            else{
                reject("2.cake is burnt");
            }

        },2000)
        
    });
}

// async function party() {
//     console.log("1. start baking");

    
    
// }