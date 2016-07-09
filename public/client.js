var moviert = (function(){
    var factory = {};
    var socket = io('https://marsjoyride.herokuapp.com');
    socket.on('play_remote', function(message){
        document.querySelector('.ytp-play-button').click();
    });
    factory.play = function(){
        socket.emit('play', 'ok');
    };
    return factory;
})();
