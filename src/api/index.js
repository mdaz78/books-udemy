import axios from 'axios';

/**
 * API Client Configuration
 *
 * Creates an axios instance with base configuration for the books API.
 * All requests will be made to the local JSON server running on port 3001.
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
});

/**
 * Book object structure
 * @typedef {Object} Book
 * @property {number} id - Unique identifier for the book
 * @property {string} title - Title of the book
 * @property {string} author - Author of the book
 * @property {string} [description] - Optional description of the book
 * @property {number} [rating] - Optional rating of the book (1-5)
 * @property {string} [genre] - Optional genre of the book
 */

/**
 * Retrieves all books from the API
 *
 * @async
 * @function getBooks
 * @returns {Promise<Book[]>} Promise that resolves to an array of all books
 * @throws {Error} When the API request fails
 *
 * @example
 * ```javascript
 * import { getBooks } from './api';
 *
 * try {
 *   const books = await getBooks();
 *   console.log('All books:', books);
 * } catch (error) {
 *   if (error.response) {
 *     console.error('API Error:', error.response.status, error.response.data);
 *   } else {
 *     console.error('Network Error:', error.message);
 *   }
 * }
 * ```
 */
export const getBooks = async () => {
  const response = await apiClient.get('/books');
  return response.data;
};

/**
 * Creates a new book in the API
 *
 * @async
 * @function createBook
 * @param {Omit<Book, 'id'>} book - Book object without the id (will be auto-generated)
 * @returns {Promise<Book>} Promise that resolves to the created book with assigned id
 * @throws {Error} When the API request fails or validation fails
 *
 * @example
 * ```javascript
 * import { createBook } from './api';
 *
 * try {
 *   const newBook = await createBook({
 *     title: 'The Great Gatsby',
 *     author: 'F. Scott Fitzgerald',
 *     description: 'A classic American novel',
 *     rating: 5
 *   });
 *   console.log('Created book:', newBook);
 * } catch (error) {
 *   if (error.response) {
 *     console.error('API Error:', error.response.status, error.response.data);
 *   } else if (error.request) {
 *     console.error('Network Error: No response received');
 *   } else {
 *     console.error('Error:', error.message);
 *   }
 * }
 * ```
 */
export const createBook = async (book) => {
  const response = await apiClient.post('/books', book);
  return response.data;
};

/**
 * Retrieves a specific book by its ID
 *
 * @async
 * @function getBookById
 * @param {number|string} id - The unique identifier of the book
 * @returns {Promise<Book>} Promise that resolves to the requested book
 * @throws {Error} When the API request fails or book is not found
 *
 * @example
 * ```javascript
 * import { getBookById } from './api';
 *
 * try {
 *   const book = await getBookById(1);
 *   console.log('Book details:', book);
 * } catch (error) {
 *   if (error.response) {
 *     console.error('API Error:', error.response.status, error.response.data);
 *   } else if (error.request) {
 *     console.error('Network Error: No response received');
 *   } else {
 *     console.error('Error:', error.message);
 *   }
 * }
 * ```
 */
export const getBookById = async (id) => {
  const response = await apiClient.get(`/books/${id}`);
  return response.data;
};

/**
 * Updates an existing book in the API
 *
 * @async
 * @function updateBook
 * @param {number|string} id - The unique identifier of the book to update
 * @param {Partial<Book>} book - Book object with fields to update (id will be ignored)
 * @returns {Promise<Book>} Promise that resolves to the updated book
 * @throws {Error} When the API request fails or book is not found
 *
 * @example
 * ```javascript
 * import { updateBook } from './api';
 *
 * try {
 *   const updatedBook = await updateBook(1, {
 *     title: 'Updated Title',
 *     rating: 4
 *   });
 *   console.log('Updated book:', updatedBook);
 * } catch (error) {
 *   if (error.response) {
 *     console.error('API Error:', error.response.status, error.response.data);
 *   } else if (error.request) {
 *     console.error('Network Error: No response received');
 *   } else {
 *     console.error('Error:', error.message);
 *   }
 * }
 * ```
 */
export const updateBook = async (id, book) => {
  const response = await apiClient.put(`/books/${id}`, book);
  return response.data;
};

/**
 * Deletes a book from the API
 *
 * @async
 * @function deleteBook
 * @param {number|string} id - The unique identifier of the book to delete
 * @returns {Promise<Book>} Promise that resolves to the deleted book object
 * @throws {Error} When the API request fails or book is not found
 *
 * @example
 * ```javascript
 * import { deleteBook } from './api';
 *
 * try {
 *   const deletedBook = await deleteBook(1);
 *   console.log('Deleted book:', deletedBook);
 * } catch (error) {
 *   if (error.response) {
 *     console.error('API Error:', error.response.status, error.response.data);
 *   } else if (error.request) {
 *     console.error('Network Error: No response received');
 *   } else {
 *     console.error('Error:', error.message);
 *   }
 * }
 * ```
 */
export const deleteBook = async (id) => {
  const response = await apiClient.delete(`/books/${id}`);
  return response.data;
};
