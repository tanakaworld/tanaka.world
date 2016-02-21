function ANDSearchFilter(andSearchService) {
    return function (list, searchQuery) {

        if (searchQuery) {
            // 全角スペースを半角スペースに置換
            var query = searchQuery.replace(/　/g, " ");
        }

        // 検索フォームに文字が入力されている場合
        if (query) {
            // 検索対象ワードの配列を作成
            var queryWordArray = query.split(" ");

            var filteredList = [];

            list.forEach(function (obj) {
                // 検索キーワードでオブジェクトそれぞれを探索
                var isMatch = !queryWordArray.some(function (keyword) {
                    return !andSearchService.keywordJudge(obj, keyword);
                });

                // 検索キーワードがAND一致した場合、一覧に表示する配列に格納
                if (isMatch) {
                    filteredList.push(obj);
                }
            });
            return filteredList;
        }
        return list;
    };
}