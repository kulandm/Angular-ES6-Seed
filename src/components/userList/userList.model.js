'use strict';

class UserListModel {
	constructor() {
		this.userList = "smth";

	}

	fetch() {
		console.log('loading');
		let obj = [
			{id: 1, name: 'Muthu'},
			{id: 2, name: 'Laxshimi'},
			{id: 3, name: 'Kumar'}
		]
		return obj;
	}

	static modelFactory() {
		return new UserListModel();
	}
}

export default angular.module(__moduleName, []).factory('userListModel', [
	UserListModel.modelFactory
]);