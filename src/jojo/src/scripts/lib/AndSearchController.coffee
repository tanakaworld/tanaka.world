class ANDSearchController
  @$inject: ['$scope', 'andSearchService']
  constructor: ($scope, andSearchService) ->
    $scope.users = andSearchService.getData()
