var ANDSearchFilter;

ANDSearchFilter.$inject = ['andSearchService'];

ANDSearchFilter = (function() {
  function ANDSearchFilter(andSearchService) {
    this.andSearchService = andSearchService;
    (function(list, searchQuery) {
      var filteredList, query, queryWordArray;
      if (searchQuery) {
        query = searchQuery.replace(RegExp('　', 'g'), ' ');
      }
      if (query) {
        queryWordArray = query.split(' ');
        filteredList = [];
        list.forEach(function(obj) {
          var isMatch;
          isMatch = !queryWordArray.some(function(keyword) {
            return !this.andSearchService.keywordJudge(obj, keyword);
          });
          if (isMatch) {
            filteredList.push(obj);
          }
        });
        return filteredList;
      }
      return list;
    });
  }

  return ANDSearchFilter;

})();
