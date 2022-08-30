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
        if (condition < 0) {
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

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
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
        if (book.state > 30) {
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


class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }


    setSubject(subjectName) {
        this.subject = subjectName;
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            throw new Error('Ошибка, оценка должна быть числом от 1 до 5');
        }
        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [mark];
        } else {
            this.marks[subjectName].push(mark);
        }

    }

    addMarks(subjectName, ...marks) {

        if (this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [marks];
        } else {
            this.marks[subjectName].push(...marks);
        }

    }
    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined) {
            throw new Error('Несуществующий предмет');
        }

        const sum = this.marks[subjectName].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subjectName].length;
    }

    getAverage() {

        if (this.marks === {}) {
            return 0;
        }

        let averageMarkBySubject;
        let arrOfAverageMarks = [];
        for (let subjectName in this.marks) {
            averageMarkBySubject = this.marks[subjectName].reduce((acc, mark, idx, arrOfMarks) => {
                if (idx === arrOfMarks.length - 1) {
                    return (acc + mark) / arrOfMarks.length
                } else {
                    return acc + mark;
                }
            })
            arrOfAverageMarks.push(averageMarkBySubject);
        }

        return arrOfAverageMarks.reduce((acc, mark, idx, arr) => {
            if (idx === arr.length - 1) {
                return (acc + mark) / arr.length;
            } else {
                return acc + mark;
            }
        })
    }
    exclude(reason) {

        delete this.subject;
        delete this.marks;
        this.excluded = reason;

    }
}


