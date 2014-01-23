// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
    this.on('add', this.enqueue, this); //
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.ended, this);
  },

  enqueue: function(song){
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);
    if (this.length === 0){
      this.trigger('stop');
    }
  },

  ended: function(){
    this.shift();
    if (this.length>= 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if(this.length >= 1) {
      this.playFirst();
    }
  }

});
