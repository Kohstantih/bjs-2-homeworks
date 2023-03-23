/*Task 1*/

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix() {
        this.state = this.state * 1.5;
    };

    set state (value) {               
        if(value < 0) {
            return this._state = 0;
        } else if(value > 100) {
            return this._state = 100;
        };
        return this._state = value;        
    };

    get state () {
        return this._state;
    };    
};

class Magazine extends PrintEditionItem {
    constructor() {
        super();
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    };
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);        
        this.type = "novel";
    };
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);        
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);        
        this.type = "detective";
    };
};

/*Task 2*/

class Library{
    constructor(name) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book)
        };
    };

    findBookBy(type, value){
        const book = this.books.find(item => item[type] === value);
        if(book === undefined) {
            return null;
        };
        return book
    };

    giveBookByName(bookName) {
        const giveBook = this.findBookBy('name', bookName);
        this.books.splice(this.books.findIndex(item => item.name === bookName), 1);

        return giveBook;
    }; 
};

/*Task 3*/

class Student { 
    constructor(name) {
        this.name = name;    
        this.marks = {}; 
    };
    
    addMark (mark, subject) {
        if(mark < 2 || mark > 5){
            return;
        };

        if(this.marks[subject] === undefined) {
            this.marks[subject] = [];
        };

        return this.marks[subject].push(mark);
    };
    
    getAverageBySubject (subject) {
        if(this.marks[subject] === undefined) {
            return 0;
        };       

        return  this.marks[subject].reduce((acc,item, ind, arr) => acc + item / arr.length, 0);
    };

    getAverage () {
       return Object.keys(this.marks).reduce((acc, item, index, arr) => acc + this.getAverageBySubject(item) / arr.length, 0);
    }
  };
  