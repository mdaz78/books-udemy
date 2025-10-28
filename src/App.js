import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import useBooksContext from './hooks/useBooksContext';

function App() {
  const { books, handleCreateBook, handleDeleteBookById, handleEditBookById } =
    useBooksContext();

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      {/* Header */}
      <header className='bg-library-primary text-library-cream shadow-lg'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex items-center gap-3'>
            <svg
              className='w-10 h-10 text-library-gold'
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
            <h1 className='text-3xl font-display font-bold'>My Library</h1>
          </div>
          <p className='mt-2 text-library-light/80 text-sm'>
            Organize and manage your personal book collection
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8 grow'>
        <BookCreate />
        <BookList />
      </main>

      {/* Footer */}
      <footer className='bg-library-dark text-library-cream py-4'>
        <div className='container mx-auto px-4 text-center text-sm'>
          <p>&copy; 2025 My Library. Built with love for book lovers.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
