var child = require('child_process').fork('childa.js');

var server = require('net').createServer();
server.listen(1337, function () {
  child.send('server', server);
});
