const port={};
const{WebSocketServer}=require('ws');
const wss=new WebSocketServer({port:8080});
let rooms= new Map();
// {
//  "1234":[s1,s2,s3]
// }
wss.on('connection',function(socket){
    console.log('connected');
    socket.on('message',function(message){
        // {"type":"join" || "chat","Payload":{"rromId":"value"}}
        let parsedMessage=JSON.parse(message);
        if(parsedMessage.type==="join"){
            let roomId=parsedMessage.payload.roomId;
            if(!rooms.get(roomId)){
                rooms.set(roomId,new Set());
        }
        
        rooms.get(roomId).add(socket);
        socket.send("You are added to room"+roomId);
        console.log(rooms);
    }
    else if(parsedMessage.type==="chat"){
        let roomId=parsedMessage.payload.roomId;
        let message=parsedMessage.payload.text;
        let clients=rooms.get(roomId);clients.forEach(s=>{
            s.send(message)
        });
    }
    else if(parsedMessage.type==="create"){
      let roomId=Math.floor(Math.random()*10000).toString();

        rooms.set(roomId,new Set());
        socket.send("Room created successfully");
        console.log(rooms);

        
    
    }
    
})
})

