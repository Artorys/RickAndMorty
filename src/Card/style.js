import styled, { css } from "styled-components";


const CardStyled = styled.li`
    color: 	#303032;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    margin-bottom: 1rem;
    border-radius: 10px;
    border: 5px rgba(151,206,76) solid;
    width: 150px;
    background-color: #10aeb2;
    overflow-wrap: break-word;
    height: 210px;
    padding: 10px;
    font-weight: 900;

    img
    {
        border-radius: 10px;
        box-shadow: 0px 2px 10px 0px black;
        width: 100%;
    }
    ${({status})=> status == "Alive" ? css`
    filter : grayscale(0%);`
    :
    css`
    ::before
    {
        position: absolute;
        color: black;
        z-index: 1;
        font-size: 0.76rem;
        width: 100%;
        height: 20px;
        content: "DEAD/UNKNOWN";
        text-decoration: underline;
    }
    filter : grayscale(100%);`
    }
`
export default CardStyled