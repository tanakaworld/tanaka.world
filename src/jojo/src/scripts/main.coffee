angular.module('JOJO', ['ngRoute', 'smart-table'])
.controller('JOJOController', JOJOController)
.controller('CharacterController', CharacterController)
.controller('ThumbnailController', ThumbnailController)
.service('characters', -> CHARACTERS_JSON)
.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider
  .when('/', {templateUrl: 'index.html', controller: 'JOJOController'})
  .when('/thumbnail/', {templateUrl: 'thumbnail.html', controller: 'ThumbnailController'})
  .when('/character/:characterId', {templateUrl: 'characterDetail.html', controller: 'CharacterController'})
  .otherwise({redirectTo: '/'})

#  TODO enable
#  $locationProvider.html5Mode(true)
])
