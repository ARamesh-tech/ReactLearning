// let h1=document.createElement("h1")
// h1.innerHTML="Hello World"

let div_root=document.querySelector(".root")
// div_root.appendChild(h1)

let h1=React.createElement("h1",null,"Hello, I am A Ramesh kumaran")
ReactDOM.createRoot(div_root).render(h1)