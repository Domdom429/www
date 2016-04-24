angular.module('starter.controllers', [])

// displays the list of tasks that the user has entered
.controller('TasksCtrl', function($scope, Task) {
  $scope.data = Task.data;

//delete task function  is here
  $scope.deleteTask = function (del){
     Task.deleteTask(del);     
  };
  
    
// scope for use of html    
  $scope.tasks = Task.data.tasks;
  $scope.show;


})

// adding a task to the list controller
.controller('AddTaskCtrl', function($scope, Task) {
  var data = {
    newTask: ""
  };
  
    // the add task function 
  function addTask() {
    Task.addTask(data.newTask);
    data.newTask = "";
  }
  
    // the scope for html use
  $scope.data = data;
  $scope.addTask = addTask;
});