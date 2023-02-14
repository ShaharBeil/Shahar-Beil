const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const sql = require('./db');
const connection = require('./db');
const port = 3000;

app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.redirect("/index");
})

app.get('/index', (req,res)=>{
    //Main page
    res.sendFile(path.join(__dirname,"views/index.php"));
})

app.get('/signIn', (req,res)=>{
    //shign in page
    res.sendFile(path.join(__dirname, "views/signIn.php"))
});

app.post('/insertUser',CRUD.InsertUser);

app.post('/deleteTables',dbCreateTables.deleteTables);

app.post('/searchUser', CRUD.SearchUser);

app.post('/SearchUserOrders', CRUD.SearchUserOrders);

app.listen(port, ()=>{
    console.log("server is running on port "+port);
})