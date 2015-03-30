//The library could also be built as a prototype if needed.
//This version requires that each shelf has a unique name which is used as the key to identify each shelf.
//Add and remove book methods are kept with individual shelf. Thus calling these methods can only affect books within the shelf.
//Author and title are used in concatenation as the identifier for a book, thus a misspelling or case change will change to a new book. I implemented in this way reasoning searching will be faster if author and title information is kept in key. .ToUpperCases() method could be used to search for the combination if wanted, in order to loosen the stringency. 
//The same book can be added multiple times as copies to a shelf if wanted. The book is only complete removed from the shelf when copy number is depleted to 0.

var library = {
    numberOfShelves: 0,
    shelves:{},
    addShelf: function(shelfName) {
        this.numberOfShelves++;
        this.shelves[shelfName] = new Shelf(shelfName);
    },
    removeShelf: function(shelfName){
        if (this.numberOfShelves > 0 && shelfName in this.shelves) {
            var temp = this.shelves[shelfName];
            delete this.shelves[shelfName];
            this.numberOfShelves--;
            return temp;
        } else if(this.numberOfShelves === 0){
            alert('This library is empty. There is no shelf to remove.');
        } else {
            alert('The shelf name was not found!');
        }
    }
};

var Shelf = function(name) {
    this.numberOfBooks = 0;
    this.name = name;
    this.books = {};        
};


Shelf.prototype = {
    addBook: function(author, title) {
        var combination = author + title;
        this.numberOfBooks++;
        if (this.books.hasOwnProperty(combination) === false){
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
var Book = function(author, title) {
    this.copyNum = 1;
    this.author = author;
    this.title = title;
};

//Testig code
library.addShelf('Meng');
library.addShelf('Livia');
console.log(library.shelves.Meng);
library.shelves.Meng.addBook('MyAuthor', 'ABC');
library.shelves.Meng.addBook('AnotherAuthor', 'Hoho');
console.log(library.shelves.Meng);
library.shelves.Livia.addBook('Louise', 'Alice in WonderLand');
library.shelves.Livia.addBook('Louise', 'Alice in WonderLand');
console.log(library.shelves.Meng.books);
console.log(library.shelves.Livia.books);
library.shelves.Meng.removeBook('MyAuthor','KBC');
console.log(library.shelves.Meng.books);
console.log(library.shelves.Meng);
library.removeShelf('Meng');
console.log(library.shelves);
library.shelves.Livia.removeBook('Louise', 'Alice in WonderLand');
console.log(library.shelves.Livia.books);
library.shelves.Livia.removeBook('Louise', 'Alice in WonderLand');
library.shelves.Livia.removeBook('Louise', 'Alice in WonderLand');
console.log(library.shelves.Livia);

