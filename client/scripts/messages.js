var Messages = {
  //This has all the data from the server
  
};

var getRooms = function(Messages) {
  var allRooms = [];
  Messages.results.forEach(function (item) {
    if (item.roomname && !allRooms.includes(item.roomname)) {
      allRooms.push(item.roomname);
    }
  });
  return allRooms;
}