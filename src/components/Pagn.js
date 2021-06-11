import React from 'react'
import { Button } from "reactstrap";


const Pagn = ({ totalPages, handleClick }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);
    return (
        <div>
            {pages.map(num => (

                <Button className="btn-outline-light"
                    key={num}
                    onClick={() => handleClick(num)}
                > {num} </Button>

            ))}
        </div>
    )
}

export default Pagn