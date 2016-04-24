angular
  
.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // tab template
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // tasks tab in the app
  .state('tab.tasks', {
    url: '/tasks',
    views: {
      'tab-tasks': {
        templateUrl: 'templates/tab-tasks.html',
        controller: 'TasksCtrl'
      }
    }
  })

  // adding tasks tab for app
  .state('tab.addTask', {
    url: '/addTask',
    views: {
      'tab-addTask': {
        templateUrl: 'templates/tab-addTask.html',
        controller: 'AddTaskCtrl'
      }
    }
  })
  ;

  // use this as default fallback if none are found
  $urlRouterProvider.otherwise('/tab/tasks');

});