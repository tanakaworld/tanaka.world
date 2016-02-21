angular.module("JOJO", [])
    .service("andSearchService", ANDSearchService)
    .filter("andSearchFilter", ANDSearchFilter)
    .controller("ANDSearchController", ANDSearchController);