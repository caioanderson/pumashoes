import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';

import { Container, ShoesTable, Total } from './styles';

export function Cart() {

    const { cart } = useCart();

    const cartFormatted = cart.map(shoe => ({
        ...shoe,
        priceFormatted: formatPrice(shoe.price),
        subTotal: formatPrice(shoe.price * shoe.amount)
    }))

    const total = formatPrice(
        cart.reduce((sumTotal, shoe) => {
            return sumTotal + shoe.price * shoe.amount
        }, 0)
    )

    return (
        <Container>
            <ShoesTable>
                <thead>
                    <tr>
                        <th aria-label="shoe image" />
                        <th>Produto</th>
                        <th>QTD</th>
                        <th>Subtotal</th>
                        <th aria-label="delete icon" />
                    </tr>
                </thead>

                <tbody>
                    {cartFormatted.map(shoe => (
                        <tr data-testing='shoe' key={shoe.id}>
                            <td>
                                <img src={shoe.image_shoes} alt={shoe.name} />
                            </td>
                            <td>
                                <strong>{shoe.name}</strong>
                                <span>{shoe.priceFormatted}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        data-testid="decrement-product"
                                        disabled={shoe.amount <= 1}
                                        onClick={() => { }}
                                    >
                                        {`<`}
                                    </button>
                                    <input
                                        type="text"
                                        data-testid="product-amount"
                                        readOnly
                                        value={shoe.amount}
                                    />
                                    <button
                                        type="button"
                                        data-testid="increment-product"
                                        onClick={() => { }}
                                    >
                                        {`>`}
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{shoe.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    data-testid="remove-product"
                                    onClick={() => { }}
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ShoesTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>

        </Container >
    )
}