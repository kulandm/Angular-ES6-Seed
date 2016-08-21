System.registerModule("com/root/components/userList/userList.directive.js", [], function() {
  "use strict";
  var __moduleName = "com/root/components/userList/userList.directive.js";
  var UserList = function() {
    function UserList(userListModel) {
      this.templateUrl = "build/components/userList/userList.html";
      console.log(userListModel.fetch());
      this.userList = userListModel.fetch();
    }
    return ($traceurRuntime.createClass)(UserList, {link: function(scope, elemet) {
        scope.userList = this.userList;
        scope.openDetail = function(userId) {
          console.log(userId);
        };
      }}, {directiveFactory: function(userListModel) {
        return new UserList(userListModel);
      }});
  }();
  UserList.$inject = ['userListModel'];
  var $__default = UserList;
  return {get default() {
      return $__default;
    }};
});
//# sourceURL=com/root/components/userList/userList.directive.js
