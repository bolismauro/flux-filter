/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor', 'jsx!components/Video'], function (React, Fluxxor, Video) {

  var FluxChildMixin = Fluxxor.FluxChildMixin(React)
    ;

  return React.createClass({
    mixins: [FluxChildMixin],

    propTypes: {
      videos: React.PropTypes.array.isRequired
    },

    render: function() {
      return (
        <div>
          {this.props.videos.map(function(video, i) {
            return <Video key={i} name={video.name} url={video.url} thumb={video.thumb}  />
          })}
        </div>
      )
    }
  });

});