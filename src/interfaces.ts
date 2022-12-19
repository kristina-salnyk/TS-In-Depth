import { Category } from './enums';

interface A {
    [prop: string]: string | number;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void; // property
    // markDamaged?(reason: string): void; // method
    markDamaged?: DamageLogger; // interface
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
    // name: string;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

// interface A {
//     a: number;
// }

interface TOptions {
    duration?: number;
    speed?: number;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

export { Author, Book, Librarian, Person, A, DamageLogger as Logger, TOptions, Magazine, ShelfItem };
