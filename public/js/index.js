var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Jean-Michel',
        to: 'Janet Jackson',
        text: 'Whats up'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
})