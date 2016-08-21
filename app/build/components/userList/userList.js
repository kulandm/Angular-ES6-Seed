System.registerModule("com/root/components/userList/userList.js", [], function() {
  "use strict";
  var __moduleName = "com/root/components/userList/userList.js";
  var UserList = System.get("com/root/components/userList/userList.directive.js").default;
  var UserListController = System.get("com/root/components/userList/userList.controller.js").default;
  var UserListModel = System.get("com/root/components/userList/userList.model.js").default;
  angular.module(__moduleName, [UserListModel.name]).directive('userList', UserList.directiveFactory).controller('UserListController', UserListController);
  return {};
});
//# sourceURL=com/root/components/userList/userList.js
