import {Button} from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
    return (
        <Button href="http://localhost:8080/auth/GOOGLE" variant="outline-primary" size="sm" type="button">
            <FcGoogle/>
            구글로그인
        </Button>
    );
};
export default LoginForm;