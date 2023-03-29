import {Container, Row, Col} from "react-bootstrap";
import copyright from "../copyright.jpeg"

const MyFooter = ()=> (
    <Container fluid className= "bg-body-success">
        <Row className="justify-content-center">
            <Col>
            <img src= {copyright} alt="logo" className='rounded-circle' height={30} width={30}/>
<p>EpiBooks</p>
            </Col>
        </Row>
    </Container>
)
export default MyFooter;