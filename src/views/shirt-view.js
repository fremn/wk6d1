(function () {

  var shirtTemplateHtml = $('#templates .shirt').html();
  var shirtTemplate = _.template(shirtTemplateHtml);

  window.ShirtView = Backbone.View.extend({
    className: 'shirt',
    render: function () {
      // TODO: Complete the following line
      var newShirtHtml = shirtTemplate( this.model.toJSON() );
      $(this.el).html(newShirtHtml);
    },
    initialize : function (){
      this.listenTo(this.model, 'change:small change:medium change:large', this.render);
    }
  });

})();
