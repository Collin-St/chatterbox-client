var MessageView = {

//Messages.results is the array
  render: _.template(`
     <div class="chat">
        <div class="username" onclick="Friends.toggleStatus()">
        <%- username %>
        </div>
        <div>
        <%- text %>
        </div>
      </div>
    `)

  

};

// <%-username%>
// <%-text%>


  
  
  // render: _.template(`
  //    <div class="chat">
  //       <div class="username" onclick="Friends.toggleStatus()"></div>
  //       <div></div>
  //     </div>
  //   `)