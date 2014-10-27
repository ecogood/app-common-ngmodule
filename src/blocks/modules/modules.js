(function() {
  'use strict';

  angular.module('blocks.modules', []);
  angular.module('blocks.modules')
    .provider('urlConfig', urlConfig);

  /**
   * urlConfigProvider provides the functions to get and set rootUrls
   * of the templates of different reusable modules.
   *
   * - getTemplateRootUrl(modulaName)
   * - setTemplateRootUrl(modulaName, templateRootUrl)
   */
  function urlConfig() {
    /* jshint validthis:true */
    var self = this;

    self.templateRootUrls = {};

    self.$get = function() {
      return {
      };
    };

    self.getTemplateRootUrl = getTemplateRootUrl;
    self.setTemplateRootUrl = setTemplateRootUrl;

    /**
     * Returns the url root for the templates in the given module
     * @param modulaName
     */
    function getTemplateRootUrl(modulaName) {
      return self.templateRootUrls[modulaName];
    }

    /**
     * Returns the url root for the templates in the given module
     * @param modulaName
     * @param templateRootUrl -
     */
    function setTemplateRootUrl(modulaName, templateRootUrl) {
      self.templateRootUrls[modulaName] = templateRootUrl;
    }
  }
})();