import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.section`

     //164px
    height: 100%;

    .section-1{
        padding: 0 10.25rem;
        height: 80vh;
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        .content{
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            height: 12.5rem;
        
            .info-product{
        
                padding : 1.25rem 0;
                max-width: 25rem; //400px
        
                h1{ 
                    font-size: 3rem;
                }
        
                span{
                    font-size: 1.75rem; //28px;
                    color: var(--text-subtitle);
                    font-weight: 600;
                }
            }
            button{
                border: 0;
                background: var(--orange);
                padding: 1.25rem; //20px
                color: var(--white);
                font-size: 1.25rem;
                font-weight: 600;
                border-radius: 20px;
        
                transition: background 0.2s;
        
                &:hover{
                    background: ${darken(0.06, '#CD4834')};
                }
            }
            }


    }

    .section-2{
        height: 100vh;
        background: var(--background-second);
        padding: 0 10.25rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        ul{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 50px;
            list-style: none;

            li{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                background: var(--card);
                border-radius: 12px;
                height: 376px;
                padding: 20px;

                img{
                    width: 264px;
                    height: 198px;   
                }

                .info{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 60%;

                    span:first-child{
                        font-family: "Poppins", sans-serif;
                        font-weight: 300;
                    }

                    span:last-child{
                        font-weight: 600;
                        color: var(--orange);
                    }

                }

                button{
                    border: 0;
                    height: 80px;
                    background: var(--orange);
                    border-radius : 18px;
                    width: 60%;
                    color: var(--white);
                    font-size: 16px;
                    font-weight: 600;

                    display: flex;
                    align-items: center;
                    
                    transition: background 0.2s;

                    &:hover{
                        background: ${darken(0.06, '#CD4834')};
                    }

                    .cart{
                       display: flex;
                       align-items: center;
                       justify-content: center;
                       background: var(--orange-dark);
                       width: 100px;
                       height: 80px;
                       border-radius: 18px;
                       width: 30%;

                       img{
                           width: 25px;
                           height: 25px;
                       }

                    }

                    .add-cart{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 70%;
                    }
                }

            }
            
        }

    }

    .section-3{
        height: 100vh;
        background: var(--background-third);

        display: flex;
        align-items: center;
        justify-content: space-between;

        h2{
            display: flex;
            align-items: center;
            justify-content:center;
            padding-left: 300px;

            font-size: 72px;
        }
        

        img{
           height: 100vh; 
        }
    }

`
