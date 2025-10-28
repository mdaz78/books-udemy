import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';

const BookCreate = () => {
  const { handleCreateBook } = useBooksContext();
  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim().length === 0) {
      return;
    }

    handleCreateBook({ title: title.trim() });
    setTitle('');
  };

  return (
    <div className='bg-surface p-6 rounded-lg shadow-card max-w-4xl mx-auto border border-library-light mb-8'>
      <h3 className='text-xl font-bold text-library-primary mb-4'>
        Add a New Book
      </h3>
      <form onSubmit={handleSubmit} className='flex gap-3'>
        <input
          className='flex-1 px-4 py-2 border-2 border-library-light rounded-md focus:outline-none focus:ring-2 focus:ring-library-primary focus:border-library-primary'
          placeholder='Enter book title...'
          value={title}
          onChange={handleTitleChange}
        />
        <button
          type='submit'
          className='bg-library-primary text-library-cream px-6 py-2 rounded-md font-semibold hover:bg-library-dark transition-colors'
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
