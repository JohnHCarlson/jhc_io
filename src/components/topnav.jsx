import { Navbar, Nav, Container } from "react-bootstrap";

function TopNav(){

    return(
        <div>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/pindex">Pindex</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;