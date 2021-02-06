import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";

import App from "./components/App";
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';

import "./styles/index.scss";

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <BookstoreServiceProvider value={bookstoreService}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </BookstoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);
