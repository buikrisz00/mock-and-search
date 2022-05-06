import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Book({ book }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {book.title} 
            <Button variant="outlined" onClick={() => setShowMore(!showMore)}>Show More</Button>
            {showMore && <div>{book.author}{book.year}</div>}
        </div>
    )
}

export default Book;