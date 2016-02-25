var ANDSearchController;

ANDSearchController = (function() {
  ANDSearchController.$inject = ['$scope', 'andSearchService'];

  function ANDSearchController($scope, andSearchService) {
    $scope.users = andSearchService.getData();
  }

  return ANDSearchController;

})();
