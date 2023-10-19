import axios from "axios";
import { useState } from "react";
import { Button, Card, Row, } from "react-bootstrap";

function SearchingComponent({handleButton, handleInput}) {
    return (
        <div>
            <form onSubmit={handleButton}>
              <input onChange={handleInput} className="me-2" />
              <button>Search</button>
            </form>
        </div>
    )
}

export default SearchingComponent