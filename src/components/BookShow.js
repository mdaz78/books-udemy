import React, { useState } from 'react';
import BookEdit from './BookEdit';

export const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleCancel = () => {
    setShowEdit(false);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  return (
    <div
      key={book.id}
      className='bg-surface p-4 rounded-lg shadow-card border border-library-light hover:shadow-book transition-shadow'
    >
      <div className='flex items-center gap-3'>
        <svg
          className='w-8 h-8 text-library-primary shrink-0'
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
        <div className='flex-1'>
          {showEdit ? (
            <BookEdit
              book={book}
              onCancel={handleCancel}
              onSubmit={handleSubmit}
            />
          ) : (
            <h4 className='text-library-dark font-semibold'>{book.title}</h4>
          )}
        </div>
        <div className='flex gap-2 shrink-0'>
          {/* Edit Button */}
          <button
            onClick={handleEdit}
            className='p-2 hover:bg-amber-100 rounded transition-colors cursor-pointer'
          >
            <svg
              className='w-5 h-5 text-library-primary'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
              />
            </svg>
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className='p-2 hover:bg-red-100 rounded transition-colors cursor-pointer'
          >
            <svg
              className='w-5 h-5 text-red-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookShow;
