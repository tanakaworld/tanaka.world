function ANDSearchController($scope, andSearchService) {
    $scope.users = andSearchService.getData();
}