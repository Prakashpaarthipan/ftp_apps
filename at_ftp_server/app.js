/**
 * FTP Server 
 */
const ftps = require('ftp-srv');
const host = '172.16.54.155';
const port = 2121;
const ftpServer = new ftps("ftp://"+host+":"+port ,{
    anonymous:true,greeting:["welcome"]
});

ftpServer.on('login',(data,resolve,reject) =>{
 console.log(data);
 console.log(resolve);
 console.log(reject);
 resolve ( { root: '/files/' } );

});

ftpServer.on('client-error',(connection,context,error)=>{
console.log(connection);
console.log(context);
console.log(error);
});

ftpServer.listen().then(()=>{
console.log(`Server running at ftp://${host}:${port}/`);
});