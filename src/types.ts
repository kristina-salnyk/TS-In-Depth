import { Category } from './enums';
import {Book as IBook, Person} from './interfaces';

export type Book = { id: number; title: string; author: string; available: boolean; category: Category };

export type BookProperties = keyof IBook | 'isbn';

export type PersonBook = Person & IBook;

export type BookOrUndefined = IBook | undefined;