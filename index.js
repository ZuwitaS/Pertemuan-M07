import express from 'express';
import mysql2 from 'mysql2';
const app = express();
const conn = mysql2.createConnection({
    host: 'localhost', 
    user: 'root',
    password: '',
    database: 'store_db'
})
const hostname = '127.0.0.1';
const port = 3000;

conn.connect(err => {
    if(err){
        console.error("database is disconnect!");
        console.error(err);
    }
    else
    console.log("database is connected!")
});

app.get ('/api/customer', (req,res) =>{
    let sql = "SELECT*FROM `customer` WHERE 1;";
    let query = conn.query(sql, (err, resutls) => {
        res.json(resutls);
    })
});

app.get('/api/customer/:nama', (req,res) =>{
    let sql = "SELECT * FROM `customer` WHERE cust_name = '"+req.params.nama +"'";
    let query = conn.query(sql, (err,results) => {
        res.json(results);
    })

});


app.listen(port, () => {
    console.log(`Server running at ${hostname}: ${port}`);
})
