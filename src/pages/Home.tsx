import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../services/api';
import { useCart } from '../hooks/useCart';

import { formatPrice } from '../utils/format';
import { Shoe } from '../types';

import arte from '../assets/arte1.png';
import arte2 from '../assets/arte2.png';
import carrinho from '../assets/carrinho-branco.png';


interface CartItemsAmount {
    [key: number]: number;
  }

export function Home() {

    const { cart, addShoesCart } = useCart();

    const [shoes, setShoes] = useState<Shoe[]>([]);

    const cartItemsAmount = cart.reduce((sumAmount, shoe) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[shoe.id] = shoe.amount;
        return newSumAmount;
    }, {} as CartItemsAmount)

    function handleAddShoe(id : number){
        addShoesCart(id);
    }


    useEffect(() => {
        api.get('shoes').then(response => setShoes(response.data));
    }, [])

    return (
        <Container>
            <section className="section-1">
                <div className="content">
                    <div className="info-product">
                        <h1>RS-FAST HEAT</h1>
                        <span>
                            A família PUMA RS busca no passado
                            inspiração para o futuro.
                        </span>

                    </div>
                    <button>Conheça</button>
                </div>
                <img src={arte} alt="RS-FAST HEAT" />
            </section>

            <section className="section-2">

                <h2>Compre também:</h2>

                <ul>
                    {shoes.map((shoe) => (
                        <li key={shoe.id}>
                            <img src={shoe.image_shoes} alt={shoe.name} />
                            <div className="info">
                                <span>{shoe.name}</span>
                                <span>{formatPrice(shoe.price)}</span>
                            </div>
                            <button onClick={() => handleAddShoe(shoe.id)}>
                                <div className="cart">
                                    <img src={carrinho} alt="Carrinho de compras" />

                                    { cartItemsAmount[shoe.id] || 0 }

                                </div>

                                <div className="add-cart">
                                    Adicionar ao carrinho
                                </div>
                            </button>
                        </li>
                    )
                    )}

                </ul>

            </section>

            <section className="section-3">
                <h2>#OnlySeeGreat</h2>
                <img src={arte2} alt="Dois homens posando para foto num mural da Puma" />
            </section>

        </Container>
    )
}