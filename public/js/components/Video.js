/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor'], function (React, Fluxxor) {

  var FluxChildMixin = Fluxxor.FluxChildMixin(React)
    ;

  return React.createClass({
    mixins: [FluxChildMixin],

    propTypes: {
      name: React.PropTypes.string,
      url: React.PropTypes.string,
      thumb: React.PropTypes.string,
    },

    render: function() {

      var style = {
        width: '200px',
        height: '300px',
        padding: '20px',
        display: 'inline-block'
      };

      var imageStyle = {
        width: '200px',
        height: '200px'
      };



      return (
        <div style={style}>
          <a target="_blank" href={this.props.url}>
            <img  style={imageStyle} src={this.props.thumb} />
          </a>
          <h3> {this.props.name} </h3>
        </div>
      )
    }
  });

});