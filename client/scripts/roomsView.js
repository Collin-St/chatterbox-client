var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Parse.readAll((data) => {
    //   // examine the response from the server request:
    //   console.log(data.results[0]);
      
    //   callback();
    // });

  },

  // render: function() {
  // },

  renderRoom: function(roomName) {
    $('#rooms button').on('click', function() {
      $('#rooms select').append(Rooms.add());
    
    });
    $('#rooms select').append('<option value=' + roomName + '></option>');
    // $('#rooms select').append(Rooms.add());
    
  }

};
