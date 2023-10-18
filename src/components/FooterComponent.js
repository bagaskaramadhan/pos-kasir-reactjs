import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function FooterComponent() {
    return (
        <Container>
            <div>
                <footer className="footer-info">
                    <div>
                        <Row className='d-flex justify-content-reverse text-footer'>
                            <Col xs lg='3'>
                                <h5>Consumen Care</h5>
                                <h6><strong>Layanan Pengaduan Konsumen</strong><br />
                                    Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan RI (Whatsapp) 0853-1111-1010</h6>
                            </Col>
                            <Col xs lg='3'>
                                <h5>Hiring</h5>
                                <h6><Nav.Link href="#careers">Careers</Nav.Link></h6>
                            </Col>
                            <Col xs lg='3'>
                                <h5>Layanan</h5>
                                <h6>Layanan yang tersedia belum tersedia.</h6>
                            </Col>
                            <Col xs lg='3'>
                                <h5>Informasi</h5>
                                <h6>Dibuat secara sadar dan sengaja untuk memudahkan konsumen. Jika ada kesalhan mohon hubungi kami agar dapat kami tindak lanjuti.</h6>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <footer className="footer-style">
                    <div>
                        © 2023 PT Ana - All Right reserved
                    </div>
                </footer>
            </div>
        </Container>
    );
}

export default FooterComponent;