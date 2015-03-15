////3. Model a library using objects. *  
////A library contains shelves. Shelves contain books. Books have an author and a title. Give the library methods to add and remove a shelf. A shelf should have methods to add/remove a book. Use a modular approach so that each type of object is contained in its own file. Add any functionality you think appropriate.
//var library = {
//    content:[],
//    addShelf: function(shelfName) {
//        this.content.push(new Shelf(shelfName));
//    } 
//    removeShelf: function(shelfName) {
//        for (var i = 0; i < this.content.length; i++){
//            if (this.content[i].name === shelfName) {
//                var temp = this.content[i];
//                temp.shelfName = shelfName;
//                delete this.content[i];
//                return temp;
//            }
//        }
//    }
//};
//
//var Shelf = function(name) {
//    this.name: name;
//    this.content: [];        
//};
//
//Shelf.prototype = {
//    addABook: function(author, title) {
//        this.content.push(new Book(author, title));
//    },
//    removeABook: function(author, title) {
//        for (var i = 0; i < this.content.length; i++){
//            if (this.content[i].author === author and this.content[i].title === title) {
//                var temp = this.content[i];
//                delete this.content[i];
//                return temp;
//            }
//        }
//    }
//}
//
//var Book = function(author, title) {
//    this.author = author;
//    this.title = title;
//};

//-------------------------------------
    //faster searching when deleting
    
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
        } else if (!this.shelves.hasOwnProperty(shelfName)){
            alert('The shelf name was not found!');
        }
    }
};

var Shelf = function(name) {
    this.numberOfBooks = 0;
    this.name = name;
    this.books = {};        
};

//Shelf.prototype = {
//    addBook: function(author, title) {
//        this.numberOfBooks++;
//        this.books[author + title] = new Book(author, title);
//    },
//    removeBook: function(author, title) {
//        if (this.numberOfBooks > 0 && (author+title) in this.books) {
//            var temp = this.books[author + title];
//            delete this.books[author + title];
//            this.numberOfBooks--;
//            return temp;
//        } else if(this.numberOfBooks === 0){
//            alert('This shelf is empty. There is no book to remove.');
//        } else if (!this.books.hasOwnProperty(author+title)){
//            alert('Author and title combination not found!');
//        }
//    }
//};

//Shelf.prototype = {
//    addBook: function(author, title) {
//        this.numberOfBooks++;
//        this.books['book' + this.numberOfBooks] = new Book(author, title);
//    },
//    removeBook: function(author, title) {
//        if (this.numberOfBooks > 0) {
//            for (var key in this.books) {
//                if (this.books[key].author.toUpperCase() === author.toUpperCase() && 
//                    this.books[key].title.toUpperCase() === title.toUpperCase()) 
//                {
//                    var temp = this.books[key];
//                    delete this.books[key];
//                    this.numberOfBooks--;
//                    return temp;
//                }
//            }
//        } else if(this.numberOfBooks === 0){
//            alert('This shelf is empty. There is no book to remove.');
//        } else {
//            alert('Author and title combination not found!');
//        }
//    }
//};


//The library could also be built as a prototype if needed.
//This version requires that each shelf has a unique name which is used as the key to identify each shelf.
//Add and remove book methods are kept with individual shelf. Thus calling these methods can only affect books within the shelf.
//Author and title are used in concatenation as the identifier for a book, thus a misspelling or case change will change to a new book. I implemented in this way reasoning searching will be faster if author and title information is kept in key. .ToUpperCases() method could be used to search for the combination if wanted, in order to loosen the stringency. 
//The same book can be added multiple times as copies to a shelf if wanted. The book is only complete removed from the shelf when copy number is depleted to 0.
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

