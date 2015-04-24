var <%= name %> = <%= name %> || angular.module('<%= name %>', []);

(function () {
	'use strict';
	<%= name %>
		.service('<%= name %>Service', [function(){
			return {

			};
		}]);
})(); 