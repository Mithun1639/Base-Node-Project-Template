const express=require("express");
const apiRoutes=require("./routes")
const {ServerConfig,Logger}=require("./config");
const app=express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,()=>{
    console.log(`successfully started at ${ServerConfig.PORT}`);
})