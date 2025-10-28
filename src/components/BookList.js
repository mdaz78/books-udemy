import BookShow from './BookShow';

const BookList = ({ books }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className='max-w-2xl mx-auto'>
      <h2 className='text-2xl font-bold text-library-primary mb-4'>
        My Books ({books.length})
      </h2>
      <div className='grid gap-3'>{renderedBooks}</div>
    </div>
  );
};

export default BookList;
