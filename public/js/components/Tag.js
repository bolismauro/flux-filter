/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor'], function (React, Fluxxor) {

  var FluxChildMixin = Fluxxor.FluxChildMixin(React)
    ;

  return React.createClass({
    mixins: [FluxChildMixin],

    propTypes: {
      name: React.PropTypes.string,
      selected: React.PropTypes.bool
    },

    render: function() {

      var style = {
        "background-color": this.props.selected ? "#F00" : "#FFF",
        "color": this.props.selected ? "#FFF" : "#000",
      };

      return (
        <p onClick={this.onClick} style={style}>
          { this.props.name }
        </p>
      );
    },


    onClick: function() {
      console.log(this.props.selected);
      if (this.props.selected) {
        this.getFlux().actions.removeTag(this.props.name);

      } else {
        this.getFlux().actions.addTag(this.props.name);
        
      }
    }
  });

});