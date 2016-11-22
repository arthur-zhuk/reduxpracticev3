export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an aciton,
  // an object with a type property.
  // action always contains type and sometimes a payload.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
