'use strict';

angular.module('rootModule.version', [
  'rootModule.version.interpolate-filter',
  'rootModule.version.version-directive'
])

.value('version', '0.1');
