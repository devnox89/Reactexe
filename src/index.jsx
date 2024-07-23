import { createRoot } from "react-dom/client";
import { App } from "./App";

// const helloWorldElement = <HelloWorld/>

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(helloWorldElement)

createRoot(document.getElementById('root')).render(<App/>)