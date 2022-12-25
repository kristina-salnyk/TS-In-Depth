/* eslint-disable no-redeclare,no-underscore-dangle */
import { Category } from './enums';
import { Book, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { createCustomer } from './functions';

// ==================================================

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==================================================

// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();

// Task 03.01
// const myId: string = createCustomerID('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// // const a = typeof 'abc';
// const a = typeof createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02
// createCustomer('Bob');
// createCustomer('Bob', 20);
// createCustomer('Bob', 20, 'Sumy');
//
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookById(2));
// console.log(checkoutBooks('NoName', 1, 2, 3));
// console.log(checkoutBooks('NoName', ...[1, 2, 4]));

// Task 03.03
// console.log(getTitles(1, true));
// console.log(getTitles(false));
// console.log(getTitles(true));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));

// Task 03.04
// console.log(bookTitleTransform('Learn TS'));
// console.log(bookTitleTransform(1));
// console.log(bookTitleTransform({}));

// Task 04.01
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    },
};
// printBook(myBook);
// myBook.markDamaged('Missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// const author: Author = {
//     email: 'anna@example.com',
//     name: 'Anna',
//     numBooksPublished: 2
// };
//
// const favouriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 2,
// };
//
// const favouriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical Literature',
//     assistCustomer: null,
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
//
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[10]?.name);

// Task 04.05
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02
// // const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TypeScript 2', 2022, 2);
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript 2', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());

// Task 05.03
// refBook.printCitation();

// Task 05.04
// // const favouriteLibrarian: Librarian & A = new UniversityLibrarian();
// const favouriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favouriteLibrarian.name = 'Anna';
// favouriteLibrarian.assistCustomer('Boris', 'Lear TypeScript');
// // favouriteLibrarian.a = 2;

// Task 05.05
const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: false,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    title: 'Unknown',
};

// const options: TOptions = {duration: 20};
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript 2', 2022, 2);
// printRefBook(refBook);
//
// // const favouriteLibrarian: Librarian = new UniversityLibrarian();
// const favouriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favouriteLibrarian);

// Task 06.05
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(error => console.log(error))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);
//     console.log(reader);
// }

// Task 06.06
// // let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna',
// };

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// // const result: string[] = purge<string>(['123', '123']);
// const result = purge(inventory);
// console.log(result);
// const result2 = purge([1, 2, 3]);
// console.log(result2);

// Task 07.02б 07.03
// // const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// // console.log(magazineShelf.getFirst().title);
//
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[1], 'author'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'title'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular',
// };
// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300,
// };
// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 07.05
