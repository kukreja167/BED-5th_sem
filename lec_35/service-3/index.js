const {createClient} = require('redis');
let subscriber=createClient();





async function notifyMe(){
    await subscriber.connect();
    await subscriber.subscribe('notify-me',(data)=>{
        console.log('data received: ',data);
    });
    await subscriber.subscribe('like',(data)=>{
        console.log('like received: ',data);
    });


}
notifyMe();
