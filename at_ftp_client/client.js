var PromiseFtp = require('promise-ftp');
  
  var ftp = new PromiseFtp();
  var ftpserver = "ftp://172.16.54.155:2121";
  ftp.connect(ftpserver)
  .then(function (serverMessage) {
    console.log('Server message: '+serverMessage);
    return ftp.put('foo.txt', 'foo.remote-copy.txt');
    //return ftp.list('/');
  }).then(function (list) {
    console.log('Directory listing:');
    console.dir(list);
   return ftp.end();
  });