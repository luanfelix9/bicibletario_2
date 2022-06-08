const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", async (req,res)=>{
    const DB = require('./infra/postgresConnect');
    let produtos = await DB.query('select * from produtos').catch(err=>err);
    console.log(produtos)



   return  res.json(produtos);
}); 

app.listen(PORT, console.log('Servidor rodando na porta: ' + PORT ));