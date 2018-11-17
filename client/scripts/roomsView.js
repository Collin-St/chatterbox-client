var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Parse.readAll((data) => {
    //   // examine the response from the server request:
    //   console.log(data.results[0]);
      
    //   callback();
    // });
  
  var allRooms = [];
  // console.log(Messages.results);
  Messages.results.forEach(function (item) {
    if (item.roomname && !allRooms.includes(item.roomname)) {
      allRooms.push(item.roomname);
    }
  
  // return allRooms;
  });
  console.log('allRooms:', allRooms);
  
  for (var i = 0; i < allRooms.length; i++) {
    Rooms.add(allRooms[i]);
    RoomsView.renderRoom(Rooms.add(allRooms[i]));
  }
  
  },

  // render: function() {
  // },

  renderRoom: function(roomName) {
    $('#rooms button').on('click', function() {
      $('#rooms select').append(roomName);
    
    });
    // $('#rooms select').append('<option value=' + roomName + '></option>');
    // $('#rooms select').append(Rooms.add());
    
  }

};
