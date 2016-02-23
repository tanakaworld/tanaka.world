var ANDSearchController;

ANDSearchController.$inject = ['andSearchService'];

ANDSearchController = (function() {
  function ANDSearchController(andSearchService) {
    this.andSearchService = andSearchService;
    this.users = this.andSearchService.getData();
  }

  return ANDSearchController;

})();
