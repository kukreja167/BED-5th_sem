const mongoose = require('mongoose');
let {MongoMemoryServer}=require("mongodb-memory-server")
let user=require("./model/user.model");
let request=require("supertest");
const app = require('./server.js');

let mongoserver;

beforeAll(async()=>{
    mongoserver=await MongoMemoryServer.create();
    let mongoUrl=mongoserver.getUri();
    await mongoose.connect(mongoUrl);
})
afterEach(async()=>{
    await user.deleteMany();
})
afterAll(async()=>{
    await mongoose.disconnect();
    await mongoserver.stop();
})
describe("POST /api/user/register",()=>{
    it("should return user already exists if email already registered",async()=>{
        await user.create({
            name:"kk",
            email:"kavya@gmail.com",
            password:"1234"
        });
    let response=await request(app).post("/api/user/register").send({
        name:"kavya",
        email:"kavya@gmail.com",
        Password:"1234"
    })
    expect(response.body.message).toBe("User already exists")
})
    it("should register user successfully if email not registered",async()=>{
    let response=await request(app).post("/api/user/register").send({
        name:"kavya",
        email:"kavya@gmail.com",
        password:"1234"
    })
    expect(response.body.message).toBe("User registered successfully");  
})


})