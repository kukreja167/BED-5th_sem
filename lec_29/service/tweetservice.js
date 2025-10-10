const {PrismaClient} = require("./generated/prisma");
let prisma= new PrismaClient();



class tweet{
    static async addTweet(userId, body){
    try {
         let newTweet= await prisma.tweet.create({
        data:{
            userId:Number(userId),
            body:body
        }
    })
    return newTweet;
    } catch (error) {
        throw new Error(error.message)
    } 
}
static async updateTweet(id,userId, updatedBody){
    let tweet= await prisma.tweet.findFirst({
        where:{
            id:Number(id),
            userId:Number(userId)
        }
    })
    if(!tweet){
        return "something went wrong"
    }

    await prisma.tweet.update({
        where:{
            id:Number(id)
        },
        data:{
            body:updatedBody
        }
    })
    return "tweet updated"
}

static async readtweets(){
    let tweets= await prisma.tweet.findMany({
        include:{ user:true}
    })
    return tweets
}
}