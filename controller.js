var taskAppModule = angular.module("taskApp", []);
taskAppModule.controller("taskCtrl", function ($scope, $http) {
  $http
    .get("sample.json")
    .success(function (data) {
      $scope.tasks = data;
    })
    .error(function (data, status) {
      console.error("Fail to load data", status, data);
      $scope.tasks = {};
    });
});
