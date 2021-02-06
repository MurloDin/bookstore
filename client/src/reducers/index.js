const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems, item
        ];
    }
    console.log("asdasdasdasdasd")
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        _id = book._id,
        photoLocation = book.photoLocation,
        author = book.author,
        desc = book.desc,
        pages = book.pages,
        publisher = book.publisher,
        count = 0,
        price = book.price,
        title = book.title,
        discount = book.discount,
        total = 0
    } = item;

    return {
        _id,
        title,
        photoLocation,
        author,
        desc,
        pages,
        publisher,
        price,
        discount,
        count: count + quantity,
        total: total + quantity * (discount > 0 ? price - (price * discount) / 100 : price)
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find((book) => bookId === book._id);
    const itemIndex = state.cartItems.findIndex(({_id}) => _id === bookId);
    const item = state.cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        ...state,
        orderTotal: state.orderTotal + quantity * (newItem.discount > 0 ? newItem.price - (newItem.price * newItem.discount) / 100 : newItem.price),
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
    };
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'DELETE_ALL_BOOKS_FROM_CART':
            const item = state.cartItems.find(({_id}) => _id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state;
    }
};

export default reducer;
