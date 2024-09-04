class Book{
    constructor(id, name, year, numberOfBook){
        this._id = id;
        this._name = name;
        this._year = year;
        this._numberOfBook = numberOfBook;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get numberOfBook() {
        return this._numberOfBook;
    }

    set numberOfBook(value) {
        this._numberOfBook = value;
    }
}