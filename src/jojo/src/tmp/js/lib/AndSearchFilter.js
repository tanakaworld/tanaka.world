var ANDSearchFilter;

ANDSearchFilter = (function() {
  ANDSearchFilter.$inject = ['andSearchService'];

  function ANDSearchFilter(andSearchService) {
    return function(list, searchQuery) {
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
            return !andSearchService.keywordJudge(obj, keyword);
          });
          if (isMatch) {
            return filteredList.push(obj);
          }
        });
        return filteredList;
      }
      return list;
    };
  }

  return ANDSearchFilter;

})();
