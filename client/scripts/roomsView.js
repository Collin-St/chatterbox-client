var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // Parse.readAll((data) => {
    //   // examine the response from the server request:
    //   console.log(data.results[0]);
      
    //   callback();
    // });
    App.fetch(console.log);
  },

  // render: function() {
  // },

  renderRoom: function(room) {
    $('#rooms select').append('<option>' + room + '</option>');
    // $('#rooms select').append('<option value='room'></option>');
  }

};
