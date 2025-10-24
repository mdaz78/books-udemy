import { useState } from 'react';

const BookEdit = ({ book, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex items-center border-2 border-library-primary rounded focus-within:ring-1 focus-within:ring-library-primary'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='flex-1 px-3 py-1 focus:outline-none'
          autoFocus
        />
        <button
          type='submit'
          className='p-1 hover:bg-green-100 transition-colors cursor-pointer'
          title='Save'
        >
          <svg
            className='w-4 h-4 text-green-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </button>
        <button
          type='button'
          onClick={onCancel}
          className='p-1 mr-1 hover:bg-red-100 transition-colors cursor-pointer'
          title='Cancel'
        >
          <svg
            className='w-4 h-4 text-red-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default BookEdit;
