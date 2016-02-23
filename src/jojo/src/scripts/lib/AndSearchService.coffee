class ANDSearchService
  getData: ->
    [
      {
        id: 1
        name: '空条承太郎'
        kana: 'クウジョウジョウタロウ'
        note: 'オラオラ'
      }
      {
        id: 2
        name: '東方仗助'
        kana: 'ヒガシカタジョウスケ'
        note: '変な髪型'
      }
      {
        id: 3
        name: '荒木飛呂彦'
        kana: 'アラキヒロヒコ'
        note: '歳を取らない'
      }
      {
        id: 4
        name: '虹村億泰'
        kana: 'ニジムラオクヤス'
        note: '東方仗助が岸辺露伴を困らせた時わたしは焼身自殺します'
      }
      {
        id: 5
        name: '岸辺露伴'
        kana: 'キシベロハン'
        note: '岸部露伴は動かない'
      }
      {
        id: 6
        name: '広瀬康一'
        kana: 'ヒロセコウイチ'
        note: 'エコーズ'
      }
    ]

  keywordJudge: (obj, keyword) ->
    self = this
    if angular.isArray(obj)
      # 配列の場合
      # 格納されている要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
      return obj.some((child) ->
        self.keywordJudge child, keyword
      )
    else if angular.isObject(obj)
      # オブジェクトの場合
      # 子要素を順番にチェックし、ひとつでも部分一致した場合trueを返す
      properties = Object.getOwnPropertyNames(obj)
      return properties.some((property) ->
        child = obj[property]
        self.keywordJudge child, keyword
      )
    else if obj != null
      # オブジェクト、配列以外で、値がある場合
      # 文字列に変換し、部分一致した場合trueを返す
      return angular.toJson(obj).search(keyword) != -1
    # nullまたはundefinedの場合
    false
