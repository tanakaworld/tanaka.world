class JOJOController
  @$inject: ['$scope', '$location', 'characters']
  constructor: ($scope, $location, characters) ->
    $scope.openDetail = (char) ->
      $location.path("character/#{char.id}")
      $scope.character = $scope.characters[char.id]

    $scope.partsSelector = [1, 2, 3, 4, 5, 6, 7, 8]

    $scope.characters = characters