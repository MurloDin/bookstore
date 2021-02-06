
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  };
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  };
};

const addedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
      .then((data) => {
        dispatch(booksLoaded(data));
      })
      .catch((err) => {
        dispatch(booksError(err));
      });
};

const onDecrease = (id) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: id
    }
}

const onDelete = (id) => {
    return {
        type: 'DELETE_ALL_BOOKS_FROM_CART',
        payload: id
    }
}

export {
    fetchBooks,
    addedToCart,
    onDecrease,
    onDelete
};
