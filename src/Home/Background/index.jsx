import BackgroundStyled from "./style"

function Background({children})
{
    return(
        <div className="background">
            {children}
            <BackgroundStyled></BackgroundStyled>
        </div>
    )
}
export default Background