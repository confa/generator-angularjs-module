'use strict';

angular.module('<%= name %>')
	.directive('<%= name %>', function <%= camelName%>Directive() {
		return {
			scope: {},
			restrict: 'E',
			replace: true,
			controller: '<%= camelName%>Ctrl',
			templateUrl: '<%= templatesDir %>/<%= name %>.html'
		};
	});
