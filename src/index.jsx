import {createRoot} from "react-dom/client"
import Reset from "./assets/styles/reset.js"
import Home from "./Home"

const root = createRoot(document.querySelector("#root"))

root.render(<>
<Reset></Reset>
<Home></Home>
</>)
