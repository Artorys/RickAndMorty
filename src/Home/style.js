import styled from "styled-components";

const HomeStyled = styled.div`

    width: 100%;
    height: 100%;
    
    header
    {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        z-index: 0;
        border-top: solid #44281d 50px;
        background-color: #e4a788;
        width: 100%;
        height: 100px;
    }
    header::before
    {
        box-shadow: -10px 0 0 0 black;
        border-radius: 10px;
        content: "";
        width: 30px;
        height: 30px;
        background-color: white;
    }
    header::after
    {
        box-shadow: -10px 0 0 0 black;
        border-radius: 10px;
        content: "";
        width: 30px;
        height: 30px;
        background-color: white;
    }
    main
    {
        background-color: rgba(240,225,74);
        width: 100%;
        height: 100%;
    }
    ul
    {
        width: 100%;
        height: 100%;
    }
    .box_card
    {
        overflow: auto;
        display: flex;   
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height:100%;
        padding: 10px 20px;
    }
    .background
    {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .footer
    {
        position: relative;
        z-index: 4;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        height:max-content;
    }
    .footer button
    {
        cursor: pointer;
        font-weight: 900;
        text-align: center;
        padding: 15px;
        background-color: rgba(0,0,0,0.2);
    }
`
export default HomeStyled