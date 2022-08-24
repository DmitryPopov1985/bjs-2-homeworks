class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        
    }

    fix() {
        this.state = this._state * 1.5;   
    }

    set state(condition) {
        if(condition < 0) {
            this._state = 0;
        } else if (condition > 100) {
            this._state = 100;
        } else {
            this._state = condition;
        }
    }
    get state() {
        return this._state;
    }
    

}

class Magazine extends PrintEditionItem {
    constructor() {
        super();
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);

        if (book === undefined) {
          return null;
        }
        return book;
      }
      
    giveBookByName(bookName) {
        let book = this.books.find(book => book.name === bookName);
        
        if (book === undefined) {
          return null;
        } else {
          this.books.splice(this.books.indexOf(book), 1);
          return book;
        }
      }
      
      
       
}


