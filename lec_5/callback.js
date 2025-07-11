//promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
function deductAmount(amount){
    return new Promise((resolve, reject) => {
        account_balance = 1999;
    if(amount>account_balance){
reject("your account balance is low");
    }else{
        account_balance-=amount;
resolve("Updated amount in your account is: " + account_balance + " after deducting " + amount + ".")
        
    }

})};

products=[{
    name: "iphone16",
    price: 999  
},
{
    name: "macbook pro",            
    price: 1999 
},
{
    name: "ipad air",       
    price: 599
}];
function buyproduct(product) {
    return new Promise((resolve, reject) => {
 let isproduct=null;
 for(let i = 0; i < products.length; i++) {
    if (products[i].name === product) {
      isproduct = products[i];
      break;
    }
 }
    if (isproduct) {
        
        return resolve (isproduct.price);
        } else {
        reject(`Product ${product} is not available.`);
    } 

}
)};
// buyproduct("iphone16").then((data) => {
//     console.log(data);
//         return deductAmount(data);
// }).then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });
async function fun(){
    try{
let amount= await buyproduct("iphone16");
let message= await deductAmount(amount);
console.log(message);
}
 catch(err){
    console.log(err);
}}
console.log(
 fun()
);
console.log("Start");
console.log("End");
