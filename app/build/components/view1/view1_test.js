System.registerModule("com/root/components/view1/view1_test.js", [], function() {
  "use strict";
  var __moduleName = "com/root/components/view1/view1_test.js";
  describe('myApp.view1 module', function() {
    beforeEach(module('myApp.view1'));
    describe('view1 controller', function() {
      it('should ....', inject(function($controller) {
        var view1Ctrl = $controller('View1Ctrl');
        expect(view1Ctrl).toBeDefined();
      }));
    });
  });
  return {};
});
//# sourceURL=com/root/components/view1/view1_test.js
