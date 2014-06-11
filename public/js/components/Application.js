/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global define:true */


define(['React', 'Fluxxor', 'jsx!components/Sidebar', 'jsx!components/Content'], function (React, Fluxxor, Sidebar, Content) {
  
  var FluxMixin = Fluxxor.FluxMixin(React),
      StoreWatchMixin = Fluxxor.StoreWatchMixin;


  return React.createClass({
    
    mixins: [FluxMixin, StoreWatchMixin("VideoStore")],

    getStateFromFlux: function() {
      var flux = this.getFlux();
      return flux.store("VideoStore").getState();
    },

    render: function() {
      return (
        <div>
          <Sidebar tags={this.state.tags} selectedTags={this.state.selectedTags} />
          <Content videos={this.state.videos} />
        </div>
      );
    }
  });

});