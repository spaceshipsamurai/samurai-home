angular.module('ssHome').factory('ssYoutubeFeed', function($http, $q) {
    return {
        getRecent: function(count) {

            var dfd = $q.defer();
            var feed = 'http://gdata.youtube.com/feeds/api/videos?author=SpaceshipSamurai&v=2&alt=json&max-results='+ count +'&orderby=published';
            $http.get(feed).then(function(response){

                var videos = new Array();

                if(response.data) {
                    var entries = response.data.feed.entry;

                    entries.forEach(function(entry) {
                        videos.push({
                            id: entry['media$group']['yt$videoid']['$t'],
                            title: entry['title']['$t'],
                            desc: entry['media$group']['media$description']['$t'],
                            thumbnail: entry['media$group']['media$thumbnail'][0]['url'],
                            published: new Date(entry['published']['$t']).toLocaleDateString("en-US")
                        })
                    });
                }

                console.log(videos)
                dfd.resolve(videos);
            });


            return dfd.promise;
        }
    }
});