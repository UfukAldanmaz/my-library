import './App.css';
import Books from './components/books';
import Header from './components/Header';
// AIzaSyAyqm6LA0xi4af3hh4ZeIlMXj6BVNzAB7s
// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAyqm6LA0xi4af3hh4ZeIlMXj6BVNzAB7s
function App() {
  return <div> <Header />
    <Books />
  </div>
  //   const getBooks = async () => {
  //     const url = 'https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAyqm6LA0xi4af3hh4ZeIlMXj6BVNzAB7s';
  //     const response = await fetch(url);
  //     try {

  //     }
  // }
}

export default App;
