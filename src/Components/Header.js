import { Container, Nav, Navbar, NavDropdown, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import Modal from './Modal.js';
import StudyForm from './modal/StudyForm.js';
import api from '../Api/api'

const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">snowcode는?</Popover.Header>
        <Popover.Body>
            다양한 프로젝트 경험을 쌓고 싶은 송<br/>
            신뢰할 수 있는 팀원을 만나고 싶은 송<br/><br/>
            <strong>숙명 IT 전공자가 만든 IT 전공자를 위한 웹사이트 입니다.</strong>
        </Popover.Body>
    </Popover>
);

function Header (props) {
    const [user, setUser] = useState({});
    const [modal, setModal] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setUser(null);
                setLoading(true);
                const response = await api.get(
                `/user/${props.id}`
                );
                setUser(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
            }
        setLoading(false);
        };
        fetchUser();
    }, []);

    if (loading) return <div>로딩중..</div>;

    const handleLogout = async () => {
        try {
            await api({
                method: 'GET',
                url: '/auth/logout',
            })
            .then(res => {
                console.log(res.data);
                sessionStorage.removeItem('user_id');
                document.location.href = `/`
            })
            .catch(err => console.log(err));
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={"/main?id=" + user.id}>
                        <img
                            alt=""
                            src={require("../Assets/main_logo.png").default}
                            width="30"
                            height="30"
                        />{' '}
                        snowcode
                        </Navbar.Brand>
                        <br/>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href={"/main?id=" + user.id}>Home</Nav.Link>
                            <Nav.Link href={"/mypage?id=" + user.id}>MyPage</Nav.Link>
                            <NavDropdown title="category" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">스터디</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">공모전</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">졸업작품</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        <Nav>
                            <Nav.Link href={"/mypage?id=" + user.id}>
                                <img
                                    alt=""
                                    src={require("../Assets/main_women.png").default}
                                    width="30"
                                    height="30"
                                    href={"/mypage?id=" + user.id}
                                />{' '}{user.nick}
                                </Nav.Link>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <Nav.Link>About</Nav.Link>
                            </OverlayTrigger>
                        </Nav>
                        <Nav>
                            <Button variant="light" onClick={handleLogout}>로그아웃</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}   

export default Header;