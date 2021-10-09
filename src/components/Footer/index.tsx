import { Link } from 'react-router-dom';
import { Container } from './styles';

import instagram from '../../assets/logo-instagram.png';

export function Footer() {
    return (
        <Container>
            <div />

            <Link to={{ pathname: 'https://www.instagram.com/puma/' }} target="_blank" >
                <img src={instagram} alt="Instagram" />
            </Link>

        </Container >
    );
}