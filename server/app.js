
const sqlite3=require('sqlite3').verbose() 
let sql;
// connenct to db
const db =new sqlite3.Database("/spotify.db3",sqlite3.OPEN_READWRITE,(err)=>{
  if (err) return console.log(err.message);
});
 

sql=`INSERT INTO Artist(Artist_name,DOB,BIO) VALUES(?,?,?);`
db.run(sql,[" mike","kk",14/07/1968],(err)=>{
  if (err) return console.log(err.message);
})
// update the data
sql='UPDATE Artist SET first_name= ? where id ?';
db.run(sql,['arijit',1],(err)=>{
  
  if (err) return console.error(err.message);
}) 
// queery the data
sql=`SELECT *FROM Artist`;
db.all(sql,[],(errr,rows)=>{
  if (err) return console.error(err.message);
  rows.forEach(row);

});

const express = require("express");
const app = express();
  
app.get("/", (req, res) => {
  console.log("Connected to React");
  
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));