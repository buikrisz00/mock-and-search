import { useEffect, useState } from "react";
import Book from "./components/Book";
import LoadingMask from "./components/LoadingMask";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState("");
    const [sort, setSort] = useState("desc");

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

    function sortBooks() {
        setBooks([...books.sort((a, b) => sort === "desc" ? b.year - a.year : a.year - b.year)]);
        setSort(sort === "desc" ? "asc" : "desc");
    }

    return (
        <div className="App">
            { 
                loading ? 
                <LoadingMask /> : 
                <>
                    <Button variant="contained" onClick={sortBooks}>Sort</Button>
                    <TextField id="standard-basic" label="Standard" variant="standard" value={input} onChange={({ target }) => setInput(target.value)} />
                    {books.map((book, index) => book.title.toLowerCase().includes(input.toLowerCase()) && <Book key={index} book={book} /> )}
                </>
            }
        </div>
    );
}

export default App;
