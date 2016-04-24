angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Enter new task", added: new Date()}
      , {title: "Enter new task two", added: new Date()}
    ]
  };
  
    // add task function 
  function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
  
    
    // data for add task and to data to delete tasks from the app
    return {
    data: data,
     addTask: addTask,
       deleteTask: function (del){
          data.tasks.splice(data.tasks.indexOf(del), 1);
      }
  };
});