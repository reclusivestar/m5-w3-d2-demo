const Book = require("../models/book.model");

// Get all books
exports.getAllBooks = (req, res) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving books", error: err.message })
    );
};

// Get a single book by ID
// Get a single book by custom ID
exports.getBookById = (req, res) => {
  const id = req.params.id;
  Book.findById(id)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(book);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error retrieving book", error: err.message })
    );
};



// Create a new book
exports.createBook = (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  book
    .save()
    .then((savedBook) => res.status(201).json(savedBook))
    .catch((err) =>
      res.status(500).json({ message: "Error creating book", error: err.message })
    );
};

// Update a book by ID
exports.updateBook = (req, res) => {
  Book.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, author: req.body.author },
    { new: true } // Return the updated document
  )
    .then((updatedBook) => {
      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(updatedBook);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error updating book", error: err.message })
    );
};

// Delete a book by ID
exports.deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((deletedBook) => {
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "Book deleted successfully" });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error deleting book", error: err.message })
    );
};
