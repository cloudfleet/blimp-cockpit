'use strict';

/**
 * @ngdoc constant
 * @name constant.JQ_CONFIG
 * @description
 * constant of the JQ_CONFIG
 */
angular.module('blimpCockpitApp')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      //sparkline:      [   '../bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      sparkline:      [   'http://omnipotent.net/jquery.sparkline/2.1.2/jquery.sparkline.min.js'],

      screenfull:     [   '../bower_components/screenfull/dist/screenfull.min.js'],
      chosen:         [   '../bower_components/chosen/chosen.jquery.min.js',
                          '../bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      wysiwyg:        [   '../bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../bower_components/datatables/media/js/jquery.dataTables.min.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      footable:       [   '../bower_components/footable/dist/footable.all.min.js',
                          '../bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   '../bower_components/moment/moment.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.min.js',
                          '../bower_components/fullcalendar/dist/fullcalendar.css'],
                          //'styles/fullcalendar.theme.css'],
      daterangepicker:[   '../bower_components/moment/moment.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          '../bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css']
    }
  );
