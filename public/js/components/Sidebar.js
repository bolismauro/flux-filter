/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor', 'jsx!components/Tag'], function (React, Fluxxor, Tag) {

  var FluxChildMixin = Fluxxor.FluxChildMixin(React)
    ;

  return React.createClass({
    mixins: [FluxChildMixin],

    propTypes: {
      tags: React.PropTypes.array.isRequired,
      selectedTags: React.PropTypes.array.isRequired
    },

    render: function() {
      var that = this;
      return (
        <div>
          {this.props.tags.map(function(tag, i) {
            var selected = that.props.selectedTags.indexOf(tag) > -1;
            return <li key={i}><Tag name={tag} selected={selected} /></li>;
          })}
        </div>
      )
    }
  });

});