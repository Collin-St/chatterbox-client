var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //loop
      // for each
        // MessageView.render
    var feed = Messages.results;
    Messages.results.forEach(function(item) {
      console.log(item);
      // var html = '';
      // html += 
      MessagesView.renderMessage(item);
    })
  },

  // render: function(message) {
  //   MessageView.render('<div>'message'</div>');
  //   // $chats.append('<div>test</div>');
  // }
  
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }

};