import { Container, Row, Col } from "react-bootstrap";
import './common.css';
function About(){
    return (
        <div>
            <Container className="aboutme">
                <Row>
                    <Col>
                        <div className="subtitle fs-4 text-muted">About Me</div>
                        <div className="title fs-2 text-wrap">Hi, I'm John, a Computer Science and Political Science student at Rochester Institute of Technology.</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;