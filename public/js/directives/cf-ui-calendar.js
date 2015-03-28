app
    .directive('cfUiCalendar', function () {
       
        return {
            restrict: 'A',
            scope: {
                title: '=',
                showDateSelectors:'=',
                showList:'=',
                view: '=',
                showClass:'='
            },
            templateUrl: 'tpl/blocks/calendar.html'

        };
    });