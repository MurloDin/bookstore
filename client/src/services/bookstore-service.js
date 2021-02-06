import axios from 'axios';


export default class BookstoreService {

  getBooks() {
    const apiUrl = 'http://localhost:8000/api/books';
    const data = axios.get(apiUrl).then((resp) => {
      return resp.data;
    });
    console.log(
        data
    )
    return data
  };

  postOrder(data) {
    const apiUrl = 'http://localhost:8000/api/order';
    axios.post(apiUrl, data).then((resp) => console.log('r', resp))
  }
}
