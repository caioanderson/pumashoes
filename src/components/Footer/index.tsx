import { Container } from './styles';

import logo from '../../assets/logo.png';
import socials from '../../assets/socials.png';

export function Footer() {
    return (
        <Container>
            <img src={logo} alt="Puma" />
            <img src={socials} alt="Redes sociais" />
        </Container>
    );
}