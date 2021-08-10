import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={require("../Assets/main_logo.png").default}
                            width="30"
                            height="30"
                        />{' '}
                        snowcode</Navbar.Brand>
                        <br/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#mypage">MyPage</Nav.Link>
                            <Nav.Link href="#chat">Chat</Nav.Link>
                            <NavDropdown title="category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">스터디</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">공모전</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">졸업작품</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        <Nav>
                            <Nav.Link href="#mypage">
                                <img
                                    alt=""
                                    src={require("../Assets/main_women.png").default}
                                    width="30"
                                    height="30"
                                    href="#mypage"
                                />{' '}
                                User Name</Nav.Link>
                            <Nav.Link eventKey={2} href="#about">
                                about
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="light">로그인</Button>
                            <Button style={{marginLeft: '10px'}}variant="light">글쓰기</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}   

export default Header;