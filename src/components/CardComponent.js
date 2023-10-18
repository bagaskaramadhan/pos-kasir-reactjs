import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import numberWithCommas from '../utils/utils';

function CardComponent(product) {
    const products = product.dataProduct
    return (
        <div>
            <Row className='d-flex justify-content-center mt-5'>
                {products?.map((data) => (
                    <Card style={{ width: '18rem' }} className='card-style mt-3 shadow' key={data.kode}>
                        <Card.Img variant="top" src={"assets/images/" + data.category.nama.toLowerCase() + "/" + data.gambar} />
                        <Card.Body>
                            <Card.Title>{data.nama} ({data.kode})</Card.Title>
                            <Card.Text>Rp. {numberWithCommas(data.harga)}</Card.Text>
                            <Card.Text>{"assets/images/" + data.category.nama.toLowerCase() + "/" + data.gambar}</Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </div>
    )
}

export default CardComponent;