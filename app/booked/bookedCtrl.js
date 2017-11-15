angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrvc) {
  mainSrvc.getPackageInfo().then(res => {
    $scope.allPackages = res.data;
    $scope.allPackages.forEach(package => {
      if (package.id && (package.id == $stateParams.id)) {
        $scope.package = package;
      }
    }) 
  })
})