/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})

.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}])

.directive("popoverHtmlUnsafe", ["$tooltip", function($tooltip) {
    return $tooltip( 'popoverHtmlUnsafe', 'popover', 'click' );
}]);

angular.module("template/popover/popover-html-unsafe.html", [])
    .run(["$templateCache", function($templateCache) {
        templateCache.put(
            "template/popover/popover-html-unsafe.html",
            '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\
                <div class="arrow"></div>\
                \
                <div class="popover-inner">\
                    <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\
                    <div class="popover-content" bind-html-unsafe="content"></div>\
                </div>\
            </div>');
    }]);
