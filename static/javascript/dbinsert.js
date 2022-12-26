var SQL = require('./db');
const path = require('path');
const csv = require('csvtojson');

const InsertUsersData = ()=>{
    var Q2 = "INSERT INTO web.users SET ?";
    const csvFilePath= path.join(__dirname, "../excel/users.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "id": element.id, 
            "email": element.email,
            "name": element.name,
            "password": element.password,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting users data", err);
            }

        });
    });
    })
};

const InsertSuppliersData = ()=>{
    var Q2 = "INSERT INTO web.suppliers SET ?";
    const csvFilePath= path.join(__dirname, "../excel/suppliers.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "id": element.id, 
            "name": element.name,
            "location": element.location,
            "email": element.email,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting suppliers data", err);
            }

        });
    });
    })
};

const InsertProductsData = ()=>{
    var Q2 = "INSERT INTO web.products SET ?";
    const csvFilePath= path.join(__dirname, "../excel/products.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "productsid": element.productid, 
            "name": element.name,
            "price": element.price,
            "photo": element.photo,
            "info": element.photo,
            "category": element.category,
            "supplierId": element.supplierId,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting products data", err);
            }

        });
    });
    })
};

const InsertOrdersData = ()=>{
    var Q2 = "INSERT INTO web.orders SET ?";
    const csvFilePath= path.join(__dirname, "../excel/orders.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "id": element.id, 
            "customerId": element.customerId,
            "orderDate": element.orderDate,
            "shipDate": element.shipDate,
            "status": element.status,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting Orders data", err);
            }

        });
    });
    })
};

const InsertProductOrderData = ()=>{
    var Q2 = "INSERT INTO web.productOrder SET ?";
    const csvFilePath= path.join(__dirname, "../excel/productorder.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "productId": element.productId, 
            "orderId": element.orderId,
            "amount": element.orderDate,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting product order data", err);
            }

        });
    });
    })
};

const InsertwishlistData = ()=>{
    var Q2 = "INSERT INTO web.wishlist SET ?";
    const csvFilePath= path.join(__dirname, "../excel/wishlist.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "wishlistId": element.wishlistId, 
            "userId": element.userId,
            "productId": element.productId,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting wishlist data", err);
            }

        });
    });
    })
};

const InsertContactUsData = ()=>{
    var Q2 = "INSERT INTO web.contactus SET ?";
    const csvFilePath= path.join(__dirname, "../excel/contactus.csv");
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
    console.log(jsonObj);
    jsonObj.forEach(element => {
        var NewEntry = {
            "id": element.id, 
            "name": element.name,
            "email": element.email,
            "company": element.company,
            "message": element.message,
        }
        SQL.query(Q2, NewEntry, (err,mysqlres)=>{
            if (err) {
                console.log("error in inserting contact us data", err);
            }

        });
    });
    })
};
 

module.exports = {
    InsertUsersData,
    InsertSuppliersData,
    InsertProductsData,
    InsertOrdersData,
    InsertProductOrderData,
    InsertwishlistData,
    InsertContactUsData,
};