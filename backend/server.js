const express = require('express'); // import express
const cors = require('cors'); // import cors to accept req,res from another port of frontend
const app = express(); // we can access methods of express
app.use(express.json()); // to convert all data to JS Object // its a middleware
app.use(cors())
const PORT = process.env.PORT || 5000; // initialize port to run the file

app.listen(PORT,()=> {
    console.log('Server started...');
})

app.get("/",(req,res) => {
    res.send("Backend server is working")
})

const users = [
    {
        id:1,
        name:'Tamil',
        email:'tamil@gmail.com',
        password:'tamil@123'
    },
    {
        id:2,
        name:'Gracy',
        email:'gracy@gmail.com',
        password:'gracy@123'

    }
];

app.get('/api/users',(req,res) => {
    res.json(users);
})

app.post('/api/login',(req,res) => {
    const userInputEmail = req.body.email;
    const userInputPassword = req.body.password;
    const user = users.find((user) => user.email === userInputEmail && user.password === userInputPassword);
    if(!user){
        return res.status(401).json({
            success:false,
            message: "Invalid username or password"
        })
    }else{
        res.json({
            success:true,
            message:"Login successful",
            user:{
                id:user.id,
                name:user.name,
                email:user.email
            }
        })
    }
})