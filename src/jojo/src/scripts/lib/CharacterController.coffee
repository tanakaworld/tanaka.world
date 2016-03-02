class CharacterController
  @$inject: ['$scope', '$routeParams', 'characters']
  constructor: ($scope, $routeParams, characters) ->
#    TODO extract to model
#    $scope.char = characters[$routeParams.characterId]
    $scope.char = $.grep(characters, (c, i) ->
      String(c.id) == String($routeParams.characterId)
    )[0]
