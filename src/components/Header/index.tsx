import { useCart } from '../../hooks/useCart';

import { Container, Cart } from './styles';

import logo from '../../assets/logo.png';
import carrinho from '../../assets/carrinho.png';
import { Link } from 'react-router-dom';

export function Header() {

    const { cart } = useCart();
    const cartSize = cart.length;

    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt="Puma" />
            </Link>

            <Cart to='/cart'>
                <div className="cart">
                    <img src={carrinho} alt="Carrinho de compras" />
                    <span>{cartSize < 1 ? '0' : cartSize}</span>
                </div>
            </Cart>
        </Container>
    )
}