var ftpClient = require("jsftp");
var config = { 
    host: "172.16.54.155",    
    port:2121,
};
var options = {
    logging:"basic"
};
const ftpConn = new ftpClient(config,options);
var Status = ftpConn.raw(function(err,data){
    if(err)
    {
     return  console.error("Error While Connecting..."+err);
    }
    console.log(data);
    console.log("Conneted!");
});
console.log(Status);