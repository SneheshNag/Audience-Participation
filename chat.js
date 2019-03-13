var socket = io();

var amount = document.getElementById('amount');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emit events
btn.addEventListener('click', function(){
  socket.emit('chat', {
    handle: handle.value,
    //amount: amount.value
  });
});

//listen for events


socket.on('chat', function(data){
  output.innerHTML = '<p><strong>' + data.handle + ': </strong>' + data.amount + '</p';
});
