ANDSearchFilter.$inject = ['andSearchService']
class ANDSearchFilter
#  @$inject: ['andSearchService']
  constructor: (@andSearchService) ->
    (list, searchQuery) ->
      if searchQuery
        # 全角スペースを半角スペースに置換
        query = searchQuery.replace(RegExp('　', 'g'), ' ')

      # 検索フォームに文字が入力されている場合
      if query
        # 検索対象ワードの配列を作成
        queryWordArray = query.split(' ')
        filteredList = []
        list.forEach (obj) ->
          # 検索キーワードでオブジェクトそれぞれを探索
          isMatch = !queryWordArray.some((keyword) ->
            !@andSearchService.keywordJudge(obj, keyword)
          )

          # 検索キーワードがAND一致した場合、一覧に表示する配列に格納
          if isMatch
            filteredList.push obj
          return

        return filteredList
      return list
