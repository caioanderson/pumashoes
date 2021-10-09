import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--background-header);

    padding: 0 4.25rem; //68px
    
    height: 20vh;
    
    span{
        font-size: 1.5rem; //24px
        margin: 0 0.313rem 0 0; //5px right
        }

        .cart{

            img{
                position: relative;
            }

            span{
                position: absolute;
                font-weight: 600;
                color: var(--text-subtitle);
            }
        }

`

export const Cart = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
`