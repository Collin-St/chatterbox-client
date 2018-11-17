var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // on click, Submit should send messages to the server
    var newMessage = document.getElementById("message").value;
    console.log('test:', newMessage);
    var messageObject = {
      username: App.username,
      roomname: 'something',
      text: newMessage,
    }
    // need to create object with HTMLInputElement.value
    
    Parse.create(messageObject);
    // location.reload();
    // message needs to be an object
    
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

// {
//       username: 'collin and Paul',
//       roomname: 'Collin and paul room',
//       text: 'Welcome to our room',
//     }