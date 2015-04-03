//The library could also be built as a prototype if needed.
//This version requires that each shelf has a unique name which is used as the key to identify each shelf.
//Add and remove book methods are kept with individual shelf. Thus calling these methods can only affect books within the shelf.
//Author and title are used in concatenation as the identifier for a book, thus a misspelling or case change will change to a new book. I implemented in this way reasoning searching will be faster if author and title information is kept in key. .ToUpperCases() method could be used to search for the combination if wanted, in order to loosen the stringency. 
//The same book can be added multiple times as copies to a shelf if wanted. The book is only complete removed from the shelf when copy number is depleted to 0.

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
library.removeShelf('Michael');