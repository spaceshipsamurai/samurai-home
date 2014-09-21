angular.module('ssHome').controller('HomeCtrl', function($scope, ssYoutubeFeed) {

    ssYoutubeFeed.getRecent(3).then(function(videos) {
        $scope.videos = videos;
    });

    $scope.contacts = [
        {
            id: 1694010657,
            name: 'Securitas Protector',
            title: 'Alliance CEO'
        },
        {
            id: 92940230,
            name: 'Xeron Vann',
            title: 'Alliance Diplomat Director'
        },
        {
            id: 93670403,
            name: 'Gav Davies',
            title: 'Military Director'
        },
        {
            id: 335025985,
            name: 'Ganja Lotus',
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
            id: 98041262,
            name: 'Community against Justice'
        },
        {
            id: 252518756,
            name: 'The Inf1dels'
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
            id: 1201027318,
            name: 'Lai Dai Solutions'
        },
        {
            id: 1747096465,
            name: 'Flailing Manmeat'
        },
        {
            id: 98161636,
            name: 'Physics Says No'
        },
        {
            id: 692190945,
            name: 'Shinigami Miners'
        },
        {
            id: 98253652,
            name: 'Pony Up Freight Ltd.'
        },
        {
            id: 98097817,
            name: 'Concordiat'
        },
        {
            id: 98272369,
            name: 'Truly Transdimensional'
        },
        {
            id: 98285822,
            name: 'Anime Masters'
        },
        {
            id: 98287113,
            name: 'Space - The Final Frontier'
        },
        {
            id: 98112705,
            name: 'Unsung Heroes'
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
            id: 98314963,
            name: 'Cool Kids Club'
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
            id: 98324550,
            name: 'Borealis Academy'
        },
        {
            id: 98339677,
            name: 'The Contract Bureau'
        }
    ];

});