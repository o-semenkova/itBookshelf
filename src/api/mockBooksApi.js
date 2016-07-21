/**
 * Created by Alexander Pletnev
 */

import delay from './delay';

const books = [
  {
    "id": "889ef4e5-5952-41fd-aa6d-68e3880168a8",
    "name": "Design Patterns: Elements of Reusable Object-Oriented Software",
    "categories": ["Design patterns", "software engineering", "object-oriented programming"],
    "authors": ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
    "year": "10/21/1994",
    "publisher": "Addison-Wesley",
    "summary": "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
    "lang": "en",
    "isbn": "0-201-63361-2",
    "series": "",
    "genres": ["Patterns", "Computer Science"],
    "keywords": ["Object-Oriented", "Programming", "Computer Software", "Reusability"],
    "pages": 395,
    "cover": "/path/to/img.png",
    "rating": {
      "internal": 0,
      "livelib": 4,
      "goodreads": 4.14
    },
    "reviews": [""],
    "quotes": [""],
    "notes": [""],
    "history": [""],
    "status": "in progress",
    "currentOwner": "userId",
    "inQueue": ["userId1", "userId2"],
    "ownedDate": "01/01/2010",
    "office": "Odessa",
    "pending": false,
    "likes": [""],
    "dislikes": [""]
  }
];

const generateId = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

class BooksApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          book.id = generateId();
          books.push(book);
        }

        resolve(Object.assign({}, book));
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          book.id == bookId;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BooksApi;
