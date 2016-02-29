angular.module('JOJO', ['ngRoute', 'smart-table'])
.service('andSearchService', ANDSearchService)
.filter('andSearchFilter', ANDSearchFilter)
.controller('ANDSearchController', ANDSearchController)
.controller('AngularWayWithOptionsCtrl', AngularWayWithOptionsCtrl)
.controller 'paginationCtrl', [
  '$scope'
  (scope) ->
    scope.characters = [
      {"body": "東方定助", "stand": "ソフト&ウェット"},
      {"body": "笹目桜二郎", "stand": "ファン・ファン・ファン"},
      {"body": "東方大弥", "stand": "カリフォルニア・キング・ベッドちゃん"},
      {"body": "虹村京", "stand": "ボーン・ディス・ウェイ"},
      {"body": "広瀬康穂", "stand": "ペイズリー・パーク"},
      {"body": "吉良吉影", "stand": "名称不明（キラークイーン？）"},
      {"body": "カツアゲロード", "stand": "オータム・リーヴス"},
      {"body": "東方常秀", "stand": "ナット・キング・コール"},
      {"body": "東方つるぎ", "stand": "ペーパー・ムーン・キング"},
      {"body": "八木山夜露", "stand": "アイ・アム・ア・ロック"},
      {"body": "東方憲助", "stand": "キング・ナッシング"},
      {"body": "東方常敏", "stand": "名称不明"},
      {"body": "大年寺山愛唱", "stand": "ドゥービー・ワゥ"}
    ]
#    nameList = [
#      'Pierre'
#      'Pol'
#      'Jacques'
#      'Robert'
#      'Elisa'
#    ]
#    familyName = [
#      'Dupont'
#      'Germain'
#      'Delcourt'
#      'bjip'
#      'Menez'
#    ]
#
#    createRandomItem = ->
#      firstName = nameList[Math.floor(Math.random() * 4)]
#      lastName = familyName[Math.floor(Math.random() * 4)]
#      age = Math.floor(Math.random() * 100)
#      email = firstName + lastName + '@whatever.com'
#      balance = Math.random() * 3000
#      {
#        firstName: firstName
#        lastName: lastName
#        age: age
#        email: email
#        balance: balance
#      }
#
#    scope.itemsByPage = 15
#    scope.rowCollection = []
#    j = 0
#    while j < 200
#      scope.rowCollection.push createRandomItem()
#      j++
#    return
]
