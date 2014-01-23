// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName:"table",

  initialize: function() {
    this.$el.attr('class','SongQueueView');

    console.log(this.collection);
    this.render();
  },

  setCollection: function(collection){
    this.collection = collection;
    console.log('set collection called');
    render();
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        console.log(song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
