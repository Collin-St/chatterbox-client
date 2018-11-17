var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  // render: function(message) {
  //   MessageView.render('<div>'message'</div>');
  //   // $chats.append('<div>test</div>');
  // }
  
  renderMessage: function(message) {
    $('#chats').append(MessageView.render());
  }

};