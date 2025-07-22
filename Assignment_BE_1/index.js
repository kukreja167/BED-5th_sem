const fs=require('fs');
const name=process.argv[2];
const pname=process.argv[3];
const{ buyproduct } = require('./main');
if(!name || !pname) {
    console.log("Please provide both name and product name.");
    process.exit(1);
}
buyproduct(name, pname);
