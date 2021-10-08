import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api';
import { Shoe } from '../types';

interface CartContextData {
    cart: Shoe[];
    addShoesCart: (shoesId: number) => Promise<void>;

}
const CartContext = createContext<CartContextData>({} as CartContextData);

interface CartProviderProps {
    children: ReactNode;

}

export function CartProvider({ children }: CartProviderProps): JSX.Element {

    const [cart, setCart] = useState<Shoe[]>(() => {
        const storagedCart = localStorage.getItem('@PumaShoes:cart');

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    async function addShoesCart(shoesId: number) {

        try {

            const updateCart = [...cart];
            const shoeExists = updateCart.find(shoe => shoe.id === shoesId);

            const stock = await api.get(`stock/${shoesId}`).then(response => {
                const { amount } = response.data[0];
                return amount;
            })

            const stockAmount = stock;
            const currentAmount = shoeExists ? shoeExists.amount : 0;

            const amount = currentAmount + 1;

            if (amount > stockAmount) {
                console.log('Quantidade solicitada fora de estoque');
                return;
            }

            if (shoeExists) {
                shoeExists.amount = amount;
            } else {
                const shoe = await api.get(`shoes/${shoesId}`).then(response => {
                    return response.data[0];
                })

                const { id, name, price, image_shoes } = shoe;
                const addShoe = {
                    id,
                    name,
                    price,
                    image_shoes
                }

                const newShoes = {
                    ...addShoe,
                    amount: 1
                }

                updateCart.push(newShoes);

                
            }
            setCart(updateCart);

            localStorage.setItem('@PumaShoes:cart', JSON.stringify(updateCart));

        } catch {
            console.log('erro')
        }
    }


    return (
        <CartContext.Provider value={{ cart, addShoesCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);
    return context;
}
