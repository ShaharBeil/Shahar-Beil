const sql = require('./db');


const InsertUser = (req,res)=>{

    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewUserEntry = {
        "Email" : req.body.email,
        "name" : req.body.name,
        "password" : req.body.password,
    }
    const Q1 = "INSERT INTO users SET ?";
    sql.query(Q1, NewUserEntry, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: "error on creating user " + err});
            console.log("error om creating user " + err);
            return;            
        }
        console.log("created new user succesfully "+ mysqlres);
        res.render('homePage')
        return;
    });
};

const ShowAllUsers = (req,res)=>{
    const Q2 = "SELECT * FROM users";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error fetching all users " + err);
            res.status(400).send({message:"error fetching users " + err})
            return;
        }
        console.log("success");
        
        res.render('resultsPage', {
            pple: mysqlres
        });
        return;
    });
};

const SearchUser = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const uEmail = req.body.email;
    const uPassword = req.body.password;


    const Q3 = "SELECT * FROM users WHERE (email=? AND password = ?)";
    sql.query(Q3, [uEmail,uPassword],(err, mysqlres)=>{
            if (err) {
                console.log("error fetching user " + err);
                res.status(400).send({message:"error fetching the user" + err});
                return;
            }
            if (mysqlres.length == 0){
                const message1 = "input incorrect";
                const message2 = "Try again.";
                res.render('fail', {failMessage1: message1, failMessage2: message2});
                return;
            }
            console.log("success");
            res.render('searchPage');
            return;
        });

};

const SearchUserOrders = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content is empty"
        });
        return;
    }
    const uEmail = req.body.email;

    const Q3 = "select name,email,orderDate,shipDate from web.users left join web.orders where web.users.id=web.orders.customerIdwhere web.users.email=?";
    sql.query(Q3, [uEmail],(err, mysqlres)=>{
            if (err) {
                console.log("error fetching user orders " + err);
                res.status(400).send({message:"error fetching user orders" + err});
                return;
            }
            if (mysqlres.length == 0){
                const message1 = "input incorrect";
                const message2 = "Try again.";
                res.render('fail', {failMessage1: message1, failMessage2: message2});
                return;
            }
            console.log("success");
            return;
        });

};

module.exports = {
    InsertUser, 
    ShowAllUsers,
    SearchUser, 
    SearchUserOrders,
}