angular.module('JOJO', ['ngRoute', 'smart-table'])
.controller('JOJOController', JOJOController)
.controller('CharacterController', CharacterController)
.service('characters', -> [
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

  {"id": 14, "part": 5, "body": "ジョルノ・ジョバァーナ", "stand": "ゴールド・エクスペリエンス(黄金体験)"},
  {"id": 15, "part": 5, "body": "ジャン＝ピエール・ポルナレフ", "stand": "シルバー・チャリオッツ"},
  {"id": 16, "part": 5, "body": "ブローノ・ブチャラティ", "stand": "スティッキィ・フィンガーズ"},
  {"id": 17, "part": 5, "body": "レオーネ・アバッキオ", "stand": "ムーディー・ブルース"},
  {"id": 18, "part": 5, "body": "グイード・ミスタ", "stand": "セックス・ピストルズ"},
  {"id": 19, "part": 5, "body": "ナランチャ・ギルガ", "stand": "エアロスミス"},
  {"id": 20, "part": 5, "body": "パンナコッタ・フーゴ", "stand": "パープル・ヘイズ"},
  {"id": 21, "part": 5, "body": "トリッシュ・ウナ", "stand": "スパイス・ガール"},
  {"id": 22, "part": 5, "body": "ポルポ", "stand": "ブラック・サバス"},
  {"id": 23, "part": 5, "body": "ズッケェロ", "stand": "ソフト・マシーン"},
  {"id": 24, "part": 5, "body": "サーレー", "stand": "クラフト・ワーク"},
  {"id": 25, "part": 5, "body": "ホルマジオ", "stand": "リトル・フィート"},
  {"id": 26, "part": 5, "body": "イルーゾォ", "stand": "マン・イン・ザ・ミラー"},
  {"id": 27, "part": 5, "body": "プロシュート", "stand": "ザ・グレイトフル・デッド（偉大なる死）"},
  {"id": 28, "part": 5, "body": "ペッシ", "stand": "ビーチ・ボーイ"},
  {"id": 29, "part": 5, "body": "メローネ", "stand": "ベイビィ・フェイス"},
  {"id": 30, "part": 5, "body": "ギアッチョ", "stand": "ホワイト・アルバム"},
  {"id": 31, "part": 5, "body": "リゾット・ネイロ", "stand": "メタリカ"},
  {"id": 32, "part": 5, "body": "スクアーロ", "stand": "クラッシュ"},
  {"id": 33, "part": 5, "body": "ティッツァーノ", "stand": "トーキング・ヘッド"},
  {"id": 34, "part": 5, "body": "カルネ", "stand": "ノトーリアス・B・I・G"},
  {"id": 35, "part": 5, "body": "チョコラータ", "stand": "グリーン・ディ"},
  {"id": 36, "part": 5, "body": "セッコ", "stand": "オアシス"},
  {"id": 37, "part": 5, "body": "ディアボロ", "stand": "キング・クリムゾン"},
  {"id": 38, "part": 5, "body": "亀（ココ・ジャンボ）", "stand": "ミスター・プレジデント（T-レックス）"},
  {"id": 39, "part": 5, "body": "スコリッピ", "stand": "ローリング・ストーンズ"}
])
.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
  $routeProvider
  .when('/', {templateUrl: 'index.html', controller: 'JOJOController'})
  .when('/:characterId', {templateUrl: 'characterDetail.html', controller: 'CharacterController'})
  .otherwise({redirectTo: '/'})

#  TODO enable
#  $locationProvider.html5Mode(true)
])
