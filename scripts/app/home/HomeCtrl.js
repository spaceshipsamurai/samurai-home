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
            id: 92940230,
            name: 'Xeron Vann',
            title: 'Diplomacy Director'
        },
        {
            id: 335025985,
            name: 'Ganja Lotus',
            title: 'Military Director'
        },
		{
            id: 93670403,
            name: 'Gav Davies',
            title: 'Co. Military Director'
        },
        {
            id: 618402478,
            name: 'Reuben Blackfeather',
            title: 'IT Director'
        }
    ];

    $scope.corporations = [
        {
            id: 98007439,
            name: 'Ethereal Vengeance'
        },
        {
            id: 98019237,
            name: 'Gallente Volunteer Defense Forces'
        },
        {
            id: 98161636,
            name: 'Physics Says No'
        },
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
			id: 98020221,
			name: Shattered Void
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
            id: 98285822,
            name: 'Anime Masters'
        },
        {
            id: 98124232,
            name: 'Caveat Emptor Technologies LP'
        },
        {
            id: 98309567,
            name: 'Aerospace Fencing'
        },
        {
            id: 98197104,
            name: 'Concordiat Industries'
        },
        {
            id: 98189045,
            name: 'Pax Capital'
        },
        {
            id: 98319878,
            name: 'Only Fools and Horses'
        },
        {
            id: 98320400,
            name: 'Discharging Demeanor Solutions'
        },
        {
            id: 98339677,
            name: 'The Contract Bureau'
        }
    ];

});