var SQL = require('./db');

const CreateDb = () => {
    var query = "CREATE DATABASE IF NOT EXISTS web;"
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created db');
        return;
    });
}

//delete tables//

const deleteTables = () => {
    var query = "DROP TABLE IF EXISTS web.users;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped users table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.wishlist;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped wishlist table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.contactus;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped contact us table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.orders;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped orders table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.productorder;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped procudt order table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.products;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped products table');
        return;
    });

    var query = "DROP TABLE IF EXISTS web.suppliers;";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('dropped suppliers table');
        return;
    });
}

// create tables //

const CreateTableUsers = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.users (id int PRIMARY KEY AUTO_INCREMENT,email varchar(50) NOT NULL,name varchar(50) NOT NULL,password varchar(250) NOT NULL)";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created users table');
        return;
    });
}

const CreateTableSuppliers = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.suppliers (id int primary key,name varchar(50),location varchar(100),email varchar(50))";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created users table');
        return;
    });
}

const CreateTableProducts = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.products (productId int PRIMARY KEY,name varchar(50) NOT NULL,price dec NOT NULL,photo varchar(50) NOT NULL,info varchar(512) NOT NULL,category varchar(15) NOT NULL,supplierId int)";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created products table');
        return;
    });
}

const CreateTableProductOrders = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.productOrders (productId INT REFERENCES products (productId),OrderId INT REFERENCES orders (id),amount int not null,PRIMARY KEY (orderId,productId))";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created product orders table');
        return;
    });
}

const CreateTableWishList = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.wishlist (wishlistId int(11) NOT NULL AUTO_INCREMENT,userId int NOT NULL,productId int(11) NOT NULL,PRIMARY KEY (wishlistId))";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created wish list table');
        return;
    });
}

const CreateTableContactUs = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.contactus (id int PRIMARY KEY AUTO_INCREMENT,name varchar(50) NOT NULL,email varchar(50) NOT NULL,company varchar(250) NOT NULL,message varchar(250) NOT NULL)";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created contact us table');
        return;
    });
}

const CreateTableOrders = () => {
    var query ="CREATE TABLE IF NOT EXISTS web.orders (id int primary key AUTO_INCREMENT,customerId int references users (id) ,orderDate datetime null,shipDate datetime null,status int not null DEFAULT '0'";
    SQL.query(query,(err)=>{
        if (err) {
            console.log("error ", err);
            return;
        }
        console.log('created orders table');
        return;
    });
}

 module.exports = {
     CreateDb,
     deleteTables,
     CreateTableUsers,
     CreateTableSuppliers,
     CreateTableProducts,
     CreateTableProductOrders,
     CreateTableWishList,
     CreateTableContactUs,
     CreateTableOrders,
};