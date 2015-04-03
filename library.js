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
        if (this.numberOfShelves > 0 && this.shelves.hasOwnProperty(shelfName)) {
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
