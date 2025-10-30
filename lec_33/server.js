const express = require('express');
const app = express();
const PORT = 3000;
const { createClient } =require ("redis");
const client = createClient() //{ url: 'redis://localhost:6379' }

async function connect() {
    await client.connect();
client.on('error', (err) => console.log('Redis Client Error', err));
}
// why do we use redis? ans- to get crashing meemory
// why do we use caching? ans- to reduce time complexity and space complexity






connect()
.then(() => {
    console.log("Connected to Redis");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
})
// async function cacheddata(){
//     await client.connect();
//     client.set("user:100", JSON.stringify([{
//              name: "sargun",
//              age: 90
         
//             },
//         {
//             name: "Kavya",
//             age: 20
//         }]));
// }
// cacheddata()
// .then(() => {
//     console.log("Data cached sucessfully");
// })
// .catch((err) => {
//     console.log("Error caching data", err);
// });
// async function getuser(){
//     await client.connect();
//     let user= client.get("user:100")
//     return user;
//     }
//     getuser()
//     .then((data) => {
//         console.log("Data fetched sucessfully: \n",data);
//     })










