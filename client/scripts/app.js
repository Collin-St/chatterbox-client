var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    App.startSpinner();
    App.fetch(MessagesView.initialize);
    App.fetch(RoomsView.initialize);
    FormView.initialize();
    // RoomsView.initialize();
    
    App.stopSpinner();
    
    // console.log('getRooms: ', getRooms(Messages))

    // Fetch initial batch of messages
    // App.startSpinner();
    // App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages = data;
      callback();
      
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
