angular.module('keyvaluetables.directive', ['keyvaluetables.controller','key-value-tables.template'])
  .directive('keyvaluetables', keyValueTables);

function keyValueTables($templateCache) {

  var directive = {
    restrict: 'E',
    scope:{
      datatoparse: '=',
      tables: '='
    },
    controller:'keyValueTablesController',
    controllerAs:'keyValueTables',
    bindToController: true,
    template: $templateCache.get('keyValueTables.view.html')
  };
  
  return directive;
}