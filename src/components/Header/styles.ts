import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--background-header);

    padding: 0 4.25rem; //68px
    
    height: 20vh;

    button{
        border: 0;
        margin: 0 6.25rem;
        background: var(--background-header);
       

        display: flex;
        align-items: center;

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
    }

`