class JOJOController
  @$inject: ['$scope']
  constructor: ($scope) ->
    $scope.openDetail = (char) ->
      alert(char.id + ' | ' + char.part)

    $scope.partsSelector = [1, 2, 3, 4, 5, 6, 7, 8]

    $scope.characters = [
      {"id": 1, "part": 8, "body": "東方定助", "stand": "ソフト&ウェット"},
      {"id": 2, "part": 8, "body": "笹目桜二郎", "stand": "ファン・ファン・ファン"},
      {"id": 3, "part": 8, "body": "東方大弥", "stand": "カリフォルニア・キング・ベッドちゃん"},
      {"id": 4, "part": 8, "body": "虹村京", "stand": "ボーン・ディス・ウェイ"},
      {"id": 5, "part": 8, "body": "広瀬康穂", "stand": "ペイズリー・パーク"},
      {"id": 6, "part": 8, "body": "吉良吉影", "stand": "名称不明（キラークイーン？）"},
      {"id": 7, "part": 8, "body": "カツアゲロード", "stand": "オータム・リーヴス"},
      {"id": 8, "part": 8, "body": "東方常秀", "stand": "ナット・キング・コール"},
      {"id": 9, "part": 8, "body": "東方つるぎ", "stand": "ペーパー・ムーン・キング"},
      {"id": 10, "part": 8, "body": "八木山夜露", "stand": "アイ・アム・ア・ロック"},
      {"id": 11, "part": 8, "body": "東方憲助", "stand": "キング・ナッシング"},
      {"id": 12, "part": 8, "body": "東方常敏", "stand": "名称不明"},
      {"id": 13, "part": 8, "body": "大年寺山愛唱", "stand": "ドゥービー・ワゥ"},

      {"id": 1, "part": 8, "body": "ジョルノ・ジョバァーナ", "stand": "ゴールド・エクスペリエンス(黄金体験)"},
      {"id": 2, "part": 8, "body": "ジャン＝ピエール・ポルナレフ", "stand": "シルバー・チャリオッツ"},
      {"id": 3, "part": 8, "body": "ブローノ・ブチャラティ", "stand": "スティッキィ・フィンガーズ"},
      {"id": 4, "part": 8, "body": "レオーネ・アバッキオ", "stand": "ムーディー・ブルース"},
      {"id": 5, "part": 8, "body": "グイード・ミスタ", "stand": "セックス・ピストルズ"},
      {"id": 6, "part": 8, "body": "ナランチャ・ギルガ", "stand": "エアロスミス"},
      {"id": 7, "part": 8, "body": "パンナコッタ・フーゴ", "stand": "パープル・ヘイズ"},
      {"id": 8, "part": 8, "body": "トリッシュ・ウナ", "stand": "スパイス・ガール"},
      {"id": 9, "part": 8, "body": "ポルポ", "stand": "ブラック・サバス"},
      {"id": 10, "part": 8, "body": "ズッケェロ", "stand": "ソフト・マシーン"},
      {"id": 11, "part": 8, "body": "サーレー", "stand": "クラフト・ワーク"},
      {"id": 12, "part": 8, "body": "ホルマジオ", "stand": "リトル・フィート"},
      {"id": 13, "part": 8, "body": "イルーゾォ", "stand": "マン・イン・ザ・ミラー"},
      {"id": 14, "part": 8, "body": "プロシュート", "stand": "ザ・グレイトフル・デッド（偉大なる死）"},
      {"id": 15, "part": 8, "body": "ペッシ", "stand": "ビーチ・ボーイ"},
      {"id": 16, "part": 8, "body": "メローネ", "stand": "ベイビィ・フェイス"},
      {"id": 17, "part": 8, "body": "ギアッチョ", "stand": "ホワイト・アルバム"},
      {"id": 18, "part": 8, "body": "リゾット・ネイロ", "stand": "メタリカ"},
      {"id": 19, "part": 8, "body": "スクアーロ", "stand": "クラッシュ"},
      {"id": 20, "part": 8, "body": "ティッツァーノ", "stand": "トーキング・ヘッド"},
      {"id": 21, "part": 8, "body": "カルネ", "stand": "ノトーリアス・B・I・G"},
      {"id": 22, "part": 8, "body": "チョコラータ", "stand": "グリーン・ディ"},
      {"id": 23, "part": 8, "body": "セッコ", "stand": "オアシス"},
      {"id": 24, "part": 8, "body": "ディアボロ", "stand": "キング・クリムゾン"},
      {"id": 25, "part": 8, "body": "亀（ココ・ジャンボ）", "stand": "ミスター・プレジデント（T-レックス）"},
      {"id": 26, "part": 8, "body": "スコリッピ", "stand": "ローリング・ストーンズ"}
    ]
