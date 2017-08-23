const io = require('socket.io')();
io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log('client is listening to timer with interval', interval);
    setInterval(() => {
      client.emit('timer', new Date().toString());
    }, interval);
  });
});

io.listen(8000);
console.log('listening on port 8000');
