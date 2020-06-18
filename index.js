const mongoose= require("mongoose");
const app = require("./app");

const port = process.env.PORT || 3977;

const {IP_SERVER,API_VERSION,PORT_DB} = require ("./config")


mongoose.set("useFindAndModify", false);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/web-trial`, 
{useNewUrlParser: true, useUnifiedTopology: true},
(err,res) => {
    if(err){
        throw err;
    }else{
        console.log("La conexion a la base de datos fue exitosa");



        app.listen(port,() =>{
            console.log("###############")
            console.log(`Api Rest v:${API_VERSION}`);
            console.log("###############");



            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
            
            
            
            
        })
    }
    
    
});
   