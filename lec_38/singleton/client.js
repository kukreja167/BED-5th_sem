const principal = require("./principal");


function suspendStudent(name) {
// let principal=new principal("Kavya");
let principal=principal.getprincipal();
principal.suspend(name);

}
function removeSuspension(name) {
    // let principal=new principal("sargun");
let principal=principal.getprincipal();
    principal.removesunpension(name);
    
    }
    console.log("start")
    async function  ask() {
        console.log("first");
await promise.resolve();
        console.log("lsecond");
    }
    ask().then((data)=>{
        console.log("data");
    })
    console.log("third");