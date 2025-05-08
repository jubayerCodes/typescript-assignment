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

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
};

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (!products.length) {
    return null;
  }

  let expensiveProduct = products[0];

  for (const product of products) {
    if (expensiveProduct?.price < product?.price) {
      expensiveProduct = product;
    }
  }

  return expensiveProduct;
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
};

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Error: Negative number not allowed");
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
};