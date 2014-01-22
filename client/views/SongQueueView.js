// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.$el.attr('class','SongQueueView');
  },

  render: function() {
    return this.$el;
  }

});
