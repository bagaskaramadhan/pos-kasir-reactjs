import axios from "axios";
import { useState } from "react";
import { Button, Card, Row, } from "react-bootstrap";

function SearchingComponent() {
    const [search, setSearch] = useState()
    const [dataSearched, setDataSearched] = useState();

    // const namaProduct = dataSearched
    // console.log(namaProduct)

    const handleFormInput = (e) => {
        setSearch(e.target.value)
    }
    const handleButton = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.get(`http://localhost:3001/products?nama=${search}`)
            console.log("RESPONSE BUTTON", response.data)
            setDataSearched(response.data)
        } catch (err) {
            console.log("ERROR HANDLEBUTTON ", err)
        }
    }
    return (
        <div>
            {/* <form onSubmit={handleButton}>
                <input onChange={handleFormInput} className="me-2" />
                <button>Submit</button>
            </form>
            <Row className='d-flex justify-content-center mt-5'>
                {dataSearched?.map((data) => (
                    <Card style={{ width: '18rem' }} className='card-style mt-3' key={data.kode} >
                        <Card.Body>
                            <Card.Title>{data.nama}</Card.Title>
                            <Card.Text>{data.harga}</Card.Text>
                            <Card.Text>{data.category.nama}</Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row> */}
        </div>
    )
}

export default SearchingComponent