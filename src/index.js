const express = require("express");
const app = express();
const PORT = 3001;
const Camera = require("./routes/index");
require('./database/index');
const path = require('path');





app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/camera", Camera);

app.use('/file', express.static(path.resolve(__dirname,'..',"tmp","uploads")));

app.get("/",(req,res)=>{
    
    return res.json({messege:"hello word"});
})



app.listen(PORT, () =>{
    console.log(`serve run port ${PORT}`);
})