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
keyValueTables.$inject = ["$templateCache"];;
angular.module('keyvaluetables.controller', ['keyvaluetable.directive'])
  .controller('keyValueTablesController', keyValueTablesController);
function keyValueTablesController () {
  var vm = this;
};
angular.module("key-value-tables.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("keyValueTables.view.html","<keyvaluetable ng-repeat=\"table in keyValueTables.tables\" title=\"table.title\" datatoparse=\"keyValueTables.datatoparse\" model=\"table.model\"  direction=\"table.direction\"></keyvaluetable>");}]);
//# sourceMappingURL=key-value-tables-directive.js.map
