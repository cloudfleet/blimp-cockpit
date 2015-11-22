'use strict';

/**
 * @ngdoc function
 * @name blimpCockpitApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the blimpCockpitApp
 */
angular.module('blimpCockpitApp')
  .controller('DashboardCtrl',
  [ '$scope', 'mailpileApi', 'mock', 'todoStorage',
    function ($scope, mailpileApi, mock, todoStorage) {
      console.log('Creating cockpit scope');
      mailpileApi.getInboxCount().then(function(count){
        $scope.inboxCount = count;
      });

      mock.allMails().then(
        function(data) {
          $scope.last_mails = data;
        }
      );

      $scope.todos = todoStorage.get();

      // MOCKUP
      setTimeout(function () {
        $scope.last_mails.unshift(    {
              "id": 10,
              "subject": "Cat Pictures",
              "from": "christoph@cloudfleet.io",
              "avatar": "images/a10.jpg",
              "to":[
                {"name":"Mogen", "email":"menazine@hotmail.com"}
              ],
              "content":"Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper Neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat.",
              "attach":[
                {"name":"c1.jpg", "url":"images/c1.jpg"},
                {"name":"c3.jpg", "url":"images/c3.jpg"}
              ],
              "date":"12:20 7/23/2014",
              "label":"cloudfleet",
              "fold":"important",
              "unread": true
            });
        $scope.$apply();
      }, 5000);

      $scope.mailStyle = function(mail)
      {
        return {'font-weight': mail.unread ? 'bold' : 'normal'};
      };

      $scope.countUnread = function() {
        return 0 || $scope.last_mails && $scope.last_mails.filter((item) => {return item.unread;}).length;
      }

      // END MOCKUP
    }]);
