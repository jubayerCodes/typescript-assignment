const formatString = (input: string, toUpper?: boolean): string => {
  if (toUpper || typeof toUpper === "undefined") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
};

interface Book {
  title: string;
  rating: number;
}

const filterByRating = (books: Book[]): Book[] => {
  const highestRatedBooks = books.filter((book) => book.rating >= 4);
  return highestRatedBooks;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const concatenatedArrays = arrays.flat();
  return concatenatedArrays;
};


