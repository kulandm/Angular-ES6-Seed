'use strict';

System.get('com/root/components/view1/view1.js');
System.get('com/root/components/view2/view2.js');
System.get('com/root/components/userList/userList.js');

// Declare app level module which depends on views, and components
var rootModule = angular.module('rootModule', [
  'ui.router',
  'ngRoute',
  'com/root/components/view1/view1.js',
  'com/root/components/view2/view2.js',
  'com/root/components/userList/userList.js',
  'rootModule.version'
]).
config([
	'$locationProvider', 
	'$routeProvider', 
	'$stateProvider',
	function($locationProvider, $routeProvider, $stateProvider) {
		//$locationProvider.html5Mode(true);

		$routeProvider.otherwise({redirectTo: '/view1'});

		$stateProvider

		/* default */
		/*.state('/', {
			url: '/',
			templateUrl: 'build/components/view1/view1.html',
			controller: 'View1Ctrl'
		})*/

		/* view1 */
		.state('view1', {
			url: '/view1',
			templateUrl: 'build/components/view1/view1.html',
			controller: 'View1Ctrl'
		})

		/* view2 */
		.state('view2', {
			url: '/view234',
			templateUrl: 'build/components/view2/view2.html',
			controller: 'View2Controller as View2Ctrl'
		});
	}
]);
