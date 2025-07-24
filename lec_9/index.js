const express = require('express');
const app = express();
const fs=require('fs');
const path = require('path');
const public = path.join(__dirname, 'public');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // Serve static files from the 'public' directory

// app.post('/home', (req, res) => {
//     const { data1 , data2 } = req.body;
//     console.log({data1,data2});
//   res.send('Hello, World!');
// });
// app.post('/adduser', (req, res) => {
//     const user= req.body;
//     const Users=[];
//     for(const i in user){
//        Users.push({
//             name: user[i].name,
//             age: user[i].age,
//             email: user[i].email,
//             password: user[i].password
//         });
//     }
//     console.log(Users);
//     res.send('User added successfully');
//     fs.writeFile('/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_9/user/User.json',JSON.stringify(Users), (err) => {
//         if(err){
//         console.error('Error writing to file', err);
//     }
//         else {
//             console.log('User data saved to User.json');
//         }
// });
// });
app.post('/adduser', (req, res) => {
    const newUser = req.body; // name, age, email, password

    fs.readFile('/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_9/user/User.json', 'utf8', (err, data) => {
        let users = [];

        if (!err && data) {
            try {
                users = JSON.parse(data);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }

        users.push(newUser);

        fs.writeFile('/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_9/user/User.json', JSON.stringify(users, null, 2), err => {
            if (err) {
                console.error('Error saving user');
                return res.send('Error');
            }
            res.send('User added successfully');
        });
    });
});

app.get('/getuser', (req, res) => {
    fs.readFile('/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_9/user/User.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
        } else {
            const users = JSON.parse(data);
            res.send(users);
        }
    });
});
app.post('/Login', (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });
    fs.readFile('/Users/kavyakukreja_167/Desktop/BED-5th_sem/lec_9/user/User.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            
        } else {
            const users = JSON.parse(data);
            const found = users.find(u => u.email === email && u.password === password);
            if (found) {
                res.send('Login successful');
            } else {
                res.send('Invalid email or password');
            }
        }
    });
});
app.get('/Login', (req, res) => {
   res.sendFile(path.join(public, 'form.html'));
});
app.get('/adduser', (req, res) => { 
    res.sendFile(path.join(public, 'adduser.html'));
});


app.listen(3080, () => {
  console.log('Server is running on port 3080');
});
