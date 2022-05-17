import { Container, Row, Col } from 'react-bootstrap';
import About from '../components/about';

function Home() {
  return (
    <div>
        <Container>
          <Row> {/* Top Navigation Bar */}
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row> {/* Main Page Content */}
          <Col>
            <About/>
          </Col>
          <Col>
          </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;