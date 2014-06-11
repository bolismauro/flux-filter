/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['Fluxxor', 'constants', 'reqwest'], function (Fluxxor, constants, reqwest) {
  
  var VideoStore = Fluxxor.createStore({
    
    initialize: function() {
      var that = this;
      
      this.videos = [];
      this.tags = [];
      this.selectedTags = [];


      reqwest({
        url: 'http://gdata.youtube.com/feeds/api/videos?q=apple&alt=json',
        type: 'jsonp'
        //url: 'feed.json',
        //type: 'json'
      }, function (res) {
        var entries = res.feed.entry;

        entries.forEach(function (entry) {
          var video = {
            id: entry.id.$t,
            name: entry.title.$t,
            url: entry.link[0].href,
            thumb: entry.media$group.media$thumbnail[0].url,
            tags: []
          };

          entry.category.forEach(function (cat) {
            if (!cat.label) return;

            if(that.tags.indexOf(cat.label) === -1) {
              that.tags.push(cat.label);
            }

            video.tags.push(cat.label);
          });

          that.videos.push(video);
          
        });

        that.emit("change");
      });


      this.bindActions(
        constants.ADD_TAG, this.onAddTag
      , constants.REMOVE_TAG, this.onRemoveTag
      );

    },

    onAddTag: function(payload) {
      this.selectedTags.push(payload.tag);
      this.emit("change");
    },

    onRemoveTag: function(payload) {
      var tag = payload.tag;
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
      this.emit("change");
    },

    getState: function () {

      var videos = []
        , that = this;

      if (this.selectedTags.length === 0) {
        videos = this.videos;
      
      } else {
        this.videos.forEach(function (video) {
          var addVideo = true;
          video.tags.forEach(function (tag) {
            if (that.selectedTags.indexOf(tag) !== -1) {
              addVideo = false;
            }
          });

          if (addVideo) {
            videos.push(video);
          }
        });
      }

      return {
        videos: videos,
        tags: this.tags,
        selectedTags: this.selectedTags
      };
    }
  });


  return VideoStore;
});