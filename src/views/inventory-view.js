(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // TODO: Write a for loop to iterate through window.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in window.shirts. Use .set(???) for this.
      var shirts = this.options.shirts;
      for (var i=0; i<(shirts).length; i++) {
        
        // var newSmall = shirts[i].get('small') + 1
        var newCount = shirts[i].get(type) + 1

        // shirts[i].set( {'small': newSmall} )
        shirts[i].set(type, newCount);

        // the above two lines do what all those if statements do

        // if (type === 'small') {
        //   var newSmall = shirts[i].get('small') + 1
        //   shirts[i].set( {'small': newSmall} )
        //   console.log(shirts[i].get('small'))
        // };
        // if (type === 'medium') {
        //   var newMedium = shirts[i].get('medium') + 1
        //   shirts[i].set( {'medium': newMedium} )
        //   console.log(shirts[i].get('medium'))
        // };
        // if (type === 'large') {
        //   var newLarge = shirts[i].get('large') + 1
        //   shirts[i].set( {'large': newLarge} )
        //   console.log(shirts[i].get('large'))
        // };

      };
    }
  });

})();
