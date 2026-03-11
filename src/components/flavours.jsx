import { Container, Row, Col } from 'react-bootstrap'
import img1 from '../Assets/image1x3.png'
import img2 from '../Assets/image3x3.png'
import img3 from '../Assets/image3x1.png'
import img4 from '../Assets/image3x4.png'
import img5 from '../Assets/image4x4.png'
import img6 from '../Assets/image2x2.png'
import img7 from '../Assets/image2x3.png'
import img8 from '../Assets/image4x1.png'




const Flavours = () => {
    return (
        <div className='flavours py-5 mb-4'>
            <div className='titles'>
                <h3>Our flavours</h3>
                <h1>Choose your style / flavour</h1>
            </div>
            <Container>
                <Row>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img1} alt='' /></div></Col>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img2} alt='' /></div></Col>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img3} alt='' /></div></Col>
                    <Col className='d-none d-lg-block' xs={6} lg={3}><div className='flavour-img'><img src={img4} alt='' /></div></Col>
                    <Col className='d-none d-lg-block' xs={6} lg={3}><div className='flavour-img'><img src={img5} alt='' /></div></Col>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img6} alt='' /></div></Col>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img7} alt='' /></div></Col>
                    <Col xs={6} md={4} lg={3}><div className='flavour-img'><img src={img8} alt='' /></div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Flavours