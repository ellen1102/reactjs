import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand>EllenFilm</Navbar.Brand>
                    <Nav>
                        <Nav.Link>Kartun</Nav.Link>
                        <Nav.Link>Superhero</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar