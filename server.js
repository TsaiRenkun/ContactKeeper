const express = require('express');
const connectDB = require('./config/db');
const path = require ('path');
const app = express();

//conect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }))

app.get("/", (req, res) =>
    res.json({ msg: "Welcome to the contact Keeper API" })
);


//Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//Serve STatic Assets in production
if(process.env.NODE_ENV === 'production'){
    //Set static Folder
app.use(express.static('client/build'))

app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
