import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import numberWithCommas from '../utils/utils';

function CardComponent({ image, name, kode, harga }) {
    return (
        <Card style={{ width: '15rem' }} className='card-style mt-3 shadow'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name} ({kode})</Card.Title>
                <Card.Text>Rp. {numberWithCommas(harga)}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardComponent;