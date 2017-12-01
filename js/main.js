var pokerApp = angular.module("pokerApp", ['ngRoute']);

pokerApp.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "/templates/caribbeanpoker.html",
      controller: "caribbeanpoker",
    }
  );
})



var caribbeanpoker = function()
{
	
}

pokerApp.controller('caribbeanpoker',  ['$scope', caribbeanpoker]);