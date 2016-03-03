angular.module('JOJO', ['ngRoute', 'smart-table'])
.controller('JOJOController', JOJOController)
.controller('CharacterController', CharacterController)
.service('characters', -> CHARACTERS_JSON)
.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider
  .when('/', {templateUrl: 'index.html', controller: 'JOJOController'})
  .when('/:characterId', {templateUrl: 'characterDetail.html', controller: 'CharacterController'})
  .otherwise({redirectTo: '/'})

#  TODO enable
#  $locationProvider.html5Mode(true)
])
