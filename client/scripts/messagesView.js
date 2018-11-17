var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //loop
      // for each
        // MessageView.render
    var feed = Messages.results;
    Messages.results.forEach(function(item) {
      if (item.username) {
        MessagesView.renderMessage(item);
      }
      // console.log("item:", item);
      // var html = '';
      // html += 
      
    })
  },

  // render: function(message) {
  //   MessageView.render('<div>'message'</div>');
  //   // $chats.append('<div>test</div>');
  // }
  
  renderMessage: function(message) {
    // console.log(message);
    // console.log('username: ', message.username);
    $('#chats').append(MessageView.render(message));
  }

};