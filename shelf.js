//The library could also be built as a prototype if needed.
//This version requires that each shelf has a unique name which is used as the key to identify each shelf.
//Add and remove book methods are kept with individual shelf. Thus calling these methods can only affect books within the shelf.
//Author and title are used in concatenation as the identifier for a book, thus a misspelling or case change will change to a new book. I implemented in this way reasoning searching will be faster if author and title information is kept in key. .ToUpperCases() method could be used to search for the combination if wanted, in order to loosen the stringency. 
//The same book can be added multiple times as copies to a shelf if wanted. The book is only complete removed from the shelf when copy number is depleted to 0.

var Shelf = function(name) {
    this.numberOfBooks = 0;
    this.name = name;
    this.books = {};        
};


Shelf.prototype = {
    addBook: function(author, title) {
        var combination = author + title;
        this.numberOfBooks++;
        if (!this.books.hasOwnProperty(combination)){
            this.books[combination] = new Book(author, title);
            } else {
            this.books[combination].copyNum++;
            }
    },
    removeBook: function(author, title) {
        var combination = author + title;
        if (this.numberOfBooks > 0 && this.books.hasOwnProperty(combination)) {
            this.books[combination].copyNum--;
            this.numberOfBooks--;
            if (this.books[combination].copyNum === 0){
                var temp = this.books[combination];
                delete this.books[combination];
                return temp;
            }
        } else if(this.numberOfBooks === 0){
            alert('This shelf is empty. There is no book to remove.');
        } else {
            alert('Author and title combination not found!');
        }
    }
};
