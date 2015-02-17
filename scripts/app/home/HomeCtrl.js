angular.module('ssHome').controller('HomeCtrl', function($scope, ssYoutubeFeed) {

    ssYoutubeFeed.getRecent(3).then(function(videos) {
        $scope.videos = videos;
    });

    $scope.contacts = [
        {
            id: 1694010657,
            name: 'Securitas Protector',
            title: 'Alliance Exec.'
        },
        {
            id: 92988604,
            name: 'Aben Sokoln',
            title: '2nd in command'
        },
        {
            id: 92940230,
            name: 'Xeron Vann',
            title: 'Diplomacy Director'
        },
        {
            id: 92507729,
            name: 'Dex Thiesant',
            title: 'IT Director'
        }
    ];

    $scope.corporations = [
        {
            id: 98041262,
            name: 'Community against Justice'
        },
        {
            id: 851230678,
            name: 'The New Era'
        },
        {
            id: 555073675,
            name: 'The Green Cross'
        },
        {
            id: 692190945,
            name: 'Shinigami Miners'
        },
        {
            id: 98097817,
            name: 'Concordiat'
        },
        {
            id: 98189045,
            name: 'Pax Capital'
        }
    ];

});
