const mysql = require('mysql2');
const exp=require('express');
const app=exp();
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pratu@2604",
    database: 'contact'
  });

app.get('/contact',(req,res)=>{
    pool.query("SELECT * from contactlist", function (err, result, fields) {
        if(err) {
            console.error(err);
            return;
        }
        // console.log(result) ;
        res.send(result);
        // for(let x in result){
        //     console.log(result[x].sent_to)
        // }
    });
})

app.get('/contact/:id',(req,res)=>{
pool.query("SELECT * from contactlist where id=?",[req.params.id], function (err, result, fields) {
    if(err) {
        console.error(err);
        return;
    }
    // console.log(result);
    // console.log(req.params.id)
    res.send(result);
    // for(let x in result){
    //     console.log(result[x].contact_no)
    // }
});
})

app.get('/contact/:id',(req,res)=>{
    pool.query("SELECT * FROM messages where sent_to=?",[req.params.id], function (err, result, fields) {
        if(err) {
            console.error(err);
            return;
        }
        // console.log(result);
        // console.log(req.params.id)
        res.send(result);
        // for(let x in result){
        //     console.log(result[x].contact_no)
        // }
    });
    })

app.listen(3000,()=>{console.log("hello-3000")})