'use strict';

describe('<%= name %>', function () {
	var <%= name %>Service,
		<%= name %>Ctrl,
		scope;

	beforeEach(<%= name %>);
	beforeEach(inject(function(_<%= name %>Service_, $controller) {
		scope = {};
		<%= name %>Service = _<%= name %>Service_;
		<%= name %>Ctrl = $controller('<%= name %>', {$scope: scope)
	}));

	describe('<%= name %> should work', function () {
		it('must have at least one test', function () {
			assert(false, 'I was too lazy to write any tests. Shame on me.');
		});
	});
});