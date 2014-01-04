(function () {
  "use strict";

  var connect = require('connect');
  var http = require('http');
  var PORT = 8888;

  var app = connect();
  app.use(connect.logger('dev'));
  app.use(connect.static(__dirname));

  var server = http.createServer(app);
  server.listen(PORT, function () {
    console.log('server is listening on localhost:' + PORT);
  });
})();
