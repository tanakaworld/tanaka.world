class ThumbnailController
  @$inject: ['$scope', 'characters']
  constructor: ($scope, characters) ->
    $scope.characters = characters
