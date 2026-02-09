//callback function
// a callback is a fucntion passed an argument to another function which is executed 
// setTimeout(()=>{
//     console.log("2")
// },2000);
// console.log("3")
//callback hell- call ke ander call lg rhi hai
// sp we use promise


// console.log("1. start");
// setTimeout(()=>{
//     console.log("2 . cake is ready")
// });
// console.log("3.i am working")

// function bakeCake(myCallBack)
// {
//     console.log("1. cake is in oven");
//     setTimeout(()=>{
//         console.log("2. cake is baked");
//         myCallBack(); // it will call back step3 only when step 2 will complete
//     },2000);
    
// }
// bakeCake(()=>{
//     console.log("3. cake is ready to eat");
    
// })
//creating promise
// const promise1=new Promise(resolve,)


function bakeCake(){
    return new Promise((resolve,reject)=>{
        console.log("1.bake cake");
        setTimeout(()=>{
            let flag=false;
            if(flag){
                resolve("2 cake is ready")
            }
            else{
                reject("2. cake is not ready")
            }

        },2000);
    });
}
bakeCake().then((msg)=>{
    console.log(msg);
    console.log("3. eat cake");
    
}).catch((msg)=>{
    console.log(msg);
    
    console.log("3.eat pizza instead");
    
})

//wap to check whether i can go kashmir or not by checking patrol

function checkP(petrol){
    console.log("1.check for patrol");
    
    return new Promise(resolve,reject)=>{
        setTimeout()

    }
}
petrol(200).then((msg)=>{
    console.log("2.enough fuel");
    console.log("3.can go to kashmir");
    
}).catch((msg)=>{
    console.log("2.not enough fuel");
    console.log("3.cannot go to kashmir");
})