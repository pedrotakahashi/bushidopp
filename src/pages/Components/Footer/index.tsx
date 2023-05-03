import { Col, Container, Navbar, Row } from "react-bootstrap"
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import "./styles.css"

const Footer = () =>{

    return (
        <Container fluid className="p-0 mt-2 position-fixed bottom-0">    
            <Row id="redesSociais" >
                <Col md={12} sm={12}>
                    <Navbar className="footerComp">
                        <Container className="justify-content-center">
                                <a href="https://www.facebook.com/www.associacao.bushidopp.com.br" target="_blank" rel="noreferrer">
                                    <BsFacebook size={35} style={{marginRight:"20px"}} color="#007bff" />
                                </a>
                                <a href="https://www.instagram.com/judoprudente/" target="_blank" rel="noreferrer">
                                    <BsInstagram size={35} style={{marginRight:"20px"}} color="#fff" />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=5518996289341" target="_blank" rel="noreferrer">
                                    <BsWhatsapp size={35}  style={{marginRight:"20px"}} color="#0dc042" />
                                </a>
                        </Container>
                    </Navbar>
                </Col>
        </Row>
    </Container>
    )
}

export default Footer;