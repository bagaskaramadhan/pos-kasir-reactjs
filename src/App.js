import logo from './logo.svg';
import './App.css';
import { NavBarComponent, CardComponent, FooterComponent, SearchingComponent } from './components';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // ALL PRODUCT
  const [products, setProducts] = useState([])

  useEffect(() => {
    productProcess()
  }, [])

  const productProcess = async () => {
    const product = await axios.get('http://localhost:3001/products');
    setProducts(product.data)
  }
  // ALL PRODUCT

  return (
    <div className="App">
      <NavBarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <SearchingComponent />
            <Col sm={9}>
              <CardComponent dataProduct={products} />
            </Col>
            <Col md={3}>
              Cart
            </Col>
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
