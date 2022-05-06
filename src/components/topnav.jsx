import { Navbar, Nav, Container } from "react-bootstrap";


function TopNav(){

    return(
        <div>
            <Navbar>
                <Container>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/"></Nav.Link>
                            <Nav.Link href="/resume"></Nav.Link>
                            <Nav.Link href="/projects"></Nav.Link>
                            <Nav.Link href="/pindex"></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;