import { useCart } from '../../hooks/useCart';
import { Shoe } from '../../types';
import {
    MdDelete,
    MdAddCircleOutline,
    MdRemoveCircleOutline,
} from 'react-icons/md';

import { formatPrice } from '../../utils/format';

import { Container, ShoesTable, Total } from './styles';

export function Cart() {

    const { cart, removeShoes, updateShoesAmount } = useCart();

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

    function deleteShoe(shoeId: number) {
        removeShoes(shoeId);
    }

    function updateShoeAmountIncrement(shoe : Shoe){
        updateShoesAmount({ shoeId: shoe.id, amount: shoe.amount + 1 })
    }

    function updateShoeAmountDecrement(shoe : Shoe){
        updateShoesAmount({ shoeId: shoe.id, amount: shoe.amount - 1 })
    }

    return (
        <Container>
            {cart.length === 0 ?
                <span>Nenhum item no carrinho</span>
                :
                <>
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
                                                onClick={() => updateShoeAmountDecrement(shoe)}
                                            >
                                                <MdRemoveCircleOutline size={20} />
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
                                                onClick={() => updateShoeAmountIncrement(shoe)}
                                            >
                                                <MdAddCircleOutline size={20} />
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
                                            onClick={() => deleteShoe(shoe.id)}
                                        >
                                            <MdDelete size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ShoesTable>

                    <section>
                        <button type="button">Finalizar pedido</button>

                        <Total>
                            <span>TOTAL</span>
                            <strong>{total}</strong>
                        </Total>
                    </section>
                </>
            }


        </Container >
    )
}