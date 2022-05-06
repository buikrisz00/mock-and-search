import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";

function App() {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const res = await fetch("http://fakeapi.com/v1/api/books");
        const resJson = await res.json();
        
        console.log(resJson);
        setBooks(resJson);
        setLoading(false);
    }
    
    useEffect(
        () => {
            setLoading(true);
            fetchBooks();
        },
        []
    )

    

    return (
        <div className="App">
            { 
                loading ? 
                <LoadingMask /> : 
                books.map((book, index) => <div key={index}>{book.title} {book.author} {book.year}</div> )
            }
        </div>
    );
}

export default App;
