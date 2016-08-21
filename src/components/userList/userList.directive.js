'use strict';
class UserList {
	constructor(userListModel) {
		this.templateUrl = "build/components/userList/userList.html";
		console.log(userListModel.fetch());
		this.userList = userListModel.fetch();
	}
	link(scope, elemet) {
		scope.userList = this.userList;
		scope.openDetail = function (userId) {
			console.log(userId);
		}

	}
	static directiveFactory(userListModel) {
		//UserList.instance = new UserList(userListModel);
		//return UserList.instance;
		return new UserList(userListModel);
	}
}
UserList.$inject = ['userListModel'];
export default UserList;