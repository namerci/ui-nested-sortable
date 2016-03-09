(function() {
    'use strict';

    angular.module('Demo', ['ui.nested-sortable'])
        .controller('DemoController', DemoController);

    function DemoController() {
        var vm = this;

        vm.data = [{
            label: 'Item 1',
            id: 1,
            children: []
        }, {
            label: 'Item 2',
            id: 2,
            children: []
        }, {
            label: 'Item 3',
            id: 3,
            children: []
        }, {
            label: 'Item 4',
            id: 4,
            children: []
        }, {
            label: 'Item 5',
            id: 5,
            children: []
        }];

        vm.sortableConfig = {
            forcePlaceholderSize: true,
            placeholder: 'placeholder',
            maxLevels: 20,
            helper:	'clone',
            opacity: 0.5,
            errorClass: 'sortable-error',
            handle: 'div',
            items: 'li',
            isTree: true,
            listType: 'ul',
            toleranceElement: '> div'
        };
    }

})();