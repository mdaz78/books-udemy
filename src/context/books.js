import { createContext, useCallback, useEffect, useState } from 'react';
import { createBook, deleteBook, getBooks, updateBook } from '../api';

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await getBooks();
    setBooks(response);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleCreateBook = async ({ title }) => {
    const response = await createBook({ title });
    setBooks([...books, response]);
  };

  const handleDeleteBookById = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEditBookById = async (id, title) => {
    const response = await updateBook(id, { title });
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return response;
        }
        return book;
      })
    );
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        handleCreateBook,
        handleDeleteBookById,
        handleEditBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { BooksProvider };
export default BooksContext;
