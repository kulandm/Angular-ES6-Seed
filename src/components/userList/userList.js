'use strict';

import UserList from './userList.directive.js';
import UserListController from './userList.controller.js';
import UserListModel from './userList.model.js';

angular.module(__moduleName, [
	UserListModel.name
])
.directive('userList', UserList.directiveFactory)
.controller('UserListController', UserListController)
/*.run([
	'UserListModel',
	function () {}
]);*/