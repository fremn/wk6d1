
var bookOne = new Book({title : "Hobbit", author : "JR Tolken", price : "100"}) ;
var bookTwo = new Book({title : "LOTR", author : "JR Tolken", price : "99"}) ;

var books = [bookOne, bookTwo];

// Create a view for each book and add that view's element to the page.
_.each(books, function (book) {
  var view = new BookView({ model: book });
  view.render();
  $('#books').append(view.el);
});
