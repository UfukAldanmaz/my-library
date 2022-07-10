import { useEffect, useState } from "react";
import "../style/books.css"
import Popup from "./Popup";

function Books() {

    const [currentBook, setCurrentBook] = useState(null);
    const [books, setBooks] = useState(null);
    const [search, setSearch] = useState(null);
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [buttonPopUp, setButtonPopUp] = useState(false);


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
                if (book.volumeInfo.imageLinks !== undefined && book.volumeInfo.description !== undefined)
                    return <><div className="book-card" key={book.id}>
                        <img className="book-img" src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail} />
                        <button className="popup-btn" onClick={() => {
                            setButtonPopUp(true);
                            setCurrentBook(book)
                        }}>
                            <p className="title">{book.volumeInfo.title}</p></button>
                    </div>
                    </>
            })}

            <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp} book={currentBook} />

        </div>
        }

    </div >
}

export default Books;