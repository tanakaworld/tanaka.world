angular.module('JOJO', ['ngRoute'])
.service('andSearchService', ANDSearchService)
.filter('andSearchFilter', ANDSearchFilter)
.controller('ANDSearchController', ANDSearchController)
