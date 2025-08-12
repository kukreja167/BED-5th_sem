const express= require('express');
const app = express();
const port = 3121;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static( __dirname+'/pubic'));
app.post('/user', (req, res) => {
    try{
    const { email, password } = req.body;
    console.log(`Email: ${email}, Password: ${password}`);
    res.json({
        sucess: true,
        message: 'User data received successfully',
        data: {
            email: email,
            password: password
        }
    });
    } catch (error) {   
        res.json({
            success: false,
            error: error.message
        });
    }
}
);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});