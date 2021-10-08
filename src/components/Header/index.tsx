import { useCart } from '../../hooks/useCart';

import { Container } from './styles';

import logo from '../../assets/logo.png';
import carrinho from '../../assets/carrinho.png';

export function Header() {

    const { cart } = useCart();
    const cartSize = cart.length;

    return (
        <Container>
            <img src={logo} alt="Puma" />
            <button>
                <span>Carrinho</span>
                <div className="cart">
                    <img src={carrinho} alt="Carrinho de compras" />
                    <span>{cartSize < 1 ? '0' : cartSize}</span>
                </div>
            </button>
        </Container>
    )
}