(function () {
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
      controller: 'ItemsController as items',
      bindings: {
        itemsList: '<'
      }
    })
  })();