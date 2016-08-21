System.registerModule("com/root/components/userList/userList.model.js", [], function() {
  "use strict";
  var __moduleName = "com/root/components/userList/userList.model.js";
  var UserListModel = function() {
    function UserListModel() {
      this.userList = "smth";
    }
    return ($traceurRuntime.createClass)(UserListModel, {fetch: function() {
        console.log('loading');
        var obj = [{
          id: 1,
          name: 'Muthu'
        }, {
          id: 2,
          name: 'Laxshimi'
        }, {
          id: 3,
          name: 'Kumar'
        }];
        return obj;
      }}, {modelFactory: function() {
        return new UserListModel();
      }});
  }();
  var $__default = angular.module(__moduleName, []).factory('userListModel', [UserListModel.modelFactory]);
  return {get default() {
      return $__default;
    }};
});
//# sourceURL=com/root/components/userList/userList.model.js
