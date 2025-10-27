import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { BooksProvider } from './context/books.js';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </StrictMode>
);
