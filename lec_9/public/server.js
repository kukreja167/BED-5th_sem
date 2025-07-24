const express=require("express");
const app=express();
app.use(express.static(__dirname+'/public')); // Serve static files from the 'public' directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/", (req, res) => {
    res.sendFile(__dirname + "/form.html"); 
});
app.listen(2233, () => {
    console.log("server started");
});