/*jshint eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, browser:true, jquery:true, devel:true */
/*global requirejs:true */
/** @jsx React.DOM */

requirejs.config({
  baseUrl: 'public/js'
, paths: {
    React: 'vendor/react/react'
  , Fluxxor: 'vendor/fluxxor/build/fluxxor'
  , reqwest: 'vendor/reqwest/reqwest'
  , JSXTransformer: 'vendor/JSXTransformer'
  , text: 'vendor/requirejs-text/text'
  , jsx: 'vendor/requirejs-jsx/jsx'
  }
});



requirejs(['React', 'Fluxxor', 'stores/video', 'actions/video', 'jsx!components/Application'], function (React, Fluxxor, VideoStore, actions, Application) {

  // instance stores
  var stores = {
    VideoStore: new VideoStore()
  };

  // create the flux!
  var flux = new Fluxxor.Flux(stores, actions);
  React.renderComponent(new Application({flux: flux}), document.getElementById("app"));
});
