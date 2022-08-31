(function () {
    angular.module('MenuApp')
    .component('categoires', {
      templateUrl: 'src/shoppinglist/templates/categories.html',
      bindings: {
        categoriesList: '<'
      }
    })
  })();