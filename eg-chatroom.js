angular.module('eg.chatroom',['eg.socket'])
  .controller('ChatroomController',['$scope','SocketFactory',function($scope,SocketFactory){
    var socket = new SocketFactory();
    $scope.chats = [];
    $scope.$on('broadcast:all',function(event,arguments){
      $scope.chats.push(arguments.data);
    });
    $scope.broadcast = function(data) {
      socket.broadcast(data);
    };
  }])
  .factory('ChatroomFactory',['$rootScope',function($rootScope){
    
  }])
;
