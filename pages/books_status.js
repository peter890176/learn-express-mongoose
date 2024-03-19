let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = async () => {
  let booksStatus = await BookInstance.find()
    .populate('book')
    .exec();
    return booksStatus.map(bookInstance => `Title: ${bookInstance.book.title}, Status: ${bookInstance.status}`);
};
