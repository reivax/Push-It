var PushIt = require (__dirname + '/../../server/push-it').PushIt,
    fs = require('fs'),
    connect = require('connect');

 try{
   var options = JSON.parse(fs.readFileSync(__dirname+"/options.json"))  
 }catch(e){
   console.error("Could not load the options file!: ", e.toString());
   process.exit()
 }
 

function helloWorld(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello world');
}


var server = connect.createServer( 
  connect.staticProvider(__dirname + '/static')
);

server.listen(8001);

var pi = new PushIt(server, options);


