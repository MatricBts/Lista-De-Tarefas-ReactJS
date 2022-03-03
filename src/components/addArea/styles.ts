import styled from "styled-components";

export const Container = styled.div `
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display:flex;
    align-items:center;

    .image{
        margin-right: 5px;
    }

    input{
        border: 0px;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 18px;
        flex: 1;
    }
    
    button{
        border-radius: 5px;
        background-color: #20212C;
        color: #FFF;
        outline: 0;
    }

    button:hover{
        background-color: #FFF;
        color: #20212C;
    }
`;