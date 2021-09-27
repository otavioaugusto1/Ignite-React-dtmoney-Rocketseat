import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr); //tamanho de cada bloco
    gap: 2rem; //espaçamento entre eles
    margin-top: -10rem;

    //cascata, toda div dentro do meu Container
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }

`