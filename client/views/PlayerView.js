// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.attr('class','PlayerView');
    this.$el.on('ended', this.ended.bind(this));
  },

  setSong: function(song){
    this.model = song;
    if (!this.model) {
      this.el.pause();
    };
    this.render();
  },

  ended: function() {
    // this.model.ended();
    this.model.ended();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
