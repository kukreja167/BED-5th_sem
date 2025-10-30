const {createClient} = require('redis');
let publisher=createClient();





async function notifyMe(){
    await publisher.connect();
    await publisher.publish('notify-me','data');
    await publisher.publish('like','your post is liked.');

}
notifyMe();