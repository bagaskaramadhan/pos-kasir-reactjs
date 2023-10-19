import logo from './logo.svg';
import './App.css';
import { NavBarComponent, CardComponent, FooterComponent, SearchingComponent } from './components';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    productProcess()
  }, [])

  const productProcess = async () => {
    const productData = await axios.get('http://localhost:3001/products')
    // console.log("PRODUCT DATA RESPONSE => ", productData.data)
    setProducts(productData.data)
  }

  const [search, setSearch] = useState([]);

  const handleInput = (e) => {
    // console.log("INPUT HANDLE =>", e.target.value)
    setSearch(e.target.value)
  }
  // console.log("search", search)

  const handleButton = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(search === "" ? "http://localhost:3001/products" : `http://localhost:3001/products?nama=${search}`)
      // console.log(response.data)
      setProducts(response.data)
    } catch (err) {
      console.log("ERROR HANDLEBUTTON =>", err)
    }
  }

  return (
    <div className="App">
      <NavBarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <SearchingComponent handleButton={handleButton} handleInput={handleInput}/>
            {/* CARD */}
            <Col sm={9}>
              <div>
                <Row className='d-flex justify-content-center mt-5 ms-5 me-5'>
                  {products.length !== 0 ? products?.map((data) => {
                    return (
                      <CardComponent
                        key={data.id}
                        image={'assets/images/' + data.category.nama.toLowerCase() + '/' + data.gambar}
                        name={data.nama}
                        kode={data.kode}
                        harga={data.harga}
                      />
                    )
                  }) : null
                  }
                </Row>
              </div>
            </Col>
            {/* CARD */}
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
