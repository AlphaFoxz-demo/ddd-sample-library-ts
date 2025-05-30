export type Value<T, BRAND> = T & BRAND;

export type ISBN = Value<string, 'ISBN'>;
export type BookName = Value<string, 'BookName'>;

export function createIsbn(v: string) {
  if (v.length !== 13) return null;
  return v as ISBN;
}

export function createBookName(v: string) {
  return v as BookName;
}

export type Book = {
  id: bigint | number;
  isbn: ISBN;
};
