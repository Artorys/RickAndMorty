import styled from "styled-components";
import Image from "./portal.png"

const BackgroundStyled = styled.img`

        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 100px auto;
        width: 300px;
        height: 300px;
        opacity: 0.2;
        animation-name: spin;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-play-state: running;
        animation-fill-mode: backwards;
        animation-timing-function: linear;

        @keyframes spin {
                0%
                {
                        transform: rotate(0deg);
                }
                100%
                {
                        transform: rotate(360deg);
                }
        }
`
BackgroundStyled.defaultProps = 
{
        src : `${Image}`
}
export default BackgroundStyled