import "./styles.css";
import {  Container, Card, Button} from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import cardsData from '../../../data/cardData';
import './styles.css';
const Body = () => {
  return (
    <>
       <Container fluid={true} className="card-wrapper mt-3 mb-5">
          <Row className=" d-flex justify-content-center  pt-3 pb-3">
            {cardsData.map((cardData, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <Card className="mt-2 mb-2" >
                  <Card.Img variant="top" src={cardData.imageSrc} />
                  <Card.Body>
                    <Card.Title>{cardData.title}</Card.Title>
                    <Card.Text>{cardData.text}</Card.Text>
                    <div className="d-flex justify-content-center">
                      <Button variant="success">{cardData.buttonLabel}</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
      </Container>
    </>
  );
};

export default Body;

