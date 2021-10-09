import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px;
    
    background: #fff;
    border-radius: 4px;

    height: 80vh;

    section {
      width: 60%;
      margin-left: 300px;
      height: 30%;
      margin-top: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;

    button {
      background: var(--orange);
      color: #fff;
      border: 0;
      /* margin-bottom: 100px; */
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#CD4834')};
      }
    }
  }

`

export const ShoesTable = styled.table`
  
  width: 60%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }

  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: var(--orange);
      transition: color 0.2s;
    }

    &:hover {
      svg {
        color: ${darken(0.06, '#CD4834')};
      }
    }

    &:disabled {
      svg {
        color: ${lighten(0.25, '#CD4834')};
        cursor: not-allowed;
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;