import React, { useState } from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ title: title });
    setTitle('');
  };

  return (
    <div className='bg-surface p-8 rounded-lg shadow-card max-w-2xl mx-auto border border-library-light'>
      <div className='flex items-center gap-3 mb-6'>
        <svg
          className='w-8 h-8 text-library-primary'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
        <h3 className='text-2xl font-display font-bold text-library-primary'>
          Add a New Book
        </h3>
      </div>
      <form onSubmit={handleSubmit} className='space-y-5'>
        <div>
          <label className='block text-sm font-semibold text-text-secondary mb-2'>
            Book Title
          </label>
          <input
            className='w-full px-4 py-3 border-2 border-library-light rounded-md focus:outline-none focus:ring-2 focus:ring-library-primary focus:border-library-primary transition-colors bg-library-cream/30'
            placeholder='Enter the book title...'
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <button
          type='submit'
          style={{
            background: 'linear-gradient(to right, #8B4513, #D2691E, #CD853F)',
            borderColor: 'rgba(218, 165, 32, 0.4)',
            color: '#FAF7F2'
          }}
          className='w-full font-semibold py-3 px-6 rounded-md transition-all duration-300 shadow-book hover:shadow-book-hover transform hover:-translate-y-0.5 hover:scale-[1.02] relative overflow-hidden group border-2'
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(to right, #654321, #8B4513, #D2691E)';
            e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(to right, #8B4513, #D2691E, #CD853F)';
            e.currentTarget.style.borderColor = 'rgba(218, 165, 32, 0.4)';
          }}
        >
          <span
            className='absolute inset-0 transition-transform duration-700 pointer-events-none'
            style={{
              background: 'linear-gradient(to right, transparent, rgba(218, 165, 32, 0.2), transparent)',
              transform: 'translateX(-100%)'
            }}
          ></span>
          <span className='relative flex items-center justify-center gap-2'>
            <svg
              className='w-5 h-5 transition-transform duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              />
            </svg>
            <span className='font-bold tracking-wide'>Add to Library</span>
          </span>
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
