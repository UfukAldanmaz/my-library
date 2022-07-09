import { useEffect, useState } from "react";
import "../style/books.css"

function Books() {

    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true);


    const loadBooks = () => {
        setIsLoading(true);
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAyqm6LA0xi4af3hh4ZeIlMXj6BVNzAB7s&maxResults=40')
            .then(response => response.json())
            .then(data => {
                setBooks(data)
            })
            .catch(err => { setError(err) })
            .finally(() => { setIsLoading(false) }
            );

    }

    useEffect(() => { loadBooks() }, []);


    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        loadBooks();

    }

    return <div className="box">
        <form onSubmit={handleSubmit}>
            <input className="search" placeholder="Search a book" onChange={handleChange}></input>
            <button className="btn">
                Search
            </button>
        </form>
        {isLoading ? <p className="loading">Loading📚📚📚</p> : <div className="cards">
            {books.items.map((book) => {
                if (book.volumeInfo.imageLinks !== undefined)
                    return <div className="book-card" key={book.id}>
                        <a href={book.volumeInfo.previewLink}>
                            <img className="book-img" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} />
                            <p className="title">{book.volumeInfo.title}</p>
                        </a>
                    </div>

            })}
        </div>}

    </div>
}

export default Books;