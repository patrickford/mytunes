// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function(){
    this.$el.attr('class','SongQueueEntryView');
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
  	'click': function() {
      this.model.dequeue();
  	}
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  // your code here!
});
