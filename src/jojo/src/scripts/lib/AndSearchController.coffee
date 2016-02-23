ANDSearchController.$inject = ['andSearchService']
class ANDSearchController
  #  @$inject: ['andSearchService']
  constructor: (@andSearchService) ->
    @users = @andSearchService.getData()
