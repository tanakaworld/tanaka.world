var ANDSearchService;

ANDSearchService = (function() {
  function ANDSearchService() {}

  ANDSearchService.prototype.getData = function() {
    return [
      {
        id: 1,
        name: '空条承太郎',
        kana: 'クウジョウジョウタロウ',
        note: 'オラオラ'
      }, {
        id: 2,
        name: '東方仗助',
        kana: 'ヒガシカタジョウスケ',
        note: '変な髪型'
      }, {
        id: 3,
        name: '荒木飛呂彦',
        kana: 'アラキヒロヒコ',
        note: '歳を取らない'
      }, {
        id: 4,
        name: '虹村億泰',
        kana: 'ニジムラオクヤス',
        note: '東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します'
      }, {
        id: 5,
        name: '岸辺露伴',
        kana: 'キシベロハン',
        note: '岸部露伴は動かない'
      }, {
        id: 6,
        name: '広瀬康一',
        kana: 'ヒロセコウイチ',
        note: 'エコーズ'
      }
    ];
  };

  ANDSearchService.prototype.keywordJudge = function(obj, keyword) {
    var properties, self;
    self = this;
    if (angular.isArray(obj)) {
      return obj.some(function(child) {
        return self.keywordJudge(child, keyword);
      });
    } else if (angular.isObject(obj)) {
      properties = Object.getOwnPropertyNames(obj);
      return properties.some(function(property) {
        var child;
        child = obj[property];
        return self.keywordJudge(child, keyword);
      });
    } else if (obj !== null) {
      return angular.toJson(obj).search(keyword) !== -1;
    }
    return false;
  };

  return ANDSearchService;

})();
