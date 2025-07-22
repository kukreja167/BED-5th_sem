const fs=require('fs');
function buyproduct(name, pname) {
    fs.readFile("product.txt", "utf-8", (err, data) => {
        if(err) {
            console.error("Error reading file:", err);
            return;
        }
        const findproduct=data.split("\n").find(line => line.includes(pname));
        if(findproduct) {
            fs.readFile("user.txt", "utf-8", (err, userData) => {

                if(err){
                    console.error("Error reading user file:", err);
                    return;
                }
                const finduser = userData.split("\n").find(line => line.includes(name));
                if(finduser){
                    const orderentry={
                        user: name,
                        product: pname,
                        status: "purchased"
                    };
                   fs.readFile("order.txt","utf-8",(err, orderData) => {
                        if(err) {
                            console.error("Error reading order file:", err);
                            return;
                        }
                        const userdata=orderData ? JSON.parse(orderData) : [];
                        userdata.push(orderentry);
                        
                        fs.writeFile("order.txt", JSON.stringify(userdata), (err) => {
                            if(err) {
                                console.error("Error writing to order file:", err);
                                return;
                            }
                            console.log(`User ${name} purchased ${pname}.`);
                        });
                    });
                }
            });
        }
    });
}
module.exports = { buyproduct };