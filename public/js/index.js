var socket = io();

socket.on('getRooms', function (rooms) {
    var datalist = jQuery('#rooms');

    datalist.empty();
    rooms.forEach(function (room) {
        datalist.append($('<option></option>').attr('value', room));
    });

    console.log(rooms);
});